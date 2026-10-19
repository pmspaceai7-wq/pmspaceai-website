// src/lib/seo-advanced.ts
// Advanced SEO utilities for #1 ranking optimization

import { Metadata } from "next";

const SITE_URL = "https://pmspace.ai";
const SITE_NAME = "Space AI";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpeg`;

// ============================================================================
// ENTITY-BASED SEO SCHEMAS (Google E-E-A-T Signals)
// ============================================================================

/**
 * Organization Schema with enhanced E-E-A-T signals
 * Include on every page via layout.tsx
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Space AI Technologies",
    alternateName: ["Space AI", "SpaceAI", "PM Space"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/assets/images/icononly_transparent_nobuffer.png`,
      contentUrl: `${SITE_URL}/assets/images/icononly_transparent_nobuffer.png`,
      width: 512,
      height: 512,
      caption: "Space AI Logo",
    },
    image: {
      "@id": `${SITE_URL}/#logo`,
    },
    description: "Space AI is an AI-powered construction management software that uses predictive analytics and machine learning to reduce project delays, optimize schedules, and improve project outcomes.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Bibin Prathap",
      jobTitle: "CEO & Founder",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "India" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/spaceaiapm",
      "https://x.com/pmspace0707",
      "https://www.instagram.com/spaceaiapm/",
      "https://www.youtube.com/@SpaceaiApm",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-800-PMSPACE",
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: ["US", "CA"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-800-PMSPACE",
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
    knowsAbout: [
      "Construction Management",
      "Project Management Software",
      "AI in Construction",
      "Predictive Analytics",
      "Building Information Modeling",
      "Construction Scheduling",
      "Construction Document Management",
    ],
    award: [
      "Best Construction Tech Startup 2025",
      "AI Innovation Award 2025",
    ],
  };
}

/**
 * Enhanced SoftwareApplication schema with more signals
 */
export function generateSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Space AI",
    alternateName: "Space AI Construction Management Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Project Management Software",
    operatingSystem: "Web Browser, iOS, Android",
    url: SITE_URL,
    downloadUrl: `${SITE_URL}/try-it-now`,
    screenshot: [
      `${SITE_URL}/assets/images/screenshot-dashboard.png`,
      `${SITE_URL}/assets/images/screenshot-schedule.png`,
      `${SITE_URL}/assets/images/screenshot-analytics.png`,
    ],
    featureList: [
      "AI-Powered Predictive Analytics",
      "Intelligent Schedule Optimization",
      "Automated Document Processing",
      "Real-Time Risk Assessment",
      "Multi-Project Portfolio Management",
      "Mobile App for Field Teams",
      "BIM Integration",
      "RFI & Submittal Management",
      "Budget & Cost Tracking",
      "Progress Photo Documentation",
      "Daily Logs & Reports",
      "Subcontractor Management",
    ],
    softwareRequirements: "Modern web browser (Chrome, Safari, Firefox, Edge)",
    memoryRequirements: "4GB RAM minimum",
    offers: [
      {
        "@type": "Offer",
        name: "Free Plan",
        price: "0",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
        description: "Free forever for small teams. Includes core features.",
      },
      {
        "@type": "Offer",
        name: "Professional Plan",
        price: "99",
        priceCurrency: "USD",
        priceValidUntil: "2027-12-31",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing`,
        description: "Full AI features for growing teams. Per user/month.",
      },
      {
        "@type": "Offer",
        name: "Enterprise Plan",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "Custom",
          priceCurrency: "USD",
        },
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/enterprise`,
        description: "Custom pricing for large organizations with dedicated support.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "312",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "287",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "James Wilson",
        },
        reviewBody: "Space AI reduced our project delays by 40%. The AI predictions are remarkably accurate.",
        datePublished: "2025-11-15",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sarah Chen",
        },
        reviewBody: "The time we save on manual data entry alone pays for Space AI. The AI automation is a game-changer.",
        datePublished: "2025-10-22",
      },
    ],
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * WebSite schema with enhanced SearchAction
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "AI-Powered Construction Management Software",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
    inLanguage: "en-US",
  };
}

