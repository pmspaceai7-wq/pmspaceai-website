"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, FolderGit2, Handshake, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";


const realEstateSolutions = [
  {
    title: "Asset Performance Management",
    description: "Secure your capital assets with a single source of truth. Our AI-driven platform improves the operation of assets with secure digital twins and predictive maintenance.",
    icon: Building2,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Project Portfolio Management",
    description: "Transform project delivery from groundbreaking to handover. Improve cost, schedule, and quality management for every property in your development portfolio.",
    icon: FolderGit2,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Supplier & Tenant Management",
    description: "Automate supplier pre-qualification and invitations to tender. Streamline tenant relations with an intelligent, centralized communication and management hub.",
    icon: Handshake,
    color: "from-amber-500 to-orange-600"
  }
];

const RealEstatePage = () => {

    const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Property and Real Estate
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Build and maintain residential and commercial real estate with fewer issues. Our AI-powered management software employs your data to help you manage the entire asset lifecycle and prevent problems before they arise.
              </p>
              <div className="mt-8 flex gap-4">
                  <button
                  onClick={() => router.push('/construction-software-demo/')}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black relative z-50"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-64 md:h-auto md:min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image src="/assets/images/real-estate.webp" alt="Modern Real Estate Property" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
          
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-2 sm:py-4  md:py-6 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,69,255,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
          <div className="container px-4 sm:px-6 mx-auto relative z-10">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-center mb-16"
              >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                      Run Your Real Estate Portfolio With Confidence
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
                      Manage the whole of your assets&#39; lifecycle, for both residential and commercial property.
                    </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {realEstateSolutions.map((solution, index) => (
                      <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5, transition: { duration: 0.3 } }}
                          className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
                      >
                           <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color}`}></div>
                          <div className="p-8 flex flex-col h-full">
                              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg mb-6`}>
                                  <solution.icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-xl font-semibold mb-3 text-white">
                                  {solution.title}
                              </h3>
                              <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed flex-grow">
                                  {solution.description}
                              </p>
                          </div>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* Why Space AI for Real Estate */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Why Real Estate Developers Choose Space AI</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">From residential subdivisions to commercial towers, Space AI delivers measurable ROI across your entire property portfolio.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "20%", label: "Faster Time-to-Market", desc: "AI scheduling accelerates construction so properties reach market sooner." },
              { icon: Shield, stat: "45 Days", label: "Early Delay Warning", desc: "Predictive analytics flag risks weeks before they impact delivery dates." },
              { icon: BarChart3, stat: "30%", label: "Fewer Change Orders", desc: "Pre-construction clash detection eliminates costly mid-project changes." },
              { icon: TrendingUp, stat: "$5M+", label: "Average Savings", desc: "Portfolio-wide cost optimization reduces waste across all projects." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
                <div className="text-sm font-semibold text-white/90 mb-2">{item.label}</div>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: "How does Space AI help real estate developers manage multiple properties simultaneously?", a: "Space AI provides a unified portfolio dashboard where developers can track all active projects in real-time. Each property shows live progress percentages, budget burn rates, and risk alerts. Developers can compare timelines across properties and generate investor-ready reports." },
              { q: "Can Space AI predict construction delays before they happen?", a: "Yes. Space AI's predictive analytics engine analyzes historical data, weather patterns, supply chain status, and labor availability to forecast delays up to 45 days in advance. This means proactively adjusting schedules and avoiding costly penalty clauses." },
              { q: "How does the platform handle cost tracking for real estate construction?", a: "Space AI tracks costs in real-time against project budgets with line-item granularity. The platform automatically categorizes expenses, flags budget overruns, and provides unit-cost comparisons across similar projects." },
              { q: "Does Space AI support residential subdivision and mixed-use development projects?", a: "Absolutely. Space AI handles multi-phase subdivision projects with lot-by-lot tracking, shared infrastructure coordination, and phase-dependent scheduling. For mixed-use developments, the platform manages different construction types within a single project." },
              { q: "What integrations does Space AI offer for real estate developers?", a: "Space AI integrates with popular real estate tools including Procore, Yardi, MRI Software, and major accounting platforms. The platform also connects with BIM tools and provides an open API for custom integrations." }
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-black/30 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources & CTA */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <RelatedPages cluster="industries" currentPath="/industries/real-estate" title="Explore Other Industries" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Real Estate Projects?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join leading developers delivering properties on time and under budget with Space AI.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstatePage;
