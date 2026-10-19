"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
    Zap,
    Waves,
    ShieldCheck,
    TrendingUp,
    Cpu,
    Users,
    BarChart3,
    Clock,
    Construction,
    AlertTriangle,
    ArrowRight,
    BrainCircuit,
    ClipboardEdit,
    Database
} from "lucide-react";

// --- Data based on Marine-Projects.pptx ---

const aiBenefits = [
  {
    title: "Enhanced Visibility",
    description: "Track progress across ship hulls and offshore platforms. Real-time dashboards provide alerts even in remote locations.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-500",
    id: '01'
  },
  {
    title: "Predictive Risk Management",
    description: "Anticipate delays before they happen. AI models flag bottlenecks and resource shortages early.",
    icon: TrendingUp,
    color: "from-purple-500 to-pink-500",
    id: '02'
  },
  {
    title: "Optimized Resources",
    description: "Manage specialized materials efficiently. Reduce waste and cost overruns through smart allocation.",
    icon: Cpu,
    color: "from-green-500 to-teal-500",
    id: '03'
  },
  {
  title: "Quality Assurance",
    description: "Maintain high standards automatically. Enforce compliance checklists and flag anomalies instantly.",
    icon: ShieldCheck,
    color: "from-yellow-500 to-orange-500",
    id: '04'
  },
  {
    title: "Seamless Collaboration",
    description: "Unite all stakeholders on one platform. Reduce miscommunication and documentation errors.",
    icon: Users,
    color: "from-indigo-500 to-blue-500",
    id: '05'
  },
];

const capabilities = [
  {
    title: "Real-Time Monitoring",
    description: "Track coating application, curing progress, and operations across all sites simultaneously.",
    icon: Clock,
  },
  {
    title: "Forecast Rework",
    description: "Predict touch-ups needed in sensitive zones before issues escalate.",
    icon: Zap,
  },
  {
    title: "Automated Reports",
    description: "Generate inspection documentation automatically with AI-powered image analysis.",
    icon: ClipboardEdit,
  },
  {
    title: "Supply Integration",
    description: "Connect supply chain data for timely replenishment of paints and materials.",
    icon: Database,
  },
];

