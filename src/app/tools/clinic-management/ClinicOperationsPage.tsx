// src/app/ClinicOperationsPage.tsx

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Simple fade-in and slide-up variants for Framer Motion
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ClinicOperationsPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How quickly can we get started?",
      answer:
        "Most clinics begin using core features within 48 hours of signup, with full implementation completed in 2-4 weeks.",
    },
    {
      id: 2,
      question: "Will this work with our current EMR system?",
      answer:
        "Yes, we have pre-built integrations with all major EMR platforms and can create custom connections if needed.",
    },
    {
      id: 3,
      question: "What about staff training?",
      answer:
        "We provide comprehensive training programs tailored to different roles, plus ongoing support materials and video tutorials.",
    },
    {
      id: 4,
      question: "Is patient data secure?",
      answer:
        "Absolutely. We exceed HIPAA requirements with bank-level security, regular security audits, and comprehensive compliance monitoring.",
    },
    {
      id: 5,
      question: "Can we customize the system for our specialty?",
      answer:
        "Yes, our platform adapts to various medical specialties with customizable workflows, forms, and reporting.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white py-6 lg:py-12">
        {/* Background radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,69,255,0.15),transparent_70%)]"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 pb-6">
                Transform Your Clinic Operations with Intelligent Automation
              </h1>
              <p className="text-base sm:text-lg text-white/70 mb-6 leading-relaxed">
                Space AI  Clinic Management System harnesses artificial intelligence to streamline patient care, optimize workflows, and reduce administrative burden.
                <span className="block mt-2">
                   Join hundreds of healthcare providers who&apos;ve increased efficiency by 65%
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/construction-software-demo/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Get Free Demo
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Link>
              </div>
            </motion.div>

            {/* Right Image/Mockup */}
            <motion.div
              className="relative mt-8 lg:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-auto min-h-[400px] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Placeholder for the first image */}
               <Image src="/assets/images/clinicmanagementwithspaceai2.png" alt="Futuristic clinic interior" fill className="object-cover" /> 
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       <div className="mb-12 sm:mb-16">
                  <div className="relative group max-w-4xl mx-auto">
                    <div className="relative aspect-video rounded-xl overflow-hidden border border-blue-500/20 bg-black shadow-xl shadow-blue-500/10">
                      <Image
                        src={`/assets/images/clinicmanagementfiles.png`}
                        alt={`Clinic Management Files Module`}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                        priority
                      />
                    </div>
                  </div>
                </div>

      {/* The Healthcare Challenge Section */}
      <section className="py-6 lg:py-8 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-4 pb-6">
              The Healthcare Challenge
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Healthcare providers face mounting pressure: increasing patient volumes, complex regulations, staff shortages, and the constant demand for better patient outcomes. Traditional clinic management creates bottlenecks that prevent you from focusing on what matters most - patient care.
            </p>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative w-full h-auto min-h-[400px] rounded-xl overflow-hidden">
              {/* Placeholder for the second image */}
              <Image src="/assets/images/clinicmanagementwithspaceai3.webp" alt="Stressed medical staff with paperwork" fill className="object-cover" />
            </div>
            <div className="space-y-4 text-left">
              <h3 className="text-2xl font-semibold text-white mb-2">
                Current Pain Points:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>
                  <span className="font-medium text-white">Manual scheduling</span> leads to conflicts and long wait times.
                </li>
                <li>
                  <span className="font-medium text-white">Paper-based records</span> create compliance risks.
                </li>
                <li>
                  Staff spend <span className="font-medium text-white">70% of time</span> on administrative tasks.
                </li>
                <li>
                  <span className="font-medium text-white">Patient communication gaps</span> reduce satisfaction.
                </li>
                <li>
                  <span className="font-medium text-white">Inefficient resource allocation</span> impacts revenue.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>


         


      {/* AI-Powered Solutions Section */}
      <section className="py-12 lg:py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              AI-Powered Solutions That Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Intelligent Scheduling */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg"
            >
              <div className="mb-4">
                {/* Icon Placeholder */}
                {/* Add your icon here, e.g., <div className="p-3 bg-purple-600/20 rounded-full"><Calendar className="text-purple-400" /></div> */}
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <span className="text-purple-400 text-lg">📅</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Intelligent Patient Scheduling
              </h3>
              <p className="text-gray-300 mb-4">
                Our AI algorithms analyze patient history, provider availability, and appointment types to create optimal schedules. Reduce no-shows by 40% and eliminate double-bookings.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Automated appointment optimization</li>
                <li>Smart waitlist management</li>
                <li>Multi-location scheduling coordination</li>
              </ul>
            </motion.div>

            {/* Feature 2: Real-Time Analytics */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg"
            >
              <div className="mb-4">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-blue-400 text-lg">📈</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Analytics Dashboard
              </h3>
              <p className="text-gray-300 mb-4">
                Make data-driven decisions with comprehensive insights into clinic performance, patient trends, and operational efficiency.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Patient flow and wait times</li>
                <li>Provider utilization rates</li>
                <li>Revenue per appointment</li>
              </ul>
            </motion.div>

            {/* Feature 3: Streamlined Patient Management */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg"
            >
              <div className="mb-4">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 rounded-full bg-pink-600/20 flex items-center justify-center">
                  <span className="text-pink-400 text-lg">📝</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Streamlined Patient Management
              </h3>
              <p className="text-gray-300 mb-4">
                From registration to discharge, manage every aspect of patient care with intelligent workflows that adapt to your clinics unique needs.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>Digital check-in and forms</li>
                <li>Automated insurance verification</li>
                <li>Electronic health record integration</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Integration & Implementation Section */}
      <section className="py-12 lg:py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent mb-4">
              Seamless Integration
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Space AI works with your existing systems, not against them. Our platform integrates with 50+ popular EMR systems, billing platforms, and healthcare tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-auto min-h-[400px] rounded-xl overflow-hidden">
              {/* Placeholder for the integration diagram image */}
              <Image src="/assets/images/clinicmanagementwithspaceai4.png" alt="Integration diagram" fill className="object-cover" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-white">
                Implementation Process:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0">
                    01
                  </span>
                  <div>
                    <h4 className="text-xl font-medium">Data Migration</h4>
                    <p className="text-gray-300">
                      We handle the technical transfer (1-2 weeks).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0">
                    02
                  </span>
                  <div>
                    <h4 className="text-xl font-medium">Staff Training</h4>
                    <p className="text-gray-300">
                      Comprehensive onboarding program (1 week).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0">
                    03
                  </span>
                  <div>
                    <h4 className="text-xl font-medium">Go-Live Support</h4>
                    <p className="text-gray-300">
                      Dedicated team ensures a smooth transition.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 flex-shrink-0">
                    04
                  </span>
                  <div>
                    <h4 className="text-xl font-medium">Ongoing Optimization</h4>
                    <p className="text-gray-300">
                      Continuous performance monitoring.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Why Choose Section */}
      <section className="py-12 lg:py-24 bg-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Why Choose SPACE AI?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare-Focused AI",
                desc: "Unlike generic management software, our AI is specifically trained on healthcare workflows and regulations.",
              },
              {
                title: "Rapid Implementation",
                desc: "Most clinics are operational within 30 days, with basic features available immediately.",
              },
              {
                title: "Comprehensive Support",
                desc: "24/7 technical support, dedicated account management, and ongoing training resources.",
              },
              {
                title: "Proven Track Record",
                desc: "Trusted by 500+ healthcare providers across North America with 98% customer retention rate.",
              },
              {
                title: "Continuous Innovation",
                desc: "Regular feature updates based on user feedback and healthcare industry evolution.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUpVariants}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg text-center"
              >
                <div className="mb-4 text-4xl">💡</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-12 lg:py-24 bg-gray-950 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 lg:px-8 py-6 text-left flex justify-between items-center text-lg lg:text-xl font-semibold hover:bg-gray-800/50 transition-all duration-300 group"
                >
                  <span className="text-gray-100 group-hover:text-white transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeFaq === faq.id ? "bg-blue-500 text-white rotate-180" : "bg-gray-700 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-300"}`}>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${activeFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-6 lg:px-8 pb-6">
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Final Call to Action Section */}
      <section className="container mx-auto px-4 py-12 lg:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Clinic?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join hundreds of healthcare providers who have revolutionized their operations with SPACE AI. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/construction-software-demo/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200 cursor-pointer"
              >
                Schedule Free Demo
              </motion.div>
            </Link>
            <Link href="/construction-software-demo/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-white/10 to-white/20 border border-white/30 hover:bg-white/30 transition-all duration-200 cursor-pointer"
              >
                Contact Sales
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}