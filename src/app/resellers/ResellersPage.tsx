"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Handshake,
  TrendingUp,
  Users,
  Headphones,
  GraduationCap,
  Megaphone,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Define the interface for a Reseller
interface Reseller {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  logoSrc: string;
  address: string;
  website: string;
}

// Reseller data — GLUON IT remains our featured Indonesia partner
const resellersData: Reseller[] = [
  {
    id: "gluon-it",
    name: "GLUON IT Software House",
    country: "Indonesia",
    countryFlag: "/assets/images/indonesia-flag-icon.svg",
    logoSrc: "/assets/images/gluonit.png",
    address:
      "Jl Raya Cicalengka Timur Kp Cikarmajaya RT 01 RW 11 Ds. Margaasih Kecamatan Cicalengka, Kab Bandung Jawa Barat 40395",
    website: "https://gluon-it.com",
  },
];

const partnerBenefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Competitive Margins",
    description:
      "Earn attractive recurring commissions and margins on every Space AI subscription you sell, with tiered incentives as your business grows.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Training & Certification",
    description:
      "Access comprehensive product training, sales enablement, and technical certification programs to position your team as trusted advisors.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Dedicated Partner Support",
    description:
      "Work with a dedicated partner success manager and priority technical support to ensure smooth implementations and satisfied customers.",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "Co-Marketing Opportunities",
    description:
      "Participate in joint webinars, case studies, event sponsorships, and demand-generation campaigns to build pipeline together.",
  },
];

const idealPartnerTraits = [
  "Construction technology consultants and system integrators",
  "ERP, BIM, or design software resellers expanding into project controls",
  "Regional IT service providers with strong contractor relationships",
  "Firms focused on digital transformation for owners and developers",
];

const ResellersPage = () => {
  return (
    <section id="resellers" className="py-8 sm:py-4 md:py-8 relative bg-black min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(107,33,168,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(20,184,166,0.1),transparent_70%)]"></div>

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 mb-6">
            <Handshake className="w-4 h-4" /> Partner Program
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 pb-4">
            Partner with Space AI
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-white/70 font-light leading-relaxed">
            Join the Space AI reseller and partner ecosystem to bring AI-powered construction
            management to contractors, owners, and project teams around the world. We combine
            innovative technology with the support and economics you need to grow your business.
            Our partners earn competitive margins, receive dedicated enablement, and gain access
            to a product that is reshaping how the construction industry plans, executes, and
            delivers projects.
          </p>
        </motion.div>

        {/* Why Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Why Become a Space AI Reseller?
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            Construction is one of the largest and least digitized industries in the world.
            Forward-thinking contractors and owners are actively replacing legacy tools with
            AI-native platforms that can predict risk, automate documentation, and connect
            fragmented project teams. As a Space AI partner, you are positioned at the center
            of that transformation.
          </p>
          <p className="text-white/70 leading-relaxed">
            Our partner program is designed for companies that want to expand their portfolio
            with a differentiated, high-growth construction technology solution. Whether you
            are a regional IT reseller, a BIM consultant, an ERP implementation firm, or a
            construction consultancy, Space AI provides the product, training, and go-to-market
            resources to help you win.
          </p>
          <p className="text-white/70 leading-relaxed mt-6">
            Partners can engage at multiple levels, from referral relationships to full
            reseller and implementation partnerships. Each tier includes appropriate training,
            support, and commercial terms, allowing you to grow your Space AI practice at a
            pace that matches your capabilities and market opportunity.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {partnerBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400 w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Ideal Partner Profile + How to Apply */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Ideal Partner Profile</h2>
            </div>
            <ul className="space-y-4">
              {idealPartnerTraits.map((trait, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span>{trait}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-500/20 rounded-xl text-teal-400">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">How to Apply</h2>
            </div>
            <ol className="space-y-4 text-white/70 list-decimal list-inside">
              <li>
                <strong className="text-white/90">Apply online</strong> — complete the partner
                application form with your company profile and target markets.
              </li>
              <li>
                <strong className="text-white/90">Discovery call</strong> — meet with our
                partner team to align on goals, territories, and program fit.
              </li>
              <li>
                <strong className="text-white/90">Onboarding</strong> — complete certification
                training and gain access to sales and technical resources.
              </li>
              <li>
                <strong className="text-white/90">Go to market</strong> — start selling and
                implementing Space AI with ongoing partner support.
              </li>
            </ol>
            <Link
              href="/contact-sales/"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Become a Reseller <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Global Reach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-blue-500/20 rounded-xl text-blue-400 mx-auto">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Global Reach, Local Support</h2>
          <p className="text-white/70 leading-relaxed">
            Space AI is headquartered with a growing international presence. We work with
            resellers and implementation partners to deliver local expertise, language support,
            and on-the-ground service in key construction markets. Our current priority regions
            include Southeast Asia, the Middle East, North America, and Europe.
          </p>
          <p className="text-white/70 leading-relaxed mt-4">
            We believe that successful construction technology adoption requires more than
            software—it requires trusted local advisors who understand regional contracting
            practices, regulatory environments, and customer expectations. That is why we
            invest in partner enablement and co-selling motions that set both parties up for
            long-term success.
          </p>
        </motion.div>

        {/* Featured Partner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Featured Partner</h2>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            GLUON IT Software House is our authorized partner in Indonesia, helping local
            contractors and developers discover, implement, and succeed with Space AI.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {resellersData.map((reseller) => (
              <Link
                key={reseller.id}
                href={reseller.website}
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-full flex flex-col bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-8 transition-all duration-300 hover:border-white/20 hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  {reseller.logoSrc && (
                    <Image
                      src={reseller.logoSrc}
                      alt={`${reseller.name} Logo`}
                      width={96}
                      height={96}
                      className="rounded-lg mr-6 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{reseller.name}</h3>
                    <div className="flex items-center mt-2">
                      <Image
                        src={reseller.countryFlag}
                        alt={`${reseller.country} Flag`}
                        width={24}
                        height={24}
                        className="mr-2"
                      />
                      <p className="text-white/60 text-base font-light">{reseller.country}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className="text-white/70 text-sm font-light mb-4">
                    <strong className="block text-white/90 mb-1">Address:</strong>
                    {reseller.address}
                  </p>
                </div>

                <div className="mt-auto">
                  <span className="text-teal-400 font-medium text-sm inline-flex items-center gap-1">
                    Visit Website <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Grow with Space AI?
          </h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            Join a partner ecosystem that is helping construction teams work smarter, predict
            risk earlier, and deliver projects with confidence. Apply today to become an
            authorized Space AI reseller and start building a recurring revenue stream in one
            of the most exciting sectors in enterprise software.
          </p>
          <Link
            href="/contact-sales/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Apply to Become a Reseller <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResellersPage;
