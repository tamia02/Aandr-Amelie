# GEO Audit Report: Aandré Amelie

**Audit Date:** 2026-07-30
**URL:** https://aandreamelie.com (canonical: https://www.aandreamelie.com/)
**Business Type:** E-commerce (natural/hydrosol skincare & haircare, India-based, INR pricing)
**Pages Analyzed:** 9 (homepage, /shop, /shop/royal-rose-elixir, /concern, /concern/oily-acne cluster, /journal, /journal/rosewater-benefits, /faq, /our-story, /contact) + full sitemap review (29 URLs)

---

## Executive Summary

**Overall GEO Score: 54/100 (Poor — bordering Fair)**

Aandré Amelie has a technically clean foundation — server-rendered Next.js pages, open access for every major AI crawler, and solid Product schema on shop pages — but it is nearly invisible as a recognized *entity*. There is no Organization schema anywhere on the site, no llms.txt, no FAQPage schema despite a full FAQ page, and almost no third-party brand corroboration (no Wikipedia, Reddit, Trustpilot, or YouTube presence). The biggest lever here isn't fixing broken infrastructure — it's giving AI systems something to anchor identity and trust to.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 60/100 | 25% | 15.0 |
| Brand Authority | 35/100 | 20% | 7.0 |
| Content E-E-A-T | 55/100 | 20% | 11.0 |
| Technical GEO | 75/100 | 15% | 11.25 |
| Schema & Structured Data | 50/100 | 10% | 5.0 |
| Platform Optimization | 45/100 | 10% | 4.5 |
| **Overall GEO Score** | | | **53.75 ≈ 54/100** |

---

## Critical Issues (Fix Immediately)

None found. Crawlability is genuinely good: robots.txt uses `Allow: /` with no crawler-specific blocks, and live requests confirm 200 OK responses for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, and CCBot. Content is server-rendered (Next.js `X-Nextjs-Prerender: 1`), so AI crawlers see full HTML, not a JS shell.

## High Priority Issues (Fix Within 1 Week)

1. **No llms.txt file** — `/llms.txt` returns a soft-404 (Next.js not-found page served with `noindex`). This is the single fastest AI-visibility win available: it gives AI systems a structured map of the site (brand summary, key pages, product catalog) instead of forcing them to infer it from a Shopify-style Next.js crawl.
2. **Zero Organization/WebSite schema on the homepage.** Grep of the homepage HTML found no `application/ld+json` blocks at all — no brand name, logo, sameAs (social/marketplace links), founder, or contact entity. This is the primary signal AI models use to recognize "Aandré Amelie" as a real, citable brand rather than an anonymous domain.
3. **Journal articles attribute authorship to a generic `Organization`, not a named `Person`.** `datePublished` and `publisher` are present, but `author: {"@type":"Organization","name":"Aandré Amelie"}` gives AI systems no expert/individual to credit — undermines E-E-A-T for ingredient-science content (rosewater benefits, jojoba oil for acne, etc.).

## Medium Priority Issues (Fix Within 1 Month)

1. **FAQ page has no FAQPage schema.** `/faq` renders real Q&A content but zero `application/ld+json` blocks were found on the page — a missed, low-effort win for AI Overviews and voice-style answer extraction.
2. **`/concern` hub pages** (oily-acne, sensitive-dry, hair-scalp, sleep-stress) are a strong topical-cluster structure for GEO, but only carry BreadcrumbList schema — no `CollectionPage`/`ItemList` markup tying concern → recommended products.
3. **No third-party review aggregation.** No Trustpilot, no Reddit threads, no Wikipedia entry, no YouTube reviews were found in search. Amazon.in listings and a LinkedIn company page exist, but that's the extent of external corroboration — weak signal for AI "entity trust" scoring.
4. **Product claims ("chemical & preservative-free", "zero preservatives") have no visible substantiation** — no lab test references, certifications, or dermatologist review badges on product pages to back the claims AI systems would need to repeat them confidently.

## Low Priority Issues (Optimize When Possible)

1. **8 of 11 `<img>` tags on the homepage are missing `alt` text** — hurts both accessibility and AI image/context understanding.
2. **No Content-Security-Policy header** (other security headers — HSTS, X-Frame-Options, X-Content-Type-Options, Permissions-Policy — are all present and well-configured).
3. Founder story content ("Letter from Founder") is a good authenticity signal but the founder's full name/credentials aren't prominently machine-readable (no `Person` schema on `/our-story`).

---

## Category Deep Dives

### AI Citability (60/100)
Product meta descriptions are genuinely well-written for extraction — e.g. the Royal Rose Elixir description ("Sip and spray pure organic rosewater. Rejuvenates skin, aids digestion, eases reflux, and calms eyes. Zero preservatives.") is benefit-dense and quotable. Journal articles are structured with clear headings and a stated read-time. What's missing: no FAQ blocks with schema, no comparison/"vs" content, and no homepage entity data for AI to cite *who* is making these claims.

