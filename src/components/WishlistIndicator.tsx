"use client";

import Link from "next/link";
import { useWishlist } from "@/lib/wishlist-context";

export default function WishlistIndicator() {
  const { itemCount } = useWishlist();

  return (
    <Link
      href="/wishlist"
      className="relative flex items-center justify-center p-1 text-charcoal/70 transition-colors hover:text-moon-indigo"
      aria-label="Wishlist"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-sun-terracotta text-[9px] font-bold text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
