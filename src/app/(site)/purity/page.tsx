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
    description: "Every product is handcrafted by skilled artisans.",
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
      <header className="mx-auto max-w-[1440px] px-5 pt-8 pb-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">
          <Reveal className="w-full max-w-3xl mb-6">
            <span className="mb-4 block text-[10px] sm:text-xs font-sans tracking-[0.2em] text-sun-terracotta uppercase">
              Our Promise to You
            </span>
            <h1 className="mb-4 font-serif text-3xl leading-tight sm:text-4xl">
              Beauty Rooted in <span className="font-serif italic">Nature.</span>
            </h1>
            <p className="mb-6 max-w-2xl mx-auto text-sm sm:text-base font-sans leading-relaxed text-charcoal/70">
              Luxury organic skincare handcrafted with handpicked ingredients, artisan care, and a commitment to farming families across India.
            </p>
            <Button href="/shop">Explore Our Botanicals</Button>
          </Reveal>
          <Reveal delay={120} className="relative w-full max-w-4xl mx-auto mt-4">
            <div className="relative w-full h-[200px] sm:h-[280px] overflow-hidden border border-outline-variant/20 shadow-sm">
              <Image
                src="/images/stitch/purity-hero-garden.jpg"
                alt="Botanical rose garden at dawn"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-4 right-4 sm:right-8 hidden max-w-[260px] bg-cream-deep p-4 sm:p-5 md:block shadow-sm border border-outline-variant/20 z-10">
              <p className="font-serif text-sm sm:text-base leading-snug italic">
                &ldquo;Nature does not hurry, yet everything is
                accomplished.&rdquo;
              </p>
              <span className="mt-2 block text-[9px] sm:text-[10px] font-sans tracking-widest uppercase text-charcoal/80">
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

          <div className="mx-auto max-w-4xl space-y-16 py-8">
            {/* Small-Batch Production */}
            <Reveal className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="relative aspect-square w-full max-w-[200px] shrink-0 overflow-hidden bg-outline-variant/20 rounded-full border border-sun-terracotta/20 shadow-sm flex items-center justify-center bg-cream text-sun-terracotta">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                  Quality & Freshness
                </span>
                <h4 className="mb-3 font-serif text-2xl leading-tight italic">
                  Small-Batch Production
                </h4>
                <p className="text-xs font-sans leading-relaxed text-charcoal/70">
                  Unlike mass-produced cosmetics, our small-batch skincare is crafted in limited quantities to maintain exceptional quality, freshness, and attention to detail.
                </p>
              </div>
            </Reveal>

            {/* Handmade with Purpose */}
            <Reveal delay={100} className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="relative aspect-square w-full max-w-[200px] shrink-0 overflow-hidden bg-outline-variant/20 rounded-full border border-sun-terracotta/20 shadow-sm flex items-center justify-center bg-cream text-sun-terracotta">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                  Empowering Artisans
                </span>
                <h4 className="mb-3 font-serif text-2xl leading-tight italic">
                  Handmade with Purpose
                </h4>
                <p className="text-xs font-sans leading-relaxed text-charcoal/70">
                  Every product is handcrafted by skilled artisans, creating meaningful employment opportunities for rural communities and women-led households.
                </p>
              </div>
            </Reveal>

            {/* Clean & Conscious Beauty */}
            <Reveal delay={150} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="relative aspect-square w-full max-w-[200px] shrink-0 overflow-hidden bg-outline-variant/20 rounded-full border border-sun-terracotta/20 shadow-sm flex items-center justify-center bg-cream text-sun-terracotta">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                  Radiant Skin
                </span>
                <h4 className="mb-3 font-serif text-2xl leading-tight italic">
                  Clean & Conscious Beauty
                </h4>
                <p className="text-xs font-sans leading-relaxed text-charcoal/70">
                  Our formulations are paraben-free, sulfate-free, cruelty-free, and free from harsh chemicals, designed for healthy, radiant skin.
                </p>
              </div>
            </Reveal>

            {/* Farm to Face */}
            <Reveal delay={200} className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="relative aspect-square w-full max-w-[200px] shrink-0 overflow-hidden bg-outline-variant/20 rounded-full border border-sun-terracotta/20 shadow-sm flex items-center justify-center bg-cream text-sun-terracotta">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-right">
                <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                  Sourcing
                </span>
                <h4 className="mb-3 font-serif text-2xl leading-tight italic">
                  Our Farm-to-Face Promise
                </h4>
                <p className="text-xs font-sans leading-relaxed text-charcoal/70 mb-3">
                  At Aandre Amelie, skincare begins in the fields. We partner with small Indian farms where red roses, herbs, and botanical ingredients are grown naturally and harvested by hand. This direct relationship allows us to support farming families while ensuring every ingredient reaches your skin at its freshest and most effective.
                </p>
                <p className="text-xs font-sans leading-relaxed text-charcoal/70">
                  When you choose Aandre Amelie, you support real farmers, real artisans, and a more sustainable beauty industry.
                </p>
              </div>
            </Reveal>

            {/* The Magic of Ganga Jal */}
            <Reveal delay={250} className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="relative aspect-square w-full max-w-[200px] shrink-0 overflow-hidden bg-outline-variant/20 rounded-full border border-sun-terracotta/20 shadow-sm flex items-center justify-center bg-cream text-sun-terracotta">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="mb-2 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase">
                  Sacred Formulation
                </span>
                <h4 className="mb-3 font-serif text-2xl leading-tight italic">
                  The Magic of Ganga Jal
                </h4>
                <div className="text-xs font-sans leading-relaxed text-charcoal/70 space-y-4">
                  <p>
                    Our journey begins with a special variety of Indian roses, lovingly harvested from the banks of the sacred Ganga River. This pristine environment not only ensures that our roses are of the highest quality but also infuses them with a unique essence that honors the rich spiritual heritage of the region. Each bottle of our rose toner embodies this sacred connection, offering you more than just a cosmetic product.
                  </p>
                  <p>
                    Ganga Jal is a vital component of our formulation, infusing our toner with purity and positivity. We believe in the transformative power of this sacred water, which is used at every stage of production—enhancing our connection to nature and promoting vibrant skin health.
                  </p>
                  <p>
                    What makes our Rose Ark toner truly special is how we charge the water used in its creation. By harnessing the gentle glow of moonlight, we amplify the positive energies within our products. This practice ensures that our toner is more than a beauty treatment; it is a ritual steeped in intention, inviting peace and positivity into your skincare routine.
                  </p>
                </div>
              </div>
            </Reveal>
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
