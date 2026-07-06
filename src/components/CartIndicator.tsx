"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartIndicator() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
      className="relative flex items-center text-charcoal/80 transition-colors duration-200 hover:text-sun-terracotta-dark"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6h1.5l1.5 12.75h11.5L19.75 8H6.5M9.5 10.5V6a2.5 2.5 0 0 1 5 0v4.5"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-sun-terracotta text-[10px] font-medium text-cream">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
