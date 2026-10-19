// components/BudgetTrackingForContractorsPage.tsx
"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  HardHat,
  ShieldCheck,
  BarChart3,
  Clock,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="py-14 md:py-20 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Construction Financial Management · 2026 Guide
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          The Ultimate Guide to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Budget Tracking for Contractors
          </span>
        </h1>
        <p className="mt-6 text-lg text-white/70 leading-relaxed">
          A project can look perfectly profitable on paper and bleed cash in reality. The estimate
          was solid, the bids came in right, and somewhere between breaking ground and final
          billing, the margin quietly disappeared. Untracked change orders, labor that ran long,
          materials purchased outside the budget — none of it catastrophic on its own, all of it
          devastating in combination.
        </p>
        <p className="mt-4 text-lg text-white/70 leading-relaxed">
          Budget tracking for contractors is not just about knowing where your money went. It is
          about knowing where it is going while you still have time to act. This guide covers the
          anatomy of a contractor budget, the best practices that separate profitable firms from
          struggling ones, and the tools that make real-time financial visibility achievable for
          teams of any size.
        </p>
      </motion.div>
    </div>
  </section>
);

// ─── 3 Parts of a Construction Budget ────────────────────────────────────────
const ThreePartsSection = () => {
  const parts = [
    {
      label: "Hard Costs",
      sublabel: "Direct Costs",
      icon: HardHat,
      color: "teal",
      percentage: "60–80% of total project value",
      description:
        "Hard costs include all direct project expenses such as labor, materials, and equipment. These are the costs physically tied to building the project.",
      items: [
        "Wages and subcontractor payments",
        "Concrete, steel, lumber, and finishes",
        "Heavy equipment rental",
        "Site utilities and temporary works",
      ],
      warning:
        "If you fail to accurately track construction costs at this level, your margin evaporates quickly.",
    },
    {
      label: "Soft Costs",
      sublabel: "Indirect Costs",
      icon: BarChart3,
      color: "purple",
      percentage: "Often underestimated by contractors",
      description:
        "Soft costs are indirect expenses required to complete the project but not directly tied to physical construction.",
      items: [
        "Permits and licensing fees",
        "Architectural and engineering fees",
        "Insurance and bonding",
        "Project management salaries",
        "Software and administrative expenses",
      ],
      warning:
        "Many contractors underestimate soft costs or treat them as fixed. In reality, they fluctuate — especially if a project runs longer than planned.",
    },
    {
      label: "Contingency Funds",
      sublabel: "Reserve Buffers",
      icon: ShieldCheck,
      color: "green",
      percentage: "Typically 5–15% of total budget",
      description:
        "Contingency funds are reserved buffers designed to absorb unexpected costs. No project is immune to surprises.",
      items: [
        "Material price spikes",
        "Unforeseen site conditions",
        "Weather delays",
        "Minor scope changes",
      ],
      warning:
        "Without contingency planning, small deviations turn into full-scale crises.",
    },
  ];

  const colorMap: Record<string, { border: string; bg: string; text: string; badge: string }> = {
    teal: {
      border: "border-teal-500/30",
      bg: "bg-teal-500/10",
      text: "text-teal-400",
      badge: "bg-teal-500/20 text-teal-300",
    },
    purple: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      badge: "bg-purple-500/20 text-purple-300",
    },
    green: {
      border: "border-green-500/30",
      bg: "bg-green-500/10",
      text: "text-green-400",
      badge: "bg-green-500/20 text-green-300",
    },
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What are the 3 Parts of a Construction Budget?
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Every construction budget consists of three core components: Hard Costs, Soft Costs,
            and Contingencies. Together, they define the full financial scope of a project.
            Understanding these parts is foundational to strong construction budget management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {parts.map((part, index) => {
            const c = colorMap[part.color];
            return (
              <motion.div
                key={index}
                className={`rounded-xl border ${c.border} bg-zinc-900 p-6 flex flex-col gap-4`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`w-11 h-11 rounded-lg ${c.bg} flex items-center justify-center`}>
                  <part.icon className={c.text} size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{part.label}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${c.badge} mt-1 inline-block`}>
                    {part.sublabel}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{part.description}</p>
                <ul className="space-y-1.5">
                  {part.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                      <CheckCircle2 size={14} className={`${c.text} mt-0.5 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className={`rounded-lg ${c.bg} px-3 py-2 border ${c.border}`}>
                  <p className={`text-xs font-semibold ${c.text} mb-1`}>{part.percentage}</p>
                  <p className="text-xs text-white/50 italic">{part.warning}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

// ─── How to Track a Budget ────────────────────────────────────────────────────
const HowToTrackSection = () => {
  const practices = [
    {
      step: "01",
      title: "Implement Job Costing",
      icon: DollarSign,
      summary:
        "Assign every project expense to a specific cost code that maps back to a line item in the original estimate.",
      detail:
        "Job costing answers questions that aggregate tracking cannot: which trade is running over, where the labor variance is concentrated, whether a material overage is isolated or systemic. Those answers determine whether you have a manageable variance or a structural problem.",
    },
    {
      step: "02",
      title: "Track in Real Time",
      icon: Clock,
      summary:
        "Monitor actuals against the budget continuously, not at month-end.",
      detail:
        "End-of-month reports are too late for construction cash flow management. By the time a monthly reconciliation surfaces a cost overrun, the conditions that caused it have been in place for weeks. Real-time tracking is the operational difference between managing a project and reporting on one after the fact.",
    },
    {
      step: "03",
      title: "Manage Change Orders Immediately",
      icon: AlertTriangle,
      summary:
        "Document and price every scope change before work begins — no verbal approvals.",
      detail:
        "A disciplined change order process treats every scope change as a budget event. No verbal approvals. Every addition or deletion is documented, priced, and approved in writing — and the budget updated immediately. Firms that manage this consistently protect their margins. Firms that do not are perpetually surprised at closeout.",
    },
    {
      step: "04",
      title: "Look Ahead, Not Just Back",
      icon: BarChart3,
      summary:
        "Use forecasting tools to project where costs are trending, not just where they have been.",
      detail:
        "Budget tracking tells you where your money has gone. Forecasting tells you where it is going. The combination of both is what gives a project manager genuine financial control — catching a cost trajectory problem weeks before it becomes a closeout crisis, when there is still time to adjust procurement, reallocate resources, or renegotiate subcontractor terms.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Do You Track a Construction Budget Effectively?
          </h2>
          <p className="text-white/60 text-lg mb-12">
            Effective construction budget tracking requires four core practices working together.
          </p>
        </motion.div>

        <div className="space-y-6">
          {practices.map((p, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-[80px_1fr] gap-4 bg-zinc-900 rounded-xl border border-white/10 p-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-black text-white/10">{p.step}</span>
                <div className="w-10 h-10 rounded-full bg-teal-500/15 flex items-center justify-center">
                  <p.icon className="text-teal-400" size={18} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-teal-300 text-sm font-medium mb-3">{p.summary}</p>
                <p className="text-white/60 text-sm leading-relaxed">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Best Way to Track ────────────────────────────────────────────────────────
const BestWaySection = () => {
  const spreadsheetFails = [
    "Require manual updates",
    "Create version conflicts",
    "Lack real-time visibility",
    "Separate scheduling from financial data",
    "Make forecasting nearly impossible",
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is the Best Way to Track Construction Costs?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            The best way to track construction costs is to replace manual spreadsheets with
            integrated construction budget tracking software that connects estimating, purchasing,
            billing, and change management into one live system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Spreadsheet failures */}
          <motion.div
            className="bg-zinc-900 rounded-xl border border-red-500/20 p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-1 text-red-400">Spreadsheets Fail Because</h3>
            <p className="text-white/50 text-sm mb-4">
              Manual tracking creates the illusion of control while hiding real-time variance.
            </p>
            <ul className="space-y-2.5">
              {spreadsheetFails.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <XCircle size={15} className="text-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* PMSpace advantage */}
          <motion.div
            className="bg-zinc-900 rounded-xl border border-teal-500/20 p-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-1 text-teal-400">PMSpace Eliminates These Limitations</h3>
            <p className="text-white/50 text-sm mb-4">
              A unified financial platform where every dollar is tracked from estimate to invoice.
            </p>
            <ul className="space-y-3">
              {[
                "Purchase orders match against budget line items automatically",
                "Subcontractor billings checked against contracted scope before approval",
                "Change orders update the budget the moment they are signed",
                "Every stakeholder gets a live view — no manual compilation required",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckCircle2 size={15} className="text-teal-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-xs text-white/40 italic">
                For small builders running finances through disconnected spreadsheets and email
                threads, PMSpace is not a marginal improvement — it is a complete transformation in
                financial visibility and control.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image placeholder */}
        <div className="mt-10 rounded-xl border border-white/10 bg-zinc-900 p-6 text-center text-white/30 text-sm italic">
          [Image Placeholder] construction-budget-tracking-software-live-dashboard.jpg — Live
          budget vs actual cost tracking dashboard inside PMSpace construction budget tracking
          software
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQSection = () => {
  const faqs = [
    {
      question: "How Do You Create a Budget for a Construction Company?",
      answer:
        "Start with historical data from completed projects, gather accurate subcontractor bids, fully account for overhead and soft costs, and establish a contingency baseline before any contract is signed. The most reliable construction budgets are built from the ground up using real job costing data from previous projects — not industry averages or rule-of-thumb multipliers. Pull your actual labor productivity rates, material unit costs, and subcontractor performance data from past jobs of similar scope and type. Layer in current subcontractor quotes, your full overhead allocation, and a contingency reserve calibrated to the project's complexity. Lock in the budget at contract execution and treat every deviation from it as a formal change event from day one.",
    },
    {
      question: "Why Do Construction Budgets Fail?",
      answer:
        "Construction budgets fail for three primary reasons: inaccurate initial estimates built on assumptions rather than data, poor cash flow planning that ignores when costs actually hit, and disconnected tracking methods that prevent real-time visibility into variances. The cash flow dimension is particularly underappreciated. Even a project that finishes on budget can create serious financial strain if costs front-load while billings lag — the pattern described by the cost \"S-curve.\" Firms that track budget versus estimate without also monitoring monthly cash position are managing only half the financial picture.",
    },
    {
      question: "Do Small Contractors Need Budget Tracking Software?",
      answer:
        "Yes — small contractors arguably need budget tracking software more than large firms. Thin margins leave almost no buffer to absorb the tracking errors and undetected variances that software prevents. A 3% cost overrun that a large GC absorbs easily can wipe out the entire profit on a small builder's project. Large enterprises have project controls teams whose full-time job is monitoring project finances. Small contractors typically have a project manager and a bookkeeper — both already stretched. Construction budget tracking software extends that team's capacity without adding headcount, giving smaller firms the financial monitoring capability of a much larger operation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions About Contractor Budgets
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Common questions from contractors building their first systematic approach to budget
            tracking.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-white/10 bg-zinc-900 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-base md:text-lg font-semibold">{faq.question}</h3>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-teal-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-white/65 text-sm leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CTA ──────────────────────────────────────────────────────────────────────
const CTASection = () => (
  <section className="py-16 bg-zinc-950 text-white border-t border-white/10">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop Reporting on Projects.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            Start Managing Them.
          </span>
        </h2>
        <p className="text-white/60 text-lg mb-8">
          PMSpace gives small construction firms the real-time financial visibility and budget
          control that large GCs pay entire departments to maintain.
        </p>
        <a
          href="/construction-software-demo/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 text-black font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          See How It Works <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const BudgetTrackingForContractorsPage = () => (
  <div className="bg-black overflow-x-hidden">
    <HeroSection />
    <div className="h-px w-full bg-gradient-to-r from-green-500/40 via-teal-500/40 to-transparent" />
    <ThreePartsSection />
    <div className="h-px w-full bg-gradient-to-r from-green-500/40 via-teal-500/40 to-transparent" />
    <HowToTrackSection />
    <div className="h-px w-full bg-gradient-to-r from-green-500/40 via-teal-500/40 to-transparent" />
    <BestWaySection />
    <div className="h-px w-full bg-gradient-to-r from-green-500/40 via-teal-500/40 to-transparent" />
    <FAQSection />
    <CTASection />
  </div>
);

export default BudgetTrackingForContractorsPage;