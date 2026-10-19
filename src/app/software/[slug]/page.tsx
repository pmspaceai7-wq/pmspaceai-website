import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getSoftware, getSoftwareSlugs } from '@/lib/software';
import MarkdownContent from '@/components/MarkdownContent';

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const software = getSoftwareSlugs();
  return software;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const software = getSoftware(params.slug);

  if (!software) {
    notFound();
  }

  const pageUrl = `https://pmspace.ai/software/${software.slug}/`;

  return {
    title: software.title,
    description: software.description,
    keywords: software.keywords || [],
    openGraph: {
      title: software.title,
      description: software.description,
      url: pageUrl,
      type: 'website',
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function SoftwareDetailPage({ params }: { params: { slug: string } }) {
  const software = getSoftware(params.slug);

  if (!software) {
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
                Software Module
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {software.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {software.description}
            </p>
          </div>

          {/* Featured Image */}
          {software.image && (
            <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
              <Image
                src={software.image}
                alt={software.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <MarkdownContent content={software.content} className="mb-12" />

          {/* Features */}
          {software.features && software.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {software.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Experience {software.title}
            </h2>
            <p className="text-blue-100 mb-6">
              Learn how this module can enhance your construction operations.
            </p>
            <a
              href="/try-it-now/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Demo
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
