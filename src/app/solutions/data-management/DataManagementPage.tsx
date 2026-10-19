"use client";

import { motion } from "framer-motion";
import { Database, Container, ScanText, BrainCircuit, Zap, Rocket } from "lucide-react";
import Link from "next/link";

export default function DataManagementPage() {
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
      title: "Unified Data Hub",
      icon: Container,
      color: "from-blue-500 to-cyan-400",
      content: {
          subtitle: "Centralize Your Project Data",
          text: "Aggregate all project information—from structured database entries to unstructured documents, emails, and images—into a single, accessible source of truth. Eliminate data silos and ensure consistency across your teams."
        }
    },
    {
      title: "Automated Data Capture & Transcription",
      icon: ScanText,
      color: "from-purple-500 to-blue-600",
      content: {
        subtitle: "Effortless Information Ingestion",
        text: "Leverage AI-powered tools to automatically capture and transcribe data from various sources, including handwritten notes, voice recordings, and complex PDF documents. Drastically reduce manual data entry and minimize human error."
      }
    },
    {
      title: "Intelligent Transformation Engine",
      icon: BrainCircuit,
      color: "from-green-500 to-emerald-400",
      content: {
        subtitle: "From Raw Data to Actionable Insights",
        text: "Our platform doesn't just store data; it understands it. We transform raw, unstructured information into standardized, structured formats, making it ready for analysis, automation, and integration with your existing workflows."
      }
    },
    {
      title: "Seamless Automation & Integration",
      icon: Zap,
      color: "from-orange-500 to-red-400",
      content: {
        subtitle: "Power Your Enterprise Workflows",
        text: "Enable seamless automation and data-driven decision-making across your enterprise. Integrate our structured data output with your favorite tools, from project management software to BI platforms, creating a fully connected ecosystem."
      }
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-8 sm:py-9 md:py-12">
        <div className="container px-4 sm:px-6 mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-xl">
                <Database className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 pb-3">
              Intelligent Data Management
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              The core of SPACE AI, engineered to streamline structured and unstructured data, transforming raw information into actionable insights for the AECO industry.
            </p>
          </motion.div>

          {/* Core Advantage Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 sm:p-8 mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">The SPACE AI Data Advantage</h2>
            <p className="text-white/70 text-base leading-relaxed">
              Our Intelligent Data Management platform serves as the foundational layer for our entire suite of solutions. By first mastering your data—capturing, cleaning, and structuring it—we unlock the full potential of AI-powered predictive analytics, workflow automation, and real-time collaboration. This data-first approach ensures accuracy, drives efficiency, and provides the reliable insights you need to keep projects on track.
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