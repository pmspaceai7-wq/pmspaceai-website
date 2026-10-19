import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { FREE_TOOLS } from "@/lib/freeTools";
import { FAQSchema } from "@/components/SEOSchemas";

const PAGE_URL = "https://pmspace.ai/free-tools/";

export const metadata: Metadata = {
  title: "Free AI Construction Tools & Calculators | Space AI",
  description:
    "Free construction tools built by Space AI — delay risk simulator, AI RFI writer, Procore ROI calculator, OSHA safety briefing generator, and change order estimator. No signup required.",
  keywords: [
    "free construction tools",
    "construction delay cost calculator",
    "free AI RFI writer",
    "procore cost alternative",
    "construction ROI calculator",
    "OSHA inspection checklist generator",
    "change order schedule impact estimator",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Free AI Construction Tools & Calculators | Space AI",
    description:
      "Five free interactive tools for construction teams: delay risk, RFI writing, ROI comparison, OSHA safety briefings, and change order impact.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "Are these free tools really free?",
    answer:
      "Yes. Every tool on this page is free to use with no signup, license, or account required. You can run calculations and generate documents as often as you need.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No installation is required. All tools run directly in your browser and work on desktop, tablet, and mobile devices.",
  },
  {
    question: "Can I export the results?",
    answer:
      "Most tools let you copy the output to your clipboard or use Print / Save as PDF to export a clean, shareable document for meetings and project files.",
  },
  {
    question: "How do these tools connect to Space AI?",
    answer:
      "Each tool demonstrates a capability of the Space AI platform, such as predictive risk early warning, RFI automation, ROI analysis, safety compliance, and change order impact prediction.",
  },
];

export default function FreeToolsPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="bg-black text-white min-h-screen">
        <main className="container mx-auto px-4 py-12 sm:py-16">
          {/* Hero */}
          <section className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Free Tools — No Signup Required
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Free AI Tools for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Construction Teams
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              Interactive calculators and generators you can use right now to
              model delay risk, draft RFIs, compare software ROI, plan safety
              briefings, and estimate change order impact.
            </p>
          </section>

          {/* Free tools grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FREE_TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-500/60 hover:bg-gray-900 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {tool.badge}
                    </span>
                  </div>
                  <h2 className="text-lg md:text-xl font-semibold leading-snug mb-2">
                    {tool.title}
                  </h2>
                  <p className="text-sm text-gray-400 flex-1 mb-4">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-400 font-medium">
                    Open tool
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </section>

          {/* CTA */}
          <section className="mt-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want these supercharged across your projects?
            </h2>
            <p className="text-gray-400 mb-6">
              Space AI automates delay prediction, RFI routing, change order
              impact, and safety tracking inside a single AI-native platform.
            </p>
            <Link
              href="/construction-software-demo/"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <span>Book A Demo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
