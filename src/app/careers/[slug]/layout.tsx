import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Valid job slugs — keep in sync with jobDetails in page.tsx
const validJobSlugs = ["mern-developer", "senior-mern-developer", "python-developer-ai"];

const jobMeta: Record<string, { title: string; description: string }> = {
  "mern-developer": {
    title: "MERN Stack Developer | Space AI Careers",
    description: "Join Space AI as a MERN Stack Developer. Build scalable web applications using React, Next.js, MongoDB, NestJS, and GraphQL. Remote position, 3-5 years experience.",
  },
  "senior-mern-developer": {
    title: "Senior MERN Stack Developer | Space AI Careers",
    description: "Join Space AI as a Senior MERN Stack Developer. Lead development of AI-powered construction management software. Remote position, 5+ years experience.",
  },
  "python-developer-ai": {
    title: "Python AI Developer | Space AI Careers",
    description: "Join Space AI as a Python AI Developer. Build AI and machine learning systems for construction management. Remote position.",
  },
};

// Reject any slug not in generateStaticParams — returns 404 automatically
export const dynamicParams = false;

export async function generateStaticParams() {
  return validJobSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = jobMeta[params.slug];
  if (!meta) {
    notFound();
  }
  return {
    title: meta.title,
    description: meta.description,
    keywords: [
      "Space AI careers",
      "construction tech jobs",
      "software developer jobs",
      "AI engineer positions",
      "tech careers",
    ],
    alternates: {
      canonical: `https://pmspace.ai/careers/${params.slug}/`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "website",
      url: `https://pmspace.ai/careers/${params.slug}/`,
    },
  };
}

export default function CareerDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
