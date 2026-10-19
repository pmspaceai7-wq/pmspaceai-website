#  How to Fix the 2 404 Errors

## Quick Summary

Google is   trying to  reach 2 URLs that don't exist:
- `https://pmspace.ai/tools/custom-crm` → 404 (exists at `/tools/crm`)
- `https://pmspace.ai/tools/employee-scheduling-software` → 404 (exists at `/tools/scheduling-software`)

**Root Cause:** Slug   mismatches in `/src/lib/resources.ts`

**Fix Time:** 5 minutes

---

## Step 1: Open the File

Open: `/src/lib/resources.ts`

---

## Step 2: Fix the CRM Tool Slug

**Find this section (around line 179):**

```typescript
{
  id: 106,
  slug: "crm",
  title: "Custom AI CRM for Smarter Client Management | Space AI",
  description: "Manage customer relationships effectively with Space AI. Use AI-driven insights, automation, and personalization to boost engagement.",
  ...
}
```

**Change `slug: "crm"` to `slug: "custom-crm"`:**

```typescript
{
  id: 106,
  slug: "custom-crm",  // ← CHANGED HERE
  title: "Custom AI CRM for Smarter Client Management | Space AI",
  description: "Manage customer relationships effectively with Space AI. Use AI-driven insights, automation, and personalization to boost engagement.",
  ...
}
```

---

## Step 3: Fix the Scheduling Tool Slug

**Find this section (around line 302):**

```typescript
{
  id: 112,
  slug: "scheduling-software",
  title: "AI Scheduling Software with Optimization Features | Space AI",
  description: "Automate workforce scheduling with Space AI to boost efficiency, reduce conflicts, and optimize team productivity for smooth operations.",
  ...
}
```

**Change `slug: "scheduling-software"` to `slug: "employee-scheduling-software"`:**

```typescript
{
  id: 112,
  slug: "employee-scheduling-software",  // ← CHANGED HERE
  title: "AI Scheduling Software with Optimization Features | Space AI",
  description: "Automate workforce scheduling with Space AI to boost efficiency, reduce conflicts, and optimize team productivity for smooth operations.",
  ...
}
```

---

## Step 4: Save the File

Save `/src/lib/resources.ts`

---

## Step 5: Build and Deploy

```bash
# Rebuild the project
npm run build

# Test locally
npm run dev

# Test the URLs work:
# - http://localhost:3000/tools/custom-crm
# - http://localhost:3000/tools/employee-scheduling-software
```

---

## Step 6: Update Sitemaps and Search Console

After deployment:

1. **Regenerate your XML sitemap** (if auto-generated, this happens automatically)

2. **Update Google Search Console:**
   - Remove the old URLs from the index (if they should be redirected)
   - Submit the new sitemap
   - Request re-indexing of the new URLs

3. **Optional: Setup 301 Redirects** (if you want the old URLs to redirect):
   ```
   /tools/crm → /tools/custom-crm
   /tools/scheduling-software → /tools/employee-scheduling-software
   ```

---

## Verification Checklist

- [ ] Changed `slug: "crm"` to `slug: "custom-crm"` on line 179
- [ ] Changed `slug: "scheduling-software"` to `slug: "employee-scheduling-software"` on line 302
- [ ] Saved `/src/lib/resources.ts`
- [ ] Ran `npm run build` successfully
- [ ] Tested URLs locally:
  - [ ] `/tools/custom-crm` loads
  - [ ] `/tools/employee-scheduling-software` loads
- [ ] Deployed changes to production
- [ ] Updated Google Search Console
- [ ] Requested re-indexing

---

## Expected Results

**Before Fix:**
- `/tools/custom-crm` → 404 error
- `/tools/employee-scheduling-software` → 404 error

**After Fix:**
- `/tools/custom-crm` → Loads successfully ✓
- `/tools/employee-scheduling-software` → Loads successfully ✓

**SEO Impact:**
- Eliminates 2 404 errors from search results
- Improves user experience for clicks from Google
- Preserves crawl budget and ranking signals
- Fixes ~1.4% of indexed URLs

---

## Questions?

If any issues arise after making these changes:

1. Verify the slug changes were saved correctly
2. Ensure the build completed successfully
3. Clear browser cache and try again
4. Check for any other references to these old slugs in the codebase

The change is straightforward - just updating string values in the resource definition array.

