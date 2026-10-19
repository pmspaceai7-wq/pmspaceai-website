"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Updated imports based on your Core.ts
import {
  Bot, AppWindow, AreaChart, Lightbulb, ScanSearch, FolderKanban,
  Search, Replace, ClipboardEdit, CheckSquare, Workflow, Send,
  DraftingCompass, Building2, ShieldCheck, Users, GitFork,Scaling,
  ClipboardCheck, CheckCheck, TrendingUp, Signature, PenSquare,
  ScrollText, Lock, View, AlertTriangle, Database, Share2, Mail,
  MessageCircle, Link as LinkIcon, Contact, Filter, History, BarChart3,Rocket,
  DatabaseZap, GitBranch, KeyRound, Library, Cpu, Expand, PlayCircle,
  ShieldAlert, Tags, FileDiff, FileSpreadsheet,GitMerge, GitCommit, Cloud, Code, Briefcase,BrainCircuit,Smartphone,ScanLine, GitCompare,
  ClipboardList, Settings, Handshake, Zap, Trophy, Target,
  Glasses, Camera, Layers, Eye

} from 'lucide-react';
import { Tool } from '@/lib/core';

// Updated icon map with new icons
const iconMap = {
  Bot, AppWindow, AreaChart, Lightbulb, ScanSearch, FolderKanban,
  Search, Replace, ClipboardEdit, CheckSquare, Workflow, Send,
  DraftingCompass, Building2, ShieldCheck, Users, GitFork,
  ClipboardCheck, CheckCheck, TrendingUp, Signature, PenSquare,
  ScrollText, Lock, View, AlertTriangle, Database, Share2, Mail,Rocket,
  MessageCircle, LinkIcon, Contact, Filter, History, BarChart3,Scaling,
  DatabaseZap, GitBranch, KeyRound, Library, Cpu, Expand, PlayCircle,
  ShieldAlert, Tags, FileDiff, FileSpreadsheet,GitMerge, GitCommit, Cloud, Code, Briefcase,BrainCircuit,Smartphone,ScanLine, GitCompare,
  ClipboardList, Settings, Handshake, Zap, Trophy, Target,
  Glasses, Camera, Layers, Eye
};

export default function ToolDetailClient({ tool }: { tool: Tool }) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Enhanced background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Compact back navigation */}
        <div className="hidden">
          <Link 
            href="/core/" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </Link>
        </div>

        {/* Compact Hero Section */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 whitespace-nowrap overflow-hidden text-ellipsis pb-4">
            {tool.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            {tool.description}
          </p>
        </div>

        {/* Main content section */}
        <div className="max-w-6xl mx-auto">
          {/* Image Section */}
       

          {/* Features Section */}
          <div className="mb-16 sm:mb-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Key Features
              </h2>
            </div>

            

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tool.keyFeatures.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                if (!IconComponent) return null;

                return (
                  <div 
                    key={feature.name} 
                    className="group flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    <span className="text-base text-white font-medium group-hover:text-white transition-colors duration-300">
                      {feature.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

             <div className="mb-12 sm:mb-16">
            <div className="relative group max-w-4xl mx-auto">
              {tool.id === 'space-capture' ? (
                <div className="relative w-full aspect-video flex flex-col items-center justify-center">
                   {/* Marketing Badge */}
                   <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 backdrop-blur-sm animate-fade-in-up">
                      <ScanLine className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                        AI Image Defect Detection Analysis 
                      </span>
                   </div>
                   
                   {/* Laptop Container */}
                   <div className="relative w-[70%] h-[80%] bg-gray-900 rounded-xl border-4 border-gray-800 shadow-2xl z-10 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                      {/* Screen */}
                      <div className="w-full h-full bg-black relative">
                         <Image
                            src={tool.imageSrc}
                            alt="Space Capture Laptop View"
                            fill
                            className="object-cover"
                         />
                      </div>
                      {/* Keyboard base hint (optional, simple visualization) */}
                      <div className="absolute bottom-0 w-full h-4 bg-gray-800"></div>
                   </div>

                   {/* Mobile 1 (Left) */}
                   <div className="absolute left-[5%] bottom-[5%] w-[18%] aspect-[9/19] bg-black rounded-3xl border-4 border-gray-800 shadow-xl z-20 overflow-hidden transform -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-4 transition-all duration-500">
                      <div className="w-full h-full relative">
                         <Image
                            src="/assets/images/mobile1.jpeg"
                            alt="Space Capture Mobile View 1"
                            fill
                            className="object-cover"
                         />
                      </div>
                   </div>

                   {/* Mobile 2 (Right) */}
                   <div className="absolute right-[5%] bottom-[5%] w-[18%] aspect-[9/19] bg-black rounded-3xl border-4 border-gray-800 shadow-xl z-20 overflow-hidden transform rotate-6 group-hover:rotate-12 group-hover:translate-x-4 transition-all duration-500">
                      <div className="w-full h-full relative">
                         <Image
                            src="/assets/images/mobile2.jpeg"
                            alt="Space Capture Mobile View 2"
                            fill
                            className="object-cover"
                         />
                      </div>
                   </div>
                </div>
              ) : (
                <div className="relative aspect-video rounded-xl overflow-hidden border border-blue-500/20 bg-black shadow-xl shadow-blue-500/10">
                  <Image
                    src={tool.imageSrc}
                    alt={`Screenshot of ${tool.title}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              )}
            </div>
          </div>

          {/* Before/After Cards Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Transformation Overview
              </h2>
              <p className="text-white/60">
                See how {tool.title} transforms your workflow
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before Card */}
              <div className="relative group animate-fade-in-up">
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-900/30 to-red-700/15 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-red-500/25">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <AlertTriangle className="w-6 h-6 text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-red-100 transition-colors duration-300">Before</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {tool.before.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-3 rounded-lg bg-red-900/20 group-hover:bg-red-800/30 transition-all duration-300"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className="w-3 h-3 bg-red-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-red-300 transition-colors duration-300"></div>
                          <p className="text-white/85 leading-relaxed text-base group-hover:text-white/95 transition-colors duration-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* After Card */}
              <div className="relative group animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-700/15 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-green-500/25">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCheck className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors duration-300">After</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {tool.after.map((item, index) => (
                        <div 
                          key={index} 
                          className="flex items-start gap-4 p-3 rounded-lg bg-green-900/20 group-hover:bg-green-800/30 transition-all duration-300"
                          style={{ animationDelay: `${index * 150}ms` }}
                        >
                          <div className="w-3 h-3 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-green-300 transition-colors duration-300"></div>
                          <p className="text-white/85 leading-relaxed text-base group-hover:text-white/95 transition-colors duration-300">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          {tool.benefits && tool.benefits.length > 0 && (
            <div className="mt-16 sm:mt-20">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Key Benefits
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  Discover the powerful advantages of using {tool.title}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tool.benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500/30 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCheck className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                        <p className="text-white/85 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">{benefit}</p>
                      </div>
                      
                      {/* Progress bar animation */}
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional visual enhancement */}
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-white/80 font-medium">Experience these benefits and more</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Simple CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href={tool.title === "E-Sign" ? "https://sign.pmspace.ai/signin" : "/construction-software-demo"}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Get Started with {tool.title}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Pulse animation keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </main>
  );
}