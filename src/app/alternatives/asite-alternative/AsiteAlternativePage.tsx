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
  Database,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { FAQSchema } from "@/components/SEOSchemas";
import { pageFAQs } from "@/lib/page-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import MigrationCta from "@/components/MigrationCta";

const faqs = pageFAQs["/alternatives/asite-alternative"];
const stats = pageStats["/alternatives/asite-alternative"];
const quotes = pageQuotes["/alternatives/asite-alternative"];

const comparisonFeatures = [
  {
    category: "AI & Intelligence",
    features: [
      { name: "AI-Powered Document Classification", pmspace: true, asite: false },
      { name: "Predictive Risk Analytics", pmspace: true, asite: false },
      { name: "Machine Learning Insights", pmspace: true, asite: false },
      { name: "Intelligent Schedule Optimization", pmspace: true, asite: false },
      { name: "Agentic AI Workflows", pmspace: true, asite: false },
    ],
  },
  {
    category: "Data Management",
    features: [
      { name: "Common Data Environment", pmspace: true, asite: true },
      { name: "Unified AECO Data Fabric", pmspace: true, asite: false },
      { name: "BIM Integration", pmspace: true, asite: true },
      { name: "Real-time Data Sync", pmspace: true, asite: true },
      { name: "Cross-Platform Analytics", pmspace: true, asite: false },
    ],
  },
  {
    category: "User Experience",
    features: [
      { name: "Modern, Intuitive Interface", pmspace: true, asite: false },
      { name: "Mobile-First Design", pmspace: true, asite: true },
      { name: "AI Assistant (Copilot)", pmspace: true, asite: false },
      { name: "Contextual Help & Guidance", pmspace: true, asite: false },
      { name: "Customizable Dashboards", pmspace: true, asite: true },
    ],
  },
  {
    category: "Collaboration & Workflow",
    features: [
      { name: "Document Management", pmspace: true, asite: true },
      { name: "Automated Approval Workflows", pmspace: true, asite: true },
      { name: "RFI Management", pmspace: true, asite: true },
      { name: "AI-Automated RFI Triage", pmspace: true, asite: false },
      { name: "Intelligent Notifications", pmspace: true, asite: false },
    ],
  },
];

const switchReasons = [
  {
    icon: BrainCircuit,
    title: "Beyond Document Storage",
    description:
      "Asite is primarily a CDE for file storage. Space AI transforms your data into actionable intelligence with AI that predicts, recommends, and automates.",
  },
  {
    icon: Workflow,
    title: "Intelligent Automation",
    description:
      "While Asite requires manual workflow configuration, Space AI's AI learns your processes and suggests optimizations automatically.",
  },
  {
    icon: TrendingUp,
    title: "Predictive, Not Reactive",
    description:
      "Asite tells you what's in your documents. Space AI tells you what's coming next—identifying risks and opportunities before they become issues.",
  },
  {
    icon: Clock,
    title: "Modern UX Design",
    description:
      "Skip the training sessions. Space AI's intuitive interface gets teams productive immediately with contextual AI guidance.",
  },
  {
    icon: Database,
    title: "Unified Data Fabric",
    description:
      "Connect BIM, ERP, scheduling, and field data in one intelligent platform. No more data silos or manual reconciliation.",
  },
  {
    icon: Shield,
    title: "Enterprise Security + Innovation",
    description:
      "Get enterprise-grade security with startup-level innovation. Space AI delivers continuous AI improvements without compromising compliance.",
  },
];

const migrationBenefits = [
  "Full data migration with zero downtime",
  "Dedicated migration specialist assigned to your account",
  "Training and onboarding for all team members",
  "90-day parallel operation support",
  "Custom integration setup included",
];

