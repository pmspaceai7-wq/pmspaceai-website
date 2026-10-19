"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  TrainTrack, Signal, TrafficCone, BarChart3, Clock, Shield, TrendingUp,
  Eye, AlertTriangle, Calendar, MessageSquare, Users, CheckCircle
} from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

// Challenges data
const challenges = [
  {
    title: "Limited Visibility into Project Performance",
    description: "Without centralized systems, project managers struggle to track real-time progress and performance. This makes it difficult to identify issues early and take corrective action.",
    icon: Eye,
    color: "from-red-600 to-orange-600"
  },
  {
    title: "Cost Overruns in Large Infrastructure Projects",
    description: "Transportation projects involve significant financial investments. Even small inefficiencies can result in major budget deviations.",
    icon: AlertTriangle,
    color: "from-amber-500 to-yellow-600"
  },
  {
    title: "Scheduling Complexity Across Multiple Phases",
    description: "Transportation projects involve multiple phases that must be carefully coordinated. Delays in one phase can impact the entire project timeline.",
    icon: Calendar,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Communication Gaps Across Teams",
    description: "With multiple stakeholders involved, miscommunication is a common challenge. This leads to errors, delays, and inefficiencies in execution.",
    icon: MessageSquare,
    color: "from-purple-600 to-indigo-700"
  }
];

// Best practices data
const bestPractices = [
  {
    title: "Centralize Project Data and Workflows",
    description: "All project information should be managed within a single platform. This ensures consistency, reduces duplication, and provides clear visibility into project performance.",
    icon: Shield
  },
  {
    title: "Implement Real-Time Cost and Progress Tracking",
    description: "Tracking costs and progress continuously allows project managers to identify deviations early. This enables proactive decision-making and prevents delays and budget overruns.",
    icon: TrendingUp
  },
  {
    title: "Strengthen Planning and Scheduling",
    description: "Accurate and dynamic scheduling is critical for transportation projects. Using advanced planning tools helps teams adapt to changes and maintain project timelines.",
    icon: Calendar
  },
  {
    title: "Improve Stakeholder Communication",
    description: "Clear and consistent communication ensures alignment between all stakeholders. Centralized communication platforms reduce misunderstandings and improve coordination.",
    icon: MessageSquare
  },
  {
    title: "Enhance Compliance and Risk Management",
    description: "Compliance should be integrated into project workflows. Tracking approvals, inspections, and regulatory requirements in real time reduces risks and ensures smooth project execution.",
    icon: CheckCircle
  },
  {
    title: "Optimize Resource Allocation",
    description: "Efficient use of labor, materials, and equipment is essential for large-scale infrastructure projects.",
    icon: Users
  }
];

