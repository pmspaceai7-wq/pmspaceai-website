"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building, Users, Zap } from "lucide-react";
import Link from "next/link";

const alternatives = [
  {
    name: "Procore",
    slug: "/alternatives/procore-alternative",
    description: "Enterprise construction management platform",
    highlights: ["40% cost savings", "Better AI features", "Faster implementation"],
    category: "Enterprise",
  },
  {
    name: "Asite",
    slug: "/alternatives/asite-alternative",
    description: "Cloud-based project management for construction",
    highlights: ["Unified platform", "AI automation", "Better UX"],
    category: "Enterprise",
  },
  {
    name: "PlanGrid",
    slug: "/alternatives/plangrid-alternative",
    description: "Field management and blueprint viewing",
    highlights: ["10x faster doc processing", "More features", "Lower cost"],
    category: "Field Management",
  },
  {
    name: "Buildertrend",
    slug: "/alternatives/buildertrend-alternative",
    description: "Home building and remodeling software",
    highlights: ["Enterprise scalability", "AI features", "Commercial support"],
    category: "Residential",
  },
  {
    name: "Fieldwire",
    slug: "/alternatives",
    description: "Task management for construction sites",
    highlights: ["Complete platform", "Financial tools", "AI automation"],
    category: "Field Management",
  },
  {
    name: "Monday.com",
    slug: "/alternatives/monday-alternative",
    description: "General work management platform",
    highlights: ["Construction-specific", "BIM integration", "RFI tools"],
    category: "Generic PM",
  },
  {
    name: "Smartsheet",
    slug: "/alternatives/smartsheet-alternative",
    description: "Spreadsheet-based work management",
    highlights: ["Purpose-built", "No customization needed", "Industry workflows"],
    category: "Generic PM",
  },
  {
    name: "Oracle Primavera P6",
    slug: "/primavera-alternatives",
    description: "Enterprise scheduling and CPM",
    highlights: ["60% lower TCO", "Modern UI", "AI scheduling"],
    category: "Scheduling",
  },
  {
    name: "Autodesk Construction Cloud",
    slug: "/alternatives/autodesk-construction-cloud-alternative",
    description: "BIM 360 and ACC unified platform",
    highlights: ["No vendor lock-in", "Simple pricing", "Unified app"],
    category: "BIM/Design",
  },
  {
    name: "ClickUp",
    slug: "/alternatives/clickup",
    description: "All-in-one productivity platform",
    highlights: ["Construction focus", "Native RFI/submittals", "Instant setup"],
    category: "Generic PM",
  },
  {
    name: "Wrike",
    slug: "/alternatives/wrike-alternative",
    description: "Work management for professional services",
    highlights: ["Construction workflows", "BIM integration", "Field app"],
    category: "Generic PM",
  },
  {
    name: "CoConstruct",
    slug: "/alternatives/coconstruct-alternative",
    description: "Custom home builder software",
    highlights: ["Commercial support", "AI automation", "Enterprise ready"],
    category: "Residential",
  },
];

const categories = ["Enterprise", "Field Management", "Residential", "Generic PM", "Scheduling", "BIM/Design"];

export default function AlternativesIndexPage() {

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-4">
            Software Comparisons
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Space AI vs. The Competition
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            See how Space AI compares to other construction management platforms.
            AI-powered features, better value, and purpose-built for construction.
          </p>
        </motion.div>
      </section>

      {/* All Alternatives by Category */}
      {categories.map((category) => (
        <section key={category} className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-xl font-bold text-white mb-2">{category} Alternatives</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alternatives
              .filter((alt) => alt.category === category)
              .map((alt, index) => (
                <motion.div
                  key={alt.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={alt.slug}>
                    <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-colors group h-full">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {alt.name} Alternative
                        </h3>
                        <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <p className="text-xs text-white/60 mb-3">{alt.description}</p>
                      <div className="space-y-1">
                        {alt.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-xs text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to See Space AI in Action?
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Join thousands of construction professionals who switched to Space AI.
            Free migration assistance included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact-sales/">
              <button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
