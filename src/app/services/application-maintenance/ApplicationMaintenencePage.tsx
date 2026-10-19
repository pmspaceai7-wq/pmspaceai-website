"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Gauge,
  Database,
  AlertTriangle,
  Users,
  Monitor,
  Bug,
  Code,
  Lock,
  Zap,
  Briefcase,
  ArrowRight,
  ClipboardCheck,
  Phone,
  HelpCircle,
  HardHat,
  Trello,
  Settings,
  DollarSign,
  Building,
  GitBranch,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  themeColor: string;
}

const neglectCosts: Feature[] = [
  { title: "System Downtime", description: "Unexpected outages disrupting field operations and project workflows.", icon: Clock, themeColor: "text-pink-400" },
  { title: "Security Vulnerabilities", description: "Unpatched systems exposing project data to cyber threats and data breaches.", icon: Lock, themeColor: "text-pink-400" },
  { title: "Performance Degradation", description: "Slow systems reducing team productivity and hindering efficiency.", icon: Gauge, themeColor: "text-pink-400" },
  { title: "Integration Failures", description: "Broken connections between critical construction tools and platforms.", icon: GitBranch, themeColor: "text-pink-400" },
  { title: "Compliance Risks", description: "Outdated systems failing to meet industry regulatory requirements.", icon: ClipboardCheck, themeColor: "text-pink-400" },
  { title: "User Frustration", description: "Technical issues reducing adoption and decreasing your platform's ROI.", icon: Users, themeColor: "text-pink-400" },
];

const proactiveMonitoring: Feature[] = [
  { title: "Real-Time Performance", description: "Track response times, throughput, and resource utilization 24/7.", icon: Monitor, themeColor: "text-purple-400" },
  { title: "Intelligent Alerts", description: "Smart alerts that distinguish critical issues from noise and escalate automatically.", icon: AlertTriangle, themeColor: "text-purple-400" },
  { title: "Performance Analytics", description: "Pinpoint bottlenecks and forecast infrastructure needs based on usage trends.", icon: Code, themeColor: "text-purple-400" },
];

const supportTiers = [
    { title: "Tier 1: Help Desk", icon: HelpCircle, description: "Expert help when you need it.", features: ["User Assistance", "Password Resets", "Basic Troubleshooting"] },
    { title: "Tier 2: Technical Support", icon: Settings, description: "Expert help when you need it.", features: ["Complex Issue Resolution", "Integration Support", "Performance Diagnosis"] },
    { title: "Tier 3: Engineering Support", icon: Zap, description: "Expert help when you need it.", features: ["Critical Production Response", "Code-Level Debugging", "Architecture Review"] },
];

