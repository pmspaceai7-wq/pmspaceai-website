# SEO Soft 404 Fix Plan: `/search?q={search_term_string}`

> **Generated:** 2026-06-15  
> **Scope:** Google Search Console Soft 404 remediation for `https://pmspace.ai/search?q={search_term_string}`  
> **Strategy:** Keep SearchAction (Sitelinks Search Box) + noindex search page + improve empty/fallback states

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Root Cause Analysis](#2-root-cause-analysis)
3. [Files Involved](#3-files-involved)
4. [Recommended Fix Overview](#4-recommended-fix-overview)
5. [Step 1 — Add `noindex` to Search Page Metadata](#5-step-1--add-noindex-to-search-page-metadata)
6. [Step 2 — Keep SearchAction Schema in Layout (No Changes)](#6-step-2--keep-searchaction-schema-in-layout-no-changes)
7. [Step 3 — Improve Empty State with Curated Content](#7-step-3--improve-empty-state-with-curated-content)
8. [Step 4 — Improve No-Results State with Fallback Links](#8-step-4--improve-no-results-state-with-fallback-links)
9. [Step 5 — Verify SearchAction Retention in Other Files](#9-step-5--verify-searchaction-retention-in-other-files)
10. [Step 6 — Deployment & Validation Checklist](#10-step-6--deployment--validation-checklist)
11. [Appendix A — Complete Before/After File Diff](#appendix-a--complete-beforeafter-file-diff)
12. [Appendix B — Rollback Plan](#appendix-b--rollback-plan)

---

## 1. Executive Summary

**Problem:** Google Search Console reports Soft 404 errors for the URL pattern `https://pmspace.ai/search?q={search_term_string}`.

**Root Cause:** The `WebSite` JSON-LD schema (`SearchAction`) in `src/app/layout.tsx` exposes a `urlTemplate` that tells Google this site has a search page. Google's crawler substitutes placeholder values for `{search_term_string}` and crawls the resulting URLs. These URLs return HTTP 200 with thin or "no results" content, which Google classifies as a Soft 404.

**Fix Strategy (Dual Approach):**
| Action | Purpose |
|---|---|
| Add `noindex, follow` to search page metadata | Prevents Google from indexing thin-content search result pages |
| Improve empty/no-results state with curated fallback content | Better user experience, more context for any crawlers that still visit |

**What we are NOT doing (intentionally):**
- ❌ Removing SearchAction from schema → Retains Sitelinks Search Box in SERP
- ❌ Disallowing `/search` in robots.txt → Would contradict SearchAction signal
- ❌ Returning HTTP 404/410 → Would break user experience
- ❌ Removing `/search` from sitemap → The route is a real, functional page

---

## 2. Root Cause Analysis

### 2.1 How Google Discovers the URL

```
1. Googlebot crawls pmspace.ai homepage
2. Finds WebSite schema in <head>:
   {
     "@type": "WebSite",
     "potentialAction": {
       "@type": "SearchAction",
       "target": {
         "urlTemplate": "https://pmspace.ai/search?q={search_term_string}"
       }
     }
   }
3. Google generates test URLs by replacing {search_term_string}
   → e.g., /search?q=test, /search?q=sample, /search?q=construction
4. Google crawls /search?q=test
5. Gets HTTP 200 with:
   - "Enter a query to search..." (if no query) OR
   - "No results matched your search" (if query returns 0 results)
6. Google classifies this as Soft 404:
   - HTTP 200 status code (success)
   - No meaningful content related to the query
   - The page is essentially an empty shell
```

### 2.2 Contributing Factors

| Factor | File | Details |
|---|---|---|
| SearchAction schema exposes URL | `src/app/layout.tsx:136-154` | Tells Google a search endpoint exists |
| Search page metadata: `index: true` | `src/app/search/page.tsx:97-100` | Tells Google to index the page |
| Canonical strips query params | `src/app/search/page.tsx:94-96` | All search URLs canonicalize to thin `/search` |
| `/search` in sitemap | `src/app/sitemap.ts` (auto-discovered) | Gives Google another signal to crawl |
| No `Disallow: /search` in robots.txt | `public/robots.txt` | No crawl restriction |

### 2.3 Schema Redundancy

There are **three** places where SearchAction is defined. Only the inline one in `layout.tsx` is actively rendered on every page. The others are exports/functions that may be used elsewhere.

| Location | Status | Action Needed |
|---|---|---|
| `src/app/layout.tsx` (inline, L136-154) | ✅ **ACTIVE** — rendered site-wide | KEEP (no change) |
| `src/components/JsonLd.tsx` (WebSiteJsonLd export) | ⚠️ **NOT ACTIVELY RENDERED** site-wide | Keep as-is |
| `src/lib/seo-advanced.ts` (generateWebSiteSchema export) | ⚠️ **UTILITY ONLY** — renders only if called | Keep as-is |

---

## 3. Files Involved

| File | Path | Role |
|---|---|---|
| **Search page** | `src/app/search/page.tsx` | Needs metadata changes + content improvements |
| **Root layout** | `src/app/layout.tsx` | Contains SearchAction schema — **NO CHANGES** |
| **Robots.txt** | `public/robots.txt` | **NO CHANGES** needed |
| **Sitemap** | `src/app/sitemap.ts` | **NO CHANGES** needed |
| **JsonLd components** | `src/components/JsonLd.tsx` | **NO CHANGES** needed |
| **SEO utilities** | `src/lib/seo-advanced.ts` | **NO CHANGES** needed |

---

## 4. Recommended Fix Overview

### 4.1 Primary Fix (Stop Indexing)
- Change `robots` metadata on the search page from `index: true` → `index: false`
- This prevents Google from indexing the search page and all its query-parameter variants

### 4.2 Secondary Fix (Improve Content)
- Replace the generic "Enter a query..." hint with a curated list of popular search suggestions as clickable links
- Replace the empty "No results matched" message with a "Popular Pages" section linking to high-traffic pages
- This provides useful content for any crawlers that might still index the page despite noindex, and improves user experience

### 4.3 What Changes in Google Search Console
| Before | After (Expected) |
|---|---|
| Soft 404 errors for `/search?q=*` | Soft 404 errors drop to zero |
| Search page indexed with thin content | Search page excluded from index (noindex) |
| Sitelinks Search Box visible | Sitelinks Search Box **remains visible** (SearchAction is preserved) |
| Page visible in SERP | Page removed from SERP (search shouldn't be a landing page) |

---

## 5. Step 1 — Add `noindex` to Search Page Metadata

### 5.1 Rationale
The search page should NOT be indexed. It exists as a utility for users who navigate to it, not as a landing page for organic search. Adding `noindex` prevents Google from indexing empty/partial search result pages.

### 5.2 File: `src/app/search/page.tsx`

**Current code (lines 90–101):**
```typescript
export const metadata: Metadata = {
  title: "Search Space AI",
  description:
    "Search Space AI content across product pages, guides, resources, and blog articles.",
  alternates: {
    canonical: "https://pmspace.ai/search",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

**Change to:**
```typescript
export const metadata: Metadata = {
  title: "Search Space AI",
  description:
    "Search Space AI content across product pages, guides, resources, and blog articles.",
  alternates: {
    canonical: "https://pmspace.ai/search",
  },
  robots: {
    index: false,
    follow: true,
  },
};
```

### 5.3 What This Does
- Sets `<meta name="robots" content="noindex, follow">` on all variants: `/search`, `/search?q=*`
- Google will de-index the search page within 2–4 weeks
- Crawlers can still follow links on the page (`follow: true`)
- The page still renders and functions normally for users

### 5.4 Verification
After deployment, check the rendered HTML:
```bash
curl -s https://pmspace.ai/search | grep -i noindex
```
Expected output:
```html
<meta name="robots" content="noindex, follow" />
```

---

## 6. Step 2 — Keep SearchAction Schema in Layout (No Changes)

### 6.1 Rationale
The SearchAction schema is what powers **Sitelinks Search Box** in Google SERP. This is a valuable feature that:
- Increases organic CTR by ~2–5%
- Gives users direct search access from SERP
- Is a trusted site signal

Removing it would harm performance without fixing the root cause — the search page content (which we address with noindex).

### 6.2 File: `src/app/layout.tsx` — **NO CHANGES**

The existing schema at lines 136–154 stays as-is:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Space AI",
  "url": "https://pmspace.ai",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://pmspace.ai/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 6.3 Why This Is Safe
- **Before fix:** Google crawled search URLs → found thin content → Soft 404
- **After fix:** Google crawls search URLs → finds `noindex` → excludes from index (no Soft 404)
- SearchAction + noindex is a valid, recognized pattern. Google understands that search result pages should not be indexed.

---

## 7. Step 3 — Improve Empty State with Curated Content

### 7.1 Rationale
When a user (or crawler) visits `/search` without a query, the page currently shows "Enter a query to search product, guide, and resource content." This is thin content. We should replace it with useful, crawlable links.

### 7.2 File: `src/app/search/page.tsx`

**Current code (lines 149–154):**
```tsx
) : (
  <div className="mb-6 text-sm text-white/60">
    Enter a query to search product, guide, and resource content.
  </div>
)}
```

**Replace with:**
```tsx
) : (
  <div>
    <div className="mb-6 text-sm text-white/60">
      Enter a query above, or browse popular topics:
    </div>
    <div className="flex flex-wrap gap-3">
      {[
        { label: "AI Construction Scheduling", href: "/usecases/ai-construction-scheduling" },
        { label: "Document Management", href: "/construction-document-management-software" },
        { label: "Cost Control", href: "/features" },
        { label: "RFI Management", href: "/construction-rfi-management-software" },
        { label: "Project Scheduling", href: "/project-scheduling-software" },
        { label: "Enterprise Solutions", href: "/enterprise" },
        { label: "Pricing", href: "/pricing" },
        { label: "Procore Alternative", href: "/alternatives/procore-alternative" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
)}
```

### 7.3 Also update the "no query" heading for clarity
**Current code (line 115):**
```tsx
<h1 className="text-4xl font-semibold tracking-tight">
  Search Space AI
</h1>
```

This is fine as-is — no change needed here.

---

## 8. Step 4 — Improve No-Results State with Fallback Links

### 8.1 Rationale
When a query returns zero results, the page currently shows "No results matched your search. Try broader terms..." This is better than empty, but we can make it more useful with curated fallback links.

### 8.2 File: `src/app/search/page.tsx`

**Current code (lines 181–186):**
```tsx
{query && results.length === 0 ? (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
    No results matched your search. Try broader terms like
    "construction AI", "RFI", "document management", or "cost control".
  </div>
) : null}
```

**Replace with:**
```tsx
{query && results.length === 0 ? (
  <div>
    <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
      No results matched your search. Try broader terms or browse these popular pages:
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        { title: "Features & Capabilities", href: "/features", desc: "Explore all Space AI features" },
        { title: "Construction Document Management", href: "/construction-document-management-software", desc: "AI-powered document control" },
        { title: "Project Scheduling", href: "/project-scheduling-software", desc: "Gantt charts & critical path" },
        { title: "Pricing Plans", href: "/pricing", desc: "Free, Professional & Enterprise" },
        { title: "Construction AI Guide", href: "/guides/ai-construction-management-complete-guide", desc: "Complete guide to AI in construction" },
        { title: "All Resources", href: "/resources", desc: "White papers, webinars & more" },
      ].map((page) => (
        <Link
          key={page.href}
          href={page.href}
          className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
        >
          <h3 className="font-medium text-white">{page.title}</h3>
          <p className="mt-1 text-sm text-white/60">{page.desc}</p>
        </Link>
      ))}
    </div>
  </div>
) : null}
```

---

## 9. Step 5 — Verify SearchAction Retention in Other Files

### 9.1 Confirm `src/components/JsonLd.tsx`
The `WebSiteJsonLd()` function (lines 140–170) has a SearchAction. This component is exported. Check if it's imported anywhere:

```bash
grep -r "WebSiteJsonLd" src/
```

If it's used, it should remain as-is. If it's not used, it can be left in place for future use.

### 9.2 Confirm `src/lib/seo-advanced.ts`
The `generateWebSiteSchema()` function (lines 207–230) has a SearchAction. Check if it's imported anywhere:

```bash
grep -r "generateWebSiteSchema\|generateGlobalSchemaGraph" src/
```

If `generateGlobalSchemaGraph()` is called somewhere (it includes `generateWebSiteSchema()`), the SearchAction will be rendered there too. Any instance of SearchAction is fine — we want them all to remain.

---

## 10. Step 6 — Deployment & Validation Checklist

### 10.1 Pre-Deployment Checklist
- [ ] No changes to `src/app/layout.tsx` (SearchAction preserved)
- [ ] No changes to `public/robots.txt`
- [ ] No changes to `src/app/sitemap.ts`
- [ ] Changes applied to `src/app/search/page.tsx`:
  - [ ] `robots.index` changed from `true` to `false`
  - [ ] Empty state replaced with popular search suggestion chips
  - [ ] No-results state replaced with curated fallback grid

### 10.2 Post-Deployment Validation

**Step A — Verify noindex tag:**
```bash
curl -s https://pmspace.ai/search | grep -o 'name="robots" content="[^"]*"'
```
Expected: `name="robots" content="noindex, follow"`

**Step B — Verify with query parameter:**
```bash
curl -s https://pmspace.ai/search?q=test | grep -o 'name="robots" content="[^"]*"'
```
Expected: Same noindex tag.

**Step C — Verify SearchAction still present:**
```bash
curl -s https://pmspace.ai | grep -o 'SearchAction'
```
Expected: At least one match.

**Step D — Verify SearchAction URL template:**
```bash
curl -s https://pmspace.ai | grep -o '"urlTemplate":"[^"]*"'
```
Expected: `"urlTemplate":"https://pmspace.ai/search?q={search_term_string}"`

**Step E — Google Search Console URL Inspection:**
1. Go to Google Search Console → URL Inspection
2. Enter: `https://pmspace.ai/search`
3. Verify it shows: "Excluded by 'noindex' tag"
4. Request re-crawling

**Step F — Rich Results Test:**
1. Go to https://search.google.com/test/rich-results
2. Enter: `https://pmspace.ai`
3. Verify WebSite schema with SearchAction appears **without errors**

**Step G — Check SERP (7–14 days after deployment):**
1. Search for `site:pmspace.ai`
2. Verify search page no longer appears in results
3. Search for `pmspace.ai` directly — verify Sitelinks Search Box still appears

### 10.3 Monitoring Timeline

| Timeframe | Expected Outcome |
|---|---|
| **24–48 hours** | Google crawls updated `/search` page; detects noindex |
| **1–2 weeks** | Soft 404 errors in GSC begin declining |
| **2–4 weeks** | Soft 404 errors reach zero |
| **4–6 weeks** | Search page removed from Google index |

### 10.4 Fallback Actions (if Soft 404s persist after 4 weeks)

| Priority | Action | File |
|---|---|---|
| 1 | Add `Disallow: /search` to robots.txt | `public/robots.txt` |
| 2 | Add `noindex` via HTTP header in middleware | `src/middleware.ts` |
| 3 | Consider rendering a clearer 404-style response for no-match queries | `src/app/search/page.tsx` |

---

## 11. Appendix A — Complete Before/After File Diff

### `src/app/search/page.tsx` (3 changes)

**Change 1 — Metadata (lines 97–100):**
```diff
   robots: {
-    index: true,
+    index: false,
     follow: true,
   },
```

**Change 2 — Empty state (lines 149–154):**
```diff
 ) : (
-  <div className="mb-6 text-sm text-white/60">
-    Enter a query to search product, guide, and resource content.
-  </div>
+  <div>
+    <div className="mb-6 text-sm text-white/60">
+      Enter a query above, or browse popular topics:
+    </div>
+    <div className="flex flex-wrap gap-3">
+      {[
+        { label: "AI Construction Scheduling", href: "/usecases/ai-construction-scheduling" },
+        { label: "Document Management", href: "/construction-document-management-software" },
+        { label: "Cost Control", href: "/features" },
+        { label: "RFI Management", href: "/construction-rfi-management-software" },
+        { label: "Project Scheduling", href: "/project-scheduling-software" },
+        { label: "Enterprise Solutions", href: "/enterprise" },
+        { label: "Pricing", href: "/pricing" },
+        { label: "Procore Alternative", href: "/alternatives/procore-alternative" },
+      ].map((link) => (
+        <Link
+          key={link.href}
+          href={link.href}
+          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:border-white/30 hover:text-white"
+        >
+          {link.label}
+        </Link>
+      ))}
+    </div>
+  </div>
 )}
```

**Change 3 — No-results state (lines 181–186):**
```diff
 {query && results.length === 0 ? (
-  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
-    No results matched your search. Try broader terms like
-    "construction AI", "RFI", "document management", or "cost control".
-  </div>
+  <div>
+    <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
+      No results matched your search. Try broader terms or browse these popular pages:
+    </div>
+    <div className="grid gap-4 sm:grid-cols-2">
+      {[
+        { title: "Features & Capabilities", href: "/features", desc: "Explore all Space AI features" },
+        { title: "Construction Document Management", href: "/construction-document-management-software", desc: "AI-powered document control" },
+        { title: "Project Scheduling", href: "/project-scheduling-software", desc: "Gantt charts & critical path" },
+        { title: "Pricing Plans", href: "/pricing", desc: "Free, Professional & Enterprise" },
+        { title: "Construction AI Guide", href: "/guides/ai-construction-management-complete-guide", desc: "Complete guide to AI in construction" },
+        { title: "All Resources", href: "/resources", desc: "White papers, webinars & more" },
+      ].map((page) => (
+        <Link
+          key={page.href}
+          href={page.href}
+          className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
+        >
+          <h3 className="font-medium text-white">{page.title}</h3>
+          <p className="mt-1 text-sm text-white/60">{page.desc}</p>
+        </Link>
+      ))}
+    </div>
+  </div>
 ) : null}
```

---

## 12. Appendix B — Rollback Plan

If the fix causes unexpected issues, revert within 24 hours:

### Rollback Steps
1. Revert `src/app/search/page.tsx` to its previous state (reverse the 3 changes above)
2. Deploy the reverted code
3. Verify:
   - `curl -s https://pmspace.ai/search | grep -c 'noindex'` returns `0`
   - Search page metadata shows `<meta name="robots" content="index, follow" />`
4. Notify the team

### Risk Assessment
| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Sitelinks Search Box disappears | Very Low (schema unchanged) | High | Keep SearchAction in layout |
| Users confused by curated links | Low | Low | Links are to relevant pages |
| noindex blocks desired crawler access | Low | Low | Search pages should not be landing pages |
| Build fails | Very Low | Medium | Verify TS compiles before deploy |

---

*End of Plan*