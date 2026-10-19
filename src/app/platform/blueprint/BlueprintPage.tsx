"use client";

import { motion } from "framer-motion";
import { Rocket, Award, BatteryCharging, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

const BlueprintPage = () => {
    const router = useRouter();
    const strategy = [
        { title: "Catalyze", subtitle: "Market Paradigm Shift", description: "Drive the transition from legacy systems to intelligence-driven platforms.", icon: Rocket },
        { title: "Dominate", subtitle: "Establish Market Leadership", description: "Position Space AI as the definitive enabler of this transformative future.", icon: Award },
        { title: "Transform", subtitle: "Revolutionize Industry Outcomes", description: "Drastically reduce waste and amplify productivity across the entire AECO sector.", icon: BatteryCharging },
    ];

    return (
        <>
        <section className="py-10 md:py-16 bg-black relative overflow-hidden min-h-fit flex items-center">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Our Blueprint for Transformation
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        A three-pronged strategy to rebuild the industry on a foundation of intelligence.
                    </motion.p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {strategy.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 cursor-pointer"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                                whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 30px rgba(140, 69, 255, 0.1)", transition: { type: "spring", stiffness: 300 } }}
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gray-800 border-2 border-purple-500 flex items-center justify-center">
                                        <item.icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-purple-400">{item.title}</h3>
                                <p className="text-lg font-medium text-white mb-3">{item.subtitle}</p>
                                <p className="text-white/70">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

      {/* Blueprint Results */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Transformation Results by Phase</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "2-4 Weeks", label: "Phase 1: Digitize", desc: "Centralize project data and eliminate paper processes." },
              { icon: BarChart3, stat: "15%", label: "Phase 2: Optimize", desc: "Cost reduction through AI-driven resource optimization." },
              { icon: Shield, stat: "30%", label: "Phase 3: Predict", desc: "Fewer delays through predictive project intelligence." },
              { icon: TrendingUp, stat: "3-6 Months", label: "Full Transformation", desc: "From paper to predictive AI in under 6 months." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
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
              { q: "What is Space AI's construction technology blueprint?", a: "A 3-phase strategy: Digitize (centralize data), Optimize (apply AI analytics), and Predict (enable proactive management through predictive AI)." },
              { q: "How long does digital transformation take?", a: "Phase 1 takes 2-4 weeks, Phase 2 delivers insights within 1-2 months, and Phase 3 becomes fully effective after 3-6 months of historical data collection." },
              { q: "What ROI can companies expect?", a: "Phase 1: 15-20 hrs/week saved per PM. Phase 2: 10-15% cost reduction. Phase 3: 20-30% fewer delays and 25% reduction in change orders." },
              { q: "How does it address resistance to technology?", a: "Gradual adoption starting with familiar workflows. Built-in training, mobile-first design, and dedicated onboarding ensure even skeptical teams succeed." },
              { q: "Can mid-size contractors benefit?", a: "Yes. Mid-size firms often transform faster with fewer legacy systems. Space AI's Free tier lets small teams start immediately." }
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
          <RelatedPages cluster="construction-software" currentPath="/platform/blueprint" title="Explore Solutions" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Transformation?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Follow the blueprint that leading construction companies use to go from paper to predictive AI.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
        </>
    );
};

export default BlueprintPage;
