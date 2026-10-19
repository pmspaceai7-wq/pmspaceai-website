"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Camera,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Smartphone,
  Brain,
  Palette,
  ClipboardList,
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "What is the best residential construction software in 2026?",
    answer:
      "Space AI is the best residential construction software in 2026, combining home builder features like client portals and selection management with AI-powered scheduling and predictive analytics. Unlike Buildertrend or CoConstruct, Space AI includes AI that predicts delays, optimizes schedules, and automates communication—all with a free tier to start.",
  },
  {
    question: "What software do home builders use?",
    answer:
      "Home builders commonly use Buildertrend, CoConstruct, and Space AI for project management. Space AI is gaining popularity for its AI features, modern interface, and better value. Key features home builders need: client portal, selection management, scheduling, change orders, photo documentation, and communication tools.",
  },
  {
    question: "How much does residential construction software cost?",
    answer:
      "Residential construction software costs range from free (Space AI) to $499-999/month (Buildertrend, CoConstruct). Space AI offers a free tier with core features and Professional plans at $99/user/month with AI capabilities—typically 40-60% less than Buildertrend while including more features.",
  },
  {
    question: "What features do home builders need in construction software?",
    answer:
      "Essential home builder software features: client portal for homeowner communication, selection/allowance management, scheduling with trade coordination, change order tracking, photo documentation, budget management, daily logs, and warranty tracking. Space AI includes all these plus AI-powered predictions and automation.",
  },
  {
    question: "Is Space AI good for custom home builders?",
    answer:
      "Yes, Space AI is excellent for custom home builders. It handles unique specifications, tracks custom selections with allowances, coordinates specialty trades, manages client communication through a dedicated portal, and uses AI to predict completion dates even for complex one-of-a-kind homes.",
  },
  {
    question: "Can residential construction software integrate with QuickBooks?",
    answer:
      "Yes, Space AI integrates with QuickBooks Online and Desktop for seamless financial management. Sync invoices, track payments, manage vendor bills, and keep your books accurate without double entry. Space AI also integrates with other accounting tools like Sage and Xero.",
  },
  {
    question: "What is the difference between residential and commercial construction software?",
    answer:
      "Residential construction software emphasizes client communication, selection management, and homeowner portals. Commercial software focuses on complex document control, multi-stakeholder coordination, and enterprise reporting. Space AI handles both, making it ideal for builders doing residential and light commercial work.",
  },
  {
    question: "How does Space AI help home builders save time?",
    answer:
      "Space AI saves home builders 8+ hours per week through AI automation: automatic schedule updates when delays occur, smart notifications to trades, AI-generated progress reports for clients, automated document organization, and predictive alerts about potential issues before they become problems.",
  },
];

// FAQ Schema
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Software Schema
function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Space AI Residential Construction Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Residential Construction Management",
    operatingSystem: "Web, iOS, Android",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "99",
      priceCurrency: "USD",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
    },
    featureList: [
      "Client Portal",
      "Selection Management",
      "AI Schedule Optimization",
      "Change Order Tracking",
      "Photo Documentation",
      "Daily Logs",
      "Budget Management",
      "Trade Coordination",
      "Warranty Tracking",
      "QuickBooks Integration",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Home Builders, Residential Contractors, Remodelers",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const features = [
  {
    icon: Users,
    title: "Client Portal",
    description:
      "Dedicated homeowner portal for selections, approvals, progress updates, and communication. Keep clients informed and reduce calls.",
    highlight: true,
  },
  {
    icon: Palette,
    title: "Selection Management",
    description:
      "Track all selections with allowances, pricing, and deadlines. Clients approve online. Never miss a selection deadline again.",
    highlight: true,
  },
  {
    icon: Calendar,
    title: "AI-Powered Scheduling",
    description:
      "Smart scheduling that coordinates trades, predicts delays, and auto-adjusts when things change. 3-4 week delay predictions.",
    highlight: true,
  },
  {
    icon: DollarSign,
    title: "Budget & Change Orders",
    description:
      "Track budgets, manage allowances, process change orders with client approval. QuickBooks integration included.",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description:
      "Capture and organize construction photos automatically. Share progress with clients. Document everything for warranty.",
  },
  {
    icon: ClipboardList,
    title: "Daily Logs & Reports",
    description:
      "Easy daily logs with voice-to-text. AI generates weekly summaries. Keep everyone informed effortlessly.",
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description:
      "Message trades, clients, and team in one place. Threaded conversations tied to projects and tasks.",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description:
      "Full-featured iOS and Android apps for the field. Works offline. Sync when connected.",
  },
];

