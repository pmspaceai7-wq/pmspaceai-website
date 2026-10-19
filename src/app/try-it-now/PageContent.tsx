"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowLeft, Briefcase, User, Loader } from "lucide-react";
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4200/graphql";

async function createDemoRequestFetch(input: {
  firstName: string; lastName: string; email: string;
  company: string; formType: string; projectDetails: string;
}) {
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
        createDemoRequest(input: $input) { _id email }
      }`,
      variables: { input },
    }),
  });
  const body = await res.json();
  if (body.errors && body.errors.length > 0) {
    throw new Error(body.errors[0].message);
  }
}

const FREETIER_MODULE_ID = "57b32127-531c-49ef-a91f-d9ffad35d1ff";
const APP_LOGIN_URL = "https://app.pmspace.ai/login";
const ONBOARDING_GUIDE_PDF = "/spaceaionboarding-guide.pdf";

type SelectionKey = "purpose" | "industry" | "service";

interface SelectionsState {
  purpose: string;
  industry: string;
  service: string;
}

interface SignupForm {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
}

const industries = [
  "Government",
  "Real Estate",
  "Education",
  "Health Care",
  "Transportation",
  "Infrastructure",
  "Defense",
  "Oil and Gas",
  "Hospitality",
  "Other",
];

const services = [
  "Project Management",
  "Field Teams",
  "Design/Creative",
  "Engineering",
  "Executive",
  "HR",
  "IT",
  "Sales/Marketing",
  "Finance",
  "Legal",
];

const flowSteps = [
  { id: 1, title: "Introduction" },
  { id: 2, title: "Customize your workspace" },
  { id: 3, title: "Services Required" },
  { id: 4, title: "Create your free account" },
];

export default function TryItNowFlow() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState<SelectionsState>({
    purpose: "",
    industry: "",
    service: "",
  });
  const [signupForm, setSignupForm] = useState<SignupForm>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
  });
  const [formErrors, setFormErrors] = useState<Partial<SignupForm>>({});
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const handleSelection = (type: SelectionKey, value: string) => {
    const newSelections = { ...selections, [type]: value };
    setSelections(newSelections);
    if (step < 3) {
      setStep(step + 1);
    } else {
      setStep(4);
    }
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const validateForm = (): boolean => {
    const errors: Partial<SignupForm> = {};
    if (!signupForm.firstName.trim()) errors.firstName = "First name is required";
    if (!signupForm.lastName.trim()) errors.lastName = "Last name is required";
    if (!signupForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupForm.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!signupForm.company.trim()) errors.company = "Company name is required";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignupSubmit = async () => {
    if (!validateForm()) return;
    setSubmitting(true);
    try {
       await createDemoRequestFetch({
        firstName: signupForm.firstName.trim(),
        lastName: signupForm.lastName.trim(),
        email: signupForm.email.trim(),
        company: signupForm.company.trim(),
        formType: "free_tier_signup",
        projectDetails: `Purpose: ${selections.purpose}, Industry: ${selections.industry}, Service: ${selections.service}`,
      });
    } catch (err: any) {
      setFormErrors({ email: err.message || "Failed to verify email. Please try again." });
      setSubmitting(false);
      return;
    }
    const params = new URLSearchParams({
      type: "Freetier",
      moduleId: FREETIER_MODULE_ID,
      invite: "guest",
      orgName: signupForm.company.trim(),
      firstName: signupForm.firstName.trim(),
      email: signupForm.email.trim(),
    });
    window.location.href = `${APP_LOGIN_URL}?${params.toString()}`;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              Hi, let&apos;s customize your workspace. What brings you here today?
            </h2>
            <div className="space-y-4">
              {[
                { name: "Business", icon: Briefcase },
                { name: "Personal", icon: User },
              ].map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleSelection("purpose", option.name)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selections.purpose === option.name
                      ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-white"
                  }`}
                >
                  <div className="flex items-center">
                    <option.icon className="w-6 h-6 mr-3" />
                    <span className="text-lg font-medium">{option.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl p-8"
          >
            <div className="flex items-center mb-8">
              <button
                onClick={goBack}
                className="mr-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-3xl font-bold text-white">
                Pick your company&apos;s industry
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection("industry", option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selections.industry === option
                      ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-white"
                  }`}
                >
                  <span className="text-md font-medium">{option}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl p-8"
          >
            <div className="flex items-center mb-8">
              <button
                onClick={goBack}
                className="mr-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-3xl font-bold text-white">
                Which service are you looking for?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelection("service", option)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    selections.service === option
                      ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 text-white"
                  }`}
                >
                  <span className="text-md font-medium">{option}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl p-8"
          >
            <div className="flex items-center mb-2">
              <button
                onClick={goBack}
                className="mr-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <h2 className="text-3xl font-bold text-white">
                Create your free account
              </h2>
            </div>
            <p className="text-white/60 mb-8 ml-14">
              Get instant access to Files &amp; Forms — no credit card required.
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name *"
                    value={signupForm.firstName}
                    onChange={(e) =>
                      setSignupForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      formErrors.firstName ? "border-red-400" : "border-white/20"
                    }`}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name *"
                    value={signupForm.lastName}
                    onChange={(e) =>
                      setSignupForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                      formErrors.lastName ? "border-red-400" : "border-white/20"
                    }`}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-400 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Work email *"
                  value={signupForm.email}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    formErrors.email ? "border-red-400" : "border-white/20"
                  }`}
                />
                {formErrors.email && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company name *"
                  value={signupForm.company}
                  onChange={(e) =>
                    setSignupForm((f) => ({ ...f, company: e.target.value }))
                  }
                  className={`w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ${
                    formErrors.company ? "border-red-400" : "border-white/20"
                  }`}
                />
                {formErrors.company && (
                  <p className="text-red-400 text-sm mt-1">{formErrors.company}</p>
                )}
              </div>

              <button
                onClick={handleSignupSubmit}
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Setting up your account…
                  </>
                ) : (
                  "Try it now free"
                )}
              </button>

              <p className="text-white/40 text-sm text-center">
                You&apos;ll continue with Google or Microsoft sign-in. No password needed.
              </p>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col relative z-20"
            >
              <div className="mb-8">
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Get Started Free
                </h1>
                <p className="text-xl text-white/70">
                  Set up your workspace in just a few steps
                </p>
              </div>
              <div className="mb-8">
                <p className="text-white/70 max-w-xl">
                  Download the Space AI onboarding guide and follow the recommended setup checklist while you complete the flow.
                </p>
              </div>

              <div className="flex flex-col">
                {flowSteps.map((flowStep, index) => (
                  <div key={flowStep.id} className="flex items-start">
                    <div className="flex flex-col items-center mr-4">
                      <motion.div
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                          step > flowStep.id
                            ? "bg-purple-600 border-purple-600 text-white"
                            : step === flowStep.id
                            ? "border-purple-600 text-purple-600 bg-purple-600/10"
                            : "border-white/20 text-white/50"
                        }`}
                        animate={{ scale: step === flowStep.id ? 1.1 : 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step > flowStep.id ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          flowStep.id
                        )}
                      </motion.div>
                      {index < flowSteps.length - 1 && (
                        <div
                          className={`h-16 w-0.5 mt-2 transition-colors duration-500 ${
                            step > flowStep.id ? "bg-purple-600" : "bg-white/20"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div
                        className={`text-lg font-semibold transition-colors duration-300 ${
                          step === flowStep.id
                            ? "text-white"
                            : step > flowStep.id
                            ? "text-purple-400"
                            : "text-white/50"
                        }`}
                      >
                        {flowStep.title}
                      </div>
                      {step === flowStep.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-white/60 text-sm mt-1"
                        >
                          {step === 1 && "Choose what brings you to our platform today"}
                          {step === 2 && "Select your industry to personalise your experience"}
                          {step === 3 && "Pick the service that matches your needs"}
                          {step === 4 && "Enter your details to get instant free access"}
                        </motion.div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((step - 1) / (flowSteps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

            </motion.div>
          </div>

          <div className="lg:pt-0">
            <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-2xl shadow-black/30">
          <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between bg-slate-900/75 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-slate-400 mb-2">
                Onboarding guide
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Launch checklist & setup steps
              </h3>
            </div>
            <a
              href={ONBOARDING_GUIDE_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/20 transition hover:bg-white/90"
            >
              Open in new tab
            </a>
          </div>
          <div className="p-3 bg-slate-950">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white">
              <iframe
                src={ONBOARDING_GUIDE_PDF}
                title="Space AI Onboarding Guide"
                className="w-full min-h-[760px]"
              />
            </div>
          </div>
          <div className="px-6 py-4 bg-slate-900/75 text-sm text-slate-400 border-t border-white/10">
            <p>
              Open the guide after completing the flow for recommended setup steps, launch checklist items, and a smooth onboarding experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
