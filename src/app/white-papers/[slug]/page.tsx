import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getWhitePaper, getWhitePaperSlugs } from '@/lib/whitePapers';
import MarkdownContent from '@/components/MarkdownContent';

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const whitePapers = getWhitePaperSlugs();
  return whitePapers;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const whitePaper = getWhitePaper(params.slug);

  if (!whitePaper) {
    notFound();
  }

  const pageUrl = `https://pmspace.ai/white-papers/${whitePaper.slug}/`;

  return {
    title: whitePaper.title,
    description: whitePaper.description,
    keywords: whitePaper.keywords || [],
    openGraph: {
      title: whitePaper.title,
      description: whitePaper.description,
      url: pageUrl,
      type: 'article',
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function WhitePaperDetailPage({ params }: { params: { slug: string } }) {
  const whitePaper = getWhitePaper(params.slug);

  if (!whitePaper) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <article className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                White Paper
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {whitePaper.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {whitePaper.description}
            </p>
          </div>

          {/* Featured Image */}
          {whitePaper.image && (
            <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
              <Image
                src={whitePaper.image}
                alt={whitePaper.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <MarkdownContent content={whitePaper.content} className="mb-12" />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Download This White Paper
            </h2>
            <p className="text-blue-100 mb-6">
              Get the full report with detailed insights and recommendations.
            </p>
            <a
              href={whitePaper.downloadLink || "#"}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Download PDF
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
