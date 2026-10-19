"use client";

import { motion } from "framer-motion";
import { Zap, Users, CheckSquare, Smartphone, Brain, Lock, MessageSquare, Code, Hourglass, ShoppingCart, Repeat1Icon } from "lucide-react";

// Hero Section
const HeroSection = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Smart Project & Construction Management Software
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            At Space AI, we bring the future of project management software to the construction industry.
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            Our platform is designed to empower builders, contractors, and project managers with advanced digital tools that simplify workflows, reduce risks, and ensure projects are delivered on time and within budget.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Complete Solutions Section
const CompleteSolutionsSection = () => {
  const solutions = [
    { title: "Unified Platform", description: "One centralized system for all your construction management needs", icon: CheckSquare },
    { title: "Advanced Technology", description: "AI-powered tools that adapt to your project requirements", icon: Brain },
    { title: "Real-time Collaboration", description: "Keep teams connected across all project phases", icon: Users },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Complete Construction Management Solutions</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Managing modern projects requires more than spreadsheets and outdated tools. Thats why Space AI  combines construction management best practices with cutting-edge technology.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <solution.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Construction Technology Suite Section
const TechSuiteSection = () => {
  const suite = [
    { title: "Construction Software", description: "Plan, monitor, and control every phase of a project from one centralized platform.", icon: CheckSquare },
    { title: "Construction Project Management", description: "Align teams, resources, and budgets to keep projects on track from design to delivery.", icon: Users },
    { title: "Construction Management System", description: "Integrate scheduling, documentation, reporting, and financial tracking seamlessly.", icon: Repeat1Icon },
    { title: "Construction Management App", description: "Stay connected on the go. Our mobile app gives site teams and managers instant access to real-time project data.", icon: Smartphone },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Comprehensive Construction Technology Suite</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suite.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex flex-col items-center text-center shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-12 h-12 mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <item.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Scheduling and Planning Section
const SchedulingSection = () => {
  const points = [
    { title: "Create AI-driven project timelines", description: "Intelligent scheduling that adapts to project complexities and resource availability" },
    { title: "Track progress against milestones", description: "Real-time monitoring with automated alerts for potential delays" },
    { title: "Reallocate resources quickly to avoid bottlenecks", description: "Dynamic resource management that prevents costly project delays" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Powerful Scheduling and Planning Tools</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Time delays can cost millions. With Space AI Scheduling Software, you can:
        </p>
        <div className="grid lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex flex-col space-y-4 shadow-lg border border-orange-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p className="text-white/70 text-sm">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// IT Project Management Section
const ITManagementSection = () => {
  const features = [
    { title: "Secure Data Handling", description: "Enterprise-grade security protocols protect your sensitive project information and client data", icon: Lock },
    { title: "Streamlined Communication", description: "Unified messaging and collaboration tools keep all stakeholders connected and informed", icon: MessageSquare },
    { title: "Seamless Integration", description: "Connect with existing tools and software your teams already rely on for maximum efficiency", icon: Code },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">IT Project Management Software for Modern Builders</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Construction projects rely heavily on digital collaboration and IT systems.  Space AI offers IT project management software tailored for construction companies.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-green-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Space AI Section
const WhyChooseSection = () => {
  const reasons = [
    { title: "All-in-one Solution", description: "Complete construction management software – no need for multiple platforms", icon: Hourglass },
    { title: "User-Friendly System", description: "Easy-to-use construction management system for complete oversight", icon: ShoppingCart },
    { title: "Mobile-First Design", description: "Mobile-first construction management app for field teams", icon: Smartphone },
    { title: "AI-Powered Planning", description: "Advanced scheduling software powered by AI for smarter planning", icon: Brain },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Why Choose SPACE AI ?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-pink-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-pink-500/20 flex items-center justify-center">
                <reason.icon size={24} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold">{reason.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Page Component
const SmartProjectManagementPage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <CompleteSolutionsSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <TechSuiteSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <SchedulingSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ITManagementSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <WhyChooseSection />
    </div>
  );
};

export default SmartProjectManagementPage;