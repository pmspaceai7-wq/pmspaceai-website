"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, BarChart3, HardHat, ArrowRight, Clock, Shield, TrendingUp, AlertCircle, Users, FileText, Calendar } from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

const CommercialHighRisePage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-fit overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
              Commercial High-Rise Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
              Commercial High-Rise Construction Management: Smarter Control for Complex Projects
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
              Master the unique challenges of vertical construction with precision, real-time control, and integrated workflows designed for modern high-rise projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/construction-software-demo/')}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black relative z-50 gap-2"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/features/">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-200">
                  Explore Features
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Introduction</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>
              Commercial high-rise projects are among the most complex undertakings in construction. Tight urban spaces, vertical logistics, multi-phase scheduling, and strict compliance requirements create an environment where even small inefficiencies can escalate into major delays and cost overruns.
            </p>
            <p>
              Managing these projects requires more than traditional tools and disconnected workflows. When teams rely on spreadsheets, emails, and siloed systems, coordination breaks down. Information gets delayed, decisions slow down, and visibility into costs and progress becomes limited.
            </p>
            <p>
              In high-rise construction, where multiple contractors, stakeholders, and systems operate simultaneously, precision and real-time control are critical. Without it, projects risk going over budget, missing deadlines, and compromising quality.
            </p>
            <p>
              This page explains the unique challenges of commercial high-rise construction and how a structured, technology-driven approach can help you manage complexity, improve efficiency, and deliver projects successfully.
            </p>
          </div>
        </motion.div>
      </section>

      {/* What Makes High-Rise Unique */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">What Makes Commercial High-Rise Construction Unique</h2>

          <div className="space-y-6">
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-400" />
                Vertical Complexity and Coordination
              </h3>
              <div className="space-y-2 text-white/70">
                <p>Unlike low-rise projects, high-rise construction requires vertical coordination across multiple floors and systems.</p>
                <p>Workflows are interdependent. Delays on one floor can affect progress across the entire structure. Managing this complexity requires precise scheduling and coordination between teams.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-400" />
                High Stakeholder Involvement
              </h3>
              <div className="space-y-2 text-white/70">
                <p>Developers, contractors, consultants, and regulatory bodies all play critical roles.</p>
                <p>Each stakeholder requires accurate and timely information. Miscommunication can lead to delays, disputes, and costly errors.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                Tight Urban Constraints
              </h3>
              <div className="space-y-2 text-white/70">
                <p>High-rise projects are often built in dense urban environments.</p>
                <p>Limited space for storage, restricted access, and logistical challenges make resource management significantly more difficult.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                Strict Compliance and Safety Requirements
              </h3>
              <div className="space-y-2 text-white/70">
                <p>Regulatory compliance and safety standards are more stringent in high-rise construction.</p>
                <p>Managing documentation, inspections, and approvals efficiently is essential to avoid penalties and delays.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Key Challenges */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Key Challenges in High-Rise Construction Management</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Lack of Real-Time Visibility</h3>
              <div className="space-y-2 text-white/70">
                <p>Without centralized systems, project managers struggle to track progress, costs, and resource utilization in real time.</p>
                <p>This lack of visibility makes it difficult to identify issues early and take corrective action.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Cost Overruns and Budget Misalignment</h3>
              <div className="space-y-2 text-white/70">
                <p>High-rise projects involve large budgets and complex cost structures.</p>
                <p>
                  When cost tracking is not aligned with actual progress, overruns become inevitable. Using{' '}
                  <Link href="/construction-cost-management-software/" className="text-blue-400 hover:underline">
                    construction cost management software
                  </Link>{' '}
                  helps maintain financial control and prevent budget deviations.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Inefficient Scheduling and Delays</h3>
              <div className="space-y-2 text-white/70">
                <p>Coordinating multiple teams across different floors requires precise scheduling.</p>
                <p>Manual scheduling methods often fail to capture real-time changes, leading to delays and inefficiencies.</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Fragmented Communication</h3>
              <div className="space-y-2 text-white/70">
                <p>Information scattered across emails, calls, and documents creates confusion.</p>
                <p>Teams often work with outdated data, resulting in errors and rework.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* How Technology Transforms */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-2xl p-8 max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How Technology Transforms High-Rise Construction Management</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>Modern high-rise projects demand integrated systems that connect all aspects of project management.</p>
            <p>Digital platforms provide real-time insights into progress, costs, and resources. They enable faster decision-making and reduce dependency on manual processes.</p>
            <p>
              By integrating tools such as{' '}
              <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">
                project budgeting tools
              </Link>
              , project managers can align financial planning with execution, ensuring better control over costs and timelines.
            </p>
            <p>Technology also improves collaboration by providing a single source of truth for all stakeholders.</p>
          </div>
        </motion.div>
      </section>

      {/* Best Practices (High-Value Section) */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Best Practices for Managing Commercial High-Rise Projects</h2>
          <p className="text-white/70 mb-8 text-center">Successfully managing high-rise construction requires a structured approach that combines planning, technology, and execution discipline.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <FileText className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Centralize Project Data and Workflows</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>All project information should be stored and managed within a single platform.</p>
                <p>This ensures that every stakeholder has access to accurate and up-to-date data, reducing miscommunication and errors.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Implement Real-Time Cost and Progress Tracking</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Tracking costs and progress in real time allows project managers to identify deviations early.</p>
                <p>This enables proactive decision-making and prevents small issues from becoming major problems.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <Calendar className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Optimize Scheduling with Dynamic Planning</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Static schedules are not effective for high-rise projects.</p>
                <p>Dynamic scheduling systems adapt to real-time changes, ensuring that workflows remain aligned and delays are minimized.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <Users className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Strengthen Communication and Collaboration</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Clear communication channels and shared data environments improve coordination between teams.</p>
                <p>This reduces delays, avoids duplication of work, and ensures smoother execution.</p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <FileText className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Improve Document and Compliance Management</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Managing drawings, approvals, and compliance documents efficiently is critical.</p>
                <p>
                  Using{' '}
                  <Link href="/construction-document-management-software/" className="text-blue-400 hover:underline">
                    construction document management systems
                  </Link>{' '}
                  ensures that all documentation is organized, accessible, and up to date.
                </p>
              </div>
            </div>

            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">Enhance Resource Allocation</h3>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Efficient use of labor, materials, and equipment is essential in high-rise construction.</p>
                <p>Real-time insights into resource utilization help reduce waste and improve productivity.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Traditional Tools Fail */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Traditional Tools Fail in High-Rise Projects</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>Spreadsheets and disconnected tools cannot handle the complexity of modern high-rise construction.</p>
            <p>They lack real-time updates, integration, and scalability. As projects grow in size and complexity, these limitations become more pronounced.</p>
            <p>Without a centralized system, project managers are forced to rely on fragmented data, leading to poor decision-making and increased risk.</p>
          </div>
        </motion.div>
      </section>

      {/* Conclusion */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Conclusion</h2>
          <div className="space-y-4 text-white/70 text-base leading-relaxed">
            <p>Commercial high-rise construction demands precision, coordination, and real-time control.</p>
            <p>Managing these projects with outdated tools and fragmented workflows increases the risk of delays, cost overruns, and inefficiencies.</p>
            <p>By adopting a structured, technology-driven approach, construction teams can improve visibility, streamline operations, and deliver projects successfully.</p>
            <p>In a highly competitive industry, the ability to manage complexity effectively is a key differentiator.</p>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Build High-Rise Projects with Confidence Using PMspace
          </h2>
          <p className="text-white/70 mb-6 max-w-3xl mx-auto">
            PMspace is designed to handle the complexity of commercial high-rise construction. It provides a centralized platform that connects cost management, scheduling, document control, and team collaboration.
          </p>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            With real-time insights and integrated workflows, PMspace helps you stay in control of your project from start to finish. Reduce delays, prevent cost overruns, and improve project efficiency with a system built for modern construction challenges.
          </p>
          <button
            onClick={() => router.push('/construction-software-demo/')}
            className="bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Take Control of Your High-Rise Projects with PMspace
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>

      {/* Related Resources */}
      <section className="container mx-auto px-4 py-10">
        <RelatedPages cluster="industries" currentPath="/industries/commercial-high-rise" title="Explore Other Industries" />
      </section>
    </div>
  );
};

export default CommercialHighRisePage;
