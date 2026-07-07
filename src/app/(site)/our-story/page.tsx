import type { Metadata } from "next";
import Image from "next/image";
import PullQuote from "@/components/PullQuote";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Our Story — All Shades, All Souls | Aandré Amelie",
  description:
    "The philosophy of sun and moon, balance and inclusivity behind Aandré Amelie's natural skincare. Discover All Shades, All Souls.",
  alternates: {
    canonical: "https://aandreamelie.com/our-story",
  },
};

export default function OurStoryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-32 pb-24 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <span className="mb-6 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
              Brand Story
            </span>
            <h1 className="font-serif text-5xl leading-tight sm:text-7xl text-charcoal">
              Aandré Amelie
              <br />
              <span className="font-normal italic">All Shades, All Souls.</span>
            </h1>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.2em] text-sun-terracotta uppercase block">
                Embracing Diversity and Beauty
              </span>
              <p className="font-serif text-lg leading-relaxed text-charcoal/80 italic">
                At Aandré Amelie, we believe that beauty lies in the harmony of contrasts and the unity of all differences. Our skincare brand is inspired by the vibrant diversity of the world and the unique beauty that each individual possesses. We don’t just create skincare; we celebrate every shade, every texture, and every soul.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy: All Shades, All Souls */}
      <section className="border-t border-outline-variant/20 bg-cream-deep/20 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <span className="text-xs font-semibold tracking-[0.25em] text-sun-terracotta-dark uppercase block mb-2">
                  Core Philosophy
                </span>
                <h2 className="font-serif text-4xl text-charcoal leading-tight">
                  All Shades, All Souls
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="text-sm leading-relaxed text-charcoal/70">
                  Our philosophy, <strong>All Shades, All Souls</strong>, is more than just a tagline—it’s the foundation of everything we do. It’s about acknowledging that every person, regardless of their skin tone or background, has a story worth telling and a beauty worth celebrating.
                </p>
                <p className="text-sm leading-relaxed text-charcoal/70 mt-4">
                  Just as the sun and moon share the sky, our products are designed to work in harmony with your unique skin, enhancing its natural radiance and supporting its health.
                </p>
              </Reveal>
            </div>
            
            <div className="lg:col-span-7">
              <Reveal delay={150}>
                <div className="relative aspect-[16/10] overflow-hidden border border-outline-variant/20">
                  <Image
                    src="/images/stitch/bento-flatlay.jpg"
                    alt="Flatlay of natural botanical ingredients representing diverse skin types"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Duality: Aandré & Amelie */}
      <section className="py-24 sm:py-32 border-t border-outline-variant/25 bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 text-center mb-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase block mb-3">
              Why Us
            </span>
            <h2 className="font-serif text-4xl text-charcoal">The Symbolism Behind Aandré Amelie</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-2xl mx-auto mt-6">
            <p className="text-sm leading-relaxed text-charcoal/75">
              The name Aandré Amelie is a symbol of balance and duality. It draws from the story of two complementary forces—Aandré, embodying the warmth and energy of the sun, and Amelie, reflecting the calm and mystery of the moon.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Aandré: The Sun */}
          <div className="bg-sun-blush/20 py-20 px-5 sm:px-10 lg:px-16 border-r border-outline-variant/20 flex flex-col justify-center">
            <Reveal className="max-w-md mx-auto space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase block">
                Aandré — Solar Energy
              </span>
              <h3 className="font-serif text-3xl text-sun-terracotta-dark">
                The Warmth &amp; Energy
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/80">
                Aandré represents the Solar — the active, the invigorating, the vital life force that awakens with the dawn. This pillar of our identity focuses on protection, daytime defense, and energizing micro-nutrients.
              </p>
              <p className="text-xs leading-relaxed text-charcoal/60 italic font-serif">
                Aandré stands back-to-back with Amelie, symbolizing being there for one another without judgment. This relationship is full of respect and acceptance, no matter who you are or where you come from.
              </p>
            </Reveal>
          </div>

          {/* Amelie: The Moon */}
          <div className="bg-moon-indigo/5 py-20 px-5 sm:px-10 lg:px-16 flex flex-col justify-center">
            <Reveal className="max-w-md mx-auto space-y-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-moon-indigo uppercase block">
                Amelie — Lunar Calm
              </span>
              <h3 className="font-serif text-3xl text-moon-indigo">
                The Rest &amp; Mystery
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/80">
                Amelie is the Lunar — the restorative, the quiet, the deep replenishment that occurs under the mantle of night. This pillar focuses on sensory calm, overnight repair, and returning the skin to equilibrium.
              </p>
              <p className="text-xs leading-relaxed text-charcoal/60 italic font-serif">
                True beauty is found when we embrace all aspects of ourselves—both the sunlit, outward-facing paths and the quiet, moonlit spaces of reflection and restoration.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-cream-deep border-y border-outline-variant/30 px-5 py-24 text-center sm:px-10 sm:py-32">
        <Reveal className="mx-auto max-w-4xl">
          <PullQuote>
            True beauty is found when we embrace all aspects of ourselves and the world around us.
          </PullQuote>
          <p className="mt-8 text-xs font-semibold tracking-[0.3em] text-outline uppercase">
            — Aandré Amelie Creed
          </p>
        </Reveal>
      </section>

      {/* Handcrafted Apothecary (Preparation for User's Process Video) */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <div className="relative aspect-[16/9] overflow-hidden border border-outline-variant/25 bg-moon-indigo/5 flex items-center justify-center">
                {/* Video container designed to display their process short video */}
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src="/videos/handcrafted.mp4"
                  poster="/images/stitch/bento-hand-bottle.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-charcoal/15" />
                <div className="relative z-10 p-6 text-center text-cream">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-sun-gold uppercase block mb-2">
                    Visual Short
                  </span>
                  <p className="font-serif text-sm italic">Handcrafted with Care &amp; Devotion</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <Reveal>
              <span className="text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase block mb-2">
                Pure Craftsmanship
              </span>
              <h2 className="font-serif text-4xl text-charcoal leading-tight">
                Handcrafted, Not Manufactured
              </h2>
            </Reveal>
            <Reveal delay={100} className="space-y-4 text-sm leading-relaxed text-charcoal/70">
              <p>
                We do not believe in mass factory production. Every single bottle of Aandré Amelie is hand-filled, hand-blended, and prepared in small batches by real hands.
              </p>
              <p>
                By distilling our hydrosols in traditional copper alembics, we preserve the organic energetic vibration of the botanicals, ensuring every drop is delivered with absolute freshness, purity, and mindful devotion.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Synthesis / Design Elements */}
      <section className="bg-cream-deep/40 border-t border-outline-variant/25 py-24 sm:py-32">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <Reveal className="mb-20 text-center">
            <span className="mb-4 block text-xs font-semibold tracking-[0.2em] text-outline uppercase">
              The Curation
            </span>
            <h2 className="font-serif text-4xl text-charcoal">Design &amp; Synthesis</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {[
              {
                title: "The Visual Story",
                text: "The elements of our visual story—the crescent moon and bright sun—symbolize the journey your skin takes throughout the day and night. We offer products that adapt dynamically to your skin’s needs.",
              },
              {
                title: "Thoughtful Packaging",
                text: "Blending warm sunrise and cool sunset colors in our design reminds you of the connection between all things—nature's cycles, inner balance, and the beauty of diversity, marked by our heart symbol representing inclusivity.",
              },
              {
                title: "A Ritual of Self-Love",
                text: "Aandré Amelie is where skincare becomes a ritual of self-expression and self-love. Every product is a celebration of your unique beauty, supporting the natural glow of all shades and all souls.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/30 bg-cream">
                  <span className="font-serif text-xl text-moon-indigo">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mb-4 font-serif text-2xl text-charcoal">{v.title}</h4>
                <p className="text-sm text-charcoal/70 leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Collage */}
      <section className="mx-auto grid h-[600px] max-w-[1440px] grid-cols-1 gap-4 px-5 sm:px-10 md:grid-cols-4 lg:px-16 py-8">
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
              All Shades, All Souls.
            </p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-moon-indigo text-cream py-24 text-center px-5 border-t border-outline-variant/15">
        <Reveal className="mx-auto max-w-2xl">
          <span className="text-[10px] font-bold tracking-[0.3em] text-sun-gold uppercase block mb-4">
            Join the Journey
          </span>
          <h2 className="font-serif text-4xl mb-6">Embrace Your Shade</h2>
          <p className="text-cream/80 text-base leading-relaxed mb-8 font-serif italic">
            Join us on this journey of discovery and embrace the beauty of your own shade. Aandré Amelie—where the sun meets the moon, and every soul finds its light.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/shop">Explore the Curation</Button>
            <Button href="/contact" variant="ghost" className="border-cream/30 text-cream hover:border-cream">
              Speak with Us
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
