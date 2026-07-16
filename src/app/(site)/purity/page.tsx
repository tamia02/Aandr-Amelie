import type { Metadata } from "next";
import Image from "next/image";
import { getProduct } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import MediaVisual from "@/components/MediaVisual";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Rooted in Purity",
  description:
    "Organic sourcing, ethical farming, and the promise behind every Aandré Amelie product.",
};

const SCIENCE = [
  {
    title: "Cold-Pressed Integrity",
    text: "We never use heat during extraction. This keeps every seed and petal's natural nutrients intact.",
  },
  {
    title: "Lunar Distillation",
    text: "We time our distillation to the lunar cycle — a traditional practice believed to make the hydrosols more potent and restorative.",
  },
  {
    title: "Zero Chemical Synthesis",
    text: "Purity isn't just a goal for us — it's the foundation. No preservatives, no fillers, no synthetic fragrances. Just the plant, as it is.",
  },
];

export default async function PurityPage() {
  const featured = getProduct("royal-rose-elixir")!;
  const commerce = await getCommerceForSlugs([featured.slug]);
  const price = commerce[featured.slug];

  return (
    <div>
      {/* Hero */}
      <header className="mx-auto max-w-[1440px] px-5 pt-32 pb-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <span className="mb-6 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
              The Sourcing Story
            </span>
            <h1 className="mb-8 font-serif text-6xl leading-tight sm:text-7xl">
              Alchemy in Every
              <br />
              <span className="font-normal italic">Droplet.</span>
            </h1>
            <p className="mb-10 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
              We go looking for rare, high-quality ingredients, not the easy ones. Ours are
              harvested by moonlight, infused with pure Ganga Jal, and distilled the traditional way.
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
              <span className="mt-4 block text-[10px] font-semibold tracking-widest uppercase">
                — The Philosophy of Purity
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Harvest */}
      <section className="bg-cream-deep py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <Reveal className="mx-auto mb-24 max-w-2xl text-center">
            <h2 className="mb-6 font-serif text-4xl">
              Honoring the Hands
              <br />
              That Heal
            </h2>
            <p className="text-sm text-charcoal/70">
              Our farmers are the custodians of generational wisdom, tending
              to the soil with a devotion that transcends commerce.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="relative mb-6 h-[500px] overflow-hidden">
                <Image
                  src="/images/stitch/farmer-portrait.jpg"
                  alt="Portrait of a rose farmer holding fresh Damask roses"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <span className="text-xs font-semibold tracking-widest text-sun-terracotta uppercase">
                Region: The Himalayas
              </span>
              <h3 className="mt-2 mb-4 font-serif text-2xl">Herbs from the Himalayas</h3>
              <p className="max-w-lg text-sm text-charcoal/70">
                Distilled from the finest petals and roots for a single drop of elixir, our
                botanicals are the heart of the Royal Rose collection.
              </p>
            </Reveal>

            <div className="flex flex-col gap-12 md:col-span-5">
              <Reveal delay={90} className="flex items-start gap-6">
                <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-outline-variant/20">
                  <Image
                    src="/images/stitch/sandalwood-macro.jpg"
                    alt="Macro shot of sandalwood bark"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
                    Ethically Sourced
                  </span>
                  <h4 className="mb-2 font-serif text-xl leading-tight">
                    Wild Mysore Sandalwood
                  </h4>
                  <p className="text-sm text-charcoal/70">
                    Sustainably harvested from protected groves to ensure
                    ecological harmony.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180} className="flex items-start gap-6">
                <div className="relative aspect-square w-1/3 shrink-0 overflow-hidden bg-outline-variant/20">
                  <Image
                    src="/images/stitch/lavender-field.jpg"
                    alt="Aerial view of lavender fields"
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
                    Moonlight Distillation
                  </span>
                  <h4 className="mb-2 font-serif text-xl leading-tight">
                    True Provence Lavender
                  </h4>
                  <p className="text-sm text-charcoal/70">
                    Hand-cut at the peak of bloom for maximum aromatic
                    potency and soul-soothing properties.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
          <Reveal className="relative md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/stitch/lab-distillation.jpg"
                alt="Glass distillation vessels with golden botanical oil"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-6 md:col-start-7">
            <h2 className="mb-10 font-serif text-4xl leading-tight italic">
              Science meets the <span className="not-italic">Spirit of Flora.</span>
            </h2>
            <div className="space-y-10">
              {SCIENCE.map((item) => (
                <div key={item.title} className="flex gap-6">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sun-terracotta" />
                  <div>
                    <h5 className="mb-2 text-sm font-semibold tracking-wide uppercase">
                      {item.title}
                    </h5>
                    <p className="text-sm text-charcoal/70">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured elixir */}
      <section className="bg-outline-variant/10 px-5 py-24 sm:px-10 sm:py-32">
        <Reveal className="mb-16 text-center">
          <span className="text-xs font-semibold tracking-[0.3em] text-sun-terracotta uppercase">
            The Featured Elixir
          </span>
        </Reveal>
        <Reveal
          delay={100}
          className="mx-auto max-w-4xl border border-outline-variant/20 bg-cream p-10 md:p-20"
        >
          <div className="flex flex-col items-center gap-14 md:flex-row">
            <div className="w-full md:w-1/2">
              <MediaVisual
                image={featured.image}
                variant={featured.placeholder}
                ratio="aspect-[4/5]"
                label={featured.name}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="mb-1 font-serif text-3xl leading-tight sm:text-4xl">
                {featured.name}
              </h3>
              <span className="mb-6 block text-xs font-semibold tracking-widest text-charcoal/50 uppercase">
                Sip &amp; Spray Ritual
              </span>
              <p className="mb-8 text-sm leading-relaxed text-charcoal/70">
                {featured.description}
              </p>
              <div className="mb-10 grid grid-cols-2 gap-4">
                <div className="border border-outline-variant/20 bg-cream-deep p-4 text-center">
                  <span className="mb-1 block text-[10px] uppercase">Price</span>
                  <span className="font-serif text-lg">
                    {price ? formatINR(price.priceCents) : "—"}
                  </span>
                </div>
                <div className="border border-outline-variant/20 bg-cream-deep p-4 text-center">
                  <span className="mb-1 block text-[10px] uppercase">Origin</span>
                  <span className="font-serif text-lg">Himalayas</span>
                </div>
              </div>
              <Button href={`/shop/${featured.slug}`} className="w-full justify-center">
                Shop the Elixir
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Purity quote */}
      <section className="relative flex items-center justify-center overflow-hidden py-32">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute font-serif text-[22vw] leading-none text-charcoal/5 select-none"
        >
          PURITY
        </span>
        <Reveal className="relative z-10 mx-auto max-w-3xl px-5 text-center">
          <PullQuote>
            We believe that true beauty is the outward expression of
            internal harmony — and harmony begins with the absolute purity
            of what we invite into our bodies.
          </PullQuote>
          <p className="mt-12 text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
            — Aandré Amelie Apothecary
          </p>
        </Reveal>
      </section>
    </div>
  );
}
