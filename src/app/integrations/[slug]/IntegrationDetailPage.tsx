"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, ExternalLink, ArrowLeftRight } from "lucide-react";
import Link from "next/link";

export interface ProductData {
  name: string;
  slug: string;
  url: string;
  tagline: string;
  category: string;
  accentColor: string;
  badgeColor: string;
  metaDescription: string;
  heroDescription: string;
  howItWorks: { step: number; title: string; description: string }[];
  features: { title: string; description: string }[];
  useCases: string[];
  personas: string[];
  dataFlowFrom: string;
  dataFlowTo: string;
}

export default function IntegrationDetailPage({ product }: { product: ProductData }) {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link
            href="/integrations/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Integrations
          </Link>

          <span className={`inline-block px-3 py-1.5 ${product.badgeColor} rounded-full text-xs font-medium mb-5`}>
            {product.category}
          </span>

          {/* Brand logos row */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
              <span className="text-white font-bold text-xs text-center leading-tight px-1">SPACE AI</span>
            </div>
            <div className="flex items-center gap-2 text-white/40">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div className={`w-14 h-14 ${product.accentColor} rounded-xl flex items-center justify-center border border-white/20`}>
              <span className="text-white font-bold text-xs text-center leading-tight px-1">{product.name.replace("Space ", "").toUpperCase()}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            pmspace.ai + {product.name}
          </h1>
          <p className="text-lg text-white/60 mb-4">{product.tagline}</p>
          <p className="text-base text-white/70 max-w-3xl leading-relaxed mb-8">
            {product.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/construction-software-demo/">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                See It in Action
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <button className="bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                Visit {product.name}
                <ExternalLink className="w-4 h-4" />
              </button>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Data Flow */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-900/60 border border-white/10 rounded-2xl p-8"
        >
          <h2 className="text-lg font-semibold text-white mb-6 text-center">How Data Flows</h2>
          <div className="grid md:grid-cols-3 gap-4 items-center text-center">
            <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-4">
              <p className="text-xs text-purple-300 font-medium mb-1">pmspace.ai sends</p>
              <p className="text-white/80 text-sm">{product.dataFlowFrom}</p>
            </div>
            <div className="text-white/30 text-2xl hidden md:block">⇄</div>
            <div className="bg-blue-900/30 border border-blue-500/30 rounded-xl p-4">
              <p className="text-xs text-blue-300 font-medium mb-1">{product.name} sends</p>
              <p className="text-white/80 text-sm">{product.dataFlowTo}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-2">How It Works</h2>
          <p className="text-white/60 text-sm mb-8">The exact workflow, step by step</p>

          <div className="space-y-6">
            {product.howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-9 h-9 bg-purple-500/20 border border-purple-500/40 rounded-full flex items-center justify-center text-purple-300 font-bold text-sm">
                  {step.step}
                </div>
                <div className="pt-1">
                  <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-2">What You Can Do</h2>
          <p className="text-white/60 text-sm mb-8">Capabilities unlocked when both platforms are connected</p>

          <div className="grid md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-purple-500/40 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-1 text-sm">{feature.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Use Cases + Personas */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Common Use Cases</h2>
            <ul className="space-y-3">
              {product.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                  {useCase}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">Who Uses This</h2>
            <ul className="space-y-3">
              {product.personas.map((persona, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  {persona}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Connect pmspace.ai with {product.name}?
          </h2>
          <p className="text-white/60 mb-6 max-w-xl mx-auto">
            Book a demo and we&apos;ll show you exactly how the integration works for your project type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center gap-2">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/integrations/">
              <button className="bg-white/10 border border-white/20 hover:bg-white/15 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                View All Integrations
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
