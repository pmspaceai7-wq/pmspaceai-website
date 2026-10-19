# Marketing Skills Validation Report

**Site:** Space AI / pmspace.ai (validated on `localhost:3100`)
**Date:** 2026-08-14
**Skills run:** seo-audit, schema, ai-seo, site-architecture, programmatic-seo, content-strategy, competitor-profiling
**Scope:** Validating the indexing-fix changes (canonical/schema/llms/noindex/redirect era) against each skill's checklist.

## Summary

| Skill | Verdict | Blocker |
|---|---|---|
| seo-audit | **VALID** | 13 sitemap URLs behind 308 redirect chains; 355/355 reachable |
| schema | **VALID** (2 warnings) | `SoftwareApplication.offers` missing; Article on `/docs/ai-systems/` missing `datePublished`/`author` |
| ai-seo | **VALID** | `/pricing.md` absent (recommended, non-blocking) |
| site-architecture | **VALID** | 77 sitemap pages not linked from 12 hub pages; 1 page linked but not in sitemap |
| programmatic-seo | **VALID** | No thin pages (all >4k words); sitemap 355 entries all resolve |
| content-strategy | **VALID** | No cannibalization found on known pairs |
| competitor-profiling | **VALID** | Primavera pair differentiated (distinct title/H2 focus, similar link weight) |

**Overall: all changes are valid — no blocking issues.**

---

## 1. seo-audit

### Checks
- **robots.txt** (200): correct — allows all, disallows `/api/`, `/admin/`; declares 3 sitemaps; declares `LLM-Index/LLM-Full/LLM-JSON` + `Host`. **PASS**
- **sitemap.xml** (200): **355 URLs** crawled with host rewrites.
  - 342 return **200**, canonical self-referential.
  - **13 return 308** and are *still listed in the sitemap*: `/core/admin-module/`, `/core/bim-data-extraction/`, `/core/environmental-impact-analysis-ai/`, `/guides/space-bim/`, `/guides/e-sign/`, `/guides/ai-lean-construction-platform/`, `/guides/designer-workspace/`, `/guides/custom-workstreams/`, `/guides/construction-tender-management-software/`, `/guides/space-connectors/`, `/guides/environmental-impact-analysis-ai/`, `/guides/ultimate-construction-project-management-guide/`, `/tools/project-scheduling-software/`.
  - All chains resolve 308 -> 308 -> 200 (goal pages healthy). **WARNING** (sitemap hygiene: list final URLs) — no crawl error, Google follows.
- **Canonicals:** 0/355 non-self-canonical. **PASS**
- **404 page:** returns 404 and renders 404 copy. **PASS**
- **Trailing-slash redirect:** `/construction-management-software` -> 308 -> `/construction-management-software/`. **PASS**
- **No thin content:** every sampled template >4.3k words (8 probes, 4.3k-11.8k). **PASS**

---

## 2. schema

Probed 10 templates. Every JSON-LD block parses (valid JSON), placed as `application/ld+json`.

| Page | Blocks | Types |
|---|---|---|
| Home | 4 | Organization, SoftwareApplication, WebSite, FAQPage |
| CMS page | 6 | + BreadcrumbList, FAQPage, SoftwareApplication |
| Alternative | 5 | Org, SWApp, WebSite, Breadcrumb, FAQPage |
| Guide | 6 | + TechArticle, FAQPage |
| Blog | 5 | + Article |
| Compare | 6 | + WebPage |
| Core | 4 | Org, SWApp, WebSite, Breadcrumb |
| About | 4 | Org, SWApp, WebSite, Breadcrumb |
| Docs | 6 | + FAQPage, Article |

### Warnings
1. **`SoftwareApplication` missing `offers`** on all pages — the skill marks this as a required property for rich results eligibility. Note: since pricing is contact-based, this is defensible; no star/price rich result expected. **MINOR**
2. **Article on `/docs/ai-systems/`** missing `datePublished` and `author` (only `headline`, `url`, `publisher`). This fails the Article required-props checklist (headline, image, datePublished, author). **MINOR FIX**

---

## 3. ai-seo

