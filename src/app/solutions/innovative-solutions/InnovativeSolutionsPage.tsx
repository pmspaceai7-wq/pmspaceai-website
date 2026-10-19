// /innovative-solutions/page.tsx

"use client";

import { motion } from "framer-motion";
import { Database, Zap, Rocket, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function InnovativeSolutionsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      title: "Modernize Your Data Foundation",
      icon: Database,
      color: "from-blue-500 to-cyan-400",
      content: {
          subtitle: "Unify Disparate Systems",
          text: "Break down data silos by replacing fragmented, legacy databases with a unified, AI-ready data foundation. We centralize your information to create a single source of truth for the entire enterprise."
        }
    },
    {
      title: "Automate Core Operations",
      icon: Zap,
      color: "from-orange-500 to-red-400",
      content: {
          subtitle: "Intelligent Process Automation",
          text: "Move beyond simple scripts. We implement intelligent automation that learns and adapts to your workflows, handling complex tasks, reducing manual effort, and minimizing operational errors."
        }
    },
    {
      title: "Unlock Intelligent Insights",
      icon: BrainCircuit,
      color: "from-purple-500 to-blue-600",
      content: {
          subtitle: "Data-Driven Decision Making",
          text: "Transform your unified data into a strategic asset. Our AI models analyze patterns and predict outcomes, providing actionable insights that empower your teams to make smarter, faster decisions."
        }
    },
    {
      title: "Accelerate Enterprise Innovation",
      icon: Rocket,
      color: "from-green-500 to-emerald-400",
      content: {
          subtitle: "Build for the Future",
          text: "With a modernized and automated core, your business gains the agility to innovate rapidly. Develop new services, enter new markets, and respond to change with a technology backbone built for speed."
        }
    },
  ];

  return (
    <div className="min-h-fit bg-black">
      <section className="py-8 sm:py-9 md:py-10">
        <div className="container px-4 sm:px-6 mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-400 p-4 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              &quot;Our Promise to Enterprise Automation&quot;
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              Ditch the legacy—embrace AI. Modernize your data, automate your enterprise.
            </p>
          </motion.div>

          {/* Core Advantage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 sm:p-8 mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Transform Your Enterprise Backbone</h2>
            <p className="text-white/70 text-base leading-relaxed">
              Transform the backbone of your business. Replace legacy inefficiencies with modern AI technologies that unify your data, automate operations, and accelerate innovation across the enterprise.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg mr-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-semibold text-white">
                      {feature.title}
                    </h2>
                  </div>
                  
                  <div className="border-l-2 border-white/10 pl-6">
                    <h3 className="text-lg font-medium text-white mb-2">
                      {feature.content.subtitle}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed">
                      {feature.content.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}