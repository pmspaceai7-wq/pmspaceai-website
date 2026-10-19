// components/DemoRequestForm.tsx
"use client";

// Removed external dependencies: @apollo/client/react, @apollo/client, next/navigation
import { useState, useEffect } from "react";
import { CheckCircle, Loader, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder data for simulating query parameters (since useSearchParams is removed)
const mockSearchParams = {
  get: (key: string) => {
    // In a real environment, this would read from the URL.
    // We mock a scenario where a user completed the flow:
    if (key === 'purpose') return 'Business';
    if (key === 'industry') return 'Real Estate';
    if (key === 'service') return 'Project Management';
    return null;
  }
};


export default function ContactSalesPage() {
  // const searchParams = useSearchParams(); // Removed due to import error
  const searchParams = mockSearchParams; // Use mock instead
  const purpose = searchParams.get('purpose');
  const industry = searchParams.get('industry');
  const service = searchParams.get('service');

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: "",
    companySize: "",
    projectDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Use a useEffect hook to set the initial project details from the URL
  useEffect(() => {
    let details = "";
    if (purpose) {
      details += `My purpose for using SpaceAI is for a ${purpose} project.`;
    }
    if (industry) {
      details += ` My company's industry is ${industry}.`;
    }
     if (service) {
     details += ` The service I'm looking for is ${service}.`;
   }
    
    // Only update if there are selections to populate
    if (details) {
      setFormData(prev => ({ ...prev, projectDetails: details.trim() }));
    }
  }, [purpose, industry, service]);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phoneNumber: "",
  });

  // Replaced Apollo useMutation with local state and simulated API call
  // const [createDemoRequest, { loading, error, data }] = useMutation(CREATE_DEMO_REQUEST);
  // const isSuccess = !!data;

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
    
    // FIX 3: Mandatory phone number validation
    if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required, including country code.";
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Replaced Apollo/GraphQL function with a simulation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setError(null);
      // Simulate API call delay
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        // Simulate successful data submission
        console.log("Submitting form data:", formData);
        setIsSuccess(true);
      } catch (err) {
        // Simulate API error
        setError(new Error("Form submission failed. Please check your network."));
        setIsSuccess(false);
      } finally {
        setLoading(false);
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
                <h2 className="text-2xl font-bold">Thanyou For Registering</h2>
                <p className="text-white/70 mt-2">
                  Our team will get back to you shortly .
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-2">
                  Please register to Get your Custom Software
                </h2>
                <p className="text-white/60 mb-8">
                  Let&apos;s build the future, together.
                </p>
                <form onSubmit={handleSubmit} noValidate>
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

                  {/* Phone Number - UPDATED TO BE REQUIRED */}
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
                      // UPDATED: Conditional border class
                      className={`mt-1 block w-full bg-white/10 border ${
                        errors.phoneNumber ? "border-red-500" : "border-white/20"
                      } rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-purple-500 focus:border-purple-500`}
                    />
                    {/* UPDATED: Added error message display */}
                    {errors.phoneNumber && (
                        <p className="text-red-500 text-xs mt-1">
                            {errors.phoneNumber}
                        </p>
                    )}
                  </div>
                  
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
                  <div className="mt-6">
                    <label
                      htmlFor="projectDetails"
                      className="block text-sm font-medium text-white/80"
                    >
                      Tell us a little bit about your project.
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
                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <Loader className="animate-spin w-5 h-5" />
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
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
