// components/OnlineConstructionManagementPage.tsx
"use client";

import { motion } from "framer-motion";
import { Zap, Monitor, Cloud, BarChart3, TrendingUp, Link, MessageCircle, Globe, LayoutDashboard, GanttChart, Eye } from "lucide-react";

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
            The Next Generation of <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Online Construction Management</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Move beyond simple record-keeping to a System of Intelligence that predicts and prevents project challenges.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            Online construction management is plagued by a $1.6 trillion inefficiency problem annually. Space AI solves this by transforming your data from a static archive into a dynamic, forward-looking asset that drives decision-making.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Key Features Section
const KeyFeaturesSection = () => {
  const features = [
    { title: "AI-Powered Project Visibility", description: "Gain a complete, real-time view of your project's health, not just a historical record.", icon: Eye },
    { title: "Proactive Risk Forecasting", description: "Our AI forecasts schedule slippage and cost overruns, allowing you to mitigate risks before they materialize.", icon: TrendingUp },
    { title: "Unified Data Fabric", description: "Break down data silos by integrating all project data—from BIM to field reports—into a single intelligent platform.", icon: Link },
    { title: "Automated Workflows", description: "AI agents automate manual tasks like daily logs and safety compliance, reducing overhead and human error.", icon: Zap },
    { title: "Real-time Field-to-Office Sync", description: "Ensure your entire team is working from the same, up-to-date information, even from remote locations.", icon: Cloud },
    { title: "Predictive Analytics", description: "Move from manual, retrospective reporting to data-driven, predictive insights.", icon: BarChart3 },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Online, But Intelligently Different</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          While legacy platforms provide a digital filing cabinet for your project data, Space AI gives you a dynamic, forward-looking asset that answers the question, &quot;What is likely to happen?&quot;.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <feature.icon className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
              </div>
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
    { feature: "Primary Function", spaceAI: "A System of Intelligence: Interrogates data to predict future outcomes.", competitor: "A System of Record: Archives past events and creates an audit trail." },
    { feature: "Reporting", spaceAI: "Generates actionable, forward-looking insights.", competitor: "Provides retrospective reports and dashboards." },
    { feature: "Risk Management", spaceAI: "Proactive risk mitigation that prevents problems before they occur.", competitor: "Reactive problem-solving that documents issues after they happen." },
    { feature: "Data Model", spaceAI: "Unified AECO Data Fabric, unifying all project data.", competitor: "Common Data Environment (CDE), which can still lead to data silos." },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Online, Not Outdated</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Other Legacy platforms  operate as reactive record-keepers. Space AI is architected to be a proactive intelligence engine, built to win in a future where predictive insight is the ultimate competitive advantage.
        </p>
        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-purple-500/20">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b border-zinc-700 text-purple-400 text-sm md:text-base">
                <th className="p-4">Dimension</th>
                <th className="p-4">Space AI (System of Intelligence)</th>
                <th className="p-4">Other Platforms (System of Record)</th>
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
const OnlineConstructionManagementPage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <KeyFeaturesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ComparisonSection />
    </div>
  );
};

export default OnlineConstructionManagementPage;