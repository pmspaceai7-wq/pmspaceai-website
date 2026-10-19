"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Star, Zap, DollarSign, Lock, Users, AlertCircle } from "lucide-react";
import Link from "next/link";
import AlternativeFAQ from "@/components/AlternativeFAQ";
import { getDossier } from "@/lib/competitorDossiers";
import { getCompetitorFAQs } from "@/lib/competitor-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import MigrationCta from "@/components/MigrationCta";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";

const dossier = getDossier("autodesk-construction-cloud")!;

const comparisonData = [
  { feature: "AI Document Processing", pmspace: true, competitor: "Limited" },
  { feature: "Predictive Analytics", pmspace: true, competitor: "Basic" },
  { feature: "BIM Model Viewing", pmspace: true, competitor: true },
  { feature: "RFI Management", pmspace: true, competitor: true },
  { feature: "Submittal Management", pmspace: true, competitor: true },
  { feature: "Document Management", pmspace: true, competitor: true },
  { feature: "Unified Platform (Single App)", pmspace: true, competitor: false },
  { feature: "Transparent Pricing", pmspace: true, competitor: false },
  { feature: "Non-Autodesk File Support", pmspace: true, competitor: "Limited" },
  { feature: "No Vendor Lock-in", pmspace: true, competitor: false },
  { feature: "API Access (All Plans)", pmspace: true, competitor: "Premium" },
];

const faqs = getCompetitorFAQs("autodesk-construction-cloud");
const stats = pageStats["/alternatives/autodesk-construction-cloud-alternative"];
const quotes = pageQuotes["/alternatives/autodesk-construction-cloud-alternative"];

export default function AlternativePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">No Vendor Lock-in</span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">Looking for a {dossier.name} Alternative?</h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">{dossier.name} combines multiple products with complex pricing. Space AI offers a unified platform with AI features, transparent pricing, and no vendor lock-in.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/compare/"><button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">See Full Comparison</button></Link>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why People Look for {dossier.name} Alternatives
          </h2>
          <div className="space-y-4 text-white/70 mb-6">
            <p>
              {dossier.name} offers powerful BIM and design tools, but many teams find the complexity, cost, and ecosystem lock-in limiting. Here are the most common pain points:
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

      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Lock, label: "Vendor Lock-in", value: "None", subtext: "vs Autodesk Only" },
            { icon: DollarSign, label: "Pricing", value: "Simple", subtext: "vs Complex" },
            { icon: Zap, label: "AI Features", value: "Advanced", subtext: "vs Basic" },
            { icon: Users, label: "Platform", value: "Unified", subtext: "vs Fragmented" },
          ].map((stat, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gray-900/50 border border-white/10 rounded-xl p-5 text-center">
              <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="text-xs text-green-400">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs {dossier.name}</h2>
        </motion.div>
        <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 border-b border-white/10">
            <div className="text-sm font-medium text-white/80">Feature</div>
            <div className="text-center"><span className="text-purple-400 font-semibold">Space AI</span></div>
            <div className="text-center"><span className="text-white/60">{dossier.name}</span></div>
          </div>
          {comparisonData.map((row, index) => (
            <div key={index} className={`grid grid-cols-3 gap-4 p-4 ${index !== comparisonData.length - 1 ? "border-b border-white/5" : ""}`}>
              <div className="text-sm text-white/80">{row.feature}</div>
              <div className="text-center">{row.pmspace === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-yellow-400 text-xs">{row.pmspace}</span>}</div>
              <div className="text-center">{row.competitor === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : row.competitor === false ? <XCircle className="w-5 h-5 text-red-400 mx-auto" /> : <span className="text-yellow-400 text-xs">{row.competitor}</span>}</div>
            </div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs {dossier.name} — Detailed Comparison</h2>
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
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: `${dossier.pricing.startingPrice} — complex tiered bundles` },
                { feature: "AI Scheduling", spaceai: "Predictive + prescriptive AI scheduling", competitor: "Basic scheduling, no AI" },
                { feature: "Document Management", spaceai: "AI-powered auto-classification and search", competitor: "Standard document control" },
                { feature: "BIM Model Integration", spaceai: "Native Revit, IFC, and multi-format viewer", competitor: "Autodesk formats only" },
                { feature: "RFI Management", spaceai: "AI-routed with auto-suggested answers", competitor: "Manual RFI workflows" },
                { feature: "Cost Management", spaceai: "Real-time AI forecasting, 6-week warnings", competitor: "Limited budget tracking" },
                { feature: "Field Collaboration", spaceai: "Mobile-first with full offline capability", competitor: "Tablet-optimized, limited offline" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Standard project reports" },
                { feature: "Integrations", spaceai: "Open API — works with any ecosystem", competitor: "Autodesk-only ecosystem" },
                { feature: "Setup Time", spaceai: "Operational in days", competitor: "Complex multi-product setup, months" },
                { feature: "Vendor Lock-in", spaceai: "None — works with Revit, Trimble, Bentley, etc.", competitor: "Full Autodesk ecosystem lock-in" },
                { feature: "Customer Support", spaceai: "Dedicated support on all plans", competitor: "Tiered by subscription level" },
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
          <strong>Bottom line:</strong> Space AI offers {dossier.name}-level construction management with native AI features, transparent pricing, and zero vendor lock-in — at a fraction of the complexity and cost.
        </p>
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

      {/* See All Alternatives Link */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm mb-3">
            Want to compare multiple options side by side?
          </p>
          <Link href="/alternatives/autodesk-construction-cloud-alternatives/">
            <span className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
              See all Autodesk Construction Cloud alternatives compared →
            </span>
          </Link>
        </div>
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

      <AlternativeFAQ competitorName={dossier.name} faqs={faqs} />

      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Freedom from Vendor Lock-in</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">Space AI works with all your tools — Autodesk, Trimble, Bentley, and more. No forced ecosystem.</p>
          <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
        </motion.div>
      </section>
    </div>
  );
}
