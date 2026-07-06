import type { Metadata } from "next";
import Image from "next/image";
import PullQuote from "@/components/PullQuote";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The philosophy of sun and moon, balance and inclusivity behind Aandré Amelie's natural skincare.",
};

export default function OurStoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-32 pb-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <span className="mb-6 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
              Our Philosophy
            </span>
            <h1 className="font-serif text-6xl leading-tight sm:text-7xl">
              The Alchemical
              <br />
              Balance.
            </h1>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="font-serif text-lg text-charcoal/70 italic">
              Aandré Amelie was born from a simple belief: that beauty has no
              single shade, no single story. Aandré carries the warmth of the
              sun; Amelie carries the calm of the moon.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Aandré: The Sun */}
      <section className="overflow-hidden bg-sun-blush/25 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <div className="relative aspect-[4/5] overflow-hidden border border-outline-variant/20">
                <Image
                  src="/images/stitch/aandre-sun.jpg"
                  alt="Amber apothecary bottle in golden hour light among olive branches"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 md:col-start-8">
              <span className="mb-4 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
                Manifesto 01
              </span>
              <h2 className="mb-8 font-serif text-4xl text-sun-terracotta-dark">
                Aandré: The Radiance
              </h2>
              <div className="space-y-6 leading-relaxed text-charcoal/80">
                <p className="text-lg">
                  Aandré represents the Solar — the active, the invigorating,
                  the vital life force that awakens with the dawn. This
                  pillar of our identity focuses on protection and energy.
                </p>
                <p className="text-sm text-charcoal/60">
                  Our sun-aligned formulations fortify the skin&rsquo;s
                  barrier, utilizing potent botanical antioxidants and
                  light-harvesting nutrients — the morning ritual that
                  prepares you for the world.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-cream px-5 py-24 text-center sm:px-10 sm:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <PullQuote>
            True wellness is found not in the extremes, but in the graceful
            transition from day to night.
          </PullQuote>
          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-outline uppercase">
            — The Apothecary&rsquo;s Creed
          </p>
        </Reveal>
      </section>

      {/* Amelie: The Moon */}
      <section className="overflow-hidden bg-moon-indigo/5 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-5 md:col-start-2">
              <span className="mb-4 block text-xs font-semibold tracking-[0.2em] text-moon-indigo uppercase">
                Manifesto 02
              </span>
              <h2 className="mb-8 font-serif text-4xl text-moon-indigo">
                Amelie: The Restoration
              </h2>
              <div className="space-y-6 leading-relaxed text-charcoal/80">
                <p className="text-lg">
                  Amelie is the Lunar — the restorative, the quiet, the deep
                  replenishment that occurs under the mantle of night. It is
                  the call to pause, to heal, and to reconnect.
                </p>
                <p className="text-sm text-charcoal/60">
                  Our moon-aligned rituals prioritize cellular repair and
                  sensory calm, working in harmony with your body&rsquo;s
                  circadian rhythms to undo the day&rsquo;s fatigue.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-6 md:col-start-7">
              <div className="relative aspect-[3/4] overflow-hidden border border-outline-variant/20">
                <Image
                  src="/images/stitch/amelie-moon.jpg"
                  alt="Dark bowl with cool-toned botanical extract, moonlit mood"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-10 border-l border-moon-indigo/20 pl-6 md:pl-12">
                <p className="font-serif text-lg text-moon-indigo italic">
                  &ldquo;The night is where the skin finds its true voice,
                  whispered in the silence of repair.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Synthesis */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <Reveal className="mb-20 text-center">
          <span className="mb-4 block text-xs font-semibold tracking-[0.2em] text-outline uppercase">
            The Synthesis
          </span>
          <h2 className="font-serif text-4xl">A Harmonious Duality</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
          {[
            {
              title: "Conscious Sourcing",
              text: "Every botanical is harvested with respect for the seasonal cycles of the earth.",
            },
            {
              title: "Slow Science",
              text: "We prioritize efficacy over speed, allowing extractions to mature naturally over weeks.",
            },
            {
              title: "Ritualized Care",
              text: "Transforming daily maintenance into moments of sacred mindfulness and reflection.",
            },
          ].map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/30">
                <span className="font-serif text-xl text-moon-indigo">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mb-4 font-serif text-2xl">{v.title}</h4>
              <p className="text-sm text-charcoal/70">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bento collage */}
      <section className="mx-auto grid h-[600px] max-w-[1440px] grid-cols-1 gap-4 px-5 sm:px-10 md:grid-cols-4 lg:px-16">
        <div className="relative h-full overflow-hidden border border-outline-variant/10 md:col-span-2">
          <Image
            src="/images/stitch/bento-flatlay.jpg"
            alt="Flatlay of botanical ingredients: rose petals, sandalwood, jojoba oil"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="relative h-full overflow-hidden border border-outline-variant/10 md:col-span-1">
          <Image
            src="/images/stitch/bento-hand-bottle.jpg"
            alt="A hand gently touching a frosted glass bottle"
            fill
            sizes="(min-width: 768px) 25vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
        <div className="grid h-full grid-rows-2 gap-4 md:col-span-1">
          <div className="relative overflow-hidden border border-outline-variant/10">
            <Image
              src="/images/stitch/bento-blue-serum.jpg"
              alt="Abstract macro photography of shimmering serum bubbles"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-end bg-sun-blush p-8">
            <span className="mb-2 text-xs font-semibold tracking-widest text-sun-terracotta-dark uppercase">
              Est. 2026
            </span>
            <p className="font-serif text-2xl leading-none text-sun-terracotta-dark italic">
              A Legacy in the Making.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
