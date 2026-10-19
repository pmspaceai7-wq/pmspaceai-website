"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, Clock, MapPin, Calendar, Check, HelpCircle, Award } from "lucide-react";

type JobResponsibility = {
  category: string;
  tasks: string[];
};

export type JobDetail = {
  title: string;
  experience: string;
  minExperience?: string;
  location: string;
  workLocation?: string;
  type: string;
  email: string;
  overview: string;
  companyProfile?: string;
  responsibilities: JobResponsibility[];
  requirements: string[];
  preferred: string[];
  softSkills: string[];
  benefits: string[];
  applicationQuestions?: string[];
  certification?: string[];
  wellfoundUrl?: string;
  naukriUrl?: string;
};

function ApplyButtons({ job }: { job: JobDetail }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={job.wellfoundUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
      >
        <Image src="/assets/images/wellfound.png" alt="Wellfound" width={120} height={40} className="object-contain" />
        <span>Apply via Wellfound</span>
      </a>
      <a
        href={job.naukriUrl || "#"}
        target={job.naukriUrl ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
      >
        <Image src="/assets/images/Naukri.png" alt="Naukri" width={120} height={40} className="object-contain" />
        <span>Apply via Naukri</span>
      </a>
    </div>
  );
}

export default function CareerJobClient({ job }: { job: JobDetail }) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container px-4 sm:px-6 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">{job.title}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start text-white/70">
                <Briefcase className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-start text-white/70">
                <Clock className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-start text-white/70">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>{job.location}</span>
              </div>
              {job.minExperience && (
                <div className="flex items-start text-white/70">
                  <Calendar className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Min Experience: {job.minExperience}</span>
                </div>
              )}
              {job.workLocation && (
                <div className="flex items-start text-white/70">
                  <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{job.workLocation}</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-white">Overview</h2>
              <p className="text-white/70">{job.overview}</p>
            </div>

            <div className="mt-6">
              <ApplyButtons job={job} />
            </div>
          </div>

          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Key Responsibilities</h2>
              <div className="space-y-6">
                {job.responsibilities.map((resp, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-medium mb-3 text-white">{resp.category}</h3>
                    <ul className="space-y-2">
                      {resp.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-white/70">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {job.preferred.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">Preferred Qualifications</h2>
                <ul className="space-y-2">
                  {job.preferred.map((pref, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{pref}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {job.softSkills.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">Soft Skills</h2>
                <ul className="space-y-2">
                  {job.softSkills.map((skill, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
            >
              <h2 className="text-2xl font-semibold mb-6 text-white">What We Offer</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {job.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/70">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {job.applicationQuestions && job.applicationQuestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">Application Questions</h2>
                <ul className="space-y-3">
                  {job.applicationQuestions.map((q, index) => (
                    <li key={index} className="flex items-start">
                      <HelpCircle className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{q}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {job.certification && job.certification.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl overflow-hidden p-6 sm:p-8 md:p-10"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white">License / Certification</h2>
                <ul className="space-y-2">
                  {job.certification.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <Award className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white/70">{cert}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 text-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-white">Ready to Apply?</h2>
            <p className="text-white/70 mb-6">
              {"Send your resume and a brief cover letter explaining why you're a great fit for this role."}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ApplyButtons job={job} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
