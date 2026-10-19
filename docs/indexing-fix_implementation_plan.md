# pmspace.ai Indexing Fix — Implementation Plan

**Date:** August 12, 2026  
**Objective:** Fix 496 non-indexed pages across 12 identified issues  
**Target:** 300+ indexed pages within 2-3 months  
**Approach:** Phased implementation using 8 marketing skills

---

## Skills Mapping Table

| Phase | Problem # | Primary Skill(s) | Supporting Skill(s) | Skill Rationale |
|---|---|---|---|---|
| 1 | #1, #2 | seo-audit, site-architecture | — | seo-audit provides canonicalization audit framework; site-architecture defines URL pattern consistency rules |
| 2 | #3, #4 | seo-audit | ai-seo | seo-audit covers crawlability/indexation diagnostics; ai-seo ensures flagship product pages are visible to AI crawlers |
| 3 | #5 | content-strategy | copywriting, cro | content-strategy defines content quality standards; copywriting provides writing principles; cro ensures content drives conversions |
| 4 | #6, #9 | seo-audit | programmatic-seo | seo-audit covers sitemap/robots.txt consistency; programmatic-seo provides sitemap generation patterns at scale |
| 5 | #7, #8 | site-architecture | ai-seo | site-architecture defines internal linking and 3-click rule; ai-seo ensures AI crawlers can discover all pages |
| 6 | #10, #11 | seo-audit | analytics, programmatic-seo | seo-audit provides GSC monitoring methodology; analytics tracks re-indexing progress; programmatic-seo optimizes crawl budget |
| 7 | #12 | content-strategy | competitor-profiling | content-strategy defines hub-and-spoke model for cannibalization; competitor-profiling provides differentiation frameworks |
| 8 | — | seo-audit | analytics | seo-audit provides ongoing audit framework; analytics tracks performance metrics |

### Skills Usage Summary

| Skill | Times Used as Primary | Times Used as Supporting | Problems Addressed |
|---|---|---|---|
| seo-audit | 5 | 2 | #1, #3, #4, #6, #9, #10, #11 |
| site-architecture | 2 | 1 | #1, #2, #7, #8 |
| content-strategy | 2 | 0 | #5, #12 |
| programmatic-seo | 0 | 2 | #6, #9, #11 |
| ai-seo | 0 | 2 | #3, #8 |
| copywriting | 0 | 1 | #5 |
| cro | 0 | 1 | #5 |
| analytics | 0 | 2 | #10, #11 |
| competitor-profiling | 0 | 1 | #12 |
| **Total** | **9** | **8** | **12 problems across 8 phases** |

---

## Problem-to-Phase Coverage Matrix

| # | Problem | Phase | Primary Skill | Supporting Skills | Fully Covered? |
|---|---|---|---|---|---|
| 1 | Canonical tags missing trailing slashes (~300 pages) | 1 | seo-audit | site-architecture | ✅ Yes |
| 2 | Internal links missing trailing slashes (all navigation) | 1 | site-architecture | seo-audit | ✅ Yes |
| 3 | Two commented-out redirects returning 404 | 2 | seo-audit | ai-seo | ✅ Yes |
| 4 | Missing redirect for /core/environmental-impact-analysis-ai | 2 | seo-audit | ai-seo | ✅ Yes |
| 5 | Thin content pages (15+ pages) | 3 | content-strategy | copywriting, cro | ✅ Yes |
| 6 | Sitemap includes blocked URLs | 4 | seo-audit | programmatic-seo | ✅ Yes |
| 7 | Orphan pages (20+ pages with no internal links) | 5 | site-architecture | ai-seo | ✅ Yes |
| 8 | Client-side rendering for navigation | 5 | site-architecture | ai-seo | ✅ Yes (updated) |
| 9 | Press pages blocked but in sitemap | 4 | seo-audit | programmatic-seo | ✅ Yes |
| 10 | Stale GSC data (90 redirect pages) | 6 | seo-audit | analytics | ✅ Yes |
| 11 | Pages never crawled (27 pages) | 6 | seo-audit | analytics, programmatic-seo | ✅ Yes (updated) |
| 12 | Keyword cannibalization (Alternatives pages) | 7 | content-strategy | competitor-profiling | ✅ Yes |

**Status:** All 12 problems fully covered across 8 phases.

---

## Pre-Implementation Checklist

