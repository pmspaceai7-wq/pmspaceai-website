"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, FileText, DollarSign, Users, TrendingUp, BarChart3, Shield, AlertCircle } from "lucide-react";
import Link from "next/link";
import AlternativeFAQ from "@/components/AlternativeFAQ";
import { getDossier } from "@/lib/competitorDossiers";
import { getCompetitorFAQs } from "@/lib/competitor-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import MigrationCta from "@/components/MigrationCta";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";

const dossier = getDossier("plangrid")!;
const faqs = getCompetitorFAQs("plangrid");
const stats = pageStats["/alternatives/plangrid-alternative"];
const quotes = pageQuotes["/alternatives/plangrid-alternative"];

export default function AlternativePage() {
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
          <span className="inline-block px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">
            Complete Construction Management Solution
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Best {dossier.name} Alternative: A Smarter Way to Manage Construction Documents and Projects
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            {dossier.name} has long been popular for managing drawings and documents on site. However, as construction projects become more complex and data-driven, many teams are outgrowing its capabilities. PMspace provides a complete solution that goes beyond document management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/compare/">
              <button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">
                See Full Comparison
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why People Look for Alternatives */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why People Look for {dossier.name} Alternatives</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed mb-6">
            <p>
              {dossier.name} is effective for managing drawings and field documentation, but construction projects require a broader approach.
            </p>
            <p>
              As projects scale, teams need deeper integration across all aspects of project management. Relying on separate tools for cost tracking, scheduling, and communication leads to inefficiencies and increased risk.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
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

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Introduction</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              {dossier.name} has long been a popular choice for construction teams looking to manage drawings and documents on site. It simplified access to blueprints and improved field collaboration. However, as construction projects become more complex and data-driven, many teams are beginning to outgrow its capabilities.
            </p>
            <p>
              Today, document management alone is not enough. Project teams need full visibility into costs, schedules, workflows, and communication in one unified system. When document tools operate in isolation, they create gaps in coordination, delays in decision-making, and limited control over project performance.
            </p>
            <p>
              If you are searching for a {dossier.name} alternative, you are likely looking for more than just drawing management. You want a platform that connects documentation with cost control, project tracking, and real-time insights. This page explores where {dossier.name} falls short and how PMspace provides a more complete solution for modern construction management.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Common Limitations */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Common Limitations of {dossier.name}</h2>

          <div className="space-y-8">
            {dossier.weaknesses.map((weakness, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  {weakness}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What to Look For */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What to Look for in a Better Alternative</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Integrated Cost and Document Management</h3>
              <div className="space-y-2 text-white/70">
                <p>A strong platform should connect document management with financial tracking.</p>
                <p>
                  Using <Link href="/construction-cost-management-software/" className="text-blue-400 hover:underline">construction cost management software</Link> ensures that document changes align with budget updates and project performance.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Unified Project Workflows</h3>
              <div className="space-y-2 text-white/70">
                <p>All project activities should be managed within a single system.</p>
                <p>This includes documents, schedules, costs, and communication.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Data and Insights</h3>
              <p className="text-white/70">Access to real-time information allows project managers to make faster and more accurate decisions.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalability for Complex Projects</h3>
              <div className="space-y-2 text-white/70">
                <p>The platform should support projects of varying sizes and complexities.</p>
                <p>This ensures long-term usability as operations grow.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who Should Switch / Who Shouldn't Switch */}
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

      {/* Why PMspace */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why PMspace Is a Strong {dossier.name} Alternative</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              PMspace goes beyond document management to provide a fully integrated construction management platform.
            </p>
            <p>
              It combines document control, cost tracking, scheduling, and collaboration into one system. This eliminates the need for multiple tools and reduces inefficiencies.
            </p>
            <p>
              With features like <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">project budgeting tools</Link>, real-time analytics, and centralized workflows, PMspace enables teams to manage projects more effectively from start to finish.
            </p>
            <p>
              Instead of just storing documents, PMspace connects them with every aspect of project execution.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How PMspace Improves Outcomes */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How PMspace Improves Project Outcomes</h2>
          <p className="text-white/70 mb-8">Switching from a document-focused tool to an integrated platform can significantly improve project performance.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Connect Documents with Financial Data</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>PMspace ensures that every document update is reflected in project costs and budgets.</p>
                <p>This alignment improves accuracy and prevents financial discrepancies.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Gain Full Visibility Across Projects</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>All project data is centralized, providing a clear overview of progress, costs, and resources.</p>
                <p>This helps project managers identify issues early and take corrective action.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Streamline Collaboration Between Field and Office</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>PMspace creates a shared environment where teams can access and update information in real time.</p>
                <p>This improves coordination and reduces communication gaps.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <Shield className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Make Faster, Data-Driven Decisions</h3>
              <p className="text-white/60 text-sm">With real-time insights and analytics, teams can respond quickly to changes and optimize performance.</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/20 border border-blue-500/20 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">Reduce Risk and Improve Efficiency</h3>
            <div className="space-y-2 text-white/70 text-sm">
              <p>By integrating workflows and automating processes, PMspace minimizes errors and improves overall efficiency.</p>
              <p>
                Using <Link href="/construction-document-management-software/" className="text-blue-400 hover:underline">construction document management systems</Link> within a unified platform ensures consistency and control.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{dossier.name} vs PMspace: Key Differences</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              {dossier.name} focuses on document and drawing management, while PMspace provides a comprehensive solution for managing entire construction projects.
            </p>
            <p>
              PMspace integrates cost control, scheduling, and analytics with document management, offering a more complete and scalable approach.
            </p>
            <p>
              The difference lies in the level of visibility and control each platform provides.
            </p>
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
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: `${dossier.pricing.startingPrice} + add-ons` },
                { feature: "AI Document Processing", spaceai: "AI auto-classification and smart search", competitor: "Manual document management" },
                { feature: "Predictive Analytics", spaceai: "AI risk prediction and delay forecasting", competitor: "No predictive analytics" },
                { feature: "Scheduling", spaceai: "AI-powered predictive scheduling", competitor: "No scheduling capabilities" },
                { feature: "BIM/Model Viewing", spaceai: "Native Revit, IFC multi-format viewer", competitor: "Plan viewing only, no models" },
                { feature: "RFI Management", spaceai: "AI-routed with auto-suggested answers", competitor: "Manual RFI workflows" },
                { feature: "Cost Management", spaceai: "Real-time AI cost forecasting", competitor: "No integrated cost management" },
                { feature: "Punch Lists & Inspections", spaceai: "AI-assisted with auto-categorization", competitor: "Manual punch lists" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Limited document reports" },
                { feature: "Integrations", spaceai: "Open API — works with any ecosystem", competitor: "Limited to Autodesk ecosystem" },
                { feature: "Setup Time", spaceai: "Operational in days", competitor: "Simple setup (limited scope)" },
                { feature: "Mobile Access", spaceai: "Full mobile app, offline-capable", competitor: "Mobile app, strong offline" },
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
          <strong>Bottom line:</strong> Space AI goes far beyond {dossier.name}&apos;s document-centric approach by adding AI-powered scheduling, cost management, risk prediction, and model viewing — transforming a document repository into a complete project intelligence platform.
        </p>
      </section>

      <SwitcherTestimonials competitor={dossier.name} />
      <MigrationCta competitor={dossier.name} />

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
      <AlternativeFAQ competitorName={dossier.name} faqs={faqs} />

      {/* Conclusion */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Conclusion</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              {dossier.name} remains a useful tool for managing construction drawings, but it may not meet the needs of modern, complex projects.
            </p>
            <p>
              As construction becomes more data-driven, teams require platforms that provide full visibility, integrated workflows, and real-time insights.
            </p>
            <p>
              PMspace offers a more advanced solution that helps teams manage projects efficiently and deliver better outcomes.
            </p>
            <p>
              Choosing the right platform can make the difference between reactive management and proactive control.
            </p>
          </div>
        </motion.div>
      </section>

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
            Upgrade Your Construction Management System with PMspace
          </h2>
          <p className="text-white/70 mb-6 max-w-3xl mx-auto">
            If you are looking for a {dossier.name} alternative that offers more than document management, PMspace is built for you. With integrated workflows, real-time cost tracking, and advanced insights, PMspace helps you take full control of your projects.
          </p>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Improve efficiency, reduce risks, and deliver projects with confidence using a platform designed for modern construction challenges.
          </p>
          <Link href="/construction-software-demo/">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Start Managing Projects Smarter with PMspace
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
