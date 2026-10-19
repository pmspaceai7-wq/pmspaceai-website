/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce trailing slash for consistent URL structure (Task 12)
  trailingSlash: true,
  transpilePackages: ['shiki', 'streamdown'],

  // Performance & SEO optimizations (Task 11: Core Web Vitals)
  poweredByHeader: false, // Remove X-Powered-By header for security
  compress: true, // Enable gzip compression
  // Allow builds to proceed even if ESLint reports issues (useful for CI/regeneration tasks)
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  images: {
    formats: ['image/avif', 'image/webp'], // Task 13: WebP + AVIF support
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pmspace.ai',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Task 12: Enable lazy loading by default
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Security headers for better SEO signals + Task 11: Performance headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), autoplay=(self)' },
          // Task 11: Core Web Vitals - Preconnect hints
          { key: 'Link', value: '<https://fonts.googleapis.com>; rel=preconnect' },
          { key: 'Link', value: '<https://fonts.gstatic.com>; rel=preconnect; crossorigin' },
          // Preconnect for GTM and Google Ads
          { key: 'Link', value: '<https://www.googletagmanager.com>; rel=preconnect' },
          { key: 'Link', value: '<https://www.google-analytics.com>; rel=preconnect' },
          // CSP (report-only mode — logs violations, doesn't block)
          { key: 'Content-Security-Policy-Report-Only', value: [
            "default-src 'self'",
            "script-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google.co.in https://pagead2.googlesyndication.com https://stats.g.doubleclick.net 'unsafe-inline' 'unsafe-eval'",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' https://pmspace.ai https://images.unsplash.com https://www.google.com https://www.google.co.in https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com data: blob:",
            "font-src 'self' https://fonts.gstatic.com",
            "connect-src 'self' https://pmspace.ai https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google.co.in https://pagead2.googlesyndication.com https://stats.g.doubleclick.net",
            "frame-src 'self' https://www.youtube.com https://www.googletagmanager.com https://www.google.com",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'"
          ].join('; ') },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Task 11: Cache video and static files aggressively
      {
        source: '/videos/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Task 11: Cache sitemap with shorter TTL for freshness
      {
        source: '/:path*.xml',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=43200' },
        ],
      },
    ];
  },
  
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  async redirects() {
    return [
      // ── Legacy /alternative → /alternatives ──────────────────────────────
      { source: "/alternative", destination: "/alternatives", permanent: true },
      { source: "/alternative/asite", destination: "/alternatives/asite-alternative", permanent: true },
      { source: "/alternative/procore", destination: "/alternatives/procore-alternative", permanent: true },

      // ── Legacy short URLs ─────────────────────────────────────────────────
      { source: "/cookies", destination: "/cookie-policy", permanent: true },
      { source: "/terms", destination: "/terms-of-service", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/sitemap-0.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/trust", destination: "/trust/ai-claims", permanent: true },
      { source: "/trust/", destination: "/trust/ai-claims/", permanent: true },

      // ── Main navigation canonical redirects ───────────────────────────────
      { source: "/ai-construction-management-software-features", destination: "/features", permanent: true },
      { source: "/features/scheduling", destination: "/features", permanent: true },
      { source: "/features/cost-management", destination: "/features", permanent: true },
      { source: "/features/rfi-management", destination: "/features", permanent: true },
      { source: "/construction-software-pricing", destination: "/pricing", permanent: true },
      { source: "/enterprise-construction-software", destination: "/enterprise", permanent: true },
      { source: "/career/:slug*", destination: "/careers/:slug*", permanent: true },
      { source: "/space-ai-jobs", destination: "/careers", permanent: true },
      { source: "/esign-book-a-demo", destination: "/e-signature-demo", permanent: true },
      { source: "/newsletter", destination: "/construction-newsletter", permanent: true },
      { source: "/construction-templates", destination: "/templates", permanent: true },
      { source: "/book-a-demo", destination: "/construction-software-demo", permanent: true },
      { source: "/construction-software-trial", destination: "/try-it-now", permanent: true },

      // ── Alternatives canonical redirects ──────────────────────────────────
      { source: "/alternatives/procore", destination: "/alternatives/procore-alternative", permanent: true },
      { source: "/alternatives/asite", destination: "/alternatives/asite-alternative", permanent: true },
      { source: "/alternatives/plangrid", destination: "/alternatives/plangrid-alternative", permanent: true },
      { source: "/alternatives/buildertrend", destination: "/alternatives/buildertrend-alternative", permanent: true },
      { source: "/alternatives/monday", destination: "/alternatives/monday-alternative", permanent: true },
      { source: "/alternatives/smartsheet", destination: "/alternatives/smartsheet-alternative", permanent: true },
      { source: "/alternatives/primavera", destination: "/primavera-alternatives", permanent: true },
      { source: "/alternatives/primavera-alternative", destination: "/primavera-alternatives", permanent: true },
      { source: "/alternatives/oracle-primavera", destination: "/primavera-alternatives", permanent: true },
      { source: "/alternatives/autodesk-construction-cloud", destination: "/alternatives/autodesk-construction-cloud-alternative", permanent: true },
      { source: "/alternatives/clickup-alternative", destination: "/alternatives/clickup", permanent: true },
      { source: "/alternatives/wrike", destination: "/alternatives/wrike-alternative", permanent: true },
      { source: "/alternatives/coconstruct", destination: "/alternatives/coconstruct-alternative", permanent: true },
      { source: "/alternatives/fieldwire", destination: "/alternatives", permanent: true },

      // ── Compare canonical redirects ───────────────────────────────────────
      { source: "/compare/vs", destination: "/compare", permanent: true },
      { source: "/compare/vs/:path*", destination: "/compare", permanent: true },
      { source: "/compare/procore-vs-pmspace", destination: "/alternatives/procore-alternative", permanent: true },
      { source: "/compare/asite-vs-pmspace", destination: "/alternatives/asite-alternative", permanent: true },
      { source: "/compare/buildertrend-vs-pmspace", destination: "/alternatives/buildertrend-alternative", permanent: true },
      { source: "/compare/plangrid-vs-pmspace", destination: "/alternatives/plangrid-alternative", permanent: true },
      { source: "/compare/primavera-vs-pmspace", destination: "/primavera-alternatives", permanent: true },
      { source: "/compare/procore-alternatives", destination: "/alternatives/procore-alternative", permanent: true },

      // ── Legacy comparison slugs route directly to canonical alternatives ──
      { source: "/compare/pmspace-vs-procore", destination: "/alternatives/procore-alternative", permanent: true },
      { source: "/compare/pmspace-vs-asite", destination: "/alternatives/asite-alternative", permanent: true },
      { source: "/compare/pmspace-vs-buildertrend", destination: "/alternatives/buildertrend-alternative", permanent: true },
      { source: "/compare/pmspace-vs-plangrid", destination: "/alternatives/plangrid-alternative", permanent: true },
      { source: "/compare/pmspace-vs-oracle-primavera", destination: "/primavera-alternatives", permanent: true },

      // ── Case studies canonical redirects ──────────────────────────────────
      { source: "/construction-case-studies", destination: "/case-studies", permanent: true },
      { source: "/case-studies/mep-clash-detection", destination: "/case-studies/mep-clash-avoidance", permanent: true },
      { source: "/case-studies/construction-delay-prediction", destination: "/case-studies/concrete-delay-prediction", permanent: true },

      // ── Resources canonical redirects ─────────────────────────────────────
      { source: "/construction-resources", destination: "/resources", permanent: true },
      { source: "/resources/construction-software-checklist", destination: "/resources/construction-software-buying-checklist", permanent: true },
      { source: "/resources/downloads", destination: "/resources/construction-software-downloads", permanent: true },
      { source: "/resources/construction-management-glossary", destination: "/resources/glossary", permanent: true },
      { source: "/resources/infographics", destination: "/resources/construction-infographics", permanent: true },
      { source: "/resources/construction-ai-trends-2026", destination: "/resources/2026-construction-ai-trends", permanent: true },
      { source: "/resources/ai-construction/ai-construction-scheduling", destination: "/resources/ai-construction/ai-driven-construction-scheduling", permanent: true },
      { source: "/resources/ai-construction/ai-resource-optimization", destination: "/resources/ai-construction/ai-resource-optimization-construction", permanent: true },
      { source: "/resources/ai-construction/computer-vision-in-construction", destination: "/resources/ai-construction/computer-vision-construction", permanent: true },
      { source: "/resources/ai-construction/digital-twin-ai-integration", destination: "/resources/ai-construction/digital-twin-construction", permanent: true },
      { source: "/resources/ai-construction/machine-learning-construction-risk-management", destination: "/resources/ai-construction/machine-learning-risk-management", permanent: true },
      { source: "/resources/ai-construction/predictive-analytics-construction", destination: "/resources/ai-construction/predictive-project-analytics", permanent: true },
      { source: "/resources/ai-construction/ai-roi-construction", destination: "/resources/ai-construction/roi-ai-construction", permanent: true },
      { source: "/resources/ai-construction/ai-safety-monitoring-construction", destination: "/resources/ai-construction/ai-construction-safety", permanent: true },
      { source: "/resources/ai-construction/ai-predictive-maintenance-construction", destination: "/resources/ai-construction/predictive-project-analytics", permanent: true },
      { source: "/resources/ai-construction/ai-quality-control-construction", destination: "/resources/ai-construction/computer-vision-construction", permanent: true },
      { source: "/resources/ai-construction/ai-sustainability-construction", destination: "/resources/ai-construction/ai-resource-optimization-construction", permanent: true },
      { source: "/resources/ai-construction/ai-site-monitoring-construction", destination: "/resources/ai-construction/computer-vision-construction", permanent: true },
      { source: "/resources/ai-construction/ai-waste-reduction-construction", destination: "/resources/ai-construction/ai-resource-optimization-construction", permanent: true },
      { source: "/resources/ai-construction/ai-energy-efficiency-construction", destination: "/resources/ai-construction/ai-resource-optimization-construction", permanent: true },
      { source: "/resources/ai-construction/ai-smart-contracts-construction", destination: "/resources/ai-construction/agentic-ai-construction", permanent: true },
      { source: "/resources/ai-construction/ai-logistics-optimization-construction", destination: "/resources/ai-construction/ai-resource-optimization-construction", permanent: true },
      { source: "/resources/ai-construction/ai-autonomous-machinery-construction", destination: "/resources/ai-construction/agentic-ai-construction", permanent: true },

      // ── Guides canonical redirects ────────────────────────────────────────
      { source: "/guides/ai-bim-workflow", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-form-automation", destination: "/guides/ai-powered-form-automation", permanent: true },
      { source: "/guides/commercial-construction-management", destination: "/guides/commercial-real-estate-construction", permanent: true },
      { source: "/guides/common-data-environment-construction", destination: "/guides/common-data-platform", permanent: true },
      { source: "/guides/common-data-platform-construction", destination: "/guides/common-data-platform", permanent: true },
      { source: "/guides/construction-design-software", destination: "/guides/designer", permanent: true },
      { source: "/guides/e-signature-software", destination: "/core/e-sign", permanent: true }, // was 3-hop chain: /guides/e-sign → /core/e-sign; collapsed to 1-hop
      { source: "/guides/construction-email-integration", destination: "/guides/email-integration", permanent: true },
      { source: "/guides/hntelligent-document-processing", destination: "/guides/idp", permanent: true },
      { source: "/guides/intelligent-document-processing-construction", destination: "/guides/idp", permanent: true },
      { source: "/guides/reduce-rfi-delays-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/bim-construction-software", destination: "/core/space-bim", permanent: true }, // was 3-hop chain: /guides/space-bim → /core/space-bim; collapsed to 1-hop
      { source: "/guides/space-bim-integration", destination: "/core/space-bim", permanent: true }, // was 3-hop chain: /guides/space-bim → /core/space-bim; collapsed to 1-hop
      { source: "/guides/construction-management-guide", destination: "/guides/ultimate-construction-management-guide", permanent: true },
      { source: "/guides/ai-workflow-automation-construction", destination: "/guides/ai-workflow-orchestration", permanent: true },
      { source: "/guides/ai-risk-management-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-cost-estimation-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-project-management-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-supply-chain-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-design-optimization-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-labor-management-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-compliance-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-facility-management-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-material-management-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/ai-equipment-maintenance-construction", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
      { source: "/guides/environmental-impact-analysis-ai", destination: "/guides/ai-construction-management-complete-guide", permanent: true },

      { source: "/construction-management-guides", destination: "/guides", permanent: true },
      { source: "/core/construction-email-integration", destination: "/guides/email-integration", permanent: true },
      { source: "/core/intelligent-document-processing", destination: "/core/idp", permanent: true },
        { source: "/guides/construction-tender-management-software", destination: "/core/construction-tender-management-software", permanent: true },

      // ── Core platform slug renames ────────────────────────────────────────
      { source: "/core/tender-management", destination: "/core/construction-tender-management-software", permanent: true },
      { source: "/core/lean-construction-os", destination: "/core/ai-lean-construction-platform", permanent: true },
      { source: "/core/admin-module", destination: "/core/admin", permanent: true },
      { source: "/core/bim-construction-software",         destination: "/core/space-bim",                  permanent: true },
      { source: "/core/e-signature-software",             destination: "/core/e-sign",                     permanent: true },
      { source: "/core/common-data-environment-platform", destination: "/guides/common-data-platform",     permanent: true },
      { source: "/guides/common-data-environment-platform", destination: "/guides/common-data-platform", permanent: true },

      // ── Guide/Core canonical consolidation (guide is canonical for these tools) ──
      // { source: "/core/ai-workflow-orchestration",        destination: "/guides/ai-workflow-orchestration", permanent: true },
      // { source: "/core/common-data-platform",             destination: "/guides/common-data-platform",      permanent: true },

      // ── Platform canonical redirects ──────────────────────────────────────
      { source: "/platform/construction-digital-blueprint", destination: "/platform/blueprint", permanent: true },
      { source: "/platform/construction-industry-challenges", destination: "/platform/cracks-in-foundation", permanent: true },
      { source: "/platform/construction-inefficiency", destination: "/platform/inefficiency", permanent: true },
      { source: "/platform/construction-intelligence-platform", destination: "/platform/system-of-intelligence", permanent: true },

      // ── Solutions canonical redirects ─────────────────────────────────────
      { source: "/solutions/ai-construction-solutions", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-data-management", destination: "/solutions/data-management", permanent: true },
      { source: "/solutions/construction-project-management", destination: "/solutions/project-management", permanent: true },
      { source: "/solutions/construction-software-for-general-contractors", destination: "/solutions/best-construction-software-for-general-contractors", permanent: true },
      { source: "/solutions/enterprise-construction-software", destination: "/solutions/construction-software-for-enterprises", permanent: true },
      { source: "/solutions/enterprise-project-management-software", destination: "/solutions/project-management-software-for-enterprises", permanent: true },
      { source: "/solutions/ai-project-management", destination: "/solutions/smart-project-management", permanent: true },
      { source: "/solutions/ai-construction-innovation", destination: "/solutions/innovative-solutions", permanent: true },
      { source: "/solutions/cloud-construction-management-software", destination: "/solutions/construction-management-online", permanent: true },
      { source: "/solutions/construction-delay-prediction", destination: "/solutions/predictive-delays", permanent: true },
      { source: "/solutions/construction-management-software", destination: "/solutions/construction-management", permanent: true },
      { source: "/solutions/construction-management-platform", destination: "/solutions/construction-management-online", permanent: true },

      // ── Conservative catch-all redirects for missing detailed solution slugs
      { source: "/solutions/construction-project-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-safety-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-site-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-quality-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-asset-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-document-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-cost-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-field-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-risk-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-scheduling-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-resource-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-supply-chain-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-stakeholder-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-bid-management-software", destination: "/solutions/construction-solutions", permanent: true },
      { source: "/solutions/construction-procurement-software", destination: "/solutions/construction-solutions", permanent: true },

      // ── Blog slug renames ─────────────────────────────────────────────────
      { source: "/blogs/construction-management-online", destination: "/blogs/construction-management-software-online", permanent: true },
      { source: "/blogs/construction-software-for-small-business", destination: "/blogs/construction-management-software-for-small-business", permanent: true },
      { source: "/blogs/project-management-software-for-enterprises", destination: "/solutions/project-management-software-for-enterprises", permanent: true },
      { source: "/blogs/project-management-for-building-construction", destination: "/solutions/project-management-for-building-construction", permanent: true },
      { source: "/blogs/construction-software-for-enterprises", destination: "/solutions/construction-software-for-enterprises", permanent: true },
      { source: "/blogs/clinic-management-with-space-ai", destination: "/blogs", permanent: true },

      // ── Root page canonical redirects ─────────────────────────────────────
      { source: "/construction-project-management-software", destination: "/construction-project-management-system", permanent: true },
      { source: "/construction-management-software-for-small-business", destination: "/construction-management-software-small-business", permanent: true },
      { source: "/mobile-construction-management-software", destination: "/mobile-construction-management-app", permanent: true },
      { source: "/construction-estimating-software", destination: "/construction-estimation-software", permanent: true },
      { source: "/preconstruction-software", destination: "/construction-estimation-software", permanent: true },
      { source: "/construction-punch-list-software", destination: "/construction-punch-list-management-software", permanent: true },
      { source: "/construction-rfi-management", destination: "/construction-rfi-management-software", permanent: true },
      { source: "/general-contractor-software", destination: "/construction-software-for-general-contractors", permanent: true },
      { source: "/subcontractor-management-software", destination: "/subcontractor-management-software-construction", permanent: true },
      { source: "/enterprise-construction-management-software", destination: "/enterprise", permanent: true },
      { source: "/building-project-management-software", destination: "/construction-project-management-system", permanent: true },

      // ── Services slug renames ─────────────────────────────────────────────
      { source: "/services/data-management-service", destination: "/services/data-management-services", permanent: true },
      { source: "/services/digital-transformation", destination: "/services/digital-transformation-services", permanent: true },
      { source: "/services/software-injection", destination: "/services/software-integration-services", permanent: true },

      // ── Industries canonical redirects ────────────────────────────────────
      { source: "/industries/commercial-construction", destination: "/industries/commercial-high-rise", permanent: true },

      // ── Locations canonical redirects ─────────────────────────────────────
      { source: "/locations/dubai-construction-projects", destination: "/locations/dubai-mega-projects", permanent: true },

      // ── Other slug renames ────────────────────────────────────────────────
      { source: "/usecases/ai-schedule-optimization", destination: "/usecases/ai-construction-scheduling", permanent: true },
      { source: "/usecases/predictive-cost-management", destination: "/usecases/construction-cost-prediction", permanent: true },
      { source: "/usecases/reduce-rfi-delays-ai", destination: "/usecases/reduce-construction-rfi-delays", permanent: true },
      { source: "/guides/reduce-rfi-cycles-ai", destination: "/usecases/reduce-construction-rfi-delays", permanent: true },
      { source: "/usecases/safety-incident-prevention", destination: "/usecases", permanent: true },
      { source: "/usecases/change-order-management", destination: "/usecases", permanent: true },
      { source: "/usecases/reduce-change-order-disputes", destination: "/usecases", permanent: true },
      { source: "/usecases/field-office-collaboration", destination: "/usecases", permanent: true },

      // ── Blog → Blogs (redirect to index; individual slugs may not exist) ──
      // Specific legacy slug: ai-for-schedule-slippage → closest existing post
      { source: "/blog/ai-for-schedule-slippage", destination: "/blogs/how-ai-predicts-construction-delays", permanent: true },
      { source: "/blogs/ai-for-schedule-slippage", destination: "/blogs/how-ai-predicts-construction-delays", permanent: true },
      { source: "/blog/:path*", destination: "/blogs", permanent: true },

      // ── Customers ─────────────────────────────────────────────────────────
      { source: "/customers", destination: "/customers/success-stories", permanent: true },

      // ── Core → Tools ──────────────────────────────────────────────────────
      { source: "/core/crm", destination: "/tools/construction-crm-software", permanent: true },

      // ── Services canonical redirects ──────────────────────────────────────
      { source: "/services/software-integration", destination: "/services/software-integration-services", permanent: true },
      { source: "/services/application-maintainence", destination: "/services/application-maintenance", permanent: true },

      // ── Resources missing pages ───────────────────────────────────────────
      { source: "/resources/help", destination: "/resources", permanent: true },

      // ── Features missing pages ────────────────────────────────────────────

      // ── Missing tool pages ────────────────────────────────────────────────
      { source: "/tools/email-marketing", destination: "/tools", permanent: true },

      // ── Tools slug renames ────────────────────────────────────────────────
      { source: "/tools/analytics-reporting-software", destination: "/tools/construction-analytics-software", permanent: true },
      { source: "/tools/custom-crm", destination: "/tools/construction-crm-software", permanent: true },
      { source: "/tools/digital-asset-tracking-system", destination: "/tools/construction-asset-tracking-software", permanent: true },
      { source: "/tools/e-signature-software", destination: "/core/e-sign", permanent: true },
      { source: "/tools/construction-punch-list-software", destination: "/construction-punch-list-management-software", permanent: true },
      { source: "/tools/construction-rfis-software", destination: "/construction-rfi-management-software", permanent: true },
      { source: "/tools/document-management-and-collaboration-software", destination: "/tools/construction-document-management-software", permanent: true },
      { source: "/tools/employee-scheduling-software", destination: "/project-scheduling-software", permanent: true },
      { source: "/tools/employee-scheduling", destination: "/project-scheduling-software", permanent: true },
      { source: "/tools/scheduling", destination: "/project-scheduling-software", permanent: true },
      { source: "/tools/scheduling-software", destination: "/project-scheduling-software", permanent: true },
      { source: "/tools/shift-scheduling", destination: "/project-scheduling-software", permanent: true },
      { source: "/tools/equipment-management-software", destination: "/tools/equipment-checkout-app", permanent: true },
      { source: "/tools/expense-tracking-application", destination: "/tools/construction-expense-management-software", permanent: true },
      { source: "/tools/construction-inventory-management-software", destination: "/tools/inventory-management", permanent: true },
      { source: "/tools/safety-management-software", destination: "/construction-safety-management-software", permanent: true },
      { source: "/tools/procurement-software", destination: "/tools/construction-supply-chain-management-software", permanent: true },
      { source: "/tools/document-management-software", destination: "/tools/construction-document-management-software", permanent: true },
      { source: "/tools/bidding-software", destination: "/construction-bidding-software", permanent: true },
      { source: "/tools/reporting-software", destination: "/tools/construction-analytics-software", permanent: true },
      { source: "/tools/field-service-management-software", destination: "/tools/backoffice-apps", permanent: true },
      { source: "/tools/asset-tracking-software", destination: "/tools/construction-asset-tracking-software", permanent: true },
      { source: "/tools/work-order-software", destination: "/tools/backoffice-apps", permanent: true },
      { source: "/tools/inventory-tracking-software", destination: "/tools/inventory-management", permanent: true },
      { source: "/tools/fleet-management-software", destination: "/tools/equipment-checkout-app", permanent: true },
      { source: "/tools/project-management-tool", destination: "/tools/construction-project-management-software", permanent: true },
      { source: "/tools/crm", destination: "/tools/construction-crm-software", permanent: true },
      { source: "/tools/crm-system", destination: "/tools/construction-crm-software", permanent: true },
      { source: "/tools/crm-software", destination: "/tools/construction-crm-software", permanent: true },
      { source: "/tools/client-relationship-management", destination: "/tools/construction-crm-software", permanent: true },
      { source: "/tools/customer-relationship-management", destination: "/tools/construction-crm-software", permanent: true },

      // ── Transform → Platform (wildcard: removes duplicate content, signals move to Google) ─
      // Specific exceptions MUST come before the wildcard, otherwise the wildcard captures them
      { source: "/transform/usecases", destination: "/usecases", permanent: true },
      { source: "/Transform/usecases", destination: "/usecases", permanent: true },
      { source: "/Transform/:path*", destination: "/platform/:path*", permanent: true },
      { source: "/transform/:path*", destination: "/platform/:path*", permanent: true },

      // ── Missing redirects for crawled-but-gone URLs ────────────────────────
      { source: "/core/ai-powered-form-automation", destination: "/guides/ai-powered-form-automation", permanent: true },
      { source: "/core/designer-workspace", destination: "/guides/designer", permanent: true },
      { source: "/core/email-integration", destination: "/guides/email-integration", permanent: true },
      { source: "/core/space-mcp", destination: "/core/space-connectors", permanent: true },
      { source: "/guides/choose-construction-management-software", destination: "/guides/how-to-choose-construction-software", permanent: true },
      { source: "/guides/how-to-choose-construction-management-software", destination: "/guides/how-to-choose-construction-software", permanent: true },
      { source: "/guides/ultimate-construction-project-management-guide", destination: "/guides/ultimate-construction-management-guide", permanent: true },
      { source: "/best-project-management-software", destination: "/project-management-software", permanent: true },

      // ── Guide duplicate canonical redirects (GSC "Duplicate without canonical") ──
      { source: "/guides/designer-workspace",            destination: "/guides/designer",                    permanent: true },
      { source: "/guides/space-connectors",              destination: "/core/space-connectors",              permanent: true },
      { source: "/guides/custom-workstreams",            destination: "/core/custom-workstreams",            permanent: true },
      { source: "/guides/e-sign",                        destination: "/core/e-sign",                        permanent: true },
      { source: "/guides/space-bim",                     destination: "/core/space-bim",                     permanent: true },
      { source: "/guides/ai-lean-construction-platform", destination: "/core/ai-lean-construction-platform", permanent: true },

      // ── Missing core page redirects (GSC 404s — slugs crawled but never built) ──
      // { source: "/core/automated-progress-tracking",         destination: "/guides/ai-workflow-orchestration",                       permanent: true },
      // { source: "/core/ai-site-inspection-tools",            destination: "/core/space-capture",                                     permanent: true },
      // { source: "/core/automated-submittal-review",          destination: "/core/idp",                                               permanent: true },
      // { source: "/core/intelligent-scheduling",              destination: "/guides/ai-workflow-orchestration",                       permanent: true },
      // { source: "/core/smart-resource-allocation",           destination: "/core/ai-lean-construction-platform",                     permanent: true },
      // { source: "/core/predictive-maintenance-construction", destination: "/resources/ai-construction/predictive-project-analytics", permanent: true },

      // ── Solutions missing static pages (GSC 404s) ──────────────────────────
      { source: "/solutions/general-contractors",                             destination: "/solutions/best-construction-software-for-general-contractors", permanent: true },
      { source: "/solutions/subcontractors",                                  destination: "/subcontractor-management-software-construction",               permanent: true },
      { source: "/solutions/construction-management-software-small-business", destination: "/construction-management-software-small-business",              permanent: true },

      // ── Orphaned page redirects ───────────────────────────────────────────
      { source: "/visa-immigration-services",   destination: "/",     permanent: true },
      { source: "/resources/api-documentation", destination: "/docs", permanent: true },

      // ── Case study slugs that no longer exist ─────────────────────────────
      { source: "/case-studies/heritage-healthcare-construction", destination: "/case-studies", permanent: true },
      { source: "/case-studies/summit-commercial-group", destination: "/case-studies", permanent: true },
      { source: "/case-studies/turner-associates", destination: "/case-studies", permanent: true },
      { source: "/case-studies/urban-education-builders", destination: "/case-studies", permanent: true },
      { source: "/case-studies/meridian-infrastructure", destination: "/case-studies", permanent: true },
      { source: "/case-studies/coastal-industrial-partners", destination: "/case-studies", permanent: true },
      { source: "/case-studies/pacific-northwest-builders", destination: "/case-studies", permanent: true },

      // ── Guide slug variant missing from redirect list ──────────────────────
      { source: "/guides/intelligent-document-processing", destination: "/guides/idp", permanent: true },

      // ── Strip tracking/referral query parameters ──────────────────────────
      { source: "/:path*", has: [{ type: "query", key: "ref" }], destination: "/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "query", key: "utm_source" }], destination: "/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "query", key: "utm_medium" }], destination: "/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "query", key: "utm_campaign" }], destination: "/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "query", key: "utm_content" }], destination: "/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "query", key: "utm_term" }], destination: "/:path*", permanent: true },

      // ── 410 Gone: Permanently Deleted Pages (No Longer Available) ─
      // IMPORTANT: These are pages that were deleted and are NOT dynamically generated.
      // Pages like guides are dynamically generated from toolsData, so those are NOT 410.
      // Only truly deleted, non-regenerated pages get 410 status.

      // ── Missing tool/core redirects for GSC 404s ──────────────────────────
      { source: "/tools/project-scheduling-software", destination: "/project-scheduling-software", permanent: true },
      { source: "/core/space-vision", destination: "/guides/space-vision", permanent: true },
      { source: "/designer", destination: "/guides/designer", permanent: true },
      { source: "/core/bim-data-extraction", destination: "/guides/bim-data-extraction", permanent: true },
      { source: "/core/environmental-impact-analysis-ai", destination: "/guides/ai-construction-management-complete-guide", permanent: true },
    ];
  },
};

export default nextConfig;
