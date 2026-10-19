# Google Search Console 404 Error Analysis Report

**Website:** https://pmspace.ai
**Date:** 2026-07-13
**Issue:** Not found (404) — Pages aren't indexed or served on Google
**Framework:** Next.js 14 (App Router) deployed on Netlify

---

## GSC Live Inspection Results (Updated)

| # | URL | Live Test Result | Status | Next Action |
|---|---|---|---|---|
| 1 | `/features/communication` | ✅ 200 — URL is available to Google | **VERIFIED** | Request Indexing — done |
| 2 | `/about` | Pending check | — | — |
| 3 | `/videos/how-to-set-up-a-form` | Pending check | — | — |
| 4 | `/software/content-management` | Pending check | — | — |
| 5 | `/apps/employee-checkin` | Pending check | — | — |
| 6 | `/services/application-maintenance` | Pending check | — | — |
| 7 | `/tools/project-scheduling-software` | Pending check (needs deploy first) | — | — |
| 8 | `/core/space-vision` | Pending check (needs deploy first) | — | — |
| 9 | `/designer` | Pending check (needs deploy first) | — | — |
| 10 | `/core/bim-data-extraction` | Pending check (needs deploy first) | — | — |
| 11 | `/%F0%9F%93%A9` | Pending check (needs deploy first) | — | — |

**Note:** URLs #7-11 require the code fixes to be deployed before live inspection can verify the redirects.

---

## Table of Contents

