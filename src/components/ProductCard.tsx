import Link from "next/link";
import type { Product } from "@/data/products";
import MediaVisual from "./MediaVisual";

export default function ProductCard({
  product,
  price,
  ratio = "aspect-[4/5]",
}: {
  product: Product;
  price?: string;
  ratio?: string;
}) {
  return (
    <Link href={`/shop/${product.slug}`} className="group flex flex-col h-full border border-sun-terracotta/20 bg-cream transition-colors hover:border-sun-terracotta/50">
      <div className="flex-shrink-0 border-b border-sun-terracotta/10">
        <MediaVisual
          image={product.image}
          variant={product.placeholder}
          label={product.image ? undefined : product.name}
          ratio={ratio}
          fit={["royal-rose-elixir", "glow-quinch-elixir", "acne-shield", "vital-grow-scalp"].includes(product.slug) ? "cover" : "contain"}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-4 sm:p-6 text-center">
        <div className="flex flex-col items-center">
          <span className="mb-2 block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
            {product.category}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal">{product.name}</h3>
          <p className="mt-2 text-xs sm:text-sm text-charcoal/70 line-clamp-2 leading-relaxed">{product.hook}</p>
        </div>
        {price && (
          <span className="mt-4 block shrink-0 text-sm sm:text-base font-semibold text-charcoal">
            {price}
          </span>
        )}
      </div>
    </Link>
  );
}
