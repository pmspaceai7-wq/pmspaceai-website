"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Landmark, DatabaseZap, Users, ArrowRight, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

// Data for the solutions section, inspired by the 3-card layout

const infrastructureSolutions = [
  {
    title: "Megaproject Management",
    description: "Gain comprehensive oversight for large-scale public works, managing complex budgets, multi-decade timelines, and inter-agency collaboration with ease.",
    icon: Landmark,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Resilient Asset Lifecycle",
    description: "Utilize digital twins and predictive data to plan, build, and maintain critical infrastructure that withstands environmental and operational stresses.",
    icon: DatabaseZap,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Public & Stakeholder Engagement",
    description: "Ensure transparency and streamline communication across government bodies, contractors, and the public for publicly-funded projects.",
    icon: Users,
    color: "from-amber-500 to-orange-600"
  }
];

const InfrastructurePage = () => {
    const router = useRouter();

  return (
    <div className="bg-black text-white min-h-fit overflow-hidden">
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
              <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
                Infrastructure AI Project Management
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Connecting Communities with Intelligent Infrastructure
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Manage large-scale civil projects with precision. From highways to utilities, 
                Space AI brings <Link href="/predictive-analytics-construction/" className="text-blue-400 hover:underline">Predictive Analytics</Link> to 
                infrastructure challenges, helping you anticipate risks and coordinate massive teams effortlessly.
              </p>
              <div className="mt-8 flex gap-4">
                  <button
                  onClick={() => router.push('/construction-software-demo/')}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black relative z-50 gap-2"
                >
                  Schedule a Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link href="/features/">
                  <button className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200">
                    Explore Features
                  </button>
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="relative h-64 md:h-auto md:min-h-[400px] rounded-2xl overflow-hidden border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Image src="/assets/images/infrastructure.webp" alt="Large scale infrastructure bridge project" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-2 sm:py-4 md:pt-6 md:pb-4 relative">
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
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-2">
                      Engineering the Future of Civil Works
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
                      Leverage data-driven insights to deliver resilient, sustainable, and impactful infrastructure projects for generations to come.
                  </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {infrastructureSolutions.map((solution, index) => (
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

      {/* Why Infrastructure Teams Choose Space AI */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Why Infrastructure Teams Choose Space AI</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">From roads and bridges to utilities and megaprojects, Space AI keeps civil construction on track.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "20%", label: "Schedule Compression", desc: "AI scheduling optimizes critical paths across complex infrastructure programs." },
              { icon: Shield, stat: "35%", label: "Fewer Claims", desc: "Predictive analytics and documentation reduce disputes and litigation costs." },
              { icon: BarChart3, stat: "5%", label: "Budget Variance", desc: "Consistent delivery within 5% of budget through real-time cost tracking." },
              { icon: TrendingUp, stat: "$50M+", label: "Program Savings", desc: "Portfolio-wide optimization delivers major savings on infrastructure programs." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
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
              { q: "How does Space AI manage large-scale infrastructure megaprojects?", a: "Space AI handles megaprojects through work breakdown structures that decompose billion-dollar programs into manageable work packages. The platform coordinates multiple contractors and tracks earned value across hundreds of activities." },
              { q: "Can Space AI coordinate bridge and tunnel construction?", a: "Yes. Space AI supports specialized workflows for bridge and tunnel construction including staged demolition sequencing, temporary works management, and geotechnical monitoring integration." },
              { q: "How does the platform handle utility infrastructure coordination?", a: "Space AI manages utility projects with 3D underground utility mapping, conflict detection, and permit coordination across multiple utility providers." },
              { q: "Does Space AI support government-funded infrastructure projects?", a: "Absolutely. Space AI includes built-in compliance tracking for Davis-Bacon wages, Buy America provisions, DBE participation goals, and federal reporting standards." },
              { q: "What ROI do infrastructure owners see?", a: "Infrastructure owners typically achieve 15-20% schedule compression, 25-35% reduction in claims, and consistent delivery within 5% of budget." }
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
          <RelatedPages cluster="industries" currentPath="/industries/infrastructure" title="Explore Other Industries" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Infrastructure Projects?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join leading civil contractors and infrastructure owners delivering projects on time with Space AI.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfrastructurePage;