const TransportationPage = () => {

    const router= useRouter();

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
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
                Transportation Construction Management: Delivering Infrastructure Projects with Precision and Control
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Transportation infrastructure projects shape economies and connect cities, but managing them is far from simple. Highways, rail systems, airports, and urban transit projects involve massive budgets, long timelines, and multiple stakeholders. Even minor inefficiencies can lead to significant delays, cost overruns, and public scrutiny.
              </p>
              <p className="mt-4 text-base text-white/60">
                Unlike smaller construction projects, transportation projects operate under constant pressure. Deadlines are tied to public needs, funding cycles, and regulatory approvals. At the same time, teams must coordinate across contractors, government agencies, engineers, and consultants. When information is fragmented or outdated, decision-making slows down and risks increase.
              </p>
              <p className="mt-4 text-base text-white/60">
                To succeed in this environment, project teams need complete visibility, structured workflows, and real-time control over costs, schedules, and resources. This page explores the unique challenges of transportation construction and how modern management approaches can help deliver projects efficiently, on budget, and with minimal risk.
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
              <Image src="/assets/images/transportation.webp" alt="High-speed train on a modern railway" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Transportation Construction Unique */}
      <section id="unique-factors" className="py-12 md:py-16 relative">
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
              What Makes Transportation Construction Unique
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
              Transportation projects operate under unique constraints that require specialized management approaches.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Large-Scale and Long-Duration Projects</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Transportation projects often span several years and involve extensive planning and execution phases. Managing long timelines requires consistent tracking of progress, costs, and resources to ensure alignment with project goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Multiple Stakeholders and Public Accountability</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Government bodies, contractors, consultants, and the public all have a stake in transportation projects. This creates a need for transparency, accurate reporting, and clear communication throughout the project lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Complex Regulatory and Approval Processes</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Transportation projects must comply with environmental regulations, safety standards, and public policies. Approvals and inspections occur at multiple stages, making compliance management critical.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Dynamic and Unpredictable Conditions</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Weather, site conditions, and external factors can significantly impact project timelines and costs. Teams must be prepared to adapt quickly to changing conditions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Challenges */}
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
              Key Challenges in Transportation Construction Management
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${challenge.color}`}></div>
                <div className="p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${challenge.color} flex items-center justify-center shadow-lg mb-4`}>
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-white/60 group-hover:text-white/80 text-sm leading-relaxed flex-grow">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-white/70 text-base max-w-3xl mx-auto">
              Using <Link href="/construction-cost-management-software/" className="text-cyan-400 hover:text-cyan-300 underline">construction cost management software</Link> helps maintain financial control and prevent overruns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Role of Technology */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              The Role of Technology in Transportation Construction
            </h2>
            <div className="space-y-4 text-white/70 text-base leading-relaxed">
              <p>
                Modern transportation projects require integrated systems that provide real-time insights and control.
              </p>
              <p>
                Digital platforms enable teams to manage schedules, track costs, and coordinate resources efficiently. They reduce reliance on manual processes and improve accuracy across all stages of the project.
              </p>
              <p>
                By integrating <Link href="/tools/construction-expense-management-software/" className="text-cyan-400 hover:text-cyan-300 underline">project budgeting tools</Link>, project managers can align financial planning with execution, ensuring better cost control and resource utilization.
              </p>
              <p>
                Technology also enhances collaboration by providing a centralized source of truth for all stakeholders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
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
              Best Practices for Managing Transportation Construction Projects
            </h2>
            <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70">
              Delivering successful transportation projects requires a structured and disciplined approach to project management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/30 border border-white/10 rounded-xl p-6"
              >
                <practice.icon className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{practice.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-center"
          >
            <p className="text-white/70 text-base max-w-3xl mx-auto">
              Using <Link href="/solutions/project-management/" className="text-cyan-400 hover:text-cyan-300 underline">construction resource management tools</Link> helps improve productivity and reduce waste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Traditional Tools Fail */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(140,69,255,0.08),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Why Traditional Tools Fail in Infrastructure Projects
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Spreadsheets and disconnected systems are not designed for the complexity of transportation construction.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              They lack real-time updates, integration, and scalability. This results in fragmented data and delayed decision-making. Without a centralized system, managing costs, schedules, and compliance becomes significantly more difficult.
            </p>
          </motion.div>
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
              { q: "What makes transportation construction projects different from other construction projects?", a: "Transportation projects are typically large-scale, long-duration, and involve multiple stakeholders including government agencies, contractors, and the public. They require extensive regulatory compliance, careful coordination across phases, and must adapt to dynamic conditions like weather and site variations." },
              { q: "How can technology improve transportation project management?", a: "Digital platforms provide real-time visibility into costs, schedules, and resources. They enable centralized data management, improve stakeholder communication, enhance compliance tracking, and support proactive decision-making through integrated workflows and automation." },
              { q: "What are the main challenges in managing transportation infrastructure projects?", a: "Key challenges include limited visibility into project performance, cost overruns, scheduling complexity across multiple phases, and communication gaps between diverse stakeholders. These projects also face strict regulatory requirements and unpredictable external conditions." },
              { q: "Why do traditional tools like spreadsheets fail for transportation projects?", a: "Spreadsheets and disconnected systems lack real-time updates, integration capabilities, and scalability. They create fragmented data, delay decision-making, and make it difficult to manage the complexity of costs, schedules, and compliance in large infrastructure projects." },
              { q: "How does PMspace help manage transportation construction projects?", a: "PMspace provides a centralized platform that integrates cost management, scheduling, document control, and collaboration. It offers real-time insights, streamlined workflows, and helps teams reduce delays, prevent cost overruns, and maintain control over all project aspects." }
            ].map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-black/30 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion & CTA */}
      <section className="py-12 md:py-16 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Deliver Infrastructure Projects with Confidence
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Transportation construction projects demand precision, coordination, and real-time control.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-4">
              Managing these projects with outdated tools increases the risk of delays, cost overruns, and inefficiencies.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-6">
              By adopting a modern, technology-driven approach, project teams can improve visibility, reduce risks, and deliver infrastructure projects successfully. In a sector where performance and accountability are critical, effective project management is essential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Deliver Infrastructure Projects with Confidence Using PMspace
            </h3>
            <p className="text-white/70 mb-6 max-w-3xl mx-auto">
              PMspace is built to handle the complexity of transportation construction. It provides a centralized platform that integrates cost management, scheduling, document control, and collaboration.
            </p>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto text-sm">
              With real-time insights and streamlined workflows, PMspace helps you stay in control of every aspect of your project. Reduce delays, prevent cost overruns, and improve efficiency with a solution designed for modern infrastructure challenges.
            </p>
            <button
              onClick={() => router.push('/construction-software-demo/')}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Take Control of Your Transportation Projects Today
            </button>
          </motion.div>

          <div className="mt-12">
            <RelatedPages cluster="industries" currentPath="/industries/transportation" title="Explore Other Industries" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransportationPage;