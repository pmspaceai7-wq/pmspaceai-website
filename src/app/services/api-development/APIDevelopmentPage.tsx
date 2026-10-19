"use client";

import { motion } from "framer-motion";
import {
  Code,
  Zap,
  DatabaseZap,
  Trello,
  PencilRuler,
  Brain,
  ArrowRight,
  Blocks,
  FileText,
  Clock,
  DollarSign,
  MonitorCheck,
  Building2,
  GitBranch,
  Megaphone,
  Shield,
  Briefcase,
  Layers, // Using Layers for Enterprise Integration Architecture section divider
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const challengeData: Feature[] = [
  { title: "Data Silos", description: "Critical project information trapped in isolated systems, hindering visibility.", icon: DatabaseZap },
  { title: "Manual Data Entry", description: "Teams spend hours transferring data between platforms, leading to errors.", icon: FileText },
  { title: "Delayed Decisions", description: "Lack of real-time data integration slows down critical project decisions.", icon: Clock },
  { title: "Integration Complexity", description: "Off-the-shelf connectors don't meet complex, construction-specific needs.", icon: Blocks },
];

const apiTypes: Feature[] = [
  { title: "RESTful API Development", description: "Resource-Oriented Design: Clean, scalable, and intuitive API endpoints for construction data.", icon: Code },
  { title: "GraphQL API Development", description: "Flexible Queries: Request exactly the data you need in a single call, eliminating over-fetching.", icon: GitBranch },
  { title: "Real-Time APIs", description: "WebSocket Connections: Persistent connections for live collaboration and continuous data streaming.", icon: Zap },
  { title: "Construction-Specific Features", description: "BIM Data & Field APIs: Expose design models, project schedules, and field reporting data securely.", icon: Building2 },
];

const integrationData: Feature[] = [
  { title: "BIM and Design Software", description: "Real-time model synchronization and automated data extraction from Autodesk, Bentley, and Trimble platforms.", icon: PencilRuler },
  { title: "Project Management Platforms", description: "Bidirectional sync with Procore, PlanGrid, Buildertrend, and Primavera P6 for unified workflows.", icon: Trello },
  { title: "ERP & Accounting Systems", description: "Seamless data flow with Oracle, SAP, QuickBooks, and Sage for financial and resource management.", icon: DollarSign },
  { title: "Field Apps & Data Collection", description: "Low-latency communication optimized for mobile data streams from the construction site.", icon: MonitorCheck },
];

const aiFeatures: Feature[] = [
  { title: "Intelligent Data Mapping", description: "AI automatically identifies data relationships and maps fields between disparate systems.", icon: Brain },
  { title: "Predictive Integration", description: "Identify unusual data patterns and predict potential integration failures before they occur.", icon: Megaphone },
  { title: "Automated Conflict Resolution", description: "Smartly detect data conflicts and apply AI-powered resolution suggestions.", icon: Shield },
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
          Custom API Development & Integration Solutions
          <br />
          {/* Changed gradient to purple/pink */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Unify Your Tech Stack with Intelligent Automation
          </span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
          Space AI delivers enterprise-grade API solutions that connect your entire construction ecosystem,
          eliminate data silos, and enable seamless data flow across all your project platforms.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            Schedule Consultation <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const ChallengeSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          The Integration <span className="text-pink-400">Challenge</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          Modern construction relies on dozens of specialized tools. Without proper integration, data is trapped, leading to wasted hours and costly errors.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {challengeData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow-xl border border-pink-500/20 hover:border-pink-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <item.icon size={24} className="text-pink-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const APITypesSection = () => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Custom API <span className="text-purple-400">Development Services</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          We design and develop secure, scalable APIs that expose your construction data and processes in easy-to-use formats.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {apiTypes.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <item.icon size={24} className="text-purple-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const IntegrationServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            <span className="text-teal-400">System Integration</span> Services
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
            We connect your entire construction technology stack, ensuring reliable and intelligent data flow across all platforms.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrationData.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 border-l-4 border-teal-600 bg-zinc-900 rounded-r-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <item.icon size={32} className="text-teal-400 mb-3" />
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-2 text-white/60 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AIIntegrationSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            <span className="text-pink-400">AI-Powered</span> Integration Intelligence
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
            Our API solutions leverage artificial intelligence to make your integrations smarter, more efficient, and more valuable, driving superior project outcomes.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {aiFeatures.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-8 text-center border-t-4 border-pink-600 shadow-2xl flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                <item.icon size={36} strokeWidth={1.5} className="text-pink-400" />
              </div>
              <h4 className="text-2xl font-semibold text-white">{item.title}</h4>
              <p className="mt-4 text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Main Page Component
const APIDevelopmentPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Changed divider gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <ChallengeSection />
      <APITypesSection />
      {/* Changed divider gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500/50 via-purple-500/50 to-transparent"></div>
      <IntegrationServicesSection />
      <AIIntegrationSection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-zinc-950 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Construction Technology?</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          Contact our integration specialists today to discuss how custom APIs can unify your systems and boost project profitability.
        </p>
        {/* Updated link and styling to match primary button */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          Schedule a Free Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default APIDevelopmentPage;