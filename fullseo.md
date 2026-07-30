# Full SEO Audit: Aandré Amelie (aandreamelie.com)

**Audit Date:** 2026-07-30
**Business Type:** E-commerce (natural hydrosol skincare & haircare, India, INR)
**Pages Crawled:** 29 (full sitemap: homepage, shop index + 10 product pages, concern index + 4 concern hubs, journal index + 5 articles, our-story, purity, faq, contact, terms, privacy-policy)
**Method:** Direct HTTP/HTML analysis (curl, header inspection, JSON-LD extraction, live AI-crawler user-agent testing, title/meta/H1/canonical crawl of every indexed URL). No Lighthouse/CrUX/GSC data — those require the `seo-google` skill with Google API credentials, which aren't configured in this environment.

---

## Executive Summary

**SEO Health Score: 74/100 (Good)**

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Technical SEO | 85/100 | 22% | 18.7 |
| Content Quality | 75/100 | 23% | 17.25 |
| On-Page SEO | 55/100 | 20% | 11.0 |
| Schema / Structured Data | 88/100 | 10% | 8.8 |
| Performance (CWV) | 68/100* | 10% | 6.8 |
| AI Search Readiness | 68/100 | 10% | 6.8 |
| Images | 95/100 | 5% | 4.75 |
| **Total** | | | **74.1 ≈ 74/100** |

*Performance is an architectural estimate (SSR, edge caching, Next/Image optimization observed) — not a measured Lighthouse/CrUX score.

The site's foundation is genuinely strong for a brand-new store: full JSON-LD coverage (Product, Organization, WebSite, Article, FAQPage, BreadcrumbList), clean crawlability, zero missing alt text, and content built around real long-tail queries ("rosewater benefits," "rosemary water for hair growth," "jojoba oil for acne") that map directly onto commercial intent. **The one category dragging the score down is On-Page SEO — and it's driven by a single templating bug, not ten separate problems.**

### Top 5 Critical/High Issues
1. **Duplicated brand suffix in the `<title>` tag on ~20 pages** — every product, concern, journal, and info page ends in `"... | Aandré Amelie — Aandré Amelie"` instead of `"... | Aandré Amelie"`. This is one root-cause template bug, not per-page mistakes.
2. **`/journal` (blog index) has an identical `<title>` and meta description to the homepage**, and neither page has a self-referencing canonical tag — duplicate-content risk between your two most important pages.
3. **Missing canonical tags on 5 pages**: `/`, `/journal`, `/purity`, `/terms`, `/privacy-policy`.
4. **Missing `<h1>` entirely on `/concern` and `/contact`** — both pages render with no H1 in the DOM.
5. **Several product/concern titles run 82–100 characters** — Google truncates around ~580px (~60 chars), so meaningful keywords at the end are getting cut in search results.

