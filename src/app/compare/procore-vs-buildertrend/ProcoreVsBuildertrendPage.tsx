"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Building,
  Home,
  Users,
  DollarSign,
  Star,
  Trophy,
  Zap,
  Brain,
  Scale,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import { pageFAQs } from "@/lib/page-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";

const faqs = pageFAQs["/compare/procore-vs-buildertrend"];
const stats = pageStats["/compare/procore-vs-buildertrend"];
const quotes = pageQuotes["/compare/procore-vs-buildertrend"];

// Comparison Schema
function ComparisonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Procore vs Buildertrend Comparison 2026",
    description: "Comprehensive comparison of Procore and Buildertrend construction management software",
    mainEntity: {
      "@type": "ItemList",
      name: "Construction Software Comparison",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "SoftwareApplication",
            name: "Procore",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Commercial Construction Management",
            operatingSystem: "Web, iOS, Android",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "SoftwareApplication",
            name: "Buildertrend",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Residential Construction Management",
            operatingSystem: "Web, iOS, Android",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "SoftwareApplication",
            name: "Space AI",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "AI Construction Management",
            operatingSystem: "Web, iOS, Android",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "312",
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

const quickComparison = {
  procore: {
    name: "Procore",
    bestFor: "Large Commercial Contractors",
    pricing: "$375+/user/month",
    users: "Unlimited (enterprise)",
    freeOption: "No",
    aiFeatures: "No",
    rating: "4.5/5",
  },
  buildertrend: {
    name: "Buildertrend",
    bestFor: "Residential Home Builders",
    pricing: "$499-999/month flat",
    users: "Unlimited",
    freeOption: "No",
    aiFeatures: "No",
    rating: "4.3/5",
  },
  pmspace: {
    name: "Space AI",
    bestFor: "All Construction Types",
    pricing: "$0-99/user/month",
    users: "Unlimited",
    freeOption: "Yes",
    aiFeatures: "Yes (included)",
    rating: "4.9/5",
  },
};

const detailedComparison = [
  {
    category: "Pricing & Value",
    features: [
      { name: "Starting Price", procore: "$375+/user/mo", buildertrend: "$499/mo flat", pmspace: "$0 (free tier)" },
      { name: "Enterprise Cost (50 users)", procore: "$18,750+/mo", buildertrend: "$999/mo", pmspace: "$4,950/mo" },
      { name: "Implementation Fee", procore: "$5,000-50,000", buildertrend: "$0", pmspace: "$0" },
      { name: "Free Trial", procore: "No", buildertrend: "No", pmspace: "Yes (unlimited)" },
      { name: "Contract Required", procore: "Annual", buildertrend: "Monthly available", pmspace: "Monthly available" },
    ],
  },
  {
    category: "Project Management",
    features: [
      { name: "Task Management", procore: true, buildertrend: true, pmspace: true },
      { name: "Gantt Scheduling", procore: true, buildertrend: true, pmspace: true },
      { name: "Resource Management", procore: true, buildertrend: "Basic", pmspace: true },
      { name: "Multi-project Dashboard", procore: true, buildertrend: "Limited", pmspace: true },
      { name: "AI Schedule Optimization", procore: false, buildertrend: false, pmspace: true },
    ],
  },
  {
    category: "Document Management",
    features: [
      { name: "Drawing Management", procore: true, buildertrend: "Basic", pmspace: true },
      { name: "RFI Management", procore: true, buildertrend: true, pmspace: true },
      { name: "Submittals", procore: true, buildertrend: true, pmspace: true },
      { name: "Photo Documentation", procore: true, buildertrend: true, pmspace: true },
      { name: "AI Document Processing", procore: false, buildertrend: false, pmspace: true },
    ],
  },
  {
    category: "Client/Customer Features",
    features: [
      { name: "Client Portal", procore: "Limited", buildertrend: true, pmspace: true },
      { name: "Selection Sheets", procore: false, buildertrend: true, pmspace: true },
      { name: "Customer Communication", procore: "Basic", buildertrend: true, pmspace: true },
      { name: "Warranty Management", procore: "Add-on", buildertrend: true, pmspace: true },
      { name: "AI Progress Updates", procore: false, buildertrend: false, pmspace: true },
    ],
  },
  {
    category: "Financial Management",
    features: [
      { name: "Budget Tracking", procore: true, buildertrend: true, pmspace: true },
      { name: "Change Orders", procore: true, buildertrend: true, pmspace: true },
      { name: "Invoicing", procore: true, buildertrend: true, pmspace: true },
      { name: "QuickBooks Integration", procore: true, buildertrend: true, pmspace: true },
      { name: "AI Cost Prediction", procore: false, buildertrend: false, pmspace: true },
    ],
  },
  {
    category: "AI & Automation",
    features: [
      { name: "Predictive Analytics", procore: false, buildertrend: false, pmspace: true },
      { name: "Delay Prediction", procore: false, buildertrend: false, pmspace: true },
      { name: "Risk Scoring", procore: false, buildertrend: false, pmspace: true },
      { name: "Smart Scheduling", procore: false, buildertrend: false, pmspace: true },
      { name: "Document AI", procore: false, buildertrend: false, pmspace: true },
    ],
  },
];

const prosAndCons = {
  procore: {
    pros: [
      "Industry standard for commercial",
      "Comprehensive feature set",
      "Excellent document control",
      "Strong third-party integrations",
      "Enterprise-grade security",
    ],
    cons: [
      "Extremely expensive",
      "Complex, steep learning curve",
      "Long implementation time",
      "No AI capabilities",
      "Overkill for residential",
    ],
  },
  buildertrend: {
    pros: [
      "Excellent client portal",
      "Selection sheet management",
      "Flat monthly pricing",
      "Easy to learn",
      "Good for home builders",
    ],
    cons: [
      "Limited for commercial",
      "Outdated interface",
      "No AI features",
      "Weak reporting",
      "Limited customization",
    ],
  },
  pmspace: {
    pros: [
      "AI-powered predictions",
      "Works for all project types",
      "Free tier available",
      "Modern, intuitive UI",
      "60% lower cost",
    ],
    cons: [
      "Newer to market",
      "Building integration library",
      "Growing customer base",
    ],
  },
};

export default function ProcoreVsBuildertrend() {
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            <Scale className="w-3.5 h-3.5" />
            2026 Comparison Guide
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Procore vs Buildertrend
            </span>
            <br />
            <span className="text-2xl md:text-3xl text-white/70">
              Complete 2026 Comparison
            </span>
          </h1>

          <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
            Procore and Buildertrend serve different markets. <strong>Procore</strong> dominates commercial 
            construction at $375+/user. <strong>Buildertrend</strong> leads residential at $499/month. 
            Discover which fits your needs—or why <strong>Space AI AI</strong> beats both.
          </p>

          {/* Quick Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Procore */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Procore</h3>
                <Building className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-sm text-white/60 mb-2">Best for Commercial</div>
              <div className="text-2xl font-bold text-orange-400">$375+/user</div>
              <div className="text-xs text-white/40">per month</div>
            </div>

            {/* Buildertrend */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Buildertrend</h3>
                <Home className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-sm text-white/60 mb-2">Best for Residential</div>
              <div className="text-2xl font-bold text-green-400">$499/mo</div>
              <div className="text-xs text-white/40">flat pricing</div>
            </div>

            {/* Space AI */}
            <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-white">Space AI</h3>
                <Trophy className="w-5 h-5 text-purple-400" />
              </div>
              <div className="text-sm text-purple-300 mb-2">Best Overall + AI</div>
              <div className="text-2xl font-bold text-purple-400">$0 Free</div>
              <div className="text-xs text-purple-300/60">to start</div>
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

      {/* Detailed Feature Comparison Table */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs Procore vs Buildertrend — At a Glance</h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Dimension</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-blue-400">Procore</th>
                <th className="p-4 text-center text-sm font-medium text-green-400">Buildertrend</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: "Pricing Model", a: "Per-user, transparent, all features included", b: "$375+/user/month + extra fees", c: "$99–$499/month" },
                { dim: "AI Risk Prediction", a: "Predictive AI identifies delays 45+ days early", b: "No AI risk prediction", c: "No AI risk prediction" },
                { dim: "Scheduling", a: "AI-powered predictive + prescriptive", b: "Manual Gantt scheduling", c: "Manual Gantt scheduling" },
                { dim: "Document Management", a: "AI auto-classification and smart search", b: "Standard document control", c: "Standard document uploads" },
                { dim: "RFI Management", a: "AI-routed with auto-suggested answers", b: "Manual RFI workflows", c: "Manual RFI workflows" },
                { dim: "Cost Management", a: "Real-time AI cost forecasting", b: "Manual budget tracking", c: "Budget tracking" },
                { dim: "Mobile App", a: "Full offline-capable mobile app", b: "Limited mobile features", c: "Mobile with limited offline" },
                { dim: "Reporting", a: "Real-time AI dashboards", b: "Standard reports", c: "Standard reports" },
                { dim: "Setup Time", a: "Days", b: "Months", c: "Weeks" },
                { dim: "Integrations", a: "Open API — any ecosystem", b: "Limited API", c: "Limited API" },
                { dim: "Customer Support", a: "Dedicated on all plans", b: "Tiered by plan", c: "Email + phone" },
                { dim: "Contract Terms", a: "Monthly, no annual lock-in", b: "Annual contracts required", c: "Monthly or annual" },
              ].map((row, i) => (
                <tr key={i} className={`${i !== 11 ? "border-b border-white/5" : ""}`}>
                  <td className="p-4 text-sm text-white/80">{row.dim}</td>
                  <td className="p-4 text-sm text-white/70 text-center">{row.a}</td>
                  <td className="p-4 text-sm text-white/60 text-center">{row.b}</td>
                  <td className="p-4 text-sm text-white/60 text-center">{row.c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-white/50 mt-4 max-w-2xl mx-auto">
          <strong>Bottom line:</strong> Space AI combines Procore&apos;s enterprise-grade project management with Buildertrend&apos;s simplicity, then adds native AI capabilities neither platform offers — at a fraction of the combined cost.
        </p>
      </section>

      {/* Quick Verdict */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Quick Verdict</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium text-blue-400 mb-2">Choose Procore if:</h3>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• $50M+ annual revenue</li>
                  <li>• Large commercial projects</li>
                  <li>• Industry standard required</li>
                  <li>• Budget isn&apos;t a concern</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-green-400 mb-2">Choose Buildertrend if:</h3>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• Custom home builder</li>
                  <li>• Need client portal</li>
                  <li>• Selection management key</li>
                  <li>• Residential-only focus</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-purple-400 mb-2">Choose Space AI if:</h3>
                <ul className="text-sm text-white/60 space-y-1">
                  <li>• Want AI capabilities</li>
                  <li>• Mixed project types</li>
                  <li>• Value matters</li>
                  <li>• Modern UX preferred</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Comparison Table */}
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

          {detailedComparison.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4 px-2">
                {section.category}
              </h3>
              <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
                <div className="grid grid-cols-4 bg-gray-800/50 p-3 border-b border-white/10">
                  <div className="font-medium text-white/70 text-sm">Feature</div>
                  <div className="text-center font-medium text-blue-400 text-sm">Procore</div>
                  <div className="text-center font-medium text-green-400 text-sm">Buildertrend</div>
                  <div className="text-center font-medium text-purple-400 text-sm">Space AI</div>
                </div>
                {section.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 p-3 ${
                      index % 2 === 0 ? "bg-white/5" : ""
                    } ${index < section.features.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <div className="text-white/80 text-sm">{feature.name}</div>
                    <div className="text-center">
                      {typeof feature.procore === "boolean" ? (
                        feature.procore ? (
                          <Check className="w-4 h-4 text-blue-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-white/60">{feature.procore}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.buildertrend === "boolean" ? (
                        feature.buildertrend ? (
                          <Check className="w-4 h-4 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-white/60">{feature.buildertrend}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {typeof feature.pmspace === "boolean" ? (
                        feature.pmspace ? (
                          <Check className="w-4 h-4 text-purple-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-red-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-xs text-white/60">{feature.pmspace}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Pros and Cons */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Pros & Cons
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Procore */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Building className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">Procore</h3>
              </div>
              <div className="mb-4">
                <div className="text-xs text-green-400 font-medium mb-2">PROS</div>
                <ul className="space-y-1">
                  {prosAndCons.procore.pros.map((pro, i) => (
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
                  {prosAndCons.procore.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Buildertrend */}
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-green-400" />
                <h3 className="font-semibold text-white">Buildertrend</h3>
              </div>
              <div className="mb-4">
                <div className="text-xs text-green-400 font-medium mb-2">PROS</div>
                <ul className="space-y-1">
                  {prosAndCons.buildertrend.pros.map((pro, i) => (
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
                  {prosAndCons.buildertrend.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Space AI */}
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-purple-400" />
                <h3 className="font-semibold text-white">Space AI</h3>
                <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded">
                  Recommended
                </span>
              </div>
              <div className="mb-4">
                <div className="text-xs text-green-400 font-medium mb-2">PROS</div>
                <ul className="space-y-1">
                  {prosAndCons.pmspace.pros.map((pro, i) => (
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
                  {prosAndCons.pmspace.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <span className="w-3.5 h-3.5 flex items-center justify-center text-yellow-400 flex-shrink-0">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
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
            Frequently Asked Questions
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

      {/* Final CTA */}
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
              Why choose between Procore&apos;s features or Buildertrend&apos;s simplicity? 
              Space AI gives you the best of both with AI capabilities neither offers—at a fraction of the cost.
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

      {/* Related Links */}
      <section className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Comparisons
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/alternatives/procore-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm">
              Procore Alternative →
            </Link>
            <Link href="/alternatives/buildertrend-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm">
              Buildertrend Alternative →
            </Link>
            <Link href="/compare/procore-pricing/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm">
              Procore Pricing →
            </Link>
            <Link href="/compare/construction-software-comparison/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-purple-500/50 transition-colors text-sm">
              All Comparisons →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
