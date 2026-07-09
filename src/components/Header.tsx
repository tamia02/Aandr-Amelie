"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, concernsSubnav } from "@/data/site";
import CartIndicator from "./CartIndicator";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/85 py-5 border-b border-outline-variant/15 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="hover:opacity-85 transition-opacity block py-1"
        >
          <img
            src="/images/logo.png"
            alt="Aandré Amelie"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const isConcern = item.href === "/concern";
            const active = isActive(item.href);

            if (isConcern) {
              return (
                <div key={item.href} className="group relative">
                  <button
                    className={`flex items-center gap-1.5 pb-1 text-xs font-semibold tracking-[0.15em] text-charcoal/70 uppercase transition-colors duration-300 hover:text-moon-indigo cursor-pointer ${
                      active ? "border-b border-moon-indigo/40 text-moon-indigo" : ""
                    }`}
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="h-3 w-3 transition-transform duration-300 group-hover:rotate-185"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {/* Dropdown Menu */}
                  <div className="invisible absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 border border-outline-variant/30 bg-cream p-2 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:visible group-hover:opacity-100">
                    <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t border-l border-outline-variant/30 bg-cream" />
                    <div className="relative z-10 flex flex-col">
                      {concernsSubnav.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="px-4 py-2.5 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase transition-colors hover:bg-cream-deep hover:text-moon-indigo"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`pb-1 text-xs font-semibold tracking-[0.15em] text-charcoal/70 uppercase transition-colors duration-300 hover:text-moon-indigo ${
                  active ? "border-b border-moon-indigo/40 text-moon-indigo" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 border-b border-outline-variant/30 bg-transparent py-1 pr-6 text-xs text-charcoal outline-none transition-all focus:w-48 focus:border-moon-indigo placeholder:text-charcoal/40"
              />
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="absolute right-0 h-3.5 w-3.5 text-charcoal/60"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <CartIndicator />
          </div>

          {/* Mobile Navigation details tag trigger */}
          <details 
            className="relative md:hidden"
            open={isMobileOpen}
            onToggle={(e) => setIsMobileOpen((e.target as HTMLDetailsElement).open)}
          >
            <summary className="cursor-pointer list-none text-xs font-semibold tracking-[0.15em] text-charcoal/70 uppercase outline-none select-none">
              {isMobileOpen ? "Close" : "Menu"}
            </summary>
            <div className="absolute right-0 z-50 mt-4 w-60 border border-outline-variant/30 bg-cream py-3 shadow-lg rounded-sm animate-fade-in">
              {nav.map((item) => {
                const isConcern = item.href === "/concern";
                const active = isActive(item.href);

                if (isConcern) {
                  return (
                    <div key={item.href} className="border-b border-outline-variant/20 pb-2 mb-2">
                      <span className="block px-5 py-2 text-[10px] font-bold tracking-[0.15em] text-charcoal/40 uppercase">
                        {item.label}
                      </span>
                      {concernsSubnav.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`block px-7 py-2.5 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase hover:text-moon-indigo ${
                            pathname === sub.href ? "text-moon-indigo bg-cream-deep/50" : ""
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`block px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase hover:text-moon-indigo ${
                      active ? "text-moon-indigo bg-cream-deep/50" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-outline-variant/20 mt-2 pt-2 pb-2 px-5">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full border-b border-outline-variant/30 bg-transparent py-1.5 pr-6 text-xs text-charcoal outline-none focus:border-moon-indigo placeholder:text-charcoal/40"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="absolute right-0 h-3.5 w-3.5 text-charcoal/60"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="border-t border-outline-variant/20 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsMobileOpen(false)}
                  className={`block px-5 py-2.5 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase hover:text-moon-indigo ${
                    pathname === "/cart" ? "text-moon-indigo bg-cream-deep/50" : ""
                  }`}
                >
                  Cart
                </Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
