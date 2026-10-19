"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  FileStack,
  Users2,
  BrainCircuit,
  BarChart3,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// ─── Key Features ──────────────────────────────────────────────────────────────
const keyFeatures = [
  {
    title: "Project Scheduling Tools",
    description:
      "Construction scheduling tools help contractors plan project timelines, coordinate subcontractors, and monitor project milestones. Integrated scheduling provides visibility into upcoming tasks and dependencies across all workflows.",
    icon: CalendarClock,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Document Management",
    description:
      "Construction projects generate large volumes of documents including drawings, contracts, permits, and inspection reports. Keep every file organized with proper document control in a single connected environment.",
    icon: FileStack,
    color: "from-purple-600 to-indigo-600",
  },
  {
    title: "Subcontractor Coordination",
    description:
      "Structured coordination workflows replace email chains with an auditable record of every communication, approval, and drawing distribution — so disputes never come down to a missing thread.",
    icon: Users2,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "AI-Driven Project Insights",
    description:
      "PMSpace's AI engine analyzes schedule progress, document revisions, subcontractor activity, and RFI response times simultaneously — producing a continuous risk picture, not a periodic status report.",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Project Analytics Dashboards",
    description:
      "Real-time dashboards give project managers live schedule performance, cost tracking, and risk alerts. Executives see portfolio-level performance across every active project in one place.",
    icon: BarChart3,
    color: "from-pink-500 to-rose-600",
  },
  {
    title: "Workflow Automation",
    description:
      "Subcontractor notifications, drawing distribution, approval routing, and change order processing are automated based on project logic — no manual trigger required from the project manager.",
    icon: Workflow,
    color: "from-sky-500 to-blue-700",
  },
];

// ─── Platform Comparison ────────────────────────────────────────────────────────
const platforms = [
  {
    name: "PMSpace",
    projectMgmt: "Unified project coordination platform",
    scheduling: "Advanced scheduling intelligence",
    automation: "Automated construction workflows",
    ai: "AI-driven project insights",
    highlight: true,
  },
  {
    name: "Procore",
    projectMgmt: "Strong collaboration and project management",
    scheduling: "Integrates with scheduling tools",
    automation: "Limited automation",
    ai: "Minimal predictive analytics",
    highlight: false,
  },
  {
    name: "Buildertrend",
    projectMgmt: "Project management for residential contractors",
    scheduling: "Basic scheduling tools",
    automation: "Limited automation",
    ai: "No AI insights",
    highlight: false,
  },
  {
    name: "Autodesk CC",
    projectMgmt: "Design and construction collaboration",
    scheduling: "Moderate scheduling capabilities",
    automation: "Moderate automation",
    ai: "Minimal AI analytics",
    highlight: false,
  },
];

// ─── Why PMSpace Benefits ───────────────────────────────────────────────────────
const whyBenefits = [
  "Fewer coordination gaps across every active project",
  "Faster approvals through automated routing",
  "More accurate schedules with live field data",
  "Earlier detection of risks before they derail delivery",
  "Predictive delay detection along the full dependency chain",
  "Unified financial & schedule data — no manual reconciliation",
];

