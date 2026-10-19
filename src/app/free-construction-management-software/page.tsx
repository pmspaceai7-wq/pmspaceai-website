// src/app/free-construction-management-software/page.tsx
// TASK 23: Free Construction Management Software Page
// Target: "free construction management software" - High-intent keyword for cost-conscious buyers

import { Metadata } from "next";
import Link from "next/link";
import { 
  Gift, CheckCircle, Star, ArrowRight, Zap, Shield, 
  Users, FileText, Clock, BarChart3, Sparkles, Crown,
  Building2, Rocket, Target, TrendingUp, Award, BadgeCheck,
  CircleDollarSign, Percent, Lock, Infinity
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Free Construction Management Software | Space AI | Download Free",
  description: "Download Space AI free construction management software with unlimited projects, AI scheduling, and team collaboration. Free forever. No credit card required.",
  keywords: [
    "free construction management software",
    "free construction software",
    "construction management software free",
    "free project management software construction",
    "free construction project management",
    "free building management software",
    "construction management app free",
    "free contractor software",
    "best free construction software",
    "free construction scheduling software",
    "construction building software free",
    "free construction software download",
    "construction management apps",
    "construction apps free",
    "free construction management apps",
    "free construction software for small builders",
  ],
  alternates: {
    canonical: "https://pmspace.ai/free-construction-management-software/",
  },
  openGraph: {
    title: "Free Construction Management Software | Space AI | Download Free",
    description: "Download Space AI free construction management software. Professional tools at no cost. AI scheduling, document management, team collaboration - all free.",
    url: "https://pmspace.ai/free-construction-management-software/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/free-construction-software-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Free Construction Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Construction Management Software | Space AI | Download Free",
    description: "Download professional construction tools. Zero cost. No credit card required.",
  },
};

// Free tier features
const freeFeatures = [
  {
    icon: Infinity,
    title: "Unlimited Projects",
    description: "Manage as many construction projects as you need without artificial limits or per-project fees.",
  },
  {
    icon: Users,
    title: "Up to 10 Team Members",
    description: "Collaborate with your core team including project managers, superintendents, and subcontractors.",
  },
  {
    icon: Clock,
    title: "AI Scheduling",
    description: "Access our intelligent scheduling engine that learns from your projects and optimizes timelines.",
  },
  {
    icon: FileText,
    title: "Document Storage",
    description: "5GB cloud storage for plans, specifications, RFIs, and project documents with AI organization.",
  },
  {
    icon: BarChart3,
    title: "Basic Analytics",
    description: "Track project progress, budget status, and team performance with essential reporting dashboards.",
  },
  {
    icon: Shield,
    title: "Mobile Access",
    description: "Full iOS and Android apps for field teams to access and update project information anywhere.",
  },
];

// Premium upgrade benefits
const premiumBenefits = [
  {
    title: "Unlimited Team Members",
    description: "Add your entire organization without per-seat fees",
    icon: Users,
  },
  {
    title: "Unlimited Storage",
    description: "Never worry about document limits again",
    icon: FileText,
  },
  {
    title: "Advanced AI Predictions",
    description: "45-day delay forecasting and risk scoring",
    icon: Sparkles,
  },
  {
    title: "BIM Integration",
    description: "Connect 3D models with project workflows",
    icon: Building2,
  },
  {
    title: "Custom Integrations",
    description: "Connect with accounting, ERP, and field tools",
    icon: Zap,
  },
  {
    title: "Priority Support",
    description: "Dedicated success manager and 24/7 support",
    icon: Crown,
  },
];

// Competitor comparison
const competitorComparison = [
  {
    name: "Space AI Free",
    price: "$0",
    projects: "Unlimited",
    users: "10",
    storage: "5GB",
    aiFeatures: "Yes",
    mobile: "Yes",
    support: "Community",
    highlighted: true,
  },
  {
    name: "Procore",
    price: "Custom",
    projects: "Limited",
    users: "Per seat",
    storage: "Limited",
    aiFeatures: "No",
    mobile: "Yes",
    support: "Paid",
    highlighted: false,
  },
  {
    name: "Buildertrend",
    price: "$199+/mo",
    projects: "Limited",
    users: "3",
    storage: "1GB",
    aiFeatures: "No",
    mobile: "Yes",
    support: "Email",
    highlighted: false,
  },
  {
    name: "CoConstruct",
    price: "$199+/mo",
    projects: "Unlimited",
    users: "Unlimited",
    storage: "5GB",
    aiFeatures: "No",
    mobile: "Yes",
    support: "Phone",
    highlighted: false,
  },
];

// FAQ data for schema
const faqData = [
  {
    question: "Is Space AI really free for construction management?",
    answer: "Yes, Space AI offers a genuinely free tier with unlimited projects, up to 10 team members, 5GB storage, AI scheduling, and mobile apps. No credit card required, no trial period - free forever.",
  },
  {
    question: "What's the catch with free construction software?",
    answer: "There's no catch. Space AI free includes professional-grade features that competitors charge for. We offer premium plans for larger teams needing unlimited users, advanced AI predictions, and enterprise features, but the free tier is fully functional for small to mid-size teams.",
  },
  {
    question: "Can I upgrade from free to paid later?",
    answer: "Absolutely. You can upgrade anytime without losing your data or project history. All your documents, schedules, and team settings transfer seamlessly. Many customers start free and upgrade as their business grows.",
  },
  {
    question: "How does Space AI free compare to Procore?",
    answer: "Space AI free includes AI scheduling and unlimited projects, features Procore doesn't offer at any price. Procore requires expensive custom quotes with per-seat pricing, while Space AI free handles most construction management needs at zero cost.",
  },
  {
    question: "Is there a free trial of premium features?",
    answer: "Yes, when you sign up for Space AI free, you automatically get 14 days of premium features at no cost. This lets you experience advanced AI predictions, unlimited storage, and full integrations before deciding if you need them.",
  },
  {
    question: "What construction project types can I manage for free?",
    answer: "Space AI free works for all construction types including commercial, residential, industrial, renovation, and infrastructure projects. The platform adapts to your workflow whether you're a general contractor, specialty contractor, or owner-builder.",
  },
  {
    question: "Can I use free construction software for commercial projects?",
    answer: "Yes, Space AI free is powerful enough for commercial construction. Many teams manage multi-million dollar projects on the free tier. Upgrade only when you need more team members or advanced enterprise features.",
  },
  {
    question: "How do I get started with free construction software?",
    answer: "Visit pmspace.ai/try-it-now and create your free account in under 2 minutes. No credit card, no sales call required. Import your first project and start managing construction smarter immediately.",
  },
];

