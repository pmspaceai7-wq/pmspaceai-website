"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  User,
  Bot,
  BrainCircuit,
  Database,
  Cog,
  FileText,
  AudioWaveform,
  Cpu,
  MemoryStick,
  DatabaseZap,
  Repeat,
  Layers3,
  Monitor,
  Target,
  LucideProps,
  Settings,
  Zap,
} from "lucide-react";
import Image from "next/image";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

// Define a type for the props to fix TypeScript errors
type DiagramNodeProps = {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description?: string; // Made description optional with '?'
  className?: string;
};

// A reusable component for diagram nodes to maintain consistency
const DiagramNode = ({ icon: Icon, title, description, className = "" }: DiagramNodeProps) => (
  <div className={`bg-gray-900/50 border border-white/10 rounded-xl p-4 text-center flex flex-col items-center justify-center ${className}`}>
    <div className="bg-gray-800 p-2 rounded-lg mb-2 w-fit">
      <Icon className="w-6 h-6 text-purple-400" />
    </div>
    <h3 className="font-semibold text-white text-sm">{title}</h3>
    {description && <p className="text-xs text-white/60">{description}</p>}
  </div>
);

// Define rotations object outside to reference its type
const rotations = {
    right: 'rotate-0',
    down: 'rotate-90',
    left: 'rotate-180',
    up: '-rotate-90'
};

// Define a type for the Arrow props to ensure type safety
type ArrowProps = {
  direction?: keyof typeof rotations;
};

// A simple arrow component for connecting nodes
const Arrow = ({ direction = 'right' }: ArrowProps) => {
    return (
        // The margin here was reduced from mx-2 to mx-1
        <div className={`flex items-center justify-center mx-1`}>
            <ArrowRight className={`w-6 h-6 text-white/30 ${rotations[direction]}`} />
        </div>
    );
};


const AIPoweredPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const robotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

 return (
    <div className="bg-black text-white min-h-fit">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="py-10 md:py-16 text-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05] z-0"
          style={{ maskImage: 'radial-gradient(ellipse at center, transparent 20%, black)' }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
            AECO Project Platform delivering AI Automation
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-white/70 font-light">
            Driven by real-world use cases in project and information management, SPACE AI delivers cutting-edge AI automation tailored for the AECO industry. Our futuristic platform empowers seamless communication and collaboration across all stakeholders—bridging data, people, and processes to transform how projects are delivered.
          </p>
        </div>
      </motion.section>
      <h1 className="text-3xl font-bold text-center mb-12 text-white">AI Agent Framework</h1>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-8 md:py-12 bg-black"
      >
        <div className="container mx-auto px-4">
          <div className="relative flex justify-center">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-4xl"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/10 to-blue-600/20 rounded-full blur-3xl scale-150"></div>

              {/* Main container */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/90 rounded-3xl p-4 md:p-8 border border-white/10 backdrop-blur-sm">

                {/* Central AI Robot */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    variants={robotVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div
                      variants={floatVariants}
                      initial="initial"
                      animate="animate"
                      className="relative"
                    >
                      {/* Robot glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50 scale-110"></div>

                      {/* Robot body */}
                      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-pink-500/30">
                        <motion.div
                          variants={pulseVariants}
                          initial="initial"
                          animate="animate"
                        >
                          <Bot className="w-12 h-12 text-pink-400" />
                        </motion.div>

                        {/* Robot eyes */}
                        <div className="flex justify-center space-x-2 mt-2">
                          <motion.div
                            className="w-2 h-2 bg-pink-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          ></motion.div>
                          <motion.div
                            className="w-2 h-2 bg-pink-400 rounded-full"
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:block md:relative md:h-32 lg:h-40">

                  <motion.div
                    variants={itemVariants}
                    className="md:absolute md:top-0 md:left-0 lg:left-8"
                  >
                    <div className="bg-gradient-to-br from-pink-600 to-purple-700 px-3 py-2 rounded-full border border-pink-400/30 h-full">
                      <div className="flex items-center justify-center space-x-2 h-full">
                        <Target className="w-4 h-4 text-white" />
                        <span className="text-white text-xs md:text-sm font-medium">Understands the goal</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="md:absolute md:top-0 md:right-0 lg:right-8"
                  >
                    <div className="bg-gradient-to-br from-pink-600 to-purple-700 px-3 py-2 rounded-full border border-pink-400/30 h-full">
                      <div className="flex items-center justify-center space-x-2 h-full">
                        <span className="text-white text-xs md:text-sm font-medium">Figures out the steps</span>
                        <Settings className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="md:absolute md:bottom-0 md:left-0 lg:left-8"
                  >
                    <div className="bg-gradient-to-br from-pink-600 to-purple-700 px-3 py-2 rounded-full border border-pink-400/30 h-full">
                      <div className="flex items-center justify-center space-x-2 h-full">
                        <Settings className="w-4 h-4 text-white" />
                        <span className="text-white text-xs md:text-sm font-medium">Uses the right tools</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="md:absolute md:bottom-0 md:right-0 lg:right-8"
                  >
                    <div className="bg-gradient-to-br from-pink-600 to-purple-700 px-3 py-2 rounded-full border border-pink-400/30 h-full">
                      <div className="flex items-center justify-center space-x-2 h-full">
                        <span className="text-white text-xs md:text-sm font-medium">Adapts as it goes</span>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Connecting lines/dots (Only visible on desktop) */}
                <div className="absolute inset-0 pointer-events-none hidden md:block">
                  <motion.div
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-pink-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-pink-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-4 md:py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <motion.div
              variants={itemVariants}
              className="w-full max-w-4xl"
            >
              <Image
                src="/assets/images/aiagent.png"
                alt="AI Agent Architecture showing the flow from User Request through AI Agent with Perception, Reasoning, Action, and Learning phases"
                width={1024}
                height={600}
                className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Second Diagram Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-6 md:py-8"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
              <motion.div variants={itemVariants}><DiagramNode icon={User} title="User" /></motion.div>
              <motion.div variants={itemVariants}><Arrow direction="down" /></motion.div>
              <motion.div variants={itemVariants}><DiagramNode icon={Bot} title="AI Agent" /></motion.div>
              <motion.div variants={itemVariants}><Arrow direction="down" /></motion.div>

              <motion.div
                  variants={itemVariants}
                  className="w-full max-w-2xl bg-gradient-to-br from-purple-600/20 to-black p-8 rounded-3xl border border-white/10"
              >
                  <div className="flex items-center justify-around">
                      <div className="flex flex-col items-center space-y-2">
                           <DiagramNode icon={Database} title="Database" />
                           <div className="h-4 border-l-2 border-dashed border-white/20"></div>
                           <DiagramNode icon={DatabaseZap} title="Vector DB" />
                      </div>
                      <Arrow />
                      <DiagramNode icon={BrainCircuit} title="LLM" />
                      <Arrow />
                      <DiagramNode icon={Cog} title="Action" />
                  </div>
              </motion.div>

              <motion.div variants={itemVariants}><Arrow direction="down" /></motion.div>
              <motion.div
                  variants={itemVariants}
                  className="text-center text-bold-white font-semibold bg-purple-900/30 px-4 py-2 rounded-lg border border-purple-500/50"
              >
                  Data feedback loop
              </motion.div>
              <motion.div variants={itemVariants}><Arrow direction="down" /></motion.div>
              <motion.div variants={itemVariants}><DiagramNode icon={Repeat} title="Model Refinement" /></motion.div>
        </div>
        </div>
      </motion.section>
    </div>
 );
};

export default AIPoweredPage;
