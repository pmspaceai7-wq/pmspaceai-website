// src/app/platform/page.tsx
// Platform Hub - Stunning showcase of the platform capabilities

import { Metadata } from "next";
import Link from "next/link";
import { 
  Brain, Cpu, Database, Shield, Zap, Layers, 
  ArrowRight, CheckCircle, Network, Globe,
  Sparkles, Code, Lock, BarChart3, Workflow,
  Eye, Target, Rocket, Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "Platform | AI Construction Management Technology | Space AI",
  description: "Explore the Space AI platform: AI-powered construction management with predictive analytics, process automation, unified data, and enterprise security.",
  keywords: [
    "construction management platform",
    "ai construction technology",
    "construction software platform",
    "enterprise construction software",
    "construction data platform",
    "construction automation platform",
  ],
  alternates: {
    canonical: "https://pmspace.ai/platform/",
  },
  openGraph: {
    title: "Space AI Platform | AI Construction Technology",
    description: "The most advanced construction management platform. Built for the future.",
    url: "https://pmspace.ai/platform/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/platform-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Platform Overview",
      },
    ],
  },
};

const platformPillars = [
  {
    icon: Eye,
    title: "Our Vision & Path Forward",
    description: "Discover our market positioning and the roadmap for transforming the AECO industry.",
    href: "/platform/our-vision/",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Target,
    title: "Our Blueprint",
    description: "Our three-pronged strategy for industry transformation and innovation.",
    href: "/platform/blueprint/",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: BarChart3,
    title: "The Inefficiency Problem",
    description: "Understanding the $1.6 trillion challenge we're solving in construction.",
    href: "/platform/inefficiency/",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Layers,
    title: "Cracks in the Foundation",
    description: "Identifying root causes of systemic waste and delays in construction.",
    href: "/platform/cracks-in-foundation/",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "The Space AI Advantage",
    description: "Unique predictive capabilities that set our platform apart from legacy systems.",
    href: "/platform/space-ai-advantages/",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Brain,
    title: "System of Intelligence",
    description: "Moving from reactive record-keeping to proactive, predictive insights.",
    href: "/platform/system-of-intelligence/",
    color: "from-cyan-500 to-blue-600",
  },
];

const coreCapabilities = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description: "Drive business value with AI agents and copilots in a unified process platform.",
    href: "/platform/ai/",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Analytics",
    ],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description: "Deliver end-to-end process automation with RPA, AI, IDP, and API integrations.",
    href: "/platform/process-automation/",
    features: [
      "Workflow Builder",
      "Robotic Process Automation",
      "Smart Triggers",
      "Approval Chains",
    ],
  },
];

const techSpecs = [
  { icon: Server, label: "Cloud-Native", value: "Multi-cloud" },
  { icon: Lock, label: "Security", value: "SOC 2 Type II" },
  { icon: Globe, label: "Availability", value: "99.99% Uptime" },
  { icon: Code, label: "API", value: "RESTful + GraphQL" },
  { icon: Database, label: "Data", value: "Unified Fabric" },
  { icon: Cpu, label: "Processing", value: "Edge + Cloud" },
];

const integrations = [
  "Autodesk", "Procore", "Microsoft 365", "Google Workspace",
  "Slack", "SAP", "Oracle", "DocuSign", "Salesforce", "QuickBooks",
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-teal-500/10 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">The Construction Intelligence Platform</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="block text-white">One Platform.</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Infinite Possibilities.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
              The Space AI platform unifies your construction data, powers it with AI, 
              and transforms how you build. From prediction to automation, 
              experience construction management reimagined.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link
                href="/construction-software-demo/"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black py-4 px-8 rounded-xl font-semibold hover:bg-white/90 transition-all duration-300"
              >
                Explore Platform
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/platform/ai/"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <Brain className="w-5 h-5" />
                AI Capabilities
              </Link>
            </div>

            {/* Tech Specs Bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {techSpecs.map((spec) => (
                <div key={spec.label} className="flex items-center gap-3">
                  <spec.icon className="w-5 h-5 text-purple-400" />
                  <div className="text-left">
                    <div className="text-xs text-white/40 uppercase tracking-wider">{spec.label}</div>
                    <div className="text-sm text-white font-medium">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Architecture Visual */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,transparent_49%,rgba(255,255,255,0.05)_50%,transparent_51%,transparent_100%)] bg-[size:20px_100%]" />
            
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              {/* Left - Data Layer */}
              <div className="text-center lg:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Unified Data Fabric</h3>
                <p className="text-white/50 text-sm">
                  BIM, ERP, field data, and documents in one intelligent layer
                </p>
              </div>

              {/* Center - AI Core */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-black rounded-full flex items-center justify-center">
                      <Brain className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-teal-500/20 rounded-full blur-xl" />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full animate-ping" />
                </div>
              </div>

              {/* Right - Output Layer */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Intelligent Actions</h3>
                <p className="text-white/50 text-sm">
                  Predictions, automations, and insights delivered in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Pillars */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Platform Deep Dive
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Understanding Our Platform
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Explore the philosophy, technology, and strategy behind the most advanced 
              construction management platform ever built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformPillars.map((pillar, index) => (
              <Link
                key={pillar.title}
                href={pillar.href}
                className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Number */}
                <span className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} mb-6`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-teal-400 group-hover:bg-clip-text transition-all">
                  {pillar.title}
                </h3>
                
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <span className="inline-flex items-center gap-2 text-sm text-purple-400 font-medium group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Two powerful engines that drive everything on the platform
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {coreCapabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className="group relative bg-black/50 border border-white/10 rounded-3xl p-10 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl mb-6">
                    <cap.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-white/60 mb-8 leading-relaxed">
                    {cap.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {cap.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-3 transition-all">
                     {"\t"} Learn more <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Connect with the tools you already use. Our open platform integrates with 100+ applications.
            </p>
          </div>

          {/* Integration Logos */}
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((name) => (
              <div
                key={name}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-medium hover:bg-white/10 hover:text-white transition-all cursor-default"
              >
                {name}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/integrations/" className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2">
              View all integrations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-purple-500/20 via-pink-500/10 to-teal-500/20 border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-full" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border border-white/5 rounded-full" />
            <div className="absolute top-1/2 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Platform?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
                See why leading construction companies are switching to Space AI. 
                Get a personalized demo and discover the future of construction management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black py-4 px-10 rounded-xl font-semibold hover:bg-white/90 transition-colors text-lg"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white py-4 px-10 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm text-lg"
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
            "@type": "SoftwareApplication",
            name: "Space AI Platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            description: "AI-powered construction management platform with predictive analytics and process automation",
            url: "https://pmspace.ai/platform/",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Free trial available",
            },
            featureList: platformPillars.map(p => p.title),
          }),
        }}
      />
      <nav aria-label="Platform related links" className="container mx-auto px-4 pb-12 text-sm flex flex-wrap gap-3">
        <Link href="/platform/our-vision/" className="text-white/80 hover:text-white underline">Our Vision</Link>
        <Link href="/platform/system-of-intelligence/" className="text-white/80 hover:text-white underline">System of Intelligence</Link>
        <Link href="/predictive-analytics-construction/" className="text-white/80 hover:text-white underline">Predictive Analytics</Link>
      </nav>
    </div>
  );
}
