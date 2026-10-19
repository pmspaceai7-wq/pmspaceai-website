"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import {
  FileCheck,
  UploadCloud,
  Replace,
  Bot,
  ArrowRight,
  ArrowLeft,
  ClipboardEdit,
  CheckSquare,
  Database,
  Mail,
  Workflow,
  Users,
  Target,
  SlidersHorizontal,
  DatabaseIcon,
} from "lucide-react";

const slides = [
  {
    id: "idp",
    title: "Intelligent Document Processing.",
    description: "Our AI-powered file module is the central hub for all your project documentation, designed for efficiency and intelligence.",
    videoSrc: "/videos/files.gif",
    features: [
      { name: "Manage", icon: FileCheck },
      { name: "Intelligent Data Proecessing", icon: DatabaseIcon },
      { name: "Revision and Comparison", icon: Replace },
      { name: "AI Integration", icon: Bot },
    ],
  },
  {
    id: "ai-powered-form-automation",
    title: "AI-Powered Form Automation",
    description: "Build, manage, and automate dynamic forms that integrate seamlessly with your workflows and data sources.",
    videoSrc: "/videos/forms.gif",
    features: [
      { name: "Create", icon: ClipboardEdit },
      { name: "Validate", icon: CheckSquare },
      { name: "Integrate", icon: Database },
      { name: "Distribute", icon: Mail },
    ],
  },
  {
    id: "space-connectors",
    title: "Space Connectors",
    description: "Integrate Space AI with your existing tools via pre-built connectors, enabling unified data flow and intelligent automation across your entire project ecosystem.",
    videoSrc: "/assets/images/mcp.webp", // Changed to .webp and matching core.ts
    features: [
      { name: "Integrations", icon: UploadCloud },
      { name: "Automation", icon: Workflow },
      { name: "Security", icon: CheckSquare },
      { name: "Real-time Sync", icon: Database },
    ],
  },
  {
    id: "space-capture",
    title: "Space Capture",
    description: "Field module app for site workers and inspections.",
    videoSrc: "/assets/images/capture.png",
    features: [
      { name: "Inspection", icon: CheckSquare },
      { name: "Mobile App", icon: FileCheck },
      { name: "Coordination", icon: Users },
      { name: "Defect Detection", icon: Target },
    ],
  },
  {
    id: "custom-workstreams",
    title: "Intelligent Workstreams",
    description: "Automate complex processes and enhance team collaboration with AI-driven workflow management.",
    videoSrc: "/videos/workstream.gif",
    features: [
      { name: "Automate", icon: Workflow },
      { name: "Collaborate", icon: Users },
      { name: "Track", icon: Target },
      { name: "Optimize", icon: SlidersHorizontal },
    ],
  },
];

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 500 : -500, opacity: 0 }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({ zIndex: 0, x: direction < 0 ? 500 : -500, opacity: 0 }),
};

const swipeConfidenceThreshold = 10000;

export const Modules = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goTo = (newPage: number) => {
    const newDirection = newPage > page ? 1 : -1;
    setPage([newPage, newDirection]);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
    const swipePower = Math.abs(offset.x) * velocity.x;

    if (swipePower < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipePower > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  const slideIndex = ((page % slides.length) + slides.length) % slides.length;

  if (!isMounted) {
    return <section className="relative min-h-screen bg-black" />;
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-black overflow-hidden px-4 py-16 md:py-24">
      <div className="container mx-auto sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Our Core Modules
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Explore the powerful, AI-driven modules that form the backbone of
            our platform.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
              className="w-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-20 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1 lg:col-span-2">
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {slides[slideIndex].title}
                  </h3>
                  <p className="mt-4 text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
                    {slides[slideIndex].description}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                    {slides[slideIndex].features.map((feature) => (
                      <div
                        key={feature.name}
                        className="flex items-center gap-3"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 rounded-lg flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-purple-300" />
                        </div>
                        <span className="text-white font-medium">
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <Link
                      // href="https://pmspace.ai/"
                      href={`/guides/${slides[slideIndex].id}`} // Link to the specific guide page
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Space AI
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* --- START: CORRECTED CODE --- */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-500/10 bg-black order-1 lg:order-2 lg:col-span-3">
                  {/* The KEY FIX is adding 'aspect-video' above. This gives the div a 16:9 aspect ratio, 
                      providing the necessary height for the fill Image component to be visible. */}
                  {/\.(gif|png|jpg|jpeg)$/i.test(slides[slideIndex].videoSrc) ? (
                    <Image
                      key={slides[slideIndex].videoSrc}
                      className="w-full h-full object-contain"
                      src={slides[slideIndex].videoSrc}
                      alt={`${slides[slideIndex].title} animation`}
                      fill
                      priority
                      unoptimized 
                    />
                  ) : (
                    <video
                      key={slides[slideIndex].videoSrc}
                      className="w-full h-full object-contain"
                      src={slides[slideIndex].videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
                {/* --- END: CORRECTED CODE --- */}

              </div>
            </motion.div>
          </AnimatePresence>

          <div className="lg:hidden absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  slideIndex === index ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(-1)}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -left-16 z-30 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-16 z-30 w-12 h-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg transition-transform duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};