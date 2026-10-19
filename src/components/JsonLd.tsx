// src/components/JsonLd.tsx
// Reusable JSON-LD component for structured data

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Pre-built schemas for common use cases

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Space AI",
    alternateName: "Space AI",
    url: "https://pmspace.ai",
    logo: "https://pmspace.ai/assets/images/logo.png",
    description: "AI-powered construction management platform that transforms project data into predictive insights for developers, contractors, and operators.",
    foundingDate: "2025",
    founders: [
      {
        "@type": "Person",
        name: "Space AI Founders",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: ["IN", "US", "SG", "AE", "GB", "AU"],
    sameAs: [
      "https://www.linkedin.com/company/pmspace",
      "https://x.com/pmspace0707",
      "https://www.instagram.com/space_ai77/",
      "https://www.youtube.com/@spaceai-7",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1 646 421 5740",
        contactType: "sales",
        areaServed: ["US", "CA", "GB", "AU"],
        availableLanguage: ["English"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+65 8611 1900",
        contactType: "customer support",
        areaServed: ["SG", "IN", "AE", "MY"],
        availableLanguage: ["English"],
      },
    ],
  };
  
  return <JsonLd data={data} />;
}

export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Space AI - AI Construction Management",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Project Management Software",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "999",
      priceCurrency: "USD",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Free Trial",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer", 
          name: "Professional",
          price: "99",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          description: "Custom pricing for large organizations",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "156",
      bestRating: "5",
      worstRating: "1",
    },
    description: "AI-powered construction management platform with predictive analytics, intelligent scheduling, and document automation.",
    featureList: [
      "AI-Driven Construction Scheduling",
      "Predictive Delay Analysis",
      "Intelligent Document Processing",
      "Risk Prediction & Management",
      "Resource Optimization",
      "BIM Integration",
      "Real-time Collaboration",
      "Mobile App Access",
      "Automated Workflows",
      "Financial Forecasting",
    ],
    screenshot: [
      "https://pmspace.ai/assets/images/dashboard-screenshot.png",
      "https://pmspace.ai/assets/images/analytics-screenshot.png",
    ],
    softwareVersion: "2.0",
    releaseNotes: "https://pmspace.ai/changelog/",
    downloadUrl: "https://pmspace.ai/try-it-now/",
    installUrl: "https://pmspace.ai/construction-software-demo/",
    author: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
  };
  
  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Space AI",
    alternateName: "Space AI",
    url: "https://pmspace.ai",
    description: "AI-powered construction management platform for developers, contractors, and operators",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pmspace.ai/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      {
        "@type": "ReadAction",
        target: "https://pmspace.ai/blogs/",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
  };
  
  return <JsonLd data={data} />;
}

// FAQ Schema for pages with FAQs
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  
  return <JsonLd data={data} />;
}

// Review Schema for testimonials
interface Review {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}

export function ReviewJsonLd({ reviews }: { reviews: Review[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Space AI Construction Management",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviews.reduce((acc, r) => acc + r.ratingValue, 0) / reviews.length,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    })),
  };
  
  return <JsonLd data={data} />;
}

// Service Schema for service pages
export function ServiceJsonLd({
  serviceName,
  description,
  provider = "Space AI",
  areaServed = ["Worldwide"],
}: {
  serviceName: string;
  description: string;
  provider?: string;
  areaServed?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: "https://pmspace.ai",
    },
    areaServed: areaServed.map((area) => ({
      "@type": "Country",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Space AI Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: serviceName,
          },
        },
      ],
    },
  };
  
  return <JsonLd data={data} />;
}
