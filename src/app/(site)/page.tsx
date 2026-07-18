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
import NewsletterForm from "@/components/NewsletterForm";
import VideoTestimonials from "@/components/VideoTestimonials";
import WhatCustomersSay from "@/components/WhatCustomersSay";
import HeroVideo from "@/components/HeroVideo";

const VALUES = [
  {
    title: "100% Handmade",
    text: "Every jar, balm, and serum is handcrafted by skilled artisans.",
    icon: (
      <path d="M12 3c-4 3-6 6-6 10a6 6 0 0 0 12 0c0-4-2-7-6-10Z M12 22v-9" />
    ),
  },
  {
    title: "Organic Botanicals",
    text: "Carefully harvested roses, herbs, oils, and botanicals at peak freshness.",
    icon: <path d="M9 2h6 M10 2v6l-5 10a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-10V2" />,
  },
  {
    title: "Cruelty-Free",
    text: "Our formulations are paraben-free, sulfate-free, cruelty-free, and free from harsh chemicals.",
    icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />,
  },
];

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
          <Reveal className="max-w-2xl px-5 sm:px-0">
            <span className="mb-4 block text-[10px] font-semibold tracking-[0.3em] text-cream/90 uppercase">
              The Collection
            </span>
            <h1 className="mb-6 font-serif text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl italic">
              All Shades,<br />All Souls.
            </h1>
            <div className="mb-6 h-px w-16 bg-cream/50" />
            <p className="mb-8 max-w-lg font-sans text-sm leading-relaxed text-cream sm:text-base drop-shadow-md">
              Luxury organic skincare crafted in harmony with nature. Because true beauty is about revealing the healthiest, most radiant version of yourself.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/shop">Browse Products</Button>
              <Button href="/our-story" variant="ghost" className="border-cream text-cream hover:border-cream/70 hover:text-cream/90">
                Our Story
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy pull-quote strip */}
      <section className="flex items-center justify-center overflow-hidden bg-cream px-5 py-12 sm:px-10 sm:py-8 border-b border-sun-terracotta/20">
        <Reveal className="max-w-3xl text-center border-y-2 border-double border-sun-terracotta/30 py-12">
          <span className="mb-6 block font-sans text-[10px] font-semibold tracking-[0.3em] text-sun-terracotta uppercase">
            Our Ethos
          </span>
          <p className="font-serif text-2xl sm:text-3xl leading-relaxed text-charcoal/90 italic">
            "Just as the sun and moon share the same sky, we believe every individual deserves skincare
            that respects their unique skin rather than trying to change it."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-sun-terracotta/30" />
            <span className="font-sans text-[10px] tracking-widest text-sun-terracotta/70 uppercase">
              All Shades. All Souls.
            </span>
            <span className="h-px w-12 bg-sun-terracotta/30" />
          </div>
        </Reveal>
      </section>

      {/* Asymmetric product grid */}
      <ProductGrid />

      {/* Trial Pack Section */}
      <section className="bg-cream-deep px-5 py-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1024px]">
          <div className="flex flex-row items-stretch overflow-hidden bg-cream border border-outline-variant/30">
            {/* Left Content */}
            <div className="flex w-1/2 flex-col justify-center p-4 sm:p-8 lg:p-10 border-r border-sun-terracotta/20">
              <span className="mb-4 block text-[10px] font-semibold tracking-[0.25em] text-sun-terracotta-dark uppercase">
                The Trial Pack
              </span>
              <h2 className="mb-4 font-serif text-2xl leading-tight text-charcoal sm:text-3xl italic">
                The Symbolism Behind<br />Aandré Amelie
              </h2>
              <div className="mb-4 h-px w-12 bg-sun-terracotta/30" />
              <p className="mb-4 font-sans text-xs leading-relaxed text-charcoal/80">
                The name Aandré Amelie represents the perfect balance of two timeless forces.
                Aandré embodies the warmth, strength, confidence, and life-giving energy of the sun.
                Amelie reflects the calm, grace, intuition, and serenity of the moon.
              </p>
              <h3 className="mb-2 font-serif text-lg font-semibold text-charcoal">Handcrafted with Purpose</h3>
              <p className="mb-6 font-sans text-xs leading-relaxed text-charcoal/80">
                In our identity, Aandré and Amelie stand back-to-back—not in opposition, but in unwavering
                support of one another. Their connection symbolizes trust, acceptance, equality, and
                unconditional respect.
              </p>
              <div>
                <Button href="/shop/the-trial-pack">
                  Shop Trial Pack — ₹1,000
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative min-h-[250px] w-1/2 bg-cream-deep sm:min-h-[300px]">
              <Image
                src="/images/DSC00800.JPG"
                alt="Aandré Amelie Trial Pack"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Purity / values strip */}
      <section className="border-y border-sun-terracotta/20 bg-cream px-5 py-12 sm:px-10 sm:py-8">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left divide-y md:divide-y-0 md:divide-x divide-sun-terracotta/20">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90} className="space-y-4 pt-10 first:pt-0 md:pt-0 md:px-10 md:first:pl-0 md:last:pr-0 flex flex-col items-center md:items-start">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-sun-terracotta/20 bg-cream-deep">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-8 w-8 text-sun-terracotta"
                  aria-hidden="true"
                >
                  {v.icon}
                </svg>
              </div>
              <h4 className="font-serif text-xl text-charcoal italic">{v.title}</h4>
              <p className="font-sans text-xs leading-relaxed text-charcoal/70">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What Customers Say */}
      <section className="bg-cream-deep px-5 pt-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <WhatCustomersSay subject="Aandré Amelie" />
        </div>
      </section>

      {/* Brand Video Accordion */}
      <section className="bg-cream-deep px-5 pt-10 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <details className="group outline-none">
            <summary className="flex cursor-pointer list-none items-center justify-between border-b border-outline-variant/30 pb-4 font-serif text-2xl text-charcoal outline-none transition-colors hover:text-sun-terracotta select-none sm:text-4xl">
              <span>What Customers Say About Us</span>
              <span className="text-3xl text-outline/50 transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="mt-4 pb-10">
              <VideoTestimonials />
            </div>
          </details>
        </div>
      </section>

      {/* Email signup band */}
      <section className="relative overflow-hidden bg-moon-indigo py-12 sm:py-16 text-cream">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-8 px-5 sm:px-10 md:flex-row lg:px-16">
          <Reveal className="md:max-w-lg">
            <h2 className="mb-3 font-serif text-3xl">Enter the inner circle.</h2>
            <p className="font-sans text-sm text-cream/70">
              Join our journal for lunar-cycle rituals, product launches, and
              exclusive apothecary insights.
            </p>
          </Reveal>
          <Reveal delay={120} className="w-full md:w-auto">
            <NewsletterForm tone="dark" />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

