"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Layers, AlertCircle, Scan, Zap } from "lucide-react";
import Image from "next/image";

const MEPClashPage = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-purple-500/30">


      {/* Hero Section */}
      <header className="pt-32 pb-16 px-4 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.1),transparent_50%)]"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                MEP Engineering
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                Clash Detection
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Avoiding MEP Clashes using <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Generative AI</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
              How a high-tech lab facility resolved 400+ clashes before breaking ground, saving 6 weeks of rework.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-3xl px-4 py-16 space-y-20">
        
        {/* The Problem */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Layers className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-3xl font-bold">The Coordination Nightmare</h2>
          </div>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            The project involved complex HVAC ducting, specialized medical gas lines, and high-voltage electrical trays in a constrained ceiling plenum. Traditional BIM coordination meetings were slow, resolving only 10-15 clashes per week manually.
          </p>
        </section>

        {/* The AI Solution */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Scan className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold">Auto-Resolution with AI</h2>
          </div>
          <div className="bg-gray-900/50 border border-white/10 rounded-xl p-8 mb-6">
            <p className="text-lg text-white/80 leading-relaxed mb-4">
              The team deployed Space AI&apos;s <Link href="/predictive-analytics-construction/" className="text-blue-400 hover:underline">Automated Clash Resolution</Link> module. Instead of just identifying clashes, the AI:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-white/70"><strong>Proposed Rerouting:</strong> Generated 3 alternative route options for the electrical trays to bypass the HVAC ducts automatically.</span>
              </li>
              <li className="flex gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
                <span className="text-white/70"><strong>Rule-Based Validation:</strong> Checked code compliance (clearance, support spacing) for every proposed change instantly.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* The Results */}
        <section>
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
              <AlertCircle className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-3xl font-bold">Zero Re-Work</h2>
          </div>
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            By automating the routing logic, the team resolved 95% of clashes in the digital twin phase.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
             <div className="p-6 bg-gray-900 border border-white/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-white mb-2">6 Weeks</p>
                <p className="text-white/60 text-sm">Schedule Saved</p>
             </div>
             <div className="p-6 bg-gray-900 border border-white/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-white mb-2">400+</p>
                <p className="text-white/60 text-sm">Clashes Resolved</p>
             </div>
             <div className="p-6 bg-gray-900 border border-white/10 rounded-xl text-center">
                <p className="text-3xl font-bold text-white mb-2">$80k</p>
                <p className="text-white/60 text-sm">Engineering Savings</p>
             </div>
          </div>
        </section>

        {/* Detailed CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Stop Clashing, Start Building</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              Coordinate complex systems with AI-powered ease. See the magic of Generative Design in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link href="/construction-software-demo/" className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors">
                Book a Coordination Demo
              </Link>
              <Link href="/features/" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default MEPClashPage;
