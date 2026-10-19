"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { School, ClipboardList, FlaskConical, CheckCircle, BarChart3, Clock, Shield, TrendingUp, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";
import { RelatedPages } from "@/components/InternalLinking";

const educationSolutions = [
  {
    title: "Smart Campus Development",
    description: "Manage the integration of technology infrastructure, modern learning spaces, and sustainable designs for future-ready educational environments.",
    icon: School,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Capital Improvement Planning",
    description: "Oversee district-wide renovations, bond programs, and new construction with portfolio management tools that ensure transparency and budget adherence.",
    icon: ClipboardList,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Research Facility Construction",
    description: "Coordinate the complex requirements for labs and specialized academic buildings, ensuring projects meet stringent safety and research standards.",
    icon: FlaskConical,
    color: "from-amber-500 to-orange-600"
  }
];

const EducationPage = () => {
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
                Building Smarter Campuses and Research Facilities
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Construct and modernize the next generation of learning environments. Our platform helps manage the development of K-12 schools, university campuses, and advanced research facilities with efficiency and stakeholder collaboration.
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
              <Image src="/assets/images/education.webp" alt="Modern university campus" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-2 sm:py-4 md:py-5 relative">
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
                      Building the Campuses of Tomorrow
                  </h2>
                  <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
                      From initial planning to final handover, our platform provides the tools needed to deliver educational facilities that inspire.
                  </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {educationSolutions.map((solution, index) => (
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

      {/* Why Space AI for Education */}
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
              Why School Districts Choose Space AI
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">
              From K-12 schools to university campuses, Space AI delivers measurable results for education construction projects.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, stat: "30%", label: "Faster Completion", desc: "AI scheduling accelerates school construction while respecting academic calendars." },
              { icon: Shield, stat: "100%", label: "Safety Compliance", desc: "Automated safety tracking for occupied campus construction zones." },
              { icon: BarChart3, stat: "22%", label: "Cost Savings", desc: "Predictive analytics reduce change orders and material waste on campus projects." },
              { icon: TrendingUp, stat: "Zero", label: "Class Disruptions", desc: "Phased scheduling ensures academic operations continue uninterrupted." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 bg-black/30 border border-white/10 rounded-xl"
              >
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
                q: "How does Space AI handle school construction scheduling around academic calendars?",
                a: "Space AI integrates academic calendar constraints directly into project schedules. The platform automatically plans high-noise activities like demolition and concrete pouring during breaks and summer recess, while quieter finishing work is scheduled during school sessions."
              },
              {
                q: "Can Space AI manage K-12 and higher education construction differently?",
                a: "Yes. Space AI offers configurable templates for K-12 schools, universities, and research facilities. Each template includes industry-specific compliance checklists, safety protocols for occupied campuses, and specialized workflows for laboratory fit-outs, athletic facilities, and student housing construction."
              },
              {
                q: "How does the platform ensure compliance with education facility building codes?",
                a: "Space AI includes built-in compliance tracking for ADA accessibility, fire safety, environmental standards, and state-specific education facility codes. The platform automatically flags non-compliant designs during pre-construction and generates audit-ready reports for school board and regulatory approvals."
              },
              {
                q: "What cost savings can school districts expect with Space AI?",
                a: "School districts using Space AI typically save 18-30% on construction costs through predictive analytics that prevent change orders, AI-optimized material procurement, and reduced rework. For a $25M school construction project, districts can expect $3-5M in savings."
              },
              {
                q: "Does Space AI support phased campus construction for occupied schools?",
                a: "Absolutely. Space AI excels at phased construction planning for occupied campuses. The platform creates detailed swing-space plans, coordinates temporary classroom setups, and manages student and staff safety zones."
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
          <RelatedPages cluster="industries" currentPath="/industries/education" title="Explore Other Industries" />

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Education Projects?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">Join leading school districts and universities building smarter campuses with Space AI.</p>
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

export default EducationPage;
