import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { getApp, getAppSlugs } from '@/lib/apps';
import MarkdownContent from '@/components/MarkdownContent';

export const dynamicParams = false;
export const revalidate = 3600;

export async function generateStaticParams() {
  const apps = getAppSlugs();
  return apps;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const app = getApp(params.slug);

  if (!app) {
    notFound();
  }

  const pageUrl = `https://pmspace.ai/apps/${app.slug}/`;

  return {
    title: app.title,
    description: app.description,
    keywords: app.keywords || [],
    openGraph: {
      title: app.title,
      description: app.description,
      url: pageUrl,
      type: 'website',
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default function AppDetailPage({ params }: { params: { slug: string } }) {
  const app = getApp(params.slug);

  if (!app) {
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
                App
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {app.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {app.description}
            </p>
          </div>

          {/* Featured Image */}
          {app.image && (
            <div className="relative mb-12 aspect-video rounded-lg overflow-hidden">
              <Image
                src={app.image}
                alt={app.title}
                fill
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <MarkdownContent content={app.content} className="mb-12" />

          {/* Features */}
          {app.features && app.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <ul className="space-y-3">
                {app.features.map((feature, index) => (
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
              Try {app.title} Today
            </h2>
            <p className="text-blue-100 mb-6">
              Start managing your construction operations more efficiently.
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
