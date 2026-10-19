// components/BestConstructionSoftwarePage.tsx
"use client";

import { motion } from "framer-motion";
import { DollarSign, HardHat, ShieldCheck, TrendingDown, Factory, Wrench, BarChart3, Cloud, LayoutDashboard, Lightbulb } from "lucide-react";

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
            The Best Software for a Modern Construction Business
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Transforming Waste into Profit with AI</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            The AECO industry is losing an estimated $1.6 trillion annually to waste and inefficiency. We are the definitive solution that turns that tide with a System of Intelligence.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            A System of Intelligence interrogates data to proactively shape future outcomes, while legacy software only archives past events. This is the fundamental difference that makes Space AI the best choice for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Core Pillars Section
const CorePillarsSection = () => {
  const pillars = [
    { title: "Predictive Project Intelligence", description: "Demystify complex projects by forecasting schedule slippage and cost overruns before they happen.", icon: TrendingDown },
    { title: "Agentic AI & Autonomous Operations", description: "Automate workflows and daily reports, reducing manual overhead and human error.", icon: Wrench },
    { title: "The Unified AECO Data Fabric", description: "Break down data silos by creating a single, connected source of truth for all your project data.", icon: LayoutDashboard },
    { title: "Tangible ROI of AI", description: "Quantify the financial impact of our platform with clear business cases, case studies, and ROI calculators.", icon: DollarSign },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Built on the Pillars of Intelligence</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          We believe the best construction software is not a collection of features, but a cohesive platform built on core principles that solve the industry&apos;s most pressing problems.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <pillar.icon size={24} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold">{pillar.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final Pitch Section
const FinalPitchSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Think Intelligent. Think Future. Think Space AI.</h2>
        <p className="max-w-3xl mx-auto text-lg text-white/70 mb-8">
          The best software for a construction business isn&apos;t one that just helps you manage projects. It&apos;s one that helps you ensure project outcomes. We are the only platform conceived and built from the ground up to be a true System of Intelligence for the AECO industry.
        </p>
      </div>
    </section>
  );
};

// Main page component
const BestConstructionSoftwarePage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <CorePillarsSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <FinalPitchSection />
    </div>
  );
};

export default BestConstructionSoftwarePage;
