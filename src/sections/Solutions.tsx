"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Workflow, 
  BarChart3, 
  Lightbulb,
} from "lucide-react";

// 2. Add 'href' property for routing
const solutions = [
    {
    title: "Innovative Solutions",
    description: "Stay ahead with cutting-edge AI solutions that address evolving challenges for asset owners.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-400",
    href: "/solutions/innovative-solutions/"
  },
  {
    title: "AI Project Management",
    description: "Streamline construction projects with AI-powered management tools. Enhance collaboration, predict delays, and optimize resource allocation.",
    icon: Workflow,
    color: "from-purple-500 to-blue-600",
    href: "/solutions/construction-solutions/"
  },
  {
    title: "Data-Driven Insights",
    description: "Analyze trends and historical data for actionable recommendations that optimize resource allocation and enhance strategic planning.",
    icon: BarChart3,
    color: "from-blue-500 to-cyan-400",
    href: "/solutions/data-management/"
  },

];

export const Solutions = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -4,
      boxShadow: "0 16px 32px -20px rgba(140, 69, 255, 0.55)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="solutions" className="relative overflow-hidden bg-gradient-to-b from-black via-[#07040f] to-black py-10 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,69,255,0.22),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(251,146,60,0.1),transparent_34%)]" />
      <div className="absolute left-1/2 top-10 h-32 w-[520px] -translate-x-1/2 rounded-full bg-[#8c45ff]/10 blur-3xl" />
      <div className="container relative z-10 px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-5xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
            Unified Operating Layer
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            SPACE AI Operating System for{" "}
            <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-orange-200 bg-clip-text text-transparent">
              Asset Owners, Operators and Stakeholders
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
            From fragmented systems to a unified, intelligent core, SPACE AI operating system enables your enterprise to evolve from managing systems to driving breakthroughs, modernize data, automate complexity, and innovate without limits.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {solutions.map((solution, index) => (
            <Link href={solution.href} key={index}>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="group relative h-full min-h-[205px] overflow-hidden rounded-xl border border-white/12 bg-white/[0.075] p-5 backdrop-blur-md transition-all duration-300 hover:border-[#8c45ff]/45 hover:bg-[#190d2e]/45"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8c45ff]/70 to-transparent" />
              <div className="absolute -right-10 -top-12 h-28 w-28 rounded-full bg-[#8c45ff]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-full flex-col">
                <div className="mb-4">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-purple-100">
                    <solution.icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-sm leading-6 text-white/70">
                  {solution.description}
                </p>
              </div>
            </motion.div>
            </Link> 
          ))}
        </motion.div>
      </div>
    </section>
  );
};
