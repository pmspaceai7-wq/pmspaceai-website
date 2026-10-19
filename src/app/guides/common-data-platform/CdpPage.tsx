"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BrainCircuit, Tags, Search, CheckCheck, GitMerge, AlertTriangle, TrendingUp, Cpu, Rocket, FileDiff, GitBranch, BarChart3, ClipboardEdit, MessageCircle, BarChart, FileText, Layout, CircleUser, Lightbulb, Workflow, Building2, ShieldCheck, Truck, Factory, Atom, Hotel, GitFork, Users, Cloud, Code, Share2, Globe, Eye, X, Check, FileEdit, HardDrive, SquarePen, ClipboardList, Library, Plug, CodeSquare, FlaskConical, LineChart, Trello, Database, Lock, Code2, PlayCircle, Layers, Link2, Clock, Bot, Scaling, Activity, Camera, Download, Settings, Server, BarChart4, ClipboardCheck, User } from 'lucide-react';

// --- START: TYPE DEFINITIONS FOR FIXING THE ERROR ---

interface DetailedFeatureSubsection {
  title: string;
  bullets: string[];
}

interface DetailedFeature {
  name: string;
  subsections?: DetailedFeatureSubsection[]; // Used by the Document Chats section
  bullets?: string[]; // Used by the Structured/Unstructured Data section (and potentially others)
}

interface Feature {
    name: string;
    icon: string;
    text: string;
}

// A minimal interface for guideData based on usage in the component
interface GuideData {
  header: {
    title: string;
    description: string;
  };
  purpose: {
    intro: string;
    before: { heading: string; text: string; };
    after: { heading: string; text: string; };
  };
  keyFeatures: {
    intro: string;
    features: Feature[];
    detailedFeatures: DetailedFeature[]; // This is the problematic array
  };
  benefits: string[];
  howUsed: {
    intro: string;
    details: string;
  };
  whoCanUse: {
    intro: string;
    industries: string[];
  };
  pptContent: {
    pages: Array<{
      id: string;
      title: string;
      description: string;
      imageSrc?: string;
      keyPoint?: string;
      sections?: Array<{ name: string; bullets: string[] }>;
      checklist?: { name: string; bullets: string[] };
    }>;
  };
  cta: {
    heading: string;
    description: string;
    linkHref: string;
    linkText: string;
  };
}

// --- END: TYPE DEFINITIONS FOR FIXING THE ERROR ---

const iconMap: { [key: string]: any } = {
  BrainCircuit,
  Tags,
  Search,
  CheckCheck,
  GitMerge,
  GitBranch,
  FileDiff,
  MessageCircle,
  ClipboardEdit,
  AlertTriangle,
  TrendingUp,
  Cpu,
  Rocket,
  BarChart3,
  BarChart,
  FileText,
  Layout,
  CircleUser,
  Lightbulb,
  Workflow,
  Building2,
  ShieldCheck,
  Truck,
  Factory,
  Atom,
  Hotel,
  GitFork,
  Users,
  Cloud,
  Code,
  Share2,
  Globe,
  Eye,
  X,
  Check,
  FileEdit,
  HardDrive,
  SquarePen,
  ClipboardList,
  Library,
  Plug,
  CodeSquare,
  FlaskConical,
  LineChart,
  Trello,
  Database,
  Lock,
  Code2,
  PlayCircle,
  Layers,
  Link2,
  Clock,
  Bot,
  Scaling,
  Activity,
  Camera,
  Download,
  Settings,
  Server,
  BarChart4,
  ClipboardCheck, // Added missing icon used later in the file
  User // Added missing icon used later in the file
};

const sectionVariants = {
  initial: { opacity: 0, y: 50 },
  in: { opacity: 1, y: 0 },
};

