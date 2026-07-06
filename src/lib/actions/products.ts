"use server";

import { prisma } from "@/lib/db";

export interface Commerce {
  slug: string;
  priceCents: number;
  compareAtPriceCents: number | null;
  currency: string;
  stock: number;
}

export async function getCommerceForSlugs(
  slugs: string[],
): Promise<Record<string, Commerce>> {
  try {
    const rows = await prisma.product.findMany({
      where: { slug: { in: slugs } },
    });
    return Object.fromEntries(rows.map((row) => [row.slug, row]));
  } catch (error) {
    console.error("getCommerceForSlugs: database unavailable", error);
    return {};
  }
}
