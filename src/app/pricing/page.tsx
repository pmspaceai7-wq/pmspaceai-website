// src/app/pricing/page.tsx
// Critical page for SEO - "pricing" is high-intent keyword
// Task 4: FAQ Schema Implementation for Rich Snippets

import { Metadata } from "next";
import Link from "next/link";
import { Check, FlaskConical, Building2, HelpCircle, ArrowRight } from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

interface PricingFAQ {
  question: string;
  answer: string;
}

// Comprehensive pricing FAQs for rich snippets
const pricingFAQs: PricingFAQ[] = [
  {
    question: "Is there a free plan for Space AI?",
    answer:
      "Yes. Space AI offers a free test-mode plan with an included AI token allocation. Free tokens are temporary and may expire.",
  },
  {
    question: "What is included in the free plan?",
    answer:
      "The free plan includes AI tokens, file management for up to 5 files, up to 5 forms, Form Designer access, and an isolated workspace for evaluation.",
  },
  {
    question: "How does Enterprise pricing work?",
    answer:
      "Enterprise pricing is custom. The Space AI team provides pricing based on team size, modules, implementation needs, integrations, and support requirements.",
  },
  {
    question: "Are there fixed public paid plans?",
    answer:
      "No fixed public paid plan is listed on this page. Production use is handled through the Enterprise plan with custom pricing.",
  },
];

export const metadata: Metadata = {
  title: "AI Construction Software Pricing | Free Test & Enterprise",
  description: "Space AI pricing includes free test mode with AI tokens, files, forms, and an isolated workspace, plus custom Enterprise pricing for production rollouts.",
  keywords: [
    "construction management software pricing",
    "construction software pricing",
    "project management software cost",
    "construction management plans",
    "free construction software",
    "enterprise construction software pricing",
  ],
  alternates: {
    canonical: "https://pmspace.ai/pricing/",
  },
  openGraph: {
    title: "AI Construction Software Pricing | Free Test & Enterprise",
    description: "Free test mode includes AI tokens, files, forms, and an isolated workspace. Enterprise plans use custom pricing.",
    url: "https://pmspace.ai/pricing/",
    type: "website",
  },
};

const pricingPlans = [
  {
    name: "Free",
    description: "Test mode for exploring Space AI before a production rollout",
    price: "Free",
    period: "test mode",
    features: [
      "AI token allocation included",
      "File management for up to 5 files",
      "Form builder for up to 5 forms",
      "Form Designer access",
      "Your own isolated workspace",
      "Tokens may expire",
      "Test-mode access only",
      "Not intended for production projects",
    ],
    cta: "Explore Free Tier",
    href: "/pricing/freetire/",
    popular: false,
    icon: FlaskConical,
  },
  {
    name: "Enterprise",
    description: "Custom pricing for teams ready to deploy Space AI in production",
    price: "Custom",
    period: "pricing",
    features: [
      "Production workspace setup",
      "Custom modules and workflows",
      "Implementation and onboarding support",
      "Integration planning",
      "Security and access configuration",
      "Dedicated success manager",
      "Custom support requirements",
    ],
    cta: "Contact Sales",
    href: "/contact-sales/",
    popular: true,
    icon: Building2,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.15),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Free Test Mode and Enterprise Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-lg md:text-xl text-white/70">
              Start with included test-mode tools, then move to an Enterprise plan
              with custom pricing for production use.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular
                    ? "border-purple-500 shadow-lg shadow-purple-500/20"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-teal-400 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <plan.icon className="w-10 h-10 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-white/60 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`block w-full py-3 px-6 text-center rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-teal-400 text-white hover:opacity-90"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals - Removed unverified claims */}

      {/* FAQ Schema for Rich Snippets - Task 4 */}
      <FAQSchema faqs={pricingFAQs} />

      {/* Enhanced FAQ Section for SEO */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Pricing FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Construction Management Software Pricing Questions
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Everything you need to know about Space AI pricing, plans, and getting started
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {pricingFAQs.map((faq, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-purple-500 to-teal-400 rounded-full flex items-center justify-center text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-white/70 leading-relaxed pl-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA within FAQ section */}
            <div className="mt-12 text-center">
              <p className="text-white/60 mb-4">Still have questions about pricing?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-sales/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-teal-400 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Talk to Sales
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/construction-software-demo/"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-teal-400/20 border border-white/10 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Construction Management?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Use the free test mode to explore Space AI, or contact the team for custom Enterprise pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/try-it-now/"
                className="bg-gradient-to-r from-purple-500 to-teal-400 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Try Free Test Mode
              </Link>
              <Link
                href="/construction-software-demo/"
                className="bg-white/10 text-white py-3 px-8 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
            <p className="mt-6 text-white/60">
              Want to estimate your return?{" "}
              <Link
                href="/tools/roi-calculator/"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-4"
              >
                Calculate your ROI
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Schema.org Pricing Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Space AI",
            applicationCategory: "BusinessApplication",
            offers: {
              "@type": "OfferCatalog",
              name: "Space AI Pricing",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Free",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free test-mode access with AI tokens, files, forms, and an isolated workspace included.",
                },
                {
                  "@type": "Offer",
                  name: "Enterprise",
                  priceSpecification: {
                    "@type": "PriceSpecification",
                    priceCurrency: "USD",
                    description: "Custom pricing based on production requirements.",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
