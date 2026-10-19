"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, BrainCircuit, Tags, Search, CheckCheck, GitMerge, AlertTriangle, TrendingUp, Cpu, Rocket, FileDiff, GitBranch, MessageCircle, ClipboardEdit, FileText, Globe, X, Check } from 'lucide-react';

// NOTE: Since GitBranch, FileDiff, MessageCircle, and ClipboardEdit were mapped to other icons or placeholders in the original file, 
// I'm using their actual imports and just redefining the map for safety, assuming you want the unique icon display.

const iconMap: { [key: string]: any } = {
  BrainCircuit,
  Tags,
  Search,
  CheckCheck,
  GitMerge,
  AlertTriangle,
  TrendingUp,
  Cpu,
  Rocket,
  // Using actual Lucide icons for these for better visual differentiation
  FileDiff,
  GitBranch,
  MessageCircle,
  ClipboardEdit,
  FileText,
  Globe,
  X,
  Check,
};

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
};

export default function IDPPage({ guideData }: { guideData: any }) {
  const renderIcon = (name: string, size: number = 20, className: string = "") => {
    const IconComponent = iconMap[name];
    // Defaulting to a generic FileText icon if the key isn't found, or just returning null.
    return IconComponent ? <IconComponent size={size} className={className} /> : null;
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>

      <div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <div className="mb-8">
          <Link
            href="/guides/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Guides</span>
          </Link>
        </div>
        
        {/* Main Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 pb-4">
            {guideData.header.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            {guideData.header.description}
          </p>
        </motion.div>

        {/* Purpose Section */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            Purpose: Why Use Intelligent Document Processing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-8"
          >
            {guideData.purpose.intro}
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group p-8 rounded-2xl bg-gradient-to-br from-red-900/30 to-red-700/15 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{guideData.purpose.before.heading}</h3>
                </div>
                <p className="text-white/85 leading-relaxed text-base">{guideData.purpose.before.text}</p>
              </div>
            </motion.div>
            {/* After Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-700/15 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-600/20 rounded-xl flex items-center justify-center">
                    <CheckCheck className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{guideData.purpose.after.heading}</h3>
                </div>
                <p className="text-white/85 leading-relaxed text-base">{guideData.purpose.after.text}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            <BrainCircuit size={32} className="text-purple-400" />
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guideData.keyFeatures.map((feature: any, index: number) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-purple-500/30 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 rounded-lg flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-6 h-6 text-purple-400" />}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.name}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Benefits & Advantages */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            <TrendingUp size={32} className="text-green-400" />
            Benefits & Advantages
          </motion.h2>
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">
            Adopting Intelligent Document Processing provides significant benefits that accelerate your projects and improve your bottom line.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {guideData.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-lg flex items-center justify-center">
                      <CheckCheck className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-white/85 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">{benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Who Can Use It Section */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            <Globe size={32} className="text-cyan-400" />
            Who Can Use It? 🌍
          </motion.h2>
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.whoCanUse.intro}</p>
          <ul className="list-disc list-inside space-y-2 text-white/80 max-w-3xl mx-auto">
            {guideData.whoCanUse.industries.map((industry: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="leading-relaxed"
              >
                {industry}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* How IDP is Used in Space AI */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            <Cpu size={32} className="text-purple-400" />
            How Intelligent Document Processing is Used in Space AI
          </motion.h2>
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.inSpaceAI.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideData.inSpaceAI.features.map((feature: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-white/85 leading-relaxed font-medium">{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Start of PPT Content */}
        {guideData.pptContent.pages.map((page: any, index: number) => (
          <section key={page.id} className="mb-16 sm:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 pb-4">
                {page.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8">{page.description}</p>

              {page.imageSrc && (
                // Image with Explore Button Logic
                <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-6 border border-white/10 group">
                  <Image 
                    src={page.imageSrc} 
                    alt={page.title} 
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay and Explore Button */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Link
                      href="/construction-software-demo/"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
                    >
                      Explore
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              )}

              {page.keyTransformation && (
                <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-300">Key Transformation</h3>
                  <p className="text-white/80">{page.keyTransformation}</p>
                </div>
              )}

              {/* Subheadings (Used for Classification & Intake / Extraction) */}
              {page.subheadings && page.subheadings.map((item: any, subheadingIndex: number) => (
                <div key={subheadingIndex} className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {/* Icon mapping logic based on subheading title */}
                    {item.title.includes("Extraction") && renderIcon("BrainCircuit", 24, "text-yellow-400")}
                    {item.title.includes("Classification") && renderIcon("Tags", 24, "text-cyan-400")}
                    {item.title}
                  </h3>
                  {item.text && <p className="text-white/70 mb-2">{item.text}</p>}
                  {item.list && (
                    <ul className="list-disc list-inside space-y-1 text-white/70">
                      {item.list.map((listItem: string, listIndex: number) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                  {item.bullets && (
                    <ul className="list-disc list-inside space-y-1 text-white/70">
                      {item.bullets.map((listItem: string, listIndex: number) => (
                        <li key={listIndex}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Sections (Used for Revisioning/Validation) */}
              {page.sections && page.sections.map((section: any, sectionIndex: number) => (
                <div key={sectionIndex} className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {section.title.includes("Revisioning") && renderIcon("FileDiff", 24, "text-green-400")}
                    {section.title.includes("Validation") && renderIcon("CheckCheck", 24, "text-blue-400")}
                    {section.title}
                  </h3>
                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-2 text-white/70">
                      {section.bullets.map((bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {section.subsections && section.subsections.map((sub: any, subIndex: number) => (
                    <div key={subIndex} className="mt-4 ml-4">
                      <h4 className="font-semibold text-white/90 mb-2">{sub.title}</h4>
                      <ul className="list-disc list-inside space-y-1 text-white/70">
                        {sub.bullets.map((b: string, i: number) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
              
              {/* Metrics (Converted to value/label pairs) */}
              {page.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                  {page.metrics.map((metric: any, metricIndex: number) => (
                    <div key={metricIndex} className="bg-white/5 border border-white/10 p-4 rounded-lg text-center">
                      <span className="text-3xl font-bold text-blue-400 block">{metric.value}</span>
                      <span className="text-sm text-white/70">{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Process */}
              {page.process && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">The Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-white/70">
                    {page.process.map((step: string, processIndex: number) => (
                      <li key={processIndex}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Chat Examples */}
              {page.chatExamples && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {renderIcon("MessageCircle", 24, "text-purple-400")}
                    Example Queries
                  </h3>
                  <div className="space-y-4">
                    {page.chatExamples.map((example: string, exampleIndex: number) => (
                      <div key={exampleIndex} className="relative bg-white/10 p-4 rounded-lg">
                        <p className="text-white/80">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </section>
        ))}

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {guideData.cta.heading}
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            {guideData.cta.description}
          </p>
          <Link
            href={guideData.cta.linkHref}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            {guideData.cta.linkText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
