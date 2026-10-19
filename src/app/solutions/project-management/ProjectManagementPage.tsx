"use client";

import { motion } from "framer-motion";
import { Zap, Building, Clock, DollarSign, ShieldCheck, HardHat, FileText, Globe, Link, Briefcase, Factory, Wrench, CheckCircle, TrendingDown, User, Monitor, Repeat2, GanttChart, LayoutDashboard, Handshake, BarChart3, Cloud, Package, MessageCircle, Eye, TabletSmartphone, QrCode, Waypoints, Camera, MapPin, Lightbulb } from "lucide-react";

// Hero Section - Page 1
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
            Building Project Management Platform
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Next-Generation Construction Intelligence</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
            Transform Your Building Projects with AI-Powered Management Solutions
          </p>
          <p className="mt-2 max-w-2xl mx-auto text-md text-white/50">
            Space AI revolutionizes building project management with artificial intelligence that predicts challenges, optimizes resources, and ensures successful project delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Core Capabilities Section - Page 2
const CoreCapabilitiesSection = () => {
  const coreCapabilities = [
    { title: "Intelligent Project Setup", description: "AI-assisted project planning with automatic schedule generation.", icon: Zap },
    { title: "Real-time Progress Tracking", description: "Live updates from field teams with automated reporting.", icon: BarChart3 },
    { title: "Predictive Analytics", description: "Forecast delays, cost overruns, and resource needs weeks in advance.", icon: TrendingDown },
    { title: "Multi-trade Coordination", description: "Seamless coordination across all construction disciplines.", icon: HardHat },
    { title: "Quality Assurance Integration", description: "Built-in quality control with automated inspection scheduling.", icon: ShieldCheck },
  ];

  const buildingFeatures = [
    { title: "Multi-phase Project Support", description: "Manage complex building projects from foundation to finish.", icon: Building },
    { title: "Trade Sequencing Optimization", description: "AI-optimized scheduling for electrical, plumbing, HVAC, and other trades.", icon: Waypoints },
    { title: "Building Code Compliance", description: "Automated compliance monitoring throughout construction phases.", icon: CheckCircle },
    { title: "Occupancy Planning", description: "Coordinate move-in schedules with project completion timelines.", icon: User },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Advanced Building Construction Project Management</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our platform combines decades of construction expertise with cutting-edge AI technology to address the unique challenges of building projects.
        </p>

        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 mt-12">Core Management Capabilities</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {coreCapabilities.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-blue-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                <feature.icon size={24} className="text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 mt-12">Building-Specific Features</h3>
        <div className="grid md:grid-cols-4 gap-8">
          {buildingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 text-center shadow-lg border border-purple-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                <feature.icon size={24} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold">{feature.title}</h4>
              <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Section - Page 3
const ComparisonSection = () => {
  const comparisonData = [
    { feature: "AI Intelligence", spaceAI: "Predictive analytics & automated insights", competitor: "Limited AI capabilities" },
    { feature: "Project Prediction", spaceAI: "87% accuracy in delay forecasting", competitor: "Reactive problem identification" },
    { feature: "Resource Optimization", spaceAI: "Dynamic resource allocation", competitor: "Resource planning" },
    { feature: "Risk Management", spaceAI: "Proactive risk prediction & mitigation", competitor: "Basic risk tracking" },
    { feature: "Mobile Experience", spaceAI: "Field-optimized mobile platform", competitor: "Document-focused mobile app" },
    { feature: "Integration Depth", spaceAI: "50+ native BIM/ERP integrations", competitor: "Autodesk-centric ecosystem" },
    { feature: "Cost Management", spaceAI: "Predictive cost analytics", competitor: "Traditional budget tracking" },
    { feature: "Safety Intelligence", spaceAI: "AI-powered safety monitoring", competitor: "Basic safety documentation" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">The Superior Alternative</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Space AI delivers predictive intelligence and proactive project management that prevents problems before they occur, while other platforms focus on document management and basic collaboration.
        </p>
        <div className="bg-zinc-900 rounded-lg p-6 shadow-lg border border-purple-500/20">
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="border-b border-zinc-700 text-purple-400 text-sm md:text-base">
                <th className="p-4">Feature</th>
                <th className="p-4">Space AI</th>
                <th className="p-4">Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-zinc-800 last:border-0">
                  <td className="p-4 font-semibold text-white">{row.feature}</td>
                  <td className="p-4 text-white/70">{row.spaceAI}</td>
                  <td className="p-4 text-white/70">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Mobile App Section - Page 4
const MobileAppSection = () => {
  const features = [
    { title: "Offline Capability", description: "Full functionality even without internet connectivity", icon: Globe },
    { title: "Voice-to-Text Reporting", description: "Quick progress updates using voice commands", icon: MessageCircle },
    { title: "Photo Documentation", description: "Integrated photo capture with automatic project filing", icon: Camera },
    { title: "QR Code Integration", description: "Instant equipment checkout and progress tracking", icon: QrCode },
    { title: "Push Notifications", description: "Real-time alerts for critical project updates", icon: Zap },
    { title: "GPS Integration", description: "Location-aware features for multi-site project management", icon: MapPin },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Construction Project Management App - Mobile-First Intelligence</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our construction project management app brings enterprise-level project intelligence to every job site with a mobile-first design that works perfectly in construction environments.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-lg p-6 flex items-start space-x-4 shadow-lg border border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <feature.icon className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comprehensive Solutions Section - Page 5
const ComprehensiveSolutionsSection = () => {
  const preConstruction = [
    { title: "Feasibility Analysis", description: "AI-powered project viability assessment", icon: BarChart3 },
    { title: "Estimating Support", description: "Historical data-driven cost estimation", icon: DollarSign },
    { title: "Risk Assessment", description: "Pre-project risk identification and mitigation planning", icon: ShieldCheck },
    { title: "Resource Planning", description: "Optimal resource allocation across project phases", icon: HardHat },
  ];

  const execution = [
    { title: "Schedule Optimization", description: "Dynamic scheduling with real-time adjustments", icon: Clock },
    { title: "Progress Monitoring", description: "Automated progress tracking with photo documentation", icon: Eye },
    { title: "Quality Management", description: "Inspection scheduling and defect tracking", icon: Wrench },
    { title: "Safety Oversight", description: "Continuous safety monitoring with AI-powered alerts", icon: ShieldCheck },
  ];

  const closeout = [
    { title: "Completion Verification", description: "Automated punch list generation and tracking", icon: CheckCircle },
    { title: "Final Documentation", description: "Intelligent document compilation and delivery", icon: FileText },
    { title: "Lessons Learned", description: "AI-generated project insights for future improvements", icon: Lightbulb },
    { title: "Warranty Tracking", description: "Post-completion warranty and maintenance scheduling", icon: Globe },
  ];

  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Comprehensive Construction Project Management Solutions</h2>
        <p className="text-center text-lg max-w-3xl mx-auto text-white/70 mb-12">
          Our portfolio addresses every aspect of construction project delivery with integrated tools that work together to optimize performance.
        </p>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg border border-blue-500/20">
            <h3 className="text-2xl font-bold mb-6">Pre-Construction Intelligence</h3>
            {preConstruction.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Construction Execution</h3>
            {execution.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="text-purple-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-zinc-900 rounded-lg p-8 shadow-lg border border-green-500/20">
            <h3 className="text-2xl font-bold mb-6">Project Closeout</h3>
            {closeout.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 mt-1">
                  <item.icon className="text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-2 text-white/70 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Main page component
const BuildingProjectManagementPage = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <HeroSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <CoreCapabilitiesSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ComparisonSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <MobileAppSection />
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-blue-500/50 to-transparent"></div>
      <ComprehensiveSolutionsSection />
    </div>
  );
};

export default BuildingProjectManagementPage;