// ─── FAQ ────────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is general contractor software used for?",
    a: "General contractor software is used to manage construction projects, coordinate subcontractors, track schedules, organize project documents, and monitor project budgets — replacing fragmented tools with a single connected environment where all project data is accessible in real time.",
  },
  {
    q: "What features should general contractor software include?",
    a: "It should include scheduling tools, document management, subcontractor coordination, workflow automation, job costing, and project analytics dashboards. Modern platforms also include AI-powered risk detection that continuously monitors schedule health and flags developing delays.",
  },
  {
    q: "What is the best project management software for general contractors?",
    a: "The best choice depends on project size, operational complexity, and integration needs. PMSpace is the leading AI-powered option combining scheduling, document control, subcontractor coordination, and predictive project intelligence in a single unified platform.",
  },
  {
    q: "Can AI improve construction project management?",
    a: "Yes. AI analyzes project data to identify risks, predict schedule delays, and automate coordination tasks — monitoring project health continuously across scheduling, document, and financial data so teams can act before problems become unrecoverable.",
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
const GeneralContractorPage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-fit overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full border border-white/20 text-white/60">
                General Contractor Software
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Best General Contractor Software for Construction Teams.
              </h1>
              <p className="mt-6 text-lg text-white/70">
                PMSpace connects scheduling, documents, workflows, financials, and
                AI-powered project intelligence in a single environment — so general
                contractors can run more projects with more confidence and less
                administrative overhead.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => router.push("/construction-software-demo/")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black relative z-50"
                >
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="relative h-64 md:h-auto md:min-h-[420px] rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src="/assets/images/general-cunstructers.webp"
                alt="General Contractor Project Dashboard"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Challenges ───────────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Challenges General Contractors Face
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light">
              Most general contractors manage operational demands across software
              stacks that were never designed to work together — creating constant
              manual reconciliation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Subcontractor Coordination",
                body: "Coordinating dozens of subcontractors through emails or spreadsheets increases the risk of miscommunication and scheduling conflicts on every project.",
              },
              {
                title: "Schedule Delays",
                body: "Without scheduling tools integrated with project management systems, contractors struggle to anticipate delays and adjust timelines in time.",
              },
              {
                title: "Communication Breakdowns",
                body: "Fragmented communication across different systems makes it impossible to maintain clear visibility into project decisions and real-time updates.",
              },
              {
                title: "Manual Project Tracking",
                body: "Manual reports and spreadsheets slow down decision-making and increase the risk of inaccurate project data reaching the wrong people.",
              },
              {
                title: "Fragmented Software",
                body: "Separate tools for scheduling, documents, budgeting, and communication fragment project data and make portfolio analysis nearly impossible.",
              },
              {
                title: "Job Costing Accuracy",
                body: "When job costing doesn't reflect the current schedule and procurement status, bid and margin decisions are made on stale financial snapshots.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Features ─────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,69,255,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]" />

        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Key Features Contractors Need
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              General contractors require software that supports the full lifecycle
              of construction project management — from planning through final handover.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`} />
                <div className="p-8 flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg mb-6`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Platform Comparison ───────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.07),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Leading Platforms Compared — 2026
            </h2>
            <p className="max-w-2xl mx-auto text-base text-white/60 font-light">
              How the major general contractor software options stack up for
              construction project management this year.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto rounded-xl border border-white/10"
          >
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.03]">
                  <th className="px-5 py-4 font-semibold text-white/80">Platform</th>
                  <th className="px-5 py-4 font-semibold text-white/80">Project Management</th>
                  <th className="px-5 py-4 font-semibold text-white/80">Scheduling</th>
                  <th className="px-5 py-4 font-semibold text-white/80">Automation</th>
                  <th className="px-5 py-4 font-semibold text-white/80">AI Insights</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((p, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/[0.06] transition-colors ${
                      p.highlight
                        ? "bg-gradient-to-r from-purple-900/30 to-blue-900/20"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="px-5 py-4 font-semibold text-white">
                      {p.name}
                      {p.highlight && (
                        <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium">
                          Recommended
                        </span>
                      )}
                    </td>
                    <td className="px-5 py-4 text-white/65">{p.projectMgmt}</td>
                    <td className="px-5 py-4 text-white/65">{p.scheduling}</td>
                    <td className="px-5 py-4 text-white/65">{p.automation}</td>
                    <td className="px-5 py-4 text-white/65">{p.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm text-white/45 max-w-3xl mx-auto text-center leading-relaxed"
          >
            The differentiating factor is architecture. PMSpace was built as a unified
            system where all modules share the same data layer — a schedule update is
            immediately visible in the financial dashboard, and the AI engine has
            access to all data simultaneously.
          </motion.p>
        </div>
      </section>

      {/* ── Why PMSpace ──────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(140,69,255,0.12),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                Why PMSpace Is the Powerful Choice for General Contractors
              </h2>
              <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8">
                PMSpace gives general contractors a single environment where every
                aspect of project delivery is connected and visible. Project managers
                coordinate subcontractors through structured workflows. Document
                control teams distribute drawings to an automatically maintained
                distribution list. Schedulers see live field progress reflected in the
                schedule — not the weekly site meeting update.
              </p>
              <ul className="space-y-3 mb-10">
                {whyBenefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-sm sm:text-base text-white/70"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    {b}
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/construction-software-demo/")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-64 lg:h-auto lg:min-h-[480px] rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src="/assets/images/pmspace-dashboard.png"
                alt="PMSpace construction project dashboard"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who Should Use ───────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.07),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Who Should Use General Contractor Software
            </h2>
            <p className="max-w-2xl mx-auto text-base text-white/60 font-light">
              Any construction company that manages project schedules, subcontractor
              networks, and project documentation — and wants to replace manual
              coordination with an integrated, intelligent platform.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Multi-Project GCs",
                body: "Managing multiple projects simultaneously requires cross-project visibility that individual project tools cannot provide — especially when subcontractors are shared across programs.",
              },
              {
                label: "Large Subcontractor Networks",
                body: "Structured coordination workflows create an auditable record of every communication, approval, and drawing distribution, making disputes far easier to resolve.",
              },
              {
                label: "Commercial Construction Firms",
                body: "Complex multi-trade programs need scheduling intelligence, document control, and financial management connected in a single environment with live procurement status.",
              },
              {
                label: "Mid-Size Growth Businesses",
                body: "Companies that have outgrown basic tools but aren't ready for large enterprise complexity benefit most from PMSpace's combination of enterprise capability and accessible implementation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-colors duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xs font-bold text-white mb-4">
                  {i + 1}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.label}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-6 sm:py-10 md:py-14 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(140,69,255,0.07),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors duration-300"
              >
                <h3 className="text-base font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-10 sm:py-14 md:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.18),transparent_65%)]" />
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 max-w-3xl mx-auto leading-tight">
              Ready to Improve Your Construction Operations?
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/65 mb-8 leading-relaxed">
              PMSpace is built for general contractors who are ready to upgrade from
              fragmented tools and manual workflows to a unified platform that works as
              hard as they do.
            </p>
            <button
              onClick={() => router.push("/construction-software-demo/")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black shadow-[0_0_40px_rgba(140,69,255,0.35)] hover:shadow-[0_0_60px_rgba(140,69,255,0.5)]"
            >
              Book a Demo Today <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GeneralContractorPage;