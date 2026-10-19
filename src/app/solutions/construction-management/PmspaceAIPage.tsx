"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Users, Lightbulb, Clock, DollarSign, ShieldCheck, HardHat, FileText, Link, Briefcase, Factory } from "lucide-react";

// Component for the hero section with a slogan and main message
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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Space AI</span> - The Intelligent Procore Alternative
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            Revolutionizing construction project management with intelligent automation and seamless collaboration for the modern construction industry.
          </p>
          <div className="mt-10">
            <button className="bg-white/10 text-white font-semibold py-3 px-8 rounded-full border border-purple-500/50 hover:bg-white/20 transition-colors duration-300">
              Transform Your Construction Management Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Component for the features section
const FeatureSection = () => {
  const features = [
    { title: "Intelligent Project Analytics", description: "Advanced AI algorithms provide predictive insights, risk assessment, and performance optimization recommendations for superior project outcomes.", icon: Layers },
    { title: "Smart Document Management", description: "AI-powered document organisation and retrieval system that automatically categorises, tags, and makes construction documents searchable.", icon: FileText },
    { title: "Seamless Collaboration Software", description: "Real-time collaboration tools with intelligent notifications, automated workflow management, and integrated communication channels.", icon: Users },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">AI-Powered Core Features</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for the comprehensive solutions section
const ComprehensiveSolutions = () => {
  const solutions = [
    { title: "Project Planning & Scheduling", description: "AI-assisted project planning with intelligent scheduling algorithms that optimise timelines, resource allocation, and critical path analysis.", icon: Clock },
    { title: "Resource Management", description: "Comprehensive resource tracking and management system with predictive analytics for equipment, materials, and workforce optimisation.", icon: HardHat },
    { title: "Quality Control & Safety", description: "Integrated quality assurance and safety management tools with AI-powered risk detection and compliance monitoring.", icon: ShieldCheck },
    { title: "Financial Management", description: "Advanced cost tracking, budget management, and financial reporting with AI-driven cost prediction and variance analysis.", icon: DollarSign },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Comprehensive Construction Management Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <solution.icon className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{solution.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for the industry-specific solutions section
const IndustrySolutions = () => {
  const industries = [
    { title: "Design and Build Firms", description: "Integrated design-build workflow management with seamless collaboration between architects, engineers, and construction teams throughout the entire project lifecycle.", icon: Link },
    { title: "Industrial Construction Management", description: "Specialised tools for complex industrial projects including manufacturing facilities, power plants, and infrastructure development.", icon: Factory },
    { title: "Commercial Construction", description: "Comprehensive solutions for office buildings, retail spaces, and mixed-use developments with integrated tenant coordination and phased delivery management.", icon: Briefcase },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Industry-Specific Solutions</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-8 text-center shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                <industry.icon size={32} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold">{industry.title}</h3>
              <p className="mt-4 text-white/70">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Component for the key performance metrics
const MetricsSection = () => {
  const metrics = [
    { value: "45%", title: "Project Efficiency Increase", description: "Average improvement in project completion times using Space AI's intelligent scheduling and resource optimisation." },
    { value: "30%", title: "Cost Reduction", description: "Typical cost savings achieved through AI-powered predictive analytics and waste reduction strategies." },
    { value: "25%", title: "Communication Enhancement", description: "Improvement in team communication and collaboration efficiency with integrated messaging and notification systems." },
  ];

  return (
    <section className="py-8 md:py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Platform Performance Metrics</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">{metric.value}</h3>
              <p className="text-xl font-semibold mt-2">{metric.title}</p>
              <p className="mt-4 text-white/70 max-w-xs mx-auto">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const SpaceAIPage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <FeatureSection />
      <ComprehensiveSolutions />
      <IndustrySolutions />
      <MetricsSection />
    </div>
  );
};

export default SpaceAIPage;