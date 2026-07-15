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
    <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-32 sm:px-10 sm:pt-24 lg:px-16">
      {/* Hero */}
      <section className="mb-20 max-w-4xl sm:mb-28">
        <Reveal>
          <h1 className="mb-6 font-serif text-6xl leading-[1.05] sm:text-7xl">
            The Botanical
            <br />
            <span className="font-normal italic">Edit</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            Every piece, ready to shop in a click. Curious about the story
            behind it? It&rsquo;s here too — entirely optional.
          </p>
        </Reveal>
      </section>

      {/* Signature / bestseller */}
      <section className="mb-24 sm:mb-32">
        <span className="mb-6 block text-xs font-semibold tracking-[0.25em] text-sun-terracotta-dark uppercase">
          Our Bestseller
        </span>
        <Reveal className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <MediaVisual
              image={signature.image}
              variant={signature.placeholder}
              label={signature.name}
              objectPosition="center"
              ratio="aspect-[4/5]"
              priority
            />
          </div>
          <div className="md:col-span-5">
            <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-charcoal/50 uppercase">
              {signature.category}
            </span>
            <h2 className="font-serif text-4xl text-charcoal sm:text-5xl">
              {signature.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/70">
              {signature.hook}
            </p>
            <div className="mt-8 flex items-center gap-6">
              <Button href={`/shop/${signature.slug}`}>Shop Now</Button>
              {priceOf(signature.slug) && (
                <span className="text-sm font-semibold text-charcoal">
                  {priceOf(signature.slug)}
                </span>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Shop all */}
      <section>
        <div className="mb-12 flex items-end justify-between border-b border-outline-variant/30 pb-4">
          <h2 className="font-serif text-2xl text-charcoal">Shop All</h2>
          <span className="text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
            {products.length} Objects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
}
