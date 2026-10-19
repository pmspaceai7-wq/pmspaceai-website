// src/app/subcontractor-management-software/page.tsx
// TASK 32: Subcontractor Management Software Page
// Target: "subcontractor management software", "sub management construction"

import { Metadata } from "next";
import Link from "next/link";
import {
  Users, CheckCircle, Star, ArrowRight, Zap, Shield,
  TrendingUp, Clock, BarChart3, Sparkles, FileText, Award,
  Rocket, Target, ClipboardCheck, AlertTriangle, FileCheck,
  UserCheck, Calendar, DollarSign, MessageSquare, Bell, Search
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Subcontractor Management Software | Track Subs & Contracts | Space AI",
  description: "Streamline subcontractor management with prequalification, contract tracking, insurance monitoring, and performance analytics. Build your trusted sub network.",
  keywords: [
    "subcontractor management software",
    "sub management software construction",
    "subcontractor tracking software",
    "subcontractor prequalification software",
    "construction subcontractor management",
    "sub management system",
    "subcontractor compliance software",
    "contractor management software",
    "subcontractor scheduling software",
    "sub payment tracking",
  ],
  alternates: {
    canonical: "https://pmspace.ai/subcontractor-management-software-construction/",
  },
  openGraph: {
    title: "Subcontractor Management Software | Space AI",
    description: "Build your trusted sub network. Prequalification, contracts, insurance, and performance tracking.",
    url: "https://pmspace.ai/subcontractor-management-software-construction/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/subcontractor-management-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Subcontractor Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subcontractor Management Software",
    description: "The complete platform for managing subcontractors in construction.",
  },
};

// Sub management features
const subFeatures = [
  {
    icon: ClipboardCheck,
    title: "Prequalification",
    description: "Custom questionnaires, financial reviews, safety records, and reference checks. Build a database of qualified subs before you need them.",
    benefit: "Reduce risk from day one",
  },
  {
    icon: FileCheck,
    title: "Contract Management",
    description: "Generate, send, and track subcontracts with e-signatures. Manage scope, terms, insurance requirements, and change orders in one place.",
    benefit: "Contracts in minutes, not days",
  },
  {
    icon: Shield,
    title: "Insurance Tracking",
    description: "Monitor COIs with automatic expiration alerts. Verify coverage meets requirements. No more chasing certificates.",
    benefit: "Never miss an expiration",
  },
  {
    icon: Star,
    title: "Performance Scoring",
    description: "Rate subs on quality, schedule, safety, and communication. Historical performance data informs future bidding decisions.",
    benefit: "Build your A-team",
  },
  {
    icon: DollarSign,
    title: "Payment Management",
    description: "Track pay applications, lien waivers, and retainage. Automate payment workflows and maintain complete audit trails.",
    benefit: "Smooth payment cycles",
  },
  {
    icon: Calendar,
    title: "Scheduling & Coordination",
    description: "Assign work, share lookahead schedules, and coordinate between trades. Automatic notifications keep everyone aligned.",
    benefit: "Eliminate trade conflicts",
  },
];

// Sub lifecycle stages
const subLifecycle = [
  {
    stage: "1",
    title: "Find & Qualify",
    description: "Search database, send prequal forms, verify credentials",
    icon: Search,
  },
  {
    stage: "2",
    title: "Bid & Award",
    description: "Invite to bid, compare proposals, award contracts",
    icon: Target,
  },
  {
    stage: "3",
    title: "Onboard",
    description: "Execute contracts, verify insurance, safety orientation",
    icon: UserCheck,
  },
  {
    stage: "4",
    title: "Manage",
    description: "Schedule work, track progress, process payments",
    icon: BarChart3,
  },
  {
    stage: "5",
    title: "Evaluate",
    description: "Score performance, collect feedback, update database",
    icon: Award,
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "85%",
    label: "Faster prequalification",
    description: "Vs. manual paper processes",
  },
  {
    metric: "0",
    label: "Insurance lapses",
    description: "With automatic monitoring",
  },
  {
    metric: "3x",
    label: "Faster contract execution",
    description: "With e-signature workflows",
  },
  {
    metric: "40%",
    label: "Fewer trade conflicts",
    description: "With coordinated scheduling",
  },
];