- [ ] Confirm READ-ONLY mode is disabled
- [ ] Backup current codebase (git commit)
- [ ] Confirm dev server running at localhost:3000
- [ ] Confirm GSC access for re-indexing requests

---

## Phase 1: Trailing Slash Fixes (Week 1)

**Problem #1:** Canonical tags missing trailing slashes (~300 pages)  
**Problem #2:** Internal links missing trailing slashes (all navigation)

### Skills Used
- **Primary:** seo-audit, site-architecture
- **Supporting:** —

### Skill Application
- `seo-audit` — Canonicalization audit framework: "Trailing slash consistency must be maintained across canonicals, sitemaps, and internal links"
- `site-architecture` — URL pattern standards: "Consistent structure" and "Lowercase and hyphen-separated"

### Tasks

#### 1.1 Fix Canonical Tags in All page.tsx Files
- **Files:** All `src/app/**/page.tsx` files with `alternates.canonical`
- **Change:** Add trailing slash to every `alternates.canonical` value
- **Pattern:** `https://pmspace.ai/path` → `https://pmspace.ai/path/`
- **Files affected:** ~60+ page files across blog, guides, alternatives, core, transform, apps, software, white-papers, press, resources
- **Verification:** Grep for `alternates.canonical` and confirm all end with `/`

#### 1.2 Fix Internal Links in Header.tsx
- **File:** `src/sections/Header.tsx`
- **Change:** Add trailing slash to all `href` values
- **Pattern:** `href="/path"` → `href="/path/"`
- **Links to fix:** Home, About, Services (5 sub-links), AI Tools (6 sub-links), Industries (9 sub-links), Resources (5 sub-links), Contact

#### 1.3 Fix Internal Links in Footer.tsx
- **File:** `src/sections/Footer.tsx`
- **Change:** Add trailing slash to all `href` values
- **Pattern:** `href="/path"` → `href="/path/"`
- **Links to fix:** Services (5), AI Tools (6), Industries (9), Resources (5), Company (5), Contact (4)

#### 1.4 Fix Internal Links in InternalLinking.tsx
- **File:** `src/components/InternalLinking.tsx`
- **Change:** Add trailing slash to all `href` values
- **Pattern:** `href="/path"` → `href="/path/"`
- **Links to fix:** All related page links (4-6 per component instance)

#### 1.5 Fix Links in Other Components
- **Files:** Any other components with internal links (check with grep)
- **Change:** Add trailing slashes to all internal `href` values

### Verification
- [ ] Grep for `href="/` and confirm all end with `/`
- [ ] Grep for `alternates.canonical` and confirm all end with `/`
- [ ] Run dev server and verify no 301 redirects on internal navigation
- [ ] Check GSC coverage report after 1 week for "Duplicate" reduction

### Expected Impact
- Fixes ~65-300 "Duplicate — submitted URL not selected as canonical" errors
- Eliminates unnecessary 301 redirects on every internal click
- Aligns canonical tags with `trailingSlash: true` config

---

## Phase 2: Broken Redirect Fixes (Week 1)

**Problem #3:** Two commented-out redirects returning 404  
**Problem #4:** One missing redirect for /core/environmental-impact-analysis-ai

### Skills Used
- **Primary:** seo-audit
- **Supporting:** ai-seo

### Skill Application
- `seo-audit` — Crawlability/Indexation: "Verify important pages allowed" and "Not found (404) errors must be resolved"
- `ai-seo` — AI visibility: Flagship product pages (Space Vision, BIM Data Extraction) must be indexed for AI crawlers

### Tasks

#### 2.1 Uncomment Redirect for /core/space-vision
- **File:** `next.config.mjs` (lines 463-465)
- **Change:** Uncomment the redirect rule
- **From:** `// { source: '/core/space-vision', ... }`
- **To:** `{ source: '/core/space-vision', destination: '/guides/space-vision', permanent: true }`

#### 2.2 Uncomment Redirect for /core/bim-data-extraction
- **File:** `next.config.mjs` (lines 463-465)
- **Change:** Uncomment the redirect rule
- **From:** `// { source: '/core/bim-data-extraction', ... }`
- **To:** `{ source: '/core/bim-data-extraction', destination: '/guides/bim-data-extraction', permanent: true }`

#### 2.3 Add Redirect for /core/environmental-impact-analysis-ai
- **File:** `next.config.mjs` (after line 466)
- **Change:** Add new redirect rule
- **Add:** `{ source: '/core/environmental-impact-analysis-ai', destination: '/guides/environmental-impact-analysis-ai', permanent: true }`

### Verification
- [ ] Run `curl -I http://localhost:3000/core/space-vision` — should return 301
- [ ] Run `curl -I http://localhost:3000/core/bim-data-extraction` — should return 301
- [ ] Run `curl -I http://localhost:3000/core/environmental-impact-analysis-ai` — should return 301
- [ ] Check GSC coverage report after 1 week for "Not found (404)" reduction

### Expected Impact
- Fixes 3 "Not found (404)" indexed pages
- Recovers flagship product pages (Space Vision, BIM Data Extraction)
- Resolves environmental-impact-analysis-ai 404 error

---

## Phase 3: Thin Content Expansion (Week 2-3)

**Problem #5:** 15+ thin content pages with 20-30 words

### Skills Used
- **Primary:** content-strategy
- **Supporting:** copywriting, cro

### Skill Application
- `content-strategy` — Content Quality Assessment: "Comprehensive coverage of topic" and "Provide comprehensive coverage (don't leave questions unanswered)"
- `copywriting` — Writing principles: How to write effective, engaging content
- `cro` — Conversion optimization: Content must drive conversions, not just inform

### Tasks

#### 3.1 Expand Transform Pages
- **Files:** `src/lib/transform.ts`
- **Pages to expand:**
  - `process-automation` (line 339) — currently 1 sentence
  - `cracks-in-foundation` (line 350) — currently 1 sentence
- **Target:** 500-1000 words each
- **Content plan:** Problem → Solution → Benefits → Case Study → CTA

#### 3.2 Expand Apps Pages
- **Files:** `src/lib/apps.ts`
- **Pages to expand:**
  - `employee-checkin` — currently 1 sentence
  - `contact-builder` — currently 1 sentence
- **Target:** 500-1000 words each
- **Content plan:** Feature Overview → Use Cases → Benefits → Integration → CTA

#### 3.3 Expand Software Pages
- **Files:** `src/lib/software.ts`
- **Pages to expand:**
  - `content-management` — currently 2 sentences
  - `entity-management` — currently 2 sentences
- **Target:** 500-1000 words each
- **Content plan:** Problem → How It Works → Features → Benefits → CTA

#### 3.4 Expand White Papers Pages
- **Files:** `src/lib/whitePapers.ts`
- **Pages to expand:**
  - `aeco-inefficiency-report` — currently 2 sentences
- **Target:** 500-1000 words
- **Content plan:** Industry Problem → Data → Analysis → Recommendations → Download CTA

#### 3.5 Expand Remaining Thin Pages
- **Files:** All other pages with <100 words content
- **Target:** 500-1000 words each
- **Content plan:** Follow content-strategy "Searchable Content" formula

### Verification
- [ ] Grep for content length in all expanded files
- [ ] Verify no pages with <200 words remain
- [ ] Run dev server and verify pages render correctly
- [ ] Check GSC coverage report after 2 weeks for "Crawled — not indexed" reduction

### Expected Impact
- Fixes 15+ "Crawled — currently not indexed" errors
- Improves content quality signals for all expanded pages
- Increases time-on-page and conversion potential

---

## Phase 4: Sitemap Cleanup (Week 2)

**Problem #6:** Sitemap includes blocked URLs  
**Problem #9:** Press pages blocked but in sitemap

### Skills Used
- **Primary:** seo-audit
- **Supporting:** programmatic-seo

### Skill Application
- `seo-audit` — Sitemap audit: "Contains only canonical, indexable URLs" and "No unintentional blocks"
- `programmatic-seo` — Sitemap generation: Patterns for filtering URLs from sitemaps based on rules

### Tasks

#### 4.1 Remove /press from Sitemap
- **File:** `src/app/sitemap.ts` (line 709)
- **Change:** Comment out or remove the `/press` URL entry
- **Reason:** `robots.txt` line 10 blocks `/press/` — contradiction

#### 4.2 Remove /resellers from Sitemap
- **File:** `src/app/sitemap.ts` (line 713)
- **Change:** Comment out or remove the `/resellers` URL entry
- **Reason:** `robots.txt` line 12 blocks `/resellers` — contradiction

