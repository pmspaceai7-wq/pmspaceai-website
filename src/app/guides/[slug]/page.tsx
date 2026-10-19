// app/guides/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import GuideDetailClient from '@/components/GuideDetail';
import { getAllGuides, getGuideBySlug } from '@/lib/guides';
import GuideArticleClient from './GuideArticleClient';
import { getAllGuideArticles, getGuideArticleBySlug } from '@/lib/guideArticles';

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getGuideArticleBySlug(params.slug);
  if (article) {
    const pageUrl = `https://pmspace.ai/guides/${article.slug}/`;
    return {
      title: `${article.title} | Space AI Guide`,
      description: article.description,
      keywords: [
        'Space AI guides',
        'construction guides',
        article.category.toLowerCase(),
        article.slug.replace(/-/g, ' '),
      ],
      alternates: {
        canonical: pageUrl,
      },
      openGraph: {
        title: `${article.title} | Space AI Guide`,
        description: article.description,
        type: 'article',
        url: pageUrl,
      },
    };
  }

  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  return {
    title: `${guide.title} | Space AI Guides`,
    description: guide.description,
    keywords: [
      'Space AI guides',
      'construction guides',
      guide.title.toLowerCase(),
      'construction management',
    ],
    alternates: {
      canonical: `https://pmspace.ai/guides/${guide.slug}/`,
    },
    openGraph: {
      title: `${guide.title} | Space AI Guides`,
      description: guide.description,
      type: 'article',
      url: `https://pmspace.ai/guides/${guide.slug}/`,
      publishedTime: guide.date,
    },
  };
}

export async function generateStaticParams() {
  const slugs = new Set<string>();

  getAllGuides().forEach((guide) => {
    slugs.add(guide.slug);
  });

  getAllGuideArticles().forEach((article) => {
    slugs.add(article.slug);
  });

  return Array.from(slugs).map((slug) => ({ slug }));
}

export default function GuideDetailPage({ params }: { params: { slug: string } }) {
  const article = getGuideArticleBySlug(params.slug);
  if (article) {
    return <GuideArticleClient article={article} />;
  }

  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  return <GuideDetailClient guide={guide} />;
}

