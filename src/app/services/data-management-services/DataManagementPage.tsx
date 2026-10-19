"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Database,
  Shield,
  LayoutGrid,
  Zap,
  Cloud,
  Layers,
  Code,
  Globe,
  Handshake,
  CheckCircle,
  TrendingUp,
  Snowflake,
  BarChart3,
  Search,
  DollarSign,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// --- Data Definitions ---

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const enterpriseSolutions: Feature[] = [
  { title: "Data Governance & Stewardship", description: "Comprehensive framework with defined roles, policies, and controls to ensure regulatory compliance and secure access.", icon: Shield },
  { title: "Data Architecture", description: "Design scalable, modular data frameworks for structured and unstructured data, fostering adaptability and efficiency.", icon: LayoutGrid },
  { title: "Data Integration", description: "Connect various systems through sophisticated ETL/ELT pipelines for a real-time, consolidated data view.", icon: Zap },
  { title: "Data Quality Management", description: "Solutions for validation, cleansing, and profiling to ensure continuous accuracy and empower reliable decision-making.", icon: CheckCircle },
];

const modernizationServices: Feature[] = [
  { title: "Data Modernization", description: "Migrate legacy systems to cloud-native data platforms, implementing modern workflows for greater agility and real-time processing.", icon: Cloud },
  { title: "Data Migration", description: "Complete cloud data migration with seamless database transformation, guaranteeing data integrity and minimal disruption.", icon: Layers },
  { title: "Metadata Management", description: "Solutions for cataloging metadata, tracing data lineage, and tagging for improved control and discoverability.", icon: Search },
  { title: "Data Storage Solutions", description: "Design hybrid, object, and cloud data storage architectures for robustness, security, and flexibility at any scale.", icon: Database },
];

const lakehouseSolutions: Feature[] = [
  { title: "Data Lake Managed Services", description: "Strategic planning, deployment, and integration leveraging cloud-native architectures and bespoke data ingestion frameworks.", icon: Code },
  { title: "Custom-Built Data Lake Development", description: "Structured and scalable architecture design and deployment for cloud-native, on-premise, or hybrid environments.", icon: Snowflake },
  { title: "Modern Data Lakehouse Solutions", description: "Unified, AI-ready architecture specializing in Delta Lake implementation for ACID transactions and schema evolution.", icon: TrendingUp },
  { title: "Analytics & ML Integration", description: "Linking your data lake to advanced analytics and machine learning systems to provide predictive project insights.", icon: BarChart3 },
];

const whyChooseUs: Feature[] = [
    { title: "Tailored, Client-Centric Solutions", description: "We customize services to your unique needs, driving efficiency and real-time project decision-making.", icon: Handshake },
    { title: "Flexible & Transparent Engagements", description: "Our models offer rapid deployment and scalable support, ensuring the best ROI without budget surprises.", icon: DollarSign },
    { title: "Quality Assurance & Risk Mitigation", description: "Rigorous quality controls and regulatory compliance measures safeguard data integrity and minimize risks.", icon: Shield },
    { title: "Trusted Global Partnerships", description: "Leveraging worldwide expertise and vendor certifications to empower your business with agile insights.", icon: Globe },
];

// --- Components ---

