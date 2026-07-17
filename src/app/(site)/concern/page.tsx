import type { Metadata } from "next";
import Link from "next/link";
import { concerns } from "@/data/concerns";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Shop by Skin & Wellness Concern | Aandré Amelie",
  description:
    "Explore our targeted skincare and wellness collections organized by skin concerns, sleep and stress, or hair and scalp care.",
  alternates: {
    canonical: "https://aandreamelie.com/concern",
  },
};

export default function ConcernsPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 sm:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Shop by Concern" }]} />

      <section className="mb-8 max-w-4xl">
        <Reveal>
          <SectionHeader
            eyebrow="Targeted Rituals"
            title="Shop by Concern"
            className="mb-6"
          />
          <p className="max-w-2xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            We believe skincare is a dialogue between your internal and external environment. 
            Select a concern below to discover educational botanical insights and custom-crafted 
            solutions for your skin and wellness needs.
          </p>
        </Reveal>
      </section>

      {/* Concerns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {concerns.map((concern, i) => (
          <Reveal key={concern.slug} delay={i * 80}>
            <div className="group border border-outline-variant/30 bg-cream-deep p-8 sm:p-12 hover:border-sun-terracotta transition-all duration-500 h-full flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-[0.25em] text-sun-terracotta uppercase block mb-4">
                  Collection
                </span>
                <h2 className="font-serif text-3xl text-charcoal mb-6 group-hover:text-moon-indigo transition-colors">
                  {concern.name}
                </h2>
                <p className="text-sm leading-relaxed text-charcoal/70 mb-8">
                  {concern.intro.split(".")[0]}. {concern.intro.split(".")[1]}.
                </p>
              </div>
              <Link
                href={`/concern/${concern.slug}`}
                className="text-xs font-semibold tracking-widest text-charcoal hover:text-moon-indigo uppercase inline-flex items-center gap-2 mt-auto"
              >
                Explore Collection <span>→</span>
              </Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
