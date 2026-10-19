// components/EnterprisePMSoftwarePage.tsx
"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Cloud, Link, LayoutDashboard, BarChart3, TrendingUp, Briefcase } from "lucide-react";

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
            Enterprise Project Management Software
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Manage Your Portfolio with Predictive Intelligence</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            A platform engineered to handle the scale of enterprise-level projects and deliver strategic insights that ensure on-time, on-budget delivery.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            While legacy project management tools focus on managing tasks, Space AI provides a single source of truth that anticipates risks, automates workflows, and protects your bottom line.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Core Capabilities Section - Enterprise Focus
const CoreCapabilitiesSection = () => {
  const capabilities = [
    { title: "Portfolio-Level Predictive Analytics", description: "Gain a unified view of your entire project portfolio to forecast risks and optimize resource allocation across all projects.", icon: Briefcase },
    { title: "Scalable AI Infrastructure", description: "Our platform's architecture is built to handle the immense data from large enterprises, ensuring seamless performance and continuous insights.", icon: Factory },
    { title: "Enterprise-Grade Security", description: "Secure your data with a private and secure AI approach that meets the rigorous demands of enterprise IT.", icon: ShieldCheck },
    { title: "Unified Data Fabric", description: "Integrate with all your existing systems—BIM, ERP, and CRM—to create a single, intelligent source of truth and eliminate data silos.", icon: Link },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Move Beyond Traditional PM Tools</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Enterprise leaders need a strategic tool that goes beyond managing day-to-day tasks. Space AI provides the intelligence to make high-level decisions that protect razor-thin margins and ensure project outcomes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <capability.icon size={24} className="text-purple-400" />
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

// Comparison Section
const ComparisonSection = () => {
  const comparisonData = [
    { feature: "Primary Value", spaceAI: "Predicting and preventing financial and schedule risks across a portfolio.", competitor: "Centralizing and archiving tasks and documents." },
    { feature: "Data Model", spaceAI: "An Intelligent Data Fabric that unifies siloed systems for cross-project insights.", competitor: "A collection of features that may or may not integrate seamlessly." },
    { feature: "Analytics", spaceAI: "AI-driven predictive analytics that forecast outcomes.", competitor: "Retrospective dashboards and reports that show what has already happened." },
    { feature: "Scalability", spaceAI: "Seamlessly scales with unlimited projects and users, with no degradation in performance.", competitor: "Often has a long, time-consuming setup for large-scale deployments." },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Outcompete Legacy PM Software</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Traditional project management tools are built for a world of static data. Space AI is built for a future where predictive insight is the ultimate competitive advantage.
        </p>
        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-blue-500/20">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b border-zinc-700 text-blue-400 text-sm md:text-base">
                <th className="p-4">Dimension</th>
                <th className="p-4">Space AI (System of Intelligence)</th>
                <th className="p-4">Other Enterprise PM Platforms</th>
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
const EnterprisePMSoftwarePage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <CoreCapabilitiesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ComparisonSection />
    </div>
  );
};

export default EnterprisePMSoftwarePage;