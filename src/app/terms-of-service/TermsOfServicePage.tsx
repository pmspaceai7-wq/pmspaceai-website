"use client";

import { motion } from "framer-motion";
import { FileText, Users, CreditCard, Shield, AlertTriangle, Scale, Mail, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
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
      title: "The Service",
      icon: Users,
      color: "from-blue-500 to-cyan-400",
      content: [
        {
          subtitle: "Platform Overview",
          text: "The Service is a web-based platform that provides AI-powered predictive analytics, an automated workflow engine, and real-time collaboration tools designed to keep construction and other AECO projects on track."
        },
        {
          subtitle: "Core Features",
          text: "Services include AI-driven delay prediction, safety risk detection, resource optimization, data management, and integration with third-party applications for comprehensive project management."
        },
        {
          subtitle: "Target Industry",
          text: "Our platform is specifically designed for the Architecture, Engineering, Construction, and Operations (AECO) industry, providing specialized tools and insights."
        }
      ]
    },
    {
      title: "User Accounts",
      icon: Shield,
      color: "from-purple-500 to-blue-600",
      content: [
        {
          subtitle: "Account Creation",
          text: "When you create an account, you must provide information that is accurate, complete, and current. You represent that you are over the age of 18."
        },
        {
          subtitle: "Account Security",
          text: "You are responsible for safeguarding the password you use to access the Service and for any activities or actions under your password."
        },
        {
          subtitle: "Unauthorized Access",
          text: "You agree not to disclose your password to any third party and to notify us immediately upon becoming aware of any breach of security or unauthorized use of your account."
        }
      ]
    },
    {
      title: "Subscriptions and Payment",
      icon: CreditCard,
      color: "from-green-500 to-emerald-400",
      content: [
        {
          subtitle: "Subscription Model",
          text: "The Service is available on a subscription basis. Subscription fees are based on the number of user subscriptions purchased and are billed in advance on a recurring basis (monthly or annually)."
        },
        {
          subtitle: "Payment Terms",
          text: "We accept electronic payments through the options available at checkout. You must provide current and accurate payment information. All payments are non-refundable unless otherwise stated by the Company."
        },
        {
          subtitle: "Tax Responsibility",
          text: "You are responsible for paying all applicable taxes, levies, or duties imposed by taxing authorities, excluding only taxes based on Our income."
        }
      ]
    },
    {
      title: "License and Acceptable Use",
      icon: Scale,
      color: "from-orange-500 to-red-400",
      content: [
        {
          subtitle: "License Grant",
          text: "We grant you a limited, non-exclusive, non-transferable, and revocable license to use the Service for your internal business purposes, in accordance with these Terms."
        },
        {
          subtitle: "Usage Restrictions",
          text: "You shall not (and shall not permit others to) reverse engineer, decompile, copy, modify, or create derivative works from the Service. You are responsible for ensuring your authorized users comply with these Terms."
        },
        {
          subtitle: "Prohibited Activities",
          text: "You agree not to use the Service for any unlawful purpose or to transmit any material that is illegal, harassing, discriminatory, or harmful."
        }
      ]
    },
    {
      title: "Customer Data and Intellectual Property",
      icon: FileText,
      color: "from-indigo-500 to-purple-600",
      content: [
        {
          subtitle: "Your Data Rights",
          text: "You retain all ownership rights to the data, information, and content you upload to the Service (&apos;Customer Data&apos;). You are responsible for the legality, reliability, and appropriateness of your Customer Data."
        },
        {
          subtitle: "Our License to Your Data",
          text: "By posting or uploading Customer Data, you grant Us the right and license to use, process, analyze, and display this data as necessary to provide, maintain, and improve the Service. This includes using anonymized and aggregated data to train our AI models and enhance our predictive analytics capabilities."
        },
        {
          subtitle: "Our Intellectual Property",
          text: "The Service and all related software, trademarks, and content are the exclusive property of the Company and its licensors. These Terms do not grant you any rights to our trademarks or other intellectual property."
        }
      ]
    },
    {
      title: "Termination & Liability",
      icon: AlertTriangle,
      color: "from-yellow-500 to-orange-400",
      content: [
        {
          subtitle: "Termination Rights",
          text: "Either party may terminate this Agreement by providing at least 30 days&apos; written notice to the other party. We may terminate or suspend your account immediately, without prior notice, for any breach of these Terms, including failure to pay fees."

        },
        {
          subtitle: "Disclaimer of Warranties",
          text: "The Service is provided on an &apos;AS IS&apos; and &apos;AS AVAILABLE&apos; basis. We do not warrant that the Service will be uninterrupted, error-free, or completely secure."

        },
        {
          subtitle: "Limitation of Liability",
          text: "To the maximum extent permitted by law, in no event shall the Company be liable for any indirect, incidental, special, or consequential damages, including loss of profits, data, or business opportunities."
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
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 p-4 rounded-xl">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Terms of Service
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light mb-8">
              These terms govern your use of pmspace.ai and outline the rights and responsibilities of both parties.
            </p>
            <div className="flex items-center justify-center text-sm text-white/50">
              <Calendar className="w-4 h-4 mr-2" />
              Effective Date: January 15, 2025
            </div>
          </motion.div>

          {/* Agreement Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 sm:p-8 mb-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">Agreement to Terms</h2>
            <p className="text-white/70 text-base leading-relaxed">
              Welcome to pmspace.ai, owned and operated by SpaceAI App. These Terms and Conditions govern your access to and use of our AI-powered project management platform and associated services for the Architecture, Engineering, Construction, and Operations (AECO) industry. By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
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

          {/* Additional Provisions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 sm:p-8 mt-12"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">General Provisions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Confidentiality</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Each party agrees not to disclose the other&apos;s Confidential Information except as required to perform its obligations under this Agreement.
                </p>
                
                <h3 className="text-lg font-medium text-white mb-3">Governing Law</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  This Agreement shall be governed by applicable laws, without regard to conflict of law provisions.
                </p>

              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Dispute Resolution</h3>
                <p className="text-white/70 text-base leading-relaxed mb-6">
                  Any disputes arising from this Agreement shall first be addressed through good-faith negotiation. If unresolved, disputes will be settled by binding arbitration.
                </p>
                
                <h3 className="text-lg font-medium text-white mb-3">Entire Agreement</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  These Terms constitute the entire agreement between you and the Company regarding the Service.
                </p>
              </div>
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
              <h3 className="text-xl font-semibold text-white">Questions About These Terms?</h3>
            </div>
            <p className="text-white/70 mb-6">
              For any questions about these Terms and Conditions, please contact us.
            </p>
            <a 
              href="mailto:legal@pmspace.ai"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5 mr-2" />
              legal@pmspace.ai
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
              <Link href="/privacy-policy/" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
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
