import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { getCommerceForSlugs } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";

export const metadata = {
  title: "Search Results | Aandré Amelie",
  description: "Search for our botanical elixirs and skincare rituals.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.q?.toLowerCase() || "";
  
  const searchResults = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tagline.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.ingredientsList.some((i) => i.toLowerCase().includes(query))
      )
    : [];

  const commerceData = await getCommerceForSlugs(searchResults.map((p) => p.slug));

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-10 lg:px-16 min-h-[60vh]">
      <Reveal className="mb-8 text-center">
        <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-sun-terracotta uppercase">
          {query ? `Search Results for "${query}"` : "Search"}
        </span>
        <h1 className="font-serif text-4xl text-charcoal sm:text-5xl">
          {searchResults.length} {searchResults.length === 1 ? "Result" : "Results"} Found
        </h1>
      </Reveal>

      {query && searchResults.length === 0 && (
        <Reveal className="text-center text-charcoal/70">
          <p>We couldn't find any products matching your search. Try adjusting your keywords.</p>
        </Reveal>
      )}

      {searchResults.length > 0 && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-16 md:grid-cols-3">
          {searchResults.map((product, i) => {
            const price = commerceData[product.slug];
            return (
              <Reveal key={product.slug} delay={i * 100}>
                <ProductCard
                  product={product}
                  price={price ? formatINR(price.priceCents) : undefined}
                />
              </Reveal>
            );
          })}
        </div>
      )}
    </div>
  );
}
