// app/solutions/predictive-delays/page.tsx

"use client";

import { motion } from "framer-motion";
import { Clock, AlertTriangle, Zap, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";


const benefits = [
    {
        icon: Zap,
        title: "Forecast Critical Path Risks",
        description: "Identify potential delays up to 45 days in advance, giving you time to act, not react."
    },
    {
        icon: CheckCircle,
        title: "Improve Schedule Confidence",
        description: "Provide stakeholders with data-backed completion dates you can trust."
    },
    {
        icon: AlertTriangle,
        title: "Mitigate Financial Impact",
        description: "Prevent the cascading cost overruns that result from unforeseen schedule slippage."
    }
]

export default function PredictiveDelaysPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 sm:py-10">

  <div className="flex justify-center text-center">
   
    <motion.div
      className="max-w-3xl"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <span className="text-blue-400 font-semibold">
        AI Delay Predictor
      </span>
      <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 text-white">
        See the Future of Your Schedule with Predictive Delay Analysis
      </h1>
      <p className="text-lg md:text-xl text-white/70 mb-8">
        Stop waiting for delays to show up on a report. Our AI-powered
        engine analyzes thousands of data points to predict schedule
        slippage before it happens, turning your project plan into a
        dynamic, forward-looking asset.
      </p>
      <Link href="/construction-software-demo/">
        <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Book a Personalized Demo
        </button>
      </Link>
    </motion.div>
  </div>
</section>
    
    

      {/* The Problem & The Old Way */}
      <section className="bg-gray-900/50 py-20 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <AlertTriangle className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              The Anatomy of a Six-Month Delay
            </h2>
            <p className="text-lg text-white/70">
              It never starts as a six-month problem. It starts with a late RFI,
              a delayed material delivery, or an undiscovered design clash.
              Legacy tools only log these events after they&apos;ve already
              impacted your critical path. By the time it&apos;s on a
              spreadsheet, it&apos;s too late.
            </p>
          </div>
        </div>
      </section>

      {/* The Space AI Way & Outcomes */}
      <section className="container mx-auto px-4 py-10 sm:py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Zap className="mx-auto w-12 h-12 text-green-400 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Solution: Predictive Intelligence
          </h2>
          <p className="text-lg text-white/70">
            Space AI transforms your project data from a static record into a
            predictive engine. Our models analyze daily logs, schedules, BIM
            data, and even weather patterns to give you actionable foresight.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-8"
            >
              <benefit.icon className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-white">
                {benefit.title}
              </h3>
              <p className="text-white/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Outsmart Risk?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Stop managing projects from the rearview mirror. Talk to one of our
            specialists to see how the AI Delay Predictor can safeguard your
            timeline and budget.
          </p>
          <Link
            href="/construction-software-demo/"
            className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-200 transition-colors"
          >
            See the Predictor in Action
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}