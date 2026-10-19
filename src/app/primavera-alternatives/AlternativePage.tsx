"use client";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, AlertCircle, ArrowRight, Star, Brain, RefreshCw, GitBranch, ShieldAlert } from "lucide-react";
import Link from "next/link";
import AlternativeFAQ from "@/components/AlternativeFAQ";
import { pageFAQs } from "@/lib/page-faqs";
import { pageStats } from "@/lib/page-stats";
import { pageQuotes } from "@/lib/page-quotes";

const comparisonData = [
  {
    feature: "Schedule Analysis",
    pmspace: "Real-time, AI-supported",
    primavera: "deep-manual",
    msproject: "warn",
    procore: "warn",
    pmspaceStatus: "positive",
    primaveraStatus: "mixed",
    msprojectLabel: "Standard Gantt",
    procoreLabel: "Basic Tracking",
  },
  {
    feature: "Automation",
    pmspace: "Full workflow automation",
    primavera: "Minimal",
    msproject: "Via Power Automate only",
    procore: "Workflow-level only",
    pmspaceStatus: "positive",
    primaveraStatus: "negative",
    msprojectStatus: "warn",
    procoreStatus: "warn",
  },
  {
    feature: "Dependency Management",
    pmspace: "Native, auto-updated",
    primavera: "Comprehensive, manual",
    msproject: "Moderate",
    procore: "Limited",
    pmspaceStatus: "positive",
    primaveraStatus: "mixed",
    msprojectStatus: "warn",
    procoreStatus: "warn",
  },
  {
    feature: "Predictive Insights",
    pmspace: "AI delay prediction",
    primavera: false,
    msproject: false,
    procore: false,
    pmspaceStatus: "positive",
    primaveraStatus: "negative",
    msprojectStatus: "negative",
    procoreStatus: "negative",
  },
];

const alternatives = [
  {
    name: "Microsoft Project",
    bestFor: "Mid-size firms needing structured scheduling at lower adoption friction.",
    strengths: ["Familiar Microsoft interface", "Strong resource management", "Integration with Teams and SharePoint"],
    limitations: ["No construction-specific workflows", "No AI predictive capability", "Weak native integration with field reporting or cost tools"],
  },
  {
    name: "Procore",
    bestFor: "GCs already in the Procore ecosystem wanting schedule visibility connected to existing project management.",
    strengths: ["Native integration with Procore financials", "Strong subcontractor coordination"],
    limitations: ["Less analytical depth than dedicated scheduling platforms", "Limited critical path analysis vs P6 or PMSpace"],
  },
  {
    name: "Smartsheet",
    bestFor: "Smaller firms and planning teams needing collaborative scheduling without specialist expertise.",
    strengths: ["Highly configurable", "Strong collaboration features", "Easy non-specialist adoption"],
    limitations: ["Not purpose-built for construction", "Insufficient analytical depth for complex multi-phase programs"],
  },
  {
    name: "Autodesk Construction Cloud",
    bestFor: "Design-build teams with heavy BIM workflows needing schedule data connected to model-based project information.",
    strengths: ["Deep BIM-to-schedule integration", "Strong design coordination", "Native Autodesk ecosystem connectivity"],
    limitations: ["Strongest value only for teams already in Autodesk", "Less benefit for GCs focused on scheduling automation over BIM"],
  },
];

const painPoints = [
  {
    icon: ShieldAlert,
    title: "Complex Interface & Training",
    description: "Primavera is designed for specialist schedulers only. Training new staff takes weeks or months — creating a bottleneck whenever schedules need frequent updates.",
  },
  {
    icon: RefreshCw,
    title: "Manual Schedule Updates",
    description: "Subcontractor delays, procurement issues, weather, and design changes require constant manual updates. Without automation, conflicts go undetected until they hit the critical path.",
  },
  {
    icon: Brain,
    title: "No Predictive Insights",
    description: "Primavera documents project plans but does not predict which activities may cause delays, which dependencies create the highest risk, or how subcontractor coordination affects timelines.",
  },
  {
    icon: GitBranch,
    title: "Limited System Integration",
    description: "Legacy scheduling tools operate separately from procurement, document management, field reporting, and subcontractor coordination — requiring duplicate data entry across every system.",
  },
];

const faqs = pageFAQs["/primavera-alternatives"];
const stats = pageStats["/primavera-alternatives"];
const quotes = pageQuotes["/primavera-alternatives"];

