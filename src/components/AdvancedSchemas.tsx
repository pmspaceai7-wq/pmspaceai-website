// src/components/AdvancedSchemas.tsx
// Advanced Schema Components for #1 SEO Ranking

"use client";

import React from "react";

const SITE_URL = "https://pmspace.ai";

// ============================================================================
// COMPARISON PAGE SCHEMA
// ============================================================================

interface ComparisonSchemaProps {
  competitor: {
    name: string;
    url: string;
    description: string;
  };
  pageUrl: string;
  spaceAIAdvantages: string[];
}

export function ComparisonSchema({ competitor, pageUrl, spaceAIAdvantages }: ComparisonSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: `${competitor.name} vs Space AI - Best ${competitor.name} Alternative 2026`,
    description: `Compare ${competitor.name} and Space AI. See why construction teams choose Space AI as the #1 ${competitor.name} alternative with AI-powered features.`,
    mainEntity: {
      "@type": "ItemList",
      name: `Best ${competitor.name} Alternatives`,
      numberOfItems: 2,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Space AI",
            url: SITE_URL,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Management Software",
            description: "AI-powered construction management software with predictive analytics, intelligent scheduling, and automated document processing.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              ratingCount: "312",
              bestRating: "5",
              worstRating: "1",
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "499",
              priceCurrency: "USD",
              offerCount: "3",
            },
            featureList: spaceAIAdvantages,
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: competitor.name,
            url: competitor.url,
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Construction Management Software",
            description: competitor.description,
          },
        },
      ],
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".comparison-summary", ".key-differences", ".verdict"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// AGGREGATE REVIEW SCHEMA
// ============================================================================

interface Review {
  author: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  date: string;
}

interface AggregateReviewSchemaProps {
  reviews: Review[];
  overallRating?: number;
  totalReviews?: number;
}

