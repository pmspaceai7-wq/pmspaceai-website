// src/sections/Locations.tsx
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the LocationsMap component with ssr: false
const LocationsMap = dynamic(() => import("../components/LocationMap"), {
  ssr: false,
});

export default function Locations() {
  return (
    <section className="w-full">
      <LocationsMap />
    </section>
  );
}