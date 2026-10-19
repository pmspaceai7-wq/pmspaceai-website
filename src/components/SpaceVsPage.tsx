"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Scale,
  Trophy,
  Brain,
  Zap,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import CompetitorLinks from "@/components/CompetitorLinks";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";
import MigrationCta from "@/components/MigrationCta";
import { VsComparison } from "@/lib/vsComparisons";

function SpaceVsSchema({ config }: { config: VsComparison }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${config.headline} — 2026 Comparison`,
    description: config.intro,
    mainEntity: {
      "@type": "ItemList",
      name: "Construction Software Comparison",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Space AI",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "AI Construction Management",
            operatingSystem: "Web, iOS, Android",
            brand: { "@type": "Brand", name: "Space AI" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free tier with unlimited projects; paid plans from $99/user/month",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "312",
            },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: config.competitor,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SpaceVsPage({ config }: { config: VsComparison }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <FAQSchema faqs={config.faqs} />
      <SpaceVsSchema config={config} />

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            <Scale className="w-3.5 h-3.5" />
            2026 Comparison Guide
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {config.headline}
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-white/70">
              Complete 2026 Comparison
            </span>
          </h1>

          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">{config.intro}</p>

          {/* Quick comparison cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Space AI</h3>
                <Trophy className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-sm text-purple-300 mb-2">Best Overall + AI</div>
              <div className="text-2xl font-bold text-purple-400">$0 Free</div>
              <div className="text-xs text-purple-300/60">to start</div>
            </div>
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">{config.competitor}</h3>
                <Zap className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm text-white/60 mb-2">{config.competitorBestFor}</div>
              <div className="text-2xl font-bold text-orange-400">{config.competitorPricing}</div>
              <div className="text-xs text-white/40">{config.competitorPricingNote}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/try-it-now/">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Try Space AI Free
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/construction-software-demo/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                See Demo
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* At a glance table */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            {config.headline} — At a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gray-800/50 border-b border-white/10">
                  <th className="p-4 text-left text-sm font-medium text-white/80">Dimension</th>
                  <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                  <th className="p-4 text-center text-sm font-medium text-blue-400">{config.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {config.atAGlance.map((row, i) => (
                  <tr key={i} className={i !== config.atAGlance.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="p-4 text-sm text-white/80">{row.dim}</td>
                    <td className="p-4 text-sm text-white/70 text-center">{row.space}</td>
                    <td className="p-4 text-sm text-white/60 text-center">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* Quick verdict */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Quick Verdict</h2>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">{config.verdictText}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-purple-400 mb-2">Choose Space AI if:</h3>
                <ul className="text-sm text-white/60 space-y-1">
                  {config.chooseSpace.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-blue-400 mb-2">Choose {config.competitor} if:</h3>
                <ul className="text-sm text-white/60 space-y-1">
                  {config.chooseCompetitor.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed comparison */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Full Feature Comparison
          </h2>

          {config.detailed.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 px-2">
                {section.category}
              </h3>
              <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
                <div className="grid grid-cols-3 bg-gray-800/50 p-3 border-b border-white/10">
                  <div className="font-medium text-white/70 text-sm">Feature</div>
                  <div className="text-center font-medium text-purple-400 text-sm">Space AI</div>
                  <div className="text-center font-medium text-blue-400 text-sm">{config.competitor}</div>
                </div>
                {section.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 p-3 ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    } ${index < section.features.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="text-white/80 text-sm">{feature.name}</div>
                    <div className="text-center">
                      {typeof feature.space === "boolean" ? (
                        feature.space ? (
                          <Check className="w-4 h-4 text-purple-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-white/60">{feature.space}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.competitor === "boolean" ? (
                        feature.competitor ? (
                          <Check className="w-4 h-4 text-blue-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-white/60">{feature.competitor}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pros & cons */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Pros & Cons</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Space AI</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Recommended</span>
              </div>
              <div className="mb-4">
                <div className="text-xs text-green-400 font-medium mb-2">PROS</div>
                <ul className="space-y-1">
                  {config.prosCons.space.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs text-yellow-400 font-medium mb-2">CONSIDERATIONS</div>
                <ul className="space-y-1">
                  {config.prosCons.space.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-yellow-400 flex-shrink-0">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{config.competitor}</h3>
              </div>
              <div className="mb-4">
                <div className="text-xs text-green-400 font-medium mb-2">PROS</div>
                <ul className="space-y-1">
                  {config.prosCons.competitor.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-xs text-red-400 font-medium mb-2">CONS</div>
                <ul className="space-y-1">
                  {config.prosCons.competitor.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-12">        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {config.faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <SwitcherTestimonials competitor={config.competitor} />
      <MigrationCta competitor={config.competitor} />

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Skip the Compromise. Choose Space AI.
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Get everything {config.competitor} does — plus the AI capabilities it doesn&apos;t — at a fraction of the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Free Today
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/pricing/">
                <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  See Pricing
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related */}
      <section className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Related Comparisons</h3>
          <div className="flex flex-wrap gap-3">
            {config.related.map((rel, i) => (
              <Link key={i} href={rel.href} className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm">
                {rel.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CompetitorLinks currentPath={`/compare/${config.slug}`} competitor={config.competitor} />
    </div>
  );
}
