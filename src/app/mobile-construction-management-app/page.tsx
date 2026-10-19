// src/app/mobile-construction-management-app/page.tsx
// TASK 30: Mobile Construction Management App Page
// Target: "construction management app", "mobile construction software"

import { Metadata } from "next";
import Link from "next/link";
import { 
  Smartphone, CheckCircle, Star, ArrowRight, Zap, Shield, 
  Wifi, WifiOff, Clock, BarChart3, Sparkles, Users, Camera,
  Rocket, Target, MapPin, Bell, CloudOff, Download,
  MessageSquare, FileText, Calendar, ClipboardList, Settings,
  Play, Apple, Bot
} from "lucide-react";
import { FAQSchema } from "@/components/SEOSchemas";

export const metadata: Metadata = {
  title: "Construction Management App | Mobile Software | Space AI",
  description: "Construction management app for iOS and Android. Works offline, syncs instantly. Daily reports, time tracking, photos, RFIs from the field.",
  keywords: [
    "construction management app",
    "construction app",
    "mobile construction software",
    "construction field app",
    "construction project app",
    "contractor app",
    "construction daily report app",
    "construction time tracking app",
    "construction photo app",
    "jobsite app",
  ],
  alternates: {
    canonical: "https://pmspace.ai/mobile-construction-management-app/",
  },
  openGraph: {
    title: "Construction Management App | Space AI Mobile",
    description: "The #1 construction app for iOS and Android. Works offline, syncs instantly.",
    url: "https://pmspace.ai/mobile-construction-management-app/",
    type: "website",
    images: [
      {
        url: "https://pmspace.ai/assets/images/mobile-app-og.png",
        width: 1200,
        height: 630,
        alt: "Space AI Mobile App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management App",
    description: "Powerful construction app that works offline. iOS and Android.",
  },
};

// Mobile features
const mobileFeatures = [
  {
    icon: ClipboardList,
    title: "Daily Reports",
    description: "Create comprehensive daily reports in minutes. Log weather, manpower, equipment, work completed, and issues — all from your phone.",
    benefit: "Complete reports in 5 minutes",
  },
  {
    icon: Clock,
    title: "Time Tracking",
    description: "Clock crews in and out with GPS verification. Track labor hours by project, phase, and cost code. Automatic overtime calculations.",
    benefit: "Accurate to the minute",
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: "Capture unlimited photos with automatic timestamps and GPS location. AI organizes photos by area, trade, and content type.",
    benefit: "Photos organized automatically",
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: "Full functionality without internet. Create reports, take photos, log time — everything syncs when you get signal again.",
    benefit: "Works anywhere on site",
  },
  {
    icon: MessageSquare,
    title: "RFIs & Submittals",
    description: "Create, review, and respond to RFIs from the field. Review submittals, add markups, and approve on the go.",
    benefit: "Answer questions instantly",
  },
  {
    icon: FileText,
    title: "Document Access",
    description: "Access all project drawings, specs, and documents from your phone. Search, view, and share with your team.",
    benefit: "Every document at hand",
  },
];

// Key stats
const appStats = [
  {
    metric: "4.9",
    label: "App Store Rating",
    description: "From 5,000+ reviews",
    icon: Star,
  },
  {
    metric: "2M+",
    label: "Downloads",
    description: "iOS and Android combined",
    icon: Download,
  },
  {
    metric: "100%",
    label: "Offline Capable",
    description: "Full functionality without signal",
    icon: WifiOff,
  },
  {
    metric: "<1s",
    label: "Sync Time",
    description: "Instant data sync when online",
    icon: Zap,
  },
];

// Feature comparison
const appComparison = [
  { feature: "Offline Mode", pmspace: "Full", procore: "Limited", fieldwire: "Full", plangrid: "Limited" },
  { feature: "Daily Reports", pmspace: true, procore: true, fieldwire: false, plangrid: false },
  { feature: "Time Tracking", pmspace: true, procore: true, fieldwire: false, plangrid: false },
  { feature: "Photo AI Organization", pmspace: true, procore: false, fieldwire: false, plangrid: false },
  { feature: "Document Viewer", pmspace: true, procore: true, fieldwire: true, plangrid: true },
  { feature: "RFI Management", pmspace: true, procore: true, fieldwire: true, plangrid: true },
  { feature: "Punch Lists", pmspace: true, procore: true, fieldwire: true, plangrid: true },
  { feature: "Voice Commands", pmspace: true, procore: false, fieldwire: false, plangrid: false },
  { feature: "App Store Rating", pmspace: "4.9★", procore: "4.1★", fieldwire: "4.6★", plangrid: "4.4★" },
];

// Use cases
const useCases = [
  {
    role: "Superintendent",
    tasks: ["Daily reports", "RFI responses", "Photo logs", "Quality inspections"],
    quote: "I can complete my daily report while walking to my truck. Used to take an hour at the office.",
    author: "Mike R., Superintendent",
  },
  {
    role: "Project Manager",
    tasks: ["Schedule updates", "Budget review", "Team communication", "Document access"],
    quote: "I stay connected to all my projects whether I'm in the office or at the site.",
    author: "Sarah T., PM",
  },
  {
    role: "Field Worker",
    tasks: ["Time clock", "Safety checklists", "Task completion", "Issue reporting"],
    quote: "Finally, an app that actually works in the basement. Offline mode is a game changer.",
    author: "Carlos M., Foreman",
  },
];

// FAQ data
const faqData = [
  {
    question: "Does the app work offline?",
    answer: "Yes, Space AI's mobile app offers full offline functionality. You can create daily reports, take photos, track time, view documents, and complete inspections without any internet connection. All data syncs automatically when you reconnect, even if you've been offline for days.",
  },
  {
    question: "Is the app available for both iOS and Android?",
    answer: "Yes, Space AI is available on both the Apple App Store (iOS 14+) and Google Play Store (Android 8+). The apps are native, not web wrappers, so they're fast, responsive, and fully utilize each platform's capabilities including camera, GPS, push notifications, and biometric login.",
  },
  {
    question: "Can I use voice commands in the app?",
    answer: "Yes, Space AI includes voice command functionality powered by AI. You can say things like 'Add 6 carpenters to today's report' or 'Create RFI about the lobby ceiling height' and the app will understand and execute your command. This is especially useful when your hands are full on the jobsite.",
  },
  {
    question: "How does photo organization with AI work?",
    answer: "When you take photos, Space AI's AI analyzes the image content and automatically tags it with relevant categories (structural, MEP, finishes), locations (based on GPS and building areas), trades, and even issues detected. You can search your photo library using natural language like 'show me drywall damage in Building B'.",
  },
  {
    question: "Can subcontractors use the app?",
    answer: "Yes, subcontractors can download the free Space AI app and be invited to projects by the GC. They can submit daily reports, track their crew hours, take photos, respond to RFIs, and access drawings — all within permission limits set by the project team.",
  },
  {
    question: "How much storage space does the app use?",
    answer: "The Space AI app itself is about 100MB. Offline project data (drawings, docs) can use additional storage, but you control which projects to cache locally. Most users keep 2-3 projects cached at 500MB-1GB total. Photos are automatically optimized and uploaded, not stored permanently on device.",
  },
  {
    question: "Can I sign documents on the app?",
    answer: "Yes, Space AI includes built-in e-signature capability. You can sign daily reports, safety documents, change orders, and other documents directly from the app. Signatures are legally binding and include timestamp and geolocation for verification.",
  },
  {
    question: "What if I lose my phone?",
    answer: "All data is synced to the cloud, so losing your phone doesn't mean losing your data. You can log in from any device and continue working. For security, you can remotely log out of the lost device from the web app, and require biometric authentication for app access.",
  },
];

export default function MobileConstructionAppPage() {
  return (
    <>
      {/* Schema Markup */}
      <FAQSchema faqs={faqData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "Space AI Construction Management App",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "5234",
              "bestRating": "5",
              "worstRating": "1",
            },
            "downloadUrl": [
              "https://apps.apple.com/app/pmspace",
              "https://play.google.com/store/apps/details?id=ai.pmspace.app",
            ],
            "featureList": [
              "Offline Mode",
              "Daily Reports",
              "Time Tracking",
              "Photo Documentation",
              "Document Viewer",
              "RFI Management",
              "Voice Commands",
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            {/* Floating icons */}
            {[Smartphone, Camera, ClipboardList, MessageSquare].map((Icon, i) => (
              <div
                key={i}
                className="absolute text-violet-500/10 animate-float"
                style={{
                  left: `${15 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                  animationDelay: `${i * 2}s`,
                }}
              >
                <Icon className="w-16 h-16" />
              </div>
            ))}
          </div>

          {/* Phone Mockup - Right Side */}
          <div className="absolute top-1/2 right-[2%] xl:right-[5%] 2xl:right-[8%] -translate-y-1/2 w-64 xl:w-72 h-[520px] xl:h-[580px] hidden lg:block z-20">
            {/* Phone Frame */}
            <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] border-4 border-slate-700 shadow-2xl shadow-violet-500/20 overflow-hidden">
              {/* Phone Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
              
              {/* Screen Content */}
              <div className="absolute inset-3 top-10 bg-gradient-to-b from-slate-900 to-slate-950 rounded-[2rem] overflow-hidden">
                {/* App Header */}
                <div className="bg-violet-600/90 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">Space AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="w-4 h-4 text-white/80" />
                    <div className="w-6 h-6 bg-white/20 rounded-full" />
                  </div>
                </div>
                
                {/* Project Card */}
                <div className="p-3">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10 mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/90 text-xs font-semibold">Downtown Tower</span>
                      <span className="text-green-400 text-[10px] bg-green-400/20 px-2 py-0.5 rounded-full">On Track</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[67%] h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                      </div>
                      <span className="text-white/60 text-[10px]">67%</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/50 text-[10px]">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" /> 24 crew</span>
                      <span className="flex items-center gap-1"><Camera className="w-3 h-3" /> 156 photos</span>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    {[
                      { icon: ClipboardList, label: "Daily Log", color: "from-blue-500 to-cyan-500" },
                      { icon: Camera, label: "Photos", color: "from-pink-500 to-rose-500" },
                      { icon: Clock, label: "Time", color: "from-green-500 to-emerald-500" },
                    ].map((item, i) => (
                      <div key={i} className={`bg-gradient-to-br ${item.color} rounded-xl p-2 text-center`}>
                        <item.icon className="w-5 h-5 text-white mx-auto mb-1" />
                        <span className="text-white text-[9px] font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Today's Tasks */}
                  <div className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 text-xs font-semibold">Today&apos;s Tasks</span>
                      <span className="text-violet-400 text-[10px]">3 of 5</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { task: "Pour Level 4 concrete", done: true },
                        { task: "Inspect HVAC install", done: true },
                        { task: "Safety walkthrough", done: true },
                        { task: "Submit RFI #247", done: false },
                        { task: "Photo document MEP", done: false },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${item.done ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
                            {item.done && <CheckCircle className="w-3 h-3 text-white" />}
                          </div>
                          <span className={`text-[10px] ${item.done ? 'text-white/40 line-through' : 'text-white/70'}`}>{item.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 border-t border-white/10 px-4 py-2">
                  <div className="flex items-center justify-around">
                    {[
                      { icon: Smartphone, label: "Home", active: true },
                      { icon: FileText, label: "Docs", active: false },
                      { icon: Camera, label: "Photo", active: false },
                      { icon: MessageSquare, label: "Chat", active: false },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <item.icon className={`w-5 h-5 ${item.active ? 'text-violet-400' : 'text-white/40'}`} />
                        <span className={`text-[8px] mt-0.5 ${item.active ? 'text-violet-400' : 'text-white/40'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center lg:text-left lg:max-w-2xl xl:max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-2 mb-8">
                <Smartphone className="w-5 h-5 text-violet-400" />
                <span className="text-violet-300 font-semibold">Available on iOS & Android</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Construction
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400">
                  Management App
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The most powerful construction app for your pocket. Daily reports, 
                time tracking, photos, documents — all with full offline capability.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                <div className="flex items-center gap-2 text-white/70">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>4.9 Rating</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Download className="w-5 h-5 text-violet-400" />
                  <span>2M+ Downloads</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <WifiOff className="w-5 h-5 text-violet-400" />
                  <span>Full Offline Mode</span>
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Link
                  href="https://apps.apple.com/app/pmspace"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
                >
                  <Apple className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Download on the</div>
                    <div className="text-lg font-bold -mt-1">App Store</div>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=ai.pmspace.app"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
                >
                  <Play className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Get it on</div>
                    <div className="text-lg font-bold -mt-1">Google Play</div>
                  </div>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {appStats.map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center lg:text-left">
                    <div className="flex items-center gap-2 justify-center lg:justify-start mb-1">
                      <stat.icon className="w-5 h-5 text-violet-400" />
                      <span className="text-2xl font-bold text-white">{stat.metric}</span>
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offline Mode Highlight */}
        <section className="py-20 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                    <WifiOff className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-semibold">100% Offline Capable</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Works Where You Work
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    Basements. Remote sites. Inside concrete cores. Space AI works everywhere — 
                    even with zero signal. Everything syncs when you reconnect.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Create daily reports", desc: "Full functionality offline" },
                      { title: "Take and organize photos", desc: "AI tags when back online" },
                      { title: "Track crew time", desc: "GPS captured when available" },
                      { title: "Access drawings", desc: "Cached for offline viewing" },
                      { title: "Complete inspections", desc: "Checklists work offline" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                        <div>
                          <span className="text-white font-medium">{item.title}</span>
                          <span className="text-white/60 ml-2">— {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <CloudOff className="w-6 h-6 text-violet-400" />
                    Offline Mode Demo
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                      <WifiOff className="w-6 h-6 text-red-400" />
                      <div>
                        <div className="text-white font-medium">No Signal</div>
                        <div className="text-white/60 text-sm">Deep in the parking structure</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <ClipboardList className="w-6 h-6 text-violet-400" />
                      <div>
                        <div className="text-white font-medium">Daily Report Created</div>
                        <div className="text-white/60 text-sm">8 crew, 3 activities logged</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <Camera className="w-6 h-6 text-violet-400" />
                      <div>
                        <div className="text-white font-medium">12 Photos Captured</div>
                        <div className="text-white/60 text-sm">Ready to sync</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                      <Wifi className="w-6 h-6 text-green-400" />
                      <div>
                        <div className="text-white font-medium">Back Online — Syncing...</div>
                        <div className="text-green-400 text-sm">✓ All data synced in 2 seconds</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Everything You Need in the Field
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                Powerful features designed for construction professionals on the move.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {mobileFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 text-violet-400 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {feature.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Features */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                      <Bot className="w-6 h-6 text-violet-400" />
                      AI Voice Commands
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-violet-500/10 border border-violet-500/30 rounded-xl">
                        <div className="text-white/60 text-sm mb-1">You say:</div>
                        <div className="text-white font-medium">&ldquo;Add 4 electricians and 2 plumbers to today&apos;s report&rdquo;</div>
                      </div>
                      
                      <div className="flex justify-center">
                        <ArrowRight className="w-6 h-6 text-white/40 rotate-90" />
                      </div>
                      
                      <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                        <div className="text-white/60 text-sm mb-1">Space AI adds:</div>
                        <div className="text-green-400">✓ Crew: 4 Electricians, 2 Plumbers added to Daily Report</div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/10">
                      <div className="text-white/60 text-sm mb-3">More voice commands:</div>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Create RFI about...",
                          "Take safety photo",
                          "Clock out crew",
                          "Add weather delay",
                        ].map((cmd, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/70">
                            &ldquo;{cmd}&rdquo;
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="w-5 h-5 text-violet-400" />
                    <span className="text-violet-300 font-semibold">AI-Powered</span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Talk to Your App
                  </h2>
                  <p className="text-xl text-white/70 mb-8">
                    Hands full? Use voice commands to add crew, create RFIs, or take photos. 
                    Space AI&apos;s AI understands natural language — just say what you need.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { title: "Voice-to-action", desc: "Natural language commands" },
                      { title: "Photo AI tagging", desc: "Automatic organization by content" },
                      { title: "Smart suggestions", desc: "Auto-fill based on patterns" },
                      { title: "Predictive text", desc: "Learn your common entries" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <Sparkles className="w-5 h-5 text-violet-400 flex-shrink-0" />
                        <div>
                          <span className="text-white font-medium">{item.title}</span>
                          <span className="text-white/60 ml-2">— {item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Compare Construction Apps
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                See how Space AI&apos;s mobile app compares to other construction apps.
              </p>
            </div>

            <div className="max-w-5xl mx-auto overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="text-violet-400 font-bold">Space AI</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">Procore</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">Fieldwire</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="text-white/60">PlanGrid</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {appComparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-white/70">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.pmspace === 'boolean' ? (
                          row.pmspace ? (
                            <CheckCircle className="w-5 h-5 text-violet-400 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-violet-400 font-bold">{row.pmspace}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.procore === 'boolean' ? (
                          row.procore ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/40">{row.procore}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.fieldwire === 'boolean' ? (
                          row.fieldwire ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/40">{row.fieldwire}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {typeof row.plangrid === 'boolean' ? (
                          row.plangrid ? (
                            <CheckCircle className="w-5 h-5 text-white/40 mx-auto" />
                          ) : (
                            <span className="text-white/30">—</span>
                          )
                        ) : (
                          <span className="text-white/40">{row.plangrid}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases / Testimonials */}
        <section className="py-20 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Built for Construction Teams
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                From superintendents to field workers, everyone uses Space AI differently.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-violet-500/30 transition-all">
                  <div className="text-violet-400 font-bold text-lg mb-4">{useCase.role}</div>
                  
                  <div className="space-y-2 mb-6">
                    {useCase.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0" />
                        {task}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white/80 italic mb-3">&ldquo;{useCase.quote}&rdquo;</p>
                    <p className="text-white/50 text-sm">{useCase.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Mobile App FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-violet-500/30 transition-all"
                >
                  <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-pink-600/20" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 rounded-full px-4 py-2 mb-8">
                <Smartphone className="w-5 h-5 text-violet-400" />
                <span className="text-violet-300 font-semibold">Take Space AI With You</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Download the #1 Construction App
              </h2>

              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Join 2 million+ construction professionals using Space AI 
                to manage projects from anywhere.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://apps.apple.com/app/pmspace"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-2xl"
                >
                  <Apple className="w-10 h-10" />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Download on the</div>
                    <div className="text-xl font-bold -mt-1">App Store</div>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=ai.pmspace.app"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-2xl"
                >
                  <Play className="w-10 h-10" />
                  <div className="text-left">
                    <div className="text-xs opacity-60">Get it on</div>
                    <div className="text-xl font-bold -mt-1">Google Play</div>
                  </div>
                </Link>
              </div>

              <p className="text-white/50 mt-6 text-sm">
                Free to download • Works with Free and paid plans
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
