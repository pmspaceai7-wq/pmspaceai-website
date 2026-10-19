"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, Users, Database, Mail, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      color: "from-blue-500 to-cyan-400",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you register for an account, we collect information that can identify you, such as your name, email address, phone number, company name, and payment information."
        },
        {
          subtitle: "Customer Data",
          text: "We collect and store the data you upload to the Service, which may include project plans, schedules, BIM/CAD files, financial data, safety reports, images, and communications related to your AECO projects."
        },
        {
          subtitle: "Usage Data and Log Files",
          text: "We automatically collect information your browser sends when you use our Service. This may include your IP address, browser type, pages visited, time and date of your visit, and other diagnostic data."
        },
        {
          subtitle: "Cookies",
          text: "We use cookies and similar tracking technologies to track activity on our Service and hold certain information. Cookies help us operate and personalize the platform."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Lock,
      color: "from-purple-500 to-blue-600",
      content: [
        {
          subtitle: "Service Operations",
          text: "To provide, operate, and maintain our Service, process your transactions and manage your subscription."
        },
        {
          subtitle: "AI Development",
          text: "To develop and train our artificial intelligence models. We use Customer Data and Usage Data to enhance our predictive analytics, automate workflows, and improve risk detection features. When used for this purpose, data is processed in an aggregated and anonymized form."
        },
        {
          subtitle: "Communication",
          text: "To communicate with you, including for customer service, to provide you with updates, and for marketing and promotional purposes (you may opt out of marketing communications)."
        },
        {
          subtitle: "Security",
          text: "To improve, personalize, and expand our Service and to find and prevent fraud."
        }
      ]
    },
    {
      title: "How We Share Your Information",
      icon: Users,
      color: "from-green-500 to-emerald-400",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with trusted third-party vendors who perform services for us, such as cloud hosting, payment processing, and data analytics. These providers are obligated not to disclose or use the information for any other purpose."
        },
        {
          subtitle: "Business Transfers",
          text: "We may share or transfer your information in connection with any merger, sale of company assets, or acquisition of all or a portion of our business."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may disclose your information where we are legally required to do so to comply with applicable law or a valid legal process."
        }
      ]
    },
    {
      title: "Data Security & Your Rights",
      icon: Shield,
      color: "from-orange-500 to-red-400",
      content: [
        {
          subtitle: "Security Measures",
          text: "We use industry-standard administrative, technical, and physical security measures to protect your personal information. This includes encryption of data in transit, access controls, and regular security audits."
        },
        {
          subtitle: "Your Rights",
          text: "You have the right to access, update, or delete the information we have on you, the right of rectification to correct any inaccurate information, the right to object to our processing of your personal data, and the right to opt out of marketing communications."
        },
        {
          subtitle: "Data Retention",
          text: "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, including for the duration of your subscription and as required to comply with our legal obligations."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container px-4 sm:px-6 mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-4 rounded-xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Privacy Policy
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light mb-8">
              Your privacy and data protection are fundamental to our mission. Learn how we collect, use, and safeguard your information.
            </p>
            <div className="flex items-center justify-center text-sm text-white/50">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: January 15, 2025
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 sm:p-8 mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Introduction</h2>
            <p className="text-white/70 text-base leading-relaxed">
              pmspace.ai is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered project management platform for the Architecture, Engineering, Construction, and Operations (AECO) industry. By using the Service, you consent to the data practices described in this policy.
            </p>
          </motion.div>

          {/* Main Content Sections */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={sectionVariants}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${section.color} p-3 rounded-lg mr-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white">
                      {section.title}
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-2 border-white/10 pl-6">
                        <h3 className="text-lg font-medium text-white mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-white/70 text-base leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Children's Privacy & Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Children&apos;s Privacy</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Our Service is not intended for use by anyone under the age of 18. We do not knowingly collect personally identifiable information from children.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Policy Updates</h3>
              <p className="text-white/70 text-base leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 sm:p-8 mt-12 text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-purple-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">Questions About Privacy?</h3>
            </div>
            <p className="text-white/70 mb-6">
              If you have any questions or suggestions about our Privacy Policy, please contact us.
            </p>
            <a 
              href="mailto:info@pmspace.ai"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5 mr-2" />
              info@pmspace.ai
            </a>
          </motion.div>

          {/* Navigation */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-between items-center mt-12 pt-8 border-t border-white/10"
          >
            <Link href="/" className="flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex space-x-4">
              <Link href="/terms-of-service/" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy/" className="text-white/70 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  );
}
