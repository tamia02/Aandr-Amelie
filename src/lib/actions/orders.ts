"use server";

import { cookies, headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/db";
import Razorpay from "razorpay";
import { products as catalog } from "@/data/products";
import { checkRateLimit } from "@/lib/rate-limit";
import { createOrder as syncOrderToIThink, checkServiceability } from "@/lib/ithinklogistics";

const FREE_SHIPPING_THRESHOLD_CENTS = 49900; // ₹499
const FLAT_SHIPPING_CENTS = 5000; // ₹50

const checkoutSchema = z.object({
  customerName: z.string().trim().min(2, "Enter your full name"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(10, "Enter a valid phone number"),
  addressLine1: z.string().trim().min(3, "Enter your address"),
  addressLine2: z.string().trim().optional(),
  city: z.string().trim().min(2, "Enter your city"),
  state: z.string().trim().min(2, "Enter your state"),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit pincode"),
  items: z
    .array(
      z.object({
        slug: z.string(),
        qty: z.number().int().positive(),
      }),
    )
    .min(1, "Your cart is empty"),
  paymentMethod: z.enum(["cod", "razorpay"]).default("cod"),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

export type PlaceOrderResult =
  | { ok: true; orderId: string; razorpayOrderId?: string; amount?: number }
  | { ok: false; error: string };

export async function placeOrder(
  input: CheckoutInput,
): Promise<PlaceOrderResult> {
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const allowed = checkRateLimit(`placeOrder:${ip}`, { max: 5, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return { ok: false, error: "Too many orders placed. Please try again in a few minutes." };
  }

  const parsed = checkoutSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid order details" };
  }
  const data = parsed.data;

  try {
    const dbProducts = await prisma.product.findMany({
      where: { slug: { in: data.items.map((i) => i.slug) } },
    });
    const bySlug = Object.fromEntries(dbProducts.map((p) => [p.slug, p]));

    for (const item of data.items) {
      const product = bySlug[item.slug];
      if (!product) return { ok: false, error: "One of the items in your cart is no longer available" };
      if (product.stock < item.qty) {
        const name = catalog.find((p) => p.slug === item.slug)?.name ?? item.slug;
        return { ok: false, error: `Not enough stock for ${name}` };
      }
    }

    const orderItems = data.items.map((item) => {
      const product = bySlug[item.slug];
      const name = catalog.find((p) => p.slug === item.slug)?.name ?? item.slug;
      const totalCents = product.priceCents * item.qty;
      return {
        productSlug: item.slug,
        name,
        unitPriceCents: product.priceCents,
        qty: item.qty,
        totalCents,
      };
    });

    const subtotalCents = orderItems.reduce((sum, i) => sum + i.totalCents, 0);
    const discountCents = Math.floor(subtotalCents * 0.10);
    const discountedSubtotal = subtotalCents - discountCents;
    const shippingCents =
      discountedSubtotal >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : FLAT_SHIPPING_CENTS;
    const totalCents = discountedSubtotal + shippingCents;

    const order = await prisma.$transaction(async (tx) => {
      const customer = await tx.customer.upsert({
        where: { email: data.email },
        create: {
          email: data.email,
          name: data.customerName,
          phone: data.phone,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || null,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
        },
        update: {
          name: data.customerName,
          phone: data.phone,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || null,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
        },
      });

      const created = await tx.order.create({
        data: {
          customerId: customer.id,
          customerName: data.customerName,
          email: data.email,
          phone: data.phone,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || null,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          paymentMethod: data.paymentMethod,
          status: "pending",
          subtotalCents,
          shippingCents,
          totalCents,
          items: { create: orderItems },
        },
      });

      // Only decrement stock immediately for COD
      if (data.paymentMethod === "cod") {
        for (const item of data.items) {
          await tx.product.update({
            where: { slug: item.slug },
            data: { stock: { decrement: item.qty } },
          });
        }
      }

      return created;
    });

    // If COD, sync to iThink Logistics immediately since order is confirmed
    if (data.paymentMethod === "cod") {
      const orderWithItems = await prisma.order.findUnique({
        where: { id: order.id },
        include: { items: true },
      });
      if (orderWithItems) {
        await syncOrderToIThink(orderWithItems);
      }
    }

    if (data.paymentMethod === "razorpay") {
      if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        console.error("placeOrder: RAZORPAY_KEY_ID/RAZORPAY_KEY_SECRET not configured");
        return { ok: false, error: "Payment gateway is not configured. Please try again shortly." };
      }

      const razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });

      try {
        const rzpOrder = await razorpay.orders.create({
          amount: totalCents,
          currency: "INR",
          receipt: order.id,
        });

        // Update the order with the razorpay order id
        await prisma.order.update({
          where: { id: order.id },
          data: { razorpayOrderId: rzpOrder.id },
        });

        return {
          ok: true,
          orderId: order.id,
          razorpayOrderId: rzpOrder.id,
          amount: totalCents,
        };
      } catch (err) {
        console.error("Razorpay order creation failed:", err);
        return { ok: false, error: "Failed to initialize payment gateway." };
      }
    }

    // COD Flow: Set cookie for order confirmation page

    // Short-lived proof of "you just placed this order" — lets the
    // confirmation page show full contact/address details right after
    // checkout, without leaving a link that exposes PII to anyone who
    // later gets hold of the URL (browser history, screenshot, etc.).
    (await cookies()).set(`order_access_${order.id}`, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 60,
      path: `/order-confirmation/${order.id}`,
    });

    return { ok: true, orderId: order.id };
  } catch (error: any) {
    console.error("placeOrder: database unavailable", error);
    return { ok: false, error: `We couldn't place your order right now: ${error.message || String(error)}` };
  }
}

