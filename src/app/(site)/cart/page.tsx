"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { getCommerceForSlugs, type Commerce } from "@/lib/actions/products";
import { getProduct } from "@/data/products";
import { formatINR } from "@/lib/money";
import MediaVisual from "@/components/MediaVisual";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";

export default function CartPage() {
  const { items, updateQty, removeItem } = useCart();
  const [commerce, setCommerce] = useState<Record<string, Commerce>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getCommerceForSlugs(items.map((i) => i.slug)).then((result) => {
      if (cancelled) return;
      setCommerce(result);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [items]);

  const subtotalCents = items.reduce((sum, item) => {
    const price = commerce[item.slug]?.priceCents ?? 0;
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="px-6 py-20 sm:px-10 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Your Ritual" title="Shopping Cart" />

        {!loading && items.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-base text-charcoal/70">
              Your cart is empty — let&rsquo;s find your ritual.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/shop">Shop the Collection</Button>
            </div>
          </div>
        )}

        {items.length > 0 && (
          <div className="mt-14">
            <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {items.map((item) => {
                const product = getProduct(item.slug);
                const price = commerce[item.slug]?.priceCents;
                if (!product) return null;

                return (
                  <li key={item.slug} className="flex gap-6 py-8">
                    <div className="w-24 shrink-0 sm:w-28">
                      <MediaVisual
                        image={product.image}
                        variant={product.placeholder}
                        ratio="aspect-square"
                        label={product.image ? undefined : product.name}
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-lg">{product.name}</h3>
                          <p className="mt-1 text-sm text-charcoal/60">
                            {loading ? "…" : price !== undefined ? formatINR(price) : "Unavailable"}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.slug)}
                          className="text-xs tracking-wide text-charcoal/50 uppercase hover:text-sun-terracotta-dark"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <button
                          onClick={() => updateQty(item.slug, item.qty - 1)}
                          className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-charcoal/70 hover:border-sun-terracotta-dark hover:text-sun-terracotta-dark"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.slug, item.qty + 1)}
                          className="flex h-8 w-8 items-center justify-center border border-charcoal/20 text-charcoal/70 hover:border-sun-terracotta-dark hover:text-sun-terracotta-dark"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 flex flex-col items-end gap-2">
              <div className="flex w-full max-w-xs items-center justify-between text-base sm:w-64">
                <span className="text-charcoal/70">Subtotal</span>
                <span className="font-medium">
                  {loading ? "…" : formatINR(subtotalCents)}
                </span>
              </div>
              <p className="w-full max-w-xs text-xs text-charcoal/50 sm:w-64">
                Shipping & taxes calculated at checkout.
              </p>
              <div className="mt-4 w-full max-w-xs sm:w-64">
                <Button href="/checkout" className="w-full justify-center">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