const constructionMaintenance: Feature[] = [
  { title: "BIM Integration", description: "Ongoing maintenance for Revit, AutoCAD, and Navisworks connections and sync processes.", icon: Building, themeColor: "text-teal-400" },
  { title: "Project Management", description: "Continuous monitoring of Procore, PlanGrid, and schedule synchronization.", icon: Trello, themeColor: "text-teal-400" },
  { title: "ERP & Accounting", description: "Maintenance of financial data sync with Oracle, SAP, QuickBooks, and Sage.", icon: DollarSign, themeColor: "text-teal-400" },
  { title: "Field App Support", description: "Optimization of mobile performance, offline capability, and GPS integration.", icon: Phone, themeColor: "text-teal-400" },
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
          Application Maintenance & Support Services
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Keep Your Construction Technology at Peak Performance
          </span>
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/70">
          Space AI provides comprehensive, proactive care for your construction management platform, ensuring maximum uptime, optimal performance, and continuous improvement.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            Get Worry-Free Support <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const NeglectSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          The Cost of <span className="text-pink-400">Neglect</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          Construction projects cant afford system downtime, security vulnerabilities, or performance issues. Without proper maintenance, your software faces real risks.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {neglectCosts.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-zinc-900 rounded-xl shadow-xl border-t-4 border-pink-500 hover:shadow-pink-500/10 transition-all duration-300 flex items-start space-x-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <item.icon size={28} className={item.themeColor + " flex-shrink-0 mt-1"} />
            <div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-1 text-white/60 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const MonitoringSection = () => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="text-purple-400">Proactive</span> System Monitoring
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          We provide 24/7 vigilance, continuously tracking your system health, detecting and resolving issues before they impact your operations.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {proactiveMonitoring.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 text-center shadow-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
              <item.icon size={32} className={item.themeColor} />
            </div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SupportTiersSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Multi-Tier <span className="text-teal-400">Technical Support Services</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {supportTiers.map((tier, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-8 border border-zinc-700/50 hover:border-teal-500 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-4xl font-extrabold text-teal-400">0{index + 1}</span>
              <h3 className="text-2xl font-bold text-white">{tier.title}</h3>
            </div>
            <p className="text-white/70 mb-6">{tier.description}</p>
            <ul className="space-y-3">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center text-white/80">
                  <Briefcase size={20} className="text-purple-500 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ConstructionSpecificSection = () => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="text-pink-400">Construction-Specific</span> Maintenance
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          Our services are specifically designed for the unique challenges of construction technology, including industry-tailored support for critical tools.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {constructionMaintenance.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow-xl border border-pink-500/20 hover:border-pink-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <item.icon size={24} className={item.themeColor} />
            </div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SLASummarySection = () => (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Response Time <span className="text-purple-400">SLAs</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    Our commitment to uptime and performance is backed by industry-leading Service Level Agreements.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto text-center">
                {/* Critical Issues */}
                <motion.div 
                    className="p-6 rounded-xl bg-purple-900/50 border border-purple-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Shield size={36} className="text-purple-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">Critical Issues</p>
                    <p className="text-4xl font-extrabold text-pink-400">15 min</p>
                    <p className="text-sm text-white/70">Initial Response</p>
                </motion.div>
                {/* High Priority */}
                <motion.div 
                    className="p-6 rounded-xl bg-zinc-900 border border-zinc-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <AlertTriangle size={36} className="text-yellow-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">High Priority</p>
                    <p className="text-4xl font-extrabold text-teal-400">1 hour</p>
                    <p className="text-sm text-white/70">Initial Response</p>
                </motion.div>
                {/* Medium Priority */}
                <motion.div 
                    className="p-6 rounded-xl bg-zinc-900 border border-zinc-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Database size={36} className="text-cyan-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">Medium Priority</p>
                    <p className="text-4xl font-extrabold text-purple-400">4 hours</p>
                    <p className="text-sm text-white/70">Initial Response</p>
                </motion.div>
                {/* Uptime Guarantee */}
                <motion.div 
                    className="p-6 rounded-xl bg-purple-900/50 border border-purple-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Gauge size={36} className="text-pink-400 mx-auto mb-3" />
                    <p className="text-2xl font-bold text-white mb-1">Uptime Guarantee</p>
                    <p className="text-4xl font-extrabold text-pink-400">99.9%</p>
                    <p className="text-sm text-white/70">Enterprise & Managed Plans</p>
                </motion.div>
            </div>
        </div>
    </section>
);


// Main Page Component
const ApplicationMaintenancePage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Divider with purple/pink gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <NeglectSection />
      <MonitoringSection />
      {/* Divider with teal/purple gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-teal-500/50 via-purple-500/50 to-transparent"></div>
      <SupportTiersSection />
      <ConstructionSpecificSection />
      <SLASummarySection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for Worry-Free Platform Operations?</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          Contact our maintenance specialists today to ensure your platform runs reliably, securely, and efficiently.
        </p>
        {/* Updated link to /construction-software-demo and styling to purple primary button */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <HardHat className="mr-2 h-5 w-5" />
          Schedule a Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default ApplicationMaintenancePage;