#### 4.3 Decide on /press and /resellers Future
- **Option A:** Unblock in robots.txt and add content to both pages
- **Option B:** Keep blocked and remove from sitemap (current approach)
- **Recommendation:** Option A — these are valuable pages for business development

### Verification
- [ ] Run `curl http://localhost:3000/sitemap.xml` and verify /press and /resellers are removed
- [ ] Verify robots.txt still blocks /press/ and /resellers
- [ ] Confirm no contradictions between sitemap and robots.txt

### Expected Impact
- Fixes 10 sitemap/robots.txt conflicts
- Eliminates contradictory signals to Google
- Clean sitemap with only indexable URLs

---

## Phase 5: Orphan Page Fixes & Client-Side Rendering (Week 3)

**Problem #7:** 20+ orphan pages with no internal links  
**Problem #8:** Client-side rendering for navigation

### Skills Used
- **Primary:** site-architecture
- **Supporting:** ai-seo

### Skill Application
- `site-architecture` — Internal Linking: "Important pages well-linked" and "No orphan pages" and "3-Click Rule"; Site Navigation: "Navigation should be crawlable by search engines"
- `ai-seo` — AI crawler optimization: Ensure AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can discover all pages; AI crawlers may not execute JavaScript as thoroughly as Googlebot

### Tasks

#### 5.1 Identify All Orphan Pages
- **Method:** Compare sitemap URLs vs internal links in codebase
- **Tool:** Grep for all `href="/` values and cross-reference with sitemap
- **Output:** List of pages with no internal links

#### 5.2 Add Orphan Pages to Navigation
- **Files:** `src/sections/Header.tsx`, `src/sections/Footer.tsx`
- **Change:** Add links to high-priority orphan pages
- **Priority:** Pages with backlinks or high business value first

#### 5.3 Add Contextual Internal Links
- **Files:** Related blog posts, guides, and service pages
- **Change:** Add "Related Pages" sections linking to orphan pages
- **Pattern:** "Learn more about [topic] in our [guide/link]"

#### 5.4 Evaluate Server-Side Rendering for Navigation
- **Files:** `src/sections/Header.tsx`, `src/sections/Footer.tsx`
- **Current state:** Both files are marked `"use client"` (line 1)
- **Issue:** Client-side rendered navigation may not be efficiently crawled by all search engines, especially AI crawlers (GPTBot, ClaudeBot, PerplexityBot) that may not execute JavaScript
- **Options:**
  - **Option A (Recommended):** Convert Header/Footer to Server Components by removing `"use client"` directive and ensuring all content is server-renderable
  - **Option B:** Keep as client components but ensure critical navigation links are rendered server-side using `React.lazy` or dynamic imports
  - **Option C (Minimum):** Add `<noscript>` fallback with static navigation links for crawlers that don't execute JavaScript
- **Decision required:** Choose option before implementing

#### 5.5 Add Noscript Fallback Navigation (if Option C chosen)
- **Files:** `src/sections/Header.tsx`, `src/sections/Footer.tsx`
- **Change:** Add `<noscript>` fallback with static navigation links
- **Reason:** Ensure AI crawlers and non-JS crawlers can discover all pages

### Verification
- [ ] Grep for orphan pages and confirm they now have internal links
- [ ] Verify 3-click rule: any page reachable within 3 clicks from homepage
- [ ] Test with JavaScript disabled — confirm navigation still works (if Option C)
- [ ] Verify Header/Footer render correctly without JavaScript (if Option A)
- [ ] Check GSC coverage report after 2 weeks for crawl rate improvement

### Expected Impact
- Fixes 20+ orphan pages
- Improves crawl discovery for all pages
- Ensures AI crawlers can discover all content
- Improves crawlability for all search engines (not just Googlebot)

---

## Phase 6: GSC Re-Indexing & Crawl Budget Optimization (Week 4)

**Problem #10:** Stale GSC data (90 redirect pages)  
**Problem #11:** Pages never crawled (27 pages)

### Skills Used
- **Primary:** seo-audit
- **Supporting:** analytics, programmatic-seo

### Skill Application
- `seo-audit` — GSC monitoring: "Search Console coverage report" and "Compare indexed vs. expected"
- `analytics` — Performance tracking: Monitor re-indexing progress and impact
- `programmatic-seo` — Crawl budget optimization: Strategies for ensuring large numbers of pages get crawled efficiently

