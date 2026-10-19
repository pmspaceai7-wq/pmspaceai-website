"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

import heroBackgroundImage from "@/app/platform/images/hero-background.png";

const InefficiencyPage = () => {
  const router = useRouter();
  const stats = [
    { value: "35%", label: "Budget Overruns", description: "Of all construction projects significantly exceed their budgets." },
    { value: "70%", label: "Critical Delays", description: "Face schedule slippage and timeline extensions." },
    { value: "$1.6T", label: "Annual Losses", description: "Lost to systemic waste and productivity challenges." },
  ];

  return (
    <>
    <section className="relative py-10 md:py-16 overflow-hidden bg-black min-h-fit flex items-center">
      <div className="absolute inset-0 z-0 opacity-10">
          <Image
              src={heroBackgroundImage}
              alt="Abstract background"
              fill
              className="object-cover"
          />
      </div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    The <span className="text-purple-400">$1.6 Trillion</span> Inefficiency
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
                    Transforming the Architecture, Engineering, Construction, and Operations (AECO) industry with Space AI.
                </p>
            </motion.div>
            <motion.div
                className="relative w-full h-80 md:h-full rounded-2xl overflow-hidden border border-purple-500/20 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                 whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(140, 69, 255, 0.2)", transition: { type: "spring", stiffness: 300 } }}
            >
                <Image
                    src={heroBackgroundImage}
                    alt="Futuristic cityscape with digital construction overlays"
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    placeholder="blur"
                    priority
                />
            </motion.div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 30px rgba(140, 69, 255, 0.1)", transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="text-5xl font-bold text-purple-400">{stat.value}</div>
              <div className="mt-2 text-xl font-semibold text-white">{stat.label}</div>
              <p className="mt-2 text-white/70 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Efficiency Gains */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Measurable Efficiency Gains</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, stat: "30%", label: "Productivity Boost", desc: "Average labor productivity improvement across managed projects." },
              { icon: BarChart3, stat: "35%", label: "Less Material Waste", desc: "AI-optimized procurement and tracking reduces material waste." },
              { icon: Clock, stat: "25%", label: "Fewer Delays", desc: "Predictive scheduling prevents the most common causes of delay." },
              { icon: Shield, stat: "$2M+", label: "Annual Savings", desc: "Average productivity gains for a 100-person construction firm." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
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
              { q: "How much does construction inefficiency cost?", a: "The industry loses $1.6 trillion annually including $400B+ in rework, $300B+ in delays, and $250B+ in material waste. For individual firms, inefficiency adds 25-35% to project costs." },
              { q: "What are the main sources of inefficiency?", a: "Poor scheduling (35% of waste), rework from communication failures (25%), material mismanagement (20%), administrative overhead (15%), and equipment/labor idle time (5%)." },
              { q: "How does Space AI reduce rework?", a: "By 30-40% through predictive clash detection, automated spec compliance checking during submittal review, and real-time quality tracking that flags deviations immediately." },
              { q: "Can Space AI track productivity improvements?", a: "Yes. Real-time dashboards track labor productivity, equipment utilization, waste percentages, and performance indices, benchmarked against industry averages and your historical data." },
              { q: "What productivity gains can companies expect?", a: "20-30% better labor productivity, 35% less material waste, 25% fewer delays, and 15-20 hours saved per PM weekly. For a 100-person firm, that's $2M+ in annual gains." }
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
          <RelatedPages cluster="construction-software" currentPath="/platform/inefficiency" title="Explore Solutions" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Eliminate Construction Waste?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">See how Space AI turns inefficiency into competitive advantage.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InefficiencyPage;
