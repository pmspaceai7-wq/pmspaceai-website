// src/app/guides/healthcare-construction-management/page.tsx
// TASK 62: Industry-Specific Guide - Healthcare Construction
// Comprehensive guide for healthcare facility construction management

import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, CheckCircle, ArrowRight, Shield, Target,
  ChevronRight, Heart, Stethoscope, Clock, Users,
  FileText, AlertTriangle, Award, Zap, Brain,
  ClipboardCheck, Lock, Activity
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Healthcare Construction Management Guide 2026 | Space AI",
  description: "Guide to healthcare construction management. Learn HIPAA compliance, infection control, ICRA requirements, and hospital renovation best practices.",
  keywords: [
    "healthcare construction management",
    "hospital construction management",
    "medical facility construction",
    "ICRA construction",
    "healthcare project management",
    "hospital renovation management",
    "medical construction software",
    "healthcare construction compliance",
    "infection control construction",
    "HIPAA construction",
  ],
  openGraph: {
    title: "Healthcare Construction Management Guide 2026 | Space AI",
    description: "Complete guide to managing healthcare construction projects. ICRA compliance, infection control, and hospital-specific best practices.",
    type: "article",
    url: "https://pmspace.ai/guides/healthcare-construction-management/",
  },
  alternates: {
    canonical: "https://pmspace.ai/guides/healthcare-construction-management/",
  },
};

// Healthcare construction challenges data
const healthcareChallenges = [
  {
    challenge: "ICRA Compliance",
    description: "Infection Control Risk Assessment is mandatory for all healthcare construction. Failure can result in project shutdown and fines.",
    solution: "Space AI automates ICRA documentation, tracks barrier integrity, and alerts on breaches.",
    icon: Shield,
  },
  {
    challenge: "24/7 Operations",
    description: "Healthcare facilities never close. Construction must work around patient care, emergencies, and critical operations.",
    solution: "AI scheduling optimizes work sequences to minimize disruption to clinical operations.",
    icon: Clock,
  },
  {
    challenge: "Life Safety Systems",
    description: "Maintaining fire/life safety systems during renovation while ensuring code compliance.",
    solution: "Real-time tracking of interim life safety measures (ILSM) with automated compliance reports.",
    icon: AlertTriangle,
  },
  {
    challenge: "Regulatory Complexity",
    description: "Joint Commission, CMS, state health departments, and local AHJs all have jurisdiction.",
    solution: "Built-in regulatory checklists ensure nothing is missed across all governing bodies.",
    icon: FileText,
  },
  {
    challenge: "Infection Prevention",
    description: "Construction dust and debris can cause hospital-acquired infections in immunocompromised patients.",
    solution: "Negative pressure monitoring, barrier inspection logs, and automated alerts.",
    icon: Heart,
  },
  {
    challenge: "Phased Occupancy",
    description: "Complex phasing to keep departments operational while renovating adjacent spaces.",
    solution: "4D scheduling visualization shows exactly how construction phases impact operations.",
    icon: Zap,
  },
];

// ICRA classification matrix
const icraMatrix = [
  {
    type: "Type A",
    activities: "Inspection, non-invasive activities",
    risk: "Low",
    requirements: "Dust containment, work restrictions",
    color: "green",
  },
  {
    type: "Type B",
    activities: "Small-scale, short duration work",
    risk: "Medium-Low",
    requirements: "Wet methods, containment, HEPA vacuum",
    color: "yellow",
  },
  {
    type: "Type C",
    activities: "Work generating moderate dust",
    risk: "Medium-High",
    requirements: "Hard barriers, negative pressure, anteroom",
    color: "orange",
  },
  {
    type: "Type D",
    activities: "Major demolition, construction",
    risk: "High",
    requirements: "Complete containment, dedicated HVAC, air monitoring",
    color: "red",
  },
];

// Key statistics
const healthcareStats = [
  { stat: "$65B", label: "US Healthcare Construction (2026)" },
  { stat: "42%", label: "Projects Face ICRA Issues" },
  { stat: "78%", label: "Require 24/7 Coordination" },
  { stat: "3.2x", label: "Complexity vs Commercial" },
];

