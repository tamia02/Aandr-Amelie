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
    if (rows.length > 0) {
      return Object.fromEntries(rows.map((row) => [row.slug, row]));
    }
  } catch (error) {
    console.error("getCommerceForSlugs: database unavailable", error);
  }

  // Fallback to static data if database is unavailable or empty
  const fallback: Record<string, Commerce> = {};
  for (const slug of slugs) {
    if (slug === "the-trial-pack") {
      fallback[slug] = { slug, priceCents: 100000, compareAtPriceCents: null, currency: "INR", stock: 50 };
    } else {
      fallback[slug] = { slug, priceCents: 210000, compareAtPriceCents: null, currency: "INR", stock: 50 };
    }
  }
  return fallback;
}
