"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Layers,
  Shield,
  Database,
  Calculator,
  HardHat,
  GitBranch,
  FolderOpen,
  Send,
  Globe,
  MonitorCheck,
  Zap,
  MessageCircle,
  Clock,
  CheckCircle,
  BarChart3,
  Calendar,
  Settings,
  Brain,
  Handshake,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const specializedServices: string[] = [
  "Architectural design",
  "Testing & debugging",
  "Deployment & execution",
];

const dataIntegrationServices: Feature[] = [
  { title: "Business Process Consolidation", description: "Consolidation of business processes across your entire organization for streamlined operations.", icon: Layers },
  { title: "Secure Data Transfer", description: "Secure transfer of data across multiple platforms with enterprise-grade security protocols.", icon: Shield },
  { title: "Custom Database Management", description: "Custom Database Management Systems (DBMS) for reliable data integrity and performance.", icon: Database },
];

const enterpriseIntegrations: Feature[] = [
  { title: "CMS Integration", description: "Content Management Systems for streamlined content workflows.", icon: FolderOpen },
  { title: "Accounting Software", description: "Financial system integrations for accurate reporting.", icon: Calculator },
  { title: "ERP Systems", description: "Enterprise Resource Planning for unified business processes.", icon: Briefcase },
  { title: "CRM Platforms", description: "Customer Relationship Management for enhanced customer experiences.", icon: Handshake },
  { title: "Business Intelligence", description: "Business Intelligence & Analytics for data-driven decisions.", icon: BarChart3 },
  { title: "Digital Marketing", description: "Digital Marketing tools for comprehensive campaign management.", icon: Send },
];

const soaBenefits: Feature[] = [
    { title: "Optimize Data Retrieval", description: "Streamlined access to critical business data across all systems.", icon: Database },
    { title: "Improve Interoperability & Scalability", description: "Enhanced system communication and growth capabilities.", icon: Globe },
    { title: "Enhance Reusability", description: "Maximize the value of integrated systems through reusable components.", icon: GitBranch },
    { title: "Maintain System Independence", description: "Preserve the independence of loosely coupled systems for flexibility.", icon: MonitorCheck },
];

const aiIntegrationBenefits: string[] = [
    "Eliminate Manual Bottlenecks",
    "Reduce Errors",
    "Streamline Data Exchange",
    "Boost Productivity and Accuracy",
];

const webSocketUseCases: Feature[] = [
    { title: "Chat Applications", description: "Encrypted messaging, online presence, and group/private chat features.", icon: MessageCircle },
    { title: "Collaboration Tools", description: "Live text editing and real-time commenting features.", icon: Settings },
    { title: "Real-time Maps", description: "Dynamic geolocation sharing and geofence-triggered alerts.", icon: Calendar },
];

