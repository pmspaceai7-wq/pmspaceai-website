"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Code, Server, Database, Cloud, GitBranch } from "lucide-react";
import Link from "next/link";

const jobListings = [
  {
    title: "MERN Stack Developer",
    experience: "Freshers Welcome",
    description: "Build scalable web applications using React, Next.js, MongoDB, NestJS, GraphQL, and Node.js.",
    icon: Code,
    color: "from-blue-500 to-cyan-400",
    type: "Full-time",
    location: "Remote",
    id: "mern-developer"
  },
  {
    title: "Senior MERN Stack Developer",
    experience: "5 to 10 Years Experience",
    description: "Lead development of cutting-edge web applications with expertise in the MERN stack and related technologies.",
    icon: Server,
    color: "from-purple-500 to-blue-600",
    type: "Full-time, Part-time",
    location: "Remote",
    id: "senior-mern-developer"
  },

  {
  title: "Python Developer",
  experience: "3 to 5 Years Experience",
  description: "Design scalable AI systems using Python, Neo4j, RAG pipelines, and vLLM optimization.",
  icon: Code,
  color: "from-green-500 to-teal-400",
  type: "Full-time",
  location: "Remote",
  id:"python-developer-ai",
}
];

export default function CareersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-8 sm:py-6 md:py-10">
      <div className="container px-4 sm:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <div className="relative flex flex-col items-center mb-4 md:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 text-center">
              Careers
            </h1>
            <div className="flex items-center justify-center gap-5 mt-3 sm:mt-0 sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
              <a
                href="https://wellfound.com/jobs/4313221-mern-stack-developer-intern"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View PMSPACE AI Jobs on Wellfound"
                title="View PMSPACE AI Jobs on Wellfound"
                className="opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.35)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
              >
                <Image src="/assets/images/wellfound-logo.svg" alt="Wellfound" width={120} height={40} className="object-contain" />
              </a>
              <a
                href="https://www.naukri.com/spaceaapp-jobs-careers-125589152"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View PMSPACE AI Jobs on Naukri"
                title="View PMSPACE AI Jobs on Naukri"
                className="opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.35)] focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded"
              >
                <Image src="/assets/images/naukri-logo.svg" alt="Naukri" width={120} height={40} className="object-contain" />
              </a>
            </div>
          </div>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light text-center">
            Join our team and be a part of shaping the future of construction with AI.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10 justify-center"
        >
          {jobListings.map((job, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden"
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <div className={`bg-gradient-to-r ${job.color} p-3 rounded-lg w-fit mb-5`}>
                  <job.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {job.title}
                  </h3>
                  <span className="text-sm text-white/70 mt-1 md:mt-0 md:ml-2 px-3 py-1 bg-white/10 rounded-full">
                    {job.experience}
                  </span>
                </div>
                
                <p className="text-white/70 text-sm sm:text-base font-light mb-4">
                  {job.description}
                </p>
                
                <div className="mt-auto space-y-2 text-sm text-white/70">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center">
                    <Cloud className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
                
                <Link href={`/careers/${job.id}`}>
                  <motion.div
                    className="mt-6 flex items-center text-sm text-white/50 hover:text-white cursor-pointer group"
                    whileHover={{ x: 5 }}
                  >
                    View job details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-white/70 mb-4">{"Don't see a position that fits your skills?"}</p>
          <a 
            href="mailto:careers@pmspace.ai" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            <GitBranch className="w-5 h-5 mr-2" />
            Send us your resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