- [GSC Live Inspection Results](#gsc-live-inspection-results-updated)
- [Executive Summary](#executive-summary)
- [How to Use This Report](#how-to-use-this-report)
- [Summary Table](#summary-table)
- [Category 1: Redirects Already Exist (Google Needs Recrawl)](#category-1-redirects-already-exist--google-needs-recrawl-28-urls)
- [Category 2: Missing Redirects (Must Add Code Fixes)](#category-2-missing-redirects--must-add-code-fixes-5-urls)
- [Category 3: Pages Exist (Likely Soft 404 or GSC Delay)](#category-3-pages-exist--likely-soft-404-or-gsc-delay-6-urls)
- [Complete Code Fix Guide](#complete-code-fix-guide)
- [Verification Steps](#verification-steps)
- [Deployment Checklist](#deployment-checklist)

---

## Executive Summary

Out of **40 URLs** reported as 404 in Google Search Console:

- **28 URLs (70%)** already have working 301 redirects in `next.config.mjs` — GSC is showing stale crawl data. No code changes needed; just request re-indexing.
- **5 URLs (12.5%)** have no redirect and no matching page — these require new redirect rules to be added to the codebase.
- **1 URL (2.5%)** has a page that exists but is blocked from static generation due to `hideFromCore: true` — needs a redirect added.
- **6 URLs (15%)** have pages that physically exist in the codebase — these are likely soft 404s or GSC indexing delays.

**Root cause of all 404s:** Previously published URLs that were later redirected, renamed, or had their pages removed without proper redirect coverage. No existing functional code is broken.

---

## How to Use This Report

Each URL entry includes:
1. **Problem** — Why the 404 occurs
2. **Evidence** — File paths, line numbers, and code references
3. **Fix** — Exact code change needed (with file path and line reference)
4. **Verification** — How to confirm the fix works

**Important:** These fixes are purely additive. No existing pages are deleted, no existing code is removed, and no other URL segments are affected.

---

## Summary Table

| Category | Count | Action Required |
|---|---|---|
| Redirects already in `next.config.mjs` (GSC stale) | **28** | Request re-indexing in GSC |
| Missing redirect (needs code fix) | **5** | Add redirect rules |
| Pages exist but blocked by `hideFromCore` | **1** | Add redirect rule |
| Pages exist and should work | **6** | Verify in GSC, request indexing |
| **Total** | **40** | |

---

## Category 1: Redirects Already Exist — Google Needs Recrawl (28 URLs)

These URLs have working 301 redirects in `next.config.mjs`. Google Search Console is showing old crawl data from before the redirects were added.

**Action:** Use GSC "URL Inspection" → "Test Live URL" to verify. If the live test returns 301, click **"Request Indexing"** to speed up re-crawl. No code changes required.

| # | Affected URL | Redirects To | Code Reference |
|---|---|---|---|
| 1 | `/core/ai-site-inspection-tools` | `/core/space-capture` | `next.config.mjs:399` |
| 2 | `/core/smart-resource-allocation` | `/core/ai-lean-construction-platform` | `next.config.mjs:402` |
| 3 | `/core/automated-progress-tracking` | `/guides/ai-workflow-orchestration` | `next.config.mjs:398` |
| 4 | `/core/automated-submittal-review` | `/core/idp` | `next.config.mjs:400` |
| 5 | `/core/intelligent-scheduling` | `/guides/ai-workflow-orchestration` | `next.config.mjs:401` |
| 6 | `/core/predictive-maintenance-construction` | `/resources/ai-construction/predictive-project-analytics` | `next.config.mjs:403` |
| 7 | `/solutions/general-contractors` | `/solutions/best-construction-software-for-general-contractors` | `next.config.mjs:406` |
| 8 | `/solutions/subcontractors` | `/subcontractor-management-software-construction` | `next.config.mjs:407` |
| 9 | `/solutions/construction-management-software-small-business` | `/construction-management-software-small-business` | `next.config.mjs:408` |
| 10 | `/tools/scheduling-software` | `/project-scheduling-software` | `next.config.mjs:351` |
| 11 | `/tools/crm` | `/tools/construction-crm-software` | `next.config.mjs:368` |
| 12 | `/guides/ai-workflow-automation-construction` | `/guides/ai-workflow-orchestration` | `next.config.mjs:205` |
| 13 | `/guides/space-bim-integration` | `/core/space-bim` | `next.config.mjs:203` |
| 14 | `/guides/common-data-platform-construction` | `/guides/common-data-platform` | `next.config.mjs:195` |
| 15 | `/guides/intelligent-document-processing-construction` | `/guides/idp` | `next.config.mjs:200` |
| 16 | `/guides/choose-construction-management-software` | `/guides/how-to-choose-construction-software` | `next.config.mjs:383` |
| 17 | `/case-studies/meridian-infrastructure` | `/case-studies` | `next.config.mjs:419` |
| 18 | `/case-studies/urban-education-builders` | `/case-studies` | `next.config.mjs:418` |
| 19 | `/case-studies/turner-associates` | `/case-studies` | `next.config.mjs:417` |
| 20 | `/case-studies/summit-commercial-group` | `/case-studies` | `next.config.mjs:416` |
| 21 | `/case-studies/heritage-healthcare-construction` | `/case-studies` | `next.config.mjs:415` |
| 22 | `/case-studies/pacific-northwest-builders` | `/case-studies` | `next.config.mjs:421` |
| 23 | `/case-studies/coastal-industrial-partners` | `/case-studies` | `next.config.mjs:420` |
| 24 | `/customers` | `/customers/success-stories` | `next.config.mjs:322` |
| 25 | `/services/software-integration` | `/services/software-integration-services` | `next.config.mjs:328` |
| 26 | `/resources/help` | `/resources` | `next.config.mjs:332` |
| 27 | `/month` | Returns 410 Gone (middleware) | `middleware.ts:16` |
| 28 | `/transform/process-automation` | `/platform/process-automation` | `next.config.mjs:376` (wildcard) |

---

## Category 2: Missing Redirects — Must Add Code Fixes (5 URLs)

These URLs have **no redirect** and **no matching page**. They genuinely return 404.

---

### URL #1: `https://pmspace.ai/tools/project-scheduling-software`

**Problem:**
The resource `project-scheduling-software` exists in `src/lib/resources.ts` (line 272) but its `href` is `/project-scheduling-software` (root level), NOT `/tools/project-scheduling-software`. A redirect exists from `/tools/scheduling-software` → `/project-scheduling-software` (line 351) but nothing covers the `/tools/project-scheduling-software` variant.

**Evidence:**
- `src/lib/resources.ts:281` — `href: "/project-scheduling-software"` (root path)
- `next.config.mjs:351` — Only covers `/tools/scheduling-software`, not `/tools/project-scheduling-software`
- No directory exists at `src/app/tools/project-scheduling-software/`

**SEO Impact:** High — tool page URL likely linked from external sources.

**Fix — Step 1: Add redirect to `next.config.mjs`**

Open `next.config.mjs` and add this line inside the `redirects()` array (recommended location: after line 351 where similar tool redirects exist):

```js
// ── Tools slug renames ────────────────────────────────────────────────
// ... existing redirects ...
{ source: "/tools/project-scheduling-software", destination: "/project-scheduling-software", permanent: true },
```

**Fix — Step 2: Add to sitemap exclusion in `src/app/sitemap.ts`**

Open `src/app/sitemap.ts` and add this entry inside the `REDIRECT_SOURCES` Set (recommended location: after line 411 in the "Orphaned page redirects" section):

```js
// ── Orphaned page redirects ───────────────────────────────────────
// ... existing entries ...
"/tools/project-scheduling-software",
```

**Verification:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/tools/project-scheduling-software`
3. Confirm it returns 301 and redirects to `/project-scheduling-software`

---

### URL #2: `https://pmspace.ai/core/space-vision`

**Problem:**
The tool `space-vision` exists in `src/lib/core.ts` (line 582) with `hideFromCore: true`. The `getAllTools()` function (line 715) filters out tools with this flag: `toolsData.filter((tool) => !tool.hideFromCore)`. Since `src/app/core/[slug]/page.tsx:9` sets `dynamicParams = false` and `generateStaticParams()` (line 39) uses `getAllTools()`, the slug `space-vision` is never generated at build time, causing a 404.

**Evidence:**
- `src/lib/core.ts:588` — `hideFromCore: true` on space-vision tool
- `src/lib/core.ts:715` — `getAllTools()` filters out `hideFromCore` items
- `src/app/core/[slug]/page.tsx:9` — `export const dynamicParams = false;`
- `src/app/core/[slug]/page.tsx:39-44` — `generateStaticParams()` uses `getAllTools()` which excludes space-vision
- A guide article exists at `src/lib/guideArticles.ts:733` with slug `space-vision`, so `/guides/space-vision` works

**SEO Impact:** High — Space Vision is a flagship AR product, likely shared in marketing materials.

**Fix — Step 1: Add redirect to `next.config.mjs`**

Open `next.config.mjs` and add this line inside the `redirects()` array (recommended location: after line 403 where similar core redirects exist):

```js
// ── Missing core page redirects (GSC 404s — slugs crawled but never built) ──
// ... existing redirects ...
{ source: "/core/space-vision", destination: "/guides/space-vision", permanent: true },
```

**Fix — Step 2: Add to sitemap exclusion in `src/app/sitemap.ts`**

Open `src/app/sitemap.ts` and add this entry inside the `REDIRECT_SOURCES` Set:

```js
// ── Core platform slug renames ────────────────────────────────────────
// ... existing entries ...
"/core/space-vision",
```

**Verification:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/core/space-vision`
3. Confirm it returns 301 and redirects to `/guides/space-vision`

---

### URL #3: `https://pmspace.ai/designer`

**Problem:**
No page exists at `/designer`. There is no directory `src/app/designer/` and no redirect configured. The content lives at `/guides/designer`, served by the `guides/[slug]` dynamic route via the `designer-workspace` tool entry in `core.ts` (line 454) which maps to guide slug `designer`.

**Evidence:**
- No directory `src/app/designer/` exists
- No redirect in `next.config.mjs` for `/designer`
- `src/lib/core.ts:460` — `href: "/guides/designer"` for designer-workspace tool
- `/guides/designer` is a valid page via `guides/[slug]` dynamic route

**SEO Impact:** Medium — likely linked from old marketing pages or external mentions.

**Fix — Step 1: Add redirect to `next.config.mjs`**

Open `next.config.mjs` and add this line inside the `redirects()` array (recommended location: after line 387 where similar guide redirects exist):

```js
// ── Guide slug renames ────────────────────────────────────────────────
// ... existing redirects ...
{ source: "/designer", destination: "/guides/designer", permanent: true },
```

**Fix — Step 2: Add to sitemap exclusion in `src/app/sitemap.ts`**

Open `src/app/sitemap.ts` and add this entry inside the `REDIRECT_SOURCES` Set:

```js
// ── Misc orphaned pages ───────────────────────────────────────────
// ... existing entries ...
"/designer",
```

**Verification:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/designer`
3. Confirm it returns 301 and redirects to `/guides/designer`

---

### URL #4: `https://pmspace.ai/core/bim-data-extraction`

**Problem:**
No tool with slug `bim-data-extraction` exists in `src/lib/core.ts`. A guide article with this slug exists in `src/lib/guideArticles.ts` (line 338), so `/guides/bim-data-extraction` works. But `/core/bim-data-extraction` has no matching tool, no page, and no redirect.

**Evidence:**
- No entry with slug `bim-data-extraction` in `src/lib/core.ts` toolsData array
- `src/lib/guideArticles.ts:338` — Guide article with slug `bim-data-extraction` exists
- `/guides/bim-data-extraction` is a valid page via `guides/[slug]` dynamic route
- No redirect in `next.config.mjs` for `/core/bim-data-extraction`

**SEO Impact:** Medium — likely referenced in older content or external backlinks.

**Fix — Step 1: Add redirect to `next.config.mjs`**

Open `next.config.mjs` and add this line inside the `redirects()` array (recommended location: after line 403 where similar core redirects exist):

```js
// ── Missing core page redirects (GSC 404s — slugs crawled but never built) ──
// ... existing redirects ...
{ source: "/core/bim-data-extraction", destination: "/guides/bim-data-extraction", permanent: true },
```

**Fix — Step 2: Add to sitemap exclusion in `src/app/sitemap.ts`**

Open `src/app/sitemap.ts` and add this entry inside the `REDIRECT_SOURCES` Set:

```js
// ── Core platform slug renames ────────────────────────────────────────
// ... existing entries ...
"/core/bim-data-extraction",
```

**Verification:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/core/bim-data-extraction`
3. Confirm it returns 301 and redirects to `/guides/bim-data-extraction`

---

### URL #5: `https://pmspace.ai/%F0%9F%93%A9` (📷 — camera emoji URL)

**Problem:**
This emoji-encoded URL isn't in the middleware `GONE_EXACT` set (which has `/📩` but not `/📷`), and there's no redirect. It returns the default Next.js 404 page. Returning 404 instead of 410 means Google will keep trying to crawl it.

**Evidence:**
- `src/middleware.ts:14-18` — `GONE_EXACT` set contains `/intelligence-center`, `/month`, `/📩` but NOT `/%F0%9F%93%A9`
- No redirect in `next.config.mjs` for this URL
- No page exists for this path

**SEO Impact:** Low — likely a crawled URL from a misconfigured link or bot-generated path.

**Fix — Step 1: Add to middleware GONE set in `src/middleware.ts`**

Open `src/middleware.ts` and update the `GONE_EXACT` set at line 14:

```js
// Current code:
const GONE_EXACT = new Set([
  "/intelligence-center",
  "/month",
  "/📩",
]);

// Updated code:
const GONE_EXACT = new Set([
  "/intelligence-center",
  "/month",
  "/📩",
  "/%F0%9F%93%A9",   // 📷 emoji URL — permanently removed
]);
```

**Verification:**
1. Run `npm run dev`
2. Visit `http://localhost:3000/%F0%9F%93%A9`
3. Confirm it returns 410 Gone with the "Page Permanently Removed" HTML response

---

## Category 3: Pages Exist — Likely Soft 404 or GSC Delay (6 URLs)

These pages physically exist in the codebase and should render correctly. GSC may be flagging them as 404 due to thin content, rendering issues, or stale crawl data.

| # | URL | File Location | Status |
|---|---|---|---|
| 1 | `/about` | `src/app/about/page.tsx` | Page exists with content |
| 2 | `/features/communication` | `src/app/features/communication/page.tsx` | Page exists with content |
| 3 | `/videos/how-to-set-up-a-form` | `src/lib/videos.ts` (slug: `how-to-set-up-a-form`) | Dynamic page via `videos/[slug]` |
| 4 | `/software/content-management` | `src/lib/software.ts` (slug: `content-management`) | Dynamic page via `software/[slug]` |
| 5 | `/apps/employee-checkin` | `src/lib/apps.ts` (slug: `employee-checkin`) | Dynamic page via `apps/[slug]` |
| 6 | `/services/application-maintenance` | `src/app/services/application-maintenance/page.tsx` | Page exists (misspelled variant redirects here) |

**Fix for each:**

### URL #6: `https://pmspace.ai/about`

**Problem:** Page exists but GSC shows 404. Likely stale crawl data or soft 404.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/about`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

### URL #7: `https://pmspace.ai/features/communication`

**Problem:** Page exists but GSC shows 404. Likely stale crawl data.

**GSC Live Inspection Result (2026-07-13):** ✅ **URL is available to Google** — Page can be indexed. 1 valid breadcrumb item detected.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/features/communication`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

**Status:** ✅ **VERIFIED** — Inspection passed, indexing requested.

### URL #8: `https://pmspace.ai/videos/how-to-set-up-a-form`

**Problem:** Dynamic page via `videos/[slug]`. The slug `how-to-set-up-a-form` exists in `src/lib/videos.ts` (id: 2, line 48). The page should be generated at build time.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/videos/how-to-set-up-a-form`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

### URL #9: `https://pmspace.ai/software/content-management`

**Problem:** Dynamic page via `software/[slug]`. The slug `content-management` exists in `src/lib/software.ts` (id: 1, line 17). The page should be generated at build time.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/software/content-management`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

### URL #10: `https://pmspace.ai/apps/employee-checkin`

**Problem:** Dynamic page via `apps/[slug]`. The slug `employee-checkin` exists in `src/lib/apps.ts` (id: 1, line 16). The page should be generated at build time.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/apps/employee-checkin`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

### URL #11: `https://pmspace.ai/services/application-maintenance`

**Problem:** Page exists at `src/app/services/application-maintenance/page.tsx`. The misspelled variant `/services/application-maintainence` redirects here via `next.config.mjs:329`. The canonical URL should work.

**Fix:** No code change needed. In GSC:
1. Go to URL Inspection
2. Enter `https://pmspace.ai/services/application-maintenance`
3. Click "Test Live URL"
4. If it returns 200, click "Request Indexing"

---

## Complete Code Fix Guide

This section consolidates all code changes into a single step-by-step guide.

### Step 1: Edit `next.config.mjs` — Add 4 Redirects

**File:** `next.config.mjs`
**Location:** Inside the `async redirects()` function, before the closing `];` (before line 438)

Add these 4 redirect rules:

```js
      // ── Missing tool/core redirects for GSC 404s ──────────────────────────
      { source: "/tools/project-scheduling-software", destination: "/project-scheduling-software", permanent: true },
      { source: "/core/space-vision", destination: "/guides/space-vision", permanent: true },
      { source: "/designer", destination: "/guides/designer", permanent: true },
      { source: "/core/bim-data-extraction", destination: "/guides/bim-data-extraction", permanent: true },
```

**What this does:**
- `/tools/project-scheduling-software` → 301 → `/project-scheduling-software`
- `/core/space-vision` → 301 → `/guides/space-vision`
- `/designer` → 301 → `/guides/designer`
- `/core/bim-data-extraction` → 301 → `/guides/bim-data-extraction`

### Step 2: Edit `src/middleware.ts` — Add 410 Gone for Emoji URL

**File:** `src/middleware.ts`
**Location:** Line 14-18, the `GONE_EXACT` Set

Change from:

```js
const GONE_EXACT = new Set([
  "/intelligence-center",
  "/month",
  "/📩",
]);
```

To:

```js
const GONE_EXACT = new Set([
  "/intelligence-center",
  "/month",
  "/📩",
  "/%F0%9F%93%A9",   // 📷 emoji URL — permanently removed
]);
```

**What this does:**
- `/%F0%9F%93%A9` (📷) → 410 Gone with "Page Permanently Removed" HTML response
- Google will stop trying to index this URL

### Step 3: Edit `src/app/sitemap.ts` — Add Sitemap Exclusions

**File:** `src/app/sitemap.ts`
**Location:** Inside the `REDIRECT_SOURCES` Set (around line 123-417)

Add these 4 entries in the appropriate sections:

```js
// Add to "Misc orphaned pages" section (after line 376):
"/tools/project-scheduling-software",
"/designer",

// Add to "Core platform slug renames" section (after line 271):
"/core/space-vision",
"/core/bim-data-extraction",
```

**What this does:**
- Prevents the 4 redirect source URLs from appearing in the generated sitemap
- Google will not discover these URLs from the sitemap and will instead follow the redirects

### Step 4: Build and Test

```bash
# Build the project to verify no errors
npm run build

# Start dev server for local testing
npm run dev
```

Test each redirect in the browser:

| Test URL | Expected Result |
|---|---|
| `http://localhost:3000/tools/project-scheduling-software` | 301 → `/project-scheduling-software` |
| `http://localhost:3000/core/space-vision` | 301 → `/guides/space-vision` |
| `http://localhost:3000/designer` | 301 → `/guides/designer` |
| `http://localhost:3000/core/bim-data-extraction` | 301 → `/guides/bim-data-extraction` |
| `http://localhost:3000/%F0%9F%93%A9` | 410 Gone |

---

## Verification Steps

### After deploying the code changes:

1. **Build verification:**
   ```bash
   npm run build
   ```
   Verify the build completes without errors.

2. **Local redirect testing:**
   ```bash
   npm run dev
   ```
   Test each new redirect in the browser (see table above).

3. **Deploy to production** (Netlify auto-deploys from main branch).

4. **Google Search Console actions for Category 1 (28 URLs):**
   - Use **URL Inspection** tool on each of the 28 URLs
   - Click **"Test Live URL"** to verify current response
   - If it returns 301, click **"Request Indexing"**
   - Monitor the **Pages report** over the next 2-4 weeks

5. **Google Search Console actions for Category 2 (5 URLs):**
   - Wait for deployment to complete
   - Use **URL Inspection** tool on each of the 5 URLs
   - Click **"Test Live URL"** to verify redirects are working
   - Click **"Request Indexing"** for each

6. **Google Search Console actions for Category 3 (6 URLs):**
   - Use **URL Inspection** tool on each of the 6 URLs
   - Click **"Test Live URL"**
   - If it returns 200 with real content, click **"Request Indexing"**
   - If it returns soft 404, review page content for thin/empty sections

7. **Sitemap verification:**
   - Visit `https://pmspace.ai/sitemap.xml`
   - Confirm the 4 new redirect sources do NOT appear in the sitemap
   - Confirm existing pages are still listed correctly

---

## Deployment Checklist

- [x] `next.config.mjs` — 4 new redirects added
- [x] `src/middleware.ts` — `/%F0%9F%93%A9` added to `GONE_EXACT`
- [x] `src/app/sitemap.ts` — 4 entries added to `REDIRECT_SOURCES`
- [ ] `npm run build` — completes without errors
- [ ] Local testing — all 5 new rules verified
- [ ] Deployed to production
- [ ] GSC URL Inspection — all 40 URLs tested live
- [ ] GSC Request Indexing — submitted for all working URLs
- [ ] Monitor Pages report — check for 2-4 weeks

## Inspection Progress

- ✅ `/features/communication` — Verified 200, indexing requested
- ⏳ Remaining 39 URLs — Pending inspection

---

## Appendix: How Each Redirect Was Verified

| Verification Method | Detail |
|---|---|
| **File system check** | Checked `src/app/` directory structure for each URL path |
| **Dynamic route analysis** | Verified `[slug]` pages and their `generateStaticParams()` data sources |
| **Library data check** | Read `core.ts`, `resources.ts`, `videos.ts`, `software.ts`, `apps.ts`, `guideArticles.ts` for slug existence |
| **Redirect audit** | Cross-referenced all 40 URLs against `next.config.mjs` redirects array |
| **Middleware check** | Verified `GONE_EXACT` and `GONE_PREFIXES` in `middleware.ts` |
| **Sitemap check** | Verified `REDIRECT_SOURCES` exclusion set in `sitemap.ts` |

---

*Report generated on 2026-07-13 by automated codebase analysis.*
