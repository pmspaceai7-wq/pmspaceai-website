// src/components/LocationMap.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Phone } from "lucide-react";
import { contactNumbers } from "@/lib/contactNumbers";

interface Coordinates {
  lat: number;
  lng: number;
}

interface Location {
  id: number;
  name: string;
  description: string;
  coordinates: Coordinates;
  flag: string;
  flagSrc?: string;
  mapQuery?: string;
  mapUrl?: string;
  embedUrl?: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "USA",
    description: "2500 MARCONI AVE, STE 101,\nSACRAMENTO, CA 95821 USA",
    coordinates: { lat: 38.61512, lng: -121.38384 },
    flag: "🇺🇸",
    flagSrc: "/assets/images/flags/us.svg",
  },
  {
    id: 2,
    name: "Singapore",
    description: "Regional Headquarters,\nPMSPACE AI #04-39,\n7 SOON LEE STREET,\nSINGAPORE 627608",
    coordinates: { lat: 1.3337637, lng: 103.7000428 },
    flag: "🇸🇬",
    flagSrc: "/assets/images/flags/sg.svg",
    mapQuery: "PMSPACE AI, 7 Soon Lee Street, Singapore 627608",
    mapUrl:
      "https://www.google.com/maps/place/PMSPACE+AI/@1.3337233,103.6988885,503m/data=!3m1!1e3!4m6!3m5!1s0x31da0f38f39f9161:0x3b224f90c3cf94ff!8m2!3d1.3337637!4d103.7000428!16s%2Fg%2F11z8h72sx1?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 3,
    name: "Dubai",
    description: "Middle East - Regional Office",
    coordinates: { lat: 25.277012682970984, lng: 55.313397857699364 },
    flag: "🇦🇪",
    flagSrc: "/assets/images/flags/ae.svg",
  },
  {
    id: 4,
    name: "India",
    description: "Technology and R&D",
    coordinates: { lat: 8.9086404, lng: 76.6935471 },
    flag: "🇮🇳",
    flagSrc: "/assets/images/flags/in.svg",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d629.464911319666!2d76.69320939520942!3d8.908574826530906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e3009fc13d77%3A0x32d2619fb0ab763a!2sPMSPACE%20AI!5e1!3m2!1sen!2sin!4v1786736657739!5m2!1sen!2sin",
  },
  {
    id: 5,
    name: "Kuwait",
    description: "Kuwait City,\nStrategic Partner for Gulf Region",
    coordinates: { lat: 29.3759, lng: 47.9774 },
    flag: "🇰🇼",
    flagSrc: "/assets/images/flags/kw.svg",
  },
  {
    id: 6,
    name: "Canada",
    description: "North America - Regional Office,\nToronto, ON, Canada",
    coordinates: { lat: 43.65107, lng: -79.347015 },
    flag: "🇨🇦",
    flagSrc: "/assets/images/flags/ca.svg",
  },
  {
    id: 7,
    name: "Hong Kong",
    description: "901, 9/F, EDWARD WONG TOWER,\n910 CHEUNG SHA WAN ROAD,\nCHEUNG SHA WAN,\nHONG KONG",
    coordinates: { lat: 22.33724, lng: 114.14854 },
    flag: "🇭🇰",
    flagSrc: "/assets/images/flags/hk.svg",
  },
  {
    id: 8,
    name: "Saudi Arabia",
    description: "Saudi Arabia Office,\nRiyadh, Kingdom of Saudi Arabia",
    coordinates: { lat: 24.7136, lng: 46.6753 },
    flag: "🇸🇦",
    flagSrc: "/assets/images/flags/sa.svg",
  },
];

const contactByCountry = contactNumbers.reduce<Record<string, (typeof contactNumbers)[number]>>(
  (acc, contact) => {
    acc[contact.country] = contact;
    return acc;
  },
  {}
);

const getGoogleMapsUrl = (location: Location) =>
  location.mapUrl ?? `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`;

const getGoogleMapsEmbedUrl = (location: Location) => {
  if (location.embedUrl) return location.embedUrl;
  const query = encodeURIComponent(location.mapQuery ?? `${location.description.replace(/\n/g, " ")}`);
  return `https://www.google.com/maps?q=${query}&t=k&z=14&output=embed`;
};

