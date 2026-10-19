"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight, Star, Zap, DollarSign, Users, Building, TrendingDown, AlertCircle, BarChart3, Scale } from "lucide-react";
import Link from "next/link";
import AlternativeFAQ from "@/components/AlternativeFAQ";
import { getDossier } from "@/lib/competitorDossiers";
import { getCompetitorFAQs } from "@/lib/competitor-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";
import MigrationCta from "@/components/MigrationCta";
import SwitcherTestimonials from "@/components/SwitcherTestimonials";

const dossier = getDossier("buildertrend")!;

const comparisonData = [
  { feature: "AI-Powered Document Processing", pmspace: true, competitor: false },
  { feature: "Predictive Schedule Analytics", pmspace: true, competitor: false },
  { feature: "Real-Time Cost Visibility", pmspace: true, competitor: "Limited" },
  { feature: "BIM/3D Model Integration", pmspace: true, competitor: false },
  { feature: "Customer Portal", pmspace: true, competitor: true },
  { feature: "Estimating Tools", pmspace: true, competitor: true },
  { feature: "Lead Management CRM", pmspace: true, competitor: true },
  { feature: "Selections & Allowances", pmspace: true, competitor: true },
  { feature: "Automated RFI Generation", pmspace: true, competitor: false },
  { feature: "Enterprise Multi-Project Dashboard", pmspace: true, competitor: "Limited" },
  { feature: "Commercial Project Support", pmspace: true, competitor: "Limited" },
  { feature: "Integrated Workflows (No Extra Tools)", pmspace: true, competitor: false },
  { feature: "Advanced Reporting & Analytics", pmspace: true, competitor: "Limited" },
  { feature: "API Access (All Plans)", pmspace: true, competitor: "Premium Only" },
  { feature: "Unlimited Storage", pmspace: true, competitor: false },
];

