// components/BuildingPMPage.tsx
"use client";

import { motion } from "framer-motion";
import { Building, Factory, Clock, DollarSign, ShieldCheck, HardHat, FileText, Globe, Link, Briefcase, Wrench, CheckCircle, Eye, TabletSmartphone, GanttChart, LayoutDashboard } from "lucide-react";

// Hero Section - Page 1
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
            Project Management for Building Construction
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">From Reactive to Predictive Management</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Our platform provides a single source of intelligence that helps you manage building projects from feasibility to final handover with unparalleled predictability and control.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            The five stages of a construction project—design, preconstruction, procurement, execution, and closeout—are interconnected. Space AI provides the intelligence to ensure every stage flows seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Core Capabilities Section - Page 2
const CoreCapabilitiesSection = () => {
  const coreCapabilities = [
    { title: "AI-Powered Scheduling", description: "Dynamically optimize trade sequencing and adjust timelines with AI-driven insights to prevent project delays.", icon: Clock },
    { title: "Predictive Cost Management", description: "Forecast budget deviations and cost overruns to protect your margins from day one.", icon: DollarSign },
    { title: "Automated Safety & Quality", description: "Use AI to automate compliance monitoring and identify potential safety hazards before they become incidents.", icon: ShieldCheck },
    { title: "Unified Data Fabric", description: "Integrate BIM, ERP, and field data to create a single, intelligent source of truth and eliminate data silos.", icon: Link },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Intelligent Project Management for Every Stage</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          From the initial design phase to final closeout, Space AI provides the tools and intelligence needed to ensure every stage of your building project is a success.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreCapabilities.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <feature.icon size={24} className="text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Phase-by-Phase Solutions
const PhaseSolutionsSection = () => {
  const phases = [
    { title: "Pre-Construction", description: "Use AI to conduct feasibility studies, develop accurate budgets, and plan resource allocation before breaking ground.", icon: Briefcase },
    { title: "Project Execution", description: "Monitor daily progress, coordinate between trades, and maintain strict safety protocols with real-time, data-driven insights.", icon: HardHat },
    { title: "Post-Construction", description: "Automate punch lists, verify completion, and compile final documentation for a seamless handover to the client.", icon: CheckCircle },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Solutions for the Entire Project Lifecycle</h2>
        <div className="grid lg:grid-cols-3 gap-12">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <phase.icon className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                  <p className="mt-2 text-white/70 text-sm">{phase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const BuildingPMPage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <CoreCapabilitiesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <PhaseSolutionsSection />
    </div>
  );
};

export default BuildingPMPage;