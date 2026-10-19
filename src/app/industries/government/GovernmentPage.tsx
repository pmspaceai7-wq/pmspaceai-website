"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Building, FileCheck, Users, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


// Data for the solutions section, inspired by the 3-card layout
const governmentSolutions = [
  {
    title: "Streamlined Permitting & Compliance",
    description: "Automate and track inspections, permits, and certifications across all public projects with our intelligent compliance dashboard, reducing administrative burdens.",
    icon: FileCheck,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Capital Project Oversight",
    description: "Gain unparalleled visibility into cost, schedule, and quality for every project in your portfolio. Maximize taxpayer value with data-driven decision-making.",
    icon: Building,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Enhanced Public Transparency",
    description: "Foster trust with automated reporting and dedicated stakeholder portals. Ensure every entity, from suppliers to citizens, is informed and aligned.",
    icon: Users,
    color: "from-amber-500 to-orange-600"
  }
];

const GovernmentPage = () => {

    const router = useRouter();

  return (
    <div className="bg-black text-white min-h-fit overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 md:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Government & Public Sector: Project Management with AI.
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Cut through red tape and enhance project controls for government initiatives. Space AI offers a cloud-based platform to manage capital projects, automate permitting, and coordinate construction documents with unparalleled efficiency and transparency.
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
              <Image src="/assets/images/government.webp" alt="Government Infrastructure Project" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
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
                      Empowering Public Sector Projects
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
                      Stay in control of your civil projects with construction management software designed for the unique needs of state and local governments.
                  </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {governmentSolutions.map((solution, index) => (
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

      {/* Why Government Agencies Choose Space AI */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Why Government Agencies Choose Space AI</h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">Delivering public sector projects with full transparency, compliance, and accountability.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, stat: "100%", label: "Audit Compliance", desc: "Complete audit trails for every decision and expenditure on public projects." },
              { icon: Clock, stat: "20%", label: "Faster Delivery", desc: "AI scheduling reduces delays on government infrastructure projects." },
              { icon: BarChart3, stat: "$15M+", label: "Taxpayer Savings", desc: "Predictive analytics prevent cost overruns on bond-funded programs." },
              { icon: TrendingUp, stat: "Real-Time", label: "Public Dashboards", desc: "Transparent reporting for oversight committees and public stakeholders." },
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
              { q: "How does Space AI ensure transparency in government construction projects?", a: "Space AI provides complete audit trails for every decision, change order, and expenditure. The platform generates real-time dashboards that can be shared with oversight committees, public stakeholders, and elected officials." },
              { q: "Does Space AI comply with government procurement and security requirements?", a: "Yes. Space AI supports FedRAMP-aligned security protocols, SOC 2 compliance, and role-based access controls suitable for government environments. The platform handles prevailing wage tracking and DBE/MBE compliance reporting." },
              { q: "How does the platform handle multi-agency coordination on public projects?", a: "Space AI enables multi-agency collaboration through configurable permission layers. Each agency maintains its own workspace while sharing relevant project data through controlled access points." },
              { q: "Can Space AI manage bond-funded capital improvement programs?", a: "Absolutely. Space AI tracks entire capital improvement programs with bond-fund allocation across multiple projects. The platform monitors spending against bond requirements and generates compliance reports for bond trustees." },
              { q: "What cost savings do government agencies achieve with Space AI?", a: "Government agencies typically achieve 15-25% cost savings through predictive scheduling, automated compliance tracking, and reduced change orders. For a $100M public works program, this translates to $15-25M in taxpayer savings." }
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
          <RelatedPages cluster="industries" currentPath="/industries/government" title="Explore Other Industries" />
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Modernize Public Sector Construction?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join government agencies delivering projects on time, on budget, and with full public accountability.</p>
            <button onClick={() => router.push('/construction-software-demo/')} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer">Book a Demo</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentPage;
