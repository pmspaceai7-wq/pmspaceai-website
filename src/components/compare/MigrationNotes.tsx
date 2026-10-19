"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, RefreshCw, Database, ShieldCheck } from "lucide-react";

interface MigrationStep {
  title: string;
  description: string;
}

interface MigrationNotesProps {
  competitor: string;
  steps: MigrationStep[];
}

export default function MigrationNotes({ competitor, steps }: MigrationNotesProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Switching from {competitor} to Space AI
        </h2>
        
        <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-purple-400" />
                Migration Process
              </h3>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{step.title}</h4>
                      <p className="text-sm text-white/60">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-teal-400" />
                  Data Portability
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  We support comprehensive data migration from {competitor}. This includes project records, document history, version controls, and stakeholder information. Our team ensures data integrity throughout the transition.
                </p>
              </div>
              
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                  Success Support
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Every migration is paired with a dedicated success manager who walks your team through setup, training, and workflow optimization to ensure zero project downtime.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-white/70 mb-4 font-medium">Ready to discuss your migration path?</p>
            <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors inline-flex items-center gap-2 group">
              Speak with a migration expert
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
