import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import ToolDetailClient from '@/components/CoreModules';
import { getToolBySlug } from '@/lib/core';

const tool = getToolBySlug('space-bim');

export const metadata: Metadata = tool
  ? {
      title: `${tool.title} | Space AI Core`,
      description: tool.description,
      alternates: { canonical: 'https://pmspace.ai/core/space-bim/' },
      openGraph: {
        title: `${tool.title} | Space AI Core`,
        description: tool.description,
        type: 'website',
        url: 'https://pmspace.ai/core/space-bim/',
      },
    }
  : {};

export default function Page() {
  if (!tool) notFound();
  return <ToolDetailClient tool={tool} />;
}

