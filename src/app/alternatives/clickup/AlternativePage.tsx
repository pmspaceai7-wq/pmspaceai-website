"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Zap, Building, Users, FileText, AlertCircle, Layers, Brain } from "lucide-react";
import Link from "next/link";
import AlternativeFAQ from "@/components/AlternativeFAQ";
import { getDossier } from "@/lib/competitorDossiers";
import { getCompetitorFAQs } from "@/lib/competitor-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import MigrationCta from "@/components/MigrationCta";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";

const dossier = getDossier("clickup")!;

const comparisonData = [
  { feature: "Construction-Specific Workflows", pmspace: true, competitor: false },
  { feature: "RFI & Submittal Management", pmspace: true, competitor: false },
  { feature: "BIM Model Integration", pmspace: true, competitor: false },
  { feature: "Blueprint Management", pmspace: true, competitor: false },
  { feature: "Task Management", pmspace: true, competitor: true },
  { feature: "Docs & Wikis", pmspace: true, competitor: true },
  { feature: "Time Tracking", pmspace: true, competitor: true },
  { feature: "Custom Views", pmspace: true, competitor: true },
  { feature: "Construction Cost Tracking", pmspace: true, competitor: "Manual" },
  { feature: "Safety Compliance", pmspace: true, competitor: false },
  { feature: "AI Scheduling & Risk", pmspace: true, competitor: false },
];

const faqs = getCompetitorFAQs("clickup");
const stats = pageStats["/alternatives/clickup"] ?? [];
const quotes = pageQuotes["/alternatives/clickup"] ?? [];

export default function AlternativePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">Built for Construction</span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">The Intelligent {dossier.name} Alternative</h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">{dossier.name} is a powerful all-in-one tool, but Space AI is purpose-built for construction with native RFI, submittals, BIM integration, and industry workflows.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
            <Link href="/compare/construction-software-comparison/"><button className="bg-white/10 border border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/20 transition-colors">See Full Comparison</button></Link>
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
              {dossier.name} is flexible and affordable, but its construction workflows require extensive setup and it lacks native RFI, submittal, and drawing tools. Here are the most common pain points:
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
            { icon: Building, label: "Industry", value: "Construction", subtext: "vs Generic" },
            { icon: Zap, label: "Setup", value: "Instant", subtext: "vs Custom Build" },
            { icon: FileText, label: "RFI/Submittals", value: "Native", subtext: "vs None" },
            { icon: Users, label: "Adoption", value: "Fast", subtext: "No Training" },
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs {dossier.name} for Construction</h2>
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
                { feature: "Pricing Model", spaceai: "Per-user, all construction features included", competitor: `${dossier.pricing.startingPrice} + add-ons` },
                { feature: "Industry Focus", spaceai: "Purpose-built for construction", competitor: "Generic work management" },
                { feature: "AI Scheduling", spaceai: "Predictive + prescriptive AI", competitor: "No AI for construction" },
                { feature: "BIM Model Integration", spaceai: "Native Revit and IFC viewer", competitor: "No BIM support" },
                { feature: "RFI Management", spaceai: "Built-in AI-routed workflows", competitor: "Not available" },
                { feature: "Submittal Tracking", spaceai: "Native submittal workflows", competitor: "Not available" },
                { feature: "Blueprint Management", spaceai: "Built-in drawing viewer and markup", competitor: "Not available" },
                { feature: "Construction Cost Tracking", spaceai: "Real-time AI cost forecasting", competitor: "Manual budget tracking" },
                { feature: "Safety Compliance", spaceai: "Built-in safety tracking and checklists", competitor: "Not available" },
                { feature: "Pre-built Construction Workflows", spaceai: "Ready out of the box", competitor: "Requires months of setup" },
                { feature: "Field Mobile App", spaceai: "Full mobile with offline, field workflows", competitor: "Generic mobile task management" },
                { feature: "Construction Reporting", spaceai: "Real-time AI dashboards for construction", competitor: "Generic reporting" },
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
          <strong>Bottom line:</strong> Space AI gives construction teams RFI management, BIM integration, cost tracking, and safety compliance that {dossier.name} cannot provide — without months of customization.
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

      <SwitcherTestimonials competitor={dossier.name} />
      <MigrationCta competitor={dossier.name} />

      {/* Cited Statistics */}
      {stats.length > 0 && (
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
      )}

      {/* Expert Quotes */}
      {quotes.length > 0 && (
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
      )}

      <AlternativeFAQ competitorName={dossier.name} faqs={faqs} />

      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Construction Software, Not Generic Tool</h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">Stop customizing generic tools. Use software designed for how construction teams actually work.</p>
          <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Start Free Trial<ArrowRight className="w-4 h-4" /></button></Link>
        </motion.div>
      </section>
    </div>
  );
}
