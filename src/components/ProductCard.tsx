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
        objectPosition="50% 20%"
        ratio={ratio}
        className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="mt-8 flex items-start justify-between gap-4">
        <div>
          <span className="mb-2 block text-xs font-semibold tracking-[0.2em] text-sun-terracotta-dark uppercase">
            {product.category}
          </span>
          <h3 className="font-serif text-2xl text-charcoal">{product.name}</h3>
          <p className="mt-1 text-sm text-charcoal/70">{product.hook}</p>
        </div>
        {price && (
          <span className="mt-1 shrink-0 text-sm font-semibold text-charcoal">
            {price}
          </span>
        )}
      </div>
    </Link>
  );
}
