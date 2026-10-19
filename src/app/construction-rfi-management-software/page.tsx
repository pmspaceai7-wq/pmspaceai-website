// src/app/construction-rfi-management/page.tsx
// TASK 33: Construction RFI Management Page
// Target: "construction RFI software", "RFI management software"

import { Metadata } from "next";
import Link from "next/link";
import {
  HelpCircle, CheckCircle, Star, ArrowRight, Zap, Shield,
  TrendingUp, Clock, BarChart3, Sparkles, FileText, Users,
  Rocket, Target, MessageSquare, AlertTriangle, FileSearch,
  Send, Timer, Link2, Bell, Filter, Calendar, Archive
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction RFI Management Software | Track RFIs Faster | Space AI",
  description: "Streamline RFI workflows with AI-powered tracking. Create, route, and resolve RFIs 60% faster. Never lose an RFI again. Start free.",
  keywords: [
    "construction RFI software",
    "RFI management software",
    "RFI tracking software construction",
    "request for information software",
    "construction RFI tracking",
    "RFI workflow software",
    "RFI management system",
    "construction RFI tool",
    "project RFI software",
    "RFI response tracking",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-rfi-management-software/",
  },
  openGraph: {
    title: "Construction RFI Management Software | Space AI",
    description: "Create, route, and resolve RFIs 60% faster with AI-powered workflows.",
    url: "https://pmspace.ai/construction-rfi-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/rfi-management-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI RFI Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction RFI Management Software",
    description: "Resolve RFIs 60% faster with intelligent routing and tracking.",
  },
};

// RFI features
const rfiFeatures = [
  {
    icon: Send,
    title: "One-Click RFI Creation",
    description: "Create RFIs from anywhere — desktop, mobile, or email. Auto-populate project info, spec sections, and drawing references.",
    benefit: "Submit in 30 seconds",
  },
  {
    icon: Target,
    title: "Smart Routing",
    description: "AI suggests the right recipient based on RFI content and past routing patterns. Automatic escalation when responses are overdue.",
    benefit: "Route to the right person instantly",
  },
  {
    icon: Timer,
    title: "Response Time Tracking",
    description: "Track days open, days remaining, and response time trends. Identify bottlenecks and hold parties accountable.",
    benefit: "Cut response time 60%",
  },
  {
    icon: Link2,
    title: "Linked References",
    description: "Connect RFIs to drawings, specs, submittals, and photos. Full context travels with every question.",
    benefit: "Complete context always",
  },
  {
    icon: Bell,
    title: "Automated Reminders",
    description: "Configurable reminder schedules keep RFIs moving. Daily digest emails summarize outstanding items.",
    benefit: "Nothing falls through cracks",
  },
  {
    icon: BarChart3,
    title: "RFI Analytics",
    description: "Track RFI volume, response times, and trends by trade, cause, or phase. Spot patterns that indicate bigger issues.",
    benefit: "Data-driven improvements",
  },
];

// RFI workflow steps
const rfiWorkflow = [
  {
    step: "1",
    title: "Create",
    description: "Draft RFI with drawings, specs, photos attached",
    time: "30 sec",
    icon: FileText,
  },
  {
    step: "2",
    title: "Route",
    description: "AI suggests recipient, you approve and send",
    time: "Instant",
    icon: Send,
  },
  {
    step: "3",
    title: "Track",
    description: "Monitor status, send reminders, escalate",
    time: "Real-time",
    icon: Timer,
  },
  {
    step: "4",
    title: "Respond",
    description: "Receive answer with sketches, markups, files",
    time: "Variable",
    icon: MessageSquare,
  },
  {
    step: "5",
    title: "Close",
    description: "Accept response, link to change order if needed",
    time: "1 click",
    icon: CheckCircle,
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "60%",
    label: "Faster resolution",
    description: "Average improvement in response time",
  },
  {
    metric: "0",
    label: "Lost RFIs",
    description: "Every RFI tracked to closure",
  },
  {
    metric: "85%",
    label: "First-time resolution",
    description: "RFIs closed without back-and-forth",
  },
  {
    metric: "5 days",
    label: "Average response",
    description: "Down from 12+ days industry average",
  },
];

// RFI categories
const rfiCategories = [
  { category: "Design Clarification", icon: HelpCircle, percentage: 35 },
  { category: "Specification Questions", icon: FileSearch, percentage: 25 },
  { category: "Field Conditions", icon: AlertTriangle, percentage: 20 },
  { category: "Coordination Issues", icon: Users, percentage: 15 },
  { category: "Other", icon: Archive, percentage: 5 },
];

// Comparison data
const comparisonData = [
  { feature: "Mobile RFI Creation", pmspace: true, procore: true, plangrid: true, bluebeam: false },
  { feature: "AI Smart Routing", pmspace: true, procore: false, plangrid: false, bluebeam: false },
  { feature: "Drawing Markup Links", pmspace: true, procore: true, plangrid: true, bluebeam: true },
  { feature: "Automated Reminders", pmspace: true, procore: true, plangrid: true, bluebeam: false },
  { feature: "Response Time Analytics", pmspace: true, procore: true, plangrid: false, bluebeam: false },
  { feature: "Ball-in-Court Tracking", pmspace: true, procore: true, plangrid: true, bluebeam: false },
  { feature: "Cost Impact Tracking", pmspace: true, procore: true, plangrid: false, bluebeam: false },
  { feature: "Schedule Impact Tracking", pmspace: true, procore: false, plangrid: false, bluebeam: false },
  { feature: "Predictive Delay Warnings", pmspace: true, procore: false, plangrid: false, bluebeam: false },
  { feature: "Free Plan Available", pmspace: true, procore: false, plangrid: false, bluebeam: false },
];