const HeroSection = () => (
  <section className="py-16 md:py-24 bg-black text-white overflow-hidden">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Enterprise <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Data Management Services</span>
          <br />
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg text-white/70">
          Streamline, secure, and optimize enterprise data for smarter decisions, predictive project analytics, compliance, and sustainable growth.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/construction-software-demo/"
            className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
          >
            Consult a Data Management Expert <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const SolutionsSection = () => (
  <section className="py-16 md:py-24 bg-zinc-950 text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          Enterprise Data Solutions for <span className="text-pink-400">Project Success</span>
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          We combine the expertise of specialist data engineers and analysts to centralize and secure enterprise data, enabling smarter operations, better project governance, and stringent compliance.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {enterpriseSolutions.map((item, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 shadow-xl border border-pink-500/20 hover:border-pink-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 mb-4 rounded-lg bg-pink-500/20 flex items-center justify-center">
              <item.icon size={24} className="text-pink-400" />
            </div>
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <a
          href="/construction-software-demo/"
          className="group inline-flex items-center justify-center rounded-full border border-purple-500 px-8 py-3 text-base font-semibold text-purple-400 shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white"
        >
          Explore Full List of Data Management Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);

const ModernizationSection = () => (
  <section className="py-16 md:py-24 bg-black text-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
          <span className="text-purple-400">Modernization</span> & Cloud Readiness
        </h2>
        <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
          Move beyond legacy systems. We enable greater agility and better-informed decisions based on real-time data processing in the cloud.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {modernizationServices.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 border-l-4 border-purple-600 bg-zinc-900 rounded-r-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <item.icon size={32} className="text-purple-400 mb-3" />
            <h4 className="text-xl font-semibold text-white">{item.title}</h4>
            <p className="mt-2 text-white/60 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-white mb-4">Certified Platforms We Specialize In:</h3>
        <p className="text-lg text-white/80">
          <span className="text-teal-400 font-medium">Snowflake Consulting</span> &middot; Databricks &middot; AWS Data Services &middot; Google Cloud Tools &middot; Microsoft Azure
        </p>
      </div>
    </div>
  </section>
);

const LakehouseSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Data Lake & <span className="text-pink-400">Lakehouse Solutions</span>
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
            Unlock the full potential of your vast data resources with customized architectures that unify storage and analytics for AI readiness.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {lakehouseSolutions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-zinc-900 rounded-xl p-8 text-center border-t-4 border-pink-600 shadow-2xl flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-pink-500/10 flex items-center justify-center">
                <item.icon size={36} strokeWidth={1.5} className="text-pink-400" />
              </div>
              <h4 className="text-xl font-semibold text-white">{item.title}</h4>
              <p className="mt-4 text-white/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
            <a
                href="/construction-software-demo/"
                className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
            >
                Talk to a Data Lakehouse Expert <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
        </div>
      </div>
    </section>
  );
};

const WhyChooseSection = () => (
    <section className="py-16 md:py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
                    Why Choose PMspace.ai for <span className="text-teal-400">Data Management?</span>
                </h2>
                <p className="text-center text-lg max-w-4xl mx-auto text-white/70 mb-12">
                    Partner with certified data experts to build a reliable foundation for accurate predictions and efficient operations.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {whyChooseUs.map((item, index) => (
                    <motion.div
                        key={index}
                        className="p-6 border-b-4 border-teal-600 bg-zinc-900 rounded-t-lg shadow-lg flex flex-col h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <item.icon size={36} className="text-teal-400 mb-4" />
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="mt-1 text-white/60 text-sm flex-grow">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);


// Main Page Component
const DataManagementPage = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden font-inter">
      <HeroSection />
      {/* Divider with purple/pink gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-transparent"></div>
      <SolutionsSection />
      <ModernizationSection />
      {/* Divider with pink/purple gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-pink-500/50 via-purple-500/50 to-transparent"></div>
      <LakehouseSection />
      <WhyChooseSection />
      
      {/* Final CTA/Contact Section */}
      <section className="py-16 md:py-24 bg-black text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Modernize Your Data Stack for AI-Driven PM?</h2>
        <p className="text-lg max-w-3xl mx-auto text-white/70 mb-8">
          The quality of your projects depends on the quality of your data. Lets build a foundation for accurate predictions and efficient operations.
        </p>
        {/* All links point to /construction-software-demo */}
        <a
          href="/construction-software-demo/" 
          className="group inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/40"
        >
          <Briefcase className="mr-2 h-5 w-5" />
          Lets Modernize Your Data Stack
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </section>
    </div>
  );
};

export default DataManagementPage;