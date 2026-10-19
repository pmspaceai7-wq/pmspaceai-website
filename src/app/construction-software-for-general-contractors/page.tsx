// src/app/general-contractor-software/page.tsx
// TASK 31: General Contractor Software Page
// Target: "general contractor software", "best software for general contractors"

import { Metadata } from "next";
import Link from "next/link";
import {
  HardHat, CheckCircle, Star, ArrowRight, Zap, Shield,
  TrendingUp, Clock, BarChart3, Sparkles, Users, Building2,
  Rocket, Target, FileText, ClipboardList, Wrench, Truck,
  Calendar, DollarSign, MessageSquare, Layers, Award, Eye
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "General Contractor Software | Best GC Project Management | Space AI",
  description: "The #1 software for general contractors. Manage bids, subcontractors, schedules, and budgets in one platform. AI-powered tools built for GCs. Start free.",
  keywords: [
    "general contractor software",
    "best software for general contractors",
    "GC project management software",
    "general contractor project management",
    "construction general contractor software",
    "GC management software",
    "software for general contractors",
    "general contractor scheduling software",
    "GC bidding software",
    "general contractor business software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-software-for-general-contractors/",
  },
  openGraph: {
    title: "General Contractor Software | Space AI",
    description: "Built for GCs. Manage bids, subs, schedules, and budgets in one platform.",
    url: "https://pmspace.ai/construction-software-for-general-contractors/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/general-contractor-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI General Contractor Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "General Contractor Software | Space AI",
    description: "The all-in-one platform built specifically for general contractors.",
  },
};

// GC-specific features
const gcFeatures = [
  {
    icon: ClipboardList,
    title: "Bid Management",
    description: "Send bid invitations, track responses, level bids, and award subcontracts — all in one place. Compare bids side-by-side with automatic scope analysis.",
    benefit: "Win more profitable jobs",
  },
  {
    icon: Users,
    title: "Subcontractor Management",
    description: "Prequalify subs, manage contracts, track insurance certificates, and coordinate work across all trades. Build your trusted sub network.",
    benefit: "Better sub relationships",
  },
  {
    icon: Calendar,
    title: "Master Scheduling",
    description: "Create and manage master schedules with AI optimization. Auto-notify subs of upcoming work, track lookaheads, and identify critical path issues.",
    benefit: "Hit every milestone",
  },
  {
    icon: DollarSign,
    title: "Budget & Cost Control",
    description: "Real-time budget tracking across all cost codes. Monitor committed costs, actual costs, and forecast final costs with AI predictions.",
    benefit: "Protect your margins",
  },
  {
    icon: FileText,
    title: "Document Control",
    description: "Manage drawings, specs, RFIs, submittals, and contracts in one central hub. Version control ensures everyone works from current docs.",
    benefit: "Zero confusion",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Daily reports, meeting minutes, issue tracking, and team messaging. Keep owners, architects, and subs aligned with automated updates.",
    benefit: "Streamlined communication",
  },
];

