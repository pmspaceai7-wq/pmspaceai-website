// src/app/construction-management-software-small-business/page.tsx
// TASK 26: Construction Management Software for Small Business
// Target: "construction software for small builders", "small contractor software"

import { Metadata } from "next";
import Link from "next/link";
import { 
  Users, CheckCircle, ArrowRight, Zap, Shield, 
  FileText, Clock, BarChart3, Sparkles,
  Rocket, BadgeCheck,
  CircleDollarSign, Heart, Wrench, Hammer, Home
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Software for Small Business | Space AI",
  description:
    "Construction software for small contractors who need simple project coordination, scheduling, and document workflows without enterprise overhead.",
  keywords: [
    "construction management software small business",
    "small contractor software",
    "construction software for small builders",
    "affordable construction management software",
    "small construction company software",
    "contractor management software small business",
    "simple construction software",
    "construction project management small business",
    "home builder software small business",
    "small contractor project management",
  ],
  alternates: {
    canonical: "https://pmspace.ai/construction-management-software-small-business/",
  },
  openGraph: {
    title: "Construction Management Software for Small Business | Space AI",
    description:
      "Project coordination, scheduling, and field-friendly workflows built for smaller construction teams.",
    url: "https://pmspace.ai/construction-management-software-small-business/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/small-business-construction-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI for Small Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management Software for Small Business",
    description: "Built for small contractors who want simpler project coordination.",
  },
};

// Small business pain points
const painPoints = [
  {
    problem: "Software too expensive",
    solution: "A focused toolset that keeps smaller teams out of oversized enterprise workflows",
    icon: CircleDollarSign,
  },
  {
    problem: "Too complex to learn",
    solution: "Intuitive interface anyone can use — no training required",
    icon: Sparkles,
  },
  {
    problem: "Built for enterprise",
    solution: "Designed specifically for teams of 1-25 people",
    icon: Users,
  },
  {
    problem: "No time for setup",
    solution: "Import projects and start working in under 10 minutes",
    icon: Clock,
  },
];

// Features for small business
const smallBusinessFeatures = [
  {
    icon: Clock,
    title: "Simple Scheduling",
    description: "Drag-and-drop schedules without complicated Gantt charts. AI helps optimize automatically.",
    benefit: "Save 5+ hours/week",
  },
  {
    icon: FileText,
    title: "Easy Document Storage",
    description: "Keep all plans, contracts, and photos in one place. Find anything with search.",
    benefit: "Never lose a file again",
  },
  {
    icon: Users,
    title: "Team Communication",
    description: "Message crews, share updates, and keep everyone on the same page.",
    benefit: "Reduce phone calls 60%",
  },
  {
    icon: BarChart3,
    title: "Job Costing Made Simple",
    description: "Track costs per job without accounting degree. See profit on every project.",
    benefit: "Know your margins",
  },
  {
    icon: Zap,
    title: "Mobile App",
    description: "Full access from your phone. Update progress from the job site.",
    benefit: "Work from anywhere",
  },
  {
    icon: Shield,
    title: "Client Portal",
    description: "Let clients view progress, approve selections, and sign documents online.",
    benefit: "Impress clients",
  },
];

// FAQ data
const faqData = [
  {
    question: "Is Space AI a good fit for small contractors?",
    answer:
      "Space AI is designed for smaller construction teams that want straightforward scheduling, document coordination, and team visibility without enterprise-heavy processes.",
  },
  {
    question: "Can I manage my whole business with Space AI?",
    answer:
      "Space AI can serve as the day-to-day hub for projects, schedules, documents, and team coordination. Many teams pair it with accounting or ERP tools for finance-specific workflows.",
  },
  {
    question: "How does Space AI compare to spreadsheets?",
    answer:
      "Spreadsheets are hard to keep aligned across the office and the field. Space AI gives teams one place for current schedules, files, updates, and project activity.",
  },
  {
    question: "Is Space AI hard to learn?",
    answer:
      "The product is built for busy contractors, not software specialists. Smaller teams can usually adopt the basics quickly and expand their workflows over time.",
  },
  {
    question: "Can my subcontractors access Space AI?",
    answer:
      "Yes. Teams can share the right schedules, documents, and task updates with outside partners while controlling access by role.",
  },
  {
    question: "What if I grow and need more features?",
    answer:
      "Space AI is intended to grow with your operation, so teams can add structure, users, and connected workflows without rebuilding how they work.",
  },
  {
    question: "Do I need good internet for Space AI to work?",
    answer:
      "Space AI is available in the browser and on mobile, with support for field situations where connectivity can be inconsistent.",
  },
  {
    question: "How do I evaluate whether Space AI fits my team?",
    answer:
      "The fastest approach is a live walkthrough focused on your project mix, crew size, and current workflows. That helps determine the right rollout path without guesswork.",
  },
];

export default function SmallBusinessConstructionSoftwarePage() {
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
            "name": "Space AI for Small Business",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "featureList": [
              "Unlimited Projects",
              "Simple Scheduling",
              "Document Storage",
              "Team Communication",
              "Mobile App",
              "Client Portal",
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Small Contractors and Builders",
            },
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-orange-950/10 to-slate-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            {/* Floating icons */}
            {[Hammer, Wrench, Home].map((Icon, i) => (
              <div
                key={i}
                className="absolute text-orange-500/10 animate-float"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                <Icon className="w-24 h-24" />
              </div>
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
                <Heart className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Built for Small Contractors</span>
                <span className="text-white/60">•</span>
                <span className="text-white/80">Not Watered-Down Enterprise</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construction Software
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400">
                  for Small Business
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Powerful project management without enterprise complexity.
                Keep schedules, files, and team updates in one place so your business can run
                with less friction.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Built for small crews</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Field-friendly updates</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Simple setup</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span>Works across job types</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all shadow-lg shadow-orange-500/25"
                >
                  <Rocket className="w-5 h-5" />
                  Explore the Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  See Quick Demo
                </Link>
              </div>

              <p className="text-white/55 text-sm max-w-2xl mx-auto">
                Built for contractors who want a clearer daily operating system without adding more
                administrative overhead.
              </p>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We Understand Small Business Challenges
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Most construction software is built for big companies with big budgets. Not Space AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {painPoints.map((point, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-orange-500/30 transition-all">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                    <point.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="text-red-400 text-sm font-medium mb-2">Problem:</div>
                  <h3 className="text-lg font-bold text-white mb-4">{point.problem}</h3>
                  <div className="text-green-400 text-sm font-medium mb-2">Our Solution:</div>
                  <p className="text-white/70">{point.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <BadgeCheck className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300">Built for How You Work</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need, Nothing You Don&apos;t
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Simple, powerful tools that help you manage more jobs without more headaches.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {smallBusinessFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-orange-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Common Questions from Small Contractors
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-amber-600/20 to-yellow-600/20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-8">
                <Heart className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Made for Contractors Like You</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stop Fighting Your Software.
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"> Start Growing Your Business.</span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                See how Space AI can support scheduling, field communication, and day-to-day
                coordination for your team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-amber-700 transition-all shadow-2xl shadow-orange-500/30"
                >
                  <Rocket className="w-6 h-6" />
                  Request a Walkthrough
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="text-white/50 mt-6 text-sm">
                Tailored for small teams • Field-friendly workflows • Simple rollout
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
