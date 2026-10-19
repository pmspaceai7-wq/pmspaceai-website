// components/GCConstructionSoftwarePage.tsx
"use client";

import { motion } from "framer-motion";
import { HardHat, Handshake, DollarSign, Clock, CheckCircle, BarChart3, TrendingUp, LayoutDashboard, GanttChart } from "lucide-react";

// Hero Section
const HeroSection = () => {
  return (
    <section className="py-10 md:py-16 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Best Construction Software for General Contractors
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">Master Predictability, Protect Profitability</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            For general contractors, the job is to manage risk, timelines, and budgets. Space AI gives you a proactive system to do it with intelligence.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            While other platforms focus on documenting what has happened, our platform uses AI to predict the future, helping you gain a competitive edge and build your reputation on successful project delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// GC-Specific Capabilities
const GCCapabilitiesSection = () => {
  const capabilities = [
    { title: "AI-Powered Scheduling", description: "Dynamically optimize trade sequencing and adjust timelines with AI-driven insights to prevent project delays.", icon: GanttChart },
    { title: "Predictive Cost Management", description: "Forecast cost overruns and budget deviations weeks in advance, protecting your margins.", icon: DollarSign },
    { title: "Seamless Subcontractor Coordination", description: "Automated workflows and real-time communication tools ensure all parties are aligned and working from the latest information.", icon: Handshake },
    { title: "Automated Risk Mitigation", description: "Our platform identifies potential risks like material shortages or scheduling conflicts and provides prescriptive solutions before they become problems.", icon: TrendingUp },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Tools Built for the GC Playbook</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          From bid to closeout, Space AI is the only platform that gives general contractors the control, visibility, and intelligence needed to command projects instead of just reacting to them.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-teal-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-500/20 flex items-center justify-center">
                <capability.icon size={24} className="text-teal-400" />
              </div>
              <h4 className="text-xl font-semibold">{capability.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison with Common GC Tools
const ComparisonSection = () => {
  const comparisonData = [
    { feature: "Core Philosophy", spaceAI: "A proactive System of Intelligence built to manage risk.", competitor: "A reactive Common Data Environment (CDE) built for documentation." },
    { feature: "Project Control", spaceAI: "Gives GCs total control over project outcomes by providing predictive insights and automated alerts.", competitor: "Relies on manual daily reports and data entry to track progress." },
    { feature: "Decision Making", spaceAI: "Provides AI-powered recommendations for complex problems.", competitor: "Leaves GCs to interpret data and make decisions based on past events." },
    { feature: "Return on Investment (ROI)", spaceAI: "Directly improves profitability by preventing delays and budget overruns.", competitor: "Indirectly improves efficiency by streamlining document workflows." },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Stop Managing Chaos. Start Commanding Projects.</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Your choice of software determines whether you lead the project or just respond to it. Space AI is the strategic tool that helps you stay ahead of the curve.
        </p>
        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-purple-500/20">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b border-zinc-700 text-purple-400 text-sm md:text-base">
                <th className="p-4">Dimension</th>
                <th className="p-4">Space AI (Predictive)</th>
                <th className="p-4">Traditional Software (Reactive)</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-zinc-800 last:border-0">
                  <td className="p-4 font-semibold text-white">{row.feature}</td>
                  <td className="p-4 text-white/70">{row.spaceAI}</td>
                  <td className="p-4 text-white/70">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Main page component
const GCConstructionSoftwarePage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500/50 via-green-500/50 to-transparent"></div>
      <GCCapabilitiesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500/50 via-green-500/50 to-transparent"></div>
      <ComparisonSection />
    </div>
  );
};

export default GCConstructionSoftwarePage;