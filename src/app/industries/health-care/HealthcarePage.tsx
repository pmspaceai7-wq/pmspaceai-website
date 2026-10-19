"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck, Activity, Clock, ArrowRight, BarChart3, Shield,
  TrendingUp, FileText, Users, AlertTriangle, Building2, CheckCircle2,
  Target, Briefcase, Settings
} from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

const HealthcarePage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30">

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs font-medium mb-4">
                Healthcare Construction Management
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Healthcare Construction Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Delivering Complex Projects with Precision and Compliance</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Build hospitals and medical facilities with extreme precision, strict compliance, and seamless coordination across all stakeholders.
              </p>
              <div className="mt-8 flex gap-4">
                <button
                  onClick={() => router.push('/construction-software-demo/')}
                  className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Schedule a Demo
                </button>
                <Link href="/features/" className="px-6 py-3 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                  Explore Features
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image src="/assets/images/health-care.webp" alt="Modern Hospital Facility" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-5xl px-4 py-16 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Healthcare construction projects are unlike any other type of build. Hospitals, clinics, and medical facilities demand extreme precision, strict regulatory compliance, and uninterrupted coordination between multiple stakeholders. A minor delay or miscommunication can have serious consequences, not just financially but also in terms of patient safety and operational readiness.
            </p>
            <p>
              These projects involve highly specialized systems such as medical gas pipelines, infection control zones, and advanced HVAC systems. At the same time, timelines are often tight due to urgent healthcare needs. Managing all of this with disconnected tools and manual processes creates unnecessary risk.
            </p>
            <p>
              Healthcare construction management requires a structured, technology-driven approach that ensures visibility, coordination, and compliance at every stage. This page explores the unique challenges of healthcare construction and how modern solutions can help you deliver projects efficiently, on budget, and fully compliant with industry standards.
            </p>
          </div>
        </section>

        {/* What Makes Healthcare Construction Unique */}
        <section>
          <h2 className="text-3xl font-bold mb-8">What Makes Healthcare Construction Unique</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Strict Regulatory and Compliance Requirements</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Healthcare facilities must meet rigorous standards related to safety, hygiene, and functionality.</p>
                <p>Regulatory approvals, inspections, and certifications are required at multiple stages. Missing or delaying any compliance requirement can halt the project entirely.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Highly Specialized Infrastructure</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Hospitals and healthcare facilities require complex systems such as surgical suites, isolation rooms, and specialized ventilation systems.</p>
                <p>These systems must be installed and tested with precision, leaving little room for error.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Continuous Coordination Across Stakeholders</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Healthcare projects involve architects, engineers, medical planners, contractors, and regulatory bodies.</p>
                <p>Each stakeholder contributes critical inputs that must align perfectly to ensure successful delivery.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
                  <Activity className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">Operational Sensitivity</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Many healthcare projects take place in active environments where patient care continues during construction.</p>
                <p>This requires careful planning to minimize disruption and maintain safety standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Key Challenges in Healthcare Construction Management</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Managing Complex Documentation and Approvals</h3>
              <div className="space-y-2 text-white/70">
                <p>Healthcare projects generate a large volume of compliance documents, drawings, and approvals.</p>
                <p>Without structured document management, teams struggle to track requirements and maintain accuracy.</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Cost Control in High-Stakes Projects</h3>
              <div className="space-y-2 text-white/70">
                <p>Healthcare construction involves high costs due to specialized materials and systems.</p>
                <p>Budget overruns can significantly impact project viability. Using <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">construction cost management software</Link> helps track expenses and maintain financial discipline.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Scheduling Under Tight Deadlines</h3>
              <div className="space-y-2 text-white/70">
                <p>Healthcare facilities are often time-sensitive projects.</p>
                <p>Delays can affect operational readiness and service delivery, making efficient scheduling critical.</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Communication Gaps Between Teams</h3>
              <div className="space-y-2 text-white/70">
                <p>With multiple stakeholders involved, communication breakdowns are common.</p>
                <p>These gaps can lead to errors, delays, and rework.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role of Technology */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold">The Role of Technology in Healthcare Construction</h2>
          </div>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Modern healthcare construction requires integrated systems that provide real-time visibility and control.
            </p>
            <p>
              Digital platforms enable teams to manage documentation, track progress, and monitor costs in a centralized environment. They reduce manual effort and improve accuracy across all project stages.
            </p>
            <p>
              By integrating <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">project budgeting tools</Link>, project managers can align financial planning with execution, ensuring that budgets remain under control.
            </p>
            <p>
              Technology also enhances collaboration, allowing stakeholders to access and update information in real time.
            </p>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold">Best Practices for Healthcare Construction Management</h2>
          </div>
          <p className="text-lg text-white/70 mb-8">
            Delivering successful healthcare projects requires a disciplined approach that prioritizes compliance, coordination, and efficiency.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Centralize Project Data and Documentation</h3>
              <div className="space-y-2 text-white/70">
                <p>All project information should be stored in a single system.</p>
                <p>This ensures that teams have access to accurate and up-to-date data, reducing errors and improving decision-making. Using <Link href="/tools/construction-document-management-software/" className="text-blue-400 hover:underline">construction document management systems</Link> helps streamline documentation and approvals.</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Implement Real-Time Cost Monitoring</h3>
              <div className="space-y-2 text-white/70">
                <p>Tracking costs continuously allows project managers to identify deviations early.</p>
                <p>This helps prevent budget overruns and ensures financial control throughout the project lifecycle.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Strengthen Compliance Management</h3>
              <div className="space-y-2 text-white/70">
                <p>Compliance should be integrated into every stage of the project.</p>
                <p>Automated tracking of approvals, inspections, and certifications ensures that no requirement is missed.</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Optimize Scheduling and Resource Allocation</h3>
              <div className="space-y-2 text-white/70">
                <p>Efficient scheduling ensures that tasks are completed in the correct sequence.</p>
                <p>Proper resource allocation minimizes delays and improves productivity.</p>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Enhance Communication and Collaboration</h3>
              <div className="space-y-2 text-white/70">
                <p>Clear communication channels and shared platforms ensure that all stakeholders remain aligned.</p>
                <p>This reduces misunderstandings and improves overall project efficiency.</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Plan for Risk and Contingencies</h3>
              <div className="space-y-2 text-white/70">
                <p>Healthcare projects are highly sensitive to risks.</p>
                <p>Identifying potential challenges early and planning contingencies helps mitigate disruptions and maintain project stability.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Traditional Tools Fall Short */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold">Why Traditional Tools Fall Short</h2>
          </div>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Spreadsheets and disconnected systems are not designed to handle the complexity of healthcare construction.
            </p>
            <p>
              They lack real-time updates, integration, and scalability. This leads to fragmented data, delayed decisions, and increased risk.
            </p>
            <p>
              Without a centralized platform, managing compliance, costs, and coordination becomes significantly more difficult.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Healthcare construction projects demand precision, compliance, and seamless coordination.
            </p>
            <p>
              Managing these projects with outdated tools increases the risk of delays, cost overruns, and operational issues.
            </p>
            <p>
              By adopting a structured and technology-driven approach, construction teams can improve visibility, ensure compliance, and deliver projects successfully.
            </p>
            <p>
              In an industry where accuracy and reliability are critical, effective project management is essential.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Deliver Healthcare Projects with Confidence Using PMspace</h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              PMspace is built to handle the complexity of healthcare construction. It provides a centralized platform that connects cost management, document control, scheduling, and collaboration.
            </p>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              With real-time insights and integrated workflows, PMspace helps you stay in control of every aspect of your project.
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-medium">
              Reduce risks, maintain compliance, and deliver healthcare facilities efficiently with a solution designed for modern construction challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/construction-software-demo/')}
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Take Control of Your Healthcare Construction Projects with PMspace Today
              </button>
              <Link href="/features/" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* Related Pages */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <RelatedPages cluster="industries" currentPath="/industries/health-care" title="Explore Other Industries" />
        </div>
      </section>

    </div>
  );
};

export default HealthcarePage;