export default function AlternativePage() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
            2026 Scheduling Platform Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
            Best Primavera Alternatives for Construction Scheduling 2026
          </h1>
          <p className="text-base md:text-lg text-white/70 font-light mb-8 max-w-3xl mx-auto">
            Primavera P6 set the standard — but the gap between what it was designed for and how most construction teams actually operate has grown difficult to ignore. PMSpace delivers real-time scheduling intelligence, automated dependency management, and predictive delay detection without the specialist overhead.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                Book a Demo <ArrowRight className="w-4 h-4" />
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

      {/* Why Teams Are Switching */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Construction Teams Are Looking for Primavera Alternatives
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            The complexity of modern construction environments is pushing teams toward more connected, automated solutions.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-6 flex gap-4"
            >
              <div className="shrink-0">
                <point.icon className="w-6 h-6 text-blue-400 mt-0.5" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1 text-sm">{point.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Feature Comparison: Primavera vs Modern Scheduling Platforms
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            The distinction is not about which platform has the most features — it is about which features are actually operational in a typical construction environment.
          </p>
        </motion.div>
        <div className="bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="text-left text-sm font-medium text-white/80 p-4">Feature</th>
                <th className="text-center text-sm font-semibold text-blue-400 p-4">PMSpace</th>
                <th className="text-center text-sm font-medium text-white/60 p-4">Primavera P6</th>
                <th className="text-center text-sm font-medium text-white/60 p-4">MS Project</th>
                <th className="text-center text-sm font-medium text-white/60 p-4">Procore</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index !== comparisonData.length - 1 ? "border-b border-white/5" : ""}>
                  <td className="text-sm text-white/80 p-4">{row.feature}</td>
                  <td className="text-center p-4">
                    <span className="inline-flex items-center gap-1.5 text-green-400 text-xs font-medium">
                      <CheckCircle className="w-4 h-4 shrink-0" />
                      {row.pmspace}
                    </span>
                  </td>
                  <td className="text-center p-4">
                    {row.primavera === false ? (
                      <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                    ) : row.primaveraStatus === "mixed" ? (
                      <span className="inline-flex items-center gap-1 text-yellow-400 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {row.primavera}
                      </span>
                    ) : (
                      <span className="text-white/60 text-xs">{row.primavera as string}</span>
                    )}
                  </td>
                  <td className="text-center p-4">
                    {row.msproject === false ? (
                      <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="inline-flex items-center gap-1 text-yellow-400 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {row.msprojectLabel ?? (row.msproject as string)}
                      </span>
                    )}
                  </td>
                  <td className="text-center p-4">
                    {row.procore === false ? (
                      <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                    ) : (
                      <span className="inline-flex items-center gap-1 text-yellow-400 text-xs">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {row.procoreLabel ?? (row.procore as string)}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/50 text-xs mt-4 text-center max-w-2xl mx-auto">
          Primavera&apos;s schedule analysis depth is real — but only accessible to teams with dedicated scheduling expertise. PMSpace delivers comparable analytical depth with AI handling the continuous monitoring that Primavera requires a specialist to do manually.
        </p>
      </section>

      {/* Top Alternatives */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Top Primavera Alternatives for Construction Scheduling
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            The best alternatives combine rigorous schedule analysis with automation, AI-powered predictive insights, and native integration with the broader project management workflow.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-4">
          {alternatives.map((alt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-2">{alt.name}</h3>
              <p className="text-blue-300 text-xs mb-4 leading-relaxed">
                <span className="font-medium text-white/50">Best for: </span>{alt.bestFor}
              </p>
              <div className="mb-3">
                <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-2">Strengths</p>
                <ul className="space-y-1">
                  {alt.strengths.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-0.5 shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wide mb-2">Limitations</p>
                <ul className="space-y-1">
                  {alt.limitations.map((l, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 shrink-0" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why PMSpace */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why PMSpace Is a Modern Alternative to Primavera Scheduling Software
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm">
            PMSpace replaces the manual, specialist-dependent scheduling workflow of P6 with an AI-assisted, automatically updating schedule environment.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: Brain,
              title: "AI-Assisted Scheduling",
              description: "Evaluates project schedules to highlight weak dependencies, critical path vulnerabilities, resource conflicts, and subcontractor coordination risks — earlier in the project lifecycle.",
            },
            {
              icon: ShieldAlert,
              title: "Schedule Risk Detection",
              description: "Automated schedule analysis evaluates float consumption, dependency chains, activity bottlenecks, and phase overlaps to maintain stronger control over project timelines.",
            },
            {
              icon: AlertCircle,
              title: "Project Delay Prediction",
              description: "AI-based analytics identify procurement issues, subcontractor availability gaps, permit delays, and design revisions before they cascade into program-level failures.",
            },
            {
              icon: GitBranch,
              title: "Automated Workflow Coordination",
              description: "Connects scheduling insights with document management, financial tracking, and field reporting so schedule data reflects current project reality in real time.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-6"
            >
              <item.icon className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-white/60 text-xs leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Migration */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900/50 border border-white/10 rounded-2xl p-8 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Seamless Migration from Primavera to PMSpace
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-3xl">
            PMSpace supports structured import of P6 schedule data — carrying forward existing activity structures, dependencies, and baseline schedules as the starting point rather than rebuilding from scratch. For active projects in critical phases, parallel operation is available to validate imported data accuracy before fully decommissioning P6. Implementation support, WBS mapping, and team training are included in every deployment.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { value: "P6 Import", label: "XER & XML schedule data preserved" },
              { value: "Parallel Run", label: "Validate before full transition" },
              { value: "Weeks", label: "Typical time to operational value" },
            ].map((stat, index) => (
              <div key={index} className="bg-black/30 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-blue-400 mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
          <Link href="/construction-software-demo/">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2 text-sm">
              Request a Demo <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Space AI vs Oracle Primavera P6 — Detailed Feature Comparison</h2>
        </motion.div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] bg-gray-900/50 border border-white/10 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-800/50 border-b border-white/10">
                <th className="p-4 text-left text-sm font-medium text-white/80">Feature</th>
                <th className="p-4 text-center text-sm font-medium text-purple-400">Space AI</th>
                <th className="p-4 text-center text-sm font-medium text-white/60">Primavera P6</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Pricing Model", spaceai: "Per-user, transparent, all features included", competitor: "Complex license + maintenance fees" },
                { feature: "AI Schedule Optimization", spaceai: "AI-driven schedule generation and optimization", competitor: "No AI, manual CPM scheduling" },
                { feature: "Risk Prediction", spaceai: "Predictive AI identifies delays 45+ days early", competitor: "Monte Carlo simulation (static)" },
                { feature: "Resource Management", spaceai: "AI-powered resource leveling and forecasting", competitor: "Manual resource allocation" },
                { feature: "What-If Scenarios", spaceai: "AI-generated scenario modeling in seconds", competitor: "Manual baseline comparison" },
                { feature: "Earned Value Management", spaceai: "Automated EVM with AI variance analysis", competitor: "Manual EVM calculation" },
                { feature: "Collaboration", spaceai: "Real-time team collaboration built in", competitor: "Limited, separate Oracle tools needed" },
                { feature: "Ease of Use", spaceai: "Modern UI, operational in days", competitor: "Steep learning curve, months to master" },
                { feature: "Reporting & Analytics", spaceai: "Real-time AI dashboards and insights", competitor: "Static reports, Oracle BI required" },
                { feature: "Integrations", spaceai: "Open API — works with any ecosystem", competitor: "Limited, enterprise Oracle stack" },
                { feature: "Deployment", spaceai: "Cloud-native, SaaS, instant setup", competitor: "On-prem or cloud, complex setup" },
                { feature: "Mobile Access", spaceai: "Full mobile app, offline-capable", competitor: "Limited mobile interface" },
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
          <strong>Bottom line:</strong> Space AI delivers the scheduling power of Primavera P6 with modern AI enhancements — automatic schedule optimization, 45-day risk prediction, and intuitive use — at a fraction of the cost and complexity.
        </p>
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

      {/* FAQs */}
      <AlternativeFAQ competitorName="Oracle Primavera" faqs={faqs} />

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Upgrade Your Construction Scheduling Software
          </h2>
          <p className="text-white/70 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
            Modern construction programs cannot afford schedules that are always one update cycle behind reality. PMSpace gives schedulers, project managers, and program directors the critical path visibility, automated dependency management, and predictive delay detection to run complex programs with real-time confidence.
          </p>
          <Link href="/construction-software-demo/">
            <button className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Book a Demo Today <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}