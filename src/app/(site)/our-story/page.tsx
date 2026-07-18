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
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-12 pb-10 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="flex flex-col text-left space-y-4 sm:space-y-8">
            <Reveal className="w-full">
              <span className="mb-6 block text-xs font-sans tracking-[0.2em] text-sun-terracotta uppercase">
                Brand Story
              </span>
              <h1 className="font-serif text-3xl leading-tight sm:text-4xl text-charcoal italic">
                Aandré Amelie
                <br />
                <span className="font-serif italic font-normal">All Shades, All Souls.</span>
              </h1>
            </Reveal>
            <Reveal delay={120} className="w-full">
              <div className="space-y-4">
                <span className="text-[10px] font-sans tracking-[0.2em] text-sun-terracotta uppercase block">
                  Embracing Diversity and Beauty
                </span>
                <p className="font-sans text-base leading-relaxed text-charcoal/80">
                  Beauty is not defined by one shade, one tradition, or one ideal.
                  It is found in diversity, in authenticity, and in the stories that make each of us unique.
                </p>
                <p className="font-sans text-base leading-relaxed text-charcoal/80">
                  At Aandré Amelie, we believe skincare is more than a daily ritual—it is an expression of self-love, confidence, and respect for nature. Every product we create is inspired by the belief that beauty flourishes when people, nature, and craftsmanship exist in harmony.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="w-full">
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden border border-outline-variant/20 shadow-sm">
              <Image
                src="/images/DSC00800.JPG"
                alt="Aandré Amelie Philosophy"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy: All Shades, All Souls */}
      <section className="border-t border-outline-variant/20 bg-cream-deep/20 py-10 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6">
              <Reveal>
                <span className="text-xs font-sans tracking-[0.25em] text-sun-terracotta-dark uppercase block mb-2">
                  Our Promise
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight italic">
                  All Shades. All Souls.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="font-sans text-base leading-relaxed text-charcoal/70 max-w-xl">
                  It is a celebration of every skin tone, every texture, every journey, and every soul. Because true beauty is never about changing who you are—it is about revealing the healthiest, most radiant version of yourself.
                </p>
              </Reveal>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Reveal delay={150}>
                <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden border border-outline-variant/20 shadow-md">
                  <Image
                    src="/images/rose1.png"
                    alt="Rose Elixir representing natural beauty"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Duality: Aandré & Amelie */}
      <section className="py-10 sm:py-12 border-t border-outline-variant/25 bg-cream">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 text-center mb-8">
          <Reveal>
            <span className="text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase block mb-3">
              Why Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal italic">The Meaning Behind Aandré Amelie</h2>
          </Reveal>
          <Reveal delay={100} className="max-w-3xl mx-auto mt-6">
            <p className="font-sans text-base leading-relaxed text-charcoal/75">
              The name Aandré Amelie represents the perfect balance of two timeless forces. In our identity, Aandré and Amelie stand back-to-back—not in opposition, but in unwavering support of one another. Their connection symbolizes trust, acceptance, equality, and unconditional respect. They remind us that beauty exists not in perfection, but in embracing every contrast that makes us human.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2">
          {/* Aandré: The Sun */}
          <div className="bg-sun-blush/20 py-8 px-5 sm:px-10 lg:px-16 border-r border-outline-variant/20 flex flex-col justify-center">
            <Reveal className="max-w-md mx-auto space-y-6">
              <span className="text-xs font-sans tracking-[0.2em] text-sun-terracotta-dark uppercase block">
                Aandré
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-sun-terracotta-dark italic">
                The Solar Energy
              </h3>
              <p className="font-sans text-base leading-relaxed text-charcoal/80">
                Aandré embodies the warmth, strength, confidence, and life-giving energy of the sun.
              </p>
            </Reveal>
          </div>

          {/* Amelie: The Moon */}
          <div className="bg-moon-indigo/5 py-8 px-5 sm:px-10 lg:px-16 flex flex-col justify-center">
            <Reveal className="max-w-md mx-auto space-y-6">
              <span className="text-xs font-sans tracking-[0.2em] text-moon-indigo uppercase block">
                Amelie
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-moon-indigo italic">
                The Lunar Calm
              </h3>
              <p className="font-sans text-base leading-relaxed text-charcoal/80">
                Amelie reflects the calm, grace, intuition, and serenity of the moon.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="bg-cream-deep border-y border-outline-variant/30 px-5 py-10 text-center sm:px-10 sm:py-12">
        <Reveal className="mx-auto max-w-4xl">
          <PullQuote>
            Just as the sun and moon share the same sky, we believe every individual deserves skincare that respects their unique skin rather than trying to change it.
          </PullQuote>
          <p className="mt-8 text-xs font-sans tracking-[0.3em] text-outline uppercase">
            — This belief shapes every decision we make
          </p>
        </Reveal>
      </section>

      {/* Handcrafted Apothecary */}
      <section className="mx-auto max-w-[1440px] px-5 py-10 sm:px-10 sm:py-12 lg:px-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7 order-2 lg:order-1 flex justify-center lg:justify-start">
            <Reveal>
              <div className="relative aspect-[4/5] w-[280px] sm:w-[360px] overflow-hidden border border-outline-variant/25 bg-moon-indigo/5 shadow-md">
                <video
                  src="/videos/compressed_C0064.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <Reveal>
              <span className="text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase block mb-2">
                Pure Craftsmanship
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-charcoal leading-tight">
                Small Batches. Exceptional Care.
              </h2>
            </Reveal>
            <Reveal delay={100} className="space-y-4 font-sans text-base leading-relaxed text-charcoal/70">
              <p>
                We believe true luxury cannot be mass-produced. Every Aandré Amelie formulation is lovingly prepared in Small Batch Skincare collections to preserve freshness, potency, and quality.
              </p>
              <p>
                Our artisans carefully blend premium botanical oils, herbal extracts, floral waters, and plant-based actives using time-honoured craftsmanship combined with modern skincare science.
              </p>
              <p>
                Each bottle is filled with intention. Each jar is inspected by hand. Each product reflects our promise of uncompromising excellence. Because exceptional skincare deserves exceptional care.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream-deep/40 border-t border-outline-variant/25 py-10 sm:py-12">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <Reveal className="mb-8 text-center">
            <span className="mb-4 block text-xs font-sans tracking-[0.2em] text-outline uppercase">
              Our Values
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal italic">Empowering Farmers. Supporting Families.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3">
            {[
              {
                title: "Inspired by Nature",
                text: "Nature has always been the world's greatest formulator. Across India's fertile farms bloom fragrant roses, healing herbs, nourishing seeds, and precious botanicals that have cared for generations.",
              },
              {
                title: "Crafted by Hands",
                text: "Behind every Aandré Amelie product is a community of dedicated farmers, artisans, and skilled craftspeople. Every handcrafted product preserves traditional skills.",
              },
              {
                title: "Supporting Communities",
                text: "By choosing traditional handcrafting over industrial automation, we help create sustainable employment opportunities for farming families and rural communities across India.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant/30 bg-cream">
                  <span className="font-serif text-lg text-moon-indigo italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mb-3 font-serif text-xl text-charcoal italic">{v.title}</h4>
                <p className="font-sans text-[11px] text-charcoal/70 leading-relaxed">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Heart to Heart / Founder Letter */}
      <section className="bg-cream py-10 sm:py-12 border-t border-outline-variant/15">
        <div className="mx-auto max-w-4xl px-5 sm:px-10 lg:px-16">
          <Reveal className="mb-8 text-center">
            <span className="text-xs font-sans tracking-[0.25em] text-sun-terracotta uppercase block mb-3">
              Letter from Founder
            </span>
            <h2 className="font-serif text-4xl text-charcoal">Heart to Heart (maan ki baat)</h2>
          </Reveal>
          <Reveal delay={100} className="space-y-6 font-sans text-base leading-relaxed text-charcoal/80 text-justify">
            <p>
              Luxury isn't created in a factory. It begins with a seed, a sunrise, and the hands that nurture nature.
            </p>
            <p>
              Every Aandre Amelie product starts long before it reaches your skincare shelf. It begins in the quiet fields of India, where farmers rise with the morning sun to carefully tend their crops. Roses are handpicked at the perfect bloom, herbs are harvested at their peak, and every botanical is selected with patience rather than haste.
            </p>
            <p>
              We believe the finest ingredients deserve the gentlest touch. That's why we choose handpicked botanicals over mechanical harvesting whenever possible. It preserves the purity of nature while creating meaningful employment for farming families and rural artisans whose knowledge has been passed down through generations.
            </p>

            <p>
              Once the ingredients arrive at our workshop, the real craftsmanship begins. Every formula is thoughtfully prepared in small batches. We never rush the process because nature cannot be hurried. Each ingredient is measured with care, blended with precision, and inspected to ensure it meets the standards we proudly call Aandre Amelie. Every jar is filled by hand. Every bottle is checked individually. Every label is placed with intention. Every package is prepared as if it were a gift.
            </p>
            <p>
              Behind every product is a team that believes skincare should nourish more than skin. It should support livelihoods, celebrate traditional craftsmanship, and respect the environment that provides these precious botanicals.
            </p>
            <p>
              Choosing Aandre Amelie means choosing more than organic skincare. It means supporting Indian farmers, empowering skilled artisans, and embracing a slower, more thoughtful way of creating beauty. Because true luxury is not mass-produced. It is cultivated in the fields, crafted by hands, perfected in small batches, and shared with love.
            </p>
            <p>
              It is a joy to welcome you into the Aandre Amelie family. We are deeply moved that you have chosen to join us on this path of mindful self-care. Whether this is your first encounter with our creations or you have already embraced them, your presence is cherished.
            </p>
            <p>
              For too long, the search for authentic beauty has been clouded by endless shelves of synthetic promises and complex labels. I found myself searching for something rarer: skincare that respects the sanctity of our bodies and the natural world, free from the noise of unrealistic claims. That search became the seed for Aandre Amelie.
            </p>
            <p>
              Our philosophy is rooted in a quiet simplicity: merging the raw vitality of nature with thoughtful formulation. We believe beauty is found in the confidence of healthy skin and the peace that comes from making intentional choices every day. Before any formula leaves our workshop, we pause to ask: "Is this a gift we would offer to those we love most?" If the answer is anything less than a heartfelt "yes," the process begins anew, guided by patience rather than haste.
            </p>
            <p>
              Drawing from the ancient wisdom of Ayurveda, we blend handpicked botanicals—from the soothing essence of Lavender Hydrosol and Rose Water to the healing touch of Kumkumadi Oil and Aloe Vera. Every batch is a careful harmony of tradition and practicality.
            </p>

            <p>
              Yet, this journey extends beyond the jar. We are cultivating a community where knowledge is shared as a form of nourishment. Through our guides, we hope to empower you with an understanding of ingredients and the art of DIY rituals, helping you navigate wellness with clarity.
            </p>
            <p>
              Our true purpose lies in earning your trust through every conversation and every drop of oil, honoring the connection between people and the earth. As we grow, our core remains unchanged: Purity over shortcuts. Honesty over trends. Livelihoods over profits.
            </p>
            <p>
              Your belief in us is our most precious harvest, and we carry that responsibility in every package we prepare. Thank you for allowing Aandre Amelie to be a part of your daily sunrise and your evening rest.
            </p>
            <p>
              Together, let us honor the botanicals that sustain us and the intention that makes us whole.
            </p>
            <div className="mt-8">
              <p className="font-serif italic text-lg text-charcoal">With warmth,</p>
              <p className="font-serif font-bold text-lg text-charcoal mt-2">Soniyaa Sethi</p>
              <p className="font-sans text-sm text-charcoal/60 uppercase tracking-widest mt-1">Founder, Aandre Amelie</p>
            </div>
            <p className="font-serif italic text-sm text-sun-terracotta mt-8">
              Handpicked by Nature. Crafted by Hands. Made with Purpose.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Big Video */}
      <section className="relative flex h-[60vh] sm:h-[80vh] w-full items-center overflow-hidden border-t border-outline-variant/15">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/founder_fast.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <Reveal className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 text-center">
          <span className="text-[10px] font-sans tracking-[0.3em] text-cream uppercase block mb-3">
            The Amelie Way
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-cream italic">A Ritual of Purity</h2>
        </Reveal>
      </section>

      {/* Join Us CTA */}
      <section className="bg-moon-indigo text-cream py-10 text-center px-5 border-t border-outline-variant/15">
        <Reveal className="mx-auto max-w-2xl">
          <span className="text-[10px] font-sans tracking-[0.3em] text-sun-gold uppercase block mb-4">
            Our Philosophy
          </span>
          <h2 className="font-serif text-4xl mb-6">All Shades, All Souls</h2>
          <p className="text-cream/80 text-base font-sans leading-relaxed mb-8">
            Our philosophy extends beyond skincare. It is about embracing diversity. Honouring individuality. Celebrating every skin tone. Respecting every journey. Supporting every community. We believe skincare should never ask you to become someone else. Instead, it should help your natural beauty shine with confidence.
          </p>
          <p className="text-cream/80 font-serif text-lg italic leading-relaxed mb-8">
            Because every shade deserves care.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/shop">Explore Our Collection</Button>
            <Button href="/contact" variant="ghost" className="border-cream/30 text-cream hover:border-cream">
              Speak with Us
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
