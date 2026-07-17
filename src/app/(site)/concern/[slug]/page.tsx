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

      {/* Concern Header */}
      <section className="mb-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-sun-terracotta/20 pb-8">
        <Reveal className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-sun-terracotta/40"></span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
              Targeted Solution
            </span>
          </div>
          <h1 className="font-serif text-2xl text-charcoal italic mb-3">{concern.name}</h1>
          <p className="max-w-xl text-[11px] leading-relaxed text-charcoal/70">
            {concern.intro}
          </p>
        </Reveal>
        <Reveal delay={100} className="lg:col-span-5 hidden lg:flex justify-end">
           <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-outline-variant/20 shadow-md">
             <Image 
                src={`/images/${concern.slug === 'oily-acne' ? 'acne2.png' : concern.slug === 'sensitive-dry' ? 'rose1.png' : concern.slug === 'hair-scalp' ? 'vital1.png' : 'lavender1.png'}`} 
                alt={concern.name} 
                fill
                sizes="280px"
                className="object-cover" 
             />
           </div>
        </Reveal>
      </section>

      {/* Educational Content (SEO focus) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 border-y border-outline-variant/30 py-8 bg-cream-deep/20 px-4 sm:px-8">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="font-serif text-xl text-moon-indigo mb-4 italic">
              Understanding the Condition
            </h2>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6">
              {concern.intro}
            </p>
            <h2 className="font-serif text-xl text-moon-indigo mb-4 italic">
              What Botanicals to Look For
            </h2>
            <p className="text-[11px] leading-relaxed text-charcoal/70">
              {concern.whatToLookFor}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <h2 className="font-serif text-xl text-moon-indigo mb-4 italic">
              How Our Formulations Help
            </h2>
            <p className="text-[11px] leading-relaxed text-charcoal/70 mb-6">
              {concern.howOurProductsHelp}
            </p>
            <div className="border-l border-sun-terracotta bg-sun-blush/10 p-5 mb-8">
              <h3 className="text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase mb-2">
                Apothecary Recommendation
              </h3>
              <p className="text-[11px] leading-relaxed text-charcoal/75 italic font-serif">
                {concern.howToChoose}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mapped Products Grid */}
      <section className="mb-10">
        <div className="mb-8 border-b border-outline-variant/30 pb-4">
          <h2 className="font-serif text-xl text-charcoal italic">Recommended Apothecary Objects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {matchingProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <div className="border border-outline-variant/15 p-6 bg-cream-deep/30 hover:border-sun-terracotta transition-all duration-300">
                <ProductCard
                  product={product}
                  price={priceOf(product.slug)}
                  ratio="aspect-[4/5]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
