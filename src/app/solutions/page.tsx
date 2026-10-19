// src/app/solutions/page.tsx
// Solutions Hub - Premium design with elegant animations

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Brain, Clock, Shield, TrendingUp, Users, Zap, 
  ArrowRight, CheckCircle, Building2, BarChart3,
  FileText, Target, Layers, Sparkles
} from "lucide-react";
import { roleSolutions } from "@/lib/roleSolutions";

export const metadata: Metadata = {
  title: "Construction Solutions | AI Project Management | Space AI",
  description: "Space AI construction solutions: AI scheduling, predictive analytics, risk management, and automation for builders and enterprises. Get started free today.",
  keywords: [
    "construction solutions",
    "construction project management",
    "ai construction software",
    "predictive construction analytics",
    "construction scheduling software",
    "project management solutions",
  ],
  alternates: {
    canonical: "https://pmspace.ai/solutions/",
  },
  openGraph: {
    title: "Construction Solutions | Space AI",
    description: "AI-powered solutions for modern construction teams. Predict delays, optimize resources, deliver on time.",
    url: "https://pmspace.ai/solutions/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/solutions-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Construction Solutions",
      },
    ],
  },
};

const heroStats = [
  { value: "45%", label: "Fewer Delays" },
  { value: "30%", label: "Cost Savings" },
  { value: "2x", label: "Faster Decisions" },
  { value: "99.9%", label: "Uptime" },
];

const coreSolutions = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Transform raw project data into actionable insights with machine learning that learns from every project.",
    href: "/solutions/construction-solutions/",
    features: ["Predictive Analytics", "Smart Recommendations", "Pattern Recognition"],
    gradient: "from-purple-500 to-violet-600",
    image: "/assets/images/ai-solution.png",
  },
  {
    icon: Clock,
    title: "Predictive Delay Analysis",
    description: "Forecast schedule risks up to 45 days in advance. Know what's coming before it impacts your project.",
    href: "/solutions/predictive-delays/",
    features: ["Early Warning System", "Risk Quantification", "Mitigation Plans"],
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/images/delay-solution.png",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Identify, assess, and mitigate project risks with AI-powered analysis and real-time monitoring.",
    href: "/solutions/data-management/",
    features: ["Risk Scoring", "Compliance Tracking", "Automated Alerts"],
    gradient: "from-teal-500 to-emerald-500",
    image: "/assets/images/risk-solution.png",
  },
  {
    icon: BarChart3,
    title: "Construction Management",
    description: "End-to-end project lifecycle management from planning to closeout with complete visibility.",
    href: "/solutions/construction-management/",
    features: ["Project Planning", "Progress Tracking", "Resource Management"],
    gradient: "from-orange-500 to-amber-500",
    image: "/assets/images/construction-solution.png",
  },
];

const byTeamSize = [
  {
    icon: Users,
    title: "For Small Builders",
    description: "Affordable, easy-to-use tools that give small teams enterprise-level capabilities.",
    href: "/blogs/budget-tracking-for-contractors/",
    tag: "Small Teams",
  },
  {
    icon: Building2,
    title: "For Enterprises",
    description: "Scalable platform with advanced security, custom integrations, and dedicated support.",
    href: "/solutions/construction-software-for-enterprises/",
    tag: "Enterprise",
  },
  {
    icon: Target,
    title: "For General Contractors",
    description: "Complete command center for managing complex projects and subcontractor workflows.",
    href: "/solutions/best-construction-software-for-general-contractors/",
    tag: "Contractors",
  },
];

const roleSolutionIcons = [Users, BarChart3, Building2, Shield, Clock, Zap, FileText];

const additionalSolutions = [
  {
    title: "Smart Project Management",
    description: "Intelligent workflows that adapt to your project needs",
    href: "/solutions/smart-project-management/",
    icon: Sparkles,
  },
  {
    title: "Construction Solutions",
    description: "Industry-specific tools for building projects",
    href: "/solutions/construction-solutions/",
    icon: Layers,
  },
  {
    title: "All-in-One Platform",
    description: "Unified solution replacing multiple tools",
    href: "/solutions/all-in-one-construction-software/",
    icon: Target,
  },
  {
    title: "Data Management",
    description: "Centralized data with powerful analytics",
    href: "/solutions/data-management/",
    icon: FileText,
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">AI-Powered Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Solutions That
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Build the Future
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              From predictive analytics to automated workflows, discover how Space AI 
              transforms construction chaos into controlled success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/construction-software-demo/"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/try-it-now/"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Solutions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Powerful capabilities designed to solve your biggest construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreSolutions.map((solution, index) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} mb-6`}>
                  <solution.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all duration-300">
                  {solution.title}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-purple-400 font-medium">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Role */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-[#0b0614] to-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(140,69,255,0.16),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(45,212,191,0.1),transparent_28%)]" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-100">
                <Sparkles className="h-4 w-4" />
                Solutions by Role
              </div>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Built for every construction decision maker
              </h2>
              <p className="mt-4 max-w-2xl text-white/60">
                Role-specific workflows for the people who control delivery, commercial outcomes, safety, scheduling, systems, and final account closeout.
              </p>
            </div>
            <Link
              href="/construction-software-demo/"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white/80 hover:bg-white/[0.08]"
            >
              Find your workflow
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {roleSolutions.map((solution, index) => {
              const Icon = roleSolutionIcons[index] || Users;

              return (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/45 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/35 hover:bg-white/[0.055]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-teal-400/20 text-purple-100 ring-1 ring-white/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowRight className="h-5 w-5 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-purple-200" />
                  </div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/70">
                    {solution.audience}
                  </p>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-100">
                    {solution.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/58">
                    {solution.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions by Team Size */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solutions for Every Team
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Whether you&apos;re a solo contractor or a global enterprise, we have the right solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {byTeamSize.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative bg-black/50 border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Tag */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-400 font-medium">
                  {item.tag}
                </span>

                <item.icon className="w-12 h-12 text-purple-400 mb-6" />
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 mb-6">
                  {item.description}
                </p>

                <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Solutions Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Solutions
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore our full range of construction management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalSolutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
              >
                <solution.icon className="w-8 h-8 text-teal-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-white/50">{solution.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-purple-500/20 via-transparent to-teal-500/20 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Projects?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Join hundreds of construction teams using AI to predict delays, optimize resources, and deliver projects on time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black py-4 px-8 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Space AI Construction Solutions",
            description: "AI-powered solutions for construction project management",
            url: "https://pmspace.ai/solutions/",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [...coreSolutions, ...roleSolutions.map((solution) => ({
                title: solution.title,
                description: solution.description,
                href: `/solutions/${solution.slug}`,
              }))].map((solution, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: solution.title,
                description: solution.description,
                url: `https://pmspace.ai${solution.href}`,
              })),
            },
          }),
        }}
      />
      <nav aria-label="Solutions related links" className="container mx-auto px-4 pb-12 text-sm flex flex-wrap gap-3">
        <Link href="/solutions/best-software-for-construction-business/" className="text-white/80 hover:text-white underline">Best Software for Construction Business</Link>
        <Link href="/construction-management-software-small-business/" className="text-white/80 hover:text-white underline">Software for Small Business</Link>
        <Link href="/construction-cost-management-software/" className="text-white/80 hover:text-white underline">Cost Management Software</Link>
        <Link href="/construction-document-management-software/" className="text-white/80 hover:text-white underline">Document Management Software</Link>
      </nav>
    </div>
  );
}