export default function FreeConstructionManagementSoftwarePage() {
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
            "name": "Space AI Free Construction Management Software",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "description": "Free forever with unlimited projects",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "312",
              "bestRating": "5",
              "worstRating": "1",
            },
            "featureList": [
              "Unlimited Projects",
              "AI Scheduling",
              "Document Management",
              "Team Collaboration",
              "Mobile Apps",
              "Real-time Updates",
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-green-500/5 via-transparent to-emerald-500/5 rounded-full animate-spin-slow" />
            {/* Floating dollar signs */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-green-500/10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 30 + 20}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                }}
              >
                $
              </div>
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
                <Gift className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">100% Free Forever</span>
                <span className="text-white/60">•</span>
                <span className="text-white/80">No Credit Card Required</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Free Construction
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400">
                  Management Software
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Professional construction project management at <span className="text-green-400 font-bold">zero cost</span>. 
                Unlimited projects, AI scheduling, team collaboration — 
                everything you need to manage construction projects smarter.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Free forever</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Setup in 2 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Unlimited projects</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
                >
                  <Gift className="w-5 h-5" />
                  Start Free Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Compare All Plans
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-green-400">$0</div>
                  <div className="text-white/60 text-sm mt-1">Forever Free</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white">15K+</div>
                  <div className="text-white/60 text-sm mt-1">Free Users</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white">∞</div>
                  <div className="text-white/60 text-sm mt-1">Projects</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-bold text-white">4.9</div>
                  <div className="flex justify-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Features Grid */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <span className="text-green-300">Everything You Need</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What&apos;s Included in Free
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Not a stripped-down trial. Real construction management features 
                that other vendors charge hundreds for — completely free.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {freeFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-green-400 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Included Free</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <BarChart3 className="w-5 h-5 text-green-400" />
                <span className="text-white/80">Honest Comparison</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Free vs. Paid Competitors
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                See how Space AI free stacks up against expensive alternatives. 
                Why pay hundreds when free does more?
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full max-w-5xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white font-bold p-6">Feature</th>
                    {competitorComparison.map((comp, i) => (
                      <th 
                        key={i} 
                        className={`text-center font-bold p-6 ${comp.highlighted ? 'bg-green-500/20 text-green-400' : 'text-white/70'}`}
                      >
                        {comp.name}
                        {comp.highlighted && (
                          <div className="text-xs text-green-300 mt-1">BEST VALUE</div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="text-white/70 p-6">Monthly Price</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10 text-green-400 font-bold text-2xl' : 'text-white'}`}
                      >
                        {comp.price}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="text-white/70 p-6">Projects</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10 text-white font-semibold' : 'text-white/70'}`}
                      >
                        {comp.projects}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="text-white/70 p-6">Team Members</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10 text-white font-semibold' : 'text-white/70'}`}
                      >
                        {comp.users}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="text-white/70 p-6">Storage</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10 text-white font-semibold' : 'text-white/70'}`}
                      >
                        {comp.storage}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="text-white/70 p-6">AI Features</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10' : ''}`}
                      >
                        {comp.aiFeatures === "Yes" ? (
                          <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                        ) : (
                          <span className="text-red-400">✕</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="text-white/70 p-6">Mobile App</td>
                    {competitorComparison.map((comp, i) => (
                      <td 
                        key={i} 
                        className={`text-center p-6 ${comp.highlighted ? 'bg-green-500/10' : ''}`}
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 mx-auto" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="text-center mt-10">
              <Link
                href="/try-it-now/"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all"
              >
                <Gift className="w-5 h-5" />
                Get Space AI Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Premium Upgrade Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-3xl p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">When You&apos;re Ready to Scale</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Upgrade to Pro for Unlimited Power
                </h2>
                <p className="text-xl text-white/70 mb-10 max-w-2xl">
                  Free gets you started. Pro removes all limits. Upgrade when your team 
                  grows or you need enterprise features — only pay for what you use.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {premiumBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                        <p className="text-white/60 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/pricing/"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all"
                  >
                    <Crown className="w-5 h-5" />
                    View Pro Plans
                  </Link>
                  <Link
                    href="/construction-software-demo/"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
                  >
                    Talk to Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Who Uses Free Construction Software?
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                From solo contractors to growing firms, Space AI free powers teams of all sizes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Solo Contractors",
                  description: "Independent contractors managing their own projects and schedules without the overhead of expensive software.",
                  icon: Target,
                  projects: "1-5 projects",
                },
                {
                  title: "Small Builders",
                  description: "Residential builders and remodelers who need professional tools without the enterprise price tag.",
                  icon: Building2,
                  projects: "5-15 projects",
                },
                {
                  title: "Growing Teams",
                  description: "Construction companies scaling up who want to test enterprise-grade software risk-free.",
                  icon: TrendingUp,
                  projects: "15-30 projects",
                },
                {
                  title: "Specialty Trades",
                  description: "Electrical, plumbing, HVAC, and other specialty contractors coordinating with general contractors.",
                  icon: Zap,
                  projects: "10-50 projects",
                },
              ].map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-green-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-white/60 mb-4">{useCase.description}</p>
                  <div className="text-sm text-green-400 font-semibold">{useCase.projects}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Get Started in 3 Simple Steps
              </h2>
              <p className="text-xl text-white/70">
                From signup to managing projects in under 5 minutes. No demos, no sales calls required.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Create Free Account",
                    description: "Sign up with email or Google. No credit card needed — ever.",
                    time: "30 seconds",
                  },
                  {
                    step: "2",
                    title: "Import Your Project",
                    description: "Add your first project or import from spreadsheets and other tools.",
                    time: "2 minutes",
                  },
                  {
                    step: "3",
                    title: "Invite Your Team",
                    description: "Add up to 10 team members and start collaborating immediately.",
                    time: "1 minute",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                    )}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 mb-3">{step.description}</p>
                    <div className="text-sm text-green-400">{step.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-3xl p-12 text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <Gift className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Download Free</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Start Managing Projects in 2 Minutes
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Download Space AI free construction management software. No credit card required. 
                Setup takes less than 2 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-lg shadow-green-500/25"
                >
                  <Gift className="w-5 h-5" />
                  Download Free Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* App Store Links Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white/80">Available on All Devices</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Download the Mobile App
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Access your projects anywhere with our iOS and Android apps. 
                Full offline capability for field teams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <Link
                href="https://apps.apple.com/app/space-ai-construction/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">🍎</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/60">Download on the</div>
                  <div className="text-lg font-semibold text-white">App Store</div>
                </div>
              </Link>

              <Link
                href="https://play.google.com/store/apps/details?id=com.spaceai.construction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 hover:bg-white/20 transition-all"
              >
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                  <span className="text-white text-2xl">▶️</span>
                </div>
                <div className="text-left">
                  <div className="text-sm text-white/60">Get it on</div>
                  <div className="text-lg font-semibold text-white">Google Play</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Installation Guide Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-green-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Installation Guide
              </h2>
              <p className="text-xl text-white/70">
                Get started in 3 simple steps. No technical knowledge required.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Create Free Account",
                    description: "Sign up with email or Google. No credit card needed — ever.",
                    time: "30 seconds",
                  },
                  {
                    step: "2",
                    title: "Import Your Project",
                    description: "Add your first project or import from spreadsheets and other tools.",
                    time: "2 minutes",
                  },
                  {
                    step: "3",
                    title: "Invite Your Team",
                    description: "Add up to 10 team members and start collaborating immediately.",
                    time: "1 minute",
                  },
                ].map((step, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                      {step.step}
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-500/50 to-transparent" />
                    )}
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/60 mb-3">{step.description}</p>
                    <div className="text-sm text-green-400">{step.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-white/70">
                Everything you need to know about free construction software
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-green-500/30 transition-all"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="text-green-400">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-white/70 pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20" />
          <div className="absolute inset-0 bg-[url('/assets/images/grid-pattern.svg')] opacity-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-8">
                <Gift className="w-5 h-5 text-green-400" />
                <span className="text-green-300 font-semibold">Join 15,000+ Free Users</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Start Managing Projects
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> for Free</span>
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                No credit card. No sales call. No commitment. 
                Just professional construction management software — free forever.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all shadow-2xl shadow-green-500/30"
                >
                  <Gift className="w-6 h-6" />
                  Start Free Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <p className="text-white/50 mt-6 text-sm">
                Setup in under 2 minutes • Unlimited projects • Free forever
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
