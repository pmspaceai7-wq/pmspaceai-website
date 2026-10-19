import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { whitePapersData } from '@/lib/whitePapers';

export const metadata: Metadata = {
  title: 'White Papers | Space AI',
  description: 'Download in-depth white papers on construction technology, AI adoption, predictive analytics, and operational efficiency. Expert research and industry analysis for construction leaders.',
  alternates: {
    canonical: 'https://pmspace.ai/white-papers/',
  },
  openGraph: {
    title: 'White Papers | Space AI',
    description: 'Comprehensive construction industry research and insights.',
    url: 'https://pmspace.ai/white-papers/',
    type: 'website',
  },
};

export default function WhitePapersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            White Papers
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Comprehensive research on construction technology, industry trends, and business optimization.
          </p>
          <div className="text-left text-gray-300 leading-relaxed space-y-4">
            <p>
              The construction industry is at an inflection point. After decades of lagging behind other sectors in productivity and digitization, AECO organizations are now adopting artificial intelligence, predictive analytics, connected data platforms, and automation at an accelerating pace. Space AI's white papers provide in-depth research and practical guidance for executives, project directors, and technology leaders who need to understand the forces reshaping their industry and how to act on them.
            </p>
            <p>
              Each white paper combines industry analysis, original research, and real-world implementation guidance. Topics span AI adoption frameworks, construction data strategy, predictive project analytics, operational efficiency, workforce transformation, and the economics of modern construction technology. Rather than high-level summaries, these documents offer actionable insights that leaders can use to evaluate investments, build internal business cases, and plan transformation programs with confidence.
            </p>
            <p>
              Browse the collection below to download the research most relevant to your priorities. Whether you are exploring your first AI pilot, scaling a digital transformation initiative, or looking for proven approaches to construction risk management, these white papers provide the depth and rigor needed for strategic decision-making.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-8">Research & Analysis</h2>
        {/* White Papers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whitePapersData.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="h-full bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition group cursor-pointer border border-slate-700">
                <div className="relative aspect-video bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400">{item.readTime}</span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