const faqData = [
    { question: "What is software integration?", answer: "Software integration is the process of connecting different IT systems, applications, and services to work as a unified system." },
    { question: "What are the benefits of integration services?", answer: "Streamlined workflows, reduced manual errors, enhanced productivity, and cost savings through automation." },
    { question: "What are three advantages of data integration?", answer: "Improved data accuracy, faster decision-making, and seamless collaboration across teams." },
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Software Integration Services</span>
          <br />
          Seamless Integration. Smarter Operations.
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-white/70">
          At PM Space AI, we deliver end-to-end software integration services to help businesses streamline operations, ensure data integrity, and maximize efficiency.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Free Integration Consultat <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SpecializedIntegrationSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Specialized Integration <span className="text-pink-400">Services</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          Adopting new technology often brings challenges. Our team of industry-specific software engineers ensures smooth integration across your systems by managing:
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {specializedServices.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-zinc-900 rounded-xl shadow-xl border border-pink-500/20 hover:border-pink-400 transition-all duration-300 flex items-center space-x-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Zap size={28} className="text-pink-400 flex-shrink-0" />
            <h4 className="text-xl font-semibold text-white">{service}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DataAndEAISection = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    <span className="text-purple-400">Data & Enterprise Application</span> Integrations (EAI)
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    We connect mission-critical systems to enable seamless communication, financial integrity, and unified business processes.
                </p>
            </motion.div>

            <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center md:text-left">Data Integration Services</h3>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {dataIntegrationServices.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border-l-4 border-purple-600 bg-zinc-900 rounded-r-lg shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <item.icon size={32} className="text-purple-400 mb-3" />
                        <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                        <p className="mt-2 text-white/60 text-sm">{item.description}</p>
                    </motion.div>
                ))}
            </div>

            <h3 className="text-2xl font-bold text-pink-400 mb-6 text-center md:text-left">EAI: Connecting Mission-Critical Systems</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {enterpriseIntegrations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-lg border border-pink-500/20 hover:bg-zinc-800 transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                        <item.icon size={28} className="text-pink-400 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                            <p className="text-white/60 text-xs">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const SOAandAISection = () => (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    Architectural & <span className="text-teal-400">AI Integration Services</span>
                </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* SOA Section */}
                <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl border-t-4 border-teal-600">
                    <h3 className="text-2xl font-bold text-teal-400 mb-6 flex items-center">
                        <Layers className="mr-3 h-6 w-6" /> Service-Oriented Architecture (SOA)
                    </h3>
                    <p className="text-white/70 mb-8">
                        We design enterprise-wide SOA solutions to maximize the efficiency and flexibility of your systems.
                    </p>
                    <div className="space-y-4">
                        {soaBenefits.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start space-x-3 p-3 bg-zinc-800 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <item.icon size={20} className="text-teal-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">{item.title}</h4>
                                    <p className="text-white/60 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI Integration Section */}
                <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl border-t-4 border-purple-600">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                        <Brain className="mr-3 h-6 w-6" /> AI Integration Services
                    </h3>
                    <p className="text-white/70 mb-8">
                        By incorporating AI-driven automation into integration workflows, we help your business achieve next-level efficiency and precision.
                    </p>
                    <ul className="space-y-4">
                        {aiIntegrationBenefits.map((item, index) => (
                             <motion.li
                                key={index}
                                className="flex items-center text-white/80 p-3 bg-zinc-800 rounded-lg"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <CheckCircle size={20} className="text-pink-400 mr-3 flex-shrink-0" />
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-xl font-semibold text-white mb-4">API Integration Platforms We Master:</p>
                <p className="text-lg text-white/80 max-w-4xl mx-auto">
                    Jitterbit &middot; Azure &middot; MuleSofts Anypoint &middot; Funnel &middot; Dell Boomi
                </p>
            </div>
        </div>
    </section>
);

const WebSocketSection = () => (
    <section className="py-16 md:py-24 bg-black text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Custom <span className="text-pink-400">WebSocket Upgrade Services</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    We deliver real-time, bi-directional communication solutions to enable instant data exchange, low latency, and superior system performance.
                </p>
            </motion.div>
            
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {webSocketUseCases.map((item, index) => (
                     <motion.div
                        key={index}
                        className="bg-zinc-900 rounded-xl p-8 text-center border-t-4 border-pink-600 shadow-2xl flex flex-col items-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="w-16 h-16 mb-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                            <item.icon size={36} strokeWidth={1.5} className="text-pink-400" />
                        </div>
                        <h4 className="text-2xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="mt-2 text-white/70 text-sm">{item.description}</p>
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
const SoftwareIntegrationPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Divider with purple/pink gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <SpecializedIntegrationSection />
      <DataAndEAISection />
      {/* Divider with pink/purple gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-transparent"></div>
      <SOAandAISection />
      <WebSocketSection />
      <FAQSection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Maximize Efficiency with Seamless Integration</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          From data migration to enterprise application integration and AI-driven processes, our experts handle the complex work so your systems run effortlessly together.
        </p>
        {/* All links point to /construction-software-demo */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          Book a Free Integration Consultat
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default SoftwareIntegrationPage;
