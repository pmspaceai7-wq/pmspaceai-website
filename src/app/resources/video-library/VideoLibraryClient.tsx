"use client";

// src/app/resources/video-library/VideoLibraryClient.tsx
// Client component for video library with interactive video player

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Play, PlayCircle, Clock, Users, Building2, 
  ArrowRight, Star, Award, Target, Zap,
  FileText, BarChart3, Brain, Smartphone,
  Monitor, Layers, X
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

// Video data types
interface VideoTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface Video {
  id: number;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  youtubeUrl: string;
  views: string;
  featured?: boolean;
  testimonial?: VideoTestimonial;
}

interface VideoCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  videos: Video[];
}

// Video categories with SEO-optimized content
const videoCategories: VideoCategory[] = [
  {
    id: "product-demos",
    title: "Product Demos",
    description: "See Space AI construction management software in action",
    icon: Monitor,
    videos: [
      {
        id: 1,
        title: "Space AI Platform Overview Demo",
        description: "Complete walkthrough of Space AI AI-powered construction management platform. See how our software helps you manage projects 40% faster.",
        duration: "12:34",
        thumbnail: "/assets/images/projectmanagementdashboard.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "45.2K",
        featured: true,
      },
      {
        id: 2,
        title: "AI Dashboard & Analytics Demo",
        description: "Explore the AI-powered analytics dashboard. Learn how predictive insights help you prevent delays before they happen.",
        duration: "8:45",
        thumbnail: "/assets/images/analyticsreportingsoftware.png",
        youtubeUrl: "https://www.youtube.com/watch?v=pRkVJW4sGfo",
        views: "32.1K",
      },
      {
        id: 3,
        title: "Cost Estimation Tool Demo",
        description: "See how AI-powered cost estimation reduces budget overruns by up to 35%. Real-time cost tracking and forecasting.",
        duration: "10:22",
        thumbnail: "/assets/images/costestimation.png",
        youtubeUrl: "https://www.youtube.com/watch?v=usE-IwXSWT4",
        views: "28.5K",
      },
    ],
  },
  {
    id: "feature-walkthroughs",
    title: "Feature Walkthroughs",
    description: "Deep-dive tutorials on key construction management features",
    icon: Layers,
    videos: [
      {
        id: 4,
        title: "Intelligent Document Processing (IDP)",
        description: "Learn how AI extracts and organizes construction documents automatically. Process RFIs, submittals, and contracts 5x faster.",
        duration: "15:18",
        thumbnail: "/assets/images/documentmanagement.png",
        youtubeUrl: "https://www.youtube.com/watch?v=dBp3ncaHwpc",
        views: "21.3K",
      },
      {
        id: 5,
        title: "Digital Forms & Data Collection",
        description: "Create custom construction forms for inspections, daily logs, and safety reports. Works offline on mobile devices.",
        duration: "9:56",
        thumbnail: "/assets/images/forms.png",
        youtubeUrl: "https://www.youtube.com/watch?v=jAHsiAh0gC8",
        views: "18.7K",
      },
      {
        id: 6,
        title: "AI Invoice Management System",
        description: "Automate invoice processing with AI. Match purchase orders, detect duplicates, and accelerate approvals.",
        duration: "11:42",
        thumbnail: "/assets/images/invoicemanagementsystem.png",
        youtubeUrl: "https://www.youtube.com/watch?v=NAt3578eGoM",
        views: "15.9K",
      },
      {
        id: 7,
        title: "Project Scheduling & Gantt Charts",
        description: "Master AI-powered scheduling. Create dependencies, optimize resource allocation, and track critical paths.",
        duration: "14:30",
        thumbnail: "/assets/images/scheduleingsoftware.webp",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "24.6K",
      },
      {
        id: 8,
        title: "BIM Integration & 3D Coordination",
        description: "Connect BIM models to project data. Clash detection, 4D scheduling visualization, and model-based quantity takeoff.",
        duration: "16:45",
        thumbnail: "/assets/images/spacebim.webp",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "19.2K",
      },
    ],
  },
  {
    id: "customer-testimonials",
    title: "Customer Success Stories",
    description: "Hear from construction companies using Space AI",
    icon: Users,
    videos: [
      {
        id: 9,
        title: "Turner Construction: 23% Fewer Delays",
        description: "How Turner Construction reduced project delays by 23% using Space AI AI. A general contractor's journey to digital transformation.",
        duration: "6:32",
        thumbnail: "/assets/images/constructionsoftwareforgeneralcontactors.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "12.4K",
        testimonial: {
          quote: "Space AI has completely transformed how we manage our $500M+ portfolio. The AI predictions alone have saved us millions.",
          author: "Mike Rodriguez",
          role: "VP of Operations",
          company: "Turner Construction",
        },
      },
      {
        id: 10,
        title: "Skanska: Enterprise-Wide AI Adoption",
        description: "Skanska's journey deploying Space AI across 200+ projects. Enterprise construction management at scale.",
        duration: "8:15",
        thumbnail: "/assets/images/projectmanagementsoftwareforenterprises.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "9.8K",
        testimonial: {
          quote: "The ROI was evident within 3 months. We've standardized on Space AI globally.",
          author: "Sarah Chen",
          role: "Chief Digital Officer",
          company: "Skanska USA",
        },
      },
      {
        id: 11,
        title: "Regional Builder: SMB Success Story",
        description: "How a 15-person construction company scaled to $50M in annual revenue using Space AI's affordable plans.",
        duration: "5:48",
        thumbnail: "/assets/images/constructionsoftwareforsmallbuilders.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "8.1K",
        testimonial: {
          quote: "As a small builder, we couldn't afford Procore. Space AI gave us enterprise features at a price we could afford.",
          author: "James Williams",
          role: "Owner",
          company: "Williams Construction",
        },
      },
    ],
  },
  {
    id: "training-tutorials",
    title: "Training & Tutorials",
    description: "Get started with Space AI construction management software",
    icon: Target,
    videos: [
      {
        id: 12,
        title: "Getting Started with Space AI (New Users)",
        description: "Complete onboarding guide for new Space AI users. Set up your first project in under 30 minutes.",
        duration: "22:15",
        thumbnail: "/assets/images/welcometospaceai.jpg",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "56.3K",
        featured: true,
      },
      {
        id: 13,
        title: "Admin Setup & Team Management",
        description: "Configure user roles, permissions, and team structures. Enterprise administration best practices.",
        duration: "12:45",
        thumbnail: "/assets/images/workstream.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "14.2K",
      },
      {
        id: 14,
        title: "Mobile App Walkthrough",
        description: "Master the Space AI mobile app for field teams. Offline mode, photo documentation, and punch lists.",
        duration: "10:30",
        thumbnail: "/assets/images/mobile1.jpeg",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "22.8K",
      },
      {
        id: 15,
        title: "Integrations & API Setup",
        description: "Connect Space AI to your existing tools. Accounting, ERP, BIM, and custom integrations.",
        duration: "18:20",
        thumbnail: "/assets/images/workspace.png",
        youtubeUrl: "https://www.youtube.com/watch?v=wf-htEoVw8g",
        views: "11.5K",
      },
    ],
  },
];

