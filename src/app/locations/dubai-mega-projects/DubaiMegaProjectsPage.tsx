"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Building2, Sun, Languages, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

const DubaiMegaProjectsPage = () => {
    const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-amber-500/30">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background - Suggestive of Dubai Skyline / Gold */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10 w-full h-full"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_60%)] z-10"></div>
        
        {/* You would typically use a real image here. Using a placeholder div for now */}
        <div className="absolute inset-0 bg-gray-900 z-0">
             {/* Placeholder for Dubai Skyline Image */}
             <div className="w-full h-full opacity-30 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea904ac66de?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div> 
        </div>

        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-bold tracking-wider mb-6">
              AI FOR THE GCC
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Constructing <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
                The Impossible
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed mb-10">
              Manage Dubai&apos;s mega-projects with software built for extreme scale. 
              From the Palm to the Creek, Space AI handles the heat, the logistics, and the bilingual complexity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push('/construction-software-demo/')}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-bold text-lg rounded-full hover:scale-105 transition-transform shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                Book a Dubai Demo
                <ArrowRight className="w-5 h-5"/>
              </button>
              <Link href="/features/">
                 <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-lg rounded-full hover:bg-white/20 transition-colors">
                    View GCC Features
                 </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the Desert&apos;s Demands</h2>
                <p className="text-white/60">Dubai construction isn&apos;t like anywhere else. Your software shouldn&apos;t be either.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                
                {/* Card 1: Heat/Scheduling */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-8 bg-gray-900/50 border border-white/10 rounded-2xl group"
                >
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                        <Sun className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Heat-Adaptive Scheduling</h3>
                    <p className="text-white/60 leading-relaxed">
                        Our AI automatically adjusts productivity rates for summer working hours (midday breaks) and extreme temperatures, preventing burnout-related delays.
                    </p>
                </motion.div>

                {/* Card 2: Bilingual */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-8 bg-gray-900/50 border border-white/10 rounded-2xl group"
                >
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                        <Languages className="w-7 h-7 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Arabic & English Native</h3>
                    <p className="text-white/60 leading-relaxed">
                        Generate snag lists, safety reports, and handovers in both English and Arabic instantly. Keep your diverse workforce and municipality inspectors aligned.
                    </p>
                </motion.div>

                {/* Card 3: Logistics */}
                <motion.div 
                    whileHover={{ y: -10 }}
                    className="p-8 bg-gray-900/50 border border-white/10 rounded-2xl group"
                >
                    <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                        <Truck className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Mega-Logistics Tracking</h3>
                    <p className="text-white/60 leading-relaxed">
                        Coordinate thousands of deliveries in tight urban corridors. Space AI optimizes crane slots and gate access for massive concrete pours and steel deliveries.
                    </p>
                </motion.div>

            </div>
        </div>
      </section>

      {/* Social Proof / Municipality */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-12 text-white/80">Trusted for compliance with</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for logos - text used for SEO/Content representation */}
                <div className="text-xl font-bold tracking-widest border border-white/20 px-6 py-3 rounded-lg">DUBAI MUNICIPALITY</div>
                <div className="text-xl font-bold tracking-widest border border-white/20 px-6 py-3 rounded-lg">RTA</div>
                <div className="text-xl font-bold tracking-widest border border-white/20 px-6 py-3 rounded-lg">CIVIL DEFENSE</div>
                <div className="text-xl font-bold tracking-widest border border-white/20 px-6 py-3 rounded-lg">NAKHEEL</div>
            </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-purple-600/10"></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">From Sand to Skyline <br/> faster than ever.</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Automated NOC Tracking</h4>
                                <p className="text-white/60">Never let a No Objection Certificate expire. Automated alerts for all authority approvals.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">FIDIC Contract Ready</h4>
                                <p className="text-white/60">Built-in workflows for FIDIC Red and Yellow books. Tag correspondence to specific clauses instantly.</p>
                            </div>
                        </li>
                         <li className="flex gap-4">
                            <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-lg">Real-time Labour Productivity</h4>
                                <p className="text-white/60">Track thousands of workers across massive sites with facial recognition integration and automated timesheets.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                 <div className="relative h-[500px] border border-white/10 rounded-2xl overflow-hidden bg-gray-800">
                    <Image 
                        src="/assets/images/infrastructure.webp" // Reusing infra image as placeholder for now, would ideally be Dubai specific
                        alt="Dubai Construction Site"
                        fill
                        className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    />
                     <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                        <p className="text-amber-400 font-mono text-sm">LIVE DASHBOARD</p>
                        <p className="text-white font-bold text-xl">Burj District: Zone A - Ahead of Schedule</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-12 relative overflow-hidden max-w-5xl mx-auto">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                  
                  <h2 className="text-4xl font-bold mb-6">Ready to build the next icon?</h2>
                  <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                      Join the developers and contractors shaping the future of the GCC.
                  </p>
                  <button
                    onClick={() => router.push('/construction-software-demo/')}
                    className="px-10 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-2xl shadow-white/10"
                  >
                    Schedule a Consultation
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};

export default DubaiMegaProjectsPage;