async function ProductGrid() {
  const selectedSlugs = [
    "royal-rose-elixir",
    "glow-quinch-elixir",
    "acne-shield",
    "vital-grow-scalp",
    "super-fine-multani-mitti",
    "imported-pink-clay",
    "neem-and-multani-mitti",
    "rose-and-sandal-multani-mitti"
  ];
  const featuredProducts = selectedSlugs.map(slug => products.find(p => p.slug === slug)).filter(Boolean) as typeof products;

  const commerce = await getCommerceForSlugs(featuredProducts.map((p) => p.slug));
  const priceOf = (slug: string) =>
    commerce[slug] ? formatINR(commerce[slug].priceCents) : undefined;

  return (
    <section className="bg-cream-deep px-5 py-12 sm:px-10 sm:py-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 sm:mb-12 flex flex-col items-end justify-between gap-4 sm:flex-row">
          <Reveal>
            <SectionHeader title="Curation for the Discerning." className="max-w-sm" />
            <p className="mt-3 font-sans text-xs text-charcoal/70">
              Small batches, high-potency ingredients, and tactile pleasure
              in every bottle and jar.
            </p>
          </Reveal>
          <Link
            href="/shop"
            className="border-b border-charcoal/40 pb-2 font-sans text-xs font-semibold tracking-widest text-charcoal uppercase hover:border-moon-indigo hover:text-moon-indigo"
          >
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <ProductCard product={product} price={priceOf(product.slug)} ratio="aspect-[4/5]" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
