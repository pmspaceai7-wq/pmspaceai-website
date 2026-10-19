// components/AllInOneConstructionSoftwarePage.tsx
"use client";

import { motion } from "framer-motion";
import { Wrench, Package, Briefcase, Handshake, BarChart3, Repeat2, LayoutDashboard, Cloud, QrCode } from "lucide-react";

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
            The True &quot;All-in-One&quot; Construction Software
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">One Platform. One Source of Intelligence.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            A comprehensive solution that unifies all your workflows, from pre-construction to closeout, powered by a single AI data core.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            While other platforms just offer a collection of features, Space AI provides a truly integrated experience where every tool is connected to a central intelligence layer, allowing for unparalleled automation and insights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// All-in-One Capabilities Section
const AllInOneCapabilitiesSection = () => {
  const capabilities = [
    { title: "Unified Project & Financial Data", description: "Connect all your project, budget, and financial data in a single view, eliminating the need for fragmented spreadsheets.", icon: Briefcase },
    { title: "Real-time Field-to-Office Sync", description: "Seamlessly connect your on-site teams with the office through a single, easy-to-use mobile platform.", icon: Cloud },
    { title: "AI-Powered Predictive Insights", description: "Every piece of data, from daily logs to RFIs, is used by our AI to provide forward-looking insights that prevent problems before they occur.", icon: BarChart3 },
    { title: "Integrated Collaboration Tools", description: "Centralize all communication—from messages to change orders—in one platform, providing a single source of truth for your entire team.", icon: Handshake },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">The Difference is Intelligence</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          An &quot;all-in-one&quot; solution should do more than just put features in one place. It should connect them with an underlying intelligence that drives your business forward.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <capability.icon size={24} className="text-blue-400" />
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

// "The Old Way vs The Space AI Way" Section
const TheOldWaySection = () => {
  const comparisonData = [
    { title: "The Old Way: Siloed Tools", description: "Using separate apps for financials, scheduling, and communication creates data silos, manual double-entry, and a lack of real-time visibility.", icon: Wrench },
    { title: "The Space AI Way: One Intelligent Platform", description: "Our single, all-in-one platform uses AI to connect every function, providing a unified source of truth and automated insights that save you time and money.", icon: Package },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">The Shift from &quot;All-in-One&quot; to &quot;All-in-Intelligence&quot;</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <item.icon className="text-purple-400" size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-white/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const AllInOneConstructionSoftwarePage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent"></div>
      <AllInOneCapabilitiesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-transparent"></div>
      <TheOldWaySection />
    </div>
  );
};

export default AllInOneConstructionSoftwarePage;