// src/components/AuthorSchema.tsx
// Task 50: Author Schema for Blog Posts - Person Schema Implementation

import Image from "next/image";

const SITE_URL = "https://pmspace.ai";

export interface Author {
  name: string;
  role: string;
  image?: string;
  url?: string;
  sameAs?: string[];
  description?: string;
  knowsAbout?: string[];
  alumniOf?: string;
  award?: string[];
}

// Default Space AI authors
export const pmspaceAuthors: Record<string, Author> = {
  "pmspace-team": {
    name: "Space AI Editorial Team",
    role: "Content Team",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about/",
    description: "The Space AI team of construction technology experts and industry veterans.",
    sameAs: [
      "https://www.linkedin.com/company/pmspace",
      "https://x.com/pmspace0707",
    ],
  },
  "thomas-jomon": {
    name: "Thomas Jomon",
    role: "Co-Founder, President & Chief AI Officer",
    image: "/assets/images/aboutus/jthomas.jpeg",
    url: "https://pmspace.ai/space-team/",
    description: "Enterprise AI and digital transformation leader at PMSPACE AI.",
    sameAs: ["https://www.linkedin.com/in/thomas-jomon-45475327/"],
    knowsAbout: ["enterprise AI", "digital transformation", "construction technology", "AI strategy"],
  },
  "sarah-chen": {
    name: "Sarah Chen, PhD",
    role: "Head of AI & Analytics",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "PhD in Machine Learning. Leading AI innovation in construction management.",
    sameAs: ["https://www.linkedin.com/in/sarahchen"],
    knowsAbout: ["machine learning", "predictive analytics", "NLP", "computer vision", "construction AI"],
    alumniOf: "Stanford University",
    award: ["PhD in Machine Learning"],
  },
  "michael-rodriguez": {
    name: "Michael Rodriguez",
    role: "Licensed General Contractor, 15+ Years Commercial Construction",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "Licensed General Contractor with 15+ years managing commercial construction projects.",
    sameAs: ["https://www.linkedin.com/in/michaelrodriguez"],
    knowsAbout: ["commercial construction", "project management", "field operations", "construction safety"],
    award: ["Licensed General Contractor"],
  },
  "raj-patel": {
    name: "Dr. Raj Patel, PE",
    role: "Construction Technology Researcher",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "Professional Engineer and construction technology researcher specializing in AI applications for project controls.",
    sameAs: ["https://www.linkedin.com/in/rajpatel"],
    knowsAbout: ["project controls", "delay analysis", "construction risk assessment", "AI in construction"],
    alumniOf: "University of California, Berkeley",
    award: ["Professional Engineer License", "PhD in Construction Engineering"],
  },
  "maria-gonzalez": {
    name: "Maria Gonzalez, LEED AP",
    role: "Director of Sustainable Construction",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "LEED Accredited Professional with 12+ years in sustainable construction project management.",
    sameAs: ["https://www.linkedin.com/in/mariagonzalez"],
    knowsAbout: ["sustainable construction", "green building", "LEED compliance", "sustainability analytics"],
    award: ["LEED AP"],
  },
  "james-obrien": {
    name: "James O'Brien, PMP",
    role: "Enterprise Project Controls Specialist",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "PMP-certified project controls specialist with 20+ years managing enterprise construction programs.",
    sameAs: ["https://www.linkedin.com/in/jamesobrien"],
    knowsAbout: ["project controls", "earned value management", "construction scheduling", "risk management"],
    award: ["PMP Certification"],
  },
  "amara-okafor": {
    name: "Dr. Amara Okafor, PhD, PE",
    role: "Structural Engineer & AI Research Lead",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "PhD in Structural Engineering, licensed Professional Engineer. Researches AI applications for construction defect detection and structural health monitoring.",
    sameAs: ["https://www.linkedin.com/in/amaraokafor"],
    knowsAbout: ["structural engineering", "AI defect detection", "structural health monitoring", "finite element analysis"],
    alumniOf: "Massachusetts Institute of Technology",
    award: ["ASCE Norman Medal", "Professional Engineer License"],
  },
  "carlos-mendez": {
    name: "Carlos Mendez, PMP, LEED AP",
    role: "Director of Digital Construction",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "PMP and LEED AP certified with 18+ years leading digital transformation for ENR top-20 contractors. Specializes in BIM integration, AI workflow automation, and field technology adoption.",
    sameAs: ["https://www.linkedin.com/in/carlosmendez"],
    knowsAbout: ["BIM integration", "digital transformation", "AI workflow automation", "field technology", "LEED construction"],
    award: ["PMP Certification", "LEED AP"],
    alumniOf: "University of Texas at Austin",
  },
  "jennifer-walsh": {
    name: "Jennifer Walsh, AIA",
    role: "Construction Technology Architect",
    image: "/assets/images/icononly_transparent_nobuffer.png",
    url: "https://pmspace.ai/about#team",
    description: "Registered Architect (AIA) with 14+ years bridging design and construction technology. Leads product strategy for AI-powered document intelligence and design coordination.",
    sameAs: ["https://www.linkedin.com/in/jenniferwalsh"],
    knowsAbout: ["architectural design", "document intelligence", "design coordination", "BIM", "construction technology"],
    award: ["AIA Young Architect Award"],
    alumniOf: "Harvard Graduate School of Design",
  },
};

interface AuthorSchemaProps {
  author: Author;
  datePublished: string;
  dateModified?: string;
}

// JSON-LD Schema for Author
export function AuthorJsonLd({ author, datePublished, dateModified }: AuthorSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.description,
    url: author.url,
    image: author.image,
    sameAs: author.sameAs,
    knowsAbout: author.knowsAbout,
    alumniOf: author.alumniOf ? { "@type": "EducationalOrganization", name: author.alumniOf } : undefined,
    award: author.award,
    worksFor: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
    },
  };
  Object.keys(schema).forEach((k) => { if (schema[k] === undefined) delete schema[k]; });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema with Author
interface ArticleSchemaProps {
  title: string;
  description: string;
  author: Author;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  sourceUrl?: string;
}

export function ArticleWithAuthorSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  sourceUrl,
}: ArticleSchemaProps) {
  const absoluteImage = image ? new URL(image, SITE_URL).toString() : undefined;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: absoluteImage,
    url: url,
    ...(sourceUrl ? { isBasedOn: sourceUrl } : {}),
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: author.name,
      jobTitle: author.role,
      url: author.url,
      sameAs: author.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: "Space AI",
      url: "https://pmspace.ai",
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Visual Author Box Component
interface AuthorBoxProps {
  author: Author;
  datePublished?: string;
  dateModified?: string;
  showSchema?: boolean;
}

export function AuthorBox({ 
  author, 
  datePublished, 
  dateModified,
  showSchema = true 
}: AuthorBoxProps) {
  return (
    <>
      {showSchema && datePublished && (
        <AuthorJsonLd 
          author={author} 
          datePublished={datePublished} 
          dateModified={dateModified} 
        />
      )}
      <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
        {author.image && (
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white/10 flex-shrink-0">
            <Image
              src={author.image}
              alt={author.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-white">{author.name}</div>
          <div className="text-sm text-white/60">{author.role}</div>
          {author.description && (
            <p className="text-xs text-white/50 mt-1 line-clamp-2">
              {author.description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthorBox;
