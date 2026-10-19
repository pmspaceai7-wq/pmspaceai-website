"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Code,
  Smartphone,
  Trello,
  Brain,
  Layers,
  Archive,
  Lightbulb,
  GitBranch,
  Feather,
  CheckCircle,
  Database,
  Cloud,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const coreOfferings: Feature[] = [
  { title: "Custom PM Software Development", description: "Design and build proprietary, enterprise-level Project Management solutions and resource management systems.", icon: Trello },
  { title: "AI & Machine Learning Integration", description: "Harness AI for predictive risk assessment, resource optimization, and intelligent automation of tasks like status reporting.", icon: Brain },
  { title: "Mobile Application Development", description: "Extend the reach of your project data with powerful native and cross-platform mobile apps for real-time access on the go.", icon: Smartphone },
  { title: "Enterprise Application Integration (EAI)", description: "Ensure seamless data flow by integrating new applications with existing CRM, ERP, and accounting systems.", icon: GitBranch },
  { title: "SaaS Product Development", description: "Full-cycle development for launching a subscription-based PM tool, covering architecture, multi-tenancy, and high scalability.", icon: Layers },
  { title: "Legacy System Modernization", description: "Re-platform, re-architect, or migrate outdated PM systems to modern cloud environments and technology stacks.", icon: Archive },
];

const developmentProcess = [
  { title: "Discovery & Consulting", description: "Deep dive into your PM challenges, identify process gaps, and define detailed functional requirements.", icon: Lightbulb },
  { title: "Architecture & Design", description: "Design a scalable and secure blueprint, prioritizing AI integration, cloud readiness, and a user-centric experience (UX/UI).", icon: Code },
  { title: "Agile Development", description: "Utilize proven Agile methodologies to deliver working software in short, iterative cycles for continuous feedback.", icon: Feather },
  { title: "Quality Assurance (QA)", description: "Comprehensive testing (unit, integration, performance, security) conducted throughout the phase to ensure a flawless application.", icon: CheckCircle },
  { title: "Deployment & Launch", description: "We manage seamless deployment to your chosen environment (Cloud or On-Premise) with zero disruption.", icon: Cloud },
  { title: "Maintenance & Support", description: "Ongoing partnership post-launch with maintenance, feature enhancements, and technical support to ensure continuous optimization.", icon: Database },
];

const technologyStack = [
    { category: "Frontend", technologies: "React, Angular, Vue.js, HTML5, CSS3" },
    { category: "Backend", technologies: ".NET Core, Java, Python (Django/Flask), Node.js" },
    { category: "Databases", technologies: "SQL Server, PostgreSQL, MySQL, MongoDB, NoSQL Solutions" },
    { category: "Cloud & DevOps", technologies: "AWS, Azure, Google Cloud Platform (GCP), Docker, Kubernetes" },
    { category: "AI/ML", technologies: "TensorFlow, PyTorch, Scikit-learn, Custom LLM Integration" },
    { category: "Mobile", technologies: "Native iOS, Native Android, React Native, Flutter" },
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
          AI-Powered <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Application Development Services</span>
          <br />
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-white/70">
          Transforming Project Execution: Engineering custom software solutions to streamline PM workflows, automate reporting, and provide predictive insights.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            Consult Our Expert <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const OfferingsSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Our Core <span className="text-pink-400">Application Development Offerings</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          We leverage cutting-edge AI and robust engineering practices to build scalable, secure, and intuitive software solutions designed specifically for project management.
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreOfferings.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-zinc-900 rounded-xl shadow-xl border-b-4 border-pink-500 hover:shadow-pink-500/10 transition-all duration-300 flex flex-col h-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
              <item.icon size={24} className="text-pink-400" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
            <p className="mt-1 text-white/60 text-sm flex-grow">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          The SPACE AI <span className="text-purple-400">Development Process</span>
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-7xl mx-auto relative">
        {/* Visual Connector for Desktop Layouts (Conceptual, implied by design) */}
        <div className="hidden lg:block absolute inset-x-0 top-10 h-1/2 -z-10">
            {/* Simple wavy line or gradient to connect the flow visually */}
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <path d="M 0 10 C 20 50, 40 5, 50 40 S 80 80, 100 20" stroke="url(#flowGradient)" strokeWidth="2" fill="none" />
                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
            </svg>
        </div>

        {developmentProcess.map((item, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col items-center text-center p-6 border-2 border-transparent hover:border-purple-700/50 transition-all duration-300 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-16 h-16 mb-4 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 border-4 border-black group-hover:bg-purple-500/30 transition-colors duration-300">
              <item.icon size={32} className="text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-pink-400 mb-2">STEP 0{index + 1}</span>
            <h4 className="text-xl font-semibold text-white mb-3">{item.title}</h4>
            <p className="text-white/70 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Technologies <span className="text-teal-400">We Master</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    We specialize in modern, scalable frameworks and platforms to ensure your application is built on a robust, future-proof foundation.
                </p>
            </motion.div>
            <div className="bg-zinc-900 rounded-xl shadow-2xl border border-zinc-700/50 max-w-4xl mx-auto">
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr className="border-b border-zinc-700 text-teal-400 text-sm md:text-base">
                            <th className="p-4 md:p-6 w-1/3">Category</th>
                            <th className="p-4 md:p-6 w-2/3">Key Technologies & Frameworks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technologyStack.map((row, index) => (
                            <motion.tr 
                                key={index} 
                                className="border-b border-zinc-800 last:border-0 hover:bg-zinc-800/50 transition-colors"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <td className="p-4 md:p-6 font-semibold text-purple-300">{row.category}</td>
                                <td className="p-4 md:p-6 text-white/80">{row.technologies}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
);

// Main Page Component
const AIAppDevelopmentPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Divider with purple/pink gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <OfferingsSection />
      {/* Divider with pink/purple gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-transparent"></div>
      <ProcessSection />
      <TechStackSection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Build Your Next Project Management Application?</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          Partner with PMspace.ai to turn complex project management challenges into streamlined software solutions powered by AI.
        </p>
        {/* All links point to /construction-software-demo */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          Request a Free Consultation
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default AIAppDevelopmentPage;