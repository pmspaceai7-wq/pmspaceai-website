"use client";

import { motion } from "framer-motion";
import { TrendingUp, Eye, Cpu, Zap } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { BarChart3, Clock, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

const SpaceAIAdvantagesPage = () => {
    const router = useRouter();
    const advantages = [
        { title: "Predictive Capabilities", description: "Forecast schedule slippage and budget overruns before they occur.", icon: TrendingUp },
        { title: "Computer Vision", description: "Identify safety hazards before they become incidents.", icon: Eye },
        { title: "AI Agents", description: "Automate and optimize complex workflows.", icon: Cpu },
        { title: "Dynamic Decision-Making", description: "Transform static data into forward-looking assets that drive action.", icon: Zap },
    ];
    return (
        <div>
        <section className="py-10 md:py-16 bg-black relative min-h-fit flex items-center">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">The Space AI Advantage</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
                        While legacy systems manage the past, we command the future. Our platform elevates the conversation beyond feature comparison to focus on predictive insight generation.
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={advantage.title}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center transition-all duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            whileHover={{ y: -5, scale: 1.03, boxShadow: "0px 10px 30px rgba(140, 69, 255, 0.1)", transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                    <advantage.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white">{advantage.title}</h3>
                            <p className="mt-2 text-white/70">{advantage.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* Measurable Results */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">The Space AI Advantage in Numbers</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "45 Days", label: "Early Warnings", desc: "Predict delays over a month before they impact your schedule." },
              { icon: Shield, stat: "92%", label: "Forecast Accuracy", desc: "Industry-leading prediction accuracy across all project types." },
              { icon: BarChart3, stat: "23%", label: "Cost Reduction", desc: "Average savings through AI-optimized resource management." },
              { icon: TrendingUp, stat: "2 Weeks", label: "Time to Value", desc: "Teams are fully operational within two weeks of onboarding." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
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
              { q: "What makes Space AI different from other construction software?", a: "Space AI is the only platform with built-in predictive AI that forecasts delays 45 days early, computer vision for progress tracking, and natural language AI agents. It actively prevents problems instead of just digitizing paper." },
              { q: "How accurate is Space AI's predictive analytics?", a: "Our models achieve 92% accuracy in forecasting delays, cost overruns, and risks. Accuracy increases to 95%+ after processing 5+ projects in your portfolio." },
              { q: "Can Space AI integrate with existing tools?", a: "Yes. We integrate with 50+ tools including Procore, Autodesk BIM 360, Primavera P6, MS Project, Bluebeam, and major accounting platforms. Open REST API available for custom integrations." },
              { q: "How quickly can teams adopt Space AI?", a: "Most teams are fully operational within 2-4 weeks with guided onboarding, data migration tools, and pre-configured templates." },
              { q: "What support does Space AI provide?", a: "24/7 technical support, dedicated customer success managers, weekly training webinars, and an extensive knowledge base. Enterprise customers get custom implementation plans." }
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
          <RelatedPages cluster="ai-technology" currentPath="/platform/space-ai-advantages" title="Explore AI Technology" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Experience the Space AI Advantage</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">See how predictive AI transforms construction project outcomes.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default SpaceAIAdvantagesPage;