// ============================================================================
// COMPARISON & ALTERNATIVE PAGE SCHEMAS
// ============================================================================

interface CompetitorComparisonConfig {
  competitorName: string;
  competitorUrl: string;
  competitorLogo?: string;
  comparisonPageUrl: string;
  advantages: string[];
  disadvantages: string[];
}

/**
 * Generate ProductComparison schema for alternative pages
 * Critical for ranking on "[competitor] alternative" keywords
 */
export function generateCompetitorComparisonSchema(config: CompetitorComparisonConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": config.comparisonPageUrl,
    name: `${config.competitorName} vs Space AI Comparison`,
    description: `Detailed comparison between ${config.competitorName} and Space AI. See why construction teams choose Space AI as the best ${config.competitorName} alternative.`,
    mainEntity: {
      "@type": "ItemList",
      name: `${config.competitorName} Alternatives`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            "@id": `${SITE_URL}/#software`,
            name: "Space AI",
            applicationCategory: "BusinessApplication",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "312",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier available",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: config.competitorName,
            url: config.competitorUrl,
            applicationCategory: "BusinessApplication",
          },
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".comparison-summary", ".key-differences"],
    },
  };
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(reviews: Array<{
  author: string;
  role: string;
  company: string;
  rating: number;
  review: string;
  date: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-reviews`,
    name: "Space AI Construction Management Software",
    brand: {
      "@type": "Brand",
      name: "Space AI",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: r.author,
        jobTitle: r.role,
        worksFor: {
          "@type": "Organization",
          name: r.company,
        },
      },
      reviewBody: r.review,
      datePublished: r.date,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// ============================================================================
// CONTENT PAGE SCHEMAS
// ============================================================================

interface GuideSchemaConfig {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: string;
  wordCount: number;
  timeRequired: string; // ISO 8601 duration, e.g., "PT15M"
  keywords: string[];
}

/**
 * Generate comprehensive Article schema for guide pages
 */
export function generateGuideArticleSchema(config: GuideSchemaConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${config.url}#article`,
    headline: config.title,
    description: config.description,
    url: config.url,
    datePublished: config.datePublished,
    dateModified: config.dateModified,
    wordCount: config.wordCount,
    timeRequired: config.timeRequired,
    keywords: config.keywords.join(", "),
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: config.author || "Space AI Team",
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": config.url,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/images/guides/${config.url.split('/').pop()}-og.png`,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-summary", ".key-takeaways"],
    },
  };
}

/**
 * Generate Case Study schema
 */
export function generateCaseStudySchema(config: {
  title: string;
  description: string;
  url: string;
  clientName: string;
  industry: string;
  results: string[];
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${config.url}#case-study`,
    headline: config.title,
    description: config.description,
    url: config.url,
    datePublished: config.datePublished,
    articleSection: "Case Study",
    about: {
      "@type": "Organization",
      name: config.clientName,
      industry: config.industry,
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

// ============================================================================
// GEOGRAPHIC SEO SCHEMAS
// ============================================================================

interface LocationPageConfig {
  country: string;
  countryCode: string;
  cities: string[];
  url: string;
  complianceStandards: string[];
}

/**
 * Generate LocalBusiness schema for geographic pages
 */
export function generateLocalBusinessSchema(config: LocationPageConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${config.url}#local-software`,
    name: `Space AI Construction Management Software - ${config.country}`,
    description: `AI-powered construction management software for ${config.country}. Compliant with ${config.complianceStandards.join(", ")}.`,
    url: config.url,
    areaServed: {
      "@type": "Country",
      name: config.country,
      identifier: config.countryCode,
    },
    availableLanguage: "English",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "Country",
        name: config.country,
      },
      eligibleRegion: {
        "@type": "Country",
        name: config.country,
      },
    },
  };
}

// ============================================================================
// ADVANCED METADATA GENERATION
// ============================================================================