// FAQs
const healthcareFAQs = [
  {
    question: "What is ICRA in healthcare construction?",
    answer: "ICRA (Infection Control Risk Assessment) is a mandatory process for all construction activities in healthcare facilities. It evaluates the risk of infection transmission from construction activities to patients and staff, and determines required precautions. ICRA involves assessing patient population risk, construction activity type, and implementing appropriate containment measures."
  },
  {
    question: "How do you manage construction in an occupied hospital?",
    answer: "Managing construction in an occupied hospital requires: 1) Detailed phasing plans to maintain operations, 2) ICRA compliance with proper barriers and negative pressure, 3) Coordination with clinical staff for scheduling, 4) Maintaining life safety systems with ILSM plans, 5) Clear communication protocols for emergencies, and 6) Noise and vibration management during patient care hours."
  },
  {
    question: "What certifications are required for healthcare construction managers?",
    answer: "Healthcare construction managers often benefit from: ASHE CHFM (Certified Healthcare Facility Manager), ASHE CHC (Certified Healthcare Constructor), PMP (Project Management Professional), and specific training in ICRA, ILSM, and Joint Commission standards. Many healthcare systems require these certifications for project managers."
  },
  {
    question: "How does construction software help with healthcare compliance?",
    answer: "Construction software like Space AI helps with healthcare compliance by: automating ICRA documentation and tracking, managing inspection schedules and barrier logs, tracking life safety measure compliance, generating regulatory reports for Joint Commission and CMS, and maintaining audit trails for all compliance activities."
  },
  {
    question: "What are the biggest risks in healthcare construction?",
    answer: "The biggest risks in healthcare construction include: infection transmission to immunocompromised patients, disruption to critical clinical operations, life safety system failures during renovation, regulatory non-compliance resulting in citations, and cost overruns due to the complexity of occupied facility work."
  },
  {
    question: "How is healthcare construction different from commercial construction?",
    answer: "Healthcare construction differs significantly: 1) Must maintain 24/7 operations, 2) Requires ICRA compliance for infection control, 3) Subject to Joint Commission and CMS regulations, 4) Critical life safety systems must remain operational, 5) Higher stakeholder complexity (clinical staff, patients, families), and 6) Specialized mechanical systems (medical gas, negative pressure rooms)."
  },
];

// Project phases specific to healthcare
const healthcarePhases = [
  {
    phase: "Pre-Design & Planning",
    duration: "3-6 months",
    activities: [
      "Certificate of Need (CON) application",
      "Regulatory pre-submission meetings",
      "Clinical workflow analysis",
      "Master ICRA development",
      "Stakeholder engagement plan",
    ],
  },
  {
    phase: "Design Development",
    duration: "6-12 months",
    activities: [
      "FGI Guidelines compliance review",
      "Clinical adjacency planning",
      "Medical equipment coordination",
      "ILSM planning",
      "State health department submissions",
    ],
  },
  {
    phase: "Pre-Construction",
    duration: "2-4 months",
    activities: [
      "Contractor ICRA training",
      "Mock-up barrier installation",
      "Communication protocols",
      "Emergency procedures",
      "Security and badge coordination",
    ],
  },
  {
    phase: "Construction",
    duration: "Variable",
    activities: [
      "Daily ICRA barrier inspections",
      "Negative pressure monitoring",
      "Infection control rounds",
      "ILSM compliance tracking",
      "Clinical coordination meetings",
    ],
  },
  {
    phase: "Commissioning & Closeout",
    duration: "2-4 months",
    activities: [
      "Terminal cleaning protocols",
      "Air quality testing",
      "Medical equipment installation",
      "Staff training coordination",
      "Regulatory inspections",
    ],
  },
];

export default function HealthcareConstructionGuidePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/guides/" className="hover:text-white transition">Guides</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Healthcare Construction Management</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300">Industry Guide: Healthcare</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-cyan-200">
                Healthcare Construction Management Guide
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl">
              The definitive guide to managing construction in hospitals, medical centers, and healthcare facilities. 
              Master ICRA compliance, infection control, and the unique challenges of occupied healthcare renovation.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {healthcareStats.map((stat, idx) => (
                <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.stat}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/construction-software-demo/"
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                See Healthcare Features
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/resources/construction-software-downloads/"
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/20 transition"
              >
                Download ICRA Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Healthcare is Different */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Healthcare Construction is Different
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Healthcare construction is among the most complex and regulated sectors in the industry. 
              Unlike commercial or residential projects, hospitals and medical facilities present unique 
              challenges that require specialized knowledge, tools, and approaches.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {healthcareChallenges.map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-red-500/20">
                      <item.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.challenge}</h3>
                      <p className="text-sm text-white/60 mb-3">{item.description}</p>
                      <p className="text-sm text-cyan-400">
                        <strong>Space AI Solution:</strong> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ICRA Classification Matrix */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              ICRA Classification Matrix
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Understanding ICRA (Infection Control Risk Assessment) classifications is critical for 
              healthcare construction. Each classification requires specific precautions based on the 
              construction activity type and patient population risk.
            </p>

            <div className="space-y-4">
              {icraMatrix.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-xl border ${
                    item.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
                    item.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    item.color === 'orange' ? 'bg-orange-500/10 border-orange-500/30' :
                    'bg-red-500/10 border-red-500/30'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="md:w-24">
                      <span className={`text-2xl font-bold ${
                        item.color === 'green' ? 'text-green-400' :
                        item.color === 'yellow' ? 'text-yellow-400' :
                        item.color === 'orange' ? 'text-orange-400' :
                        'text-red-400'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <div className="flex-1 grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-xs text-white/50 uppercase mb-1">Activities</div>
                        <div className="text-sm text-white/80">{item.activities}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase mb-1">Risk Level</div>
                        <div className="text-sm text-white/80">{item.risk}</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/50 uppercase mb-1">Requirements</div>
                        <div className="text-sm text-white/80">{item.requirements}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Healthcare Construction Project Phases
            </h2>
            
            <p className="text-lg text-white/70 mb-8">
              Healthcare projects follow a modified construction lifecycle with additional regulatory 
              and compliance milestones. Here&apos;s what to expect in each phase.
            </p>

            <div className="space-y-6">
              {healthcarePhases.map((phase, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                        <span className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-sm">
                          {phase.duration}
                        </span>
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Software Features for Healthcare */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Space AI Healthcare Construction Features
            </h2>
            <p className="text-lg text-white/70 mb-12">
              Purpose-built tools for the unique demands of healthcare facility construction
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "ICRA Management", desc: "Automated tracking of ICRA classifications, barrier inspections, and negative pressure monitoring." },
                { icon: Lock, title: "HIPAA Compliance", desc: "Secure document management and communication tools that maintain HIPAA requirements." },
                { icon: Activity, title: "Life Safety Tracking", desc: "ILSM compliance tracking with automated notifications for impairment periods." },
                { icon: ClipboardCheck, title: "Regulatory Reports", desc: "Generate reports for Joint Commission, CMS, and state health department inspections." },
                { icon: Users, title: "Clinical Coordination", desc: "Stakeholder communication tools designed for busy clinical staff and administrators." },
                { icon: Brain, title: "AI Risk Prediction", desc: "Predictive analytics identify infection control risks before they become issues." },
              ].map((feature, idx) => (
                <div key={idx} className="p-6 bg-white/5 rounded-xl border border-white/10 text-left">
                  <feature.icon className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Healthcare Construction FAQs
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {healthcareFAQs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Related Industry Guides
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/industries/infrastructure/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <Building2 className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Infrastructure Construction
              </h3>
              <p className="text-sm text-white/60">
                Managing large-scale infrastructure projects
              </p>
            </Link>

            <Link 
              href="/industries/education/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <Award className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Education Construction
              </h3>
              <p className="text-sm text-white/60">
                Schools, universities, and campus projects
              </p>
            </Link>

            <Link 
              href="/industries/government/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Government Construction
              </h3>
              <p className="text-sm text-white/60">
                Federal, state, and municipal projects
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for Healthcare-Grade Construction Management?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join leading healthcare systems using Space AI to manage complex 
            medical facility construction projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/try-it-now/"
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/construction-software-demo/"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition"
            >
              Book Healthcare Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={healthcareFAQs} />
    </div>
  );
}

