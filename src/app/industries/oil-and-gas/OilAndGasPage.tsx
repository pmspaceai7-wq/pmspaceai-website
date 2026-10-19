"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Shield, TrendingUp, BarChart3, Clock, AlertTriangle, Building2,
  CheckCircle2, Target, Briefcase, Settings, Fuel, Users, FileText,
  DollarSign, MapPin
} from "lucide-react";
import { RelatedPages } from "@/components/InternalLinking";
import { useRouter } from "next/navigation";

const OilAndGasPage = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30">

      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.1),transparent_50%)]"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium mb-4">
                Oil and Gas Construction Management
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Oil and Gas Construction Management: <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Controlling Cost, Risk, and Complexity at Scale</span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed">
                Manage capital-intensive energy projects with absolute precision across planning, execution, and monitoring.
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
              <Image src="/assets/images/oilandgas.webp" alt="Oil and Gas Facility" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
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
              Oil and gas construction projects are among the most capital-intensive and high-risk projects in the world. From refineries and pipelines to offshore platforms and processing facilities, these projects involve massive budgets, complex engineering, and strict regulatory oversight. Even small inefficiencies can escalate into millions in losses, delays, or compliance issues.
            </p>
            <p>
              Managing such projects requires absolute precision across planning, execution, and monitoring. Yet many teams still rely on fragmented systems, manual tracking, and disconnected workflows. This lack of integration creates blind spots in cost tracking, delays in decision-making, and increased exposure to risk.
            </p>
            <p>
              In an environment where timelines are critical and margins are under pressure, traditional project management approaches are no longer sufficient. Oil and gas construction management must be data-driven, centralized, and real-time. This page explores the unique challenges of the industry and how modern solutions can help you improve visibility, control costs, and deliver projects successfully.
            </p>
          </div>
        </section>

        {/* What Makes Oil and Gas Construction Unique */}
        <section>
          <h2 className="text-3xl font-bold mb-8">What Makes Oil and Gas Construction Unique</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-orange-500/20 border border-orange-500/30">
                  <DollarSign className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold">Large-Scale and Capital-Intensive Projects</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Oil and gas projects often involve multi-billion dollar investments.</p>
                <p>These projects require detailed planning, accurate forecasting, and strict financial control to ensure profitability and feasibility.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <Settings className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold">Complex Engineering and EPC Structures</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Engineering, procurement, and construction activities are deeply interconnected.</p>
                <p>A delay in procurement can impact construction timelines, while design changes can affect both cost and execution. Coordinating these elements requires advanced project management capabilities.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-purple-500/20 border border-purple-500/30">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Stringent Regulatory and Safety Standards</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Compliance with environmental, safety, and operational regulations is mandatory.</p>
                <p>Failure to meet these standards can result in severe penalties, project shutdowns, or long-term reputational damage.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/30">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold">Remote and Challenging Project Locations</h3>
              </div>
              <div className="space-y-3 text-white/70">
                <p>Many oil and gas projects are located in remote or offshore environments.</p>
                <p>This creates logistical challenges in resource allocation, communication, and execution.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Challenges */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Key Challenges in Oil and Gas Construction Management</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Limited Real-Time Visibility</h3>
              <div className="space-y-2 text-white/70">
                <p>Without centralized systems, project managers struggle to track progress, costs, and risks in real time.</p>
                <p>This makes it difficult to identify issues early and respond effectively.</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Cost Overruns and Budget Misalignment</h3>
              <div className="space-y-2 text-white/70">
                <p>Given the scale of these projects, even minor deviations can lead to significant cost overruns.</p>
                <p>Using <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">construction cost management software</Link> enables accurate tracking of expenses and ensures alignment with project budgets.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Delays in Scheduling and Execution</h3>
              <div className="space-y-2 text-white/70">
                <p>Complex dependencies between engineering, procurement, and construction activities make scheduling difficult.</p>
                <p>Delays in one area often cascade across the entire project.</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Fragmented Communication Across Stakeholders</h3>
              <div className="space-y-2 text-white/70">
                <p>Multiple contractors, subcontractors, and stakeholders are involved in oil and gas projects.</p>
                <p>Without a unified communication system, coordination becomes inefficient and error-prone.</p>
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
            <h2 className="text-3xl font-bold">The Role of Technology in Oil and Gas Construction</h2>
          </div>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Modern oil and gas projects require integrated platforms that provide end-to-end visibility.
            </p>
            <p>
              Digital solutions enable teams to track progress, monitor costs, and manage risks in real time. They reduce reliance on manual processes and improve accuracy across all stages of the project.
            </p>
            <p>
              By integrating <Link href="/tools/construction-expense-management-software/" className="text-blue-400 hover:underline">project budgeting tools</Link>, project managers can align financial planning with execution, ensuring better cost control and resource utilization.
            </p>
            <p>
              Technology also improves collaboration by providing a centralized source of truth for all stakeholders.
            </p>
          </div>
        </section>

        {/* Best Practices */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <Target className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold">Best Practices for Managing Oil and Gas Construction Projects</h2>
          </div>
          <p className="text-lg text-white/70 mb-8">
            Successfully delivering oil and gas projects requires a structured approach that prioritizes visibility, control, and coordination.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Centralize Project Data and Systems</h3>
              <div className="space-y-2 text-white/70">
                <p>All project data should be managed within a single platform.</p>
                <p>This ensures consistency, reduces duplication, and provides a clear overview of project performance.</p>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Implement Real-Time Cost and Risk Monitoring</h3>
              <div className="space-y-2 text-white/70">
                <p>Continuous monitoring of costs and risks allows project managers to identify deviations early.</p>
                <p>This helps prevent budget overruns and ensures proactive decision-making.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Strengthen Integration Across EPC Phases</h3>
              <div className="space-y-2 text-white/70">
                <p>Engineering, procurement, and construction activities must be tightly integrated.</p>
                <p>Ensuring seamless data flow between these phases improves efficiency and reduces delays.</p>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Enhance Compliance and Safety Tracking</h3>
              <div className="space-y-2 text-white/70">
                <p>Compliance should be embedded into project workflows.</p>
                <p>Tracking inspections, certifications, and safety requirements in real time reduces the risk of non-compliance.</p>
              </div>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Improve Communication and Collaboration</h3>
              <div className="space-y-2 text-white/70">
                <p>A centralized communication system ensures that all stakeholders are aligned.</p>
                <p>This reduces misunderstandings, improves coordination, and enhances project execution.</p>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold mb-3">Optimize Resource Allocation and Logistics</h3>
              <div className="space-y-2 text-white/70">
                <p>Efficient management of labor, materials, and equipment is critical, especially in remote locations.</p>
                <p>Using <Link href="/project-scheduling-software/" className="text-blue-400 hover:underline">construction resource management tools</Link> helps ensure that resources are utilized effectively and project timelines are maintained.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Traditional Tools Are Not Enough */}
        <section>
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-3xl font-bold">Why Traditional Tools Are Not Enough</h2>
          </div>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Spreadsheets and disconnected systems cannot handle the complexity of oil and gas construction projects.
            </p>
            <p>
              They lack integration, real-time updates, and scalability. This leads to fragmented data, delayed decisions, and increased risk.
            </p>
            <p>
              Without a centralized platform, managing costs, schedules, and compliance becomes significantly more difficult.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
          <div className="space-y-4 text-lg text-white/80 leading-relaxed">
            <p>
              Oil and gas construction projects demand precision, coordination, and real-time control.
            </p>
            <p>
              Managing these projects with outdated tools increases the risk of delays, cost overruns, and compliance issues.
            </p>
            <p>
              By adopting a modern, technology-driven approach, project teams can improve visibility, reduce risks, and deliver projects successfully.
            </p>
            <p>
              In a high-stakes industry, effective project management is essential for long-term success.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Take Control of Oil and Gas Projects with PMspace</h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              PMspace is designed to manage the complexity of oil and gas construction. It provides a centralized platform that integrates cost management, scheduling, document control, and collaboration.
            </p>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              With real-time insights and streamlined workflows, PMspace helps you stay in control of every aspect of your project.
            </p>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto font-medium">
              Reduce costs, improve efficiency, and deliver projects with confidence using a solution built for modern construction challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/construction-software-demo/')}
                className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Start Optimizing Your Oil and Gas Construction Projects with PMspace Today
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
          <RelatedPages cluster="industries" currentPath="/industries/oil-and-gas" title="Explore Other Industries" />
        </div>
      </section>

    </div>
  );
};

export default OilAndGasPage;
