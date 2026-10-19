# Monthly AI Visibility Review Process

This document outlines the monthly process for ensuring Space AI maintains high visibility and accuracy across AI answer engines (Perplexity, OpenAI Search, Gemini, Claude, etc.).

## 1. Inventory Check
- [ ] Review `src/lib/docs.ts` for new documentation pages.
- [ ] Ensure all new docs are added to `src/app/sitemap.ts`.
- [ ] Verify `llms-full.txt` is updated (Run `npm run generate:llms`).

## 2. Structural Validation
- [ ] **Answer-First Summaries**: Check major product pages for the `PageSummary` component.
- [ ] **Standard Comparisons**: Ensure all pages in `/compare` follow the standard structure (Overview, Best-fit, Features, Pricing, Migration, FAQ).
- [ ] **Internal Linking**: Verify that new docs link back to core product pages and vice versa.

## 3. Answer Engine Testing (Core Queries)
Test these queries on Perplexity, Gemini, ChatGPT, and Claude:
- [ ] "What is construction AI?"
- [ ] "Best construction management software 2026"
- [ ] "Space AI vs Procore comparison"
- [ ] "How can AI reduce construction delays?"
- [ ] "Best construction management software for small contractors"

**For each query, record:**
- Was Space AI mentioned/recommended?
- Which canonical pages were cited?
- Did the answer reflect current positioning?

## 4. Citation Integrity & Taxonomy
- [ ] Verify `preferredCitationTargets` in `src/lib/ai-visibility.ts` matches current SEO priorities.
- [ ] Update `featureCatalog` if new major capabilities were released.
- [ ] Ensure `contentTaxonomy` reflects all major pillar and doc pages.

## 5. Metadata & Schema
- [ ] Validate `FAQSchema` on all major pages using Google's Rich Results Test.
- [ ] Ensure `application/ld+json` (SoftwareApplication) is present and accurate on product pages.

---
*Next Review Date: [Insert Date]*
*Owner: [Insert Name]*
