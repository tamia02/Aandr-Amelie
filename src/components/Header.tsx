import Link from "next/link";
import { nav } from "@/data/site";
import CartIndicator from "./CartIndicator";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 py-6 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-xl tracking-tighter text-moon-indigo uppercase"
        >
          Aandré Amelie
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`pb-1 text-xs font-semibold tracking-[0.15em] text-charcoal/70 uppercase transition-colors duration-300 hover:text-moon-indigo ${
                i === 0 ? "border-b border-moon-indigo/20 text-moon-indigo" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <CartIndicator />
          </div>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-xs font-semibold tracking-[0.15em] text-charcoal/70 uppercase">
              Menu
            </summary>
            <div className="absolute right-0 z-50 mt-4 w-52 border border-outline-variant/30 bg-cream py-3 shadow-sm">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-5 py-2 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase hover:text-moon-indigo"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/cart"
                className="block px-5 py-2 text-xs font-semibold tracking-[0.1em] text-charcoal/70 uppercase hover:text-moon-indigo"
              >
                Cart
              </Link>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
