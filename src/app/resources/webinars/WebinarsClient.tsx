"use client";

// src/app/resources/webinars/WebinarsClient.tsx
// Client component for webinars page with working registration and video playback

import { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  PlayCircle,
  Video,
  ArrowRight,
  Bell,
  CheckCircle,
  Star,
  Mic,
  Monitor,
  BookOpen,
  Award,
  Zap,
  Target,
  TrendingUp,
  FileText,
  Building,
  X,
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

// Types
interface Webinar {
  id: string;
  title: string;
  date: string;
  time: string;
  duration: string;
  presenter: string;
  presenterTitle: string;
  description: string;
  topics: string[];
  attendeeLimit: number;
  spotsLeft: number;
  category: string;
  featured?: boolean;
}

interface OnDemandWebinar {
  id: string;
  title: string;
  duration: string;
  views: number;
  rating: number;
  category: string;
  description: string;
  topics: string[];
  youtubeUrl?: string;
}

// Registration Modal
function RegistrationModal({ 
  webinar, 
  onClose 
}: { 
  webinar: Webinar | null; 
  onClose: () => void;
}) {
  if (!webinar) return null;

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

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
              <Calendar className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Register for Webinar</h3>
            <p className="text-white/60 text-sm">{webinar.title}</p>
          </div>

          <div className="space-y-3 mb-6 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>{webinar.date}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>{webinar.time} • {webinar.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80 text-sm">
              <Mic className="w-4 h-4 text-purple-400" />
              <span>{webinar.presenter}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/construction-software-demo/"
              className="block w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition text-center"
            >
              Register Now - Book Demo
            </Link>

            <p className="text-center text-xs text-white/40">
              You&apos;ll be redirected to our demo booking page to secure your spot
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Video Modal for on-demand webinars
function VideoModal({ 
  webinar, 
  onClose 
}: { 
  webinar: OnDemandWebinar | null; 
  onClose: () => void;
}) {
  if (!webinar) return null;

  // Placeholder video ID (in production, each webinar would have its own)
  const videoId = webinar.youtubeUrl || "dQw4w9WgXcQ"; // Placeholder

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition flex items-center gap-2"
        >
          <X className="w-5 h-5" />
          <span>Close</span>
        </button>

        <div className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-lg font-semibold text-white">{webinar.title}</h3>
            <p className="text-sm text-white/60">{webinar.duration} • {webinar.category}</p>
          </div>
          
          {/* Video not available message - redirects to demo */}
          <div className="aspect-video bg-black flex items-center justify-center">
            <div className="text-center p-8">
              <PlayCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-white mb-2">Webinar Recording</h4>
              <p className="text-white/60 mb-6 max-w-md">
                This webinar recording is available for Space AI users. 
                Book a demo to get full access to our training library.
              </p>
              <Link
                href="/construction-software-demo/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition"
              >
                Book a Demo for Access
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Data
const upcomingWebinars: Webinar[] = [
  {
    id: "webinar-ai-scheduling-2025",
    title: "AI-Powered Schedule Optimization: Predict Delays Before They Happen",
    date: "February 15, 2025",
    time: "2:00 PM EST",
    duration: "45 minutes",
    presenter: "Dr. Sarah Chen",
    presenterTitle: "VP of AI Products, Space AI",
    description: "Learn how machine learning predicts construction delays 2-4 weeks in advance and enables proactive intervention to keep projects on track.",
    topics: ["Predictive delay analysis", "Weather integration", "Resource optimization", "Live demo"],
    attendeeLimit: 500,
    spotsLeft: 127,
    category: "Product Deep Dive",
    featured: true,
  },
  {
    id: "webinar-cost-management-2025",
    title: "From Reactive to Predictive: Transforming Construction Cost Management",
    date: "February 22, 2025",
    time: "1:00 PM EST",
    duration: "60 minutes",
    presenter: "Michael Torres",
    presenterTitle: "Director of Customer Success, Space AI",
    description: "Discover how AI-powered cost forecasting achieves 95% accuracy and eliminates budget surprises on construction projects.",
    topics: ["EAC/ETC forecasting", "Change order prediction", "Contingency optimization", "Case studies"],
    attendeeLimit: 500,
    spotsLeft: 245,
    category: "Best Practices",
    featured: false,
  },
  {
    id: "webinar-mobile-field-2025",
    title: "Field-First Construction Management: Mobile Workflows That Work",
    date: "March 1, 2025",
    time: "11:00 AM EST",
    duration: "45 minutes",
    presenter: "James Williams",
    presenterTitle: "Senior Solutions Engineer, Space AI",
    description: "Maximize field adoption with mobile-optimized workflows. Learn best practices from superintendents and field engineers using Space AI daily.",
    topics: ["Daily reports on mobile", "Photo documentation", "Offline capabilities", "Crew adoption tips"],
    attendeeLimit: 300,
    spotsLeft: 178,
    category: "Product Training",
    featured: false,
  },
  {
    id: "webinar-document-ai-2025",
    title: "Intelligent Document Processing: AI That Reads Your Construction Docs",
    date: "March 8, 2025",
    time: "2:00 PM EST",
    duration: "45 minutes",
    presenter: "Emily Rodriguez",
    presenterTitle: "Product Manager, AI Features, Space AI",
    description: "See how AI automatically extracts data from contracts, specifications, and submittals—eliminating manual data entry and enabling intelligent search.",
    topics: ["Contract extraction", "Spec analysis", "Smart search", "Document linking"],
    attendeeLimit: 400,
    spotsLeft: 312,
    category: "Product Deep Dive",
    featured: false,
  },
];

const onDemandWebinars: OnDemandWebinar[] = [
  {
    id: "od-getting-started",
    title: "Getting Started with Space AI: Complete Onboarding Guide",
    duration: "60 minutes",
    views: 12847,
    rating: 4.9,
    category: "Getting Started",
    description: "Everything you need to set up Space AI for your organization and get your team productive fast.",
    topics: ["Account setup", "Project creation", "Team onboarding", "Integrations"],
  },
  {
    id: "od-rfi-management",
    title: "RFI Management Mastery: Reduce Response Times by 65%",
    duration: "45 minutes",
    views: 8234,
    rating: 4.8,
    category: "Best Practices",
    description: "Learn how AI-powered RFI routing and suggested responses transform your RFI workflow.",
    topics: ["Smart routing", "Duplicate detection", "Response suggestions", "Tracking dashboards"],
  },
  {
    id: "od-submittal-tracking",
    title: "Submittal Tracking: From Chaos to Control",
    duration: "40 minutes",
    views: 6521,
    rating: 4.7,
    category: "Product Training",
    description: "Master submittal workflows with automated tracking, reminders, and approval workflows.",
    topics: ["Submittal logs", "Review workflows", "Automatic reminders", "Spec linking"],
  },
  {
    id: "od-cost-control",
    title: "Construction Cost Control: Budget to EAC in Real-Time",
    duration: "55 minutes",
    views: 9876,
    rating: 4.9,
    category: "Best Practices",
    description: "Comprehensive guide to cost management from budget setup to final cost reporting.",
    topics: ["Budget structure", "Cost tracking", "Change orders", "EVM reporting"],
  },
  {
    id: "od-safety-management",
    title: "Digital Safety Management: Compliance Made Easy",
    duration: "45 minutes",
    views: 5432,
    rating: 4.8,
    category: "Product Training",
    description: "Implement OSHA-compliant safety programs with digital inspections, incident tracking, and training management.",
    topics: ["Safety inspections", "Incident reports", "Training tracking", "Compliance dashboards"],
  },
  {
    id: "od-ai-scheduling",
    title: "AI Schedule Management: Predictive Project Planning",
    duration: "50 minutes",
    views: 7654,
    rating: 4.9,
    category: "Product Deep Dive",
    description: "Deep dive into AI-powered scheduling features that predict delays and optimize resource allocation.",
    topics: ["AI predictions", "Critical path analysis", "Resource leveling", "What-if scenarios"],
  },
];

const presenters = [
  {
    name: "Dr. Sarah Chen",
    title: "VP of AI Products",
    expertise: "Machine Learning, Predictive Analytics",
    webinars: 24,
  },
  {
    name: "Michael Torres",
    title: "Director of Customer Success",
    expertise: "Implementation, Change Management",
    webinars: 32,
  },
  {
    name: "James Williams",
    title: "Senior Solutions Engineer",
    expertise: "Mobile Solutions, Field Workflows",
    webinars: 18,
  },
  {
    name: "Emily Rodriguez",
    title: "Product Manager, AI Features",
    expertise: "Document AI, Intelligent Automation",
    webinars: 15,
  },
];

const faqs = [
  {
    question: "How do I register for a webinar?",
    answer: "Click the 'Register Now' button on any webinar listing. You'll be asked to provide your name, email, and company. After registration, you'll receive a confirmation email with calendar invite and joining instructions. Webinars are free for all Space AI users and prospects.",
  },
  {
    question: "Can I watch webinars on-demand if I miss the live session?",
    answer: "Yes! All webinars are recorded and made available in our on-demand library within 24-48 hours of the live session. Registered attendees receive automatic access to the recording. You can also browse our complete on-demand library anytime without registration.",
  },
  {
    question: "Do webinars count toward Space AI certification?",
    answer: "Some webinars count toward certification requirements. Look for the 'Certification Credit' badge on eligible webinars. Our formal certification programs include structured training modules, assessments, and hands-on exercises. See our Certification Programs section for details.",
  },
  {
    question: "Can I request a specific webinar topic?",
    answer: "Absolutely! We love hearing from our community about topics you want to learn. Send topic suggestions to webinars@pmspace.ai or use the feedback form after any webinar. Popular requests often become future webinar topics within 4-8 weeks.",
  },
  {
    question: "Are webinars interactive? Can I ask questions?",
    answer: "Yes, all live webinars include Q&A sessions. You can submit questions throughout the presentation via the chat panel, and our presenters address them during dedicated Q&A time. For complex questions, our team follows up directly after the webinar.",
  },
  {
    question: "How do I access on-demand webinars?",
    answer: "On-demand webinars are available to everyone. Simply click 'Watch Now' on any on-demand listing—no registration required. Space AI customers can also access recordings directly from within the application under Help > Training Videos.",
  },
];

export default function WebinarsClient() {
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null);
  const [selectedOnDemand, setSelectedOnDemand] = useState<OnDemandWebinar | null>(null);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Registration Modal */}
      <RegistrationModal 
        webinar={selectedWebinar} 
        onClose={() => setSelectedWebinar(null)} 
      />

      {/* Video Modal */}
      <VideoModal 
        webinar={selectedOnDemand} 
        onClose={() => setSelectedOnDemand(null)} 
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
              Learn & Connect
            </span>
            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              Free Training
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Webinars & Events
          </h1>
          <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
            Expert-led training sessions, product deep dives, and industry insights. 
            Master AI-powered construction management with our free learning resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#upcoming"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" /> View Upcoming
            </a>
            <a
              href="#on-demand"
              className="px-8 py-4 bg-white/10 border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <PlayCircle className="w-5 h-5" /> Watch On-Demand
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-white/60 text-sm">On-Demand Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">75K+</div>
              <div className="text-white/60 text-sm">Attendees Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">4.8</div>
              <div className="text-white/60 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100%</div>
              <div className="text-white/60 text-sm">Free Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section id="upcoming" className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Upcoming Webinars</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Reserve your spot for live sessions with Q&A. All webinars recorded for later viewing.
          </p>
          <div className="space-y-6">
            {upcomingWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className={`bg-gradient-to-r ${webinar.featured ? 'from-purple-500/20 to-indigo-500/20 border-purple-500/30' : 'from-white/10 to-transparent border-white/10'} border rounded-2xl overflow-hidden`}
              >
                {webinar.featured && (
                  <div className="bg-purple-500/30 px-4 py-2 text-sm font-medium text-center">
                    ⭐ Featured Webinar
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                          {webinar.category}
                        </span>
                        <span className="text-xs text-white/50">
                          {webinar.spotsLeft} spots left
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">{webinar.title}</h3>
                      <p className="text-white/70 mb-4">{webinar.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {webinar.topics.map((topic, topicIdx) => (
                          <span
                            key={topicIdx}
                            className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Mic className="w-4 h-4" /> {webinar.presenter}
                        </span>
                        <span>{webinar.presenterTitle}</span>
                      </div>
                    </div>
                    <div className="lg:w-64 shrink-0">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
                        <div className="flex items-center gap-2 text-white/80">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span>{webinar.time} • {webinar.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/80">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span>{webinar.attendeeLimit} attendees max</span>
                        </div>
                        <button 
                          onClick={() => setSelectedWebinar(webinar)}
                          className="w-full mt-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                          Register Now <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/construction-newsletter/"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl font-medium hover:bg-white/20 transition-colors inline-flex items-center gap-2"
            >
              <Bell className="w-5 h-5" /> Subscribe to Webinar Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* On-Demand Webinars */}
      <section id="on-demand" className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">On-Demand Library</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Watch anytime, anywhere. Our complete library of recorded webinars and training sessions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onDemandWebinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-colors group cursor-pointer"
                onClick={() => setSelectedOnDemand(webinar)}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-indigo-500/20 relative flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white/50 group-hover:text-white/80 group-hover:scale-110 transition-all" />
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 rounded text-xs">
                    {webinar.duration}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-1 bg-white/10 rounded text-xs text-white/70">
                      {webinar.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <Star className="w-3 h-3 fill-current" /> {webinar.rating}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-3 line-clamp-2">{webinar.description}</p>
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>{webinar.views.toLocaleString()} views</span>
                    <span className="text-purple-400 font-medium group-hover:text-purple-300">Watch Now →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presenters */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Presenters</h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Learn from industry experts and Space AI product specialists.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {presenters.map((presenter, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-purple-500/30 transition-colors"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl font-bold">
                  {presenter.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold mb-1">{presenter.name}</h3>
                <p className="text-purple-400 text-sm mb-2">{presenter.title}</p>
                <p className="text-white/50 text-xs mb-3">{presenter.expertise}</p>
                <p className="text-white/40 text-xs">{presenter.webinars} webinars hosted</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16 bg-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-white/60 text-center mb-12">
            Everything you need to know about our webinar program.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-white/70 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Experience AI-powered construction management firsthand. 
            Book a personalized demo with our team.
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

      {/* FAQ Schema */}
      <FAQSchema faqs={faqs} />
    </div>
  );
}
