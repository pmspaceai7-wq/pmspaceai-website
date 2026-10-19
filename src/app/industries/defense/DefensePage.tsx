"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BarChart3, Clock, Shield, Satellite, TowerControl, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

// Data for the solutions section, inspired by the 3-card layout

const defenseSolutions = [
  {
    title: "Secure Facility Construction",
    description: "Manage projects with the highest security requirements, including SCIFs and other sensitive facilities, ensuring all protocols are meticulously followed.",
    icon: Shield,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Complex Systems Integration",
    description: "Coordinate the deployment of advanced command centers, aerospace manufacturing lines, and critical communication networks with precision.",
    icon: Satellite,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Infrastructure Modernization",
    description: "Oversee the upgrade of military bases, airfields, and logistical hubs to enhance operational readiness and support mission-critical objectives.",
    icon: TowerControl,
    color: "from-amber-500 to-orange-600"
  }
];

const DefensePage = () => {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Defense
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Deliver mission-critical facilities with unparalleled security
                and precision. Our platform is engineered to manage complex
                defense and aerospace projects, ensuring strict adherence to
                protocols from start to finish.
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
              <Image
                src="/assets/images/defense.webp"
                alt="Aerospace facility"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-2 sm:py-4 md:py-6 relative">
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
              Precision for Mission-Critical Projects
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              Gain the control and visibility required to execute secure,
              complex, and technologically advanced projects on time and on
              budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {defenseSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color}`}
                ></div>
                <div className="p-8 flex flex-col h-full">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg mb-6`}
                  >
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

      {/* Why Defense Agencies Choose Space AI */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Why Defense Agencies Choose Space AI</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">Secure, compliant, and mission-ready construction management for military installations worldwide.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, stat: "95%+", label: "First-Pass Compliance", desc: "Automated UFC and AT/FP compliance tracking reduces inspection failures." },
              { icon: Clock, stat: "25%", label: "Faster MILCON Delivery", desc: "AI scheduling compresses military construction timelines without compromising security." },
              { icon: BarChart3, stat: "30%", label: "Fewer Stoppages", desc: "Predictive security coordination reduces construction work disruptions on active bases." },
              { icon: TrendingUp, stat: "$100M+", label: "Program Savings", desc: "Portfolio-wide optimization across multi-facility installation development programs." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
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
              { q: "How does Space AI ensure data security for defense projects?", a: "Space AI provides enterprise-grade security with role-based access controls, encrypted data, compartmentalized project access, and multi-factor authentication. Security protocols meet DoD construction requirements." },
              { q: "Can Space AI manage MILCON programs?", a: "Yes. Space AI handles MILCON programs with UFGS specification tracking, DD Form 1391 documentation, UFC compliance, and DoD-compliant progress reporting across multiple facilities." },
              { q: "How does the platform handle AT/FP requirements?", a: "Space AI integrates Anti-Terrorism/Force Protection standards into planning from day one. It tracks UFC 4-010-01 compliance, manages setback distances, and coordinates blast-resistant construction sequences." },
              { q: "Does Space AI support construction on active installations?", a: "Absolutely. Space AI manages construction on active bases with security clearance tracking, base access coordination, and operational security compliance throughout construction." },
              { q: "What efficiencies do defense agencies achieve?", a: "Defense agencies typically achieve 20-25% reduction in MILCON timelines, 30% fewer security-related stoppages, and 95%+ compliance rates on first inspection." }
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
          <RelatedPages cluster="industries" currentPath="/industries/defense" title="Explore Other Industries" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Modernize Defense Construction?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join defense agencies building mission-critical facilities with security and precision.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DefensePage;
