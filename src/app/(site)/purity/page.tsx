import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Purity & Sourcing | Aandré Amelie",
  description:
    "Organic sourcing, ethical farming, and the promise behind every Aandré Amelie product.",
};

const TRUST_SIGNALS = [
  {
    title: "100% Handmade",
    description: "Every jar, balm, and serum is handcrafted by skilled artisans.",
  },
  {
    title: "Organic Botanicals",
    description: "Carefully harvested roses, herbs, oils, and botanicals at peak freshness.",
  },
  {
    title: "Cruelty-Free",
    description: "Paraben-free, sulfate-free, cruelty-free, and free from harsh chemicals.",
  },
  {
    title: "Supports Farmers",
    description: "Creating meaningful employment opportunities for rural communities.",
  },
];

export default function PurityPage() {
  return (
    <div>
      {/* Hero */}
      <header className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <span className="mb-6 block text-xs font-sans tracking-[0.2em] text-sun-terracotta uppercase">
              Our Promise to You
            </span>
            <h1 className="mb-8 font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
              Beauty Rooted in
              <br />
              <span className="font-serif italic">Nature.</span>
            </h1>
            <p className="mb-10 max-w-md text-base font-sans leading-relaxed text-charcoal/70 sm:text-lg">
              Luxury organic skincare handcrafted with handpicked ingredients, artisan care, and a commitment to farming families across India.
            </p>
            <Button href="/shop">Explore Our Botanicals</Button>
          </Reveal>
          <Reveal delay={120} className="relative md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/stitch/purity-hero-garden.jpg"
                alt="Botanical rose garden at dawn"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden max-w-[280px] bg-cream-deep p-8 md:block">
              <p className="font-serif text-lg leading-snug italic">
                &ldquo;Nature does not hurry, yet everything is
                accomplished.&rdquo;
              </p>
              <span className="mt-4 block text-[10px] font-sans tracking-widest uppercase">
                — Aandré Amelie
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Why Aandre Amelie? */}
      <section className="bg-cream-deep py-10 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase block mb-3">
              Why Aandre Amelie?
            </span>
            <h2 className="mb-6 font-serif text-3xl sm:text-4xl">
              Handpicked Ingredients
            </h2>
            <p className="text-sm font-sans text-charcoal/70">
              We work with Indian farmers and farming families who carefully harvest roses, herbs, oils, and botanicals at peak freshness to preserve their natural potency.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="relative mb-6 h-[500px] overflow-hidden">
                <Image
                  src="/images/lavender1.png"
                  alt="Lavender botanicals used in our formulas"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <span className="text-xs font-sans tracking-widest text-sun-terracotta uppercase">
                Farm to Face Promise
              </span>
              <h3 className="mt-2 mb-4 font-serif text-2xl">At Aandre Amelie, skincare begins in the fields.</h3>
              <p className="max-w-lg text-sm font-sans text-charcoal/70 mb-4">
                We partner with small Indian farms where red roses, herbs, and botanical ingredients are grown naturally and harvested by hand.
              </p>
              <p className="max-w-lg text-sm font-sans text-charcoal/70">
                This direct relationship allows us to support farming families while ensuring every ingredient reaches your skin at its freshest and most effective.
              </p>
            </Reveal>

            <div className="flex flex-col gap-12 md:col-span-5">
              <Reveal delay={90} className="flex items-start gap-6">
                <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-outline-variant/20">
                  <Image
                    src="/images/stitch/sandalwood-macro.jpg"
                    alt="Macro shot of ingredients"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                    Our Methods
                  </span>
                  <h4 className="mb-2 font-serif text-xl leading-tight">
                    Small-Batch Production
                  </h4>
                  <p className="text-sm font-sans text-charcoal/70">
                    Unlike mass-produced cosmetics, our small-batch skincare is crafted in limited quantities to maintain exceptional quality, freshness, and attention to detail.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180} className="flex items-start gap-6">
                <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-outline-variant/20">
                  <Image
                    src="/images/stitch/lavender-field.jpg"
                    alt="Lavender fields"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                    Ethical Beauty
                  </span>
                  <h4 className="mb-2 font-serif text-xl leading-tight">
                    Clean &amp; Conscious Beauty
                  </h4>
                  <p className="text-sm font-sans text-charcoal/70">
                    Our formulations are paraben-free, sulfate-free, cruelty-free, and free from harsh chemicals, designed for healthy, radiant skin.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={270} className="flex items-start gap-6">
                <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-outline-variant/20">
                  <Image
                    src="/images/stitch/lab-distillation.jpg"
                    alt="Craftsmanship"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                    Social Impact
                  </span>
                  <h4 className="mb-2 font-serif text-xl leading-tight">
                    Handmade with Purpose
                  </h4>
                  <p className="text-sm font-sans text-charcoal/70">
                    Every jar, balm, and serum is handcrafted by skilled artisans, creating meaningful employment opportunities for rural communities and women-led households.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals & Brand Story */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-10 sm:py-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <Reveal className="relative md:col-span-6">
            <h2 className="mb-8 font-serif text-4xl leading-tight">
              Brand Story
            </h2>
            <div className="space-y-6 text-base font-sans text-charcoal/80">
              <p>
                Aandre Amelie is a premium organic skincare brand in India dedicated to creating handmade, chemical-free skincare using handpicked botanical ingredients.
              </p>
              <p>
                Inspired by the richness of Indian farms and traditional craftsmanship, our products are made in small batches to preserve freshness, purity, and performance.
              </p>
              <p>
                By choosing handwork over mass production, we help create sustainable employment for farmers, artisans, and their families while delivering luxury skincare that is kind to your skin and the planet.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:col-start-8">
            <div className="border border-outline-variant/30 p-10 bg-cream">
              <h3 className="mb-8 font-serif text-3xl">Trust Signals</h3>
              <div className="space-y-8">
                {TRUST_SIGNALS.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sun-terracotta" />
                    <div>
                      <h5 className="mb-2 text-sm font-sans font-semibold tracking-wide uppercase">
                        {item.title}
                      </h5>
                      <p className="text-sm font-sans text-charcoal/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Purity quote */}
      <section className="relative flex items-center justify-center overflow-hidden py-12 bg-cream-deep/40 border-t border-outline-variant/15">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute font-serif text-[22vw] leading-none text-charcoal/5 select-none"
        >
          NATURE
        </span>
        <Reveal className="relative z-10 mx-auto max-w-4xl px-5 text-center">
          <PullQuote>
            By choosing organic farming and avoiding harmful chemicals, we ensure that every product reflects true quality and natural goodness. This commitment is part of our philosophy—All Shades, All Souls—celebrating the beauty of every skin tone.
          </PullQuote>
          <p className="mt-12 text-xs font-sans tracking-[0.2em] text-sun-terracotta uppercase">
            — Farm to Face • Handmade in Small Batches • Cruelty-Free • Sustainably Crafted
          </p>
        </Reveal>
      </section>
    </div>
  );
}