### Brand Authority (35/100)
Confirmed presence: Amazon.in product listings (Acne Shield Elixir, Vital Grow Scalp Elixir), Instagram, LinkedIn company page. Not found in search: Wikipedia, Reddit discussion, Trustpilot reviews, YouTube coverage. For a brand this early-stage that's not unusual, but it's the weakest category and the one AI models weight most heavily (3x stronger correlation with citation than backlinks, per Ahrefs Dec 2025 data cited in this skill's market context).

### Content E-E-A-T (55/100)
Strong: a genuine founder letter ("Heart to Heart / maan ki baat") signals authenticity and experience. Journal content covers real, specific topics (rose hydrosol, jojoba oil for acne, rosemary for hair growth) rather than generic filler. Weak: no named, credentialed authors; no visible scientific/clinical substantiation of ingredient claims; no reviewer/expert-checked badges.

### Technical GEO (75/100)
This is the site's strength. Next.js SSR with prerendering means AI crawlers get full content, not an empty shell. All six tested AI crawler user-agents got 200 responses. Vercel edge caching is fast (`X-Vercel-Cache: HIT`). Security headers are mostly solid. The only real gap is the missing llms.txt and the missing CSP header.

### Schema & Structured Data (50/100)
Product pages: strong — `Product` schema with brand, SKU, price, currency, availability, plus `BreadcrumbList`. Article pages: decent — `Article` schema with dates and publisher, but organization-only authorship. Homepage and FAQ page: no schema at all. Concern hub pages: breadcrumbs only.

### Platform Optimization (45/100)
No platform-specific optimization was observed. The product-schema/SSR combination gives baseline eligibility for Google AI Overviews' shopping-adjacent surfaces, but nothing here specifically targets ChatGPT Browse, Perplexity, or Bing Copilot (e.g., no comparison tables, no explicit citation-friendly summary blocks).

---

## Quick Wins (Implement This Week)

1. **Add an `llms.txt`** at the root listing the brand, product catalog, concern pages, and journal — this alone typically moves the Technical GEO score the most for the least effort.
2. **Add `Organization`/`WebSite` JSON-LD to the homepage** — name, logo, url, `sameAs` links to Instagram, LinkedIn, and Amazon.in storefront.
3. **Add `FAQPage` schema to `/faq`** — content already exists, this is a markup-only change.
4. **Change journal article `author` from `Organization` to a named `Person`** (the founder, or a formulator/chemist if one exists) with a linked bio.
5. **Add `alt` text to the 8 homepage images missing it.**

## 30-Day Action Plan

### Week 1: Foundational Entity Signals
- [ ] Publish `llms.txt`
- [ ] Add Organization/WebSite schema to homepage
- [ ] Add alt text to all homepage images

### Week 2: Schema Completion
- [ ] Add FAQPage schema to `/faq`
- [ ] Add CollectionPage/ItemList schema to `/concern` hub pages
- [ ] Add CSP header

### Week 3: Authorship & Trust
- [ ] Convert journal `author` fields from Organization to named Person + add Person schema/bio page
- [ ] Add ingredient sourcing/testing substantiation to product pages (certifications, lab notes)

### Week 4: Brand Authority
- [ ] Claim/verify a Trustpilot profile and begin collecting reviews
- [ ] Ensure Amazon.in and Instagram links are cross-referenced via `sameAs` schema
- [ ] Seed authentic discussion (Reddit skincare communities, YouTube reviewer outreach)

---

## Appendix: Pages Analyzed

| URL | Title | GEO Issues |
|---|---|---|
| / (www.aandreamelie.com) | Aandré Amelie — All Shades, All Souls | No schema at all |
| /shop/royal-rose-elixir | Royal Rose Elixir | Good Product schema; no issues |
| /journal/rosewater-benefits | Rose Hydrosol: Benefits for Skin, Mood, and Digestion | Author = Organization, not Person |
| /faq | FAQ | No FAQPage schema |
| /our-story | Our Story | No Person schema for founder |
| /concern | Concern hub | Breadcrumb only, no CollectionPage schema |
| /contact | Contact | Phone present (+91 9540331566); no LocalBusiness schema |
| /llms.txt | — | 404 (does not exist) |
| /robots.txt | — | Correctly configured, all AI crawlers allowed |

---

*Note: This audit was performed via direct HTTP/HTML analysis (curl, header inspection, JSON-LD extraction, and live crawler user-agent testing) plus web search for third-party brand presence. Core Web Vitals (LCP/CLS/INP) were not measured — that requires a Lighthouse/PageSpeed Insights run, which wasn't performed in this pass.*
