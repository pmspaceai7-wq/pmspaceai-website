// src/app/construction-safety-management-software/page.tsx
// TASK 35: Construction Safety Management Software Page
// Target: "construction safety software", "safety management software construction"

import { Metadata } from "next";
import Link from "next/link";
import {
  Shield, CheckCircle, Star, ArrowRight, Zap, AlertTriangle,
  TrendingUp, Clock, BarChart3, Sparkles, FileText, Users,
  Rocket, Target, Camera, ClipboardList, Heart, HardHat,
  Smartphone, Bell, Calendar, Award, BookOpen, Eye
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Safety Management Software | Safety Compliance | Space AI",
  description: "Comprehensive construction safety software for incident tracking, safety inspections, toolbox talks, and OSHA compliance. Reduce incidents and protect your team.",
  keywords: [
    "construction safety software",
    "safety management software construction",
    "construction safety management system",
    "construction safety app",
    "safety compliance software construction",
    "incident tracking software construction",
    "toolbox talk software",
    "safety inspection software",
    "OSHA compliance software",
    "construction safety tracking",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-safety-management-software/",
  },
  openGraph: {
    title: "Construction Safety Management Software | Space AI",
    description: "Protect your team with digital safety inspections, incident tracking, and compliance management.",
    url: "https://pmspace.ai/construction-safety-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/safety-management-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Construction Safety Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Safety Management Software",
    description: "Digital safety inspections, incident tracking, and OSHA compliance for construction.",
  },
};

// Safety features
const safetyFeatures = [
  {
    icon: ClipboardList,
    title: "Digital Safety Inspections",
    description: "Conduct site inspections from your phone with customizable checklists. Photo documentation and instant reporting.",
    benefit: "Paperless inspections",
  },
  {
    icon: AlertTriangle,
    title: "Incident Tracking",
    description: "Report incidents immediately with photos, witness info, and root cause analysis. Automatic OSHA reporting forms.",
    benefit: "Faster incident response",
  },
  {
    icon: BookOpen,
    title: "Toolbox Talks",
    description: "Digital toolbox talk library with sign-in sheets. Track attendance and comprehension across all crews.",
    benefit: "Documented training",
  },
  {
    icon: Eye,
    title: "Hazard Identification",
    description: "Enable anyone on site to report hazards instantly. Route to safety managers for immediate action.",
    benefit: "Proactive safety culture",
  },
  {
    icon: Calendar,
    title: "Certification Tracking",
    description: "Track worker certifications, training expirations, and badge compliance. Automatic renewal reminders.",
    benefit: "Always compliant",
  },
  {
    icon: BarChart3,
    title: "Safety Analytics",
    description: "Real-time dashboards showing incident rates, near-misses, inspection scores, and trend analysis.",
    benefit: "Data-driven safety",
  },
];

// Safety program components
const safetyProgram = [
  {
    step: "1",
    title: "Orientation",
    description: "New worker safety onboarding",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: "2",
    title: "Daily Briefings",
    description: "Toolbox talks and hazard reviews",
    icon: BookOpen,
    color: "from-emerald-500 to-teal-500",
  },
  {
    step: "3",
    title: "Inspections",
    description: "Regular site and equipment checks",
    icon: ClipboardList,
    color: "from-teal-500 to-cyan-500",
  },
  {
    step: "4",
    title: "Reporting",
    description: "Incident and near-miss capture",
    icon: FileText,
    color: "from-cyan-500 to-blue-500",
  },
  {
    step: "5",
    title: "Analysis",
    description: "Root cause and trend analysis",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-500",
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "47%",
    label: "Fewer incidents",
    description: "Average reduction in recordable incidents",
  },
  {
    metric: "100%",
    label: "Compliance",
    description: "OSHA documentation compliance",
  },
  {
    metric: "3x",
    label: "Faster reporting",
    description: "Incident reporting vs. paper forms",
  },
  {
    metric: "89%",
    label: "Hazard closure",
    description: "Same-day hazard resolution rate",
  },
];

// Inspection types
const inspectionTypes = [
  { type: "Daily Site Walk", frequency: "Daily", items: "25-40 checkpoints" },
  { type: "Weekly Safety Audit", frequency: "Weekly", items: "60-100 checkpoints" },
  { type: "Equipment Pre-Use", frequency: "Per use", items: "15-30 checkpoints" },
  { type: "Scaffold Inspection", frequency: "Before first use", items: "30-50 checkpoints" },
  { type: "Excavation/Trenching", frequency: "Daily when open", items: "20-35 checkpoints" },
  { type: "Hot Work Permit", frequency: "Per activity", items: "25-40 checkpoints" },
];

