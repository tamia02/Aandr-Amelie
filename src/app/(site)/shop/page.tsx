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
    <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-16 sm:px-10 sm:pt-12 lg:px-16">
      {/* Hero */}
      <section className="mb-10 sm:mb-16 flex flex-col items-center border-y border-sun-terracotta/20 py-10 text-center">
        <Reveal>
          <span className="mb-4 block text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-sun-terracotta-dark uppercase">
            Aandré Amelie
          </span>
          <h1 className="mb-4 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
            The Botanical
            <br />
            <span className="font-normal italic">Edit</span>
          </h1>
          <div className="mx-auto mt-6 h-px w-16 bg-sun-terracotta/30" />
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal/70 sm:text-base">
            Every piece, ready to shop in a click. Curious about the story
            behind it? It&rsquo;s here too — entirely optional.
          </p>
        </Reveal>
      </section>

      {/* Shop all */}
      <section className="mb-16 sm:mb-24">
        <div className="mb-8 flex items-end justify-between border-b border-sun-terracotta/30 pb-3">
          <h2 className="font-serif text-xl sm:text-2xl text-charcoal italic">Shop All</h2>
          <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
            {products.length} Objects
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
          <Reveal>
            <ProductCard product={signature} price={priceOf(signature.slug)} ratio="aspect-square" />
          </Reveal>
          {rest.map((product, i) => (
            <Reveal key={product.slug} delay={(i + 1) * 90}>
              <ProductCard product={product} price={priceOf(product.slug)} ratio="aspect-square" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Signature / bestseller */}
      <section className="border border-sun-terracotta/20 bg-cream-deep p-6 sm:p-10">
        <Reveal className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6 border border-sun-terracotta/10">
            <MediaVisual
              image={signature.image}
              variant={signature.placeholder}
              label={signature.name}
              ratio="aspect-[4/5]"
              fit="cover"
              priority
            />
          </div>
          <div className="md:col-span-6 text-center md:text-left flex flex-col items-center md:items-start">
            <span className="mb-2 block text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-sun-terracotta-dark uppercase">
              Our Bestseller
            </span>
            <span className="mb-4 block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-charcoal/50 uppercase">
              {signature.category}
            </span>
            <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">
              {signature.name}
            </h2>
            <div className="mt-4 mb-4 h-px w-12 bg-sun-terracotta/30 md:ml-0" />
            <p className="text-sm leading-relaxed text-charcoal/70 sm:text-base">
              {signature.hook}
            </p>
            <div className="mt-8 flex flex-col items-center md:items-start gap-4">
              {priceOf(signature.slug) && (
                <span className="text-sm font-semibold text-charcoal">
                  {priceOf(signature.slug)}
                </span>
              )}
              <Button href={`/shop/${signature.slug}`}>Shop Now</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
