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
    let priceCents = 85000;
    
    if (slug === "the-trial-pack") {
      priceCents = 45000;
    } else if (slug.includes("mitti") || slug.includes("clay")) {
      priceCents = 25000;
    }

    fallback[slug] = { slug, priceCents, compareAtPriceCents: 210000, currency: "INR", stock: 50 };
  }

  try {
    const rows = await prisma.product.findMany({
      where: { slug: { in: slugs } },
    });
    
    if (rows.length > 0) {
      const dbResult = Object.fromEntries(rows.map((row) => [row.slug, row]));
      // Merge db results over fallbacks
      return { ...fallback, ...dbResult };
    }
  } catch (error) {
    console.error("getCommerceForSlugs: database unavailable", error);
  }

  return fallback;
}
