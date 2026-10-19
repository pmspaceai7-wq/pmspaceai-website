// app/core/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ToolDetailClient from '@/components/CoreModules';
import { getAllTools, getToolBySlug } from '@/lib/core';

// Reject any slug not in generateStaticParams — returns 404 automatically
export const dynamicParams = false;
export const revalidate = 3600;

// Generate metadata on the server
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = getToolBySlug(params.slug);
  if (!tool) {
    notFound();
  }
  return {
    title: `${tool.title} | Space AI Core`,
    description: tool.description,
    keywords: [
      'Space AI core modules',
      'construction tools',
      tool.title.toLowerCase(),
      'AI construction features',
    ],
    alternates: {
      canonical: `https://pmspace.ai/core/${tool.slug}/`,
    },
    openGraph: {
      title: `${tool.title} | Space AI Core`,
      description: tool.description,
      type: 'website',
      url: `https://pmspace.ai/core/${tool.slug}/`,
    },
  };
}


export async function generateStaticParams() {
  const tools = getAllTools(); 
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}



export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = getToolBySlug(params.slug);

  if (!tool) {
    notFound();
  }

  // It fetches the data and passes it to the client component for rendering
  return <ToolDetailClient tool={tool} />;
}
