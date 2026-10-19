"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Users,
  DollarSign,
  BarChart3,
  Mail,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Brain,
  Target,
  TrendingUp,
  Layers,
  Search,
  Bell,
} from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "What is construction bidding software?",
    answer:
      "Construction bidding software automates the bid management process for contractors and subcontractors. It handles bid invitations, proposal submissions, bid leveling, subcontractor management, and award tracking. Space AI's bidding module includes AI-powered bid analysis that helps identify the most competitive bids and potential risks.",
  },
  {
    question: "What is the best construction bidding software in 2026?",
    answer:
      "Space AI is the leading construction bidding software in 2026, combining traditional bid management with AI-powered analysis. Unlike BuildingConnected or iSqFt, Space AI integrates bidding with project management, provides AI bid recommendations, and includes a free tier. Key differentiator: AI predicts bid competitiveness before submission.",
  },
  {
    question: "How much does construction bidding software cost?",
    answer:
      "Construction bidding software ranges from free (Space AI starter) to $500+/month (BuildingConnected Pro). Space AI offers bidding features in its free tier with limited projects, Professional at $99/user/month with unlimited bidding and AI analysis, and Enterprise with volume discounts.",
  },
  {
    question: "What features should construction bidding software have?",
    answer:
      "Essential bidding software features: bid invitation management, subcontractor database, bid submission portal, bid leveling/comparison tools, scope gap analysis, award tracking, and reporting. Premium features include AI bid analysis, risk assessment, historical bid data, and integration with estimating software.",
  },
  {
    question: "How does AI improve construction bidding?",
    answer:
      "Space AI's AI improves bidding by: 1) Analyzing historical bids to predict competitive pricing, 2) Identifying scope gaps and inconsistencies across bids, 3) Flagging potential risks in subcontractor proposals, 4) Recommending optimal bid strategies based on market conditions, 5) Automating bid leveling to save hours of manual comparison.",
  },
  {
    question: "Can Space AI help subcontractors win more bids?",
    answer:
      "Yes, Space AI helps subcontractors win bids by: providing visibility into bid status, alerting to new opportunities matching your trade, helping create professional proposals quickly, tracking win rates to improve strategy, and using AI to suggest competitive pricing based on project characteristics.",
  },
  {
    question: "Does construction bidding software integrate with estimating tools?",
    answer:
      "Yes, Space AI integrates with major estimating software including Excel, Bluebeam, On-Screen Takeoff, and PlanSwift. Import estimates directly into bid proposals, sync quantities, and maintain consistency between estimating and bidding workflows.",
  },
  {
    question: "How long does it take to implement bidding software?",
    answer:
      "Space AI bidding can be implemented in 1-2 days for basic use, or 1-2 weeks for full integration with existing systems. The intuitive interface requires minimal training. Import your subcontractor database, customize bid templates, and start sending invitations immediately.",
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
    name: "Space AI Construction Bidding Software",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Construction Bid Management",
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
      reviewCount: "276",
      bestRating: "5",
    },
    featureList: [
      "Bid Invitation Management",
      "Subcontractor Database",
      "AI Bid Analysis",
      "Bid Leveling",
      "Scope Gap Analysis",
      "Proposal Builder",
      "Award Tracking",
      "Win Rate Analytics",
      "Estimating Integration",
      "Mobile Bidding",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "General Contractors, Subcontractors, Estimators",
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
    icon: Mail,
    title: "Bid Invitations",
    description:
      "Send professional bid invitations to your subcontractor database. Track opens, views, and responses. Automated reminders for deadlines.",
    highlight: true,
  },
  {
    icon: Layers,
    title: "Bid Leveling",
    description:
      "Side-by-side comparison of all bids. AI highlights scope gaps, exclusions, and pricing anomalies. Make confident award decisions.",
    highlight: true,
  },
  {
    icon: Brain,
    title: "AI Bid Analysis",
    description:
      "AI analyzes bids for competitiveness, identifies risks, and suggests negotiation points. Powered by analysis of thousands of bids.",
    highlight: true,
  },
  {
    icon: Users,
    title: "Subcontractor Database",
    description:
      "Centralized database with prequalification, insurance tracking, and performance history. Know who to invite for every project.",
  },
  {
    icon: FileText,
    title: "Proposal Builder",
    description:
      "Create professional proposals quickly. Templates, scope libraries, and integration with your estimates for accurate pricing.",
  },
  {
    icon: BarChart3,
    title: "Win Rate Analytics",
    description:
      "Track win rates by project type, client, and trade. Identify what's working and optimize your bidding strategy.",
  },
  {
    icon: Bell,
    title: "Bid Alerts",
    description:
      "Get notified of new opportunities matching your criteria. Never miss a relevant project in your market.",
  },
  {
    icon: Target,
    title: "Award Tracking",
    description:
      "Manage the entire lifecycle from bid to award. Track buyouts, contracts, and transition to project execution.",
  },
];

const bidProcess = [
  {
    step: "1",
    title: "Send Invitations",
    description: "Invite subs from your database with one click. Include drawings, specs, and due dates.",
  },
  {
    step: "2",
    title: "Receive Bids",
    description: "Subs submit through your branded portal. All bids organized and tracked automatically.",
  },
  {
    step: "3",
    title: "AI Analysis",
    description: "AI levels bids, identifies gaps, and flags risks. Get recommendations in seconds.",
  },
  {
    step: "4",
    title: "Award & Execute",
    description: "Make confident awards with full documentation. Seamless transition to project management.",
  },
];