export async function checkPincode(
  pincode: string,
): Promise<{ available: boolean; message: string }> {
  if (!/^\d{6}$/.test(pincode.trim())) {
    return { available: false, message: "Enter a valid 6-digit pincode" };
  }
  
  // Real serviceability check using iThink Logistics API
  return await checkServiceability(pincode.trim());
}

export async function verifyRazorpayPayment(
  orderId: string,
  razorpayPaymentId: string,
  razorpayOrderId: string,
  razorpaySignature: string
): Promise<{ ok: boolean; error?: string }> {
  const crypto = await import("crypto");
  const secret = process.env.RAZORPAY_KEY_SECRET;

  if (!secret) {
    console.error("verifyRazorpayPayment: RAZORPAY_KEY_SECRET not configured");
    return { ok: false, error: "Server configuration error" };
  }

  const generatedSignature = crypto
    .createHmac("sha256", secret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");

  if (generatedSignature !== razorpaySignature) {
    return { ok: false, error: "Invalid payment signature" };
  }

  try {
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: { items: true },
    });

    if (!order) {
      return { ok: false, error: "Order not found" };
    }

    if (order.status === "confirmed") {
      return { ok: true }; // Already confirmed
    }

    await prisma.$transaction(async (tx) => {
      await tx.order.update({
        where: { id: orderId },
        data: {
          status: "confirmed",
          razorpayPaymentId,
          razorpaySignature,
        },
      });

      // Decrement stock now that payment is confirmed
      for (const item of order.items) {
        await tx.product.update({
          where: { slug: item.productSlug },
          data: { stock: { decrement: item.qty } },
        });
      }
    });

    // Sync prepaid order to iThink Logistics now that it's confirmed
    await syncOrderToIThink(order);

    // Set short-lived proof for confirmation page
    (await cookies()).set(`order_access_${order.id}`, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 15 * 60,
      path: `/order-confirmation/${order.id}`,
    });

    return { ok: true };
  } catch (error) {
    console.error("verifyRazorpayPayment error", error);
    return { ok: false, error: "Failed to verify payment." };
  }
}

export async function getLatestDeliveryInfo(email: string) {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return null;
  }

  try {
    const customer = await prisma.customer.findUnique({
      where: { email },
      select: {
        name: true,
        phone: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        pincode: true,
      }
    });
    
    if (customer) {
      return {
        customerName: customer.name,
        phone: customer.phone,
        addressLine1: customer.addressLine1,
        addressLine2: customer.addressLine2,
        city: customer.city,
        state: customer.state,
        pincode: customer.pincode,
      };
    }
    
    // Fallback to latest order if customer record doesn't exist
    const latestOrder = await prisma.order.findFirst({
      where: { email },
      orderBy: { createdAt: 'desc' },
      select: {
        customerName: true,
        phone: true,
        addressLine1: true,
        addressLine2: true,
        city: true,
        state: true,
        pincode: true,
      }
    });
    
    return latestOrder;
  } catch (error) {
    console.error("Failed to fetch latest delivery info:", error);
    return null;
  }
}
