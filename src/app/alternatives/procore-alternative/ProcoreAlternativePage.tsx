"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Zap,
  BrainCircuit,
  BarChart,
  Clock,
  Shield,
  DollarSign,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  FileText,
  Layers,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";
import { getDossier } from "@/lib/competitorDossiers";
import { getCompetitorFAQs } from "@/lib/competitor-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";
import { CompetitorLinks, RelatedPages } from "@/components/InternalLinking";

const dossier = getDossier("procore")!;
const faqs = getCompetitorFAQs("procore");
const stats = pageStats["/alternatives/procore-alternative"];
const quotes = pageQuotes["/alternatives/procore-alternative"];

const comparisonFeatures = [
  {
    category: "AI & Automation",
    features: [
      { name: "AI-Powered Risk Prediction", pmspace: true, procore: false },
      { name: "Automated Schedule Optimization", pmspace: true, procore: false },
      { name: "Intelligent Document Processing", pmspace: true, procore: false },
      { name: "Predictive Delay Analysis", pmspace: true, procore: false },
      { name: "Agentic AI Workflows", pmspace: true, procore: false },
    ],
  },
  {
    category: "Data & Analytics",
    features: [
      { name: "Real-time Predictive Analytics", pmspace: true, procore: false },
      { name: "Machine Learning Insights", pmspace: true, procore: false },
      { name: "Unified Data Fabric", pmspace: true, procore: false },
      { name: "Basic Reporting", pmspace: true, procore: true },
      { name: "Dashboard Customization", pmspace: true, procore: true },
    ],
  },
  {
    category: "User Experience",
    features: [
      { name: "Modern, Intuitive UI", pmspace: true, procore: false },
      { name: "Mobile-First Design", pmspace: true, procore: true },
      { name: "Contextual AI Assistant", pmspace: true, procore: false },
      { name: "One-Click Onboarding", pmspace: true, procore: false },
      { name: "Quick Setup (<24 hours)", pmspace: true, procore: false },
    ],
  },
  {
    category: "Core Features",
    features: [
      { name: "Project Management", pmspace: true, procore: true },
      { name: "Document Management", pmspace: true, procore: true },
      { name: "RFI Management", pmspace: true, procore: true },
      { name: "Submittals Tracking", pmspace: true, procore: true },
      { name: "Budget Management", pmspace: true, procore: true },
    ],
  },
];

const switchReasons = [
  {
    icon: BrainCircuit,
    title: "AI-First Architecture",
    description:
      "Unlike Procore's manual data entry approach, Space AI uses AI to automate 80% of routine tasks, from document classification to risk assessment.",
  },
  {
    icon: Clock,
    title: "Predict, Don't React",
    description:
      "Procore tells you what happened. Space AI tells you what will happen. Our predictive analytics identify delays 3-4 weeks before they occur.",
  },
  {
    icon: DollarSign,
    title: "Better Value",
    description:
      "Get enterprise-grade AI capabilities without enterprise pricing. Space AI offers transparent, usage-based pricing that scales with your business.",
  },
  {
    icon: TrendingUp,
    title: "Modern Technology Stack",
    description:
      "Built on cutting-edge technology, not legacy systems. Enjoy faster performance, better integrations, and continuous AI improvements.",
  },
  {
    icon: Users,
    title: "Faster Adoption",
    description:
      "Intuitive UI means teams get productive in hours, not weeks. Our contextual AI assistant guides users through every feature.",
  },
  {
    icon: Shield,
    title: "Future-Proof",
    description:
      "As AI transforms construction, Space AI evolves with it. We're building the System of Intelligence, not maintaining a System of Record.",
  },
];



