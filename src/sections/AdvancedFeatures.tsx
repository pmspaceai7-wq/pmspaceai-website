"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  PieChart,
  BarChart,
  Activity,
  Gauge,
  Layers
} from "lucide-react";

const featureItems = [
  {
    title: "Real-time Project Tracking",
    points: [
      "Access up-to-the-minute project data",
      "Anticipate and mitigate potential risks",
      "Foster seamless communication among stakeholders"
    ],
    icon: Activity,
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "Advanced Analytics",
    points: [
      "Customizable dashboards for focused metrics",
      "Predictive analytics for trend analysis",
      "Automated reporting for efficient resource use"
    ],
    icon: BarChart,
    color: "from-purple-600 to-indigo-500"
  }
];

export const AdvancedFeatures = () => {
  return (
    <section id="features" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.05),transparent_30%,transparent_70%,rgba(140,69,255,0.05))]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Advanced Features
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Our comprehensive suite of AI app builder tools provides everything you need for successful project management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {featureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mr-4`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {item.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + (pointIndex * 0.1) }}
                      className="flex items-start"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0 flex items-center justify-center mt-0.5 mr-3`}>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-white/80 text-sm sm:text-base">{point}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-6 pt-4 border-t border-white/10 flex justify-end"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.button
                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Explore feature
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,white,transparent_70%)] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile-friendly feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 rounded-2xl text-center"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
          Ready to Transform Your Projects?
          </h3>
          <p className="text-white/70 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
          Join the future of construction management with Space AI
          </p>
          <motion.button
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://pmspace.ai/", "_blank")}
          >
        {"Join"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
