// src/app/construction-punch-list-software/page.tsx
// TASK 34: Construction Punch List Software Page
// Target: "punch list software construction", "construction punch list app"

import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck, CheckCircle, Star, ArrowRight, Zap, Shield,
  TrendingUp, Clock, BarChart3, Sparkles, FileText, Users,
  Rocket, Target, Camera, MapPin, AlertCircle, CheckSquare,
  Smartphone, Filter, Calendar, Award, Image, Send
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Punch List Software | Mobile Punch List App | Space AI",
  description: "Create, assign, and track punch list items from the field. Photo documentation, location tagging, and automatic notifications. Close out projects faster.",
  keywords: [
    "punch list software construction",
    "construction punch list app",
    "punch list management software",
    "punch list tracking software",
    "construction closeout software",
    "snag list software",
    "deficiency list software",
    "construction punch list tool",
    "mobile punch list app",
    "punch list management system",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-punch-list-management-software/",
  },
  openGraph: {
    title: "Construction Punch List Software | Space AI",
    description: "Create and track punch items from the field. Close out projects 40% faster.",
    url: "https://pmspace.ai/construction-punch-list-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/punch-list-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Punch List Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Punch List Software",
    description: "Mobile-first punch list creation and tracking for construction closeout.",
  },
};

// Punch list features
const punchFeatures = [
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "Capture issues with your phone camera. Photos are automatically tagged with location, date, and project info.",
    benefit: "Visual proof every time",
  },
  {
    icon: MapPin,
    title: "Location Tagging",
    description: "Pin items to floor plans or use GPS coordinates. Subcontractors know exactly where to find each issue.",
    benefit: "No confusion on location",
  },
  {
    icon: Send,
    title: "Instant Assignments",
    description: "Assign punch items to responsible parties with one tap. They receive immediate notifications with all details.",
    benefit: "Instant accountability",
  },
  {
    icon: CheckSquare,
    title: "Status Tracking",
    description: "Track every item from creation to completion. See real-time progress by area, trade, or responsible party.",
    benefit: "Complete visibility",
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Filter punch lists by location, trade, priority, status, or assignee. Export filtered views for specific trades.",
    benefit: "Find anything instantly",
  },
  {
    icon: Award,
    title: "Completion Reports",
    description: "Generate completion reports for owners showing all resolved items with before/after photos and sign-offs.",
    benefit: "Professional closeout docs",
  },
];

// Punch list workflow
const punchWorkflow = [
  {
    step: "1",
    title: "Walk & Capture",
    description: "Walk the site, snap photos, add notes",
    icon: Camera,
    color: "from-rose-500 to-pink-500",
  },
  {
    step: "2",
    title: "Assign",
    description: "Route to responsible subcontractor",
    icon: Send,
    color: "from-pink-500 to-purple-500",
  },
  {
    step: "3",
    title: "Fix",
    description: "Sub completes work, submits for review",
    icon: Zap,
    color: "from-purple-500 to-violet-500",
  },
  {
    step: "4",
    title: "Verify",
    description: "Review, approve, or reject with notes",
    icon: CheckSquare,
    color: "from-violet-500 to-indigo-500",
  },
  {
    step: "5",
    title: "Close Out",
    description: "Generate final reports, archive",
    icon: Award,
    color: "from-indigo-500 to-blue-500",
  },
];

// Key metrics
const keyMetrics = [
  {
    metric: "40%",
    label: "Faster closeout",
    description: "Reduction in punch list resolution time",
  },
  {
    metric: "3x",
    label: "Faster creation",
    description: "Compared to paper punch lists",
  },
  {
    metric: "100%",
    label: "Photo documented",
    description: "Every item has visual proof",
  },
  {
    metric: "0",
    label: "Lost items",
    description: "Nothing falls through cracks",
  },
];

// Punch item types
const punchTypes = [
  { type: "Cosmetic Defects", examples: "Paint touch-ups, scratches, dents", priority: "Low" },
  { type: "Incomplete Work", examples: "Missing trim, unfinished caulking", priority: "Medium" },
  { type: "Functional Issues", examples: "Doors not closing, fixtures misaligned", priority: "High" },
  { type: "Safety Items", examples: "Missing guards, tripping hazards", priority: "Critical" },
  { type: "Code Violations", examples: "Missing labels, clearance issues", priority: "Critical" },
  { type: "Warranty Items", examples: "Equipment defects, material failures", priority: "High" },
];

