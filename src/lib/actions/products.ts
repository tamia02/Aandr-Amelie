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
  const fallback: Record<string, Commerce> = {};
  for (const slug of slugs) {
    if (slug === "the-trial-pack") {
      fallback[slug] = { slug, priceCents: 55000, compareAtPriceCents: 100000, currency: "INR", stock: 50 };
    } else if (slug.includes("multani-mitti") || slug.includes("clay")) {
      fallback[slug] = { slug, priceCents: 25000, compareAtPriceCents: 45000, currency: "INR", stock: 50 };
    } else {
      fallback[slug] = { slug, priceCents: 85000, compareAtPriceCents: 210000, currency: "INR", stock: 50 };
    }
  }

  try {
    const rows = await prisma.product.findMany({
      where: { slug: { in: slugs } },
    });
    
    if (rows.length > 0) {
      const dbResult = Object.fromEntries(rows.map((row) => {
        return [row.slug, row];
      }));
      // Merge db results over fallbacks
      return { ...fallback, ...dbResult };
    }
  } catch (error) {
    console.error("getCommerceForSlugs: database unavailable", error);
  }

  return fallback;
}
