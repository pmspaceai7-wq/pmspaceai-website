"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, TrendingUp, Users, Lightbulb, Brain, Zap, Globe, ShieldCheck } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

// Ensure this image path is correct in your project structure
import collaborationBackgroundImage from "@/app/platform/images/collaboration-background.png";

// Component 1: SloganAndPositioning
const SloganAndPositioning = () => {
  return (
    <section className="py-8 md:py-12 overflow-hidden bg-black">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    className="text-center md:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white">
                        Think <span className="text-purple-400">Intelligent</span>.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
                        Think <span className="text-blue-400">Future</span>.
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mt-2">
                        Think <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Space AI</span>.
                    </h2>
                    <p className="mt-8 max-w-xl text-lg text-white/80">
                        While others may add AI features as an afterthought, Space AI is the only platform conceived and built from the ground up as a true System of Intelligence for the AECO industry.
                    </p>
                </motion.div>
                <motion.div
                    className="relative w-full h-96 rounded-2xl overflow-hidden border border-purple-500/20 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(140, 69, 255, 0.2)", transition: { type: "spring", stiffness: 300 } }}
                >
                     <Image
                        src={collaborationBackgroundImage}
                        alt="Diverse team of construction professionals collaborating with AI tools"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        placeholder="blur"
                    />
                </motion.div>
            </div>
        </div>
    </section>
  );
};

// Component 2: PathForward
const PathForward = () => {
    const path = [
        { title: "Reframe the Market", description: "Establish the System of Intelligence paradigm as the new standard.", icon: Layers, align: "left" },
        { title: "Demonstrate Value", description: "Showcase tangible ROI through reduced waste and improved outcomes.", icon: TrendingUp, align: "right" },
        { title: "Scale Adoption", description: "Drive industry-wide transformation through the Space AI platform.", icon: Users, align: "left" },
        { title: "Realize Vision", description: "Create a more efficient, productive, and profitable AECO industry.", icon: Lightbulb, align: "right" },
    ];
  return (
    <section className="py-10 md:py-10 bg-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white">The Path Forward</h2>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent md:transform md:-translate-x-1/2" />
          
          {path.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative flex md:justify-center items-start md:items-center mb-24 md:mb-16 last:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Left Side Content (Desktop) */}
              <div className={`w-1/2 pr-16 hidden md:block ${item.align === 'right' ? 'invisible' : ''}`}>
                <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-white/70">{item.description}</p>
                </motion.div>
              </div>

              {/* Center Icon */}
               <div className="absolute left-6 top-1 md:static md:w-auto transform -translate-x-1/2 md:transform-none">
                 <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center z-10 relative">
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </motion.div>
                </div>
              
              {/* Right Side Content (Desktop) & All Content (Mobile) */}
              <div className={`w-full md:w-1/2 pl-24 md:pl-16 ${item.align === 'left' ? 'md:invisible' : ''}`}>
                 <motion.div
                    className="text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  >
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-white/70">{item.description}</p>
                  </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Main Page Component for this route
const OurVisionPage = () => {
  const router = useRouter();

  return (
    <div className="bg-black overflow-x-hidden">
      <SloganAndPositioning />
      <PathForward />

      {/* Vision Impact Stats */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Building the Future of Construction</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">Our System of Intelligence is already delivering measurable results across the AECO industry.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, stat: "45 Days", label: "Early Delay Prediction", desc: "AI forecasts potential project delays up to 45 days before they occur." },
              { icon: Zap, stat: "23%", label: "Cost Savings", desc: "Average reduction in project costs through intelligent automation and optimization." },
              { icon: Globe, stat: "10K+", label: "Projects Managed", desc: "Construction projects worldwide powered by the Space AI platform." },
              { icon: ShieldCheck, stat: "99.9%", label: "Platform Uptime", desc: "Enterprise-grade reliability for mission-critical construction operations." },
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
              { q: "What is Space AI's vision for construction?", a: "Space AI envisions a construction industry powered by a true System of Intelligence, where AI-driven predictive analytics, automation, and unified data replace fragmented tools and reactive decision-making." },
              { q: "How does Space AI plan to transform the AECO industry?", a: "By establishing the System of Intelligence paradigm. Unlike platforms that bolt on AI as an afterthought, Space AI was built from the ground up with AI at its core, delivering real-time insights and data-driven project optimization." },
              { q: "What technology innovations is Space AI developing?", a: "Advanced predictive analytics, AI-powered scheduling, automated compliance tracking, intelligent document management, and ML models trained on construction-specific data. Our roadmap includes generative design and autonomous progress monitoring." },
              { q: "How does Space AI's vision benefit construction workers?", a: "By reducing administrative burden, automating repetitive tasks, and providing mobile-first tools for field teams. Workers spend less time on paperwork and more time on high-value activities." },
              { q: "When will Space AI's full vision be realized?", a: "Our vision is being realized in phases. Today we deliver AI-powered project management and predictive analytics. Major capabilities around generative AI and industry-wide intelligence are planned through 2027 and beyond." }
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
          <RelatedPages cluster="ai-technology" currentPath="/platform/our-vision" title="Explore Our Technology" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future with Space AI?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Discover how our System of Intelligence can transform your construction projects with AI-powered insights and automation.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVisionPage;