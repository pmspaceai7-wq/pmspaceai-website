// components/GuidesPage.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Guide } from "@/lib/guides";

const GuidesPage = ({ guides }: { guides: Guide[] }) => {
  return (
    <section id="guides" className="py-8 sm:py-10 md:py-12 relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.1),transparent_70%)]"></div>
      
      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-4">
            Space AI Core Guides
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Explore our comprehensive guides to help you master project planning, scheduling, monitoring, and closing with Space AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Link href={guide.href} legacyBehavior>
                <a className="relative h-full flex flex-col bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
                  <div className="relative w-full h-40 overflow-hidden">
                    {guide.imageSrc ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={guide.imageSrc}
                          alt={`${guide.title} visual representation`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center">
                        <div className="text-center text-white/80">
                          No Image Available
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {guide.title}
                    </h3>
                    <p className="text-white/60 group-hover:text-white/80 text-sm sm:text-base font-light leading-relaxed">
                      {guide.description}
                    </p>
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

export default GuidesPage;
