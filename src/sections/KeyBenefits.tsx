"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Clock,
  Users
} from "lucide-react";

const keyBenefits = [
  {
    title: "Enhanced Visibility",
    description: "Real-time tracking and visibility into project progress, ensuring all stakeholders are informed and aligned.",
    icon: Eye,
    color: "from-purple-600 to-indigo-700"
  },
  {
    title: "Timely Execution",
    description: "Leverage predictive analytics to reduce delays and cost overruns, ensuring projects stay on schedule.",
    icon: Clock,
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Improved Collaboration",
    description: "Our AI tools foster seamless communication among all project stakeholders, enhancing teamwork.",
    icon: Users,
    color: "from-amber-500 to-orange-600"
  }
];

export const KeyBenefits = () => {
  return (
    <section id="benefits" className="py-6 sm:py-8 md:py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,69,255,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)]"></div>
      
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Key Benefits
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Experience the advantages of our AI-powered platform designed to transform your construction management
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-6 lg:gap-10 justify-center">
          {keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.3 } 
              }}
              className="relative w-full md:w-1/3 group"
            >
              {/* Card with horizontal design */}
              <div className="relative h-full bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                {/* Subtle gradient accent at the top */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color}`}></div>
                
                {/* Content container */}
                <div className="relative p-8 flex flex-col h-full z-10">
                  <div className="flex items-start mb-6">
                    {/* Icon with gradient background */}
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg mr-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Number indicator */}
                    <div className="text-5xl font-bold text-white/10 ml-auto">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white group-hover:text-white/90 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                  
                  {/* Bottom accent with animated line */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <motion.div 
                      className="flex items-center text-white/50 group-hover:text-white/70 text-sm cursor-pointer transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {/* <span className="mr-2">Learn more</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg> */}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
