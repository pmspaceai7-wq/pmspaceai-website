"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";
import { CheckCircle, ExternalLink, Loader } from "lucide-react";

// Use the DemoRequest mutation from your backend
const CREATE_DEMO_REQUEST_MUTATION = gql`
  mutation CreateDemoRequest($input: CreateDemoRequestInput!) {
    createDemoRequest(input: $input) {
      _id
    }
  }
`;

type ContactFormData = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const ContactFormCopilotBridge = dynamic(
  () => import("./ContactFormCopilotBridge"),
  { ssr: false }
);

const contactFaqs = [
  {
    question: "What is a System of Intelligence for construction?",
    answer:
      "It goes beyond Systems of Record by actively analyzing data to generate predictions, recommendations, and automated actions. It continuously learns from your projects.",
  },
  {
    question: "How is it different from construction ERP?",
    answer:
      "ERP records what happened. A System of Intelligence predicts what will happen and recommends preventive actions - flagging cost overruns weeks before they materialize.",
  },
  {
    question: "What data does it analyze?",
    answer:
      "Schedule data, costs, RFI patterns, weather, labor productivity, material deliveries, subcontractor history, safety data, and document submissions - all correlated for early warnings.",
  },
  {
    question: "How does it improve over time?",
    answer:
      "ML models use reinforcement learning. Accuracy starts at 85% and reaches 92-95% after 5+ projects, learning your company-specific patterns and risk factors.",
  },
  {
    question: "Can existing data be migrated?",
    answer:
      "Yes. Supports migration from Primavera P6, MS Project, Procore, Excel, and major construction platforms. Historical data trains AI models from day one.",
  },
];

const aiSummaryLinks = [
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/?prompt=As+a+construction+manager%2C+I+want+to+know+what+makes+PM+Space+AI+the+best+way+to+manage+our+construction+projects+including+scheduling%2C+procurement%2C+delivery%2C+documentation+and+reporting",
    iconSrc: "/assets/images/ai-icons/chatgpt.svg",
  },
  {
    name: "Claude",
    href: "https://claude.ai/new?q=As%20a%20construction%20manager%2C%20I%20want%20to%20know%20what%20makes%20PM%20Space%20AI%20the%20best%20way%20to%20manage%20our%20construction%20projects%20including%20scheduling%2C%20procurement%2C%20delivery%2C%20documentation%20and%20reporting.",
    iconSrc: "/assets/images/ai-icons/claude.svg",
  },
  {
    name: "Google AI",
    href: "https://www.google.com/search?udm=50&aep=11&q=As%20a%20construction%20manager%2C%20I%20want%20to%20know%20what%20makes%20PM%20Space%20AI%20the%20best%20way%20to%20manage%20our%20construction%20projects%20including%20scheduling%2C%20procurement%2C%20delivery%2C%20documentation%20and%20reporting.",
    iconSrc: "/assets/images/ai-icons/gemini.svg",
  },
  {
    name: "Perplexity",
    href: "https://www.perplexity.ai/search/new?q=As%20a%20construction%20manager%2C%20I%20want%20to%20know%20what%20makes%20PM%20Space%20AI%20the%20best%20way%20to%20manage%20our%20construction%20projects%20including%20scheduling%2C%20procurement%2C%20delivery%2C%20documentation%20and%20reporting.",
    iconSrc: "/assets/images/ai-icons/perplexity.svg",
  },
  {
    name: "Grok",
    href: "https://x.com/i/grok?text=As%20a%20construction%20manager%2C%20I%20want%20to%20know%20what%20makes%20PM%20Space%20AI%20the%20best%20way%20to%20manage%20our%20construction%20projects%20including%20scheduling%2C%20procurement%2C%20delivery%2C%20documentation%20and%20reporting",
    iconSrc: "/assets/images/ai-icons/grok.svg",
  },
];

const ContactForm = ({ enableCopilot = false }: { enableCopilot?: boolean }) => {
  // 1. STATE UPDATE: Add phoneNumber to formData
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phoneNumber: "", // <-- NEW
    message: "",
  });

  const [createDemoRequest, { loading, error, data }] = useMutation(
    CREATE_DEMO_REQUEST_MUTATION
  );
  const isSuccess = !!data;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Browser's built-in HTML validation will handle mandatory fields.
    // Additional JavaScript validation could be added here if needed,
    // but relying on the 'required' attribute for simple cases is fine.

    const nameParts = formData.name.split(" ");
    const firstName = nameParts.shift() || "";
    const lastName = nameParts.join(" ") || ".";

    const mutationInput = {
      firstName: firstName,
      lastName: lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber, // <-- INCLUDED IN MUTATION INPUT
      projectDetails: formData.message,
      company: "Not Mentioned",
      formType: "contact",
    };

    try {
      await createDemoRequest({ variables: { input: mutationInput } });
    } catch (err) {
      console.error("Error submitting contact/demo request:", err);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-6 text-white shadow-[0_40px_120px_rgba(7,10,28,0.4)] sm:p-8">
      {enableCopilot ? (
        <ContactFormCopilotBridge formData={formData} setFormData={setFormData} />
      ) : null}
      {isSuccess ? (
        <div className="text-center py-10">
          <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold">Message Sent!</h2>
          <p className="text-white/70 mt-2 max-w-xl mx-auto">
            Thanks for reaching out. We&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              Contact Us
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-semibold text-white">
                Send us a message and we&apos;ll help you get started.
              </h2>
              <p className="max-w-xl text-white/70 leading-relaxed">
                Share your details and project needs, and our team will reach out with a personalized response and next steps.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/faq/"
                  className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300 transition hover:text-violet-100"
                >
                  FAQ
                </Link>
                <Link
                  href="/faq/"
                  className="text-sm font-medium text-white/65 underline underline-offset-4 transition hover:text-white"
                >
                  View all FAQs
                </Link>
              </div>
              <div className="mt-4 divide-y divide-white/10">
                {contactFaqs.map((faq) => (
                  <details key={faq.question} className="group py-3">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-white">
                      <span>{faq.question}</span>
                      <span className="mt-0.5 text-violet-300 transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-6 shadow-inner shadow-black/20 backdrop-blur-sm">
            <div className="grid gap-4">
              <div className="mb-2">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">
                  Feel free to ask
                </p>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-white/80 mb-2">
                  Phone Number with Country Code*
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                  placeholder="e.g., +1 555 123 4567"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 resize-none"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-2 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_60px_rgba(124,58,237,0.25)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? <Loader className="inline-block animate-spin" /> : "Send Message"}
              </button>
              {error && (
                <p className="text-sm text-red-400 text-center">
                  {error.message || "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </div>
        </form>
      )}
      <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-inner shadow-white/[0.02] sm:flex sm:items-center sm:justify-between sm:gap-5">
        <div>
          <h3 className="text-base font-semibold text-white">
            Ask for a Summary of Space AI
          </h3>
          <p className="mt-1 max-w-xl text-sm text-white/55">
            Open your preferred AI assistant with a ready-made Space AI summary prompt.
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-3 sm:mt-0 sm:justify-end">
          {aiSummaryLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm font-medium text-white/75 transition hover:-translate-y-0.5 hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-white"
              aria-label={`Ask ${link.name} for a summary of Space AI`}
            >
              <Image
                src={link.iconSrc}
                alt={`${link.name} icon`}
                width={22}
                height={22}
                className="h-5 w-5 rounded-sm"
              />
              <span>{link.name}</span>
              <ExternalLink className="h-3.5 w-3.5 text-white/35" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