// FAQ data
const faqData = [
  {
    question: "How does Space AI make RFI creation faster?",
    answer: "Space AI auto-fills project information, suggests spec sections based on RFI content, and lets you attach drawings and photos with a single tap. Create RFIs from desktop, mobile, or even by forwarding emails. Most users create complete RFIs in under 30 seconds.",
  },
  {
    question: "What is AI smart routing?",
    answer: "Space AI's AI analyzes RFI content and your project's communication patterns to suggest the most appropriate recipient. For example, an RFI about structural steel automatically routes to the structural engineer, while a question about mechanical specs goes to the MEP consultant. You always have final approval before sending.",
  },
  {
    question: "How do you track RFI response times?",
    answer: "Space AI tracks the complete lifecycle of every RFI: date created, date sent, date received by each party, response due date, and date closed. You can see real-time metrics like days open, days overdue, and trending response times by recipient, trade, or project phase.",
  },
  {
    question: "Can I link RFIs to drawings and specifications?",
    answer: "Yes, Space AI supports deep linking to specific drawing sheets, specification sections, and even markup annotations. Recipients see the exact context of your question without hunting for documents. You can also attach photos, sketches, and files directly to RFIs.",
  },
  {
    question: "How do automated reminders work?",
    answer: "Configure reminder schedules at the project level (e.g., 3 days before due, 1 day before due, day of) or for individual RFIs. Recipients receive email and in-app notifications. Overdue RFIs can automatically escalate to managers or designated backup reviewers.",
  },
  {
    question: "Does Space AI track cost and schedule impact of RFIs?",
    answer: "Yes, Space AI lets you flag RFIs with potential cost or schedule impact. Track which RFIs lead to change orders or delays. Run reports showing total cost impact from RFIs by cause category — helping you identify systemic issues and improve future projects.",
  },
  {
    question: "Can architects and engineers respond directly in Space AI?",
    answer: "Absolutely. External parties receive email notifications with a secure link to view and respond to RFIs without needing a full Space AI account. They can view attachments, add responses, upload files, and mark RFIs as answered — all through their browser.",
  },
  {
    question: "What RFI reports are available?",
    answer: "Space AI provides comprehensive RFI reporting: Open RFI Log, RFI Status Summary, Response Time Analysis, Ball-in-Court Report, Cost Impact Summary, and trend analysis by category or trade. Export to PDF or Excel, or schedule automatic report distribution.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "We used to spend hours every week chasing RFI responses. Space AI cut that to minutes. The automatic reminders alone are worth it.",
    author: "Tom Bradley",
    title: "Project Manager",
    company: "Midway Construction",
  },
  {
    quote: "Being able to link RFIs directly to markup on drawings changed how our architects respond. Fewer clarifying questions, faster answers.",
    author: "Lisa Huang",
    title: "Project Engineer",
    company: "Apex Builders",
  },
];

export default function ConstructionRFIManagementPage() {
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
            "name": "Space AI RFI Management",
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
            "description": "Construction RFI management software with AI-powered routing and tracking.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-indigo-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-6">
                <HelpCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-300">RFI Management</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Resolve{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Construction RFIs
                </span>{" "}
                60% Faster
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create, route, and track RFIs with AI-powered workflows. 
                Never lose an RFI or miss a deadline again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/construction-software-demo/"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
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
                  <span>Unlimited RFIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>AI smart routing</span>
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RFI Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Streamlined{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  RFI Workflow
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From creation to closure in 5 simple steps
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {rfiWorkflow.map((phase, index) => (
                  <div key={index} className="relative">
                    {index < rfiWorkflow.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-blue-500/10" />
                    )}
                    
                    <div className="relative bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-blue-500/30 transition-all">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-3">
                        <span className="text-xl font-bold text-white">{phase.step}</span>
                      </div>
                      
                      <phase.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                      <h3 className="text-base font-bold text-white mb-1">{phase.title}</h3>
                      <p className="text-xs text-white/60 mb-2">{phase.description}</p>
                      <div className="text-blue-400 text-xs font-semibold">{phase.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  RFI Features
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Everything you need to manage RFIs efficiently
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rfiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RFI Categories Distribution */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 mb-4">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">RFI Analytics</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Understand Your{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    RFI Patterns
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-8">
                  Track RFI trends to identify systemic issues. Reduce RFI volume 
                  on future projects by learning from patterns.
                </p>
                
                <div className="space-y-3">
                  {[
                    "Categorize RFIs by type, cause, and responsible party",
                    "Track response times by recipient and trade",
                    "Identify phases with highest RFI volume",
                    "Connect RFI patterns to cost and schedule impact",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-6">Typical RFI Distribution</h3>
                <div className="space-y-4">
                  {rfiCategories.map((cat, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <cat.icon className="w-5 h-5 text-blue-400" />
                          <span className="text-white">{cat.category}</span>
                        </div>
                        <span className="text-white/60">{cat.percentage}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                          style={{ width: `${cat.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  RFI Solutions
                </span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-blue-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4 text-white/60">Procore</th>
                    <th className="text-center py-4 px-4 text-white/60">PlanGrid</th>
                    <th className="text-center py-4 px-4 text-white/60">Bluebeam</th>
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
                        {typeof row.plangrid === "boolean" ? (
                          row.plangrid ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.plangrid}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.bluebeam === "boolean" ? (
                          row.bluebeam ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.bluebeam}</span>
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
        <section className="py-20">
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
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
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
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl p-12">
              <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stop Chasing RFI Responses
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of project managers who&apos;ve cut RFI resolution time by 60% with Space AI. 
                Start free today — no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-2"
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
