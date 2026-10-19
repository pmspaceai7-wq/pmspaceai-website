#!/usr/bin/env node
/**
 * Canonical Tags Audit Script
 * Task 15: Implement Canonical Tags Audit
 * 
 * This script scans all pages in the Next.js app directory and
 * verifies canonical tags are properly set for SEO.
 * 
 * Run with: node scripts/audit-canonical-tags.js
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '..', 'src', 'app');
const SITE_URL = 'https://pmspace.ai';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

// Results tracking
const results = {
  total: 0,
  withCanonical: 0,
  withoutCanonical: 0,
  issues: [],
};

/**
 * Check if a file contains canonical tag in metadata
 */
function checkForCanonical(filePath, content) {
  const canonicalPatterns = [
    /alternates:\s*{[^}]*canonical:/s,
    /canonical:\s*["'`]/,
    /<link\s+rel=["']canonical["']/,
  ];

  return canonicalPatterns.some(pattern => pattern.test(content));
}

/**
 * Extract the canonical URL if present
 */
function extractCanonicalUrl(content) {
  const match = content.match(/canonical:\s*["'`]([^"'`]+)["'`]/);
  return match ? match[1] : null;
}

/**
 * Get expected canonical URL for a route
 */
function getExpectedCanonical(routePath) {
  // Normalize the path
  let normalized = routePath
    .replace(/\\/g, '/')
    .replace(/\/page\.(tsx?|jsx?)$/, '')
    .replace(/\/src\/app/, '')
    .replace(/\/\(.*?\)/g, '') // Remove route groups
    .replace(/\/\[.*?\]/g, '') // Dynamic routes - these need special handling
    .replace(/\/+$/, ''); // Remove trailing slashes

  if (normalized === '' || normalized === '/') {
    return SITE_URL;
  }

  return `${SITE_URL}${normalized}`;
}

/**
 * Check if a layout file in the same directory has canonical tag
 */
function checkLayoutForCanonical(pageDir) {
  const layoutFiles = ['layout.tsx', 'layout.ts', 'layout.jsx', 'layout.js'];
  
  for (const layoutFile of layoutFiles) {
    const layoutPath = path.join(pageDir, layoutFile);
    if (fs.existsSync(layoutPath)) {
      const content = fs.readFileSync(layoutPath, 'utf8');
      if (checkForCanonical(layoutPath, content)) {
        return { hasCanonical: true, canonicalUrl: extractCanonicalUrl(content) };
      }
    }
  }
  
  return { hasCanonical: false, canonicalUrl: null };
}

/**
 * Recursively scan directory for page files
 */
function scanDirectory(dir, basePath = '') {
  if (!fs.existsSync(dir)) {
    console.log(`${colors.yellow}Directory not found: ${dir}${colors.reset}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.join(basePath, entry.name);

    if (entry.isDirectory()) {
      // Skip certain directories
      if (['api', '_components', 'components', 'node_modules'].includes(entry.name)) {
        continue;
      }
      scanDirectory(fullPath, relativePath);
    } else if (entry.isFile() && entry.name.match(/^page\.(tsx?|jsx?)$/)) {
      results.total++;
      analyzePageFile(fullPath, relativePath);
    }
  }
}

/**
 * Analyze a page file for canonical tags
 */
function analyzePageFile(filePath, relativePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let hasCanonical = checkForCanonical(filePath, content);
    let canonicalUrl = extractCanonicalUrl(content);
    const expectedUrl = getExpectedCanonical(filePath);
    const routePath = relativePath.replace(/\\/g, '/').replace(/\/page\.(tsx?|jsx?)$/, '') || '/';

    // If page doesn't have canonical, check layout file in same directory
    if (!hasCanonical) {
      const pageDir = path.dirname(filePath);
      const layoutResult = checkLayoutForCanonical(pageDir);
      if (layoutResult.hasCanonical) {
        hasCanonical = true;
        canonicalUrl = layoutResult.canonicalUrl;
      }
    }

    if (hasCanonical) {
      results.withCanonical++;
      
      // Check if canonical URL is correct
      if (canonicalUrl && !canonicalUrl.startsWith(SITE_URL)) {
        results.issues.push({
          file: relativePath,
          route: routePath,
          type: 'warning',
          message: `Canonical URL should start with ${SITE_URL}`,
          current: canonicalUrl,
          expected: expectedUrl,
        });
      }
    } else {
      results.withoutCanonical++;
      
      // Determine if missing canonical is critical
      const isDynamic = relativePath.includes('[');
      const isRouteGroup = relativePath.includes('(');
      
      results.issues.push({
        file: relativePath,
        route: routePath,
        type: isDynamic ? 'warning' : 'error',
        message: 'Missing canonical tag',
        current: null,
        expected: isDynamic ? `Dynamic - ${expectedUrl}/[slug]` : expectedUrl,
      });
    }
  } catch (error) {
    results.issues.push({
      file: relativePath,
      route: relativePath,
      type: 'error',
      message: `Error reading file: ${error.message}`,
    });
  }
}

/**
 * Generate markdown report
 */
function generateReport() {
  const timestamp = new Date().toISOString();
  const errorCount = results.issues.filter(i => i.type === 'error').length;
  const warningCount = results.issues.filter(i => i.type === 'warning').length;

  let report = `# Canonical Tags Audit Report

**Generated:** ${timestamp}  
**Site:** ${SITE_URL}

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | ${results.total} |
| With Canonical | ${results.withCanonical} |
| Without Canonical | ${results.withoutCanonical} |
| Errors | ${errorCount} |
| Warnings | ${warningCount} |

**Coverage:** ${((results.withCanonical / results.total) * 100).toFixed(1)}%

`;

  if (results.issues.length > 0) {
    report += `## Issues Found

`;

    // Errors first
    const errors = results.issues.filter(i => i.type === 'error');
    if (errors.length > 0) {
      report += `### ❌ Errors (${errors.length})

These pages are missing canonical tags and need attention:

| Route | File | Issue |
|-------|------|-------|
`;
      errors.forEach(issue => {
        report += `| \`${issue.route}\` | \`${issue.file}\` | ${issue.message} |\n`;
      });
      report += '\n';
    }

    // Warnings
    const warnings = results.issues.filter(i => i.type === 'warning');
    if (warnings.length > 0) {
      report += `### ⚠️ Warnings (${warnings.length})

These pages may need canonical tag review:

| Route | File | Issue |
|-------|------|-------|
`;
      warnings.forEach(issue => {
        report += `| \`${issue.route}\` | \`${issue.file}\` | ${issue.message} |\n`;
      });
      report += '\n';
    }
  } else {
    report += `## ✅ No Issues Found

All pages have proper canonical tags configured.

`;
  }

  report += `## Recommendations

### For Pages Without Canonical Tags

Add the \`alternates\` property to your page metadata:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
  alternates: {
    canonical: "https://pmspace.ai/your-page-path",
  },
};
\`\`\`

### For Dynamic Routes

Use \`generateMetadata\` function:

\`\`\`typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: \`Dynamic Title - \${params.slug}\`,
    alternates: {
      canonical: \`https://pmspace.ai/your-route/\${params.slug}\`,
    },
  };
}
\`\`\`

### Best Practices

1. **Self-referencing**: Each page's canonical should point to itself
2. **Consistent format**: Use full URLs with https://
3. **No trailing slashes**: Maintain consistent URL format
4. **Dynamic routes**: Generate canonical URLs dynamically
5. **Paginated content**: Use \`rel="prev"\` and \`rel="next"\` for pagination

---
*Report generated by canonical-audit.js*
`;

  return report;
}

/**
 * Main execution
 */
function main() {
  console.log(`${colors.cyan}╔═══════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.cyan}║   Canonical Tags Audit - Space AI SEO      ║${colors.reset}`);
  console.log(`${colors.cyan}╚═══════════════════════════════════════════╝${colors.reset}\n`);

  console.log(`${colors.blue}Scanning pages in: ${APP_DIR}${colors.reset}\n`);

  // Scan all pages
  scanDirectory(APP_DIR);

  // Print summary
  console.log(`\n${colors.cyan}═══════════════════════════════════════════${colors.reset}`);
  console.log(`${colors.cyan}                   SUMMARY                  ${colors.reset}`);
  console.log(`${colors.cyan}═══════════════════════════════════════════${colors.reset}\n`);

  console.log(`Total pages scanned:    ${colors.blue}${results.total}${colors.reset}`);
  console.log(`With canonical tag:     ${colors.green}${results.withCanonical}${colors.reset}`);
  console.log(`Without canonical tag:  ${colors.yellow}${results.withoutCanonical}${colors.reset}`);

  const coverage = ((results.withCanonical / results.total) * 100).toFixed(1);
  const coverageColor = coverage >= 80 ? colors.green : coverage >= 50 ? colors.yellow : colors.red;
  console.log(`\nCoverage: ${coverageColor}${coverage}%${colors.reset}`);

  // Print issues
  if (results.issues.length > 0) {
    console.log(`\n${colors.yellow}Issues found: ${results.issues.length}${colors.reset}\n`);

    const errors = results.issues.filter(i => i.type === 'error');
    const warnings = results.issues.filter(i => i.type === 'warning');

    if (errors.length > 0) {
      console.log(`${colors.red}ERRORS (${errors.length}):${colors.reset}`);
      errors.slice(0, 10).forEach(issue => {
        console.log(`  ${colors.red}✗${colors.reset} ${issue.route} - ${issue.message}`);
      });
      if (errors.length > 10) {
        console.log(`  ... and ${errors.length - 10} more errors`);
      }
    }

    if (warnings.length > 0) {
      console.log(`\n${colors.yellow}WARNINGS (${warnings.length}):${colors.reset}`);
      warnings.slice(0, 5).forEach(issue => {
        console.log(`  ${colors.yellow}⚠${colors.reset} ${issue.route} - ${issue.message}`);
      });
      if (warnings.length > 5) {
        console.log(`  ... and ${warnings.length - 5} more warnings`);
      }
    }
  } else {
    console.log(`\n${colors.green}✓ All pages have canonical tags configured!${colors.reset}`);
  }

  // Generate and save report
  const report = generateReport();
  const reportPath = path.join(__dirname, '..', 'CANONICAL-AUDIT-REPORT.md');
  fs.writeFileSync(reportPath, report);
  console.log(`\n${colors.green}✓ Full report saved to: ${reportPath}${colors.reset}`);
}

main();
