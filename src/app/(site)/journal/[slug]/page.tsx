import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { journalArticles, getArticle } from "@/data/journal";
import { getProduct } from "@/data/products";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import MediaVisual from "@/components/MediaVisual";
import Button from "@/components/Button";

export const revalidate = 60;

export function generateStaticParams() {
  return journalArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.seoTitle,
    description: article.seoDescription,
    alternates: {
      canonical: `https://aandreamelie.com/journal/${article.slug}`,
    },
  };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const product = getProduct(article.relatedProductSlug);
  let priceStr: string | undefined;

  if (product) {
    const commerce = await getCommerceForSlugs([product.slug]);
    if (commerce[product.slug]) {
      priceStr = formatINR(commerce[product.slug].priceCents);
    }
  }

  // Create JSON-LD Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.seoDescription,
    "datePublished": new Date(article.date).toISOString().split("T")[0],
    "author": {
      "@type": "Organization",
      "name": "Aandré Amelie"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Aandré Amelie",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aandreamelie.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://aandreamelie.com/journal/${article.slug}`
    }
  };

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-32 pb-32 sm:px-10 lg:px-16">
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Journal", href: "/journal" },
          { label: article.title },
        ]}
      />

      <article className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8">
        {/* Main Content Area */}
        <div className="lg:col-span-8">
          <Reveal>
            <div className="flex items-center gap-3 text-xs font-semibold tracking-wider text-outline uppercase mb-6">
              <span>{article.category}</span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl text-charcoal leading-[1.1] mb-10">
              {article.title}
            </h1>
          </Reveal>

          {/* Render blog post content manually to ensure beautiful typographic control */}
          <Reveal delay={100} className="prose prose-stone max-w-none">
            <div className="font-sans text-base leading-relaxed text-charcoal/80 space-y-6">
              {article.content.split("\n\n").map((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Handle subheadings
                if (trimmed.startsWith("###")) {
                  return (
                    <h3
                      key={i}
                      className="font-serif text-2xl text-moon-indigo pt-6 pb-2 border-b border-outline-variant/20"
                    >
                      {trimmed.replace("###", "").trim()}
                    </h3>
                  );
                }

                if (trimmed.startsWith("####")) {
                  return (
                    <h4
                      key={i}
                      className="font-serif text-lg text-charcoal pt-4 pb-1 font-bold"
                    >
                      {trimmed.replace("####", "").trim()}
                    </h4>
                  );
                }

                // Handle lists
                if (trimmed.startsWith("*") || trimmed.startsWith("-")) {
                  return (
                    <ul key={i} className="list-disc pl-6 space-y-3 font-sans text-sm md:text-base text-charcoal/70">
                      {trimmed
                        .split("\n")
                        .map((li, idx) => (
                          <li key={idx}>
                            {li.replace(/^[\*\-]\s+/, "").trim().replace(/\*\*(.*?)\*\*/g, "$1")}
                          </li>
                        ))}
                    </ul>
                  );
                }

                // Handle numbered lists
                if (/^\d+\./.test(trimmed)) {
                  return (
                    <ol key={i} className="list-decimal pl-6 space-y-3 font-sans text-sm md:text-base text-charcoal/70">
                      {trimmed
                        .split("\n")
                        .map((li, idx) => (
                          <li key={idx}>
                            {li.replace(/^\d+\.\s+/, "").trim().replace(/\*\*(.*?)\*\*/g, "$1")}
                          </li>
                        ))}
                    </ol>
                  );
                }

                // Handle horizontal separators
                if (trimmed === "---") {
                  return <hr key={i} className="border-outline-variant/35 my-8" />;
                }

                // Normal Paragraph
                return (
                  <p key={i} className="text-sm sm:text-base leading-relaxed text-charcoal/75">
                    {/* Render bold text inline replacement simple helper */}
                    {trimmed.split(/\*\*(.*?)\*\*/g).map((chunk, index) => {
                      if (index % 2 === 1) {
                        return <strong key={index} className="text-moon-indigo font-semibold">{chunk}</strong>;
                      }
                      return chunk;
                    })}
                  </p>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Sidebar Spotlight Card (Commercial Bridge) */}
        {product && (
          <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit">
            <Reveal delay={200}>
              <div className="border border-outline-variant/30 bg-cream-deep p-8 flex flex-col items-center text-center">
                <span className="text-[10px] font-bold tracking-[0.25em] text-sun-terracotta uppercase block mb-4">
                  Ritual Spotlight
                </span>
                
                <div className="w-full max-w-[200px] mb-6">
                  <MediaVisual
                    image={product.image}
                    variant={product.placeholder}
                    label={product.name}
                    ratio="aspect-[4/5]"
                    objectPosition="50% 25%"
                  />
                </div>

                <span className="text-[10px] font-semibold tracking-widest text-charcoal/50 uppercase block mb-1">
                  Featured Ingredient: {article.ingredient}
                </span>
                <h3 className="font-serif text-2xl text-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-xs text-charcoal/60 leading-relaxed max-w-xs mb-6">
                  {product.hook}
                </p>

                {priceStr && (
                  <span className="text-base font-semibold text-charcoal mb-6 block">
                    {priceStr}
                  </span>
                )}

                <Button href={`/shop/${product.slug}`} className="w-full text-center">
                  Shop Now
                </Button>
              </div>
            </Reveal>
          </div>
        )}
      </article>
    </div>
  );
}