// FAQ Schema data
const videoFAQs = [
  {
    question: "Are Space AI demo videos available for free?",
    answer: "Yes! All our product demo videos, feature walkthroughs, and tutorials are completely free to watch. You can access our full video library without creating an account. For personalized demos tailored to your specific needs, you can also request a live demo with our team."
  },
  {
    question: "Can I request a personalized demo for my construction company?",
    answer: "Absolutely! While our video library provides comprehensive self-serve demos, we offer personalized demonstrations for construction companies. Our product specialists can show you features relevant to your specific project types, team size, and workflows. Book a demo at pmspace.ai/construction-software-demo."
  },
  {
    question: "Do you have training videos for new Space AI users?",
    answer: "Yes, we have a complete training video series for new users. Our 'Getting Started with Space AI' video covers everything from initial setup to managing your first project. We also have role-specific training for project managers, field workers, and administrators."
  },
  {
    question: "How often are new videos added to the library?",
    answer: "We add new videos regularly, typically 2-4 new videos per month. This includes feature updates, new customer success stories, and expanded tutorials based on user feedback. Subscribe to our YouTube channel for notifications on new content."
  },
  {
    question: "Can I share these videos with my team for training?",
    answer: "Yes! Our videos are designed to be shared for team training purposes. Enterprise customers also get access to our private training portal with additional content, progress tracking, and certification programs."
  },
  {
    question: "Do you have videos comparing Space AI to competitors like Procore?",
    answer: "Yes, we have comparison videos showing how Space AI stacks up against alternatives like Procore, Buildertrend, and PlanGrid. These videos highlight key differences in features, pricing, and user experience to help you make an informed decision."
  },
];

// Stats for trust signals
const videoStats = [
  { number: "500K+", label: "Video Views" },
  { number: "15+", label: "Hours of Content" },
  { number: "4.9/5", label: "Viewer Rating" },
  { number: "50+", label: "Tutorial Videos" },
];

