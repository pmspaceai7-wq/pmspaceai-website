import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { allResources } from "@/lib/resources";

const CATEGORY_PREFIX = "/tools/";
const PAGE_URL = "https://pmspace.ai/tools/";

export const metadata: Metadata = {
  title: "AI Construction Tools & Software | Space AI",
  description:
    "Explore Space AI's full suite of AI-powered construction tools — analytics, CRM, document management, scheduling, asset tracking, and more.",
  keywords: [
    "construction tools",
    "ai construction software",
    "construction management tools",
    "space ai tools",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Construction Tools & Software | Space AI",
    description:
      "Browse Space AI's complete catalog of AI-powered construction tools.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function ToolsIndexPage() {
  const tools = allResources.filter((r) => r.href.startsWith(CATEGORY_PREFIX));

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="container mx-auto px-4 py-12 sm:py-16">
        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            AI-Powered Construction Tools
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            Discover the full suite of Space AI tools built to help construction
            teams plan, predict, and deliver projects with confidence.
          </p>
        </section>

        {/* Free Tools button */}
        <section className="text-center mb-16">
          <Link
            href="/free-tools/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold px-8 py-3 rounded-lg transition-opacity"
          >
            <Sparkles className="w-5 h-5" />
            <span>Free Tools</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group flex flex-col bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/60 hover:bg-gray-900 transition-colors duration-300"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-3">
                <h2 className="text-lg md:text-xl font-semibold leading-snug">
                  {tool.title}
                </h2>
                <p className="text-sm text-gray-400 line-clamp-3 flex-1">
                  {tool.description}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-400 font-medium pt-2">
                  Explore tool
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to see Space AI in action?
          </h2>
          <p className="text-gray-400 mb-6">
            Book a personalized demo and see how our tools fit your workflow.
          </p>
          <Link
            href="/construction-software-demo/"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <span>Book A Demo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/tools/ai-assistant/" className="text-white/80 hover:text-white underline">AI Assistant</Link>
            <Link href="/tools/clinic-management/" className="text-white/80 hover:text-white underline">Clinic Management</Link>
            <Link href="/tools/ai-recommendation-engine/" className="text-white/80 hover:text-white underline">AI Recommendation Engine</Link>
            <Link href="/tools/construction-delay-risk-calculator/" className="text-white/80 hover:text-white underline">Delay Risk Calculator</Link>
            <Link href="/tools/invoice-management-software/" className="text-white/80 hover:text-white underline">Invoice Management</Link>
            <Link href="/tools/construction-analytics-software/" className="text-white/80 hover:text-white underline">Analytics</Link>
            <Link href="/tools/construction-expense-management-software/" className="text-white/80 hover:text-white underline">Expense Management</Link>
            <Link href="/tools/construction-project-management-software/" className="text-white/80 hover:text-white underline">Project Management</Link>
            <Link href="/tools/construction-supply-chain-management-software/" className="text-white/80 hover:text-white underline">Supply Chain</Link>
            <Link href="/tools/project-scheduling-software/" className="text-white/80 hover:text-white underline">Scheduling</Link>
            <Link href="/tools/digital-signature/" className="text-white/80 hover:text-white underline">Digital Signature</Link>
            <Link href="/tools/inventory-management/" className="text-white/80 hover:text-white underline">Inventory</Link>
            <Link href="/tools/backoffice-apps/" className="text-white/80 hover:text-white underline">Backoffice Apps</Link>
          </div>
        </section>
      </main>
    </div>
  );
}