export function AggregateReviewSchema({ 
  reviews, 
  overallRating = 4.9, 
  totalReviews = 312 
}: AggregateReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software-reviews`,
    name: "Space AI Construction Management Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "499",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: overallRating.toString(),
      reviewCount: totalReviews.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.slice(0, 5).map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: review.author,
        jobTitle: review.role,
        worksFor: {
          "@type": "Organization",
          name: review.company,
        },
      },
      reviewBody: review.text,
      datePublished: review.date,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// PRICING PAGE SCHEMA
// ============================================================================

interface PricingTier {
  name: string;
  price: number | "Custom";
  currency: string;
  billingPeriod: "month" | "year";
  features: string[];
  recommended?: boolean;
}

interface PricingSchemaProps {
  tiers: PricingTier[];
}

export function PricingSchema({ tiers }: PricingSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/pricing#pricing`,
    name: "Space AI Construction Management Software",
    description: "AI-powered construction management software with flexible pricing for teams of all sizes.",
    brand: {
      "@type": "Brand",
      name: "Space AI",
    },
    offers: tiers.map((tier, index) => ({
      "@type": "Offer",
      "@id": `${SITE_URL}/pricing#${tier.name.toLowerCase().replace(/\s+/g, '-')}`,
      name: tier.name,
      price: tier.price === "Custom" ? undefined : tier.price.toString(),
      priceCurrency: tier.currency,
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing`,
      description: tier.features.join(". "),
      ...(tier.price !== "Custom" && {
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: tier.price.toString(),
          priceCurrency: tier.currency,
          billingDuration: tier.billingPeriod === "month" ? "P1M" : "P1Y",
          unitText: "per user",
        },
      }),
      itemOffered: {
        "@type": "Service",
        name: `Space AI ${tier.name}`,
        description: tier.features.join(". "),
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// FEATURE PAGE SCHEMA
// ============================================================================

interface Feature {
  name: string;
  description: string;
  url?: string;
}

interface FeatureSchemaProps {
  features: Feature[];
  pageTitle: string;
  pageDescription: string;
  pageUrl: string;
}

export function FeatureSchema({ features, pageTitle, pageDescription, pageUrl }: FeatureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#features`,
    name: "Space AI",
    description: pageDescription,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction Management Software",
    operatingSystem: "Web, iOS, Android",
    featureList: features.map(f => f.name),
    softwareHelp: {
      "@type": "CreativeWork",
      name: "Space AI Help Center",
      url: `${SITE_URL}/resources`,
    },
    mainEntity: {
      "@type": "ItemList",
      name: pageTitle,
      numberOfItems: features.length,
      itemListElement: features.map((feature, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareApplication",
          name: feature.name,
          description: feature.description,
          ...(feature.url && { url: `${SITE_URL}${feature.url}` }),
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// INDUSTRY PAGE SCHEMA (for /industries/*)
// ============================================================================

interface IndustrySchemaProps {
  industryName: string;
  industryDescription: string;
  pageUrl: string;
  useCases: string[];
  benefits: string[];
}

export function IndustrySchema({ 
  industryName, 
  industryDescription, 
  pageUrl, 
  useCases, 
  benefits 
}: IndustrySchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: `Construction Management Software for ${industryName}`,
    description: industryDescription,
    mainEntity: {
      "@type": "SoftwareApplication",
      name: `Space AI for ${industryName}`,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: `${industryName} Project Management`,
      description: `AI-powered construction management software specifically designed for ${industryName.toLowerCase()} projects.`,
      featureList: [...useCases, ...benefits],
      audience: {
        "@type": "Audience",
        audienceType: industryName,
      },
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".industry-overview", ".key-benefits"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// VIDEO SCHEMA (Enhanced)
// ============================================================================

interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string; // ISO 8601, e.g., "PT5M30S"
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript,
}: VideoSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl,
    uploadDate,
    duration,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(transcript && { transcript }),
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Space AI",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/images/icononly_transparent_nobuffer.png`,
      },
    },
    potentialAction: {
      "@type": "WatchAction",
      target: contentUrl || embedUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// GUIDE/TUTORIAL SCHEMA
// ============================================================================

interface GuideStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface GuideSchemaProps {
  name: string;
  description: string;
  steps: GuideStep[];
  totalTime?: string; // ISO 8601 duration
  image?: string;
  datePublished: string;
  dateModified?: string;
}

export function GuideSchema({
  name,
  description,
  steps,
  totalTime,
  image,
  datePublished,
  dateModified,
}: GuideSchemaProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(image && { image }),
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && { image: step.image }),
      ...(step.url && { url: step.url }),
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: name,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}

// ============================================================================
// GEOGRAPHIC SCHEMA (for location pages)
// ============================================================================

interface GeographicSchemaProps {
  country: string;
  countryCode: string;
  pageUrl: string;
  compliance: string[];
  cities?: string[];
}

export function GeographicSchema({ 
  country, 
  countryCode, 
  pageUrl, 
  compliance, 
  cities 
}: GeographicSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    name: `Construction Management Software ${country}`,
    description: `Space AI construction management software for ${country}. Compliant with ${compliance.join(", ")}. Trusted by construction teams across ${cities?.join(", ") || country}.`,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: `Space AI - ${country}`,
      applicationCategory: "BusinessApplication",
      availableLanguage: "English",
      areaServed: {
        "@type": "Country",
        name: country,
        identifier: countryCode,
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        areaServed: {
          "@type": "Country",
          name: country,
        },
      },
    },
    mainEntity: {
      "@type": "ItemList",
      name: `${country} Compliance Features`,
      itemListElement: compliance.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Thing",
          name: item,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ============================================================================
// SPEAKABLE SCHEMA (for Voice Search Optimization)
// ============================================================================

interface SpeakableSchemaProps {
  pageUrl: string;
  cssSelectors: string[];
}

export function SpeakableSchema({ pageUrl, cssSelectors }: SpeakableSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageUrl,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default ComparisonSchema;