const faqs = getCompetitorFAQs("buildertrend");
const stats = pageStats["/alternatives/buildertrend-alternative"];
const quotes = pageQuotes["/alternatives/buildertrend-alternative"];

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
            Smarter Construction Management
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Best {dossier.name} Alternative: A Smarter Way to Manage Construction Projects
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-6 max-w-3xl mx-auto">
            {dossier.name} is a well-known name in construction management software, especially among residential builders. However, as projects grow in complexity, many teams start to feel its limitations. Gaps in real-time cost visibility, limited flexibility, and fragmented workflows often lead to inefficiencies that slow down execution and impact profitability.
          </p>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            If you are searching for a {dossier.name} alternative, you are likely looking for better visibility, stronger cost control, and more scalable workflows. This page breaks down where {dossier.name} falls short and how a modern solution like PMspace can help you manage projects more efficiently and deliver better outcomes.
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

      {/* Why Look for a Buildertrend Alternative */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why Look for a {dossier.name} Alternative
          </h2>
          <div className="space-y-4 text-white/70">
            <p>
              {dossier.name} works well for certain use cases, but it may not meet the needs of teams handling complex or large-scale projects. As construction projects become more data-driven and fast-paced, limitations in flexibility, integration, and real-time insights become more apparent.
            </p>
            <p>
              Teams often seek alternatives when they need deeper control over finances, better collaboration across stakeholders, and a more unified system for managing operations.
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

      {/* Common Limitations of Buildertrend */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            Common Limitations of {dossier.name}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {dossier.weaknesses.map((weakness, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-red-500/20 rounded-xl p-6"
              >
                <AlertCircle className="w-8 h-8 text-red-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{weakness}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { icon: Building, label: "Project Types", value: "All", subtext: "Residential to Commercial" },
            { icon: Zap, label: "AI Automation", value: "Yes", subtext: "vs Manual Only" },
            { icon: DollarSign, label: "Cost Control", value: "Real-Time", subtext: "vs Delayed Reporting" },
            { icon: Users, label: "User Rating", value: "4.9/5", subtext: "vs 4.5/5" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-5 text-center"
            >
              <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="text-xs text-green-400">{stat.subtext}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What to Look For in a Better Alternative */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-white mb-6"
          >
            What to Look for in a Better Alternative
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                title: "Real-Time Cost Control",
                description: "A modern construction platform should provide continuous visibility into project finances. Using construction cost management software ensures that teams can track expenses, forecast budgets, and prevent overruns effectively.",
                link: "/construction-cost-management-software",
                linkText: "construction cost management software",
              },
              {
                title: "Integrated Project Workflows",
                description: "All aspects of project management should be connected within a single platform. This includes scheduling, cost tracking, document management, and communication.",
                link: null,
                linkText: null,
              },
              {
                title: "Advanced Reporting and Insights",
                description: "Real-time analytics enable faster and more informed decision-making. Teams should be able to access actionable insights without manual effort.",
                link: null,
                linkText: null,
              },
              {
                title: "Scalability and Flexibility",
                description: "The platform should adapt to projects of different sizes and complexities. This ensures long-term usability as your business grows.",
                link: null,
                linkText: null,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-green-500/20 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">
                  {feature.link ? (
                    <>
                      A modern construction platform should provide continuous visibility into project finances. Using{" "}
                      <Link href={feature.link} className="text-blue-400 hover:underline">
                        {feature.linkText}
                      </Link>{" "}
                      ensures that teams can track expenses, forecast budgets, and prevent overruns effectively.
                    </>
                  ) : (
                    feature.description
                  )}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            PMspace vs {dossier.name} Feature Comparison
          </h2>
        </motion.div>

        <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 bg-gray-800/50 border-b border-white/10">
            <div className="text-sm font-medium text-white/80">Feature</div>
            <div className="text-center"><span className="text-purple-400 font-semibold">PMspace</span></div>
            <div className="text-center"><span className="text-white/60">{dossier.name}</span></div>
          </div>
          {comparisonData.map((row, index) => (
            <div key={index} className={`grid grid-cols-3 gap-4 p-4 ${index !== comparisonData.length - 1 ? "border-b border-white/5" : ""}`}>
              <div className="text-sm text-white/80">{row.feature}</div>
              <div className="text-center">
                {row.pmspace === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-yellow-400 text-xs">{row.pmspace}</span>}
              </div>
              <div className="text-center">
                {row.competitor === true ? <CheckCircle className="w-5 h-5 text-green-400 mx-auto" /> : row.competitor === false ? <XCircle className="w-5 h-5 text-red-400 mx-auto" /> : <span className="text-yellow-400 text-xs">{row.competitor}</span>}
              </div>
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
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: `${dossier.pricing.startingPrice} + add-on fees` },
                { feature: "AI Risk Prediction", spaceai: "Predictive AI identifies delays 45+ days early", competitor: "No AI risk prediction" },
                { feature: "Scheduling", spaceai: "AI-powered predictive + prescriptive scheduling", competitor: "Manual Gantt scheduling" },
                { feature: "Document Management", spaceai: "AI auto-classification and smart search", competitor: "Standard document uploads" },
                { feature: "RFI Management", spaceai: "AI-routed with auto-suggested answers", competitor: "Manual RFI workflows" },
                { feature: "Cost Management", spaceai: "Real-time AI cost forecasting with alerts", competitor: "Budget tracking, no AI forecasting" },
                { feature: "Field Collaboration", spaceai: "Mobile-first with full offline support", competitor: "Mobile app with limited offline" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Standard project reports" },
                { feature: "Setup Time", spaceai: "Operational in days, intuitive interface", competitor: "Up to a month to onboard" },
                { feature: "Integrations", spaceai: "Open API — works with any tool ecosystem", competitor: "Limited API integrations" },
                { feature: "Customer Support", spaceai: "Dedicated support on all plans", competitor: "Email + phone, tiered by plan" },
                { feature: "Mobile Access", spaceai: "Full mobile app, offline-capable", competitor: "Mobile app, limited offline sync" },
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
          <strong>Bottom line:</strong> Space AI delivers the construction management features {dossier.name} users rely on, plus native AI capabilities across scheduling, risk, documents, and cost — all at a comparable price point with no hidden fees.
        </p>
      </section>

      {/* Who Should Switch / Who Shouldn't Switch */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8"
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
          className="max-w-5xl mx-auto"
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

      {/* Why PMspace Is a Strong Buildertrend Alternative */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why PMspace Is a Strong {dossier.name} Alternative
          </h2>
          <div className="space-y-4 text-white/70">
            <p>
              PMspace is designed for modern construction teams that need more control, visibility, and efficiency. Unlike traditional tools, PMspace provides a fully integrated platform that connects all aspects of project management.
            </p>
            <p>
              It enables teams to track costs, manage documents, monitor progress, and collaborate seamlessly in real time. By combining features like{" "}
              <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">
                project budgeting tools
              </Link>
              , document management, and workflow automation, PMspace eliminates the need for multiple disconnected systems.
            </p>
            <p>
              This results in faster decision-making, reduced errors, and improved project outcomes.
            </p>
          </div>
        </motion.div>
      </section>

      {/* How PMspace Improves Project Performance */}
      <section className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              How PMspace Improves Project Performance
            </h2>
            <p className="text-white/70 mb-6">
              Switching to a better platform is not just about replacing software. It is about improving how projects are managed from start to finish.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Gain Complete Financial Visibility",
                description: "PMspace provides real-time insights into project costs, enabling teams to monitor budgets continuously. This helps identify issues early and ensures that projects stay financially on track.",
              },
              {
                title: "Streamline Workflows Across Teams",
                description: "All project data and processes are centralized within one platform. This eliminates inefficiencies and ensures that everyone is working with the same information.",
              },
              {
                title: "Make Faster and Smarter Decisions",
                description: "With real-time data and analytics, project managers can make informed decisions quickly. This improves efficiency and reduces delays.",
              },
              {
                title: "Improve Collaboration and Communication",
                description: "PMspace creates a shared environment where stakeholders can access and update information. This reduces miscommunication and enhances coordination.",
              },
              {
                title: "Scale with Your Business",
                description: "Whether you are managing a single project or multiple large-scale developments, PMspace adapts to your needs. This ensures consistent performance as your operations grow.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Buildertrend vs PMspace: Key Differences */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto bg-gray-900/50 border border-white/10 rounded-xl p-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {dossier.name} vs PMspace: Key Differences
          </h2>
          <div className="space-y-4 text-white/70">
            <p>
              {dossier.name} focuses primarily on residential construction workflows, while PMspace is built for broader and more complex project environments.
            </p>
            <p>
              PMspace emphasizes real-time cost control, integrated workflows, and advanced analytics, making it more suitable for teams that require deeper insights and scalability.
            </p>
            <p className="text-white font-medium">
              The difference is not just in features but in how effectively each platform supports modern construction demands.
            </p>
          </div>
        </motion.div>
      </section>

      {/* See All Alternatives Link */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 text-sm mb-3">
            Want to compare multiple options side by side?
          </p>
          <Link href="/alternatives/buildertrend-alternatives/">
            <span className="text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors">
              See all Buildertrend alternatives compared →
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

      {/* FAQ Section */}
      <AlternativeFAQ competitorName={dossier.name} faqs={faqs} />

      {/* Conclusion Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Choose the Right Platform for Project Success
          </h2>
          <p className="text-white/70 mb-4">
            Choosing the right construction management software has a direct impact on project success. While {dossier.name} may work for certain use cases, many teams outgrow its capabilities as their projects become more complex.
          </p>
          <p className="text-white/70 mb-6">
            A modern alternative like PMspace provides the tools needed to manage costs, streamline workflows, and improve overall efficiency. In a competitive industry, having the right system in place is essential for delivering projects on time and within budget.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Upgrade to a Smarter Construction Platform with PMspace</h2>
          <p className="text-white/70 mb-4 max-w-2xl mx-auto">
            If you are looking for a {dossier.name} alternative that offers better visibility, stronger cost control, and seamless workflows, PMspace is built for you.
          </p>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            With integrated features, real-time insights, and scalable solutions, PMspace helps you manage projects more efficiently and deliver better results. Stop relying on disconnected tools and limited systems.
          </p>
          <Link href="/construction-software-demo/"><button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">Take Control of Your Projects Today<ArrowRight className="w-4 h-4" /></button></Link>
        </motion.div>
      </section>
    </div>
  );
}
