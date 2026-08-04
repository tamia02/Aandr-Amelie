import Link from "next/link";
import Image from "next/image";
import { nav, socials } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant/30 bg-cream-deep py-10">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 sm:px-10 md:grid-cols-12 lg:px-16">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="mb-6 block hover:opacity-85 transition-opacity"
          >
            <Image
              src="/images/logo.png"
              alt="Aandré Amelie Skincare Logo"
              width={140}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="mb-8 max-w-xs text-sm text-charcoal/70">
            Elevating daily skincare into a sacred ritual of self-discovery
            and balance.
          </p>
          <div className="flex gap-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center border border-outline-variant/30 text-charcoal/70 transition-colors hover:border-moon-indigo hover:text-moon-indigo"
              >
                <SocialIcon name={s.label} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <h5 className="mb-6 text-xs font-semibold tracking-[0.2em] text-moon-indigo uppercase">
            Explore
          </h5>
          <ul className="space-y-4 text-sm text-charcoal/70">
            <li>
              <Link href="/" className="hover:text-moon-indigo">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-moon-indigo">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h5 className="mb-6 text-xs font-semibold tracking-[0.2em] text-moon-indigo uppercase">
            Support
          </h5>
          <ul className="space-y-4 text-sm text-charcoal/70">
            <li>
              <Link href="/contact" className="hover:text-moon-indigo">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-moon-indigo">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/terms#shipping-returns" className="hover:text-moon-indigo">
                Shipping &amp; Returns
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-moon-indigo">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-moon-indigo">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h5 className="mb-6 text-xs font-semibold tracking-[0.2em] text-moon-indigo uppercase">
            Newsletter
          </h5>
          <p className="mb-6 text-sm text-charcoal/70">
            Join the skincare journal for exclusive access and botanical
            insights.
          </p>
          <NewsletterForm />
        </div>

        <div className="md:col-span-12 mt-4 flex flex-wrap justify-center gap-6 sm:gap-12">
          {["100% Organic", "Cruelty-Free", "Vegan", "Zero Synthetics"].map((cert) => (
            <div key={cert} className="flex items-center gap-2 text-xs font-bold tracking-widest text-moon-indigo uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-sun-terracotta" />
              {cert}
            </div>
          ))}
        </div>

        <div className="md:col-span-12 mt-8 text-center text-[10px] text-charcoal/70 uppercase tracking-widest border-t border-outline-variant/30 pt-8">
          <p>Registered Address: 123 Skincare Avenue, Mumbai, Maharashtra 400001 | GSTIN: 27AABCU9603R1ZM</p>
        </div>

        <div className="mt-4 flex flex-col gap-4 text-xs tracking-[0.1em] text-charcoal/70 uppercase sm:flex-row sm:items-center sm:justify-between md:col-span-12">
          <p>© {new Date().getFullYear()} Aandré Amelie Skincare. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p>All Shades, All Souls.</p>
            <span className="hidden sm:inline text-charcoal/70">|</span>
            <Link 
              href="https://vaslix.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-semibold hover:text-moon-indigo transition-colors"
            >
              Made by Tasmiya :)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
