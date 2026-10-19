// src/components/TableOfContents.tsx
// Task 43: Reusable Table of Contents Component for Long-Form Content
"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";

export interface TOCItem {
  id: string;
  title: string;
  level: number; // 1 for h2, 2 for h3, etc.
}

interface TableOfContentsProps {
  items: TOCItem[];
  title?: string;
  sticky?: boolean;
}

export function TableOfContents({ 
  items, 
  title = "Table of Contents",
  sticky = true 
}: TableOfContentsProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`bg-white/5 border border-white/10 rounded-xl p-5 ${
        sticky ? "lg:sticky lg:top-24" : ""
      }`}
      aria-label="Table of contents"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center gap-2">
          <List className="w-5 h-5 text-purple-400" />
          <span className="font-semibold text-white">{title}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-white/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white/60" />
        )}
      </button>

      {isExpanded && (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ paddingLeft: `${(item.level - 1) * 12}px` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-sm transition-colors hover:text-purple-400 ${
                  activeId === item.id
                    ? "text-purple-400 font-medium"
                    : "text-white/70"
                }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

// Inline TOC for mobile/compact view
export function InlineTableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 my-8">
      <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
        <List className="w-5 h-5 text-purple-400" />
        What You&apos;ll Learn
      </h2>
      <ul className="grid md:grid-cols-2 gap-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-white/70 hover:text-purple-400 text-sm flex items-center gap-2 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 text-xs flex items-center justify-center flex-shrink-0">
                {index + 1}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
