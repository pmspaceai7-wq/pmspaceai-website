import React from "react";
import Link from "next/link";

import Locations from "@/sections/Locations";
import LocationsNav from "@/sections/LocationsNav";

export const metadata = {
  title: "Our Global Locations | Space AI",
  description: "Find Space AI offices and partners worldwide: USA, Dubai, Singapore, India, Kuwait, Canada. View locations on our interactive map.",
  alternates: {
    canonical: "https://pmspace.ai/locations/",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Global Locations</h1>
        <p className="text-lg text-white/80 mb-12 text-center max-w-2xl mx-auto">
          Space AI operates worldwide with regional offices and partners. Explore our locations below.
        </p>
        <h2 className="text-2xl font-bold text-white text-center mb-6">Regional Offices</h2>
        <LocationsNav />
        <Locations />
        <nav aria-label="Location related links" className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
          <Link href="/construction-management-software-usa/" className="text-white/80 hover:text-white underline">USA Construction Software</Link>
          <Link href="/construction-management-software-australia/" className="text-white/80 hover:text-white underline">Australia Construction Software</Link>
          <Link href="/construction-management-software-singapore/" className="text-white/80 hover:text-white underline">Singapore Construction Software</Link>
          <Link href="/industries/transportation/" className="text-white/80 hover:text-white underline">Transportation Industry</Link>
          <Link href="/contact-specialists/" className="text-white/80 hover:text-white underline">Contact Specialists</Link>
        </nav>
      </div>
    </main>
  );
}