const MarineProjectsPage = () => {
  const router = useRouter();
  const featureImageSrc = "/assets/images/marine.webp"; 

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        
        {/* Uniform Black Background is now the default `bg-black` on the main tag. */}
        {/* Removed: Global Background UI divs (radial-gradient, opacity-30, etc.) */}

        {/* CSS Animations */}
        <style jsx>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out forwards;
            }
        `}</style>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Accelerate Marine Projects with AI-Driven Precision
              </h1>
              <p className="mt-4 text-base text-white/70 max-w-xl">
                Marine and offshore projects face unique challenges. Tight schedules, harsh environments, and high safety stakes demand smarter solutions.
                <br/>
                <br/>
                Space AI transforms marine project management. Real-time data, predictive analytics, and automated workflows revolutionize operations.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black relative z-50 shadow-lg"
                >
                  Explore Space AI
                </Link>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
                className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image
                src={featureImageSrc} 
                alt="Offshore oil rig at sunset"
                fill
                className="object-cover"
                priority 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-12 md:py-20 relative border-t border-b border-white/10">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              The Challenge: Traditional Methods Fall Short
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Complex Environments Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-red-400 flex items-center">
                <Waves className="w-5 h-5 mr-3 text-red-500" /> Complex Environments
              </h3>
              <ul className="space-y-2 text-white/70 text-sm list-disc list-inside">
                <li>Remote offshore locations make tracking difficult. Real-time visibility is critical.</li>
                <li>Regulatory demands and safety stakes are higher than ever.</li>
              </ul>
            </motion.div>

            {/* Operational Hurdles Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-400 flex items-center">
                <Construction className="w-5 h-5 mr-3 text-yellow-500" /> Operational Hurdles
              </h3>
              <ul className="space-y-2 text-white/70 text-sm list-disc list-inside">
                <li>Specialized materials require precise management. Waste and cost overruns are common.</li>
                <li>Miscommunication between stakeholders causes delays and errors.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Benefits Section */}
      <section id="ai-benefits" className="py-16 relative">
        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pb-2">
              Why Marine Firms Need AI
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {aiBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -3, transition: { duration: 0.3 } }}
                className="relative h-full p-5 rounded-xl bg-white/5 border border-white/10 transition duration-300 hover:border-purple-400/50 shadow-lg hover:shadow-purple-500/20"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}
                ></div>
                <div className="flex flex-col h-full">
                  <div className="text-white/30 text-2xl font-extrabold absolute top-0 right-4">
                    {benefit.id}
                  </div>
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center shadow-lg mb-4 border border-white/10`}
                  >
                    <benefit.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Predictive Risk & Resource Optimization (Flow chart concept) */}
      <section className="py-16 relative border-t border-b border-white/10">
        <div className="container px-4 sm:px-6 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pb-2">
                    Predictive Risk & Resource Optimization
                </h2>
            </motion.div>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                {/* Step 1: Identify Risks */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0 }}
                    className="flex-shrink-0 w-full lg:w-1/3 p-5 bg-purple-900/40 rounded-xl shadow-xl border border-purple-500/30 text-center transform hover:scale-[1.03] transition-transform duration-300"
                >
                    <AlertTriangle className="w-8 h-8 mx-auto text-red-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-1">Identify Risks</h3>
                    <p className="text-xs text-white/70">AI models analyze historical marine project data to spot patterns.</p>
                </motion.div>
                
                <div className="text-purple-400 text-2xl hidden lg:block">
                    <ArrowRight className="w-6 h-6"/>
                </div>

                {/* Step 2: Prevent Delays */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-shrink-0 w-full lg:w-1/3 p-5 bg-blue-900/40 rounded-xl shadow-xl border border-blue-500/30 text-center transform hover:scale-[1.03] transition-transform duration-300"
                >
                    <Clock className="w-8 h-8 mx-auto text-yellow-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-1">Prevent Delays</h3>
                    <p className="text-xs text-white/70">Flag bottlenecks and resource shortages before they impact schedules.</p>
                </motion.div>
                
                <div className="text-purple-400 text-2xl hidden lg:block">
                    <ArrowRight className="w-6 h-6"/>
                </div>

                {/* Step 3: Optimize Materials */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex-shrink-0 w-full lg:w-1/3 p-5 bg-purple-900/40 rounded-xl shadow-xl border border-purple-500/30 text-center transform hover:scale-[1.03] transition-transform duration-300"
                >
                    <BrainCircuit className="w-8 h-8 mx-auto text-green-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-1">Optimize Materials</h3>
                    <p className="text-xs text-white/70">Manage coatings, insulation, and blasting agents efficiently to reduce waste.</p>
                </motion.div>
            </div>
        </div>
      </section>


      {/* Space AI Capabilities Section */}
      <section className="py-16">
        <div className="container px-4 sm:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white pb-2">
              Space AI Capabilities for Marine Projects
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center p-5 bg-white/5 border border-white/10 rounded-xl hover:border-blue-400/50 transition duration-300 shadow-md transform hover:scale-[1.03] hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full border border-white/10">
                    <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-md font-semibold mb-1 text-white">
                  {item.title}
                </h3>
                <p className="text-white/70 text-xs">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits Table */}
      <section className="py-16 border-t border-b border-white/10">
        <div className="container px-4 sm:px-6 mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 pb-2">
                    Key Benefits for Marine Clients
                </h2>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
                <div className="hidden sm:grid grid-cols-2 bg-purple-900/60 p-3 rounded-t-lg font-bold text-base text-white">
                    <div>Benefit</div>
                    <div>Impact</div>
                </div>
                
                {[
                    { benefit: "Real-time Visibility", impact: "Know exactly what's happening on decks, hulls, tanks at any moment" },
                    { benefit: "Predictive Alerts", impact: "Avoid costly downtime or delayed deliveries by detecting problems early" },
                    { benefit: "Cost & Resource Efficiency", impact: "Cut overspending on consumables, labor, and mobilization" },
                    { benefit: "Quality & Safety Assurance", impact: "Ensure regulatory coverage, audit readiness, and safer operations" },
                    { benefit: "Unified Collaboration", impact: "Break down silos between field crews, project managers, inspectors, and clients" }
                ].map((row, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className={`grid grid-cols-1 sm:grid-cols-2 p-3 border-b border-white/10 text-sm ${index % 2 === 0 ? 'bg-white/5' : 'bg-white/10'} hover:bg-white/20 transition duration-200`}
                    >
                        <div className="font-semibold text-white sm:font-normal sm:text-purple-300 mb-1 sm:mb-0">{row.benefit}</div>
                        <div className="text-white/70">{row.impact}</div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400">
              Transform Your Marine Operations Today
            </h2>
            <p className="max-w-4xl mx-auto text-lg text-white/70 mb-8">
              Ready to Accelerate? Space AI brings AI-powered precision to marine and offshore projects. Join industry leaders who are transforming operations with intelligent automation.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/try-it-now/"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black shadow-lg shadow-purple-500/30 transform hover:scale-[1.05]"
              >
                Try It Now
              </Link>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white/50 text-base font-medium rounded-full text-white bg-transparent hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black transform hover:scale-[1.05]"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default MarineProjectsPage;
