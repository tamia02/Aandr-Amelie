"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/money";
import type { Commerce } from "@/lib/actions/products";

export default function StickyBuyBar({
  commerce,
  productName,
}: {
  commerce: Commerce | null;
  productName: string;
}) {
  const { addItem } = useCart();
  const [visible, setVisible] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("buy-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "0px" },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  if (!commerce || commerce.stock <= 0) return null;

  const handleAdd = () => {
    addItem(commerce.slug, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-outline-variant/30 bg-cream/95 backdrop-blur-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-3 sm:px-10 lg:px-16">
        <div className="min-w-0">
          <p className="truncate font-serif text-sm text-charcoal sm:text-base">{productName}</p>
          <p className="text-xs text-charcoal/60 sm:text-sm">{formatINR(commerce.priceCents)}</p>
        </div>
        <button
          onClick={handleAdd}
          className="shrink-0 bg-moon-indigo px-6 py-3 text-xs font-semibold tracking-[0.15em] text-cream uppercase transition-opacity hover:opacity-90 sm:px-10"
        >
          {added ? "Added ✓" : "Add to Ritual"}
        </button>
      </div>
    </div>
  );
}
