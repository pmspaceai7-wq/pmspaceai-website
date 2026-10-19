"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Hotel, UtensilsCrossed, Construction, CheckCircle, BarChart3, Clock, Shield, TrendingUp } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";

// Data for the solutions section, tailored for the Hospitality industry
const hospitalitySolutions = [
  {
    title: "Luxury Hotels & Resorts",
    description: "Manage the development of premier destinations, from boutique hotels to large-scale resorts, ensuring every detail aligns with brand standards to elevate the guest experience.",
    icon: Hotel,
    color: "from-amber-400 to-yellow-500"
  },
  {
    title: "Dining & Entertainment Venues",
    description: "Coordinate the build-out of high-end restaurants, exclusive clubs, and entertainment complexes with complex AV, kitchen, and bespoke design requirements.",
    icon: UtensilsCrossed,
    color: "from-rose-500 to-pink-600"
  },
  {
    title: "Renovation & Brand Conversion",
    description: "Oversee complex renovations and Property Improvement Plans (PIPs) with minimal disruption to operations, ensuring a seamless brand transition and enhanced asset value.",
    icon: Construction,
    color: "from-blue-500 to-sky-600"
  }
];

const HospitalityPage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-fit overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Transforming Hospitality with Intelligent Project Solutions
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Construct iconic destinations that define luxury and create unforgettable guest experiences. Our platform streamlines the complexities of hospitality projects, from groundbreaking to grand opening.
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
                src="/assets/images/hospitality.webp"
                alt="Luxury hotel lobby and lounge"
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,70,239,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.08),transparent_70%)]"></div>

        <div className="container px-4 sm:px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-2">
              Building Unforgettable Experiences
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              Deliver world-class destinations that merge visionary design with flawless execution. Our tools ensure your project meets the highest standards of quality, on time and on budget.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalitySolutions.map((solution, index) => (
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

      {/* Why Space AI for Hospitality */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Why Hospitality Leaders Choose Space AI
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">
              From boutique hotels to mega-resort developments, Space AI delivers measurable results across every phase of hospitality construction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "25%", label: "Faster Project Delivery", desc: "AI-optimized scheduling reduces hotel construction timelines significantly." },
              { icon: Shield, stat: "40%", label: "Fewer Change Orders", desc: "Predictive analytics catches design conflicts before they become costly changes." },
              { icon: BarChart3, stat: "98%", label: "Budget Accuracy", desc: "Real-time cost tracking keeps hospitality projects within approved budgets." },
              { icon: TrendingUp, stat: "3x", label: "Faster Approvals", desc: "Automated compliance and brand-standard checks speed up approval workflows." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-black/30 border border-white/10 rounded-xl"
              >
                <item.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "What is hospitality construction management software?",
                a: "Hospitality construction management software is an AI-powered platform designed specifically for hotel, resort, and entertainment venue construction projects. It handles brand-standard compliance, guest-experience-driven design coordination, and renovation scheduling while minimizing operational disruption to existing properties."
              },
              {
                q: "How does Space AI handle hotel renovation projects with minimal guest disruption?",
                a: "Space AI uses AI-powered phased scheduling to plan renovations floor-by-floor or wing-by-wing, ensuring occupied areas remain undisturbed. The platform coordinates trade sequencing to minimize noise during peak guest hours and tracks real-time progress so property managers can accurately communicate timelines to guests."
              },
              {
                q: "Can Space AI manage brand standard compliance for hotel chains?",
                a: "Yes. Space AI includes customizable brand compliance checklists that ensure every finish, fixture, and design element meets the hotel chain's standards. The platform flags deviations during construction and generates compliance reports for franchise approval, reducing costly post-construction rework by up to 40%."
              },
              {
                q: "How does the platform handle multi-property hospitality portfolios?",
                a: "Space AI provides a portfolio dashboard that tracks progress, budget, and timelines across multiple hotel or resort projects simultaneously. Property owners can compare performance metrics, share resources between projects, and standardize processes across their entire hospitality portfolio from a single platform."
              },
              {
                q: "What ROI can hospitality developers expect from using Space AI?",
                a: "Hospitality developers using Space AI typically see 15-25% reduction in project timelines, 20-30% fewer change orders through predictive analytics, and up to 35% improvement in budget accuracy. For a typical $50M hotel project, this translates to $5-8M in savings from avoided delays and rework."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-black/30 border border-white/10 rounded-xl p-6"
              >
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
          <RelatedPages cluster="industries" currentPath="/industries/hospitality" title="Explore Other Industries" />

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Hospitality Projects?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join leading hotel developers and resort builders who use Space AI to deliver world-class properties on time and on budget.</p>
            <button
              onClick={() => router.push('/construction-software-demo/')}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HospitalityPage;