// OSHA compliance areas
const oshaCompliance = [
  { area: "Fall Protection", regulation: "29 CFR 1926.501", covered: true },
  { area: "Scaffolding", regulation: "29 CFR 1926.451", covered: true },
  { area: "Excavations", regulation: "29 CFR 1926.651", covered: true },
  { area: "Electrical", regulation: "29 CFR 1926.405", covered: true },
  { area: "PPE Requirements", regulation: "29 CFR 1926.95", covered: true },
  { area: "Hazard Communication", regulation: "29 CFR 1926.59", covered: true },
];

// Comparison data
const comparisonData = [
  { feature: "Mobile Inspections", pmspace: true, procore: true, safetyculture: true, siteaware: true },
  { feature: "Incident Tracking", pmspace: true, procore: true, safetyculture: true, siteaware: true },
  { feature: "Toolbox Talk Library", pmspace: true, procore: false, safetyculture: true, siteaware: false },
  { feature: "Digital Sign-In Sheets", pmspace: true, procore: true, safetyculture: true, siteaware: true },
  { feature: "OSHA Form Generation", pmspace: true, procore: true, safetyculture: false, siteaware: false },
  { feature: "Certification Tracking", pmspace: true, procore: true, safetyculture: false, siteaware: true },
  { feature: "AI Hazard Detection", pmspace: true, procore: false, safetyculture: false, siteaware: true },
  { feature: "Predictive Analytics", pmspace: true, procore: false, safetyculture: false, siteaware: true },
  { feature: "Integration with PM Tools", pmspace: true, procore: true, safetyculture: false, siteaware: false },
  { feature: "Free Plan Available", pmspace: true, procore: false, safetyculture: true, siteaware: false },
];

// FAQ data
const faqData = [
  {
    question: "How does Space AI help with OSHA compliance?",
    answer: "Space AI includes built-in OSHA compliance features: pre-built inspection checklists aligned with OSHA standards, automatic OSHA 300/300A/301 form generation, recordkeeping for the required 5-year retention period, and documentation tools for site-specific safety plans. Our system helps you maintain audit-ready records at all times.",
  },
  {
    question: "Can workers report safety hazards anonymously?",
    answer: "Yes, Space AI supports anonymous hazard reporting. Workers can submit safety concerns through the mobile app without attaching their name. This encourages reporting of hazards and near-misses without fear of retaliation. Managers receive alerts and can track resolution while maintaining reporter confidentiality.",
  },
  {
    question: "How do digital toolbox talks work?",
    answer: "Space AI includes a library of 200+ ready-to-use toolbox talks covering common construction hazards. You can also create custom talks. Workers sign in on your tablet or their phones, and the system tracks attendance automatically. You can quiz workers on comprehension and maintain records of all safety training.",
  },
  {
    question: "What happens when an incident is reported?",
    answer: "When an incident is reported through Space AI, the system immediately notifies designated safety managers via push notification, email, and SMS. The incident form captures photos, witness information, injury details, and initial root cause assessment. Space AI then guides you through the investigation process and generates required OSHA forms if it's a recordable incident.",
  },
  {
    question: "How do you track worker certifications?",
    answer: "Space AI maintains a certification database for all workers including OSHA 10/30, equipment licenses, trade certifications, and site-specific training. The system automatically alerts when certifications are expiring and can restrict site access for workers with lapsed credentials. You can also track certification costs for budgeting.",
  },
  {
    question: "Can I conduct inspections offline?",
    answer: "Yes, Space AI's mobile app works fully offline. Conduct inspections, take photos, and complete checklists without internet connection. Everything syncs automatically when you reconnect. This is essential for basement levels, remote sites, or areas with poor cell service.",
  },
  {
    question: "What analytics are available for safety data?",
    answer: "Space AI provides comprehensive safety analytics including: Total Recordable Incident Rate (TRIR), Days Away/Restricted/Transfer (DART) rate, near-miss frequency, inspection scores by area/trade, hazard types and trends, training completion rates, and comparative analysis across projects. All metrics are available in real-time dashboards.",
  },
  {
    question: "Does Space AI integrate with our existing project management software?",
    answer: "Yes, Space AI's safety module integrates seamlessly with the full Space AI project management platform. Safety items can link to daily logs, subcontractor records, and project schedules. For companies using other PM tools, we offer API integrations with Procore, Autodesk Construction Cloud, and others.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Since implementing Space AI Safety, we&apos;ve cut our incident rate by 52% and haven&apos;t had a single OSHA citation. The digital inspections are a game-changer.",
    author: "Michael Torres",
    title: "Safety Director",
    company: "Pacific Construction Group",
  },
  {
    quote: "The anonymous hazard reporting feature changed our safety culture overnight. Workers actually tell us about problems now instead of hiding them.",
    author: "Linda Chen",
    title: "VP of Safety",
    company: "Meridian Builders",
  },
];

