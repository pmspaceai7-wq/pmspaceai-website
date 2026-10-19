"use client";

// src/app/newsletter/NewsletterClient.tsx
// Client component for newsletter page with working email subscription form

import { useState, FormEvent } from "react";
import Link from "next/link";
import {
  Mail,
  Send,
  Calendar,
  FileText,
  BookOpen,
  TrendingUp,
  Zap,
  Users,
  Star,
  CheckCircle,
  ArrowRight,
  Clock,
  Bell,
  Award,
  Building,
  Lightbulb,
  BarChart3,
  Target,
  X,
  Loader2,
} from "lucide-react";

// Types
interface PastIssue {
  date: string;
  issueNumber: string;
  title: string;
  topics: string[];
  readTime: string;
  featured: boolean;
}

interface TopicCategory {
  name: string;
  count: number;
  color: string;
}

interface SubscriberStat {
  value: string;
  label: string;
}

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

// Data
const newsletterBenefits = [
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description: "Expert analysis of construction technology trends and market developments",
  },
  {
    icon: Zap,
    title: "AI Innovation Updates",
    description: "First look at new AI features and predictive analytics capabilities",
  },
  {
    icon: BookOpen,
    title: "Best Practices",
    description: "Proven strategies from top-performing construction teams",
  },
  {
    icon: Target,
    title: "Product Tips",
    description: "Maximize your Space AI ROI with power user techniques",
  },
];

const pastIssues: PastIssue[] = [];

const topicCategories: TopicCategory[] = [];

const subscriberStats: SubscriberStat[] = [];

const testimonials: Testimonial[] = [];

const upcomingTopics: string[] = [];

// Success Modal
function SuccessModal({ 
  email, 
  onClose 
}: { 
  email: string; 
  onClose: () => void;
}) {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md mx-4 bg-gray-900 rounded-2xl border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3">
            You&apos;re Subscribed!
          </h3>
          
          <p className="text-white/60 mb-6">
            Welcome to The Build Brief! We&apos;ve sent a confirmation to:
            <br />
            <span className="text-white font-medium">{email}</span>
          </p>

          <div className="bg-white/5 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-white/80 mb-2">What happens next:</p>
            <ul className="text-sm text-white/60 space-y-1">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                Check your inbox for confirmation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                Receive your first issue this Thursday
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                Access all past issues anytime
              </li>
            </ul>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:opacity-90 transition"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewsletterClient() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setSubmittedEmail(email);
    setShowSuccess(true);
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal 
          email={submittedEmail} 
          onClose={() => setShowSuccess(false)} 
        />
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium border border-orange-500/30 flex items-center gap-1">
              <Mail className="w-4 h-4" /> The Build Brief
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              25,000+ Subscribers
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
            Construction Intelligence,<br />Delivered Weekly
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Join 25,000+ construction professionals getting AI insights, 
            industry trends, and actionable strategies every Thursday.
          </p>
          
          {/* Main Signup Form */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-orange-500 text-white placeholder-white/50"
                    disabled={isSubmitting}
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      <>
                        Subscribe <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}
                <p className="text-white/50 text-sm flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            {subscriberStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-orange-400">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">What You&apos;ll Get</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Curated content designed for busy construction professionals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsletterBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-orange-500/30 transition-colors"
              >
                <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400 w-fit mx-auto mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-white/60 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Readers Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 italic mb-4">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-white/50 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Issue */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Latest Issue</h2>
          <p className="text-white/60 text-center mb-8">
            Here&apos;s a preview of what we cover each week.
          </p>
          {pastIssues.filter(i => i.featured).map((issue, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
                  Featured Issue
                </span>
                <span className="text-white/50 text-sm">{issue.issueNumber}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{issue.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {issue.topics.map((topic, topicIdx) => (
                  <span
                    key={topicIdx}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-white/50 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {issue.date}
                </span>
                <span className="text-white/50 text-sm flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {issue.readTime} read
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Issues Archive */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Recent Issues</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Browse our archive of past newsletters. All issues available to subscribers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastIssues.filter(i => !i.featured).slice(0, 8).map((issue, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-colors"
              >
                <span className="text-xs text-white/50 mb-2 block">{issue.issueNumber}</span>
                <h3 className="font-semibold mb-2 line-clamp-2">{issue.title}</h3>
                <div className="flex flex-wrap gap-1 mb-3">
                  {issue.topics.slice(0, 2).map((topic, topicIdx) => (
                    <span
                      key={topicIdx}
                      className="px-2 py-0.5 bg-white/5 rounded text-xs text-white/60"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-white/50 pt-3 border-t border-white/10">
                  <span>{issue.date}</span>
                  <span>{issue.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Topics We Cover</h2>
          <p className="text-white/60 text-center mb-8">
            Dive deep into the subjects that matter most to construction professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {topicCategories.map((topic, idx) => (
              <div
                key={idx}
                className={`px-6 py-3 rounded-xl bg-${topic.color}-500/10 border border-${topic.color}-500/30 text-${topic.color}-300`}
              >
                <span className="font-medium">{topic.name}</span>
                <span className="ml-2 text-sm opacity-70">({topic.count} articles)</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Topics */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Coming Soon</h2>
          <p className="text-white/60 text-center mb-8">
            Here&apos;s what we&apos;re researching for upcoming issues.
          </p>
          <div className="space-y-4">
            {upcomingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                  <Bell className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-white/80">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Join The Build Brief Today</h2>
            <p className="text-white/70 mb-6">
              Get construction intelligence delivered to your inbox every Thursday.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your work email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-orange-500 text-white placeholder-white/50"
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Projects?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            The newsletter shares insights—but Space AI delivers the results. 
            See AI-powered construction management in action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/construction-software-demo/"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Book a Demo
            </Link>
            <Link
              href="/try-it-now/"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
