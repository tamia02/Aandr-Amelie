"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";

const updateProductSchema = z.object({
  slug: z.string().min(1),
  priceCents: z.coerce.number().int().nonnegative(),
  stock: z.coerce.number().int().nonnegative(),
});

export async function updateProduct(formData: FormData) {
  await requireAdmin();

  const parsed = updateProductSchema.safeParse({
    slug: formData.get("slug"),
    priceCents: formData.get("priceCents"),
    stock: formData.get("stock"),
  });
  if (!parsed.success) return;

  try {
    await prisma.product.update({
      where: { slug: parsed.data.slug },
      data: { priceCents: parsed.data.priceCents, stock: parsed.data.stock },
    });
  } catch (error) {
    console.error("updateProduct: database unavailable", error);
    return;
  }

  revalidatePath("/admin/products");
}
