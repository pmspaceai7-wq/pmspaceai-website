"use client";
import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  AlertCircle,
  Search,
  DollarSign,
  Clock,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { generateFAQSchemaData } from "@/lib/competitor-faqs";
import { PluralAltConfig } from "@/lib/pluralAlternatives";
import CompetitorLinks from "@/components/CompetitorLinks";
import MigrationCta from "@/components/MigrationCta";

const criteriaIcons = [Search, DollarSign, Clock, Layers];

function PluralSchema({ config }: { config: PluralAltConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.heading,
    description: config.intro,
    mainEntity: [
      {
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
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function PluralAlternativesPage({ config }: { config: PluralAltConfig }) {
  return (
    <div className="bg-black text-white min-h-screen">
      <PluralSchema config={config} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchemaData(config.faqs)) }}
      />
      {/* Hero */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">Independent Research Guide</span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">{config.heading}</h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-4 max-w-3xl mx-auto">{config.subheading}</p>
          <p className="text-sm md:text-base text-white/60 font-light mb-8 max-w-3xl mx-auto">{config.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/compare/construction-software-comparison/"><button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">Full Comparison</button></Link>
          </div>
        </motion.div>
      </section>

      {/* Why people look for alternatives */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why People Look for {config.competitor} Alternatives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {config.painPoints.map((pain, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="flex items-start gap-3 bg-gray-900/50 border border-red-500/20 rounded-xl p-4">
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">{pain}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What to look for */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What to Look For in an Alternative</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {config.criteria.map((c, index) => {
              const Icon = criteriaIcons[index % criteriaIcons.length];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
                  <Icon className="w-6 h-6 text-purple-400 mb-3" />
                  <h3 className="font-semibold text-white mb-1">{c.title}</h3>
                  <p className="text-xs text-white/60">{c.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Alternatives list */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The Best {config.competitor} Alternatives</h2>
          <div className="space-y-6">
            {config.options.map((option, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className={`rounded-2xl border p-6 ${option.isPmspace ? "bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-purple-500/30" : "bg-gray-900/50 border-white/10"}`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      {option.name}
                      {option.isPmspace && <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">Recommended</span>}
                    </h3>
                    <p className="text-sm text-white/60">{option.tagline}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40">Pricing</div>
                    <div className="text-white font-medium">{option.pricing}</div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-white/40 mb-1">Best for</div>
                    <div className="text-white/80">{option.bestFor}</div>
                  </div>
                  <div>
                    <div className="text-xs text-green-400 uppercase mb-1">Pros</div>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs text-red-400 uppercase mb-1">Cons</div>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {option.href && (
                  <Link href={option.href} className="inline-flex items-center gap-1.5 text-purple-300 hover:text-purple-200 text-sm mt-4">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Recommendation by use case */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Recommendation by Use Case</h2>
          <div className="space-y-3">
            {config.byUseCase.map((rec, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between bg-gray-900/50 border border-white/10 rounded-xl p-4">
                <div className="text-white/80 text-sm">If you need <strong>{rec.need}</strong></div>
                <div className="text-sm"><span className="text-purple-300 font-semibold">{rec.choice}</span> <span className="text-white/50">— {rec.reason}</span></div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
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

      <MigrationCta competitor={config.competitor} />

      {/* CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stop Compromising on Construction Software</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">Try the platform built for modern construction — AI-powered, tool-agnostic, and free to start.</p>
          <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
        </motion.div>
      </section>

      <CompetitorLinks currentPath={config.slug} />
    </div>
  );
}