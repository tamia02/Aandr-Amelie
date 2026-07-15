import Link from "next/link";
import Image from "next/image";
import { products, getProduct } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import PullQuote from "@/components/PullQuote";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import HeroVideo from "@/components/HeroVideo";

export default function Home() {
  return (
    <div>
      {/* Video Hero */}
      <section className="relative flex h-screen w-full items-center overflow-hidden">
        <HeroVideo
          src="/videos/aandre.mp4"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <Reveal className="max-w-3xl">
            <h1 className="mb-6 font-serif text-5xl leading-[1.05] text-cream sm:text-6xl md:text-[72px]">
              Where the Sun Meets the Moon.
            </h1>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
              Skincare crafted in the harmony of contrasts — for every shade,
              every soul. Experience the restorative calm of the moon and the
              radiant energy of the sun.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Button href="/shop">Browse Products</Button>
              <Button href="/our-story" variant="ghost" className="border-cream/40 text-cream hover:border-cream hover:text-cream">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy pull-quote strip */}
      <section className="flex items-center justify-center overflow-hidden bg-cream px-5 py-16 sm:px-10 sm:py-32">
        <Reveal className="max-w-4xl text-center">
          <span className="mb-6 block text-xs font-semibold tracking-[0.3em] text-sun-terracotta uppercase">
            Our Ethos
          </span>
          <PullQuote>
            True radiance is not a finish, but a balance. Like the lunar
            cycle and the solar path, your skin thrives in the equilibrium of
            gentle restoration and potent vitality.
          </PullQuote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-outline-variant" />
            <span className="text-xs tracking-widest text-outline uppercase">
              The Alchemical Balance
            </span>
            <span className="h-px w-12 bg-outline-variant" />
          </div>
        </Reveal>
      </section>

      {/* Asymmetric product grid */}
      <ProductGrid />
    </div>
  );
}

async function ProductGrid() {
  const commerce = await getCommerceForSlugs(products.map((p) => p.slug));
  const priceOf = (slug: string) =>
    commerce[slug] ? formatINR(commerce[slug].priceCents) : undefined;

  const [p1, p2, p3, p4] = products;

  return (
    <section className="bg-cream-deep px-5 py-16 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 sm:mb-20 flex flex-col items-end justify-between gap-6 sm:flex-row">
          <Reveal>
            <SectionHeader title="Curation for the Discerning." className="max-w-md" />
            <p className="mt-4 text-sm text-charcoal/70">
              Small batches, high-potency ingredients, and tactile pleasure
              in every bottle.
            </p>
          </Reveal>
          <Link
            href="/shop"
            className="border-b border-charcoal/40 pb-2 text-xs font-semibold tracking-widest text-charcoal uppercase hover:border-moon-indigo hover:text-moon-indigo"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-4">
          <Reveal>
            <ProductCard product={p1} price={priceOf(p1.slug)} ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={90}>
            <ProductCard product={p2} price={priceOf(p2.slug)} ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={180}>
            <ProductCard product={p3} price={priceOf(p3.slug)} ratio="aspect-[4/5]" />
          </Reveal>
          <Reveal delay={270}>
            <ProductCard product={p4} price={priceOf(p4.slug)} ratio="aspect-[4/5]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