// FIX: Change the prop type from `any` to the newly defined `GuideData` interface
export default function CdpPage({ guideData }: { guideData: GuideData }) {
  const renderIcon = (name: string, size: number = 20, className: string = "") => {
    const IconComponent = iconMap[name];
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
            Purpose: Why Use a Common Data Platform?
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
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">
            {guideData.keyFeatures.intro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Typecast to 'any' here is redundant after typing the component props, but remains harmless */}
            {guideData.keyFeatures.features.map((feature: Feature, index: number) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col items-start p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg border border-purple-500/50 text-purple-400 bg-purple-500/10">
                      {IconComponent && <IconComponent className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.name}</h3>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.text}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Features: Structured/Unstructured Data and Document Chats */}
          <div className="max-w-5xl mx-auto mt-12">
            {/* FIXED: The 'detail' parameter is now explicitly typed via GuideData */}
            {guideData.keyFeatures.detailedFeatures.map((detail, detailIndex) => (
              <div key={detailIndex} className="mb-8 p-6 border border-white/10 rounded-xl bg-white/5">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  {renderIcon(detail.name.includes("Document Chats") ? "MessageCircle" : "Layers", 24, "text-cyan-400")}
                  {detail.name}
                </h3>
                {detail.subsections && detail.subsections.map((sub, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h4 className="font-semibold text-white/90 mb-2">{sub.title}</h4>
                    <ul className="list-disc list-inside space-y-1 text-white/70">
                      {sub.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                {detail.bullets && (
                  <ul className="list-disc list-inside space-y-1 text-white/70">
                    {detail.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
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
            Adopting the Common Data Platform provides significant benefits that accelerate innovation and improve your bottom line.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {guideData.benefits.map((benefit: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-blue-400/50 text-blue-300 bg-blue-500/10">
                      <CheckCheck className="w-4 h-4" />
                    </div>
                    <p className="text-white/85 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">{benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it is Used in Space AI */}
        <section className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
          >
            <Cpu size={32} className="text-purple-400" />
            How the Common Data Platform is Used in Space AI
          </motion.h2>
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.howUsed.intro}</p>
          <p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.howUsed.details}</p>
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
            Who Can Use It?
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


        {/* Start of PPT Content */}
        {guideData.pptContent.pages.map((page, index: number) => (
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

              {page.keyPoint && (
                <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-blue-300">Key Point</h3>
                  <p className="text-white/80">{page.keyPoint}</p>
                </div>
              )}

              {/* General Sections/Bullets */}
              {page.sections && page.sections.map((section, sectionIndex: number) => (
                <div key={sectionIndex} className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {section.name === "Core Purpose" && renderIcon("Activity", 24, "text-cyan-400")}
                    {section.name === "Data Ingestion Engine" && renderIcon("Download", 24, "text-red-400")}
                    {section.name === "Intelligent Processing Layer" && renderIcon("Settings", 24, "text-purple-400")}
                    {section.name === "Real-Time Analytics Engine" && renderIcon("BarChart3", 24, "text-green-400")}
                    {section.name === "Governance Framework" && renderIcon("ShieldCheck", 24, "text-blue-400")}
                    {section.name === "Integration Hub" && renderIcon("Link2", 24, "text-yellow-400")}
                    {section.name === "Assessment and Planning" && renderIcon("ClipboardList", 24, "text-cyan-400")}
                    {section.name === "Data Source Identification" && renderIcon("HardDrive", 24, "text-purple-400")}
                    {section.name === "Platform Configuration" && renderIcon("Settings", 24, "text-green-400")}
                    {section.name === "Data Ingestion Layer" && renderIcon("Download", 24, "text-red-400")}
                    {section.name === "Data Processing Engine" && renderIcon("Settings", 24, "text-purple-400")}
                    {section.name === "Intelligence Layer" && renderIcon("BrainCircuit", 24, "text-yellow-400")}
                    {section.name === "Data Storage" && renderIcon("Database", 24, "text-blue-400")}
                    {section.name === "Predictive Analytics" && renderIcon("BarChart3", 24, "text-cyan-400")}
                    {section.name === "Automated Insights" && renderIcon("Lightbulb", 24, "text-yellow-400")}
                    {section.name === "Document Intelligence" && renderIcon("FileText", 24, "text-purple-400")}
                    {section.name === "Computer Vision" && renderIcon("Camera", 24, "text-green-400")}
                    {section.name === "Real-Time Data Sources" && renderIcon("Activity", 24, "text-red-400")}
                    {section.name === "Live Dashboards" && renderIcon("Layout", 24, "text-blue-400")}
                    {section.name === "Stream Processing" && renderIcon("Rocket", 24, "text-orange-400")}
                    {section.name === "Automated Response" && renderIcon("Bot", 24, "text-purple-400")}
                    {section.name === "Data Governance" && renderIcon("ShieldCheck", 24, "text-green-400")}
                    {section.name === "Security Framework" && renderIcon("Lock", 24, "text-red-400")}
                    {section.name === "Privacy Protection" && renderIcon("User", 24, "text-cyan-400")}
                    {section.name === "Compliance Management" && renderIcon("ClipboardCheck", 24, "text-yellow-400")}
                    {section.name}
                  </h3>
                  {section.bullets && (
                    <ul className="list-disc list-inside space-y-2 text-white/70 mt-4">
                      {section.bullets.map((bullet: string, bulletIndex: number) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              
              {/* Special Checklist Section */}
              {page.checklist && (
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    {renderIcon("ClipboardCheck", 24, "text-green-400")}
                    {page.checklist.name}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-white/70">
                    {page.checklist.bullets.map((bullet: string, checklistIndex: number) => (
                      <li key={checklistIndex}>{bullet}</li>
                    ))}
                  </ul>
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
