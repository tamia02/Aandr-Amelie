"use client";

import { useState } from "react";
import Link from "next/link";
import { journalArticles, BlogPost } from "@/data/journal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import NewsletterForm from "@/components/NewsletterForm";

const CATEGORIES = ["All", "Ingredient Guide", "Use-Case", "Ritual", "Wellness"];

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? journalArticles
    : journalArticles.filter((art) => art.category === selectedCategory);

  const featuredArticle = journalArticles[0];
  const restArticles = filteredArticles.filter((art) => art.slug !== featuredArticle.slug);

  return (
    <div className="mx-auto max-w-[1440px] px-5 pt-12 pb-12 sm:px-10 lg:px-16">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "Journal" }]} />

      <section className="mb-8 flex flex-col items-start border-b border-sun-terracotta/20 pb-6">
        <Reveal>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-px w-6 bg-sun-terracotta/40"></span>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-sun-terracotta uppercase">
              The Skincare Journal
            </span>
          </div>
          <h1 className="font-serif text-2xl text-charcoal italic mb-3">Sip, Spray, &amp; Reflect</h1>
          <p className="max-w-xl text-[11px] leading-relaxed text-charcoal/70">
            Dive into ingredient guides, alchemical use-cases, and lifestyle rituals. Discover the science and soul behind living botanical hydrosols.
          </p>
        </Reveal>
      </section>

      {/* Category Tabs */}
      <div className="mb-12 border-b border-outline-variant/30 pb-2">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`pb-3 text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 border-b cursor-pointer ${
                selectedCategory === cat
                  ? "border-moon-indigo text-moon-indigo font-bold"
                  : "border-transparent text-charcoal/50 hover:text-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Layout */}
      {selectedCategory === "All" && filteredArticles.length > 0 && (
        <section className="mb-8">
          <Reveal>
            <div className="border border-outline-variant/25 bg-cream-deep p-8 sm:p-12 hover:border-sun-terracotta transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4 text-xs font-semibold tracking-wider text-outline uppercase">
                  <span>{featuredArticle.category}</span>
                  <span>•</span>
                  <span>{featuredArticle.date}</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal leading-tight hover:text-moon-indigo transition-colors italic">
                  <Link href={`/journal/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>
                <p className="text-[11px] sm:text-xs leading-relaxed text-charcoal/70 max-w-xl">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4">
                  <span className="text-[11px] font-medium text-charcoal/50 uppercase tracking-widest">
                    {featuredArticle.readTime}
                  </span>
                  <Link
                    href={`/journal/${featuredArticle.slug}`}
                    className="text-xs font-semibold tracking-widest text-charcoal hover:text-moon-indigo uppercase inline-flex items-center gap-2"
                  >
                    Read Ritual <span>→</span>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex items-center justify-center p-4">
                <div className="relative aspect-square w-full max-w-[320px] rounded-full overflow-hidden border border-outline-variant/20 shadow-xl">
                  {/* Actual realistic image instead of just text */}
                  {featuredArticle.coverImage ? (
                    <img 
                      src={featuredArticle.coverImage} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-moon-sage/10 flex items-center justify-center">
                      <span className="font-serif text-6xl text-outline/35 italic select-none">
                        {featuredArticle.ingredient}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Grid for secondary/filtered articles */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* If filtering, show all matches; otherwise show non-featured */}
          {(selectedCategory === "All" ? restArticles : filteredArticles).map((article, i) => (
            <Reveal key={article.slug} delay={i * 80}>
              <div className="border border-outline-variant/20 bg-cream-deep/30 p-8 hover:border-sun-terracotta hover:bg-cream-deep/45 transition-all duration-300 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[10px] font-semibold tracking-wider text-outline uppercase mb-4">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl text-charcoal mb-3 hover:text-moon-indigo transition-colors leading-snug italic">
                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-[11px] text-charcoal/70 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/20 mt-auto">
                  <span className="text-[10px] font-medium text-charcoal/50 uppercase tracking-wider">
                    {article.readTime}
                  </span>
                  <Link
                    href={`/journal/${article.slug}`}
                    className="text-xs font-semibold tracking-widest text-charcoal hover:text-moon-indigo uppercase inline-flex items-center gap-2"
                  >
                    Read <span>→</span>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 border-t border-outline-variant/30 pt-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="mb-4 block text-[10px] font-sans tracking-[0.2em] text-sun-terracotta uppercase">
            Join The Circle
          </span>
          <h2 className="font-serif text-3xl italic text-charcoal mb-4">
            Notes on Nature &amp; Skincare
          </h2>
          <p className="mb-8 text-xs leading-relaxed text-charcoal/70">
            Subscribe to our journal for exclusive insights on botanical living, skincare rituals, and early access to small-batch releases.
          </p>
          <div className="mx-auto max-w-md">
            <NewsletterForm tone="light" />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
