// app/platform/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutTemplate,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const allFeatures = [
  {
    id: "no-code-app",
    Icon: LayoutTemplate,
    tabName: "No-Code App",
    headline: "Democratize app building with AI",
    subheadline:
      "Transform ideas into reality without writing a single line of code",
    descriptionPoints: [
      "Bring ideas to life with custom Apps using AI",
      "Humanise apps with a simple, intuitive drag-and-drop builder",
      "Modify apps to your specifications with No code app build",
    ],
    imageSrc: "/features/desktop.png",
    gradient: "from-purple-600 to-blue-600",
    accentColor: "purple",
  },
  {
    id: "access-permissions",
    Icon: ShieldCheck,
    tabName: "Access Permissions",
    headline: "Strengthen your app landscape with secure access permissions",
    subheadline:
      "Enterprise-grade security with granular control over user access",
    descriptionPoints: [
      "Customize role-based access to protect sensitive data",
      "Calibrate access permissions with multi-level controls",
      "Gain insights into user activities with detailed audit logs",
    ],
    imageSrc: "/features/desktop2.png",
    gradient: "from-purple-600 to-blue-600",
    accentColor: "purple",
  },
];

export default function PlatformFeaturesPage() {
  const [activeTab, setActiveTab] = useState(allFeatures[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const activeFeature = allFeatures.find((feature) => feature.id === activeTab);

  // ---- NEW: Refs to manage timers ----
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ---- NEW: Function to start auto-rotation ----
  const startAutoRotation = () => {
    // Clear any existing interval to prevent duplicates
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
    autoRotateIntervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const currentIndex = allFeatures.findIndex((f) => f.id === prevTab);
        const nextIndex = (currentIndex + 1) % allFeatures.length;
        return allFeatures[nextIndex].id;
      });
    }, 8000); // Change every 8 seconds
  };

  // ---- NEW: Function to stop auto-rotation ----
  const stopAutoRotation = () => {
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
    }
  };

  // ---- NEW: Handler for clicking a tab to pause and resume ----
  const handleTabClick = (tabId: string) => {
    stopAutoRotation(); // Stop current rotation
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current); // Clear any pending resume
    }
    setActiveTab(tabId);
    // Set a timer to resume auto-rotation after 15 seconds of inactivity
    resumeTimeoutRef.current = setTimeout(startAutoRotation, 15000);
  };
  
  useEffect(() => {
    setIsClient(true);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ---- MODIFIED: Effect to manage the auto-rotation lifecycle ----
  useEffect(() => {
    if (isClient) {
      startAutoRotation();
    }
    // Cleanup on component unmount
    return () => {
      stopAutoRotation();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getAccentClasses = (accentColor: string) => {
    switch (accentColor) {
      case "purple":
        return {
          badge: "from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30",
          glow: "from-purple-600 to-blue-600",
        };
      case "green":
        return {
          badge: "from-green-600/20 to-emerald-600/20 text-green-300 border-green-500/30",
          glow: "from-green-600 to-emerald-600",
        };
      default:
        return {
          badge: "from-blue-600/20 to-purple-600/20 text-blue-300 border-blue-500/30",
          glow: "from-blue-600 to-purple-600",
        };
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#07040f] to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.08),transparent_34%)]" />
      <div className="absolute left-1/2 top-8 h-32 w-[560px] -translate-x-1/2 rounded-full bg-[#8c45ff]/10 blur-3xl" />
      <motion.div
        className="container relative z-10 mx-auto px-4 py-10 sm:py-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div
          className="mx-auto mb-8 max-w-3xl text-center"
          variants={itemVariants}
        >
          <motion.div
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-sm font-medium text-purple-200">
              Platform Features
            </span>
          </motion.div>
          <motion.h1
            className="mb-3 text-3xl font-bold leading-tight text-white md:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build Smarter,{" "}
            <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
              Scale Faster
            </span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-sm leading-7 text-white/70 sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover powerful features designed to accelerate your development
            workflow
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          variants={itemVariants}
        >
          <div className="flex w-full max-w-md flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] p-2 backdrop-blur-md sm:flex-row">
            {allFeatures.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => handleTabClick(feature.id)} // Use the new handler
                className={`relative flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                  activeTab === feature.id
                    ? "border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white"
                    : "border border-transparent text-white/45 hover:border-white/10 hover:bg-white/5 hover:text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <feature.Icon className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">{feature.tabName}</span>
                {activeTab === feature.id && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#190d2e]/40 to-[#4a208a]/30"
                    layoutId="activeTabBg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeFeature && (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.98 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="grid grid-cols-1 items-center gap-8 rounded-xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-md md:p-6 lg:grid-cols-2 lg:gap-10"
            >
              <motion.div
                className="text-center lg:text-left order-2 lg:order-1"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.span
                  className={`mb-4 inline-block rounded-full border bg-gradient-to-r px-3 py-1.5 text-xs font-semibold ${
                    getAccentClasses(activeFeature.accentColor).badge
                  } backdrop-blur-sm`}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Featured Capability
                </motion.span>
                <motion.h2
                  className="mb-3 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <span
                    className={`bg-gradient-to-r ${activeFeature.gradient} bg-clip-text text-transparent`}
                  >
                    {activeFeature.headline}
                  </span>
                </motion.h2>
                <motion.p
                  className="mx-auto mb-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base lg:mx-0 lg:max-w-none"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {activeFeature.subheadline}
                </motion.p>
                <motion.div
                  className="mb-6 space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {activeFeature.descriptionPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      className="group flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      <div
                        className={`mt-0.5 flex h-6 w-6 flex-shrink-0 rounded-full bg-gradient-to-r ${activeFeature.gradient} p-1`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm leading-6 text-white/70 transition-colors duration-200 group-hover:text-white">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
                <Link
                  href="/construction-software-demo/"
                  className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/25"
                >
                  <motion.span
                    className="inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Explore Feature
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.span>
                </Link>
                
              </motion.div>
              <motion.div
                className="flex items-center justify-center relative order-1 lg:order-2"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.div
                  className="relative group w-full max-w-2xl"
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{ perspective: 1000 }}
                >
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${
                      getAccentClasses(activeFeature.accentColor).glow
                    } rounded-2xl opacity-15 blur-2xl group-hover:opacity-25 transition-all duration-700`}
                  />
                  <motion.div
                    className="relative"
                    initial={{ rotateX: 5, rotateY: -5, scale: 0.95 }}
                    animate={{ rotateX: 0, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-1">
                      <Image
                        src={activeFeature.imageSrc}
                        alt={`${activeFeature.tabName} feature showcase`}
                        width={1200}
                        height={750}
                        className="h-auto w-full rounded-lg border border-white/10 shadow-2xl"
                        style={{
                          filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))",
                        }}
                        priority
                      />
                      <div className="absolute inset-1 rounded-lg bg-gradient-to-t from-white/5 via-transparent to-transparent pointer-events-none" />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${activeFeature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