// Comparison data
const comparisonData = [
  { feature: "Mobile Photo Capture", pmspace: true, procore: true, plangrid: true, fieldwire: true },
  { feature: "Floor Plan Pin Drops", pmspace: true, procore: true, plangrid: true, fieldwire: true },
  { feature: "Offline Mode", pmspace: true, procore: true, plangrid: true, fieldwire: true },
  { feature: "Auto-Notifications", pmspace: true, procore: true, plangrid: true, fieldwire: true },
  { feature: "Before/After Photos", pmspace: true, procore: true, plangrid: false, fieldwire: false },
  { feature: "Voice-to-Text Notes", pmspace: true, procore: false, plangrid: false, fieldwire: false },
  { feature: "AI Item Categorization", pmspace: true, procore: false, plangrid: false, fieldwire: false },
  { feature: "Bulk Import from Spreadsheet", pmspace: true, procore: true, plangrid: false, fieldwire: true },
  { feature: "Cost Tracking per Item", pmspace: true, procore: true, plangrid: false, fieldwire: false },
  { feature: "Free Plan Available", pmspace: true, procore: false, plangrid: false, fieldwire: false },
];

// FAQ data
const faqData = [
  {
    question: "How do I create punch list items in the field?",
    answer: "Space AI's mobile app makes punch list creation fast and easy. Tap to add a new item, snap a photo with your phone camera, add a note (type or use voice-to-text), and drop a pin on the floor plan. The app automatically captures date, time, GPS location, and your user info. Creating a complete punch item takes about 10 seconds.",
  },
  {
    question: "Can I work offline?",
    answer: "Yes, Space AI's mobile app works fully offline. Create punch items, take photos, and add notes without any internet connection. Everything syncs automatically when you're back online. Perfect for basement levels, remote sites, or buildings with poor connectivity.",
  },
  {
    question: "How do subcontractors receive punch list assignments?",
    answer: "When you assign a punch item, the responsible party receives an instant notification via email and mobile push notification. The notification includes the item description, photos, location on floor plan, priority, and due date. Subs can view and respond through the free Space AI mobile app or a web link.",
  },
  {
    question: "Can I track before and after photos?",
    answer: "Absolutely. Space AI maintains the full history of each punch item including original photos, any update photos, and final completion photos. Completion reports show before/after comparisons so owners can see exactly what was fixed. Great for disputes or warranty claims.",
  },
  {
    question: "How do I export punch lists for specific trades?",
    answer: "Use Space AI's powerful filtering to narrow your punch list by trade, location, priority, status, or any combination. Then export to PDF or Excel. You can also create saved filter views for common exports — for example, 'Electrical Open Items Floor 3' — and share directly with trade partners.",
  },
  {
    question: "Does Space AI support multiple punch walks?",
    answer: "Yes, you can conduct unlimited punch walks and organize them by date, walk type (architect walk, owner walk, final walk), or area. Compare results across walks to track resolution progress. The system maintains a complete audit trail of all walks and item status changes.",
  },
  {
    question: "Can owners and architects access the punch list?",
    answer: "Yes, you can invite owners, architects, and consultants with view-only or edit access. They can see punch list progress in real-time, add their own items during walks, and approve completed work. Access permissions are fully configurable by user and project.",
  },
  {
    question: "What reports are available?",
    answer: "Space AI provides comprehensive punch list reporting: Status Summary (open/in progress/complete by area), Aging Report (items overdue or approaching due date), Trade Responsibility Report, Completion Certificate with before/after photos, and Executive Dashboard showing project-wide closeout progress.",
  },
];

// Testimonials
const testimonials = [
  {
    quote: "We used to spend days creating punch lists on paper and typing them up. Now we capture 200+ items in a single walk and they're instantly assigned. Game changer.",
    author: "Rachel Kim",
    title: "Project Manager",
    company: "Turner & Associates",
  },
  {
    quote: "The owner was impressed when we handed over a professional completion report with before/after photos for every punch item. Made final payment a breeze.",
    author: "James Fletcher",
    title: "Superintendent",
    company: "Westwood Builders",
  },
];

