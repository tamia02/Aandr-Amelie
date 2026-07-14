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
    <Link href={`/shop/${product.slug}`} className="group block">
      <MediaVisual
        image={product.image}
        variant={product.placeholder}
        label={product.image ? undefined : product.name}
        objectPosition="bottom"
        ratio={ratio}
      />
      <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
        <div>
          <span className="mb-1 sm:mb-2 block text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
            {product.category}
          </span>
          <h3 className="font-serif text-lg sm:text-2xl text-charcoal">{product.name}</h3>
          <p className="hidden sm:block mt-1 text-sm text-charcoal/70">{product.hook}</p>
        </div>
        {price && (
          <span className="mt-1 shrink-0 text-xs sm:text-sm font-semibold text-charcoal">
            {price}
          </span>
        )}
      </div>
    </Link>
  );
}
