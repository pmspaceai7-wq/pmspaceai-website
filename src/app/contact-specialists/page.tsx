import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Contact Our Construction AI Specialists | Space AI",
  description: "Get in touch with Space AI's team of construction technology experts. Request a demo, ask questions, or discuss your project needs with our specialists.",
  alternates: {
    canonical: "https://pmspace.ai/contact-specialists/",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Our Specialists</h1>
        <p className="text-lg text-white/80 mb-10 text-center">
          Have questions about Space AI, want a demo, or need help with your construction technology project? Fill out the form below and our team will get back to you promptly.
        </p>
        <form className="bg-gray-900/60 rounded-2xl p-8 shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
          </div>
          <button type="submit" className="w-full py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors">Send Message</button>
        </form>
        <div className="mt-8 flex flex-wrap gap-3 text-sm justify-center">
          <Link href="/pricing/" className="text-white/80 hover:text-white underline">Pricing</Link>
          <Link href="/construction-software-demo/" className="text-white/80 hover:text-white underline">Book Demo</Link>
          <Link href="/compare/construction-software-comparison/" className="text-white/80 hover:text-white underline">Software Comparison</Link>
          <Link href="/resources/" className="text-white/80 hover:text-white underline">Resources</Link>
          <Link href="/construction-newsletter/" className="text-white/80 hover:text-white underline">Newsletter</Link>
        </div>
      </div>
    </main>
  );
}
