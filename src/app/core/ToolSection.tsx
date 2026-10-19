"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; 
import { getAllTools } from "@/lib/core";
import { ArrowRight } from "lucide-react";




const toolFeatures = getAllTools();



const ToolsSection = () => {
  return (
    // Section container with a relative position for background gradients
    <section id="tools" className="py-8 sm:py-10 md:py-12 relative">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.1),transparent_70%)]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-1">
            Transformative Use Cases to Solve Real Business Challenges
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Our platform comes equipped with powerful, built-in tools designed to connect your teams, streamline processes, and drive project success from a single source of truth.
          </p>
        </motion.div>

        {/* Grid Container for the feature blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolFeatures.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={tool.href} legacyBehavior>
                <a className="relative h-full flex flex-col bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                  <span className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white/70 backdrop-blur-md transition-all duration-300 group-hover:border-purple-300/40 group-hover:bg-purple-500/20 group-hover:text-white">
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                  {/* Image container */}
                  <div className="relative w-full h-40 overflow-hidden">
  <Image
    src={tool.imageSrc}
    alt={`${tool.title} visual representation`}
    fill
    className="object-contain"
  />
</div>
                  {/* Content container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {tool.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed">
                      {tool.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-purple-200 transition-colors duration-300 group-hover:text-white">
                      View details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
