import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { appsData } from '@/lib/apps';

export const metadata: Metadata = {
  title: 'Construction Apps | Space AI',
  description: 'Mobile and desktop construction management apps for site operations, team coordination, daily reports, and real-time project updates. Works offline and syncs instantly from the field.',
  alternates: {
    canonical: 'https://pmspace.ai/apps/',
  },
  openGraph: {
    title: 'Construction Apps | Space AI',
    description: 'Powerful apps for modern construction teams.',
    url: 'https://pmspace.ai/apps/',
    type: 'website',
  },
};

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Construction Apps
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Purpose-built mobile and desktop applications to streamline your construction operations.
          </p>
          <div className="text-left text-gray-300 leading-relaxed space-y-4">
            <p>
              Construction teams operate across job sites, offices, and remote locations, making reliable, field-ready applications essential for keeping projects on track. Space AI's construction apps are designed specifically for the realities of AECO work: spotty connectivity, rotating crews, tight deadlines, and the need to connect field activity back to central project data. Each app addresses a focused operational challenge — from workforce check-ins and contact management to daily reporting and site inspections — without forcing teams to adopt another heavy enterprise system.
            </p>
            <p>
              Unlike generic productivity tools, these apps share a unified data layer with the Space AI platform. Information captured in the field flows directly into project schedules, cost reports, document libraries, and analytics dashboards. This eliminates the manual re-entry that causes delays and errors, while giving managers real-time visibility into what is happening across their portfolio. Whether you need to verify attendance, coordinate with subcontractors, or document site conditions, the apps below provide a direct path to better control and faster decision-making.
            </p>
            <p>
              Explore the collection below to find the right tool for your team's immediate needs. Each app is built to work independently for quick deployment, while integrating seamlessly with the broader Space AI ecosystem as your digital operations mature.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white text-center mb-8">Available Apps</h2>
        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {appsData.map((item) => (
            <Link key={item.id} href={item.href}>
              <div className="h-full bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition group cursor-pointer border border-slate-700">
                <div className="relative aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
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