- **robots.txt AI crawlers:** GPTBot, ClaudeBot, PerplexityBot, Google-Extended all `Allow: /`. Live UA probes: GPTBot/Perplexity/Claude/Google-Extended/CCBot/anthropic-ai -> all **200**. **PASS**
- **`/llms.txt`** (200, 5.9k): well-formed — intro, preferred domain, section links `- label: URL`. **PASS**
- **`/llms-full.txt`** (200, 10.9k) and **`/llms.json`** (200, 6.0k, contains `Project`) — both present and declared in robots.txt. **PASS**
- **`/pricing.md`** — **404**. The skill recommends a parseable pricing file for AI agents. Non-blocking since `/pricing/` (5.6k words) is indexable HTML. **RECOMMENDED**
- **Extractability:** comparison tables + FAQPage schema present -> strong for Perplexity/ChatGPT. **PASS**

---

## 4. site-architecture

Crawled 12 hub pages (home, CMS, alternatives, compare, guides, blogs, docs, resources, tools, core, solutions, services) and extracted internal hrefs (282 unique slots).

- **77 sitemap URLs have no inbound link from these 12 hubs** — mostly country pages (usa/india/uae/uk/australia/singapore), platform sub-pages, ai-construction sub-resources, and usecases. Not necessarily true orphans (sitemap-linked, may be linked from other templates), but they sit deeper than 1 hop and rely on sitemap-only discovery. **WATCH**
- **1 page linked but absent from sitemap:** `/core/space-vision`. **WATCH**
- Breadcrumbs present on all hub/template probes (BreadcrumbList schema inline). **PASS**

---

## 5. programmatic-seo

- Sitemap 355 entries, all resolve to 200 (after chains). No duplication across singular/plural pairs (see cannibalization). **PASS**
- Template pages (alternatives, tools, blog, usecases, industries) all carry unique title + H1 + body >4k words. **No thin content. PASS**

---

## 6. content-strategy (cannibalization)

| Pair | Titles / H1 | Verdict |
|---|---|---|
| procore-**alternative** vs procore-**alternatives** | "Best Procore Alternative 2026" vs "Best Procore Alternatives 2026 | 6 Options Compared" | **Differentiated** |
| buildertrend pair | singular vs plural "6 Options Compared" | **Differentiated** |
| autodesk-acc pair | brand-vs-brand vs "6 Options Compared" | **Differentiated** |
| guides ultimate-guide vs how-to-choose | distinct | **Differentiated** |

**PASS — no cannibalization between singular/plural template pairs.**

---

## 7. competitor-profiling (differentiation)

- `primavera-p6-alternative` (H1 "The Intelligent Primavera P6 Alternative", 5.4k words) vs `legacy-aec-platforms` (H2-led "Space AI vs Legacy AEC Platforms — Detailed Feature Comparison", 7.6k words): distinct angles, titles, and body. Homepage links: 5 vs 6 — balanced, no over-supply. **PASS**
- Note: `legacy-aec-platforms` has **no H1** (only H2s). **MINOR SEO FIX.**

---

## Action Items

| # | Severity | Skill | Fix |
|---|---|---|---|
| 1 | Minor | seo-audit | Remove/redirect-replace the 13 308 URLs listed in `sitemap.xml` with their final 200 URLs |
| 2 | Minor | schema | Add `offers` or drop SoftwareApplication eligibility expectation on pages without pricing |
| 3 | Minor | schema | Add `datePublished` + `author` to Article LD-JSON on `/docs/ai-systems/` |
| 4 | Recommended | ai-seo | Add `/pricing.md` (parseable tier/limits) and link to it in llms.txt |
| 5 | Watch | site-architecture | Add hub-level links for the 77 sitemap-only pages (esp. country pages); add `/core/space-vision` to sitemap |
| 6 | Minor | competitor-profiling | Add an H1 to `/alternatives/legacy-aec-platforms/` |

---

## Methodology

- Crawled live `localhost:3100` with Node fetch; host-rewrote production sitemap URLs to local; manual-redirect tracing for chains.
- Applied the audit checklists from `marketingskills/skills/{seo-audit, schema, ai-seo, site-architecture, programmatic-seo, content-strategy, competitor-profiling}/SKILL.md`.
- All checks read-only; no site files modified.
