"use client";

import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, Loader, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const CREATE_DEMO_REQUEST = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
      firstName
      lastName
      email
      company
      phoneNumber
      companySize
      projectDetails
    }
  }
`;

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    companySize: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
  });

  const [createDemoRequest, { loading, error, data }] =
    useMutation(CREATE_DEMO_REQUEST);

  const isSuccess = !!data;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phoneNumber: "",
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required.";
      isValid = false;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.length < 8) {
      newErrors.phoneNumber = "A valid phone number is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitting form data:", formData);
      try {
        await createDemoRequest({ variables: { input: formData } });
      } catch (err) {
        console.error("Error submitting demo request:", err);
      }
    }
  };

  return (
    <>
      <style>{`
        /* Reset the entire react-tel-input container */
        .phone-dark .react-tel-input {
          font-family: inherit;
        }

        /* The visible text input */
        .phone-dark .react-tel-input .form-control {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 6px !important;
          color: #ffffff !important;
          font-size: 14px !important;
          height: 42px !important;
          width: 100% !important;
          padding-left: 52px !important;
          box-shadow: none !important;
          transition: border-color 0.2s;
        }
        .phone-dark .react-tel-input .form-control:focus {
          border-color: #a855f7 !important;
          box-shadow: 0 0 0 1px #a855f7 !important;
          outline: none !important;
        }
        .phone-dark .react-tel-input .form-control::placeholder {
          color: rgba(255, 255, 255, 0.3) !important;
        }

        /* Flag dropdown button */
        .phone-dark .react-tel-input .flag-dropdown {
          background: rgba(255, 255, 255, 0.08) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
          border-radius: 6px 0 0 6px !important;
          top: 0 !important;
          bottom: 0 !important;
          width: 48px !important;
        }
        .phone-dark .react-tel-input .flag-dropdown:hover,
        .phone-dark .react-tel-input .flag-dropdown.open {
          background: rgba(255, 255, 255, 0.12) !important;
          border-radius: 6px 0 0 6px !important;
        }
        .phone-dark .react-tel-input .selected-flag {
          background: transparent !important;
          border-radius: 6px 0 0 6px !important;
          width: 48px !important;
          padding: 0 0 0 10px !important;
          display: flex !important;
          align-items: center !important;
        }
        .phone-dark .react-tel-input .selected-flag .arrow {
          border-top-color: rgba(255, 255, 255, 0.5) !important;
          margin-left: 4px !important;
        }
        .phone-dark .react-tel-input .selected-flag .arrow.up {
          border-bottom-color: rgba(255, 255, 255, 0.5) !important;
          border-top: none !important;
        }

        /* Error state */
        .phone-dark.phone-error .react-tel-input .form-control {
          border-color: #ef4444 !important;
        }
        .phone-dark.phone-error .react-tel-input .flag-dropdown {
          border-color: #ef4444 !important;
          border-right-color: rgba(239, 68, 68, 0.3) !important;
        }

        /* Dropdown list */
        .phone-dark .react-tel-input .country-list {
          background: #0f0f17 !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          border-radius: 8px !important;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.8) !important;
          margin-top: 2px !important;
          max-height: 240px !important;
          overflow-y: auto !important;
        }
        .phone-dark .react-tel-input .country-list .country {
          color: rgba(255, 255, 255, 0.8) !important;
          padding: 9px 14px !important;
          display: flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .phone-dark .react-tel-input .country-list .country:hover {
          background: rgba(168, 85, 247, 0.15) !important;
        }
        .phone-dark .react-tel-input .country-list .country.highlight {
          background: rgba(168, 85, 247, 0.25) !important;
        }
        .phone-dark .react-tel-input .country-list .country .country-name {
          color: rgba(255, 255, 255, 0.85) !important;
          font-size: 13px !important;
        }
        .phone-dark .react-tel-input .country-list .country .dial-code {
          color: rgba(255, 255, 255, 0.4) !important;
          font-size: 12px !important;
        }
        .phone-dark .react-tel-input .country-list .divider {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
          margin: 4px 0 !important;
        }

        /* Search box inside dropdown */
        .phone-dark .react-tel-input .country-list .search {
          background: #0f0f17 !important;
          padding: 10px 10px 6px !important;
          position: sticky !important;
          top: 0 !important;
          z-index: 2 !important;
          border-bottom: 1px solid rgba(255,255,255,0.08) !important;
        }
        .phone-dark .react-tel-input .country-list .search-box {
          background: rgba(255, 255, 255, 0.07) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 6px !important;
          color: #fff !important;
          font-size: 13px !important;
          padding: 7px 10px !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }
        .phone-dark .react-tel-input .country-list .search-box:focus {
          border-color: #a855f7 !important;
          outline: none !important;
        }
        .phone-dark .react-tel-input .country-list .search-box::placeholder {
          color: rgba(255, 255, 255, 0.3) !important;
        }

        /* Scrollbar */
        .phone-dark .react-tel-input .country-list::-webkit-scrollbar {
          width: 4px;
        }
        .phone-dark .react-tel-input .country-list::-webkit-scrollbar-track {
          background: transparent;
        }
        .phone-dark .react-tel-input .country-list::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.4);
          border-radius: 2px;
        }
      `}</style>

      <div className="bg-black text-white min-h-screen py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Left — marketing copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Unlock Project Efficiency with{" "}
                <span className="text-purple-400">AI-Powered Insights</span>
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Space AI provides the AECO industry with the tools to eliminate
                delays, control budgets, and enhance collaboration through a
                single, intelligent platform.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Prevent budget overruns with predictive analytics.",
                  "Mitigate risks with real-time project tracking.",
                  "Automate tedious manual processes.",
                  "Enhance stakeholder communication.",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              className="bg-white/5 p-8 rounded-2xl border border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {isSuccess ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h2 className="text-2xl font-bold">Demo Request Sent!</h2>
                  <p className="text-white/70 mt-2">
                    Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-2">
                    Schedule Your Personalized Demo
                  </h2>
                  <p className="text-white/60 mb-8">
                    Let&apos;s build the future, together.
                  </p>
                  <form onSubmit={handleSubmit} noValidate>

                    {/* First + Last Name */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-white/80">
                          First name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`mt-1 block w-full bg-white/5 border ${
                            errors.firstName ? "border-red-500" : "border-white/15"
                          } rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                        />
                        {errors.firstName && (
                          <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-white/80">
                          Last name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`mt-1 block w-full bg-white/5 border ${
                            errors.lastName ? "border-red-500" : "border-white/15"
                          } rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                        />
                        {errors.lastName && (
                          <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="mt-5">
                      <label htmlFor="email" className="block text-sm font-medium text-white/80">
                        Email*
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-white/5 border ${
                          errors.email ? "border-red-500" : "border-white/15"
                        } rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="mt-5">
                      <label className="block text-sm font-medium text-white/80 mb-1">
                        Phone number*
                      </label>
                      <div className={`phone-dark${errors.phoneNumber ? " phone-error" : ""}`}>
                        <PhoneInput
                          country="us"
                          value={formData.phoneNumber}
                          onChange={(phone) =>
                            setFormData((prev) => ({
                              ...prev,
                              phoneNumber: "+" + phone,
                            }))
                          }
                          enableSearch
                          searchPlaceholder="Search country..."
                          placeholder="Enter phone number"
                          inputProps={{ name: "phoneNumber", id: "phoneNumber" }}
                        />
                      </div>
                      {errors.phoneNumber && (
                        <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div className="mt-5">
                      <label htmlFor="company" className="block text-sm font-medium text-white/80">
                        Company*
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-white/5 border ${
                          errors.company ? "border-red-500" : "border-white/15"
                        } rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors`}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Company Size */}
                    <div className="mt-5">
                      <label htmlFor="companySize" className="block text-sm font-medium text-white/80">
                        What is your company size?
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-white/5 border border-white/15 rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                      >
                        <option value="" className="bg-[#0f0f17]">Please select</option>
                        <option value="1-10" className="bg-[#0f0f17]">1-10 employees</option>
                        <option value="11-50" className="bg-[#0f0f17]">11-50 employees</option>
                        <option value="51-200" className="bg-[#0f0f17]">51-200 employees</option>
                        <option value="201-1000" className="bg-[#0f0f17]">201-1000 employees</option>
                        <option value="1000+" className="bg-[#0f0f17]">1000+ employees</option>
                      </select>
                    </div>

                    {/* Project Details */}
                    <div className="mt-5">
                      <label htmlFor="projectDetails" className="block text-sm font-medium text-white/80">
                        Tell us a little bit about your project.
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={3}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        maxLength={500}
                        className="mt-1 block w-full bg-white/5 border border-white/15 rounded-md py-2.5 px-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                      />
                      <p className="text-xs text-white/40 mt-1 text-right">
                        {formData.projectDetails.length}/500
                      </p>
                    </div>

                    {/* Submit */}
                    <div className="mt-7">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {loading ? (
                          <Loader className="animate-spin w-4 h-4" />
                        ) : (
                          "Book a Demo"
                        )}
                      </button>
                    </div>

                    {/* Mutation error */}
                    {error && (
                      <div className="mt-4 flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <p>{error.message || "Something went wrong. Please try again."}</p>
                      </div>
                    )}
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Popular Tools */}
      <div className="container mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60 mb-6">
            Want to explore specific capabilities before your demo?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["AI Assistant", "/tools/ai-assistant/"],
              ["Project Management", "/tools/construction-project-management-software/"],
              ["Analytics", "/tools/construction-analytics-software/"],
              ["Scheduling", "/tools/project-scheduling-software/"],
              ["Document Management", "/tools/construction-document-management-software/"],
              ["Expense Management", "/tools/construction-expense-management-software/"],
              ["Supply Chain", "/tools/construction-supply-chain-management-software/"],
              ["AI Recommendations", "/tools/ai-recommendation-engine/"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 hover:text-white hover:border-purple-500/50 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}


