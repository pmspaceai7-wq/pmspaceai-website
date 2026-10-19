"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Bot, Zap, TrendingUp, BarChart3, Clock, Shield } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

const ArtificialIntelligencePage = () => {
    const router = useRouter();
    const features = [
        { title: "AI Agents & Copilots", description: "Deploy intelligent agents to automate complex workflows and assist users in real-time.", icon: Bot },
        { title: "Predictive Analytics", description: "Leverage machine learning to forecast trends, identify risks, and make data-driven decisions.", icon: TrendingUp },
        { title: "Intelligent Document Processing", description: "Extract and interpret data from any document, turning unstructured information into actionable insights.", icon: Zap },
        { title: "Unified Platform", description: "Integrate AI capabilities seamlessly across all your business processes on a single, cohesive platform.", icon: BrainCircuit },
    ];

    return (
        <div className="bg-black relative overflow-hidden">
        <section className="py-10 md:py-16 relative min-h-fit flex items-center">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Artificial Intelligence Platform To Transform Business Operations
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Drive business value with AI agents and copilots in a unified process platform.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="bg-gray-900/50 p-6 rounded-2xl border border-white/10 group hover:border-cyan-500/50 transition-colors duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-white/60">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* Why Construction Teams Choose Space AI */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">AI That Delivers Measurable Results</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">Our AI platform transforms raw project data into actionable intelligence that saves time and money.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "45 Days", label: "Early Warning", desc: "Predictive models forecast delays weeks before they impact your schedule." },
              { icon: Shield, stat: "92%", label: "Prediction Accuracy", desc: "Machine learning models trained on millions of construction data points." },
              { icon: BarChart3, stat: "23%", label: "Cost Savings", desc: "AI-optimized resource allocation reduces waste and budget overruns." },
              { icon: TrendingUp, stat: "10x", label: "Faster Insights", desc: "AI agents answer complex project questions in seconds, not hours." },
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
              { q: "What AI capabilities does Space AI offer for construction?", a: "Space AI provides predictive analytics to forecast delays, computer vision for progress monitoring, natural language AI agents for instant project answers, and machine learning for resource optimization." },
              { q: "How does predictive analytics prevent construction delays?", a: "Space AI analyzes historical data, weather patterns, supply chain status, and labor availability to identify delay risks before they materialize. The platform generates alerts with actionable recommendations weeks in advance." },
              { q: "Can the ML models learn from our company's project data?", a: "Yes. Space AI's models continuously learn from your data to improve predictions over time. Custom models can be trained on your historical data for company-specific risk factors." },
              { q: "How do AI agents work in the platform?", a: "AI agents act as virtual project assistants. Ask questions like 'What is the risk of delay on Building B?' and get instant, accurate answers with supporting evidence from your real-time project data." },
              { q: "Is Space AI's platform secure for sensitive construction data?", a: "Absolutely. All AI computations run within SOC 2-compliant infrastructure. Data is encrypted, never shared across clients, and all AI recommendations are fully auditable." }
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
          <RelatedPages cluster="ai-technology" currentPath="/platform/ai" title="Explore AI Technology" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Harness AI for Construction?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">See how Space AI&apos;s intelligence platform transforms construction project outcomes.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ArtificialIntelligencePage;