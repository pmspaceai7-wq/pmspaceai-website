// FAQ Schema Generator for SEO
// Use this component on pages that have FAQ content

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
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
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = generateFAQSchema(faqs);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema for guides
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M" for 30 minutes
  image?: string;
}

export function generateHowToSchema({ name, description, steps, totalTime, image }: HowToSchemaProps) {
  return {
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
    })),
  };
}

export function HowToSchema(props: HowToSchemaProps) {
  const schema = generateHowToSchema(props);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema for blog posts and articles
interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}

export function generateArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "Space AI",
  url,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://pmspace.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      logo: {
        "@type": "ImageObject",
        url: "https://pmspace.ai/assets/images/icononly_transparent_nobuffer.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function ArticleSchema(props: ArticleSchemaProps) {
  const schema = generateArticleSchema(props);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Product Comparison Schema
interface ComparisonProduct {
  name: string;
  description: string;
  image?: string;
  brand: string;
  url: string;
}

interface ProductComparisonSchemaProps {
  products: ComparisonProduct[];
  comparisonUrl: string;
}

export function generateProductComparisonSchema({ products, comparisonUrl }: ProductComparisonSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": comparisonUrl,
    name: `${products.map(p => p.name).join(" vs ")} Comparison`,
    description: `Detailed comparison of ${products.map(p => p.name).join(" and ")}`,
    mainEntity: products.map((product) => ({
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.description,
      applicationCategory: "BusinessApplication",
      ...(product.image && { image: product.image }),
      brand: {
        "@type": "Brand",
        name: product.brand,
      },
      url: product.url,
    })),
  };
}

// Video Schema
interface VideoSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 duration
  contentUrl?: string;
  embedUrl?: string;
}

export function generateVideoSchema(props: VideoSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: props.name,
    description: props.description,
    thumbnailUrl: props.thumbnailUrl,
    uploadDate: props.uploadDate,
    ...(props.duration && { duration: props.duration }),
    ...(props.contentUrl && { contentUrl: props.contentUrl }),
    ...(props.embedUrl && { embedUrl: props.embedUrl }),
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      logo: {
        "@type": "ImageObject",
        url: "https://pmspace.ai/assets/images/icononly_transparent_nobuffer.png",
      },
    },
  };
}

export function VideoSchema(props: VideoSchemaProps) {
  const schema = generateVideoSchema(props);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema (for location pages)
interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
}

export function generateLocalBusinessSchema(props: LocalBusinessSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: props.name,
    description: props.description,
    url: props.url,
    address: {
      "@type": "PostalAddress",
      ...props.address,
    },
    ...(props.telephone && { telephone: props.telephone }),
    ...(props.email && { email: props.email }),
    ...(props.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: props.geo.latitude,
        longitude: props.geo.longitude,
      },
    }),
    ...(props.openingHours && { openingHoursSpecification: props.openingHours }),
  };
}

export default FAQSchema;
