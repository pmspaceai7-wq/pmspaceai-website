"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  DollarSign,
  Trello,
  Settings,
  GitBranch,
  BarChart3,
  Users,
  Code,
  HardHat,
  Target,
  BookOpen,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const keyOutcomes: Feature[] = [
  { title: "Faster Delivery", description: "Shorten project cycles with automated workflows and integrated schedules.", icon: Clock },
  { title: "Lower Cost", description: "Reduce rework, cost overruns, and administrative overhead with centralized data.", icon: DollarSign },
  { title: "Predictable Quality", description: "Use predictive analytics and alerts to catch issues early and maintain high standards.", icon: CheckCircle },
];

const transformationAreas: Feature[] = [
  { title: "Platform Strategy & Roadmapping", description: "Align tools to your project workflows and long-term goals.", icon: Trello },
  { title: "Systems Integration", description: "Connect ERPs, PM tools, BIM data, and field apps for one source of truth.", icon: GitBranch },
  { title: "Automation & Workflows", description: "Automate approvals, handoffs, and reporting to remove repetitive manual work.", icon: Settings },
  { title: "Data & Analytics", description: "Implement real-time dashboards and predictive alerts to avoid cost and schedule overruns.", icon: BarChart3 },
  { title: "Change Management", description: "Role-based training, adoption metrics, and on-the-ground support for lasting organizational change.", icon: Users },
  { title: "Custom Development & APIs", description: "Build extensions, integrations, and microservices to fill specific capability gaps.", icon: Code },
];

const transformationProcess = [
  { title: "Discovery & Assessment", description: "We map current processes, data flows, and pain points with key stakeholders.", icon: BookOpen },
  { title: "Strategy & Roadmap", description: "Deliver prioritized initiatives, realistic timelines, and clear ROI estimates.", icon: Target },
  { title: "Implementation", description: "Execute integrations, configuration, custom development, and pilot deployments.", icon: HardHat },
  { title: "Adoption & Training", description: "Provide role-based training, documentation, and adoption measurement to ensure user success.", icon: Users },
  { title: "Scale & Continuous Improvement", description: "Roll out solutions across all projects and continually optimize using performance metrics.", icon: CheckCircle },
];

const caseStudies = [
    { project: "Manufacturing Facility Turnaround", result: "Reduced commissioning time by 28% with integrated schedules and automated handoffs." },
    { project: "Large Infrastructure Project", result: "Cut change-order processing time by 55% through digital forms and automated approvals." },
];

const faqData = [
    { question: "How long does a transformation program take?", answer: "The timeline is customized based on scope, but programs typically range from 6 to 18 months, with quick wins delivered in the first quarter." },
    { question: "Do you build custom software?", answer: "Yes, we specialize in building custom extensions, microservices, and bespoke applications tailored to fill specific capability gaps in existing commercial off-the-shelf software." },
];

// --- Components ---

const HeroSection = () => (
  <section className="py-16 md:py-24 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Digital Transformation</span> for Project-driven Businesses
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-white/70">
          Space AI helps construction, engineering, and project teams adopt modern software, automation, and data practices — reducing delays, cutting costs, and unlocking predictable outcomes for every project.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            Book a Free Transformation Strategy Call <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const OutcomesSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Unlock <span className="text-pink-400">Predictable Outcomes</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {keyOutcomes.map((item, index) => (
          <motion.div
            key={index}
            className="p-8 bg-zinc-900 rounded-xl shadow-xl border border-pink-500/20 hover:border-pink-400 transition-all duration-300 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
              <item.icon size={32} className="text-pink-400" />
            </div>
            <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
            <p className="text-white/70 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const WhatWeDoSection = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Our <span className="text-purple-400">Transformation Pillars</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    Space AI designs practical digital transformation programs. We blend people, process, and technology so your teams adopt tools quickly and realize measurable impact.
                </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {transformationAreas.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border-t-4 border-purple-600 bg-zinc-900 rounded-b-lg shadow-lg hover:shadow-purple-500/10 transition-shadow duration-300"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <item.icon size={32} className="text-purple-400 mb-3" />
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                        <p className="mt-2 text-white/60 text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const ProcessSection = () => (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Our 5-Step <span className="text-pink-400">Transformation Process</span>
                </h2>
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-center items-stretch space-y-8 lg:space-y-0 lg:space-x-4 max-w-7xl mx-auto">
                {transformationProcess.map((item, index) => (
                    <motion.div
                        key={index}
                        className="relative p-6 bg-zinc-900 rounded-xl shadow-2xl border border-zinc-700/50 flex-1 min-w-[200px] lg:min-h-[250px] flex flex-col justify-start"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <div className="text-3xl font-extrabold text-pink-400 mb-3">0{index + 1}</div>
                        <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
                        <p className="text-white/70 text-sm">{item.description}</p>
                        
                        {/* Connecting Arrow/Line - Styled for flow */}
                        {index < transformationProcess.length - 1 && (
                            <div className="absolute top-1/2 right-[-20px] hidden lg:block h-1 w-10 bg-gradient-to-r from-pink-500 to-purple-500 transform -translate-y-1/2"></div>
                        )}
                        {index < transformationProcess.length - 1 && (
                            <div className="absolute bottom-[-16px] left-1/2 lg:hidden w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 transform -translate-x-1/2"></div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const CaseStudySection = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Proof in the <span className="text-teal-400">Field</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    See how Space AI  digital transformation programs deliver measurable results for project-driven organizations.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {caseStudies.map((study, index) => (
                    <motion.div
                        key={index}
                        className="p-8 bg-zinc-900 rounded-xl shadow-2xl border border-teal-500/20 flex flex-col"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <HardHat size={32} className="text-teal-400 mb-3" />
                        <h4 className="text-xl font-semibold text-white mb-3">{study.project}</h4>
                        <p className="text-white/70 text-lg border-t border-zinc-700 pt-4 mt-auto">{study.result}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const FAQSection = () => (
    <section className="py-16 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                Frequently Asked <span className="text-purple-400">Questions (FAQ)</span>
            </h2>
            <div className="space-y-6">
                {faqData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-5 bg-zinc-900 rounded-lg border border-zinc-700 hover:border-purple-500 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <h3 className="text-lg font-semibold text-purple-300 mb-2">{item.question}</h3>
                        <p className="text-white/70">{item.answer}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


// Main Page Component
const DigitalTransformationPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Divider with purple/pink gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <OutcomesSection />
      <WhatWeDoSection />
      {/* Divider with pink/purple gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-transparent"></div>
      <ProcessSection />
      <CaseStudySection />
      <FAQSection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Projects?</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          Book a free call and get a customized digital roadmap for your organization today.
        </p>
        {/* All links point to /construction-software-demo */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          Book my free call
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;