"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DollarSign,
  Check,
  X,
  ArrowRight,
  AlertTriangle,
  Users,
  Building,
  TrendingDown,
  Shield,
  Zap,
  Brain,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import { pageFAQs } from "@/lib/page-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";

const faqs = pageFAQs["/compare/procore-pricing"];
const stats = pageStats["/compare/procore-pricing"];
const quotes = pageQuotes["/compare/procore-pricing"];

// Product Comparison Schema
function ComparisonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Procore Pricing vs Space AI Comparison 2026",
    description: "Complete pricing comparison between Procore and Space AI construction management software",
    mainEntity: {
      "@type": "ItemList",
      name: "Construction Software Pricing Comparison",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Space AI",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "0",
              highPrice: "499",
              priceCurrency: "USD",
              offerCount: "3",
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
            name: "Procore",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "Offer",
              price: "375",
              priceCurrency: "USD",
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "375",
                priceCurrency: "USD",
                unitText: "per user per month (minimum)",
              },
            },
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

const pricingTiers = [
  {
    name: "Small Team",
    users: "5-10 users",
    procore: {
      monthly: "$3,000 - $5,500",
      yearly: "$36,000 - $66,000",
      notes: "Plus implementation fees",
    },
    pmspace: {
      monthly: "$0 - $990",
      yearly: "$0 - $11,880",
      notes: "Free tier available",
    },
    savings: "Up to 82%",
  },
  {
    name: "Mid-Size",
    users: "20-50 users",
    procore: {
      monthly: "$10,000 - $27,500",
      yearly: "$120,000 - $330,000",
      notes: "Custom enterprise pricing",
    },
    pmspace: {
      monthly: "$1,980 - $4,950",
      yearly: "$23,760 - $59,400",
      notes: "Volume discounts available",
    },
    savings: "Up to 82%",
  },
  {
    name: "Enterprise",
    users: "100+ users",
    procore: {
      monthly: "$50,000+",
      yearly: "$600,000+",
      notes: "Multi-year contracts required",
    },
    pmspace: {
      monthly: "Custom",
      yearly: "Custom",
      notes: "Dedicated support included",
    },
    savings: "40-60%",
  },
];

const featureComparison = [
  { feature: "Project Management", procore: true, pmspace: true },
  { feature: "Document Management", procore: true, pmspace: true },
  { feature: "RFI Management", procore: true, pmspace: true },
  { feature: "Scheduling", procore: true, pmspace: true },
  { feature: "Budget Tracking", procore: true, pmspace: true },
  { feature: "Mobile App", procore: true, pmspace: true },
  { feature: "AI Predictive Analytics", procore: false, pmspace: true },
  { feature: "Automated Schedule Optimization", procore: false, pmspace: true },
  { feature: "Intelligent Document Processing", procore: false, pmspace: true },
  { feature: "Predictive Delay Analysis", procore: false, pmspace: true },
  { feature: "Free Tier Available", procore: false, pmspace: true },
  { feature: "Transparent Pricing", procore: false, pmspace: true },
  { feature: "No Implementation Fees", procore: false, pmspace: true },
  { feature: "Month-to-Month Billing", procore: false, pmspace: true },
];

const hiddenCosts = [
  {
    cost: "Implementation Fee",
    procore: "$5,000 - $50,000+",
    pmspace: "$0",
  },
  {
    cost: "Training",
    procore: "$2,000 - $10,000",
    pmspace: "Free (self-serve + support)",
  },
  {
    cost: "Analytics Add-on",
    procore: "$50-100/user/month",
    pmspace: "Included",
  },
  {
    cost: "API Access",
    procore: "Enterprise only",
    pmspace: "All plans",
  },
  {
    cost: "Support",
    procore: "Premium tier extra",
    pmspace: "Included",
  },
  {
    cost: "Annual Price Increase",
    procore: "5-10% typical",
    pmspace: "Price lock available",
  },
];

