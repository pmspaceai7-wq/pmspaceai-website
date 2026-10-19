// src/app/services/page.tsx
// Services Hub - Professional services showcase

import { Metadata } from "next";
import Link from "next/link";
import { 
  Code, Database, Cpu, Cog, Zap, Layers,
  ArrowRight, CheckCircle, Users, Clock,
  Shield, Sparkles, Headphones, Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | AI Development & Digital Transformation | Space AI",
  description: "Space AI professional services for construction technology: AI app development, API development, digital transformation, data management, and software integration solutions.",
  keywords: [
    "ai app development",
    "construction software development",
    "api development services",
    "digital transformation construction",
    "data management services",
    "software development construction",
  ],
  alternates: {
    canonical: "https://pmspace.ai/services/",
  },
  openGraph: {
    title: "Professional Services | Space AI",
    description: "Expert AI development, digital transformation, and technology services for the construction industry.",
    url: "https://pmspace.ai/services/",
    type: "website",
  },
};

const services = [
  {
    icon: Cpu,
    title: "AI App Development",
    slug: "ai-app-development",
    description: "Custom AI-powered applications built specifically for your construction workflows and business processes.",
    features: [
      "Machine Learning Models",
      "Natural Language Processing",
      "Computer Vision Solutions",
      "Predictive Analytics",
    ],
    gradient: "from-purple-500 to-violet-600",
    highlight: "Most Popular",
  },
  {
    icon: Code,
    title: "API Development",
    slug: "api-development",
    description: "Robust, scalable APIs that connect your construction systems and enable seamless data flow.",
    features: [
      "RESTful & GraphQL APIs",
      "Webhook Integrations",
      "Real-time Data Sync",
      "Security & Authentication",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description: "End-to-end digital transformation strategies to modernize your construction operations.",
    features: [
      "Process Automation",
      "Cloud Migration",
      "Legacy System Modernization",
      "Change Management",
    ],
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    icon: Database,
    title: "Data Management",
    slug: "data-management-service",
    description: "Comprehensive data solutions to unify, analyze, and leverage your construction project data.",
    features: [
      "Data Integration",
      "Analytics Dashboards",
      "Business Intelligence",
      "Data Governance",
    ],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: Cog,
    title: "Application Maintenance",
    slug: "application-maintenance",
    description: "Ongoing support and maintenance to keep your construction software running smoothly.",
    features: [
      "24/7 Monitoring",
      "Performance Optimization",
      "Security Updates",
      "Feature Enhancements",
    ],
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Layers,
    title: "Software Integration",
    slug: "software-injection",
    description: "Seamlessly integrate Space AI with your existing tools and enterprise systems.",
    features: [
      "ERP Integration",
      "BIM Connectivity",
      "Accounting Systems",
      "Custom Connectors",
    ],
    gradient: "from-indigo-500 to-purple-600",
  },
];

const stats = [
  { icon: Users, value: "200+", label: "Projects Delivered" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Award, value: "98%", label: "Client Satisfaction" },
  { icon: Shield, value: "SOC 2", label: "Certified" },
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your needs and define the project scope" },
  { step: "02", title: "Design", description: "Creating detailed specifications and architecture" },
  { step: "03", title: "Development", description: "Agile development with regular check-ins" },
  { step: "04", title: "Deployment", description: "Smooth launch with training and support" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(168,85,247,0.2),transparent)]" />
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
              <Headphones className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-white/80">Professional Services</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Expert Services for</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
                Construction Tech
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              From AI development to digital transformation, our expert team delivers 
              custom solutions that accelerate your construction technology journey.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/contact-sales/"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Schedule Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Comprehensive technology services tailored for construction industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <span className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium">
                    {service.highlight}
                  </span>
                )}

                {/* Gradient Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span className="text-sm text-white/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-purple-400 text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              A proven methodology that delivers results on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                )}
                
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-br from-purple-500/20 via-transparent to-teal-500/20 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto mb-8">
                Ready to transform your construction technology? 
                Our team is here to help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-sales/"
                  className="inline-flex items-center justify-center gap-2 bg-white text-black py-4 px-8 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white py-4 px-8 rounded-xl font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
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
            "@type": "ProfessionalService",
            name: "Space AI Professional Services",
            description: "AI development and digital transformation services for construction technology",
            url: "https://pmspace.ai/services/",
            provider: {
              "@type": "Organization",
              name: "Space AI",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Professional Services",
              itemListElement: services.map((service) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: service.title,
                  description: service.description,
                },
              })),
            },
          }),
        }}
      />
      <nav aria-label="Services related links" className="container mx-auto px-4 pb-12 text-sm flex flex-wrap gap-3">
        <Link href="/services/application-maintenance/" className="text-white/80 hover:text-white underline">Application Maintenance</Link>
        <Link href="/services/software-integration-services/" className="text-white/80 hover:text-white underline">Software Integration Services</Link>
        <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Contact Specialists</Link>
      </nav>
    </div>
  );
}
