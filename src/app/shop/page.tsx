import type { Metadata } from "next";
import { products } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Shop All Products",
  description:
    "Explore our hydrosol elixirs and scalp care — pure, organic, multi-use skincare rituals.",
};

export default async function ShopPage() {
  const commerce = await getCommerceForSlugs(products.map((p) => p.slug));
  const priceOf = (slug: string) =>
    commerce[slug] ? formatINR(commerce[slug].priceCents) : undefined;

  const [p1, p2, p3, p4] = products;

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-32 sm:px-10 sm:pt-24 lg:px-16">
      {/* Hero */}
      <section className="mb-24 max-w-4xl sm:mb-32">
        <Reveal>
          <h1 className="mb-6 font-serif text-6xl leading-[1.05] sm:text-7xl">
            The Botanical
            <br />
            <span className="font-normal italic">Edit</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            A curated selection of apothecary essentials designed to balance
            the solar energy of the day with the lunar restoration of night.
          </p>
        </Reveal>
      </section>

      {/* Filter bar */}
      <div className="mb-16 flex items-end justify-between border-b border-outline-variant/30 pb-4">
        <span className="text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
          {products.length} Objects
        </span>
        <span className="text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
          Sort: Featured
        </span>
      </div>

      {/* Editorial asymmetric grid */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-24 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <ProductCard product={p1} price={priceOf(p1.slug)} />
        </Reveal>
        <Reveal delay={90} className="self-center md:col-span-4 md:col-start-9">
          <ProductCard product={p2} price={priceOf(p2.slug)} ratio="aspect-[3/4]" />
        </Reveal>
        <Reveal delay={180} className="md:col-span-5">
          <ProductCard product={p3} price={priceOf(p3.slug)} ratio="aspect-square" />
        </Reveal>
        <Reveal delay={270} className="md:col-span-5 md:col-start-7">
          <ProductCard product={p4} price={priceOf(p4.slug)} ratio="aspect-square" />
        </Reveal>
      </div>
    </div>
  );
}