const testimonials = [
  {
    quote: "We used to spend 2 days leveling bids manually. Space AI's AI does it in minutes and catches things we'd miss. Our hit rate went up 25%.",
    author: "Tom Anderson",
    role: "Chief Estimator, Meridian Builders",
    rating: 5,
  },
  {
    quote: "As a sub, Space AI helps me submit professional bids faster and track where I stand. I've won 40% more work since switching.",
    author: "Maria Santos",
    role: "Owner, Santos Electric",
    rating: 5,
  },
  {
    quote: "The subcontractor prequalification feature saved us from a nightmare. Space AI flagged an insurance lapse before we awarded.",
    author: "Kevin Chen",
    role: "VP Preconstruction, Urban Development",
    rating: 5,
  },
];

export default function ConstructionBiddingSoftwarePage() {
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs font-medium mb-4">
            <Target className="w-3.5 h-3.5" />
            Win More Bids with AI
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Construction Bidding Software
            </span>
            <br />
            <span className="text-orange-400">That Wins Projects</span>
          </h1>

          <p className="text-lg text-white/70 mb-6 max-w-3xl mx-auto">
            AI-powered bid management for <strong>general contractors</strong> and 
            <strong> subcontractors</strong>. Send invitations, level bids, and win more work—
            all in one platform. <strong>Free tier available.</strong>
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span>25% higher win rates</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <Clock className="w-4 h-4 text-orange-400" />
              <span>80% faster bid leveling</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/try-it-now/">
              <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Start Bidding Free
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
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-white/10 rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-red-400 mb-4">
                  Traditional Bidding Pain Points
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Hours spent manually leveling bid spreadsheets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Scope gaps discovered after award
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    No insight into why you&apos;re losing bids
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Subcontractor info scattered everywhere
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Missing bid deadlines on good opportunities
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-orange-400 mb-4">
                  The Space AI Bidding Solution
                </h2>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    AI levels bids in seconds, not hours
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    Automatic scope gap detection
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    Win rate analytics by project type
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    Centralized sub database with prequalification
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    Smart alerts for matching opportunities
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bid Process */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Simple, Powerful Bid Management
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {bidProcess.map((step, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-xl p-5 relative"
              >
                <div className="absolute -top-3 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  {step.step}
                </div>
                <h3 className="font-semibold text-white mt-3 mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.description}</p>
              </div>
            ))}
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
            Complete Bid Management Platform
          </h2>
          <p className="text-center text-white/60 mb-8">
            Everything you need to win more construction bids
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
                    ? "bg-gradient-to-br from-orange-500/20 to-amber-500/10 border border-orange-500/30"
                    : "bg-gray-900/50 border border-white/10"
                }`}
              >
                <feature.icon className={`w-8 h-8 mb-3 ${
                  feature.highlight ? "text-orange-400" : "text-purple-400"
                }`} />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AI Deep Dive */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-500/30 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-purple-400" />
              <h2 className="text-xl font-bold text-white">
                AI-Powered Bid Intelligence
              </h2>
            </div>
            <p className="text-white/70 mb-6">
              Space AI&apos;s AI analyzes every bid to give you an unfair advantage:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Competitive Analysis</div>
                <p className="text-sm text-white/60">
                  AI compares your bid against market data to predict competitiveness before you submit
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Risk Detection</div>
                <p className="text-sm text-white/60">
                  Automatically flag low bids that could indicate scope misunderstanding or unrealistic pricing
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Scope Gap Analysis</div>
                <p className="text-sm text-white/60">
                  Compare all bids against scope requirements to identify what&apos;s included and excluded
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-4">
                <div className="text-purple-400 font-semibold mb-1">Win Probability</div>
                <p className="text-sm text-white/60">
                  Get AI predictions on which bids to prioritize based on historical win patterns
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* For GCs and Subs */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-orange-400" />
                For General Contractors
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Manage subcontractor database with prequalification
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Send bid invitations with automated reminders
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  AI-powered bid leveling and comparison
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Track award to execution seamlessly
                </li>
              </ul>
            </div>
            <div className="bg-gray-900/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                For Subcontractors
              </h3>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Get alerts for new bid opportunities
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Create professional proposals quickly
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Track bid status in real-time
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  Analyze win rates to improve strategy
                </li>
              </ul>
            </div>
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
            Contractors Winning More Bids
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
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Win More Bids?
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join contractors using Space AI to streamline bidding, make better decisions, 
              and win more profitable work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/try-it-now/">
                <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Start Bidding Free
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
            <Link href="/construction-estimation-software/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-orange-500/50 transition-colors text-sm">
              Estimating Software →
            </Link>
            <Link href="/subcontractor-management-software-construction/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-orange-500/50 transition-colors text-sm">
              Subcontractor Management →
            </Link>
            <Link href="/construction-software-for-general-contractors/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-orange-500/50 transition-colors text-sm">
              General Contractor Software →
            </Link>
            <Link href="/construction-estimation-software/" className="px-4 py-2 bg-gray-800/50 border border-white/10 rounded-lg text-white/80 hover:border-orange-500/50 transition-colors text-sm">
              Preconstruction Software →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
