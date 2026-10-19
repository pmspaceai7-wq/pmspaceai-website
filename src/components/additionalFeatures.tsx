// app/features/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  BarChart3,
  Settings,
  Zap,
  ArrowRight,
} from "lucide-react";

const additionalFeatures = [
  {
    id: "forms",
    Icon: LayoutTemplate,
    title: "Forms",
    description: "Empower your business with FlowForma's user friendly forms that ensure accurate, validated data collection, boosted productivity and accelerated processes.",
    imageSrc: "/features/forms.png",
  },
  {
    id: "insights",
    Icon: BarChart3,
    title: "Insights",
    description: "Take your reporting to the next level, by creating dashboards in minutes to assess all aspects of your processes and business data, all from within the FlowForma platform.",
    imageSrc: "/features/insights.png",
  },
  {
    id: "integrations",
    Icon: Zap,
    title: "Integrations",
    description: "The FlowForma Process Automation platforms integrates with thousands of other systems, empowering you to seamlessly send and receive data at any step in your processes.",
    imageSrc: "/features/integrations.png",
  },
];

export default function AdditionalFeaturesPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
     <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(59,130,246,0.05)_50%,transparent_100%)]" />
      <div className="container mx-auto px-4 py-16 sm:py-20">
        
        {/* Simple Header */}
        <div className="text-center mb-16">
      
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
               More AI-powered Features of FlowForma Process Automation
          </h2>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:bg-gray-800/60 hover:border-gray-600/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Feature Icon */}
          
              {/* Feature Image */}
              <div className="w-full h-40 bg-gray-800/60 rounded-lg mb-6 flex items-center justify-center border border-gray-700/30 group-hover:border-gray-600/50 transition-colors duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <feature.Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-gray-400 text-sm font-medium">{feature.title} Interface</span>
                </div>
              </div>

              {/* Feature Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-base mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300 group-hover:gap-3">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>


      </div>
    </div>
  );
}