function LocationFlag({ location }: { location: Location }) {
  if (location.flagSrc) {
    return (
      <Image
        src={location.flagSrc}
        alt={`${location.name} flag`}
        width={20}
        height={20}
        className="h-5 w-5 rounded-[3px] object-cover"
      />
    );
  }

  return (
    <span aria-hidden="true" className="text-base leading-none">
      {location.flag}
    </span>
  );
}

export default function LocationsMap() {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const activeLocation = locations[activeLocationIndex];
  const activeContact = activeLocation ? contactByCountry[activeLocation.name] : undefined;

  return (
    <section id="locations" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(140,69,255,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-72 w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),rgba(168,85,247,0.16)_36%,rgba(34,211,238,0.08)_58%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[18%] top-28 h-48 w-80 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.16),rgba(14,165,233,0.08)_48%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[16%] top-32 h-52 w-96 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.1),rgba(124,58,237,0.13)_42%,transparent_72%)] blur-3xl" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Global Presence
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light">
            Leverage our expertise in various locations to deliver tailored construction solutions for your unique needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-10 grid overflow-hidden rounded-xl border border-white/10 bg-[#07101a] shadow-2xl shadow-blue-950/20 lg:grid-cols-[270px_minmax(0,1fr)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_55%)]" />
          <div className="relative z-20 border-b border-white/10 bg-black/50 p-4 backdrop-blur-md lg:border-b-0 lg:border-r">
            <div className="flex max-w-full gap-2 overflow-x-auto py-2 lg:h-[500px] lg:flex-col lg:justify-center lg:overflow-visible">
              {locations.map((location, index) => {
                const isActive = activeLocationIndex === index;

                return (
                  <button
                    key={location.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveLocationIndex(index)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 lg:w-full lg:px-5 lg:py-3 ${
                      isActive
                        ? "border-white/15 bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white"
                        : "border-white/5 bg-gradient-to-b from-[#190d2e]/35 to-[#4a208a]/20 text-white/65 opacity-80 hover:-translate-y-0.5 hover:border-white/20 hover:from-[#190d2e]/80 hover:to-[#4a208a]/55 hover:text-white hover:opacity-100"
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2 lg:justify-start">
                      <LocationFlag location={location} />
                      {location.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
            {activeLocation && (
              <iframe
                key={activeLocation.id}
                src={getGoogleMapsEmbedUrl(activeLocation)}
                title={`Google Map showing Space AI ${activeLocation.name} office`}
                className="relative z-10 h-[300px] w-full border-0 sm:h-[400px] md:h-[500px]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}

            {activeLocation && (
              <div
                className="absolute bottom-4 left-4 right-4 z-20 block rounded-xl border border-white/10 bg-black/75 p-4 text-white shadow-2xl shadow-blue-950/30 backdrop-blur-md sm:left-auto sm:right-4 sm:w-80"
              >
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 ring-1 ring-blue-300/25">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="flex-1">{activeLocation.name}</span>
                  <a
                    href={getGoogleMapsUrl(activeLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-1 text-white/45 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
                    aria-label={`Open ${activeLocation.name} office in Google Maps`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="whitespace-pre-line text-xs leading-5 text-white/65">
                  {activeLocation.description}
                </p>
                {activeContact && (
                  <a
                    href={activeContact.href}
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-blue-300/25 bg-blue-500/10 px-3 py-2.5 text-xs font-medium text-blue-100 transition-colors hover:border-blue-200/45 hover:bg-blue-500/20 focus:outline-none focus:ring-2 focus:ring-blue-300/60 sm:w-auto sm:inline-flex"
                  >
                    <Phone className="h-3.5 w-3.5 text-blue-300" />
                    {activeContact.number}
                  </a>
                )}
                <a
                  href={getGoogleMapsUrl(activeLocation)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex w-fit items-center gap-1 rounded-md p-1 text-xs font-medium text-blue-300 transition-colors duration-300 hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
                  aria-label={`Open ${activeLocation.name} office in Google Maps`}
                >
                  View location in Google Maps
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
