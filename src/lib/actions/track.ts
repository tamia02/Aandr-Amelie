"use server";

import { prisma } from "@/lib/db";

export async function trackOrder(orderId: string, email: string) {
  try {
    const order = await prisma.order.findFirst({
      where: {
        id: orderId.trim(),
        email: email.trim().toLowerCase(),
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      return { success: false, error: "Order not found. Please check your Order ID and Email." };
    }

    return { 
      success: true, 
      order: {
        id: order.id,
        createdAt: order.createdAt,
        status: order.status,
        totalCents: order.totalCents,
        items: order.items.map(item => ({
          name: item.name,
          qty: item.qty,
          unitPriceCents: item.unitPriceCents,
          totalCents: item.totalCents,
          productSlug: item.productSlug
        }))
      } 
    };
  } catch (error) {
    console.error("Failed to track order:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
