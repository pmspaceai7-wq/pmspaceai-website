"use client";

import { motion } from "framer-motion";
import { Wrench, CheckCircle, TrendingDown, Clock, ShieldCheck, DollarSign, Cloud, Repeat2, User, Landmark, Package, GanttChart, LayoutDashboard, Handshake, Monitor, Box, FileText, BarChart3, Waypoints, Zap, RefreshCcw, UserCheck } from "lucide-react";

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
            AI-Powered Construction Solutions for Modern Project Management
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Revolutionize Your Construction Operations with Intelligent Automation
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            Space AI transforms construction project management with cutting-edge artificial intelligence that predicts delays, prevents cost overruns, and optimizes resource utilization across your entire project portfolio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Equipment Checkout App Section
const EquipmentAppSection = () => {
  const features = [
    { title: "Real-time Asset Tracking", description: "Monitor equipment location, usage, and availability across all projects", icon: Wrench },
    { title: "Predictive Maintenance Alerts", description: "AI algorithms predict maintenance needs before breakdowns occur", icon: Clock },
    { title: "Automated Checkout/Check-in", description: "Mobile-optimized interface for field workers", icon: CheckCircle },
  ];

  const metrics = [
    { value: "50%", title: "reduction in equipment idle time" },
    { value: "30%", title: "decrease in maintenance costs" },
    { value: "95%", title: "improvement in equipment accountability" },
    { value: "25%", title: "increase in overall project efficiency" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Equipment Checkout App - Smart Asset Management</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our Equipment Checkout App revolutionizes how construction teams manage tools, machinery, and assets across multiple job sites. This intelligent system, built specifically for the construction industry, reduces equipment downtime and prevents costly delays.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Results You Can Expect</h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-blue-500/20"
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">{metric.value}</p>
              <p className="mt-2 text-lg font-semibold">{metric.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inventory Management Section
const InventorySection = () => {
  const features = [
    { title: "Demand Forecasting", description: "Predict material needs weeks in advance using project schedules and historical data", icon: Cloud },
    { title: "Automated Reordering", description: "Smart procurement triggers based on consumption patterns", icon: Monitor },
    { title: "Waste Reduction Analytics", description: "Identify and eliminate material waste across projects", icon: Repeat2 },
    { title: "Supplier Performance Tracking", description: "Monitor delivery reliability and quality metrics", icon: User },
  ];

  const metrics = [
    { value: "40%", title: "Reduction in Material Waste" },
    { value: "60%", title: "Improvement in Material Availability" },
    { value: "25%", title: "Decrease in Procurement Costs" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Inventory Management Dashboard - Intelligent Materials Control</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our dashboard uses machine learning to optimize procurement, reduce waste, and ensure materials are always available when needed.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-orange-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
                <feature.icon size={24} className="text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-orange-500/20"
            >
              <p className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400">{metric.value}</p>
              <p className="mt-2 text-lg font-semibold">{metric.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Section (Space AI vs Other Platforms)
const ComparisonSection = () => {
  const comparisonData = [
    { feature: "AI Scope", spaceAI: "Full project intelligence", other: "Schedule optimization only" },
    { feature: "Industry Focus", spaceAI: "Purpose-built for construction", other: "Generic project management" },
    { feature: "Risk Management", spaceAI: "Predictive risk detection & mitigation", other: "Limited risk visibility" },
    { feature: "Real-time Intelligence", spaceAI: "Live project insights & alerts", other: "Batch processing updates" },
    { feature: "Equipment Management", spaceAI: "Integrated asset tracking", other: "No equipment management" },
    { feature: "BIM Integration", spaceAI: "50+ native BIM/CAD connections", other: "Limited BIM connectivity" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">The Superior Alternative</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          While other platforms may have a narrow focus, Space AI delivers comprehensive construction intelligence that addresses the full spectrum of construction challenges.
        </p>
        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-purple-500/20">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b border-zinc-700 text-purple-400 text-sm md:text-base">
                <th className="p-4">Feature</th>
                <th className="p-4">Space AI</th>
                <th className="p-4">Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-zinc-800 last:border-0">
                  <td className="p-4 font-semibold text-white">{row.feature}</td>
                  <td className="p-4 text-white/70">{row.spaceAI}</td>
                  <td className="p-4 text-white/70">{row.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// AI Construction Risk Management Section
const RiskManagementSection = () => {
  const risks = [
    { title: "Schedule Risks", description: "Weather delays, resource conflicts, dependency bottlenecks", icon: GanttChart },
    { title: "Budget Risks", description: "Cost overrun indicators, change order impacts, material price volatility", icon: DollarSign },
    { title: "Safety Risks", description: "Hazard detection, compliance violations, accident probability", icon: ShieldCheck },
    { title: "Quality Risks", description: "Defect patterns, rework probability, specification deviations", icon: CheckCircle },
    { title: "Supplier Risks", description: "Delivery delays, performance issues, capacity constraints", icon: Package },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">AI Construction Risk Management</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our AI Construction Risk Management system identifies potential issues weeks before they impact your project timeline or budget, giving you the power to take preventive action.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {risks.map((risk, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-red-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <risk.icon className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{risk.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{risk.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const MainContent = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <EquipmentAppSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <InventorySection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ComparisonSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <RiskManagementSection />
    </div>
  );
};

export default MainContent;