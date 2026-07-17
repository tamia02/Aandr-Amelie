import type { Metadata } from "next";
import { products, getProduct } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import ProductCard from "@/components/ProductCard";
import MediaVisual from "@/components/MediaVisual";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Explore our hydrosol elixirs and scalp care — pure, organic, multi-use skincare rituals.",
};

const SIGNATURE_SLUG = "royal-rose-elixir";

export default async function ShopPage() {
  const commerce = await getCommerceForSlugs(products.map((p) => p.slug));
  const priceOf = (slug: string) =>
    commerce[slug] ? formatINR(commerce[slug].priceCents) : undefined;

  const signature = getProduct(SIGNATURE_SLUG)!;
  const rest = products.filter((p) => p.slug !== SIGNATURE_SLUG);

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-16 sm:px-10 lg:px-16">
      {/* Tiny Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-8 bg-sun-terracotta/40" />
        <h1 className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-sun-terracotta-dark uppercase">
          The Botanical Edit
        </h1>
      </div>

      {/* Shop all */}
      <section>
        <div className="mb-6 flex items-end justify-between border-b border-sun-terracotta/20 pb-2">
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
            {products.length} Objects
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-12">
          <Reveal>
            <ProductCard product={signature} price={priceOf(signature.slug)} ratio="aspect-square" />
          </Reveal>
          {rest.map((product, i) => (
            <Reveal key={product.slug} delay={(i + 1) * 50}>
              <ProductCard product={product} price={priceOf(product.slug)} ratio="aspect-square" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
