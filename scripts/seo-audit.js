// scripts/seo-audit.js
// Comprehensive SEO Audit Script for Space AI
// Run: node scripts/seo-audit.js

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const OUTPUT_FILE = path.join(process.cwd(), 'seo-audit-report.md');

// ============================================================================
// AUDIT CONFIGURATION
// ============================================================================

const requiredMetadata = [
  'title',
  'description', 
  'keywords',
  'canonical',
  'openGraph',
];

const criticalPages = [
  '/',
  '/construction-management-software',
  '/features',
  '/pricing',
  '/construction-software-demo',
  '/alternatives/procore-alternative',
  '/enterprise',
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function getAllPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      getAllPageFiles(fullPath, files);
    } else if (item === 'page.tsx' || item === 'page.ts') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function extractMetadataFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const issues = [];
  const metadata = {
    hasTitle: false,
    hasDescription: false,
    hasKeywords: false,
    hasCanonical: false,
    hasOpenGraph: false,
    hasTwitter: false,
    hasSchema: false,
    title: null,
    description: null,
  };
  
  // Check for metadata export
  if (content.includes('export const metadata') || content.includes('export async function generateMetadata')) {
    // Check for title
    const titleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
    if (titleMatch) {
      metadata.hasTitle = true;
      metadata.title = titleMatch[1];
      
      // Title length check
      if (titleMatch[1].length > 60) {
        issues.push(`Title too long (${titleMatch[1].length} chars, max 60)`);
      }
      if (titleMatch[1].length < 30) {
        issues.push(`Title too short (${titleMatch[1].length} chars, min 30)`);
      }
    } else {
      issues.push('Missing title');
    }
    
    // Check for description
    const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/s);
    if (descMatch) {
      metadata.hasDescription = true;
      metadata.description = descMatch[1];
      
      // Description length check
      if (descMatch[1].length > 160) {
        issues.push(`Description too long (${descMatch[1].length} chars, max 160)`);
      }
      if (descMatch[1].length < 120) {
        issues.push(`Description too short (${descMatch[1].length} chars, min 120)`);
      }
    } else {
      issues.push('Missing description');
    }
    
    // Check for keywords
    if (content.includes('keywords:') || content.includes('keywords =')) {
      metadata.hasKeywords = true;
    } else {
      issues.push('Missing keywords');
    }
    
    // Check for canonical
    if (content.includes('canonical:') || content.includes('canonical =')) {
      metadata.hasCanonical = true;
    } else {
      issues.push('Missing canonical URL');
    }
    
    // Check for OpenGraph
    if (content.includes('openGraph:') || content.includes('openGraph =')) {
      metadata.hasOpenGraph = true;
    } else {
      issues.push('Missing Open Graph metadata');
    }
    
    // Check for Twitter
    if (content.includes('twitter:') || content.includes('twitter =')) {
      metadata.hasTwitter = true;
    }
    
    // Check for schema/JSON-LD
    if (content.includes('application/ld+json') || content.includes('Schema') || content.includes('JsonLd')) {
      metadata.hasSchema = true;
    } else {
      issues.push('Missing structured data (JSON-LD)');
    }
  } else {
    issues.push('No metadata export found');
  }
  
  return { metadata, issues };
}

function getPagePath(filePath) {
  const relativePath = filePath.replace(APP_DIR, '').replace(/\/page\.tsx?$/, '');
  return relativePath || '/';
}

// ============================================================================
// MAIN AUDIT
// ============================================================================

console.log('🔍 Starting SEO Audit...\n');

const pageFiles = getAllPageFiles(APP_DIR);
console.log(`Found ${pageFiles.length} pages to audit\n`);

const results = {
  totalPages: pageFiles.length,
  pagesWithIssues: 0,
  issuesByType: {},
  criticalIssues: [],
  pageResults: [],
};

for (const filePath of pageFiles) {
  const pagePath = getPagePath(filePath);
  const { metadata, issues } = extractMetadataFromFile(filePath);
  
  const isCritical = criticalPages.includes(pagePath);
  
  if (issues.length > 0) {
    results.pagesWithIssues++;
    
    if (isCritical) {
      results.criticalIssues.push({
        page: pagePath,
        issues,
      });
    }
    
    // Count issues by type
    for (const issue of issues) {
      const issueType = issue.split(' ')[0] + ' ' + issue.split(' ')[1];
      results.issuesByType[issueType] = (results.issuesByType[issueType] || 0) + 1;
    }
  }
  
  results.pageResults.push({
    path: pagePath,
    ...metadata,
    issues,
    isCritical,
  });
}

// ============================================================================
// GENERATE REPORT
// ============================================================================

let report = `# Space AI SEO Audit Report

Generated: ${new Date().toISOString()}

## Summary

| Metric | Value |
|--------|-------|
| Total Pages | ${results.totalPages} |
| Pages with Issues | ${results.pagesWithIssues} |
| SEO Score | ${Math.round((1 - results.pagesWithIssues / results.totalPages) * 100)}% |

## Issue Breakdown

| Issue Type | Count |
|------------|-------|
${Object.entries(results.issuesByType)
  .sort((a, b) => b[1] - a[1])
  .map(([type, count]) => `| ${type} | ${count} |`)
  .join('\n')}

## Critical Page Issues

${results.criticalIssues.length === 0 
  ? '✅ No critical page issues found!'
  : results.criticalIssues.map(p => `
### ${p.page}
${p.issues.map(i => `- ⚠️ ${i}`).join('\n')}
`).join('\n')}

## All Pages with Issues

${results.pageResults
  .filter(p => p.issues.length > 0)
  .map(p => `
### ${p.path}
${p.issues.map(i => `- ${i}`).join('\n')}
`).join('\n')}

## Recommendations

### High Priority
1. Add canonical URLs to all pages
2. Ensure all pages have unique, optimized titles (50-60 chars)
3. Write compelling meta descriptions (150-160 chars)
4. Add structured data (JSON-LD) to all key pages

### Medium Priority
1. Add FAQ schema to all alternative/comparison pages
2. Implement HowTo schema on guide pages
3. Add Review schema to pages with testimonials
4. Optimize images with proper alt text and lazy loading

### Low Priority
1. Add Twitter card metadata to all pages
2. Implement speakable schema for voice search
3. Add video schema to pages with video content

## Checklist

- [ ] All critical pages have complete metadata
- [ ] All pages have canonical URLs
- [ ] All pages have structured data
- [ ] Image sitemap is properly configured
- [ ] Video sitemap includes all videos
- [ ] Hreflang tags are correct for all regional pages
- [ ] Internal linking connects topically related pages
`;

fs.writeFileSync(OUTPUT_FILE, report);

console.log('📊 SEO Audit Summary:');
console.log(`   Total pages: ${results.totalPages}`);
console.log(`   Pages with issues: ${results.pagesWithIssues}`);
console.log(`   SEO Score: ${Math.round((1 - results.pagesWithIssues / results.totalPages) * 100)}%`);
console.log(`\n✅ Report saved to: ${OUTPUT_FILE}`);

if (results.criticalIssues.length > 0) {
  console.log('\n⚠️  Critical Issues Found:');
  for (const issue of results.criticalIssues) {
    console.log(`   ${issue.page}:`);
    for (const i of issue.issues) {
      console.log(`     - ${i}`);
    }
  }
}
