import type { Metadata } from "next";
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
      <section className="mb-8 max-w-4xl">
        <Reveal>
          <SectionHeader
            eyebrow="Targeted Solution"
            title={concern.name}
            className="mb-6"
          />
          <p className="max-w-2xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {concern.intro}
          </p>
        </Reveal>
      </section>

      {/* Educational Content (SEO focus) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 border-y border-outline-variant/30 py-8 bg-cream-deep/20 px-4 sm:px-8">
        <div className="lg:col-span-6">
          <Reveal>
            <h2 className="font-serif text-2xl text-moon-indigo mb-6">
              Understanding the Condition
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/70 mb-8">
              {concern.intro}
            </p>
            <h2 className="font-serif text-2xl text-moon-indigo mb-6">
              What Botanicals to Look For
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/70">
              {concern.whatToLookFor}
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-6">
          <Reveal delay={100}>
            <h2 className="font-serif text-2xl text-moon-indigo mb-6">
              How Our Formulations Help
            </h2>
            <p className="text-sm leading-relaxed text-charcoal/70 mb-8">
              {concern.howOurProductsHelp}
            </p>
            <div className="border-l-2 border-sun-terracotta bg-sun-blush/20 p-6 mb-8">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase mb-2">
                Apothecary Recommendation
              </h3>
              <p className="text-sm leading-relaxed text-charcoal/75 italic font-serif">
                {concern.howToChoose}
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden">
              <img src="/images/real_assets/DSC00691.JPG" alt="Botanical Ingredients" className="object-cover w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mapped Products Grid */}
      <section className="mb-10">
        <div className="mb-12 border-b border-outline-variant/30 pb-4">
          <h2 className="font-serif text-2xl text-charcoal">Recommended Apothecary Objects</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {matchingProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 90}>
              <div className="border border-outline-variant/15 p-6 bg-cream-deep/30 hover:border-sun-terracotta transition-all duration-300">
                <ProductCard
                  product={product}
                  price={priceOf(product.slug)}
                  ratio="aspect-[4/3]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
