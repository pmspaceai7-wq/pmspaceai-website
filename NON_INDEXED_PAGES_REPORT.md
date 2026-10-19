# Non-Indexed Pages Detection Report

## Pages in File System BUT NOT in Google Search Console Index

Based on your GSC indexed  pages list (last updated Apr 28, 2026) vs actual page.tsx files in `src/app`:

### 🔴 CRITICAL: Pages That SHOULD Be Indexed But Are NOT

#### 1. **Transform Folder Pages (Likely Duplicates of /platform)**
These pages exist but appear to be duplicates of the /platform section:
```
/Transform
/Transform/ai
/Transform/blueprint  
/Transform/cracks-in-foundation
/Transform/inefficiency
/Transform/our-vision
/Transform/page
/Transform/process-automation
/Transform/space-ai-advantages
/Transform/system-of-intelligence
/Transform/usecases
```
**Action**: Verify if this is intentional. If not, remove the folder or add `robots.txt` noindex rules.

---

#### 2. **Career/Careers Path Routing Issue**
```
File System Has:
  - /careers (page.tsx found)
  - /careers/[slug] (dynamic careers page)
  
GSC Indexed As:
  - /career (singular)
  - /career/senior-mern-developer
```
**Action**: Align routing - decide between `/career` or `/careers` and redirect one to the other.

---

#### 3. **Newsletter Pages**
```
File System Has:
  - /construction-newsletter
  - (no /newsletter found)
  
GSC Shows:
  - /newsletter (indexed)
```
**Action**: Check if `/newsletter` should redirect to `/construction-newsletter` or if a separate `/newsletter` page should exist.

---

### 🟡 WARNING: Tools Pages Status

**File System Tools Pages (14 found)**:
- ✅ /tools (main page)
- ✅ /tools/[slug] (dynamic)
- ✅ /tools/clinic-management
- ✅ /tools/construction-change-order-software
- ✅ /tools/construction-crm-software
- ✅ /tools/construction-daily-log-software
- ✅ /tools/construction-delay-risk-calculator
- ✅ /tools/construction-document-management-software
- ✅ /tools/construction-inventory-management-software
- ✅ /tools/construction-punch-list-software
- ✅ /tools/construction-rfis-software
- ✅ /tools/construction-submittals-software
- ✅ /tools/invoice-management-software
- ✅ /tools/roi-calculator

**GSC Shows These Tools Indexed (17+ found)**:
- ✅ /tools/construction-change-order-software
- ✅ /tools/construction-daily-log-software
- ✅ /tools/construction-rfis-software
- ✅ /tools/construction-submittals-software
- ✅ /tools/construction-punch-list-software
- ✅ /tools/construction-document-management-software
- ✅ /tools/backoffice-apps
- ❌ /tools/construction-analytics-software (NOT FOUND IN FS)
- ❌ /tools/construction-asset-tracking-software (NOT FOUND IN FS)
- ❌ /tools/equipment-checkout-app (NOT FOUND IN FS)
- ❌ /tools/expense-tracking-application (NOT FOUND IN FS)
- ❌ /tools/inventory-management (NOT FOUND IN FS)
- ❌ /tools/digital-signature (NOT FOUND IN FS)
- ❌ /tools/supply-chain-management-system (NOT FOUND IN FS)
- ❌ /tools/project-scheduling-software (NOT FOUND IN FS)
- ❌ /tools/admin-panels (NOT FOUND IN FS)
- ❌ /tools/digital-asset-management-system (NOT FOUND IN FS)

**Action**: These indexed pages have NO page.tsx files. They're being indexed from links but have no actual content. Either:
1. Create the missing page.tsx files
2. Add them to robots.txt disallow rules
3. Set up 301 redirects

---

#### 4. **Services Pages**
```
File System Has:
  - /services (main page)
  - /services/ai-app-development
  - /services/api-development
  - /services/application-maintenance
  - /services/data-management-services
  - /services/digital-transformation-services
  - /services/software-integration-services
  - /services/software-injection (NOT INDEXED BUT IN FS)

GSC Shows Most indexed except:
  - /services/software-injection (in FS but NOT indexed)
```

---

#### 5. **Duplicate Alternatives Pages**
These pairs exist and might be causing duplication issues:
- `/alternatives/smartsheet` vs `/alternatives/smartsheet-alternative`
- `/alternatives/wrike` vs `/alternatives/wrike-alternative`  
- `/alternatives/monday` vs `/alternatives/monday-alternative`

**Action**: Verify which ones actually exist and use 301 redirects if keeping duplicates.

---

#### 6. **Missing Indexed Pages in File System**
```
GSC Shows Indexed But NO page.tsx in FS:
  - /career (only /careers exists - ROUTING ISSUE)
  - /alternative/procore (exists but /alternatives/procore-alternative is the main one)
  - /visa-immigration-services
```

**Action**: These should be either:
1. Created if they were intentionally removed
2. Verified as 404s and removed from index
3. Set up redirects if URL changed

---

### 📊 Page Status Summary

| Category | Status | Count |
|----------|--------|-------|
| Properly Indexed Pages | ✅ | ~200 |
| Pages Indexed But No FS File | ❌ | 17+ |
| Pages in FS But Not Indexed | ⚠️ | 11 |
| Duplicate Routing Issues | ⚠️ | 3 |

---

### 🛠️ Immediate Actions Required

1. **Delete or noindex the /Transform folder** - It's an exact duplicate of /platform
   
2. **Fix Tools pages** - Decide if these indexed pages should exist:
   - /tools/construction-analytics-software
   - /tools/construction-asset-tracking-software
   - /tools/equipment-checkout-app
   - /tools/expense-tracking-application
   - /tools/inventory-management
   - /tools/digital-signature
   - /tools/supply-chain-management-system
   - /tools/project-scheduling-software
   - /tools/admin-panels
   - /tools/digital-asset-management-system
   - /tools/backoffice-apps

3. **Fix Careers routing** - Redirect /career → /careers or vice versa

4. **Verify newsletter routing** - Check /newsletter status

5. **Set up 301 redirects** for any intentionally removed pages

6. **Request reindex** in GSC after cleanup

---

### 📝 Quick Reference: Pages Found in File System (223 total)

All directories and static pages are properly set up. Main issues are:
- Missing actual pages for indexed tools
- Duplicate platform sections (Transform vs platform)
- Routing inconsistencies (career vs careers)
- Some indexed pages with no FS backing

