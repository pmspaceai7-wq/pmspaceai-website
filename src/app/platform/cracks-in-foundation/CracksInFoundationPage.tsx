"use client";

import { motion } from "framer-motion";
import { ClipboardX, Users, Eye, Clock } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { BarChart3, Shield, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const CracksInFoundationPage = () => {
    const router = useRouter();
    const rootCauses = [
        { title: "Flawed Planning", description: "Outdated planning leads to unforeseen hurdles and resource mismatches.", icon: ClipboardX },
        { title: "Resource Mismanagement", description: "Inefficient allocation of labor and materials drives up costs and waste.", icon: Users },
        { title: "No Real-Time Insight", description: "A lack of live data means decisions are based on history, not reality.", icon: Eye },
        { title: "Archaic Methods", description: "Reliance on legacy systems stifles innovation and efficiency.", icon: Clock },
    ];

    return (
        <div>
        <section className="py-10 md:py-16 bg-black relative overflow-hidden min-h-fit flex items-center">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Fixing the Cracks in AECO&apos;s Foundation with AI
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Identifying the core inefficiencies that cost the AECO industry trillions.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {rootCauses.map((cause, index) => (
                        <motion.div
                            key={cause.title}
                            className="bg-gray-900/50 p-6 rounded-2xl border border-white/10 group hover:border-purple-500/50 transition-colors duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <cause.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{cause.title}</h3>
                            <p className="text-white/60">{cause.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* The Cost of Inaction */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">The Cost of Staying Behind</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">Every day without modern tools costs construction companies millions in preventable waste.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, stat: "$1.6T", label: "Annual Industry Waste", desc: "Lost globally to construction inefficiency every year." },
              { icon: Clock, stat: "80%", label: "Projects Over Budget", desc: "Of megaprojects exceed their original budget estimates." },
              { icon: Shield, stat: "30%", label: "Avoidable Waste", desc: "Of total construction spending goes to rework and delays." },
              { icon: TrendingUp, stat: "1%", label: "Productivity Growth", desc: "Annual productivity improvement vs. 3.6% in manufacturing." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-red-400 mx-auto mb-3" />
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
              { q: "What are the biggest challenges facing construction today?", a: "Low productivity growth (1% vs. 3.6% for manufacturing), $1.6T in annual waste, 80% of megaprojects over budget, chronic labor shortages, and fragmented technology systems." },
              { q: "Why is construction productivity so low?", a: "The industry relies on manual processes, disconnected tools, and reactive management. Construction still depends on spreadsheets and email for critical decisions, unlike manufacturing which automated decades ago." },
              { q: "How does Space AI solve technology fragmentation?", a: "Space AI provides a single platform unifying scheduling, cost management, document control, field reporting, and analytics. One source of truth with AI connecting all project data." },
              { q: "What is the cost of construction inefficiency?", a: "The industry loses $1.6T annually — roughly 30% of total spending. For a $100M project, that's $30M in avoidable waste. Space AI recovers 15-25% of this loss." },
              { q: "How can companies start their digital transformation?", a: "Start with a unified platform rather than point solutions. Begin with scheduling and cost management, then expand to predictive analytics. Most companies see ROI within their first project." }
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
          <RelatedPages cluster="construction-software" currentPath="/platform/cracks-in-foundation" title="Explore Solutions" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Fix the Foundation?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">See how Space AI addresses the construction industry&apos;s core challenges with intelligent technology.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default CracksInFoundationPage;
