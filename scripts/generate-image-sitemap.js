// scripts/generate-image-sitemap.js
// Run after build: node scripts/generate-image-sitemap.js

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://pmspace.ai';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'image-sitemap.xml');

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];

// Map image directories → the page they belong to
const DIRECTORY_PAGE_MAP = {
  'features': '/features',
  'usecases': '/usecases',
};

// Map specific asset image filenames (without extension) → page URL
const FILENAME_PAGE_MAP = {
  // Tools
  'crm':                                          '/tools/construction-crm-software',
  'inventorymanagement':                          '/tools/inventory-management',
  'supplychainmanagement':                        '/tools/construction-supply-chain-management-software',
  'documentmanagement':                           '/tools/construction-document-management-software',
  'esignature':                                   '/tools/e-signature-software',
  'equipmentcheckoutapp':                         '/tools/equipment-checkout-app',
  'analyticsreportingsoftware':                   '/tools/construction-analytics-software',
  'scheduleingsoftware':                          '/tools/project-scheduling-software',
  'invoicemanagementsystem':                      '/tools/construction-expense-management-software',
  'admin':                                        '/tools/admin-panels',

  // Solutions
  'constructionmanagmentonline':                  '/solutions/construction-management-online',
  'constructionsoftwareforenterprises':           '/solutions/construction-software-for-enterprises',
  'constructionsoftwareforgeneralcontactors':     '/solutions/best-construction-software-for-general-contractors',
  'constructionsoftwareforsmallbuilders':         '/solutions/construction-management-software-small-business',
  'constructionsoftwareforsmallbuisnesses':       '/solutions/construction-management-software-small-business',
  'projectmanagementsoftwareforenterprises':      '/solutions/project-management-software-for-enterprises',
  'projectmanagementsoftwareforsmallbuisnesses':  '/solutions/project-management-software-for-small-business',
  'projectmanagementforbuildingconstruction':     '/solutions/project-management-for-building-construction',
  'allinoneconstructionsoftware':                 '/solutions/all-in-one-construction-software',
  'projectmanagementdashboard':                   '/solutions/project-management',

  // Guides / Platform
  'spacebim':                                     '/guides/space-bim',
  'aiagent':                                      '/platform/ai',
  'aiworkflows':                                  '/platform/ai',
  'mcp':                                          '/platform/ai',

  // Core pages
  'costestimation':                               '/construction-cost-management-software',
  'email':                                        '/guides/email-integration',
  'forms':                                        '/features',
  'files':                                        '/features',
  'cdm':                                          '/features',

  // Blogs
  'constructionsoftwareforbusiness':              '/blogs/best-software-for-construction-business',
  'clinicmanagementwithspaceai':                  '/blogs',
  'clinicmanagementwithspaceai2':                 '/blogs',
  'clinicmanagementwithspaceai3':                 '/blogs',
  'clinicmanagementwithspaceai4':                 '/blogs',
  'clinicmanagementfiles':                        '/blogs',

  // Subcontractor / General contractor
  'general-cunstructers':                         '/construction-software-for-general-contractors',

  // Homepage / branding (fallback to /)
  'og-image':                                     '/',
  'fulllogo':                                     '/',
  'fulllogo_nobuffer':                            '/',
  'fulllogo_transparent':                         '/',
  'fulllogo_transparent_nobuffer':                '/',
  'icononly':                                     '/',
  'icononly_nobuffer':                            '/',
  'icononly_transparent':                         '/',
  'icononly_transparent_nobuffer':                '/',
  'textonly':                                     '/',
  'textonly_nobuffer':                            '/',
  'grayscale':                                    '/',
  'grayscale_nobuffer':                           '/',
  'grayscale_transparent':                        '/',
  'grayscale_transparent_nobuffer':               '/',
  'print':                                        '/',
  'print_transparent':                            '/',
  'gluonit':                                      '/',
  'herolizit':                                    '/',
  'welcometospaceai':                             '/',
  'workspace':                                    '/',
  'workstream':                                   '/',
  'apps':                                         '/apps',
  'mobile1':                                      '/mobile-construction-management-app',
  'mobile2':                                      '/mobile-construction-management-app',
  'vid1thumbnail':                                '/videos',
};

// Industry images
const INDUSTRY_PAGES = {
  'health-care':    '/guides/healthcare-construction-management',
  'infrastructure': '/guides/infrastructure-construction-management',
  'government':     '/',
  'defense':        '/',
  'marine':         '/',
  'transportation': '/',
  'oilandgas':      '/',
  'real-estate':    '/',
  'education':      '/',
  'hospitality':    '/',
};

Object.assign(FILENAME_PAGE_MAP, INDUSTRY_PAGES);

function getPageForImage(dir, filename) {
  // 1. Check directory mapping first (features/, usecases/)
  const topDir = dir.split('/')[0].split(path.sep)[0];
  if (DIRECTORY_PAGE_MAP[topDir]) {
    return DIRECTORY_PAGE_MAP[topDir];
  }

  // 2. Check filename mapping
  const nameWithoutExt = path.basename(filename, path.extname(filename)).toLowerCase();
  if (FILENAME_PAGE_MAP[nameWithoutExt]) {
    return FILENAME_PAGE_MAP[nameWithoutExt];
  }

  // 3. Default to homepage
  return '/';
}

function getAllImages(dir) {
  const images = [];
  const fullPath = path.join(PUBLIC_DIR, dir);

  if (!fs.existsSync(fullPath)) return images;

  const items = fs.readdirSync(fullPath);

  for (const item of items) {
    const itemPath = path.join(fullPath, item);
    const relativePath = path.join(dir, item).replace(/\\/g, '/');
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      images.push(...getAllImages(relativePath));
    } else if (IMAGE_EXTENSIONS.includes(path.extname(item).toLowerCase())) {
      if (/\s/.test(relativePath)) {
        console.warn(`Skipping image sitemap entry with unsafe whitespace path: ${relativePath}`);
        continue;
      }

      const pagePath = getPageForImage(dir, item);
      images.push({
        pageLoc: `${SITE_URL}${pagePath}`,
        imageLoc: `${SITE_URL}/${relativePath}`,
        title: formatImageTitle(item),
        caption: `${formatImageTitle(item)} - Space AI Construction Management`,
      });
    }
  }

  return images;
}

function formatImageTitle(filename) {
  const name = path.basename(filename, path.extname(filename));
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateImageSitemap(images) {
  // Group images by page so each <url> contains all images for that page
  const pageMap = {};
  for (const img of images) {
    if (!pageMap[img.pageLoc]) pageMap[img.pageLoc] = [];
    pageMap[img.pageLoc].push(img);
  }

  const urlEntries = Object.entries(pageMap).map(([pageLoc, imgs]) => {
    const imageEntries = imgs.map((img) => `
    <image:image>
      <image:loc>${img.imageLoc}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`).join('');

    return `
  <url>
    <loc>${pageLoc}</loc>${imageEntries}
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// Main
const IMAGE_DIRECTORIES = ['assets/images', 'features', 'usecases'];
const allImages = [];

for (const dir of IMAGE_DIRECTORIES) {
  allImages.push(...getAllImages(dir));
}

console.log(`Found ${allImages.length} images across ${new Set(allImages.map(i => i.pageLoc)).size} pages`);

const sitemap = generateImageSitemap(allImages);
fs.writeFileSync(OUTPUT_FILE, sitemap);
console.log(`Image sitemap generated at: ${OUTPUT_FILE}`);
