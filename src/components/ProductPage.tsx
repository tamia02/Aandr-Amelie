import type { Product } from "@/data/products";
import type { Commerce } from "@/lib/actions/products";
import MediaVisual from "./MediaVisual";
import Reveal from "./Reveal";
import Button from "./Button";
import AddToCart from "./AddToCart";

const SKIN_ICONS = [
  <path key="sun" d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />,
  <path key="leaf" d="M12 3c-4 3-6 6-6 10a6 6 0 0 0 12 0c0-4-2-7-6-10ZM12 22v-9" />,
  <path key="drop" d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />,
];

export default function ProductPage({
  product,
  commerce = null,
}: {
  product: Product;
  commerce?: Commerce | null;
}) {
  const composition = product.benefitSections[0];
  const restSections = product.benefitSections.slice(1);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-14 px-5 pt-32 pb-24 sm:px-10 md:grid-cols-12 lg:px-16">
        <Reveal className="md:col-span-7">
          <MediaVisual
            image={product.image}
            video={product.heroVideo}
            poster={product.heroPoster}
            variant={product.placeholder}
            ratio="aspect-[4/5]"
            label={product.name}
            objectPosition="50% 25%"
            fit={product.imageFit}
            priority
          />
        </Reveal>
        <Reveal delay={150} className="flex flex-col justify-center md:col-span-5">
          <span className="mb-4 text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase">
            {product.tagline}
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] sm:text-6xl">
            {product.name}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {product.description}
          </p>
          {product.afterShaveBenefit && (
            <div className="mt-6 max-w-md border-l-2 border-sun-gold bg-sun-blush/20 px-5 py-4">
              <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
                After-Shave Benefit
              </p>
              <p className="text-sm leading-relaxed text-charcoal/75">
                {product.afterShaveBenefit}
              </p>
            </div>
          )}
          <AddToCart commerce={commerce} />
        </Reveal>
      </section>

      {/* Best For */}
      {product.bestFor.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="mb-12 text-center text-xs font-semibold tracking-[0.2em] text-outline uppercase">
              Best for Skin Type
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {product.bestFor.slice(0, 3).map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="flex h-full flex-col items-center border border-outline-variant/20 bg-cream-deep p-10 text-center transition-colors duration-500 hover:border-sun-terracotta">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    className="mb-6 h-9 w-9 text-sun-terracotta"
                    aria-hidden="true"
                  >
                    {SKIN_ICONS[i % SKIN_ICONS.length]}
                  </svg>
                  <h3 className="mb-4 font-serif text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Health Boost */}
      {product.healthBoost && (
        <section className="bg-moon-indigo px-5 py-24 text-cream sm:px-10">
          <div className="mx-auto max-w-[1440px]">
            <Reveal>
              <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-sun-gold uppercase">
                Health Boost
              </span>
              <h2 className="mb-14 font-serif text-4xl">Beauty You Can Taste and Breathe</h2>
            </Reveal>
            <div className="grid gap-10 md:grid-cols-2">
              {product.healthBoost.map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <h3 className="mb-3 font-serif text-2xl italic">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-cream/80">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Composition */}
      {composition && (
        <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-16">
          <div className="relative border border-outline-variant/10 bg-cream-deep p-10 sm:p-12">
            <div className="absolute -top-4 -left-4 bg-sun-blush px-4 py-1 text-[10px] font-semibold tracking-widest text-sun-terracotta-dark uppercase">
              Master Apothecary Note
            </div>
            <h3 className="mb-8 font-serif text-3xl">{composition.heading}</h3>
            {composition.intro && (
              <p className="max-w-2xl text-base leading-relaxed text-charcoal/75">
                {composition.intro}
              </p>
            )}
            {composition.items && (
              <ul className="space-y-4 font-serif text-lg text-charcoal/80 italic">
                {composition.items.map((item) => (
                  <li
                    key={item.title}
                    className="flex flex-col justify-between gap-1 border-b border-outline-variant/30 pb-3 sm:flex-row sm:items-baseline sm:gap-4"
                  >
                    <span>{item.title}</span>
                    <span className="max-w-sm text-right font-sans text-xs font-normal tracking-wide text-charcoal/50 not-italic sm:max-w-md">
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {restSections.map((section) => (
        <section key={section.heading} className="mx-auto max-w-[1440px] px-5 pb-24 sm:px-10 lg:px-16">
          <Reveal>
            <h2 className="mb-14 font-serif text-4xl">{section.heading}</h2>
          </Reveal>
          {section.items && (
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="border-l-2 border-moon-sage pl-5">
                    <h3 className="mb-2 font-serif text-lg">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      ))}

      {/* How to Use */}
      <section className="bg-cream-deep py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <Reveal>
              <span className="mb-4 block text-xs font-semibold tracking-[0.3em] text-sun-terracotta uppercase">
                The Ritual
              </span>
              <h2 className="font-serif text-4xl">Invocation of Radiance</h2>
            </Reveal>
            <Reveal delay={100} className="max-w-xs md:text-right">
              <p className="font-serif text-base text-charcoal/60 italic">
                Consistency is the secret to cellular transformation. Perform
                this ritual morning and night.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {product.howToUse.map((step, i) => (
              <Reveal key={step.label} delay={i * 70}>
                <span className="block font-serif text-6xl text-outline/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="mt-2 mb-4 text-sm font-semibold tracking-wide uppercase">
                  {step.label}
                </h4>
                <p className="text-sm leading-relaxed text-charcoal/70">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Care */}
      <section className="mx-auto max-w-[1440px] border-b border-outline-variant/30 px-5 py-16 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-1/3">
            <h3 className="mb-6 text-xs font-semibold tracking-widest uppercase">
              Care &amp; Preservation
            </h3>
            <p className="text-sm leading-relaxed text-charcoal/70">{product.care}</p>
          </div>
          <div className="flex items-center md:w-2/3">
            <p className="text-xs leading-relaxed tracking-widest text-outline uppercase">
              Handcrafted in small batches. Due to the natural provenance of
              our ingredients, slight variations in color and aroma may
              occur between harvests — the mark of true living apothecary.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-10 lg:px-16">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="max-w-md font-serif text-3xl leading-tight">
            Continue exploring the full ritual.
          </h2>
          <Button href="/shop">Back to Shop</Button>
        </Reveal>
      </section>
    </div>
  );
}
