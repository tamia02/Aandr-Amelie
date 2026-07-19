"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/money";
import type { Commerce } from "@/lib/actions/products";

export default function AddToCart({ commerce }: { commerce: Commerce | null }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!commerce) {
    return (
      <p className="mt-8 text-sm text-charcoal/50 italic">
        Pricing coming soon.
      </p>
    );
  }

  const outOfStock = commerce.stock <= 0;

  const handleAdd = () => {
    addItem(commerce.slug, qty);
    setAdded(true);
    window.location.href = "/cart";
  };

  return (
    <div className="mt-8">
      <div className="mb-10 flex items-baseline gap-4">
        <span className="font-serif text-3xl">{formatINR(commerce.priceCents)}</span>
        {commerce.compareAtPriceCents && commerce.compareAtPriceCents > commerce.priceCents && (
          <span className="text-sm text-charcoal/40 line-through">
            {formatINR(commerce.compareAtPriceCents)}
          </span>
        )}
        <span className="text-xs tracking-widest text-outline uppercase">
          100ML | 3.38 FL. OZ.
        </span>
      </div>

      {outOfStock ? (
        <p className="text-sm text-charcoal/60">Currently out of stock.</p>
      ) : (
        <div className="flex flex-col gap-4">
          <button
            onClick={handleAdd}
            className="group flex items-center justify-between bg-moon-indigo px-12 py-5 text-xs font-semibold tracking-[0.2em] text-cream uppercase transition-opacity hover:opacity-90"
          >
            {added ? "Added ✓" : "Add to Ritual"}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <div className="flex items-center justify-between border border-outline/30 px-6 py-4">
            <span className="text-xs font-semibold tracking-widest uppercase">
              Quantity
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="text-charcoal/70 hover:text-moon-indigo"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-4 text-center text-sm">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(commerce.stock, q + 1))}
                className="text-charcoal/70 hover:text-moon-indigo"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