const useCases = [
  {
    title: "Custom Home Builders",
    description: "Manage unique specs, complex selections, and demanding clients with AI assistance",
    icon: Home,
  },
  {
    title: "Production Builders",
    description: "Scale efficiently with templates, standardized processes, and multi-project oversight",
    icon: Users,
  },
  {
    title: "Remodelers",
    description: "Handle the chaos of occupied homes with clear communication and tight scheduling",
    icon: Clock,
  },
  {
    title: "Design-Build Firms",
    description: "Bridge design and construction with integrated workflows and client collaboration",
    icon: FileText,
  },
];

const testimonials = [
  {
    quote: "Space AI transformed how we manage custom homes. The AI predictions are scary accurate—we told a client about a potential delay 3 weeks before our old software would have caught it.",
    author: "Mike Reynolds",
    role: "Owner, Reynolds Custom Homes",
    location: "Austin, TX",
    rating: 5,
  },
  {
    quote: "The client portal alone is worth it. Our homeowners love seeing progress without calling us every day. Selection management is finally easy.",
    author: "Sarah Chen",
    role: "Project Manager, Coastal Builders",
    location: "San Diego, CA",
    rating: 5,
  },
  {
    quote: "Switched from Buildertrend. Space AI costs less, does more, and my team actually uses it because it's not clunky. The AI features are game-changing.",
    author: "James Martinez",
    role: "CEO, Heritage Homes",
    location: "Denver, CO",
    rating: 5,
  },
];

export default function ResidentialConstructionSoftwarePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <FAQSchema />
      <SoftwareSchema />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs font-medium mb-4">
            <Home className="w-3.5 h-3.5" />
            #1 Rated for Home Builders
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Residential Construction Software
            </span>
            <br />
            <span className="text-green-400">Built for Home Builders</span>
          </h1>

          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            The AI-powered construction software that <strong>custom home builders</strong>, 
            <strong> production builders</strong>, and <strong>remodelers</strong> trust. 
            Client portal, selection management, smart scheduling—everything you need, 
            none of the complexity.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Users className="w-4 h-4 text-purple-400" />
              <span>500+ home builders</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Free tier available</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/try-it-now/">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/construction-software-demo/">
              <button className="border border-white/20 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                See Demo
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Problem/Solution */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-red-500/10 to-green-500/10 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-4">
                  The Home Builder Struggle
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Clients calling for updates constantly
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Selection deadlines missed, delays pile up
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Trades not showing up when scheduled
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Change orders lost in email threads
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    No visibility into project profitability
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-green-400 mb-4">
                  The Space AI Solution
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    Client portal with real-time progress
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    AI alerts before selections are late
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    Smart scheduling with auto-notifications
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    Centralized change order workflow
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    Real-time budget and profit tracking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Everything Home Builders Need
          </h2>
          <p className="text-center text-white/60 mb-8">
            Purpose-built features for residential construction
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-5 rounded-xl ${
                  feature.highlight
                    ? "bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/30"
                    : "bg-gray-900/50 border border-white/10"
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${
                  feature.highlight ? "text-green-400" : "text-purple-400"
                }`} />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Highlight */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-bold text-white">
                AI That Understands Home Building
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              Space AI&apos;s AI learns your building process and proactively helps:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Predict Delays</div>
                <p className="text-sm text-white/60">
                  Know about potential delays 3-4 weeks before they impact closing dates
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Optimize Schedules</div>
                <p className="text-sm text-white/60">
                  AI suggests the optimal trade sequence based on your past projects
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Auto-Update Clients</div>
                <p className="text-sm text-white/60">
                  AI generates progress summaries so clients stay informed automatically
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Built for Every Type of Home Builder
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition-colors"
              >
                <useCase.icon className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-white/60 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted by Home Builders
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 text-sm mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                  <div className="text-white/40 text-xs">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5"
              >
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start Building Homes Smarter Today
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join 500+ home builders using Space AI to deliver homes on time, 
              keep clients happy, and grow their business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Free—No Credit Card
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/construction-software-demo/">
                <button className="border border-white/20 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                  Schedule Demo
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Related Links */}
      <section className="container mx-auto px-4 py-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-4">Related Pages</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/alternatives/buildertrend-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-green-500/50 transition-colors text-sm">
              Buildertrend Alternative →
            </Link>
            <Link href="/alternatives/coconstruct-alternative/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-green-500/50 transition-colors text-sm">
              CoConstruct Alternative →
            </Link>
            <Link href="/construction-management-software-small-business/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-green-500/50 transition-colors text-sm">
              Small Business Software →
            </Link>
            <Link href="/construction-software-for-general-contractors/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-green-500/50 transition-colors text-sm">
              General Contractor Software →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
