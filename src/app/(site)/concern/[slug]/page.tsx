import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { concerns, getConcern } from "@/data/concerns";
import { products } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

export const revalidate = 60;

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const concern = getConcern(slug);
  if (!concern) return {};
  return {
    title: concern.seoTitle,
    description: concern.seoDescription,
    alternates: {
      canonical: `https://aandreamelie.com/concern/${concern.slug}`,
    },
  };
}

export default async function ConcernPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concern = getConcern(slug);
  if (!concern) notFound();

  // Find matching products
  const matchingProducts = products.filter((p) =>
    p.concernSlugs.includes(concern.slug)
  );

  // Fetch prices from commerce database
  const commerce = await getCommerceForSlugs(matchingProducts.map((p) => p.slug));
  const priceOf = (productSlug: string) =>
    commerce[productSlug] ? formatINR(commerce[productSlug].priceCents) : undefined;

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 sm:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Shop by Concern", href: "/concern" },
          { label: concern.name },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-8">
        {/* Left Column: Title, Intro, Products */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-6 bg-sun-terracotta/40"></span>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
                Targeted Solution
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-charcoal italic mb-4">{concern.name}</h1>
            <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-charcoal/75">
              {concern.intro}
            </p>
          </Reveal>

          {/* Mapped Products Grid */}
          <Reveal delay={100} className="mt-4 border-t border-sun-terracotta/20 pt-8">
            <div className="mb-6">
              <h2 className="font-serif text-xl sm:text-2xl text-charcoal italic">Recommended Apothecary Objects</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-12">
              {matchingProducts.map((product, i) => (
                <Reveal key={product.slug} delay={i * 90}>
                  <div className="border border-outline-variant/15 p-4 sm:p-6 bg-cream-deep/30 hover:border-sun-terracotta transition-all duration-300">
                    <ProductCard
                      product={product}
                      price={priceOf(product.slug)}
                      ratio="aspect-[4/5]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Column: Hero Image, Educational Text */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-10">
          {/* Educational Content */}
          <Reveal delay={200} className="bg-cream-deep/30 p-6 sm:p-8 border border-outline-variant/20 shadow-sm space-y-8">
            <div>
              <h2 className="font-serif text-xl text-moon-indigo mb-3 italic">
                Understanding the Condition
              </h2>
              <p className="text-[11px] sm:text-xs leading-relaxed text-charcoal/70">
                {concern.intro}
              </p>
            </div>
            
            <div>
              <h2 className="font-serif text-xl text-moon-indigo mb-3 italic">
                What Botanicals to Look For
              </h2>
              <p className="text-[11px] sm:text-xs leading-relaxed text-charcoal/70">
                {concern.whatToLookFor}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-moon-indigo mb-3 italic">
                How Our Formulations Help
              </h2>
              <p className="text-[11px] sm:text-xs leading-relaxed text-charcoal/70 mb-4">
                {concern.howOurProductsHelp}
              </p>
              <div className="border-l border-sun-terracotta bg-sun-blush/10 p-5">
                <h3 className="text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase mb-2">
                  Apothecary Recommendation
                </h3>
                <p className="text-[11px] sm:text-xs leading-relaxed text-charcoal/75 italic font-serif">
                  {concern.howToChoose}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
