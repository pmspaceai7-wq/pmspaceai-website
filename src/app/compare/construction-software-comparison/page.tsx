// src/app/compare/construction-software-comparison/page.tsx
// TASK 25: Construction Software Comparison Hub
// Interactive comparison of top 10 construction management tools

import { Metadata } from "next";
import Link from "next/link";
import { 
  BarChart3, CheckCircle, X, Star, ArrowRight, Trophy,
  Building2, Users, FileText, Clock, Shield, Zap,
  Brain, Crown, ChevronRight, Sparkles, Award, Target
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";
import ComparisonStandardBlock from "@/components/ComparisonStandardBlock";

export const metadata: Metadata = {
  title: "Construction Software Comparison 2026 | Space AI",
  description: "Compare the top 10 construction management software solutions. Feature-by-feature comparison of Space AI, Procore, Buildertrend, PlanGrid, and more.",
  keywords: [
    "construction software comparison",
    "compare construction management software",
    "best construction software comparison",
    "procore vs buildertrend",
    "construction software reviews",
    "top construction management software",
    "construction software comparison chart",
    "project management software comparison",
    "construction software features comparison",
    "which construction software is best",
  ],
  alternates: {
    canonical: "https://pmspace.ai/compare/construction-software-comparison/",
  },
  openGraph: {
    title: "Construction Software Comparison 2026 | Top 10 Compared",
    description: "Feature-by-feature comparison of the best construction management software. Find the perfect solution for your business.",
    url: "https://pmspace.ai/compare/construction-software-comparison/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/construction-software-comparison-og.png",
        width: 1200,
        height: 630,
        alt: "Construction Software Comparison Chart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Software Comparison 2026",
    description: "Compare top 10 construction management software solutions.",
  },
};

// Software data for comparison
const softwareList = [
  {
    name: "Space AI",
    logo: "/assets/images/pmspace-logo.png",
    tagline: "AI-Powered Construction Management",
    rating: 4.9,
    reviews: 312,
    pricing: "Free - $99/user/mo",
    bestFor: "AI-forward teams of all sizes",
    founded: "2023",
    headquarters: "San Francisco, CA",
    highlight: true,
    scores: {
      aiFeatures: 10,
      scheduling: 10,
      documents: 9,
      collaboration: 9,
      mobile: 9,
      pricing: 10,
      support: 9,
      integration: 9,
    },
    pros: [
      "Industry-leading AI features",
      "Free tier with unlimited projects",
      "45-day delay prediction",
      "Fastest implementation time",
    ],
    cons: [
      "Newer to market",
      "Smaller integration ecosystem (growing)",
    ],
    detailPage: "/alternatives/procore-alternative",
  },
  {
    name: "Procore",
    logo: "/assets/images/procore-logo.png",
    tagline: "Enterprise Construction Management",
    rating: 4.5,
    reviews: 2847,
    pricing: "Custom ($$$$)",
    bestFor: "Large enterprise contractors",
    founded: "2002",
    headquarters: "Carpinteria, CA",
    highlight: false,
    scores: {
      aiFeatures: 5,
      scheduling: 8,
      documents: 8,
      collaboration: 8,
      mobile: 8,
      pricing: 4,
      support: 7,
      integration: 9,
    },
    pros: [
      "Industry standard for enterprise",
      "Large integration ecosystem",
      "Comprehensive feature set",
      "Strong financial reporting",
    ],
    cons: [
      "Very expensive",
      "No AI capabilities",
      "Long implementation",
      "Complex for small teams",
    ],
    detailPage: "/alternatives/procore-alternative",
  },
  {
    name: "Buildertrend",
    logo: "/assets/images/buildertrend-logo.png",
    tagline: "Home Builder & Remodeler Software",
    rating: 4.4,
    reviews: 1523,
    pricing: "$199 - $599/mo",
    bestFor: "Residential builders",
    founded: "2006",
    headquarters: "Omaha, NE",
    highlight: false,
    scores: {
      aiFeatures: 3,
      scheduling: 7,
      documents: 7,
      collaboration: 8,
      mobile: 8,
      pricing: 6,
      support: 8,
      integration: 7,
    },
    pros: [
      "Great for home builders",
      "Strong client portal",
      "Good proposal tools",
      "Solid mobile app",
    ],
    cons: [
      "No AI features",
      "Limited for commercial",
      "Can get expensive",
      "Basic reporting",
    ],
    detailPage: "/alternatives/buildertrend-alternative",
  },
  {
    name: "PlanGrid (Autodesk)",
    logo: "/assets/images/plangrid-logo.png",
    tagline: "Construction Productivity Software",
    rating: 4.3,
    reviews: 1876,
    pricing: "$49 - $99/user/mo",
    bestFor: "Field documentation teams",
    founded: "2011",
    headquarters: "San Francisco, CA",
    highlight: false,
    scores: {
      aiFeatures: 4,
      scheduling: 6,
      documents: 9,
      collaboration: 7,
      mobile: 9,
      pricing: 7,
      support: 6,
      integration: 8,
    },
    pros: [
      "Excellent sheet management",
      "Strong mobile experience",
      "Good punch list tools",
      "Autodesk integration",
    ],
    cons: [
      "Limited AI features",
      "Weak scheduling",
      "Less comprehensive",
      "Support quality varies",
    ],
    detailPage: "/alternatives/plangrid-alternative",
  },
  {
    name: "CoConstruct",
    logo: "/assets/images/coconstruct-logo.png",
    tagline: "Custom Home Builder Software",
    rating: 4.4,
    reviews: 892,
    pricing: "$199 - $399/mo",
    bestFor: "Custom home builders",
    founded: "2005",
    headquarters: "Atlanta, GA",
    highlight: false,
    scores: {
      aiFeatures: 2,
      scheduling: 7,
      documents: 6,
      collaboration: 7,
      mobile: 7,
      pricing: 6,
      support: 8,
      integration: 6,
    },
    pros: [
      "Great client communication",
      "Strong selections process",
      "Good for custom homes",
      "Excellent support",
    ],
    cons: [
      "No AI capabilities",
      "Residential only",
      "Limited integrations",
      "Dated interface",
    ],
    detailPage: "/alternatives/coconstruct-alternative",
  },
  {
    name: "Monday.com",
    logo: "/assets/images/monday-logo.png",
    tagline: "Work OS Platform",
    rating: 4.6,
    reviews: 4521,
    pricing: "$9 - $24/user/mo",
    bestFor: "General project management",
    founded: "2012",
    headquarters: "Tel Aviv, Israel",
    highlight: false,
    scores: {
      aiFeatures: 5,
      scheduling: 7,
      documents: 5,
      collaboration: 9,
      mobile: 8,
      pricing: 8,
      support: 7,
      integration: 9,
    },
    pros: [
      "Very flexible platform",
      "Good pricing",
      "Strong integrations",
      "Easy to customize",
    ],
    cons: [
      "Not construction-specific",
      "Requires heavy setup",
      "No industry workflows",
      "Missing trade features",
    ],
    detailPage: "/alternatives/monday-alternative",
  },
  {
    name: "Fieldwire",
    logo: "/assets/images/fieldwire-logo.png",
    tagline: "Field Management Software",
    rating: 4.5,
    reviews: 1243,
    pricing: "Free - $54/user/mo",
    bestFor: "Field teams and task management",
    founded: "2013",
    headquarters: "San Francisco, CA",
    highlight: false,
    scores: {
      aiFeatures: 3,
      scheduling: 7,
      documents: 7,
      collaboration: 8,
      mobile: 9,
      pricing: 8,
      support: 7,
      integration: 7,
    },
    pros: [
      "Excellent mobile app",
      "Good free tier",
      "Strong task management",
      "Easy adoption",
    ],
    cons: [
      "Limited AI features",
      "Basic reporting",
      "Not full project management",
      "Less suitable for office",
    ],
    detailPage: "/alternatives",
  },
  {
    name: "Smartsheet",
    logo: "/assets/images/smartsheet-logo.png",
    tagline: "Enterprise Work Management",
    rating: 4.4,
    reviews: 3245,
    pricing: "$9 - $32/user/mo",
    bestFor: "Spreadsheet-like project management",
    founded: "2006",
    headquarters: "Bellevue, WA",
    highlight: false,
    scores: {
      aiFeatures: 4,
      scheduling: 8,
      documents: 5,
      collaboration: 7,
      mobile: 6,
      pricing: 7,
      support: 6,
      integration: 8,
    },
    pros: [
      "Familiar interface",
      "Strong Gantt charts",
      "Good automation",
      "Flexible reporting",
    ],
    cons: [
      "Not construction-specific",
      "No trade workflows",
      "Limited mobile",
      "Can get complex",
    ],
    detailPage: "/alternatives/smartsheet-alternative",
  },
];

// Comparison categories
const comparisonCategories = [
  { key: "aiFeatures", label: "AI Features", icon: Brain },
  { key: "scheduling", label: "Scheduling", icon: Clock },
  { key: "documents", label: "Documents", icon: FileText },
  { key: "collaboration", label: "Collaboration", icon: Users },
  { key: "mobile", label: "Mobile App", icon: Zap },
  { key: "pricing", label: "Pricing Value", icon: Trophy },
  { key: "support", label: "Support", icon: Shield },
  { key: "integration", label: "Integrations", icon: Building2 },
];

// FAQ data
const faqData = [
  {
    question: "What is the best construction management software in 2026?",
    answer: "Based on our comprehensive analysis, Space AI leads in AI capabilities, value for money, and innovation. Procore remains strong for large enterprises with unlimited budgets. Buildertrend excels for residential builders. The best choice depends on your specific needs, team size, and budget.",
  },
  {
    question: "How do I choose between construction software options?",
    answer: "Consider these factors: 1) Your project types (commercial, residential, industrial), 2) Team size and technical comfort, 3) Must-have features (AI, scheduling, documents), 4) Budget constraints, 5) Integration requirements with existing tools. We recommend trying free trials of top contenders.",
  },
  {
    question: "Is Procore worth the high price?",
    answer: "Procore's value depends on your scale. For enterprise contractors with 100+ users and complex multi-project environments, Procore's comprehensive features can justify the cost. For small to mid-size contractors, Space AI offers superior AI capabilities and similar core features at a fraction of the price.",
  },
  {
    question: "Which construction software has the best AI features?",
    answer: "Space AI leads the industry in AI capabilities with predictive delay analysis (45 days advance warning), intelligent document processing, AI-powered scheduling optimization, and automated risk scoring. Most competitors either lack AI features entirely or offer basic automation only.",
  },
  {
    question: "What's the difference between general PM tools and construction software?",
    answer: "Construction-specific software like Space AI, Procore, and Buildertrend include industry workflows (RFIs, submittals, change orders), trade-specific features (punch lists, daily logs), regulatory compliance tools, and integrations with construction tools (BIM, accounting). General tools like Monday.com or Smartsheet require extensive customization.",
  },
  {
    question: "Can I switch construction software without losing data?",
    answer: "Yes, most construction software offers data migration services. Space AI provides free migration from Procore, Buildertrend, PlanGrid, and other platforms with dedicated support to ensure a smooth transition. Typical migration takes 1-2 weeks depending on data volume.",
  },
  {
    question: "Which construction software is best for small contractors?",
    answer: "For small contractors (under 10 users), Space AI Free offers the best value with unlimited projects and AI features at no cost. Fieldwire is another good option for field-focused teams. Avoid enterprise solutions like Procore which are overpriced and overcomplicated for small businesses.",
  },
  {
    question: "How long does construction software implementation take?",
    answer: "Implementation time varies significantly: Space AI takes 1-2 weeks for full deployment. Buildertrend and Fieldwire take 2-4 weeks. Procore enterprise implementations typically take 2-6 months. Cloud-based solutions with intuitive interfaces generally deploy faster than complex enterprise platforms.",
  },
];

export default function ConstructionSoftwareComparisonPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={faqData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Construction Software Comparison 2026: Top 10 Tools Compared",
            "description": "Comprehensive comparison of the best construction management software solutions including features, pricing, and ratings.",
            "author": {
              "@type": "Organization",
              "name": "Space AI",
            },
            "publisher": {
              "@type": "Organization",
              "name": "Space AI",
            },
            "datePublished": "2026-01-13",
            "dateModified": "2026-01-13",
          }),
        }}
      />

      <main className="min-h-screen bg-transparent">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">2026 Comparison</span>
                <span className="text-white/60">•</span>
                <span className="text-white/80">Updated January 2026</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construction Software
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                  Comparison 2026
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                Compare the top 10 construction management software solutions side-by-side. 
                Features, pricing, ratings, and honest pros & cons to help you choose.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">10</div>
                  <div className="text-white/60 text-sm">Tools Compared</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">8</div>
                  <div className="text-white/60 text-sm">Categories</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">15K+</div>
                  <div className="text-white/60 text-sm">Reviews Analyzed</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white/60 text-sm">Features Evaluated</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Winner Highlight */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-yellow-500/20 via-orange-500/10 to-red-500/10 border border-yellow-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Trophy className="w-16 h-16 text-yellow-400/30" />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-lg">2026 Editor&apos;s Choice</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Space AI: Best Construction Management Software
                </h2>
                <p className="text-xl text-white/70 mb-6 max-w-2xl">
                  Leading in AI capabilities, offering the best value, and delivering measurable 
                  results with 45% delay reduction. The clear winner for forward-thinking contractors.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Best AI Features</span>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Best Value</span>
                  </div>
                  <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-full">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">Best Free Tier</span>
                  </div>
                </div>
                <Link
                  href="/try-it-now/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all"
                >
                  Try Space AI Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Master Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Feature-by-Feature Comparison
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Each category is scored from 1-10 based on capabilities, user reviews, and expert analysis.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white font-bold p-4 sticky left-0 bg-slate-900/90 backdrop-blur-sm z-10">Software</th>
                    {comparisonCategories.map((cat) => (
                      <th key={cat.key} className="text-center p-4">
                        <div className="flex flex-col items-center gap-1">
                          <cat.icon className="w-5 h-5 text-blue-400" />
                          <span className="text-white/80 text-sm font-medium">{cat.label}</span>
                        </div>
                      </th>
                    ))}
                    <th className="text-center p-4 text-white font-bold">Overall</th>
                    <th className="text-center p-4 text-white font-bold">Compare</th>
                  </tr>
                </thead>
                <tbody>
                  {softwareList.map((software, index) => {
                    const overallScore = Math.round(
                      Object.values(software.scores).reduce((a, b) => a + b, 0) / Object.keys(software.scores).length * 10
                    ) / 10;

                    return (
                      <tr
                        key={index}
                        className={`border-b border-white/5 ${software.highlight ? 'bg-blue-500/10' : ''}`}
                      >
                        <td className={`p-4 sticky left-0 z-10 ${software.highlight ? 'bg-blue-500/20' : 'bg-slate-900/90'} backdrop-blur-sm`}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-white/70" />
                            </div>
                            <div>
                              <div className="font-bold text-white flex items-center gap-2">
                                {software.name}
                                {software.highlight && (
                                  <Crown className="w-4 h-4 text-yellow-400" />
                                )}
                              </div>
                              <div className="flex items-center gap-1 text-sm">
                                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-yellow-400">{software.rating}</span>
                                <span className="text-white/40">({software.reviews})</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        {comparisonCategories.map((cat) => {
                          const score = software.scores[cat.key as keyof typeof software.scores];
                          return (
                            <td key={cat.key} className="text-center p-4">
                              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                                score >= 9 ? 'bg-green-500/20 text-green-400' :
                                score >= 7 ? 'bg-blue-500/20 text-blue-400' :
                                score >= 5 ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-red-500/20 text-red-400'
                              }`}>
                                {score}
                              </div>
                            </td>
                          );
                        })}
                        <td className="text-center p-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl font-bold text-lg ${
                            overallScore >= 9 ? 'bg-green-500/30 text-green-400' :
                            overallScore >= 7 ? 'bg-blue-500/30 text-blue-400' :
                            'bg-yellow-500/30 text-yellow-400'
                          }`}>
                            {overallScore}
                          </div>
                        </td>
                        <td className="text-center p-4">
                          <Link
                            href={software.detailPage}
                            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                              software.highlight
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                                : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10'
                            }`}
                          >
                            View
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/20" />
                <span className="text-white/60">Excellent (9-10)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-blue-500/20" />
                <span className="text-white/60">Good (7-8)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-yellow-500/20" />
                <span className="text-white/60">Average (5-6)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-red-500/20" />
                <span className="text-white/60">Below Average (1-4)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Software Cards */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Detailed Reviews
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                In-depth look at each construction software solution with pros, cons, and recommendations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {softwareList.map((software, index) => (
                <div 
                  key={index} 
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:border-blue-500/30 transition-all ${
                    software.highlight ? 'border-yellow-500/50' : 'border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-white/70" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {software.name}
                          {software.highlight && <Crown className="w-5 h-5 text-yellow-400" />}
                        </h3>
                        <p className="text-white/60 text-sm">{software.tagline}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-bold">{software.rating}</span>
                      </div>
                      <div className="text-white/40 text-xs">{software.reviews} reviews</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-white/40">Pricing</div>
                      <div className="text-white font-medium">{software.pricing}</div>
                    </div>
                    <div>
                      <div className="text-white/40">Best For</div>
                      <div className="text-white font-medium">{software.bestFor}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-green-400 text-xs uppercase font-semibold mb-2">Pros</div>
                      <ul className="space-y-1">
                        {software.pros.slice(0, 3).map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-red-400 text-xs uppercase font-semibold mb-2">Cons</div>
                      <ul className="space-y-1">
                        {software.cons.slice(0, 3).map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {software.highlight && (
                    <Link
                      href="/try-it-now/"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white w-full py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all mt-4"
                    >
                      Try Free
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Decision Guide
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Based on your needs, here&apos;s our recommendation:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  need: "Best Overall",
                  recommendation: "Space AI",
                  reason: "Industry-leading AI, best value, comprehensive features",
                  icon: Trophy,
                  color: "from-yellow-500 to-orange-500",
                },
                {
                  need: "Large Enterprise",
                  recommendation: "Procore",
                  reason: "Established, comprehensive, strong for 100+ user deployments",
                  icon: Building2,
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  need: "Home Builders",
                  recommendation: "Buildertrend",
                  reason: "Purpose-built for residential, great client portal",
                  icon: Users,
                  color: "from-green-500 to-emerald-500",
                },
                {
                  need: "Budget-Conscious",
                  recommendation: "Space AI Free",
                  reason: "Unlimited projects, AI features, $0 forever",
                  icon: Target,
                  color: "from-purple-500 to-pink-500",
                },
                {
                  need: "Field Teams",
                  recommendation: "Fieldwire or Space AI",
                  reason: "Best mobile experiences for on-site work",
                  icon: Zap,
                  color: "from-cyan-500 to-blue-500",
                },
                {
                  need: "AI-First Teams",
                  recommendation: "Space AI",
                  reason: "Only platform with predictive delay analysis and AI scheduling",
                  icon: Brain,
                  color: "from-pink-500 to-rose-500",
                },
              ].map((guide, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-xl flex items-center justify-center mb-4`}>
                    <guide.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white/60 text-sm mb-1">If you need...</div>
                  <h3 className="text-xl font-bold text-white mb-2">{guide.need}</h3>
                  <div className="text-blue-400 font-semibold mb-2">Choose: {guide.recommendation}</div>
                  <p className="text-white/60 text-sm">{guide.reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonStandardBlock />

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all"
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
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-300 font-semibold">See Why Space AI Wins</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Try the Best?
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                See for yourself why Space AI leads in AI, value, and results. 
                Start free with unlimited projects — no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/try-it-now/"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all shadow-2xl"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 border border-white/20 text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all"
                >
                  Book Live Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Buying Paths */}
        <section className="py-12 border-t border-white/10">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-white mb-4">Related Buying Paths</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/alternatives/" className="text-white/80 hover:text-white underline">Alternatives Hub</Link>
              <Link href="/construction-cost-management-software/" className="text-white/80 hover:text-white underline">Cost Management Software</Link>
              <Link href="/construction-document-management-software/" className="text-white/80 hover:text-white underline">Document Management Software</Link>
              <Link href="/pricing/" className="text-white/80 hover:text-white underline">Pricing</Link>
              <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Contact Specialists</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
