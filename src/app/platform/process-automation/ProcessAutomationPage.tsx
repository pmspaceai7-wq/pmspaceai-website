"use client";

import { motion } from "framer-motion";
import { Cog, SlidersHorizontal, Share2, ShieldCheck } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { useRouter } from "next/navigation";

const ProcessAutomationPage = () => {
    const router = useRouter();
    const benefits = [
        { title: "End-to-End Automation", description: "Orchestrate workflows across RPA, AI, IDP, and API integrations for seamless execution.", icon: SlidersHorizontal },
        { title: "Enhanced Efficiency", description: "Eliminate manual tasks, reduce errors, and free up your workforce to focus on high-value activities.", icon: Cog },
        { title: "Scalable & Resilient", description: "Build robust automations that can scale with your business demands and adapt to changing needs.", icon: Share2 },
        { title: "Secure & Compliant", description: "Ensure your automated processes meet the highest standards of security and regulatory compliance.", icon: ShieldCheck },
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
                        Revolutionize Operations with AI-Driven Process Automation
                    </motion.h1>
                    <motion.p
                        className="mt-4 text-lg text-white/70 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        Deliver end-to-end process automation with RPA, AI, IDP, and API integrations.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            className="bg-gray-900/50 p-6 rounded-2xl border border-white/10 group hover:border-teal-500/50 transition-colors duration-300 cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                                <benefit.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                            <p className="text-white/60">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

      {/* Automation Results */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Automation That Delivers Results</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "20hrs", label: "Saved Weekly", desc: "Per project manager through automated administrative workflows." },
              { icon: Shield, stat: "70%", label: "Faster RFIs", desc: "Automated routing and response tracking accelerates RFI resolution." },
              { icon: BarChart3, stat: "5 Min", label: "Daily Reports", desc: "AI-generated daily reports replace 45 minutes of manual work." },
              { icon: TrendingUp, stat: "99%", label: "Document Accuracy", desc: "Intelligent document processing eliminates manual data entry errors." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-6 bg-black/30 border border-white/10 rounded-xl">
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
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
              { q: "What construction processes can Space AI automate?", a: "RFI routing, submittal reviews, daily reports, change orders, invoice matching, safety inspections, progress photo tagging, and document version control. Most repetitive admin tasks can be automated." },
              { q: "How does intelligent document processing work?", a: "Space AI's IDP engine uses OCR and NLP to extract data from drawings, specs, contracts, and submittals. It classifies documents, extracts key data, and flags discrepancies automatically." },
              { q: "Can it automate compliance and reporting?", a: "Yes. Space AI monitors activities against regulatory requirements, generates reports on schedule, and flags non-compliance. It auto-generates Davis-Bacon reports and safety summaries." },
              { q: "How much time does automation save?", a: "Teams save 15-20 hours per week per PM. Document processing drops from hours to minutes. RFI routing is 70% faster. Daily reports take under 5 minutes." },
              { q: "Does it work with existing workflows?", a: "Yes. The automation engine maps your current approval chains, notification preferences, and routing rules, then automates them while maintaining full visibility." }
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
          <RelatedPages cluster="ai-technology" currentPath="/platform/process-automation" title="Explore AI Technology" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Automate Construction Workflows?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Eliminate manual tasks and let your team focus on building.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ProcessAutomationPage;
