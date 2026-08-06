import Link from "next/link";
import type { Product } from "@/data/products";
import MediaVisual from "./MediaVisual";
import WishlistButton from "./WishlistButton";
import ShareButton from "./ShareButton";

export default function ProductCard({
  product,
  price,
  compareAtPrice,
  ratio = "aspect-[4/5]",
}: {
  product: Product;
  price?: string;
  compareAtPrice?: string;
  ratio?: string;
}) {
  return (
    <Link href={`/shop/${product.slug}`} className="group relative flex flex-col h-full border border-sun-terracotta/20 bg-cream transition-colors hover:border-sun-terracotta/50">
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
        <WishlistButton slug={product.slug} className="bg-cream/80 rounded-full p-1.5 shadow-sm hover:text-sun-terracotta-dark" />
        <ShareButton 
          url={`https://www.aandreamelie.com/shop/${product.slug}`} 
          title={product.name} 
          className="bg-cream/80 rounded-full p-1.5 shadow-sm hover:text-sun-terracotta-dark text-charcoal" 
        />
      </div>
      <div className="flex-shrink-0 border-b border-sun-terracotta/10">
        <MediaVisual
          image={product.image}
          variant={product.placeholder}
          label={product.name}
          ratio={ratio}
          fit={["royal-rose-elixir", "glow-quinch-elixir", "acne-shield", "vital-grow-scalp"].includes(product.slug) ? "cover" : "contain"}
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-between p-4 sm:p-6 text-center">
        <div className="flex flex-col items-center">
          <span className="mb-1 block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
            {product.category}
          </span>
          <div className="flex text-[#FFB800] mb-2 gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 sm:w-3.5 sm:h-3.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-charcoal">{product.name}</h3>
          <p className="mt-2 text-xs sm:text-sm text-charcoal/70 line-clamp-2 leading-relaxed">{product.hook}</p>
        </div>
        {price && (
          <div className="mt-4 flex shrink-0 items-center justify-center gap-2">
            <span className="text-sm sm:text-base font-semibold text-charcoal">
              {price}
            </span>
            {compareAtPrice && (
              <span className="text-xs sm:text-sm text-charcoal/70 line-through">
                {compareAtPrice}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
