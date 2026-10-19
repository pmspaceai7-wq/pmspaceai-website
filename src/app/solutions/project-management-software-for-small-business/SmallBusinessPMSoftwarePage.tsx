// components/SmallBusinessPMSoftwarePage.tsx
"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, MessageCircle, BarChart3, TrendingUp, Handshake, LayoutDashboard, GanttChart, Wrench, Repeat2 } from "lucide-react";

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
            Project Management Software for Small Business
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">Achieve Enterprise-Level Results, Affordably</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            A simple, intuitive platform that gives your small business the power of AI to manage projects with confidence and predictability.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            While other tools are designed for general purpose project management, Space AI is built specifically for the unique challenges of construction, ensuring your projects stay on track and on budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    { title: "Budget & Cost Control", description: "Keep a tight handle on project financials with real-time cost tracking and predictive budget analytics.", icon: DollarSign },
    { title: "Simplified Scheduling", description: "Easily plan tasks, set milestones, and track progress with a user-friendly interface that reduces the learning curve.", icon: GanttChart },
    { title: "Team Collaboration", description: "Centralize all communication and documents, ensuring your team is always aligned and on the same page.", icon: MessageCircle },
    { title: "Actionable Insights", description: "Move beyond simple dashboards to get automated insights that help you solve problems before they escalate.", icon: BarChart3 },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Easy to Use. Powerful in Practice.</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Your team will be able to get started quickly and see immediate ROI by simplifying complex workflows and eliminating manual administrative work.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-teal-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
                <benefit.icon className="text-teal-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// "Why Us" Section - focuses on the competitive advantage
const WhyUsSection = () => {
  const points = [
    { title: "Built-in Intelligence", description: "Space AI is a construction-specific tool that leverages AI to offer more than just task management; it provides genuine predictive insights.", icon: TrendingUp },
    { title: "Affordable & Scalable", description: "Our tiered pricing is designed to grow with your business, providing an excellent value for small and growing teams.", icon: Repeat2 },
    { title: "Superior Mobile Experience", description: "With a mobile app designed for the field, your team can update projects from anywhere, even without an internet connection.", icon: Wrench },
    { title: "No Learning Curve", description: "Space AI is simple to get started with, eliminating the long, time-consuming setup often associated with other platforms.", icon: Handshake },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Don&apos;t Just Manage. Predict.</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          While many small business project management tools are general-purpose, Space AI provides a construction-specific solution that drives better project outcomes.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 mt-1">
                <point.icon className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{point.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const SmallBusinessPMSoftwarePage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-green-500/50 via-teal-500/50 to-transparent"></div>
      <BenefitsSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-green-500/50 via-teal-500/50 to-transparent"></div>
      <WhyUsSection />
    </div>
  );
};

export default SmallBusinessPMSoftwarePage;