// GC workflow stages
const gcWorkflow = [
  {
    stage: "Preconstruction",
    icon: Target,
    tasks: ["Bid solicitation", "Bid leveling", "Buyout", "Subcontracts"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    stage: "Project Setup",
    icon: Layers,
    tasks: ["Schedule creation", "Budget setup", "Doc distribution", "Kickoff"],
    color: "from-cyan-500 to-teal-500",
  },
  {
    stage: "Construction",
    icon: HardHat,
    tasks: ["Daily management", "Sub coordination", "Quality control", "Progress tracking"],
    color: "from-teal-500 to-green-500",
  },
  {
    stage: "Closeout",
    icon: Award,
    tasks: ["Punch lists", "Final inspections", "O&M delivery", "Final pay apps"],
    color: "from-green-500 to-emerald-500",
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "23%",
    label: "Margin improvement",
    description: "Average increase in project margins",
  },
  {
    metric: "40%",
    label: "Faster buyout",
    description: "Reduction in preconstruction time",
  },
  {
    metric: "15+",
    label: "Hours saved weekly",
    description: "Per project manager",
  },
  {
    metric: "99.5%",
    label: "On-time delivery",
    description: "Projects delivered on schedule",
  },
];

// GC types served
const gcTypes = [
  { type: "Commercial GCs", projects: "Office, retail, mixed-use" },
  { type: "Residential Builders", projects: "Custom homes, multifamily" },
  { type: "Industrial Contractors", projects: "Warehouses, manufacturing" },
  { type: "Healthcare Builders", projects: "Hospitals, clinics, labs" },
  { type: "Institutional GCs", projects: "Schools, universities, government" },
  { type: "Specialty GCs", projects: "Renovations, tenant improvements" },
];

// Comparison with competitors
const comparisonData = [
  { feature: "Bid Management", pmspace: true, procore: true, buildertrend: true, coconstruct: false },
  { feature: "Subcontractor Prequalification", pmspace: true, procore: true, buildertrend: false, coconstruct: false },
  { feature: "AI Schedule Optimization", pmspace: true, procore: false, buildertrend: false, coconstruct: false },
  { feature: "Real-Time Cost Tracking", pmspace: true, procore: true, buildertrend: true, coconstruct: true },
  { feature: "Document Management", pmspace: true, procore: true, buildertrend: true, coconstruct: true },
  { feature: "Mobile Field App", pmspace: true, procore: true, buildertrend: true, coconstruct: true },
  { feature: "Owner Portal", pmspace: true, procore: true, buildertrend: true, coconstruct: true },
  { feature: "Predictive Analytics", pmspace: true, procore: false, buildertrend: false, coconstruct: false },
  { feature: "Free Plan Available", pmspace: true, procore: false, buildertrend: false, coconstruct: false },
];

// FAQ data
const faqData = [
  {
    question: "What makes Space AI different from other GC software?",
    answer: "Space AI was built specifically for how general contractors work today. Unlike legacy tools that bolt on GC features, Space AI provides native bid management, sub coordination, and owner communication — all powered by AI that learns from your projects. Plus, we offer a free plan so you can try before you commit.",
  },
  {
    question: "How does bid management work?",
    answer: "Space AI streamlines your entire bid process. Create bid packages, invite subcontractors from your database or find new ones, track responses with automatic reminders, level bids with side-by-side comparison, and award contracts with digital signatures. The AI even flags scope gaps and suggests questions for clarification.",
  },
  {
    question: "Can I manage multiple projects at once?",
    answer: "Absolutely. Space AI's multi-project dashboard gives you visibility across your entire portfolio. See all schedules, budgets, and issues in one view. Resource management tools help you balance workload across projects and avoid overcommitting your team or key subcontractors.",
  },
  {
    question: "How does Space AI help with subcontractor management?",
    answer: "Space AI provides complete sub lifecycle management: prequalification questionnaires, insurance certificate tracking with expiration alerts, contract management, performance ratings, and payment tracking. Build a network of trusted subs and make smarter award decisions based on past performance.",
  },
  {
    question: "Is there a portal for owners and architects?",
    answer: "Yes, Space AI includes a dedicated Owner Portal where clients can view progress, approve documents, track budgets, and communicate with your team. Architects and consultants can access drawings, respond to RFIs, and review submittals — all with appropriate permission controls.",
  },
  {
    question: "What size general contractor is Space AI best for?",
    answer: "Space AI scales from single-project builders to large regional GCs. Our free plan works great for smaller contractors, while enterprise features support GCs managing $500M+ annually. The platform grows with you — add users and features as your business expands.",
  },
  {
    question: "How long does it take to implement?",
    answer: "Most GCs are up and running within 1-2 weeks. Our implementation team helps migrate your existing project data, set up your cost codes and workflows, and train your team. We've seen teams productive on day one with our intuitive interface.",
  },
  {
    question: "Does Space AI integrate with accounting software?",
    answer: "Yes, Space AI integrates with Sage 300 CRE, Foundation Software, QuickBooks, Vista, Viewpoint, and other popular construction accounting systems. Cost data, invoices, and pay applications sync automatically — no double entry required.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "Space AI transformed how we manage buyout. We used to spend weeks chasing bids — now it's days. Our margins have improved 4% on average.",
    author: "Mike Rodriguez",
    title: "President",
    company: "Rodriguez Construction",
    volume: "$45M annual volume",
  },
  {
    quote: "Finally, software that understands how GCs actually work. The sub management features alone have saved us from two major insurance lapses.",
    author: "Sarah Chen",
    title: "Operations Manager",
    company: "Pacific Builders",
    volume: "$120M annual volume",
  },
];

export default function GeneralContractorSoftwarePage() {
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
            "name": "Space AI General Contractor Software",
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
            "description": "The #1 software platform built specifically for general contractors.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-amber-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                <HardHat className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">Built for General Contractors</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The{" "}
                <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                  General Contractor Software
                </span>{" "}
                That Runs Like You Do
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Manage bids, subs, schedules, and budgets in one platform. 
                AI-powered tools built for how GCs actually work.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/construction-software-demo/"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2"
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
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Setup in under 2 weeks</span>
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GC Workflow Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                One Platform for Your{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Entire Project Lifecycle
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From preconstruction to closeout, Space AI supports every phase of general contracting
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {gcWorkflow.map((phase, index) => (
                <div key={index} className="relative">
                  {index < gcWorkflow.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                  )}
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4`}>
                      <phase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-3">{phase.stage}</h3>
                    
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center gap-2 text-white/70 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tools Built for{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  General Contractors
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Every feature designed around how GCs manage projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gcFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-orange-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GC Types Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Software for{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  Every Type of GC
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Whether you build hospitals or houses, Space AI adapts to your project types
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gcTypes.map((gc, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{gc.type}</div>
                    <div className="text-sm text-white/60">{gc.projects}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  GC Software
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                See how Space AI stacks up against other general contractor software
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-orange-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4 text-white/60">Procore</th>
                    <th className="text-center py-4 px-4 text-white/60">Buildertrend</th>
                    <th className="text-center py-4 px-4 text-white/60">CoConstruct</th>
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
                        {typeof row.buildertrend === "boolean" ? (
                          row.buildertrend ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.buildertrend}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.coconstruct === "boolean" ? (
                          row.coconstruct ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.coconstruct}</span>
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                  GCs Nationwide
                </span>
              </h2>
            </div>

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
                    <div className="text-orange-400 text-sm mt-1">{testimonial.volume}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
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
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-12">
              <HardHat className="w-16 h-16 text-orange-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Run Your GC Business Better?
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of general contractors who&apos;ve modernized their operations with Space AI. 
                Start free — no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all flex items-center gap-2"
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
