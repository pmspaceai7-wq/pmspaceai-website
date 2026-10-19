// src/app/industries/page.tsx
// Industries Hub - Premium showcase of industry-specific solutions

import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, Home, GraduationCap, Heart, Truck, Shield,
  Fuel, Hotel, Anchor, Plane, ArrowRight, CheckCircle,
  Sparkles, Factory, MapPin, Users, TrendingUp, HardHat
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries | Construction Management by Sector | Space AI",
  description: "Space AI serves construction across all industries: real estate, infrastructure, healthcare, education, oil & gas, hospitality, defense, marine, and more.",
  keywords: [
    "construction industry solutions",
    "real estate construction software",
    "infrastructure project management",
    "healthcare construction management",
    "oil and gas construction software",
    "hospitality construction",
    "defense construction projects",
    "general contractor software",
  ],
  alternates: {
    canonical: "https://pmspace.ai/industries/",
  },
  openGraph: {
    title: "Industry Solutions | Space AI Construction Management",
    description: "AI-powered construction management tailored for your industry. Real estate, infrastructure, healthcare, and more.",
    url: "https://pmspace.ai/industries/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/industries-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Industry Solutions",
      },
    ],
  },
};

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    slug: "real-estate",
    description: "End-to-end project management for residential, commercial, and mixed-use developments.",
    stats: { projects: "500+", savings: "35%" },
    features: ["Development Tracking", "Investor Reporting", "Multi-site Management"],
    gradient: "from-blue-500 to-indigo-600",
    image: "/assets/images/industries/real-estate.jpg",
  },
  {
    icon: MapPin,
    title: "Infrastructure",
    slug: "infrastructure",
    description: "Manage complex civil engineering projects, roads, bridges, and public works.",
    stats: { projects: "200+", savings: "40%" },
    features: ["Asset Tracking", "Compliance Management", "Long-term Planning"],
    gradient: "from-emerald-500 to-teal-600",
    image: "/assets/images/industries/infrastructure.jpg",
  },
  {
    icon: Heart,
    title: "Healthcare",
    slug: "health-care",
    description: "Specialized solutions for hospital construction with strict regulatory compliance.",
    stats: { projects: "150+", savings: "30%" },
    features: ["HIPAA Compliance", "Infection Control", "Phased Construction"],
    gradient: "from-rose-500 to-pink-600",
    image: "/assets/images/industries/healthcare.jpg",
  },
  {
    icon: GraduationCap,
    title: "Education",
    slug: "education",
    description: "Build schools, universities, and research facilities on time and within budget.",
    stats: { projects: "300+", savings: "28%" },
    features: ["Academic Calendar Planning", "Sustainability Focus", "Community Integration"],
    gradient: "from-amber-500 to-orange-600",
    image: "/assets/images/industries/education.jpg",
  },
  {
    icon: Fuel,
    title: "Oil & Gas",
    slug: "oil-and-gas",
    description: "Manage high-risk energy projects with advanced safety and compliance features.",
    stats: { projects: "100+", savings: "45%" },
    features: ["Safety Protocols", "Remote Monitoring", "Hazard Management"],
    gradient: "from-yellow-500 to-amber-600",
    image: "/assets/images/industries/oil-gas.jpg",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    slug: "hospitality",
    description: "Deliver stunning hotels, resorts, and entertainment venues that exceed expectations.",
    stats: { projects: "180+", savings: "32%" },
    features: ["Brand Standards", "FF&E Tracking", "Opening Coordination"],
    gradient: "from-purple-500 to-violet-600",
    image: "/assets/images/industries/hospitality.jpg",
  },
  {
    icon: Shield,
    title: "Defense",
    slug: "defense",
    description: "Secure project management for military installations and government facilities.",
    stats: { projects: "80+", savings: "38%" },
    features: ["Security Clearance", "Classified Handling", "Government Compliance"],
    gradient: "from-slate-500 to-gray-600",
    image: "/assets/images/industries/defense.jpg",
  },
  {
    icon: Anchor,
    title: "Marine",
    slug: "marine",
    description: "Specialized tools for ports, shipyards, and offshore construction projects.",
    stats: { projects: "60+", savings: "42%" },
    features: ["Tidal Planning", "Offshore Logistics", "Environmental Compliance"],
    gradient: "from-cyan-500 to-blue-600",
    image: "/assets/images/industries/marine.jpg",
  },
  {
    icon: Truck,
    title: "Transportation",
    slug: "transportation",
    description: "Build railways, airports, and transit systems that move the world.",
    stats: { projects: "120+", savings: "36%" },
    features: ["Traffic Management", "Stakeholder Coordination", "Safety Systems"],
    gradient: "from-orange-500 to-red-600",
    image: "/assets/images/industries/transportation.jpg",
  },
  {
    icon: Factory,
    title: "Government",
    slug: "government",
    description: "Public sector project management with transparency and accountability built in.",
    stats: { projects: "250+", savings: "34%" },
    features: ["Public Reporting", "Budget Tracking", "Procurement Compliance"],
    gradient: "from-indigo-500 to-purple-600",
    image: "/assets/images/industries/government.jpg",
  },
  {
    icon: Building2,
    title: "Commercial High-Rise",
    slug: "commercial-high-rise",
    description: "Optimize vertical construction with specialized tools for high-rise logistics, crane scheduling, and safety compliance in commercial towers.",
    stats: { projects: "90+", savings: "33%" },
    features: ["Vertical Logistics", "Crane Scheduling", "Safety Compliance"],
    gradient: "from-sky-500 to-blue-600",
    image: "/assets/images/industries/commercial-high-rise.jpg",
  },
  {
    icon: HardHat,
    title: "General Contractors",
    slug: "general-contractors",
    description: "Unified AI-powered platform for scheduling, subcontractor coordination, document control, and job costing across every active project.",
    stats: { projects: "400+", savings: "37%" },
    features: ["Subcontractor Coordination", "Predictive Scheduling", "Unified Document Control"],
    gradient: "from-teal-500 to-cyan-600",
    image: "/assets/images/general-cunstructers.webp",
  },
];

