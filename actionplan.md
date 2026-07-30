# Action Plan: Aandré Amelie (aandreamelie.com)

Derived from `FULL-AUDIT-REPORT.md`. SEO Health Score: 74/100.

---

## Phase 1: Critical/High Fixes (Week 1)

- [ ] **Fix the duplicated brand suffix in the title template.** Find the shared metadata config (likely `app/layout.tsx` `title.template`, e.g. `"%s — Aandré Amelie"`) combined with per-page titles that already include `"| Aandré Amelie"`. Remove the duplication so pages render `{Page Title} | Aandré Amelie` once. This single fix corrects ~20 pages simultaneously — see the exact before/after title table in `findings/on-page.md`.
- [ ] **Give `/journal` its own title + meta description.** It currently clones the homepage exactly. Suggested: Title `"Journal — Botanical Skincare Guides | Aandré Amelie"`, Description `"Ingredient science and rituals for rosewater, lavender, jojoba, and rosemary — the research behind every Aandré Amelie formula."`
- [ ] **Add self-referencing canonical tags** to `/`, `/journal`, `/purity`, `/terms`, `/privacy-policy`.

## Phase 2: High-Impact Improvements (Weeks 2–3)

- [ ] **Add `<h1>` to `/concern`** (e.g. "Shop by Skin & Wellness Concern") and **`/contact`** (e.g. "Contact Our Store").
- [ ] **Trim the 6 product/concern titles still over 80 characters** after the suffix fix (Glow Quinch Elixir, Acne Shield, Vital Grow Scalp, and 3 clay masks) toward ~60 chars so full titles display in Google/AI Overview snippets without truncation.
- [ ] **Add `ItemList` schema to the 4 `/concern` hub pages**, linking each concern to its recommended products — reinforces the concern→product relationship for rich results and AI answer engines.

## Phase 3: Content & Authority (Month 2)

- [ ] **Publish 2–3 more journal articles per concern cluster.** Right now each `/concern/*` hub links to only 1–2 journal posts; more depth per cluster (e.g. more rosewater-adjacent content under `oily-acne` and `sensitive-dry`) directly supports the "rank for rose water" goal via long-tail coverage rather than competing head-on for the bare term.
- [ ] **Add `AggregateRating`/`Review` schema** to product pages once customer reviews exist.
- [ ] **Build third-party brand corroboration** (unchanged from the GEO audit): claim a Trustpilot profile, seed genuine Reddit/skincare-community discussion, pursue YouTube reviewer coverage. This is the one lever that doesn't move via on-site changes.

## Phase 4: Monitoring & Iteration (Ongoing)

- [ ] Run a real PageSpeed Insights / CrUX check once Google API credentials are available (`seo-google` skill) to replace the current architecture-based Performance estimate (68/100) with field data.
- [ ] Re-run this audit (`/seo-audit https://aandreamelie.com`) after Phase 1–2 fixes ship to confirm the Health Score moves and no regressions were introduced.
- [ ] Set a `seo-drift` baseline now so future template/content changes are diffed automatically.

---

## Effort Estimate Summary

| Item | Effort | Impact |
|---|---|---|
| Title template fix (root cause) | 1 code change | Fixes ~20 pages at once |
| Journal index title/description | 5 min | Removes duplicate-content risk with homepage |
| 5 missing canonical tags | 15 min | Prevents index duplication |
| 2 missing H1 tags | 10 min | Restores basic on-page structure |
| Title length trims (6 pages) | 20 min | Prevents SERP truncation |
| Concern hub ItemList schema | 1–2 hrs | Stronger concern→product signal for AI/rich results |
| More journal content per cluster | Ongoing | Supports realistic long-tail "rose water" ranking |
| Third-party review/mention building | Ongoing, weeks-months | Only lever for Brand Authority growth |
