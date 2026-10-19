// src/lib/seo.ts
// Centralized SEO utilities for consistent metadata across the site

import { Metadata } from "next";

const SITE_URL = "https://pmspace.ai";
const SITE_NAME = "Space AI";
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/og-image.jpeg`;

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noindex?: boolean;
}

/**
 * Generate consistent metadata for any page
 */
export function generateMetadata({
  title,
  description,
  path,
  keywords = [],
  image = DEFAULT_OG_IMAGE,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  noindex = false,
}: SEOConfig): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${SITE_NAME}`;
  
  // Ensure description is optimal length (150-160 chars)
  const optimizedDescription = description.length > 160 
    ? description.substring(0, 157) + "..." 
    : description;

  const baseMetadata: Metadata = {
    title: fullTitle,
    description: optimizedDescription,
    keywords: [
      "construction management",
      "AI construction",
      "project management software",
      "predictive analytics construction",
      ...keywords,
    ],
    alternates: {
      canonical: url,
      languages: {
        'en': url,
        'x-default': url,
      },
    },
    openGraph: {
      title: fullTitle,
      description: optimizedDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: optimizedDescription,
      images: [image],
      creator: "@pmspace0707",
      site: "@pmspace0707",
    },
    robots: noindex ? {
      index: false,
      follow: false,
    } : {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return baseMetadata;
}

/**
 * Generate JSON-LD for breadcrumbs (helps with rich snippets)
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD for Product/Service pages
 */
export function generateProductSchema({
  name,
  description,
  features,
  price = "0",
  priceCurrency = "USD",
  ratingValue = "4.8",
  reviewCount = "156",
}: {
  name: string;
  description: string;
  features: string[];
  price?: string;
  priceCurrency?: string;
  ratingValue?: string;
  reviewCount?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Project Management Software",
    operatingSystem: "Web, iOS, Android",
    description,
    featureList: features,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      ratingCount: reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Space AI",
      url: SITE_URL,
    },
  };
}

/**
 * Generate JSON-LD for Alternative/Comparison pages
 */
export function generateComparisonSchema({
  competitorName,
  competitorDescription,
  spaceAIAdvantages,
}: {
  competitorName: string;
  competitorDescription: string;
  spaceAIAdvantages: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Space AI vs ${competitorName} - Best Alternative`,
    description: `Compare Space AI to ${competitorName}. ${spaceAIAdvantages[0]}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Space AI",
          applicationCategory: "BusinessApplication",
          description: "AI-powered construction management platform with predictive analytics",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "156",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: competitorName,
          applicationCategory: "BusinessApplication",
          description: competitorDescription,
        },
      ],
    },
  };
}

/**
 * Generate JSON-LD for Blog/Article pages
 */
export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName = "Space AI Editorial Team",
  url,
}: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: image || DEFAULT_OG_IMAGE,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: authorName,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

/**
 * Industry-specific keywords for targeting
 */
export const industryKeywords: Record<string, string[]> = {
  construction: [
    "construction project management",
    "construction scheduling software",
    "construction document management",
    "building project tracking",
    "contractor management software",
  ],
  realEstate: [
    "real estate development software",
    "property development management",
    "real estate project tracking",
    "development lifecycle management",
  ],
  infrastructure: [
    "infrastructure project management",
    "civil engineering software",
    "infrastructure asset management",
    "public works project tracking",
  ],
  oil_gas: [
    "oil and gas project management",
    "energy sector construction",
    "offshore project management",
    "pipeline construction software",
  ],
};

/**
 * Long-tail keyword suggestions for content strategy
 */
export const longTailKeywords = {
  alternatives: [
    "best procore alternative 2026",
    "procore vs space ai comparison",
    "cheaper alternative to procore",
    "ai construction software like procore",
    "procore competitor with better ai",
  ],
  features: [
    "ai powered construction scheduling",
    "predictive delay analysis construction",
    "construction cost forecasting software",
    "automated construction document processing",
    "machine learning construction management",
  ],
  problems: [
    "how to reduce construction delays",
    "prevent construction budget overruns",
    "construction project risk management",
    "improve construction site safety",
    "construction workforce optimization",
  ],
  solutions: [
    "construction management software for small builders",
    "enterprise construction project management",
    "ai construction project analytics",
    "construction document automation",
    "real-time construction progress tracking",
  ],
};