export default function AsiteAlternativePage() {
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
          <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            Top-Rated Asite Alternative for 2026
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            The AI-Powered Asite Alternative
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-6 max-w-3xl mx-auto">
            Asite helps you store and share documents. Space AI helps you understand
            them. Our AI-powered platform transforms your construction data into
            predictive insights, automated workflows, and intelligent
            recommendations that legacy CDEs can&apos;t match.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
                See the Difference
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

      {/* CDE Evolution Banner */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 grid md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <p className="text-4xl font-bold text-purple-400 mb-2">80%</p>
            <p className="text-white/70">Reduction in manual data entry</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400 mb-2">3-4 Weeks</p>
            <p className="text-white/70">Earlier risk identification</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-400 mb-2">50%</p>
            <p className="text-white/70">Faster document processing</p>
          </div>
        </motion.div>
      </section>

      {/* Key Differentiators */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Teams Choose Space AI Over Asite
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Your CDE should do more than store files. Here&apos;s why construction
            leaders are upgrading to AI-powered project intelligence.
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
              className="bg-gray-900/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <reason.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-white/70">{reason.description}</p>
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
            Space AI vs Asite: Complete Feature Comparison
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            See how Space AI&apos;s intelligent platform compares to traditional CDE
            capabilities.
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
                  <span className="text-center text-blue-400">Space AI</span>
                  <span className="text-center">Asite</span>
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
                      {feature.asite ? (
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs Asite — Detailed Feature Comparison</h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Feature</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-white/60">Asite</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: "Complex tiered CDE pricing" },
                { feature: "AI Document Processing", spaceai: "AI auto-classification and smart search", competitor: "Manual document management" },
                { feature: "Predictive Analytics", spaceai: "AI risk prediction and delay forecasting", competitor: "No predictive analytics" },
                { feature: "Scheduling", spaceai: "AI-powered predictive scheduling", competitor: "No scheduling capabilities" },
                { feature: "BIM Integration", spaceai: "Native Revit, IFC multi-format viewer", competitor: "Basic BIM viewer" },
                { feature: "RFI Management", spaceai: "AI-routed with auto-suggested answers", competitor: "Manual RFI workflows" },
                { feature: "Cost Management", spaceai: "Real-time AI cost forecasting", competitor: "No integrated cost management" },
                { feature: "Workflow Automation", spaceai: "AI-powered workflow orchestration", competitor: "Manual workflow configuration" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Standard CDE reports" },
                { feature: "Integrations", spaceai: "Open API — works with any ecosystem", competitor: "Limited integration options" },
                { feature: "Setup Time", spaceai: "Operational in days", competitor: "Complex setup, weeks to months" },
                { feature: "ISO 19650 Compliance", spaceai: "Full support + AI-enhanced compliance checks", competitor: "Full support" },
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
          <strong>Bottom line:</strong> Space AI provides all the CDE capabilities you need from Asite plus AI-powered analytics, scheduling, cost management, and workflow automation — all in one unified platform.
        </p>
      </section>

      {/* Migration Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Migration from Asite
            </h2>
            <p className="text-white/70 mb-6">
              Worried about switching? Our dedicated migration team ensures a
              smooth transition with zero data loss and minimal disruption to
              your operations.
            </p>
            <ul className="space-y-4">
              {migrationBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Start Your Migration Today
            </h3>
            <p className="text-white/70 mb-6">
              Book a free consultation with our migration specialists to plan
              your transition from Asite to Space AI.
            </p>
            <Link href="/construction-software-demo/">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Schedule Migration Call
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <MigrationCta competitor="Asite" />

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
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Common Questions About Switching
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "How does Space AI compare to Asite's CDE capabilities?",
                a: "Space AI includes all the CDE features you rely on in Asite—document management, version control, and collaboration—plus AI-powered capabilities like automatic document classification, predictive analytics, and intelligent workflow automation that transform how you use project data.",
              },
              {
                q: "Will I lose my BIM integration capabilities?",
                a: "Not at all. Space AI offers robust BIM integration plus enhanced capabilities. Our unified data fabric connects BIM models with scheduling, field data, and financial systems to provide insights that siloed BIM viewers can't.",
              },
              {
                q: "How long does the migration from Asite take?",
                a: "Most migrations complete within 2-4 weeks, depending on data volume. We offer parallel operation periods so your team can get comfortable with Space AI while still having access to Asite.",
              },
              {
                q: "Is Space AI ISO 19650 compliant?",
                a: "Yes. Space AI fully supports ISO 19650 information management standards while adding AI capabilities that help automate compliance checks and documentation requirements.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {faq.q}
                </h3>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
      <FAQSchema faqs={faqs} />
    </div>
  );
}
