

"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle, Zap, BrainCircuit, BarChart, HardHat, FileArchive, ArrowRight } from "lucide-react";
import Link from "next/link";



const comparisonData = [
  {
    feature: "Core Philosophy",
    spaceAI: "System of Intelligence (Predictive & Prescriptive)",
    competitor: "System of Record (Reactive & Archival)",
    spaceAIIcon: BrainCircuit,
    competitorIcon: FileArchive,
  },
  {
    feature: "Risk Management",
    spaceAI: "AI-driven forecasting to predict risks weeks in advance.",
    competitor: "Manual risk registers to log issues as they occur.",
    spaceAIIcon: Zap,
    competitorIcon: HardHat,
  },
  {
    feature: "Schedule Analysis",
    spaceAI: "Predicts critical path delays using machine learning.",
    competitor: "Stores and displays static Gantt charts.",
    spaceAIIcon: Zap,
    competitorIcon: BarChart,
  },
  {
    feature: "Workflow Automation",
    spaceAI: "Agentic AI automates RFI triage, submittals, and resource allocation.",
    competitor: "Manual workflows for document approval and distribution.",
    spaceAIIcon: Zap,
    competitorIcon: BarChart,
  },
   {
    feature: "Data Integration",
    spaceAI: "Unified AECO Data Fabric connects BIM, ERP, and field data for holistic insights.",
    competitor: "Common Data Environment (CDE) primarily for file storage.",
    spaceAIIcon: BrainCircuit,
    competitorIcon: FileArchive,
  },
];

export default function ComparisonPage() {
  return (
    <div className="bg-black text-white">
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-6">
            Space AI vs. Other Platforms
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light mb-8">
            Traditional construction platforms are excellent Systems of Record.
            Space AI is purpose-built as a System of Intelligence — adding
            predictive analytics, AI automation, and prescriptive insights on
            top of the project data you already manage.
          </p>

          <Link href="/construction-software-demo/">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              See AI in Action
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-gray-900/50 border border-white/10 rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 items-center p-4 sm:p-6 bg-gray-800/50 font-semibold text-sm sm:text-base">
            <span className="text-white/80">Dimension</span>
            <span className="text-white text-center">Space AI</span>
            <span className="text-white/80 text-center">Other Platforms</span>
          </div>

          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 items-center p-4 sm:p-6 border-t border-white/10"
            >
              <div className="font-semibold text-white pr-2">
                {item.feature}
              </div>

              {/* Space AI Column */}
              <div className="text-center px-2">
                <div className="flex justify-center mb-2">
                  <item.spaceAIIcon className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-sm text-white/90">{item.spaceAI}</p>
              </div>

             
              <div className="text-center px-2">
                <div className="flex justify-center mb-2">
                  <item.competitorIcon className="w-6 h-6 text-yellow-500" />
                </div>
                <p className="text-sm text-white/60">{item.competitor}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* The Verdict Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Choose Foresight, Not Hindsight
          </h2>
          <p className="text-lg text-white/70 mb-8">
            Traditional platforms excel at compliance, document control, and creating an
            auditable record — they are essential Systems of Record for regulated industries.
            Space AI respects that foundation but adds a predictive intelligence layer that
            legacy systems cannot provide, empowering you to act on future risks, not just
            react to past problems. For teams that need both compliance rigor and AI-native
            capabilities, Space AI delivers both in a unified platform.
          </p>

          <Link
            href="/construction-software-demo/"
            className="group inline-flex items-center px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors"
          >
            Compare Your Options
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Alternative Pages Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
            Looking for Alternatives?
          </h2>
          <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">
            See how Space AI compares to other construction management software. Find the right solution for your team.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "Procore", href: "/alternatives/procore-alternative/" },
              { name: "Asite", href: "/alternatives/asite-alternative/" },
              { name: "PlanGrid", href: "/alternatives/plangrid-alternative/" },
              { name: "Buildertrend", href: "/alternatives/buildertrend-alternative/" },
              { name: "Fieldwire", href: "/alternatives/" },
              { name: "Monday.com", href: "/alternatives/monday-alternative/" },
              { name: "Smartsheet", href: "/alternatives/smartsheet-alternative/" },
              { name: "Primavera P6", href: "/primavera-alternatives/" },
              { name: "Autodesk ACC", href: "/alternatives/autodesk-construction-cloud-alternative/" },
              { name: "ClickUp", href: "/alternatives/clickup/" },
              { name: "Wrike", href: "/alternatives/wrike-alternative/" },
              { name: "CoConstruct", href: "/alternatives/coconstruct-alternative/" },
            ].map((alt) => (
              <Link key={alt.href} href={alt.href}>
                <div className="bg-gray-900/50 border border-white/10 rounded-lg p-4 hover:border-purple-500/50 transition-colors text-center group">
                  <span className="text-white/80 group-hover:text-purple-300 transition-colors text-sm font-medium">
                    {alt.name} Alternative
                  </span>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/alternatives/">
              <button className="bg-purple-500/20 border border-purple-500/30 text-purple-300 font-medium px-6 py-2 rounded-lg hover:bg-purple-500/30 transition-colors inline-flex items-center gap-2">
                View All Comparisons
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