// Video Modal Component
function VideoModal({ video, onClose }: { video: Video | null; onClose: () => void }) {
  if (!video) return null;

  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(video.youtubeUrl);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video Container */}
        <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-900">
                <div className="text-center">
                  <PlayCircle className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <p className="text-white text-lg font-medium mb-2">{video.title}</p>
                  <p className="text-white/60">Video coming soon</p>
                  <Link 
                    href="/construction-software-demo/"
                    className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:opacity-90 transition"
                  >
                    Book a Live Demo Instead
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="p-6 bg-gray-950">
            <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
            <p className="text-white/70">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoLibraryClient() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    if (video.youtubeUrl) {
      setSelectedVideo(video);
    } else {
      // For videos without URLs, open demo booking
      window.location.href = "/construction-software-demo/";
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <PlayCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white/80">Construction Management Video Tutorials</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200">
                Video Library
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Watch product demos, feature walkthroughs, and customer success stories. 
              Learn how Space AI AI transforms construction project management.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {videoStats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Category Links */}
            <div className="flex flex-wrap justify-center gap-3">
              {videoCategories.map((cat) => (
                <a 
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:bg-white/10 hover:border-white/20 transition text-sm"
                >
                  {cat.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            🎬 Featured Demo
          </h2>

          <div 
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-900/30 to-cyan-900/20 rounded-2xl border border-white/10 overflow-hidden cursor-pointer group"
            onClick={() => handleVideoClick(videoCategories[0].videos[0])}
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video">
              <Image
                src="/assets/images/projectmanagementdashboard.png"
                alt="Space AI Construction Management Software Platform Demo"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition border border-white/30">
                  <Play className="w-10 h-10 md:w-12 md:h-12 text-white fill-white" />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Most Popular
                </span>
                <span className="flex items-center gap-1 text-white/60 text-sm">
                  <Clock className="w-4 h-4" />
                  12:34
                </span>
                <span className="flex items-center gap-1 text-white/60 text-sm">
                  <Users className="w-4 h-4" />
                  45.2K views
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                Complete Space AI Platform Overview Demo
              </h3>

              <p className="text-white/70 mb-6">
                See how Space AI AI-powered construction management software helps general contractors, 
                commercial builders, and project managers reduce delays by 23%, automate document processing, 
                and deliver projects on time and under budget.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-sm border border-white/10">
                  Project Dashboard
                </span>
                <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-sm border border-white/10">
                  AI Analytics
                </span>
                <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-sm border border-white/10">
                  Document Management
                </span>
                <span className="px-3 py-1 bg-white/5 text-white/60 rounded-full text-sm border border-white/10">
                  Scheduling
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Categories */}
      {videoCategories.map((category) => (
        <section 
          key={category.id} 
          id={category.id}
          className="py-16 border-t border-white/5"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10">
                <category.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">{category.title}</h2>
                <p className="text-white/60">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.videos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => handleVideoClick(video)}
                  className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-purple-500/50 transition cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play className="w-7 h-7 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs rounded">
                      {video.duration}
                    </div>
                    {video.featured && (
                      <div className="absolute top-3 left-3 px-2 py-1 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-xs rounded font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-4 line-clamp-2">
                      {video.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-white/50">
                      <span>{video.views} views</span>
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        4.9
                      </span>
                    </div>

                    {/* Testimonial quote if available */}
                    {video.testimonial && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-sm text-white/70 italic mb-2">
                          &ldquo;{video.testimonial.quote}&rdquo;
                        </p>
                        <p className="text-xs text-white/50">
                          — {video.testimonial.author}, {video.testimonial.role}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Subscribe CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with New Videos
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Subscribe to our YouTube channel for the latest product demos, feature updates, 
              and construction management best practices.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.youtube.com/@spaceai-7"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Subscribe on YouTube
              </Link>
              <Link 
                href="/construction-software-demo/"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition flex items-center gap-2"
              >
                Book Live Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Related Resources
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/guides/ultimate-construction-management-guide/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <FileText className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Ultimate Guide
              </h3>
              <p className="text-sm text-white/60">
                5000+ word comprehensive guide to construction management software
              </p>
            </Link>

            <Link 
              href="/resources/construction-software-downloads/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <BarChart3 className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Downloadable Resources
              </h3>
              <p className="text-sm text-white/60">
                PDFs, templates, whitepapers, and ROI calculators
              </p>
            </Link>

            <Link 
              href="/case-studies/"
              className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/50 transition group"
            >
              <Building2 className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300">
                Case Studies
              </h3>
              <p className="text-sm text-white/60">
                Real customer success stories with measurable results
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {videoFAQs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Construction Projects?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join 10,000+ construction professionals using Space AI to deliver projects 
            on time and under budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/try-it-now/"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/construction-software-demo/"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <FAQSchema faqs={videoFAQs} />
    </div>
  );
}
