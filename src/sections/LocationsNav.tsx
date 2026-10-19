import Link from "next/link";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function LocationsNav() {
  return (
    <nav className="mb-12 flex justify-center">
      <Link href="/locations/dubai-mega-projects/">
        <span className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 font-semibold hover:bg-amber-500/20 transition-colors">
          Dubai Mega-Projects <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </nav>
  );
}