### Tasks

#### 6.1 Separate Stale vs Never-Crawled Pages
- **Method:** In GSC, categorize non-indexed pages into two groups:
  - **Group A (Stale):** Pages that WERE indexed but dropped (need re-indexing)
  - **Group B (Never-Crawled):** Pages with 0 impressions/crawls (need discovery, not re-indexing)
- **Tool:** GSC Coverage report + URL Inspection
- **Output:** Two separate lists with different strategies

#### 6.2 Request Re-Indexing for Stale Pages (Group A)
- **Tool:** Google Search Console URL Inspection
- **Priority order:**
  1. Fixed canonical pages (Phase 1)
  2. Fixed redirect pages (Phase 2)
  3. Expanded thin content pages (Phase 3)
  4. Orphan pages with backlinks (Phase 5)
- **Method:** Request indexing for top 50 URLs, then batch remaining
- **Expected:** 90+ stale pages recover indexing

#### 6.3 Optimize Crawl Budget for Never-Crawled Pages (Group B)
- **Tool:** programmatic-seo crawl budget optimization strategies
- **Prerequisites:** Phase 3 (thin content) and Phase 5 (orphan pages) must be completed first
- **Method:**
  1. Ensure all 27 pages have internal links (Phase 5)
  2. Ensure all 27 pages have expanded content (Phase 3)
  3. Add these pages to sitemap with high priority (`priority: 1.0`)
  4. Request indexing in GSC for pages with backlinks first
  5. Monitor crawl rate in GSC to confirm Google is crawling these pages
- **Priority matrix:**
  - Pages with backlinks → Request indexing first
  - Pages with business value → Request indexing second
  - Other pages → Request indexing last
- **Expected:** 27 never-crawled pages get discovered and indexed

#### 6.4 Monitor Crawl Rate
- **Tool:** GSC Coverage report
- **Metrics to track:**
  - Indexed pages count
  - Not indexed pages count
  - Crawl requests per day
  - Indexing rate percentage
  - Never-crawled pages count (should decrease)

#### 6.5 Submit Updated Sitemap
- **Tool:** GSC Sitemaps section
- **Action:** Resubmit sitemap.xml after Phase 4 cleanup
- **Reason:** Signal to Google that sitemap has been updated

### Verification
- [ ] Confirm all high-priority URLs submitted for indexing
- [ ] Monitor GSC daily for 2 weeks
- [ ] Track indexed page count growth
- [ ] Track never-crawled pages count (should decrease from 27 to 0)
- [ ] Compare before/after metrics

### Expected Impact
- Recovers 90+ stale indexed pages
- Gets 27 never-crawled pages discovered and indexed
- Improves overall indexing rate from ~53% to ~85%+
- Eliminates "never-crawled" category entirely

---

## Phase 7: Cannibalization Fixes (Month 2)

**Problem #12:** Keyword cannibalization (Alternatives pages)

### Skills Used
- **Primary:** content-strategy, competitor-profiling
- **Supporting:** —

### Skill Application
- `content-strategy` — Hub-and-Spoke model: "Create hub first, then build spokes. Interlink strategically"
- `competitor-profiling` — Differentiation frameworks: How to make each comparison page unique

### Tasks

#### 7.1 Differentiate Singular vs Plural Alternatives Pages
- **Files:** `src/app/alternatives/[slug]/page.tsx`
- **Pages:**
  - `/alternatives/procore-alternative` — Focus: "Space AI vs Procore" (comparison)
  - `/alternatives/procore-alternatives` — Focus: "6 Procore Alternatives Compared" (list)
- **Change:** Differentiate titles, meta descriptions, and content focus

#### 7.2 Apply to All Cannibalized Pairs
- **Method:** Identify all singular/plural pairs in alternatives
- **Change:** Differentiate each pair with clear intent distinction
- **Pattern:** Singular = "Space AI vs [Competitor]" | Plural = "[N] [Competitor] Alternatives Compared"

### Verification
- [ ] Verify no two pages target the same primary keyword
- [ ] Check meta descriptions are unique for each page
- [ ] Confirm content focus is differentiated

### Expected Impact
- Eliminates keyword cannibalization
- Improves ranking for all alternatives pages
- Clearer user intent matching

---

