"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { ORDER_STATUSES } from "@/lib/order-status";
import { requireAdmin } from "@/lib/admin-auth";

const updateStatusSchema = z.object({
  orderId: z.string().min(1),
  status: z.enum(ORDER_STATUSES),
});

export async function updateOrderStatus(formData: FormData) {
  await requireAdmin();

  const parsed = updateStatusSchema.safeParse({
    orderId: formData.get("orderId"),
    status: formData.get("status"),
  });
  if (!parsed.success) return;

  try {
    await prisma.order.update({
      where: { id: parsed.data.orderId },
      data: { status: parsed.data.status },
    });
  } catch (error) {
    console.error("updateOrderStatus: database unavailable", error);
    return;
  }

  revalidatePath("/admin/orders");
  revalidatePath(`/admin/orders/${parsed.data.orderId}`);
}