export default function ProcoreAlternativePage() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs font-medium mb-4">
            #1 {dossier.name} Alternative for 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            The Intelligent {dossier.name} Alternative
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-6 max-w-3xl mx-auto">
            While {dossier.name} helps you manage documents and track projects, Space AI
            uses AI to predict delays, automate workflows, and optimize your
            entire construction operation. It&apos;s time to upgrade from a System
            of Record to a System of Intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
                See Space AI in Action
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/compare/construction-software-comparison/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors text-sm">
                Compare Software Options
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why People Look for Alternatives */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Why People Look for {dossier.name} Alternatives
          </h2>
          <div className="space-y-4 text-white/70">
            <p>
              Teams start exploring {dossier.name} alternatives when the platform&apos;s limitations begin impacting project outcomes. Here are the most common pain points:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {dossier.commonComplaints.map((complaint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-start gap-3 bg-gray-900/50 border border-red-500/20 rounded-xl p-4"
              >
                <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">{complaint}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Key Differentiators */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Teams Switch from {dossier.name} to Space AI
          </h2>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            The construction industry is evolving. Here&apos;s why forward-thinking
            teams are choosing AI-powered project management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {switchReasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-purple-500/50 transition-colors"
            >
              <reason.icon className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-white/70">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Space AI vs {dossier.name}: Feature Comparison
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how Space AI&apos;s AI-first approach delivers more value across
            every category.
          </p>
        </motion.div>

        <div className="space-y-8">
          {comparisonFeatures.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="bg-gray-800/50 p-4 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="divide-y divide-white/5">
                <div className="grid grid-cols-3 p-4 text-sm font-medium text-white/60">
                  <span>Feature</span>
                  <span className="text-center text-purple-400">Space AI</span>
                  <span className="text-center">{dossier.name}</span>
                </div>
                {category.features.map((feature, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 p-4 items-center"
                  >
                    <span className="text-white/90">{feature.name}</span>
                    <span className="flex justify-center">
                      {feature.pmspace ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </span>
                    <span className="flex justify-center">
                      {feature.procore ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs {dossier.name} — Detailed Feature Comparison</h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Feature</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-white/60">{dossier.name}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: `${dossier.pricing.startingPrice} + extra fees` },
                { feature: "AI Risk Prediction", spaceai: "Predictive AI identifies delays 45+ days early", competitor: "No AI risk prediction" },
                { feature: "Scheduling", spaceai: "AI-powered predictive + prescriptive scheduling", competitor: "Manual Gantt scheduling" },
                { feature: "Document Management", spaceai: "AI auto-classification and smart search", competitor: "Standard document control" },
                { feature: "RFI Management", spaceai: "AI-routed with auto-suggested answers", competitor: "Manual RFI workflows" },
                { feature: "Cost Management", spaceai: "Real-time AI cost forecasting with alerts", competitor: "Manual budget tracking" },
                { feature: "Field Collaboration", spaceai: "Mobile-first with full offline support", competitor: "Tablet-optimized, limited offline" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Standard project reports" },
                { feature: "Setup Time", spaceai: "Operational in days, intuitive interface", competitor: "Complex setup, months to onboard" },
                { feature: "Integrations", spaceai: "Open API — works with any tool ecosystem", competitor: "Limited API, premium tier required" },
                { feature: "Customer Support", spaceai: "Dedicated support on all plans", competitor: "Tiered by subscription level" },
                { feature: "Mobile Access", spaceai: "Full mobile app, offline-capable", competitor: "Limited mobile features" },
              ].map((row, i) => (
                <tr key={i} className={`${i !== 11 ? "border-b border-white/5" : ""}`}>
                  <td className="p-4 text-sm text-white/80">{row.feature}</td>
                  <td className="p-4 text-sm text-white/70 text-center">{row.spaceai}</td>
                  <td className="p-4 text-sm text-white/60 text-center">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-sm text-white/50 mt-4 max-w-2xl mx-auto">
          <strong>Bottom line:</strong> Space AI delivers {dossier.name}-grade project management with native AI features at roughly 60% lower cost, with faster setup and no annual contracts.
        </p>
      </section>

      {/* Who Should Switch */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Who Should Switch from {dossier.name}
            </h2>
            <div className="space-y-3">
              {dossier.bestFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Who Shouldn&apos;t Switch
            </h2>
            <div className="space-y-3">
              {dossier.notIdealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Migration Path */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Migration Path from {dossier.name} to Space AI
          </h2>
          <div className="space-y-4">
            {dossier.migrationNotes.map((note, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-900/50 border border-white/10 rounded-xl p-4">
                <ArrowRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/80">{note}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Migration CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Future of Construction Management?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Our migration specialists will help you transition from {dossier.name}
            seamlessly. Keep your data, improve your workflows, and start
            leveraging AI in days, not months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                Schedule Migration Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/contact-sales/">
              <button className="border border-white/40 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Talk to Sales
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* See All Alternatives Link */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm mb-3">
            Want to compare multiple options side by side?
          </p>
          <Link href="/alternatives/procore-alternatives/">
            <span className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
              See all Procore alternatives compared →
            </span>
          </Link>
        </div>
      </section>

      <SwitcherTestimonials competitor={dossier.name} />

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

      {/* FAQ Schema-ready section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <FAQSchema faqs={faqs} />

      <section className="container mx-auto px-4">
        <CompetitorLinks
          currentCompetitor="/alternatives/procore-alternative"
          maxItems={5}
        />
        <RelatedPages
          cluster="alternatives"
          currentPath="/alternatives/procore-alternative"
          title="More Construction Software Comparisons"
          maxItems={4}
        />
      </section>
    </div>
  );
}
