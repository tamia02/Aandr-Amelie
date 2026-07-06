"use server";

import { cookies, headers } from "next/headers";
import { z } from "zod";
import { prisma } from "@/lib/db";
import { products as catalog } from "@/data/products";
import { checkRateLimit } from "@/lib/rate-limit";

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
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;

export type PlaceOrderResult =
  | { ok: true; orderId: string }
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
    const shippingCents =
      subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS ? 0 : FLAT_SHIPPING_CENTS;
    const totalCents = subtotalCents + shippingCents;

    const order = await prisma.$transaction(async (tx) => {
      const created = await tx.order.create({
        data: {
          customerName: data.customerName,
          email: data.email,
          phone: data.phone,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2 || null,
          city: data.city,
          state: data.state,
          pincode: data.pincode,
          subtotalCents,
          shippingCents,
          totalCents,
          items: { create: orderItems },
        },
      });

      for (const item of data.items) {
        await tx.product.update({
          where: { slug: item.slug },
          data: { stock: { decrement: item.qty } },
        });
      }

      return created;
    });

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
  } catch (error) {
    console.error("placeOrder: database unavailable", error);
    return { ok: false, error: "We couldn't place your order right now. Please try again shortly." };
  }
}

export async function checkPincode(
  pincode: string,
): Promise<{ available: boolean; message: string }> {
  if (!/^\d{6}$/.test(pincode.trim())) {
    return { available: false, message: "Enter a valid 6-digit pincode" };
  }
  // Mock serviceability check — always available for now.
  // Swap for a real courier API (Shiprocket/Delhivery) when ready.
  return { available: true, message: "Delivery available. Estimated 3-5 days." };
}