export default function ProcorePricingComparisonPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <FAQSchema faqs={faqs} />
      <ComparisonSchema />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">
            <DollarSign className="w-3.5 h-3.5" />
            2026 Pricing Comparison
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Procore Pricing 2026:
            </span>
            <br />
            <span className="text-green-400">Save 40-60% with Space AI</span>
          </h1>

          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            Procore costs <strong>$375-549+ per user/month</strong> with hidden
            implementation fees. Space AI starts <strong>free</strong> and
            includes AI features Procore doesn&apos;t have. See the real cost
            comparison.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-400">$375+</div>
              <div className="text-xs text-white/50">Procore /user/mo</div>
            </div>
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">$0</div>
              <div className="text-xs text-white/50">Space AI Free Tier</div>
            </div>
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">60%</div>
              <div className="text-xs text-white/50">Average Savings</div>
            </div>
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-400">+AI</div>
              <div className="text-xs text-white/50">Features Included</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pricing/">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <DollarSign className="w-4 h-4" />
                See Space AI Pricing
              </button>
            </Link>
            <Link href="/alternatives/procore-alternative/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Full Procore Comparison
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Pricing Comparison Table */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Procore vs Space AI: Real Cost Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/70 font-medium">
                    Team Size
                  </th>
                  <th className="text-center py-4 px-4 text-red-400 font-medium">
                    Procore Cost
                  </th>
                  <th className="text-center py-4 px-4 text-green-400 font-medium">
                    Space AI Cost
                  </th>
                  <th className="text-center py-4 px-4 text-purple-400 font-medium">
                    You Save
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingTiers.map((tier, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="py-4 px-4">
                      <div className="font-medium text-white">{tier.name}</div>
                      <div className="text-sm text-white/50">{tier.users}</div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="text-red-400 font-semibold">
                        {tier.procore.monthly}/mo
                      </div>
                      <div className="text-xs text-white/50">
                        {tier.procore.yearly}/year
                      </div>
                      <div className="text-xs text-red-400/70 mt-1">
                        {tier.procore.notes}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="text-green-400 font-semibold">
                        {tier.pmspace.monthly}/mo
                      </div>
                      <div className="text-xs text-white/50">
                        {tier.pmspace.yearly}/year
                      </div>
                      <div className="text-xs text-green-400/70 mt-1">
                        {tier.pmspace.notes}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                        <TrendingDown className="w-3.5 h-3.5" />
                        {tier.savings}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-white/50 text-sm mt-4">
            *Procore pricing based on industry reports and customer feedback.
            Actual pricing requires custom quote.
          </p>
        </motion.div>
      </section>

      {/* Hidden Costs Alert */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Procore Hidden Costs to Watch
                </h3>
                <p className="text-white/70 mb-4">
                  Procore&apos;s per-user pricing is just the beginning. Here
                  are the additional costs many teams don&apos;t discover until
                  after signing:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {hiddenCosts.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-black/30 rounded-lg p-3"
                    >
                      <span className="text-white/80">{item.cost}</span>
                      <div className="text-right">
                        <div className="text-red-400 text-sm line-through">
                          {item.procore}
                        </div>
                        <div className="text-green-400 text-sm font-medium">
                          Space AI: {item.pmspace}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Comparison */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            What You Get for Your Money
          </h2>
          <p className="text-center text-white/60 mb-8">
            Space AI includes AI features Procore charges extra for—or
            doesn&apos;t have at all
          </p>

          <div className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-800/50 p-4 border-b border-white/10">
              <div className="font-medium text-white">Feature</div>
              <div className="text-center font-medium text-red-400">Procore</div>
              <div className="text-center font-medium text-green-400">
                Space AI
              </div>
            </div>

            {featureComparison.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 ${
                  index % 2 === 0 ? "bg-white/5" : ""
                } ${index < featureComparison.length - 1 ? "border-b border-white/5" : ""}`}
              >
                <div className="text-white/80 text-sm">{item.feature}</div>
                <div className="text-center">
                  {item.procore ? (
                    <Check className="w-5 h-5 text-white/50 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </div>
                <div className="text-center">
                  {item.pmspace ? (
                    <Check className="w-5 h-5 text-green-400 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Detailed Feature Comparison Table */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs Procore — Cost & Feature Comparison</h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Dimension</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-white/60">Procore</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: "Monthly Cost (10 users)", a: "$499 — all features included", b: "$3,750+ before add-ons" },
                { dim: "Setup Fee", a: "None — self-serve, operational in days", b: "$5,000–$25,000 implementation" },
                { dim: "Contract Terms", a: "Monthly, cancel anytime", b: "Annual contracts required" },
                { dim: "AI Predictive Analytics", a: "Included — delay prediction 45+ days out", b: "Not available" },
                { dim: "AI Document Processing", a: "Included — auto-classification + smart search", b: "Not available" },
                { dim: "Scheduling", a: "Included — AI-powered scheduling", b: "Not available" },
                { dim: "Cost Forecasting", a: "Included — real-time AI cost alerts", b: "Not available" },
                { dim: "Mobile Access", a: "Full mobile app, offline-capable", b: "Limited mobile features" },
                { dim: "Integrations", a: "Open API — any tool ecosystem", b: "Premium API tier required" },
                { dim: "Data Storage", a: "Unlimited document storage", b: "Tiered storage limits" },
                { dim: "Customer Support", a: "Dedicated support on all plans", b: "Tiered by subscription level" },
                { dim: "Training Required", a: "Minimal — modern UI, quick onboarding", b: "Extensive training, weeks to months" },
              ].map((row, i) => (
                <tr key={i} className={`${i !== 11 ? "border-b border-white/5" : ""}`}>
                  <td className="p-4 text-sm text-white/80">{row.dim}</td>
                  <td className="p-4 text-sm text-white/70 text-center">{row.a}</td>
                  <td className="p-4 text-sm text-white/60 text-center">{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-white/50 mt-4 max-w-2xl mx-auto">
          <strong>Bottom line:</strong> Space AI delivers Procore-scale project management with native AI features at roughly 60% lower cost — with no implementation fees, no annual contracts, and setup in days instead of months.
        </p>
      </section>

      {/* Why Space AI Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Teams Switch from Procore to Space AI
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Save 40-60% Immediately
              </h3>
              <p className="text-white/60 text-sm">
                No implementation fees, no hidden costs, no annual contracts
                required. Start free and scale as needed.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Get AI Procore Doesn&apos;t Have
              </h3>
              <p className="text-white/60 text-sm">
                Predictive delay analysis, automated scheduling, intelligent
                document processing—all included, not add-ons.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Deploy in Hours, Not Weeks
              </h3>
              <p className="text-white/60 text-sm">
                Self-serve onboarding with AI guidance. Import Procore data
                easily. No expensive implementation required.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Cited Statistics */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Why Industry Data Supports Switching</h2>
          <div className="space-y-4">
            {stats.map((stat, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70 bg-gray-900/30 border border-white/5 rounded-xl p-5">
                <strong className="text-white/90">{stat.claim}.</strong> According to {stat.source}, {stat.statistic}. {stat.context}
              </p>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Expert Quotes */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">What Industry Experts Say</h2>
          <div className="space-y-6">
            {quotes.map((q, i) => (
              <div key={i} className="bg-gray-900/30 border border-white/5 rounded-xl p-6">
                <p className="text-sm leading-relaxed text-white/80 italic">
                  &ldquo;{q.quote},&rdquo; says {q.name}, {q.title} at {q.organization}.
                </p>
                <p className="text-sm text-white/60 mt-3">{q.context}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Procore Pricing FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Cut Your Construction Software Costs?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join 500+ teams who switched from Procore to Space AI. Start free,
              see immediate savings, and get AI capabilities Procore
              doesn&apos;t offer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/construction-software-demo/">
                <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  Request Demo
                </button>
              </Link>
            </div>

            <p className="text-white/50 text-sm mt-4">
              No credit card required • Import from Procore • Setup in minutes
            </p>
          </div>
        </motion.div>
      </section>

      {/* Related Pages */}
      <section className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Comparisons
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/alternatives/procore-alternative/"
              className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm"
            >
              Procore Alternative →
            </Link>
            <Link
              href="/compare/procore-vs-buildertrend/"
              className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm"
            >
              Procore vs Buildertrend →
            </Link>
            <Link
              href="/pricing/"
              className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm"
            >
              Space AI Pricing →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