interface AdvancedMetadataConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  locale?: string;
  alternateLocales?: { locale: string; url: string }[];
}

/**
 * Generate advanced metadata with all possible SEO signals
 */
export function generateAdvancedMetadata(config: AdvancedMetadataConfig): Metadata {
  const url = `${SITE_URL}${config.path}`;
  
  // Title optimization: Primary keyword at start, brand at end
  // Optimal length: 50-60 characters
  const optimizedTitle = config.title.length > 60 
    ? `${config.title.substring(0, 57)}...` 
    : config.title;
  
  // Description optimization: Include primary keyword, call-to-action
  // Optimal length: 150-160 characters
  const optimizedDescription = config.description.length > 160
    ? `${config.description.substring(0, 157)}...`
    : config.description;

  // Build comprehensive keyword list
  const defaultKeywords = [
    "construction management software",
    "AI construction",
    "project management",
    "Space AI",
  ];
  
  const allKeywords = Array.from(new Set([...(config.keywords || []), ...defaultKeywords]));

  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: allKeywords,
    authors: [{ name: "Space AI Team", url: SITE_URL }],
    creator: "Space AI Technologies",
    publisher: "Space AI",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        "en": url,
        "x-default": url,
        ...(config.alternateLocales?.reduce((acc, alt) => ({
          ...acc,
          [alt.locale]: alt.url,
        }), {})),
      },
    },
    openGraph: {
      title: optimizedTitle,
      description: optimizedDescription,
      url,
      siteName: SITE_NAME,
      locale: config.locale || "en_US",
      type: config.type === "article" ? "article" : "website",
      images: [
        {
          url: `${SITE_URL}/assets/images/og-image.jpeg`,
          width: 1200,
          height: 630,
          alt: config.title,
          type: "image/png",
        },
      ],
      ...(config.type === "article" && {
        publishedTime: config.publishedTime,
        modifiedTime: config.modifiedTime,
        section: config.section,
        tags: config.tags,
        authors: ["Space AI Team"],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: optimizedTitle,
      description: optimizedDescription,
      site: "@pmspace0707",
      creator: "@pmspace0707",
      images: {
        url: `${SITE_URL}/assets/images/og-image.jpeg`,
        alt: config.title,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "RwZwSyRwzk7fxxZPEX76qxLVVGO5np1LWzjFpBd2tV4",
    },
    category: "Construction Software",
    classification: "Business Software",
  };
}

// ============================================================================
// INTERNAL LINKING HELPERS
// ============================================================================

/**
 * Generate related pages for internal linking
 * Critical for topical authority and crawl efficiency
 */
export const relatedPageMappings: Record<string, string[]> = {
  "/construction-management-software": [
    "/features",
    "/pricing",
    "/construction-management-software-usa",
    "/enterprise",
    "/free-construction-management-software",
  ],
  "/alternatives/procore-alternative": [
    "/compare/construction-software-comparison",
    "/alternatives/buildertrend-alternative",
    "/alternatives/plangrid-alternative",
    "/construction-management-software",
  ],
  "/pricing": [
    "/free-construction-management-software",
    "/enterprise",
    "/construction-software-demo",
    "/features",
  ],
  "/features": [
    "/pricing",
    "/construction-management-software",
    "/platform/ai",
    "/usecases",
  ],
};

/**
 * Get related pages for internal linking
 */
export function getRelatedPages(currentPath: string): string[] {
  return relatedPageMappings[currentPath] || [
    "/construction-management-software",
    "/features",
    "/pricing",
    "/construction-software-demo",
  ];
}

// ============================================================================
// EXPORT ALL SCHEMAS AS COMBINED GRAPH
// ============================================================================

/**
 * Generate complete schema graph for a page
 * Use this in layout.tsx for global schemas
 */
export function generateGlobalSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      generateOrganizationSchema(),
      generateWebSiteSchema(),
      generateSoftwareApplicationSchema(),
    ],
  };
}