## Phase 8: Monitoring & Iteration (Ongoing)

### Skills Used
- **Primary:** seo-audit
- **Supporting:** analytics

### Skill Application
- `seo-audit` — Ongoing audit framework: Quarterly full SEO audits
- `analytics` — Performance tracking: Weekly GSC monitoring, monthly content audits

### Tasks

#### 8.1 Weekly GSC Monitoring
- **Metrics to track:**
  - Indexed pages count
  - Not indexed pages count
  - Top queries
  - Top pages
  - Crawl errors
  - Never-crawled pages count

#### 8.2 Monthly Content Audit
- **Method:** Review all pages for content quality
- **Target:** No pages with <200 words
- **Action:** Expand or remove thin content

#### 8.3 Quarterly Full SEO Audit
- **Framework:** seo-audit skill
- **Scope:** All 12 original problems + new issues
- **Output:** Updated implementation plan

---

## Risk Mitigation

| Risk | Mitigation |
|---|---|
| Trailing slash fix breaks existing URLs | `trailingSlash: true` config handles this automatically |
| Redirect fix causes redirect loops | Test each redirect individually before deploying |
| Thin content expansion dilutes quality | Follow content-strategy quality checklist |
| Sitemap removal loses pages | Only remove blocked URLs, keep all others |
| GSC re-indexing takes too long | Prioritize high-value pages first |
| Cannibalization fix reduces rankings | Differentiate content before changing URLs |
| Server-side rendering conversion breaks UI | Test thoroughly in dev environment before deploying |
| Never-crawled pages remain uncrawled | Fix internal links and content first, then request indexing |

---

## Success Metrics

| Metric | Current | Target | Timeline |
|---|---|---|---|
| Indexed pages | 171 | 300+ | 2-3 months |
| Not indexed pages | 149 | <50 | 2-3 months |
| Never-crawled pages | 27 | 0 | 1 month |
| Indexing rate | ~53% | ~85%+ | 2-3 months |
| Impressions/day | ~3,000 | ~6,000+ | 3-4 months |
| Clicks/day | ~30 | ~60+ | 3-4 months |
| 404 errors | 3 | 0 | 1 week |
| Thin content pages | 15+ | 0 | 3 weeks |

---

## Dependencies

| Phase | Depends On | Can Run In Parallel |
|---|---|---|
| Phase 1 | None | Yes |
| Phase 2 | None | Yes |
| Phase 3 | None | Yes (after Phase 1) |
| Phase 4 | None | Yes |
| Phase 5 | Phase 1 | Yes (after Phase 1) |
| Phase 6 | Phases 1-5 | No (after all fixes) |
| Phase 7 | None | Yes (after Phase 1) |
| Phase 8 | All phases | No (ongoing) |

---

## Estimated Total Effort

| Phase | Effort | Timeline |
|---|---|---|
| Phase 1 | Medium (100+ files) | Week 1 |
| Phase 2 | Low (3 lines) | Week 1 |
| Phase 3 | High (content creation) | Week 2-3 |
| Phase 4 | Low (2 lines) | Week 2 |
| Phase 5 | Medium (nav updates + SSR evaluation) | Week 3 |
| Phase 6 | Low (manual GSC + crawl optimization) | Week 4 |
| Phase 7 | Medium (content rewrite) | Month 2 |
| Phase 8 | Low (monitoring) | Ongoing |
| **Total** | **Medium-High** | **4-6 weeks** |

---

## Appendix: Files Affected by Phase

### Phase 1 Files
- `src/app/**/page.tsx` (~60+ files)
- `src/sections/Header.tsx`
- `src/sections/Footer.tsx`
- `src/components/InternalLinking.tsx`
- Other components with internal links

### Phase 2 Files
- `next.config.mjs` (lines 463-466)

### Phase 3 Files
- `src/lib/transform.ts`
- `src/lib/apps.ts`
- `src/lib/software.ts`
- `src/lib/whitePapers.ts`

### Phase 4 Files
- `src/app/sitemap.ts` (lines 709, 713)

### Phase 5 Files
- `src/sections/Header.tsx`
- `src/sections/Footer.tsx`
- Various page files (contextual links)

### Phase 6 Files
- None (GSC manual work)

### Phase 7 Files
- `src/app/alternatives/[slug]/page.tsx`

### Phase 8 Files
- None (monitoring only)
