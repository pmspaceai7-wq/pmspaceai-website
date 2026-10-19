"use client";

import {useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { useState } from "react";
import { CheckCircle, Loader, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// GraphQL Mutation
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

export default function ESignDemoRequestForm() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const validateForm = () => {
    const newErrors = { 
        firstName: "", 
        lastName: "", 
        email: "", 
        company: "", 
        phoneNumber: "" 
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
    
    if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required.";
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createDemoRequest({ variables: { input: formData } });
      } catch (err) {
        console.error("Error submitting demo request:", err);
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transform Your Document Workflow with{" "}
              <span className="text-purple-400">Space Sign</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Space Sign provides businesses with secure, legally compliant
              e-signature solutions that streamline document signing, reduce
              turnaround time, and enhance team collaboration.
            </p>
            <div className="mt-8 space-y-4">
              {[
                "Send and sign documents in seconds with ease.",
                "Ensure legal compliance with global e-signature standards.",
                "Automate document workflows and reduce manual tasks.",
                "Track document status in real-time with complete audit trails.",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-purple-400 mr-3 flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

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
                  Let&apos;s simplify your document signing process.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                  {/* First + Last Name */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-white/80"
                      >
                        First name*
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-white/10 border ${
                          errors.firstName ? "border-red-500" : "border-white/20"
                        } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-white/80"
                      >
                        Last name*
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`mt-1 block w-full bg-white/10 border ${
                          errors.lastName ? "border-red-500" : "border-white/20"
                        } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-1 block w-full bg-white/10 border ${
                        errors.email ? "border-red-500" : "border-white/20"
                      } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div className="mt-6">
                    <label
                      htmlFor="phoneNumber"
                      className="block text-sm font-medium text-white/80"
                    >
                      Phone number with Country Code*
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter the Phone Number with Country Code"
                      className={`mt-1 block w-full bg-white/10 border ${
                        errors.phoneNumber ? "border-red-500" : "border-white/20"
                      } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                    />
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phoneNumber}
                        </p>
                      )}
                  </div>

                  {/* Company */}
                  <div className="mt-6">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white/80"
                    >
                      Company*
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`mt-1 block w-full bg-white/10 border ${
                        errors.company ? "border-red-500" : "border-white/20"
                      } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Company Size */}
                  <div className="mt-6">
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium text-white/80"
                    >
                      What is your company size?
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className="mt-1 block w-full bg-black border border-white/20 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Please select</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div className="mt-6">
                    <label
                      htmlFor="projectDetails"
                      className="block text-sm font-medium text-white/80"
                    >
                      Tell us about your document signing needs.
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      maxLength={500}
                      className="mt-1 block w-full bg-white/10 border border-white/20 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                    <p className="text-xs text-white/50 mt-1 text-right">
                      {formData.projectDetails.length}/500
                    </p>
                  </div>

                  {/* Submit */}
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader className="animate-spin w-5 h-5" />
                      ) : (
                        "Book a Demo"
                      )}
                    </button>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="mt-4 flex items-center text-red-400">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <p>
                        {error.message || "Something went wrong. Please try again."}
                      </p>
                    </div>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}