export default function ConstructionPunchListPage() {
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
            "name": "Space AI Punch List Software",
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
            "description": "Mobile-first construction punch list software with photo documentation and tracking.",
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-black to-pink-950/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500/10 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 mb-6">
                <ClipboardCheck className="w-4 h-4 text-rose-400" />
                <span className="text-sm text-rose-300">Punch List Management</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Close Out{" "}
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Construction Projects
                </span>{" "}
                40% Faster
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Create punch lists in the field with photo documentation, floor plan tags, 
                and instant subcontractor notifications. Never lose a punch item again.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link
                  href="/construction-software-demo/"
                  className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all flex items-center gap-2"
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
                  <span>Free mobile app</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Works offline</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Photo + floor plan tagging</span>
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
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {item.metric}
                  </div>
                  <div className="text-white font-semibold mb-1">{item.label}</div>
                  <div className="text-sm text-white/60">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Punch List Workflow */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  5-Step Workflow
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                From walk to closeout in the most efficient way possible
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {punchWorkflow.map((phase, index) => (
                  <div key={index} className="relative">
                    {index < punchWorkflow.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-rose-500/50 to-rose-500/10" />
                    )}
                    
                    <div className="relative bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-rose-500/30 transition-all">
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
        <section className="py-20 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Punch List Features
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Everything you need for efficient closeout
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {punchFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-rose-500/30 hover:bg-white/[0.07] transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-rose-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Punch Item Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Track Every Type of{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Punch Item
                </span>
              </h2>
              <p className="text-xl text-white/60 max-w-3xl mx-auto">
                Categorize and prioritize items for efficient resolution
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {punchTypes.map((type, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-rose-500/30 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-white">{type.type}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      type.priority === 'Critical' ? 'bg-red-500/20 text-red-400' :
                      type.priority === 'High' ? 'bg-orange-500/20 text-orange-400' :
                      type.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {type.priority}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm">{type.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile App Feature */}
        <section className="py-20 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 mb-4">
                  <Smartphone className="w-4 h-4 text-rose-400" />
                  <span className="text-sm text-rose-300">Mobile First</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Built for the{" "}
                  <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                    Field
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 mb-8">
                  Space AI&apos;s mobile app is designed for fast punch list creation 
                  during walks. One-handed operation, large tap targets, and 
                  offline capability keep you moving.
                </p>
                
                <div className="space-y-4">
                  {[
                    { title: "Works offline", desc: "Full functionality without internet" },
                    { title: "Voice-to-text", desc: "Speak notes instead of typing" },
                    { title: "Batch camera mode", desc: "Rapid-fire photo capture" },
                    { title: "Floor plan tap-to-pin", desc: "Tag locations in seconds" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">{item.title}</span>
                        <span className="text-white/60 ml-2">— {item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <Link href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    App Store
                  </Link>
                  <Link href="#" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                      <path d="M3.18 23.46a1.58 1.58 0 0 1-1.18-1.58V2.12A1.58 1.58 0 0 1 3.18.54L13.65 12zm11.55-5.93 2.52-1.47a1.55 1.55 0 0 0 0-2.68l-2.52-1.47 2.79-3.03-11.97 9.65 6.18 3.59 3-2.59zM3.18 23.46l10.47-8.39-6.18-3.59z"/>
                    </svg>
                    Google Play
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-white/10 rounded-3xl p-8 text-center">
                  <div className="bg-black/50 rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white font-semibold">Punch List Walk</span>
                      <span className="text-rose-400 text-sm">47 items</span>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { item: "Paint touch-up Room 302", status: "Open", trade: "Painter" },
                        { item: "Door closer adjustment", status: "In Progress", trade: "Hardware" },
                        { item: "Ceiling tile alignment", status: "Complete", trade: "Acoustics" },
                      ].map((punch, index) => (
                        <div key={index} className="bg-white/5 rounded-lg p-3 text-left">
                          <div className="flex items-center justify-between">
                            <span className="text-white text-sm">{punch.item}</span>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              punch.status === 'Complete' ? 'bg-green-500/20 text-green-400' :
                              punch.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-white/10 text-white/60'
                            }`}>
                              {punch.status}
                            </span>
                          </div>
                          <span className="text-white/40 text-xs">{punch.trade}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg font-semibold flex items-center justify-center gap-2">
                      <Camera className="w-5 h-5" />
                      Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Compare{" "}
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Punch List Solutions
                </span>
              </h2>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white/60 font-medium">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-rose-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4 text-white/60">Procore</th>
                    <th className="text-center py-4 px-4 text-white/60">PlanGrid</th>
                    <th className="text-center py-4 px-4 text-white/60">Fieldwire</th>
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
                        {typeof row.fieldwire === "boolean" ? (
                          row.fieldwire ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/60">{row.fieldwire}</span>
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
        <section className="py-20 bg-gradient-to-b from-transparent via-rose-950/10 to-transparent">
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
                <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
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
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-rose-500/20 to-pink-500/20 border border-rose-500/30 rounded-2xl p-12">
              <ClipboardCheck className="w-16 h-16 text-rose-400 mx-auto mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for Faster Closeouts?
              </h2>
              
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Join thousands of project managers who&apos;ve transformed their punch list process with Space AI. 
                Start free today — no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/try-it-now/"
                  className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-rose-500/25 transition-all flex items-center gap-2"
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
