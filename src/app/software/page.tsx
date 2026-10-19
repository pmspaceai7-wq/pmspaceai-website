import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { softwareData } from '@/lib/software';

export const metadata: Metadata = {
  title: 'Software Modules | Space AI',
  description: 'Explore our modular construction software platform with integrated tools for every aspect of project management.',
  alternates: {
    canonical: 'https://pmspace.ai/software/',
  },
  openGraph: {
    title: 'Software Modules | Space AI',
    description: 'Comprehensive construction software solutions.',
    url: 'https://pmspace.ai/software/',
    type: 'website',
  },
};

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Software Modules
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Powerful, integrated modules designed for every aspect of construction management.
          </p>
          <div className="text-left text-gray-300 leading-relaxed space-y-4">
            <p>
              Modern construction projects generate enormous volumes of data across schedules, budgets, documents, models, field reports, and communication threads. Without a unified platform, that data fragments across spreadsheets, point solutions, and email inboxes, leaving teams to reconstruct project reality manually. Space AI's software modules solve this by providing specialized, deeply integrated capabilities that share a single source of truth across estimation, scheduling, document control, cost management, BIM, safety, and more.
            </p>
            <p>
              Each module is engineered for a specific construction workflow, yet built on the same data architecture. This means estimates connect to budgets, schedules connect to field progress, RFIs connect to drawings, and safety observations connect to risk registers — without custom integrations or duplicated data entry. Project teams can start with the modules they need most and expand as their processes mature, knowing that every addition strengthens the overall system rather than creating another silo.
            </p>
            <p>
              The result is a construction management platform that behaves like a system of intelligence, not just a system of record. Explore the modules below to see how Space AI supports the full project lifecycle, from preconstruction planning and procurement through execution, handover, and ongoing operations.
            </p>
          </div>
        </div>

        {/* Software Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {softwareData.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="h-full bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition group cursor-pointer border border-slate-700">
                <div className="relative aspect-video bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
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
