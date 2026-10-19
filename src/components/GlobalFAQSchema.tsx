'use client';

import { usePathname } from "next/navigation";
import { pageFAQs } from "@/lib/page-faqs";
import { generateFAQSchema } from "./SEOSchemas";

export default function GlobalFAQSchema() {
  const pathname = usePathname();
  const faqs = pathname ? pageFAQs[pathname] : undefined;

  if (!faqs || faqs.length === 0) return null;

  const schema = generateFAQSchema(faqs);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
