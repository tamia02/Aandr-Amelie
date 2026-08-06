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
      fallback[slug] = { slug, priceCents: 90000, compareAtPriceCents: 100000, currency: "INR", stock: 50 };
    } else {
      fallback[slug] = { slug, priceCents: 189000, compareAtPriceCents: 210000, currency: "INR", stock: 50 };
    }
  }

  try {
    const rows = await prisma.product.findMany({
      where: { slug: { in: slugs } },
    });
    
    if (rows.length > 0) {
      const dbResult = Object.fromEntries(rows.map((row) => {
        const compareAtPriceCents = row.compareAtPriceCents || row.priceCents;
        const priceCents = Math.round(compareAtPriceCents * 0.9);
        return [row.slug, { ...row, priceCents, compareAtPriceCents }];
      }));
      // Merge db results over fallbacks
      return { ...fallback, ...dbResult };
    }
  } catch (error) {
    console.error("getCommerceForSlugs: database unavailable", error);
  }

  return fallback;
}