const highlights = [
  { value: "11+", label: "Industries Served" },
  { value: "2,000+", label: "Projects Completed" },
  { value: "35%", label: "Average Cost Savings" },
  { value: "50+", label: "Countries" },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.2),transparent)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
          
          {/* Animated Dots */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Factory className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-white/80">Industry-Specific Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Built for</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                Your Industry
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              From real estate to defense, healthcare to infrastructure — Space AI delivers 
              AI-powered solutions tailored to the unique challenges of your sector.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {highlights.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Industries
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Click on any industry to discover how Space AI addresses your specific challenges
            </p>
          </div>

          {/* Featured Industries - Large Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {industries.slice(0, 2).map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[320px]"
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} mb-6`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 group-hover:bg-clip-text transition-all">
                    {industry.title}
                  </h3>
                  
                  <p className="text-white/60 mb-6 max-w-md leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {industry.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-white/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-6">
                      <div>
                        <div className="text-xl font-bold text-white">{industry.stats.projects}</div>
                        <div className="text-xs text-white/40">Projects</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-teal-400">{industry.stats.savings}</div>
                        <div className="text-xs text-white/40">Avg. Savings</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-2 text-purple-400 font-medium group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>

                {/* Decorative Glow */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br ${industry.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
              </Link>
            ))}
          </div>

          {/* Other Industries - Medium Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(2).map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} mb-4`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-sm text-white/50 mb-4 line-clamp-2">
                    {industry.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-teal-400">{industry.stats.savings} savings</span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific */}
      <section className="py-24 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Generic Tools
                <br />
                <span className="text-white/40">Don&apos;t Cut It</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Every industry has unique regulations, workflows, and challenges. 
                Space AI understands the nuances of your sector and provides 
                tailored solutions that generic platforms simply can&apos;t match.
              </p>

              <div className="space-y-4">
                {[
                  "Industry-specific compliance templates",
                  "Sector-tailored risk models",
                  "Pre-configured workflows for your needs",
                  "Relevant integrations out of the box",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Get Industry Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Grid of Industry Icons */}
                <div className="grid grid-cols-3 gap-4">
                  {industries.slice(0, 9).map((industry) => (
                    <div
                      key={industry.slug}
                      className={`flex items-center justify-center w-full aspect-square bg-gradient-to-br ${industry.gradient} rounded-2xl opacity-80`}
                    >
                      <industry.icon className="w-8 h-8 text-white" />
                    </div>
                  ))}
                </div>

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-8">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">11+</div>
                    <div className="text-white/60">Industries Mastered</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-black/90 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-teal-400" />
                  <div>
                    <div className="text-xl font-bold text-white">35%</div>
                    <div className="text-xs text-white/50">Avg. Cost Reduction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-12 md:p-16">
              <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl text-white font-medium mb-8 leading-relaxed">
                &ldquo;Space AI understood our healthcare construction requirements from day one. 
                The compliance features alone saved us countless hours and potential issues.&rdquo;
              </blockquote>
              <div>
                <div className="text-white font-semibold">Sarah Chen</div>
                <div className="text-white/50">VP of Construction, MedBuild Corp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-blue-500/20 via-purple-500/10 to-teal-500/20 border border-white/10 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
                Join thousands of construction professionals who&apos;ve made the switch 
                to AI-powered project management built for their specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black py-4 px-10 rounded-xl font-semibold hover:bg-white/90 transition-colors text-lg"
                >
                  Book Industry Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white py-4 px-10 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm text-lg"
                >
                  View Case Studies
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
            name: "Space AI Industry Solutions",
            description: "AI-powered construction management solutions for various industries",
            url: "https://pmspace.ai/industries/",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: industries.map((industry, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `${industry.title} Construction Solutions`,
                description: industry.description,
                url: `https://pmspace.ai/industries/${industry.slug}/`,
              })),
            },
          }),
        }}
      />
      <nav aria-label="Industry focus links" className="container mx-auto px-4 pb-12 text-sm flex flex-wrap gap-3">
        <Link href="/industries/defense/" className="text-white/80 hover:text-white underline">Defense Construction</Link>
        <Link href="/industries/real-estate/" className="text-white/80 hover:text-white underline">Real Estate Construction</Link>
        <Link href="/industries/transportation/" className="text-white/80 hover:text-white underline">Transportation Construction</Link>
      </nav>
    </div>
  );
}