export default function ConstructionSafetyManagementPage() {
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
            "name": "Space AI Construction Safety Management Software",
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
              "ratingValue": "4.9",
              "ratingCount": "312",
              "bestRating": "5",
            },
            "description": "Comprehensive construction safety software for inspections, incidents, and compliance.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-black to-emerald-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300">Safety Management</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Protect Your{" "}
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Construction Team
                </span>{" "}
                Every Day
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Digital safety inspections, incident tracking, toolbox talks, and OSHA compliance 
                in one platform. Reduce incidents and build a culture of safety.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/construction-software-demo/"
                  className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2"
                >
                  Get Safety Demo
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
                  <span>OSHA compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>200+ toolbox talks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Mobile inspections</span>
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Program Flow */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Safety Program
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From orientation to incident analysis, cover every aspect of construction safety
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {safetyProgram.map((phase, index) => (
                  <div key={index} className="relative">
                    {index < safetyProgram.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-green-500/10" />
                    )}
                    
                    <div className="relative bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-green-500/30 transition-all">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center mx-auto mb-3`}>
                        <phase.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <span className="text-xs text-white/40 font-semibold">Step {phase.step}</span>
                      <h3 className="text-base font-bold text-white mb-1">{phase.title}</h3>
                      <p className="text-xs text-white/60">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Comprehensive{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Safety Features
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Everything you need to manage construction safety effectively
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-green-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inspection Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pre-Built{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Inspection Templates
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Start immediately with industry-standard safety checklists
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {inspectionTypes.map((inspection, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white">{inspection.type}</h3>
                    <span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-semibold">
                      {inspection.frequency}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">{inspection.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OSHA Compliance Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-4">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-300">OSHA Ready</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    OSHA Compliant
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-8">
                  Space AI helps you maintain compliance with major OSHA construction 
                  standards. Our checklists, forms, and recordkeeping are designed 
                  to keep you audit-ready at all times.
                </p>
                
                <div className="space-y-4">
                  {oshaCompliance.slice(0, 4).map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-white/5 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">{item.area}</span>
                        <span className="text-white/40 ml-2 text-sm">({item.regulation})</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all"
                >
                  See Compliance Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 rounded-3xl p-8">
                  <div className="bg-black/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">Safety Dashboard</span>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">0.8</div>
                        <div className="text-xs text-white/60">TRIR</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 text-center">
                        <div className="text-2xl font-bold text-green-400">142</div>
                        <div className="text-xs text-white/60">Days Without Incident</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { label: "Inspections This Week", value: "12/15" },
                        { label: "Open Hazards", value: "3" },
                        { label: "Training Completion", value: "94%" },
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                          <span className="text-white/60 text-sm">{stat.label}</span>
                          <span className="text-white font-semibold">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Toolbox Talks Feature */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/10 rounded-3xl p-8">
                  <div className="bg-black/50 rounded-2xl p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-6 h-6 text-green-400" />
                      <span className="text-white font-semibold">Today&apos;s Toolbox Talk</span>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-4">
                      <h4 className="text-white font-semibold mb-2">Fall Protection: Guardrails</h4>
                      <p className="text-white/60 text-sm mb-3">
                        Review of guardrail requirements for leading edges and floor openings...
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/40">
                        <span>5 min read</span>
                        <span>Quiz: 3 questions</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60 text-sm">Crew Sign-In</span>
                      <span className="text-green-400 text-sm">8/12 completed</span>
                    </div>
                    
                    <div className="flex -space-x-2">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-black flex items-center justify-center text-xs font-bold">
                          {String.fromCharCode(65 + i)}
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-xs">
                        +4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-4">
                  <BookOpen className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-300">Toolbox Talks</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  200+{" "}
                  <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Ready-to-Use Topics
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-8">
                  Keep your crews informed with our library of professional toolbox talks. 
                  Digital sign-in, comprehension quizzes, and automatic record keeping.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Fall Protection", talks: "24 talks" },
                    { title: "Electrical Safety", talks: "18 talks" },
                    { title: "Hand & Power Tools", talks: "22 talks" },
                    { title: "PPE Requirements", talks: "16 talks" },
                  ].map((category, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                      <span className="text-white font-medium">{category.title}</span>
                      <span className="text-green-400 text-sm">{category.talks}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Safety Solutions
                </span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-green-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4 text-white/60">Procore</th>
                    <th className="text-center py-4 px-4 text-white/60">SafetyCulture</th>
                    <th className="text-center py-4 px-4 text-white/60">SiteAware</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 text-white">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {row.pmspace ? (
                          <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.procore ? (
                          <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.safetyculture ? (
                          <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {row.siteaware ? (
                          <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                        ) : (
                          <span className="text-white/30">—</span>
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
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-12">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Build a Safer Construction Site
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of construction companies who&apos;ve reduced incidents and 
                improved compliance with Space AI. Start your free trial today.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all flex items-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="px-8 py-4 border border-white/20 rounded-lg font-semibold text-lg hover:bg-white/5 transition-all"
                >
                  Schedule Safety Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