// Insurance types tracked
const insuranceTypes = [
  { type: "General Liability", limit: "$1M/$2M", required: true },
  { type: "Workers Compensation", limit: "Statutory", required: true },
  { type: "Auto Liability", limit: "$1M", required: true },
  { type: "Umbrella/Excess", limit: "$5M", required: false },
  { type: "Professional Liability", limit: "$1M", required: false },
  { type: "Builders Risk", limit: "Project Value", required: false },
];

// Prequalification criteria
const prequalCriteria = [
  { category: "Financial", items: ["Credit reports", "Bank references", "Bonding capacity", "Financial statements"] },
  { category: "Safety", items: ["EMR rating", "OSHA logs", "Safety program", "Training records"] },
  { category: "Experience", items: ["Project history", "Client references", "Certifications", "Key personnel"] },
  { category: "Compliance", items: ["Licenses", "Insurance", "Tax status", "Legal history"] },
];

// Comparison data
const comparisonData = [
  { feature: "Prequalification Forms", pmspace: true, procore: true, gcpay: false, textura: true },
  { feature: "Custom Questionnaires", pmspace: true, procore: true, gcpay: false, textura: false },
  { feature: "Insurance Tracking", pmspace: true, procore: true, gcpay: true, textura: true },
  { feature: "Auto Expiration Alerts", pmspace: true, procore: true, gcpay: true, textura: true },
  { feature: "E-Signature Contracts", pmspace: true, procore: true, gcpay: false, textura: false },
  { feature: "Performance Scoring", pmspace: true, procore: false, gcpay: false, textura: false },
  { feature: "Payment Tracking", pmspace: true, procore: true, gcpay: true, textura: true },
  { feature: "Lien Waiver Management", pmspace: true, procore: true, gcpay: true, textura: true },
  { feature: "AI Recommendations", pmspace: true, procore: false, gcpay: false, textura: false },
  { feature: "Free Plan Available", pmspace: true, procore: false, gcpay: false, textura: false },
];

// FAQ data
const faqData = [
  {
    question: "How does subcontractor prequalification work?",
    answer: "Space AI lets you create custom prequalification questionnaires that subs complete online. You can request financial documents, safety records, insurance certificates, references, and any other documentation. The system scores responses and flags concerns automatically. Build your approved vendor list before projects even start.",
  },
  {
    question: "Can I track insurance certificates automatically?",
    answer: "Yes, Space AI automatically monitors insurance certificates for all your subcontractors. You'll receive alerts 30, 14, and 7 days before policies expire. Subs can upload renewed certificates directly, and the system verifies coverage meets your minimum requirements. No more spreadsheets or manual tracking.",
  },
  {
    question: "How does performance scoring work?",
    answer: "After each project (or phase), you can rate subcontractors on multiple criteria: quality of work, schedule adherence, safety performance, communication, and more. These scores accumulate over time, giving you objective data to inform future bidding and award decisions. See which subs consistently perform and which ones struggle.",
  },
  {
    question: "Can subcontractors access the system?",
    answer: "Yes, subs get their own portal where they can complete prequalification, upload insurance certificates, view schedules, submit pay applications, and communicate with your team. They only see information relevant to their contracts — nothing about other subs or sensitive project data.",
  },
  {
    question: "How do you handle lien waivers?",
    answer: "Space AI generates conditional and unconditional lien waivers based on your state's requirements. Subs can sign electronically, and waivers are automatically linked to the corresponding payment. You can require waivers before releasing payment, ensuring complete compliance.",
  },
  {
    question: "Does it integrate with accounting software?",
    answer: "Yes, Space AI integrates with Sage, Foundation, QuickBooks, Vista, Viewpoint, and other construction accounting systems. Subcontractor information, contracts, and payment data sync automatically — reducing double entry and ensuring your books stay accurate.",
  },
  {
    question: "Can I manage subs across multiple projects?",
    answer: "Absolutely. Space AI gives you a company-wide view of all subcontractor relationships. See which subs are working on which projects, their total contract values, payment status, and performance scores across your entire portfolio.",
  },
  {
    question: "What about sub-tier (lower-tier) subcontractors?",
    answer: "Space AI supports multi-tier subcontractor tracking. You can require your subs to register their sub-tiers, track insurance for all levels, and ensure compliance flows down through the entire supply chain. Important for prevailing wage and government projects.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "We used to have a full-time person just tracking insurance certificates. Now it's automatic. Space AI sends alerts, subs upload renewals, done.",
    author: "Jennifer Walsh",
    title: "Risk Manager",
    company: "Summit Builders",
  },
  {
    quote: "The performance scoring changed how we award work. We can finally back up our decisions with data instead of gut feelings.",
    author: "David Park",
    title: "VP of Operations",
    company: "Cornerstone Construction",
  },
];

