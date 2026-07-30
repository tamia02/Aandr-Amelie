"use client";

import { useEffect, useState } from "react";
import { useWishlist } from "@/lib/wishlist-context";
import { useCart } from "@/lib/cart-context";
import { useRouter } from "next/navigation";
import { products, getProduct } from "@/data/products";
import { getCommerceForSlugs, type Commerce } from "@/lib/actions/products";
import { formatINR } from "@/lib/money";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";

export default function WishlistPage() {
  const { items, clear } = useWishlist();
  const { addItem } = useCart();
  const router = useRouter();
  const [commerce, setCommerce] = useState<Record<string, Commerce>>({});

  useEffect(() => {
    if (items.length === 0) return;
    getCommerceForSlugs(items).then(setCommerce);
  }, [items]);

  const handleAddAllToCart = () => {
    items.forEach((slug) => addItem(slug, 1));
    // Optionally clear wishlist after adding? Let's keep it so they don't lose it accidentally
    router.push("/cart");
  };

  const wishlistProducts = items
    .map((slug) => getProduct(slug))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);

  if (items.length === 0) {
    return (
      <div className="px-6 py-8 text-center sm:px-10 md:py-28">
        <SectionHeader eyebrow="Wishlist" title="Your wishlist is empty" align="center" />
        <div className="mt-8 flex justify-center">
          <Button href="/shop">Shop the Collection</Button>
        </div>
      </div>
    );
  }

  const priceOf = (slug: string) =>
    commerce[slug] ? formatINR(commerce[slug].priceCents) : undefined;

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-16 sm:px-10 lg:px-16">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl text-charcoal">Your Wishlist</h1>
          <p className="mt-2 text-sm text-charcoal/60">
            {wishlistProducts.length} saved product{wishlistProducts.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={clear}
            className="rounded-sm border border-charcoal/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-charcoal/70 transition-colors hover:border-charcoal hover:text-charcoal"
          >
            Clear All
          </button>
          <button
            onClick={handleAddAllToCart}
            className="rounded-sm bg-moon-indigo px-6 py-2 text-xs font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
          >
            Add All To Cart
          </button>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-6 lg:gap-y-12">
          {wishlistProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 50}>
              <ProductCard product={product} price={priceOf(product.slug)} ratio="aspect-square" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
