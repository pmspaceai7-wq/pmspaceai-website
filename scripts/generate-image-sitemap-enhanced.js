// scripts/generate-image-sitemap.js
// Enhanced Image Sitemap Generator - Maps images to their actual pages
// Run: node scripts/generate-image-sitemap.js

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://pmspace.ai';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'src', 'app');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'image-sitemap.xml');

// Image extensions to include
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];

// ============================================================================
// IMAGE TO PAGE MAPPING
// Maps image directories/names to their most relevant page URLs
// ============================================================================

const imageToPageMapping = {
  // Feature images
  'features/': '/features',
  'feature-': '/features',
  'scheduling': '/project-scheduling-software',
  'document': '/construction-document-management-software',
  'cost': '/construction-cost-management-software',
  'safety': '/construction-safety-management-software',
  'rfi': '/construction-rfi-management',
  'punch-list': '/construction-punch-list-software',
  
  // Regional images
  'usa': '/construction-management-software-usa',
  'india': '/construction-management-software-india',
  'uae': '/construction-management-software-uae',
  'uk': '/construction-management-software-uk',
  'australia': '/construction-management-software-australia',
  'singapore': '/construction-management-software-singapore',
  
  // Competitor/Alternative images
  'procore': '/alternatives/procore-alternative',
  'buildertrend': '/alternatives/buildertrend-alternative',
  'plangrid': '/alternatives/plangrid-alternative',
  'autodesk': '/alternatives/autodesk-construction-cloud-alternative',
  'primavera': '/primavera-alternatives',
  'monday': '/alternatives/monday-alternative',
  'fieldwire': '/alternatives',
  
  // Industry images
  'healthcare': '/industries/health-care',
  'education': '/industries/education',
  'infrastructure': '/industries/infrastructure',
  'defense': '/industries/defense',
  'oil-gas': '/industries/oil-and-gas',
  'real-estate': '/industries/real-estate',
  'hospitality': '/industries/hospitality',
  'transportation': '/industries/transportation',
  
  // Use case images
  'usecases/': '/usecases',
  'usecase': '/usecases',
  
  // Platform images
  'ai': '/platform/ai',
  'analytics': '/platform/analytics',
  'dashboard': '/platform',
  
  // Module images
  'bim': '/core/space-bim',
  'esign': '/core/e-sign',
  'workflow': '/core/ai-workflow-orchestration',
  
  // General images
  'hero': '/',
  'og-image': '/',
  'logo': '/',
  'pricing': '/pricing',
  'enterprise': '/enterprise',
  'demo': '/construction-software-demo',
  'contact': '/contact-sales',
  'testimonial': '/customers',
  'case-study': '/case-studies',
  'blog': '/blogs',
  'guide': '/guides',
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getPageUrlForImage(imagePath, imageName) {
  const lowerPath = imagePath.toLowerCase();
  const lowerName = imageName.toLowerCase();
  
  // Check directory-based mapping first
  for (const [pattern, pageUrl] of Object.entries(imageToPageMapping)) {
    if (lowerPath.includes(pattern) || lowerName.includes(pattern.replace('/', ''))) {
      return pageUrl;
    }
  }
  
  // Default to homepage for unmatched images
  return '/';
}

function formatImageTitle(filename) {
  // Remove extension and convert to title case
  const name = path.basename(filename, path.extname(filename));
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function escapeXml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function getAllImages(dir, baseDir = '') {
  const images = [];
  const fullPath = path.join(PUBLIC_DIR, dir);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Directory not found: ${fullPath}`);
    return images;
  }
  
  const items = fs.readdirSync(fullPath);
  
  for (const item of items) {
    const itemPath = path.join(fullPath, item);
    const relativePath = path.join(dir, item);
    
    try {
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        images.push(...getAllImages(relativePath, baseDir));
      } else if (IMAGE_EXTENSIONS.includes(path.extname(item).toLowerCase())) {
        const imageUrl = `${SITE_URL}/${relativePath.replace(/\\/g, '/')}`;
        const pageUrl = getPageUrlForImage(relativePath, item);
        
        images.push({
          pageUrl: `${SITE_URL}${pageUrl}`,
          imageUrl: imageUrl,
          title: formatImageTitle(item),
          caption: `${formatImageTitle(item)} - Space AI AI Construction Management Software`,
          geoLocation: 'Global',
          license: `${SITE_URL}/terms-of-service`,
        });
      }
    } catch (err) {
      console.error(`Error processing ${itemPath}:`, err.message);
    }
  }
  
  return images;
}

// ============================================================================
// SITEMAP GENERATION
// ============================================================================

function generateImageSitemap(images) {
  // Group images by page URL for better organization
  const imagesByPage = {};
  
  for (const image of images) {
    if (!imagesByPage[image.pageUrl]) {
      imagesByPage[image.pageUrl] = [];
    }
    imagesByPage[image.pageUrl].push(image);
  }
  
  let urlEntries = '';
  
  for (const [pageUrl, pageImages] of Object.entries(imagesByPage)) {
    // Limit to 1000 images per URL (Google's limit)
    const limitedImages = pageImages.slice(0, 1000);
    
    const imageEntries = limitedImages.map((image) => `
      <image:image>
        <image:loc>${escapeXml(image.imageUrl)}</image:loc>
        <image:title>${escapeXml(image.title)}</image:title>
        <image:caption>${escapeXml(image.caption)}</image:caption>
        <image:geo_location>${escapeXml(image.geoLocation)}</image:geo_location>
        <image:license>${escapeXml(image.license)}</image:license>
      </image:image>`).join('');
    
    urlEntries += `
  <url>
    <loc>${escapeXml(pageUrl)}</loc>${imageEntries}
  </url>`;
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>`;
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================

const IMAGE_DIRECTORIES = [
  'assets/images',
  'features',
  'usecases',
  'videos', // for video thumbnails
];

const allImages = [];

console.log('🖼️  Generating Enhanced Image Sitemap...\n');

for (const dir of IMAGE_DIRECTORIES) {
  console.log(`Scanning directory: ${dir}`);
  const images = getAllImages(dir);
  console.log(`  Found ${images.length} images`);
  allImages.push(...images);
}

console.log(`\n📊 Total images found: ${allImages.length}`);

// Count unique pages
const uniquePages = new Set(allImages.map(img => img.pageUrl));
console.log(`📄 Mapped to ${uniquePages.size} unique pages`);

const sitemap = generateImageSitemap(allImages);
fs.writeFileSync(OUTPUT_FILE, sitemap);

console.log(`\n✅ Image sitemap generated: ${OUTPUT_FILE}`);
console.log(`   File size: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2)} KB`);

// Print summary of page mappings
console.log('\n📋 Page mapping summary:');
const pageCounts = {};
for (const img of allImages) {
  pageCounts[img.pageUrl] = (pageCounts[img.pageUrl] || 0) + 1;
}

Object.entries(pageCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([url, count]) => {
    console.log(`   ${url}: ${count} images`);
  });