### Top 5 Quick Wins
1. Fix the title-template bug once → fixes it on every product, concern, and journal page simultaneously.
2. Add `<link rel="canonical">` to the 5 pages missing it (self-referencing).
3. Give `/journal` its own unique title + meta description (it currently clones the homepage's).
4. Add a visible `<h1>` to `/concern` ("Shop by Skin & Wellness Concern") and `/contact` ("Contact Us").
5. Trim the 6 product titles over 80 characters down toward ~60 so full titles display in SERPs.

---

## Technical SEO (85/100)

**What works:**
- `robots.txt` is correctly configured (`Allow: /`, sensible disallows on `/cart`, `/checkout`, `/order-confirmation`, `/admin`), with a `Sitemap:` directive.
- Live test confirmed 200 OK responses for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, and CCBot — no AI or search crawler is blocked.
- Content is server-rendered (Next.js `X-Nextjs-Prerender: 1`) — crawlers see full HTML, not a JS shell.
- HTTPS is enforced (301/308 → `https://www.aandreamelie.com/`) with HSTS (`max-age=31536000; includeSubDomains`).
- Strong security headers: CSP, X-Content-Type-Options, X-Frame-Options, Permissions-Policy.
- `sitemap.xml` is valid XML, lists all 29 live URLs with sensible `priority`/`changefreq` values, and every URL returned HTTP 200 in this crawl.
- `llms.txt` is live and well-structured (brand summary, founder, full product catalog, concern hubs, journal links).

**Findings:**

| Title | Severity | Evidence | Recommendation |
|---|---|---|---|
| Missing canonical tags | High | No `<link rel="canonical">` found on `/`, `/journal`, `/purity`, `/terms`, `/privacy-policy` | Add self-referencing canonical tags to all 5. Prevents `www` vs non-`www` and trailing-slash duplication in search indexes. |
| No `Content-Security-Policy` issues | Info | CSP present and correctly scoped (`default-src 'self'` etc.) | No action needed. |

---

## Content Quality (75/100)

**What works:**
- Journal articles target specific, real informational queries with commercial adjacency: rosewater benefits, drinking rosewater, lavender for sleep, jojoba oil for acne, rosemary for hair growth — exactly the long-tail cluster that can realistically rank and feed the "rose water" topic.
- Named author (Soniyaa Sethi, founder) with a linked bio page — real E-E-A-T signal.
- Product descriptions are benefit-led and specific rather than generic marketing filler.

**Findings:**

| Title | Severity | Evidence | Recommendation |
|---|---|---|---|
| `/journal` index duplicates homepage title + meta description | High | `diff` of `<title>` on `/` and `/journal` returned identical text; both show "Aandré Amelie — All Shades, All Souls" | Write a unique title ("Journal — Botanical Skincare Guides \| Aandré Amelie") and meta description for the journal index. |
| Journal has only 5 articles | Low | Sitemap listing | Not a defect for a new site, but the concern hubs (oily-acne, sensitive-dry, hair-scalp, sleep-stress) each currently link to only 1–2 journal posts — publishing 2–3 more per concern would strengthen topical clusters. |

---

## On-Page SEO (55/100)

This is the category actually holding the score back, and nearly all of it traces to one root cause.

### Root-cause finding: duplicated brand suffix in `<title>`

Every templated page (all 10 product pages, all 4 concern pages, all 5 journal articles, `/our-story`, `/purity`, `/faq`, `/contact`) renders:

```
{Page Title} | Aandré Amelie — Aandré Amelie
```

instead of the intended:

```
{Page Title} | Aandré Amelie
```

This is almost certainly one shared metadata template appending the site name twice (e.g. a page-level `title: "${x} | Aandré Amelie"` combined with a Next.js `title.template` of `"%s — Aandré Amelie"` in the root layout). **Fix it once in the layout/metadata config and it resolves on every affected page.**

**Exact before → after for every product page:**

| Product URL | Current title (chars) | Fixed title (chars) |
|---|---|---|
| /shop/royal-rose-elixir | `Royal Rose Elixir — Edible Rosewater Toner & Mist \| Aandré Amelie — Aandré Amelie` (91) | `Royal Rose Elixir — Edible Rosewater Toner & Mist \| Aandré Amelie` (68) |
| /shop/glow-quinch-elixir | `Glow Quinch Elixir — Soothing Lavender Mist & Sleep Drink \| Aandré Amelie — Aandré Amelie` (99) | `Glow Quinch Elixir — Soothing Lavender Mist & Sleep Drink \| Aandré Amelie` (76) |
| /shop/acne-shield | `Acne Shield — Clarifying Mandarin & Basil Hydrosol Toner \| Aandré Amelie — Aandré Amelie` (98) | `Acne Shield — Clarifying Mandarin & Basil Hydrosol Toner \| Aandré Amelie` (75) |
| /shop/vital-grow-scalp | `Vital Grow Scalp — Hair Growth Rosemary & Curry Leaf Tonic \| Aandré Amelie — Aandré Amelie` (100) | `Vital Grow Scalp — Hair Growth Rosemary & Curry Leaf Tonic \| Aandré Amelie` (77) |
| /shop/the-trial-pack | `The Trial Pack \| Aandré Amelie — Aandré Amelie` (50) | `The Trial Pack \| Aandré Amelie` (32) |
| /shop/super-fine-multani-mitti | `Super Fine Multani Mitti - Pure Clay Face Mask \| Aandré Amelie — Aandré Amelie` (82) | `Super Fine Multani Mitti – Pure Clay Face Mask \| Aandré Amelie` (65) |
| /shop/imported-pink-clay | `Imported Pink Clay - Gentle Detox Mask \| Aandré Amelie — Aandré Amelie` (74) | `Imported Pink Clay – Gentle Detox Mask \| Aandré Amelie` (57) |
| /shop/neem-and-multani-mitti | `Neem & Multani Mitti - Anti-Acne Clay Mask \| Aandré Amelie — Aandré Amelie` (82) | `Neem & Multani Mitti – Anti-Acne Clay Mask \| Aandré Amelie` (61) |
| /shop/rose-and-sandal-multani-mitti | `Rose & Sandal Multani Mitti - Brightening Clay \| Aandré Amelie — Aandré Amelie` (86) | `Rose & Sandal Multani Mitti – Brightening Clay \| Aandré Amelie` (65) |
| /shop/turmeric-and-sandal-multani-mitti | `Turmeric & Sandal Multani Mitti - Healing Glow \| Aandré Amelie — Aandré Amelie` (86) | `Turmeric & Sandal Multani Mitti – Healing Glow \| Aandré Amelie` (65) |

The same duplicate-suffix pattern also affects `/concern/*` (4 pages), `/journal/*` (5 articles), `/our-story`, `/purity`, `/faq`, `/contact` — fixing the shared template fixes all of these at once too.

**Other on-page findings:**

| Title | Severity | Evidence | Recommendation |
|---|---|---|---|
| Missing `<h1>` on `/concern` | Medium | No `<h1>` tag found in rendered HTML | Add `<h1>Shop by Skin & Wellness Concern</h1>` (matches existing title copy) |
| Missing `<h1>` on `/contact` | Medium | No `<h1>` tag found in rendered HTML | Add `<h1>Contact Our Store</h1>` or similar |
| `/journal` shares title/description with homepage | High | See Content Quality section | Fix alongside the journal index rewrite |

---

## Schema & Structured Data (88/100)

**What works:**
- Every product page carries valid `Product` schema: name, image, description, SKU, brand, and a complete `Offer` (price, currency, availability, condition, `priceValidUntil`) — spot-checked across 4 different products, all consistent and matching the visible on-page price (no schema/display mismatch).
- `BreadcrumbList` schema present on product, concern, and journal pages.
- `Article` schema on journal posts with `datePublished`, `author` (now a named `Person`), and `publisher` with logo.
- Homepage carries `Organization` + `WebSite` schema with `sameAs` links to Instagram, LinkedIn, and the Amazon.in storefront.
- `/faq` carries `FAQPage` schema with 10 `Question` entries.

**Findings:**

| Title | Severity | Evidence | Recommendation |
|---|---|---|---|
| No `CollectionPage`/`ItemList` schema on `/concern` hub pages | Low | Only `BreadcrumbList` present | Add `ItemList` linking each concern hub to its recommended products — reinforces the concern→product relationship for AI Overviews and rich results. |
| No `AggregateRating`/`Review` schema on product pages | Low | Not present in any spot-checked product | Once you have customer reviews, add `AggregateRating` — high-value for both classic SERP rich snippets and AI shopping answers. |

---

## Performance (68/100, estimated — not directly measured)

No Lighthouse, CrUX, or PageSpeed Insights data was collected (requires the `seo-google` skill with Google API credentials, not configured here). Architectural signals observed:
- Vercel edge caching (`X-Vercel-Cache: HIT`) — fast repeat-visit delivery.
- Server-rendered/prerendered pages (fast Time-to-First-Byte likely).
- Next/Image pipeline in use (`/_next/image?...&w=...&q=75` responsive `srcset`) — automatic format optimization (WebP/AVIF) and responsive sizing.

**Recommendation:** run a real PageSpeed Insights / CrUX check (`seo-google`, once Google API credentials are available) before treating this score as final — it's currently an estimate based on architecture, not field data.

---

## AI Search Readiness (68/100)

This mirrors the dedicated GEO audit run earlier today (see `GEO-AUDIT-REPORT.md`). Summary: all major AI crawlers confirmed allowed, `llms.txt` live, Organization/FAQPage schema in place, named authorship on content — the remaining gap is third-party brand corroboration (no Wikipedia, Reddit, Trustpilot, or YouTube presence found), which can't be fixed on-site.

---

## Images (95/100)

- Zero images missing `alt` text across all sampled pages (homepage, shop index, product pages, journal, concern) — confirmed fixed sitewide.
- Next/Image responsive `srcset` + automatic format optimization in use.
- No further action needed here.

---

## Appendix: All Crawled Pages

| URL | Title Length | Canonical | H1 Present | Notes |
|---|---|---|---|---|
| / | 40 | ❌ Missing | ✅ | Homepage — needs self-canonical |
| /shop | 36 | ❌ Missing | ✅ | |
| /shop/royal-rose-elixir | 91 | ✅ | ✅ | Duplicate brand suffix |
| /shop/glow-quinch-elixir | 99 | ✅ | ✅ | Duplicate brand suffix, over length |
| /shop/acne-shield | 98 | ✅ | ✅ | Duplicate brand suffix, over length |
| /shop/vital-grow-scalp | 100 | ✅ | ✅ | Duplicate brand suffix, over length |
| /shop/the-trial-pack | 50 | ✅ | ✅ | Duplicate brand suffix |
| /shop/super-fine-multani-mitti | 82 | ✅ | ✅ | Duplicate brand suffix |
| /shop/imported-pink-clay | 74 | ✅ | ✅ | Duplicate brand suffix |
| /shop/neem-and-multani-mitti | 82 | ✅ | ✅ | Duplicate brand suffix |
| /shop/rose-and-sandal-multani-mitti | 86 | ✅ | ✅ | Duplicate brand suffix |
| /shop/turmeric-and-sandal-multani-mitti | 86 | ✅ | ✅ | Duplicate brand suffix |
| /concern | 71 | ✅ | ❌ Missing | Duplicate brand suffix + no H1 |
| /concern/oily-acne | 83 | ✅ | ✅ | Duplicate brand suffix |
| /concern/sensitive-dry | 77 | ✅ | ✅ | Duplicate brand suffix |
| /concern/hair-scalp | 78 | ✅ | ✅ | Duplicate brand suffix |
| /concern/sleep-stress | 81 | ✅ | ✅ | Duplicate brand suffix |
| /journal | 40 | ❌ Missing | ✅ | Duplicates homepage title/description |
| /journal/rosewater-benefits | 86 | ✅ | ✅ | Duplicate brand suffix |
| /journal/can-you-drink-rosewater | 89 | ✅ | ✅ | Duplicate brand suffix |
| /journal/lavender-sleep-ritual | 85 | ✅ | ✅ | Duplicate brand suffix |
| /journal/jojoba-oil-acne | 82 | ✅ | ✅ | Duplicate brand suffix |
| /journal/rosemary-hair-growth | 89 | ✅ | ✅ | Duplicate brand suffix |
| /our-story | 71 | ✅ | ✅ | Duplicate brand suffix |
| /purity | 57 | ❌ Missing | ✅ | Duplicate brand suffix |
| /faq | 69 | ✅ | ✅ | Duplicate brand suffix |
| /contact | 53 | ✅ | ❌ Missing | Duplicate brand suffix + no H1 |
| /terms | 41 | ❌ Missing | ✅ | |
| /privacy-policy | 33 | ❌ Missing | ✅ | |