export default function SubcontractorManagementPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={faqData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Space AI Subcontractor Management",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "AggregateOffer",
              "lowPrice": "0",
              "highPrice": "99",
              "priceCurrency": "USD",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "247",
              "bestRating": "5",
            },
            "description": "Complete subcontractor management with prequalification, contract tracking, and performance analytics.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950/30 via-black to-cyan-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 mb-6">
                <Users className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-teal-300">Subcontractor Management</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Build Your{" "}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Trusted Sub Network
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Prequalify, contract, track, and pay subcontractors in one platform. 
                Never chase an insurance certificate again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/construction-software-demo/"
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
                >
                  Get Your Free Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/pricing/"
                  className="px-8 py-4 border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all"
                >
                  View Pricing
                </Link>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/60">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free plan available</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited subcontractors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Auto insurance tracking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-16 border-y border-white/10 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {keyMetrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub Lifecycle */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Subcontractor Lifecycle
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From finding qualified subs to evaluating their performance — manage every stage
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {subLifecycle.map((phase, index) => (
                  <div key={index} className="relative flex-1 w-full md:w-auto">
                    {index < subLifecycle.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-teal-500/10" />
                    )}
                    
                    <div className="relative bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-teal-500/30 transition-all">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-white">{phase.stage}</span>
                      </div>
                      
                      <phase.icon className="w-6 h-6 text-teal-400 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-sm text-white/60">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sub Management Tools
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Everything you need to manage subcontractor relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-teal-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-teal-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Tracking Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 mb-4">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span className="text-sm text-teal-300">Insurance Compliance</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Automatic{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Insurance Tracking
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-8">
                  Stop chasing certificates. Space AI monitors every policy, sends automatic 
                  reminders, and verifies coverage meets your requirements.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Automatic expiration alerts (30, 14, 7 days)",
                    "Coverage verification against requirements",
                    "Direct upload portal for subcontractors",
                    "Complete audit trail for compliance",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Insurance Types Tracked</h3>
                <div className="space-y-3">
                  {insuranceTypes.map((insurance, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${insurance.required ? 'bg-red-400' : 'bg-yellow-400'}`} />
                        <span className="text-white">{insurance.type}</span>
                      </div>
                      <span className="text-white/60 text-sm">{insurance.limit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400" />
                    <span>Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span>Optional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prequalification Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Prequalification
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Evaluate subcontractors before you award work
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {prequalCriteria.map((criteria, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">{criteria.category}</h3>
                  <ul className="space-y-2">
                    {criteria.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sub Management Solutions
                </span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-teal-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4 text-white/60">Procore</th>
                    <th className="text-center py-4 px-4 text-white/60">GCPay</th>
                    <th className="text-center py-4 px-4 text-white/60">Textura</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 text-white">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {typeof row.pmspace === "boolean" ? (
                          row.pmspace ? (
                            <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-green-400 font-semibold">{row.pmspace}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.procore === "boolean" ? (
                          row.procore ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.procore}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.gcpay === "boolean" ? (
                          row.gcpay ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.gcpay}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.textura === "boolean" ? (
                          row.textura ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.textura}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-8"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg text-white/80 mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-white/60">{testimonial.title}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-2xl p-12">
              <Users className="w-16 h-16 text-teal-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Take Control of Your Subcontractor Relationships
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join contractors who&apos;ve eliminated insurance lapses and built stronger sub networks 
                with Space AI. Start free today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
                >
                  Start Free Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="px-8 py-4 border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
