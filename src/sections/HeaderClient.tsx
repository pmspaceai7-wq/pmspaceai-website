"use client";

import { useState, useEffect, useRef } from "react";
import {
  Brain, X, Menu, ChevronDown, Users, Headphones, Split, ArrowRight, LucideIcon,
  Building, Target, FileText, Zap, BarChart3, GitBranch, Layers, Award, Clock,
  BrainCircuit, Cog, Network, UserSquare, Briefcase, Code, ChevronRight,
  Home, Building2, GraduationCap, Heart, Truck, Hammer, Shield,
  Fuel, Hotel, Phone, Grid3x3, Camera, Mail,
  Anchor, Eye, Database, Globe
} from "lucide-react";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { contactNumbers } from "@/lib/contactNumbers";
import { roleSolutions } from "@/lib/roleSolutions";

type DropdownType = 'product' | 'industries' | 'services' | 'contact' | 'ecosystem' | null;

interface MenuItem {
  name: string;
  href: string;
  icon?: LucideIcon;
  hasArrow?: boolean;
  description?: string;
  flag?: string;
  flagSrc?: string;
  location?: string;
  locationHref?: string;
  email?: string;
  emailHref?: string;
  regionalEmail?: string;
  regionalEmailHref?: string;
  extraNumbers?: { number: string; href: string }[];
}

interface DropdownItems {
  [category: string]: MenuItem[];
}

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownType>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const [activeProductCategory, setActiveProductCategory] = useState<string>('Platform');

  const roleSolutionIcons: Record<string, LucideIcon> = {
    "project-managers": Users,
    "commercial-managers": Briefcase,
    "owner-directors": Building2,
    "hseq-managers": Shield,
    schedulers: Clock,
    "software-champions-and-internal-systems-leads": Code,
    "quantity-surveyors-and-senior-qss": FileText,
  };

  const roleSolutionDescriptions: Record<string, string> = {
    "project-managers": "Control project delivery.",
    "commercial-managers": "Protect margin and changes.",
    "owner-directors": "Portfolio visibility for leaders.",
    "hseq-managers": "Safety and quality oversight.",
    schedulers: "Predict schedule risk early.",
    "software-champions-and-internal-systems-leads": "Unify systems and adoption.",
    "quantity-surveyors-and-senior-qss": "Trace claims and final accounts.",
  };

  const productDropdownItems: { [key: string]: MenuItem[] } = {
    "Platform": [
      { name: "Our Vision & Path Forward", icon: Award, href: "/platform/our-vision/", description: "Our market positioning and the roadmap for the future." },
      { name: "Our Blueprint", icon: Target, href: "/platform/blueprint/", description: "Our three-pronged strategy for industry transformation." },
      { name: "The Inefficiency Problem", icon: BarChart3, href: "/platform/inefficiency/", description: "Understanding the scale of the challenge we're tackling." },
      { name: "Cracks in the Foundation", icon: Split, href: "/platform/cracks-in-foundation/", description: "Identifying the root causes of systemic waste and delays." },
      { name: "The Space AI Advantage", icon: Zap, href: "/platform/space-ai-advantages/", description: "The unique predictive capabilities that set our product apart." },
      { name: "System of Intelligence", icon: BrainCircuit, href: "/platform/system-of-intelligence/", description: "Moving from reactive record-keeping to proactive insights." },
      { name: "Artificial Intelligence", href: "/platform/ai/", icon: BrainCircuit, description: "Drive business value with AI agents and copilots in a unified process platform." },
      { name: "Process Automation", href: "/platform/process-automation/", icon: Cog, description: "Deliver end-to-end process automation with RPA, AI, IDP, and API integrations." },
    ],
    "Solutions": [
      ...roleSolutions.map((solution) => ({
        name: solution.title,
        href: `/solutions/${solution.slug}/`,
        icon: roleSolutionIcons[solution.slug] || Target,
        description: roleSolutionDescriptions[solution.slug],
      })),
      { name: "Predictive Delay Analysis", icon: Clock, href: "/solutions/predictive-delays/", description: "Forecast schedule slippage." },
      { name: "Comparison", icon: GitBranch, href: "/compare/", description: "Compare with legacy systems." },
    ],
    "Core Modules": [
      { name: "AI Workflow Orchestration", icon: BrainCircuit, href: "/core/ai-workflow-orchestration/", description: "Connect systems, data, and teams with intelligent workflows." },
      { name: "Intelligent Document Processing", icon: FileText, href: "/core/idp/", description: "Extract and process construction documents automatically." },
      { name: "Space BIM", icon: Layers, href: "/core/space-bim/", description: "BIM coordination and model-based collaboration." },
      { name: "E-Sign", icon: FileText, href: "/core/e-sign/", description: "Secure digital signatures for construction approvals." },
      { name: "Space Capture", icon: Camera, href: "/core/space-capture/", description: "Capture field data with computer vision and mobile tools." },
      { name: "Tender Management", icon: Briefcase, href: "/core/construction-tender-management-software/", description: "Streamline bidding and tender workflows." },
      { name: "Space Vision", icon: Eye, href: "/core/space-vision/", description: "Computer vision for site monitoring and safety." },
      { name: "Smart Contracts", icon: FileText, href: "/core/smart-contract-management/", description: "Automate contract compliance and claims." },
      { name: "Environmental Impact", icon: Globe, href: "/core/environmental-impact-analysis-ai/", description: "Measure and reduce project environmental impact." },
      { name: "AI Lean Platform", icon: Zap, href: "/core/ai-lean-construction-platform/", description: "Lean construction powered by predictive AI." },
      { name: "Connectors", icon: Network, href: "/core/space-connectors/", description: "Integrate with your existing software stack." },
      { name: "Common Data Platform", icon: Database, href: "/core/common-data-platform/", description: "Unified data layer for all project information." },
    ],
  };

  const servicesDropdownItems: MenuItem[] = [
    {
      name: "All Services",
      icon: Grid3x3,
      href: "/services/",
    },
    {
      name: "API Deveopment",
      icon: BrainCircuit,
      href: "/services/api-development/",
    },
    {
      name: "Data Management Service",
      icon: Cog,
      href: "/services/data-management-services/",
    },
    {
      name: "Digital Transformation",
      icon: BarChart3,
      href: "/services/digital-transformation-services/",
    },
    {
      name: "AI APP Development",
      icon: Code,
      href: "/services/ai-app-development/",
    },
    {
      name: "Application Maintainence",
      icon: Briefcase,
      href: "/services/application-maintenance/",
    },
    {
      name: "Software Integration",
      icon: UserSquare,
      href: "/services/software-integration-services/",
    },
  ];

  const industriesDropdownItems: MenuItem[] = [
    { name: "Government", href: "/industries/government/", icon: Building2 },
    { name: "Real Estate", href: "/industries/real-estate/", icon: Home },
    { name: "Education", href: "/industries/education/", icon: GraduationCap },
    { name: "Health Care", href: "/industries/health-care/", icon: Heart },
    { name: "Transportation", href: "/industries/transportation/", icon: Truck },
    { name: "Infrastructure", href: "/industries/infrastructure/", icon: Hammer },
    { name: "Defense", href: "/industries/defense/", icon: Shield },
    { name: "Marine", href: "/industries/marine/", icon: Anchor },
    { name: "Oil & Gas", href: "/industries/oil-and-gas/", icon: Fuel },
    { name: "Hospitality", href: "/industries/hospitality/", icon: Hotel },
    { name: "General Contractors", href: "/industries/general-contractors/", icon: Hammer },
    { name: "Commercial High-Rise", href: "/industries/commercial-high-rise/", icon: Building },
  ];

  const contactItems: MenuItem[] = [
    ...contactNumbers.map((contact) => ({
      name: contact.number,
      href: contact.href,
      icon: Phone,
      description: contact.navLabel,
      flag: contact.flag,
      flagSrc: contact.flagSrc,
      email: contact.email,
      emailHref: `mailto:${contact.email}`,
      regionalEmail: contact.regionalEmail,
      regionalEmailHref: contact.regionalEmail ? `mailto:${contact.regionalEmail}` : undefined,
      location: contact.location,
      locationHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location || "")}`,
      extraNumbers: contact.extraNumbers,
    })),
  ];

  const orderedContactItems = ["USA", "CA", "UAE", "KSA", "KW", "SG", "MY"]
    .map((contactLabel) => contactItems.find((item) => item.description === contactLabel))
    .filter((item): item is MenuItem => Boolean(item));
  const primaryContactItem = orderedContactItems[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      // No need for isMobile state if we rely on Tailwind classes
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setHoveredDropdown(null);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Mobile sticky CTA: show when the hero scrolls out of view (mobile only via lg:hidden)
  useEffect(() => {
    const hero = document.getElementById("spaceai-hero");
    if (!hero || !("IntersectionObserver" in window)) {
      setShowStickyCta(false);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCta(!entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (dropdown: DropdownType) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (dropdown === 'product') {
      setActiveProductCategory(Object.keys(productDropdownItems)[0]);
    }
    setHoveredDropdown(dropdown);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredDropdown(null);
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownToggle = (dropdown: DropdownType) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleKeyDown = (e: React.KeyboardEvent, dropdown: DropdownType) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdownToggle(dropdown);
    } else if (e.key === 'Escape' && activeDropdown === dropdown) {
      setActiveDropdown(null);
    }
  };

  const renderProductDropdown = () => (
    <motion.div
      className="absolute top-full left-[-120px] mt-2 w-[820px] max-w-screen-lg bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex">
        <div className="w-[240px] flex-shrink-0 bg-[linear-gradient(135deg,#eff9fd_0%,#eaf4fb_50%,#ffffff_100%)] p-4 border-r border-gray-200">
          <div className="space-y-1">
            {Object.keys(productDropdownItems).map((category) => (
              <button
                key={category}
                onMouseEnter={() => setActiveProductCategory(category)}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-semibold transition-colors duration-150 flex items-center justify-between ${activeProductCategory === category
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-gray-600 hover:bg-gray-200/60 hover:text-gray-900'
                }`}
              >
                {category}
                <ChevronRight className={`w-4 h-4 transition-opacity duration-200 ${activeProductCategory === category ? 'opacity-100' : 'opacity-0'}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 p-6 bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProductCategory}
              className="grid grid-cols-2 gap-x-5 gap-y-1"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              {productDropdownItems[activeProductCategory]?.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-blue-100/75 hover:border transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.icon && <item.icon className="w-5 h-5 text-gray-500 group-hover:text-violet-600 flex-shrink-0 mt-0.5" />}
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-snug line-clamp-2">{item.description}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );

  const renderServicesDropdown = () => (
    <motion.div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] max-w-screen-lg origin-top rounded-2xl bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {servicesDropdownItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-start gap-4 p-3 rounded-lg hover:bg-blue-100/75 hover:border transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {item.icon && <item.icon className="w-5 h-5 text-gray-500 group-hover:bg-violet-50 group-hover:text-violet-600 flex-shrink-0 mt-0.5" />}
              <div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderIndustriesDropdown = () => (
    <motion.div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] max-w-screen-sm origin-top rounded-2xl bg-[linear-gradient(135deg,#fafbfc,#f1f4fb_35%,#f6ecf9_70%,#fef3f8_101%)] shadow-2xl shadow-blue-500/10 border border-slate-100 z-50 overflow-hidden"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {industriesDropdownItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-blue-100/75 transition-all duration-300 text-center"
              onClick={() => setActiveDropdown(null)}
            >
              {item.icon && (
                <div className="w-12 h-12 bg-slate-100 group-hover:bg-blue-100 group-hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300">
                  <item.icon className="w-6 h-6 text-slate-500 group-hover:bg-violet-100 group-hover:text-violet-600 transition-colors" />
                </div>
              )}
              <div className="flex flex-col">
                <p className="text-sm font-bold text-slate-800 mb-1">{item.name}</p>
                <p className="text-xs text-slate-500 leading-snug line-clamp-2">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderContactDropdown = () => (
    <motion.div
      className="absolute right-0 top-full mt-2 w-[680px] origin-top-right rounded-2xl border border-blue-100 bg-[linear-gradient(135deg,#fafbfc,#eef7ff_35%,#f2ecff_70%,#fff7fb_101%)] p-4 shadow-2xl shadow-blue-500/10 z-50"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="grid grid-cols-2 gap-3">
        {orderedContactItems.map((item) => (
          <div
            key={item.description}
            className="group rounded-xl p-3.5 transition-colors hover:bg-blue-100/80"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="flex min-w-0 items-center gap-2">
                {item.flagSrc ? (
                  <span className="relative flex h-5 w-7 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-white shadow-sm ring-1 ring-blue-100">
                    <Image
                      src={item.flagSrc}
                      alt={`${item.description} flag`}
                      width={28}
                      height={20}
                      className="h-full w-full object-cover"
                    />
                  </span>
                ) : item.flag ? (
                  <span className="text-lg">{item.flag}</span>
                ) : null}
                <a
                  href={item.href}
                  className="block truncate text-base font-bold text-blue-700 hover:text-blue-800 hover:underline transition-colors"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                </a>
              </span>
              {item.icon && <item.icon className="h-5 w-5 flex-shrink-0 text-blue-500 group-hover:text-blue-700" />}
            </div>
            {item.extraNumbers?.map((extra) => (
              <a
                key={extra.href}
                href={extra.href}
                className="block truncate text-base font-bold text-blue-700 hover:text-blue-800 hover:underline transition-colors ml-9 mt-0.5"
                onClick={() => setActiveDropdown(null)}
              >
                {extra.number}
              </a>
            ))}
            <div className="mt-1 space-y-1">
              {item.regionalEmail && item.regionalEmailHref && (
                <a
                  href={item.regionalEmailHref}
                  className="block text-sm font-medium text-slate-700 transition-colors hover:text-blue-700 hover:underline"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.regionalEmail}
                </a>
              )}
              {item.location && item.locationHref && (
                <a
                  href={item.locationHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs leading-snug text-slate-600 transition-colors hover:text-blue-700 hover:underline"
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.location}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderMobileDropdown = (items: DropdownItems) => (
    <motion.div
      className="mt-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      {Object.entries(items).map(([category, categoryItems]) => (
        <div key={category} className="mb-6 last:mb-0">
          <h4 className="text-white/60 text-xs font-semibold mb-3 uppercase tracking-wider">{category}</h4>
          <div className="space-y-2">
            {categoryItems.map((item) => {
              const isContactItem = Boolean(item.emailHref || item.regionalEmailHref || item.locationHref);

              if (isContactItem) {
                return (
                  <div key={item.name} className="rounded-lg p-2 text-white/80 hover:bg-white/10">
                    <a
                      href={item.href}
                      className="flex items-center gap-3 transition-colors hover:text-white"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {item.flagSrc ? (
                        <span className="relative flex h-4 w-6 shrink-0 items-center justify-center overflow-hidden rounded-[3px] bg-white/10 ring-1 ring-white/15">
                          <Image
                            src={item.flagSrc}
                            alt={`${item.description} flag`}
                            width={24}
                            height={16}
                            className="h-full w-full object-cover"
                          />
                        </span>
                      ) : (
                        item.icon && <item.icon className="w-4 h-4" />
                      )}
                      <span className="text-sm">{item.name}</span>
                    </a>
                    <div className="ml-7 mt-1 space-y-1">
                      {item.regionalEmail && item.regionalEmailHref && (
                        <a
                          href={item.regionalEmailHref}
                          className="block text-xs text-white/55 transition-colors hover:text-white hover:underline"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.regionalEmail}
                        </a>
                      )}
                      {item.location && item.locationHref && (
                        <a
                          href={item.locationHref}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-xs leading-snug text-white/45 transition-colors hover:text-white hover:underline"
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveDropdown(null);
                          }}
                        >
                          {item.location}
                        </a>
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveDropdown(null);
                  }}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <div className="flex-1">
                    <span className="text-sm block">{item.name}</span>
                    {item.email && <span className="text-xs text-white/50 block">{item.email}</span>}
                    {item.location && <span className="text-xs text-white/40 block">{item.location}</span>}
                  </div>
                  {item.hasArrow && <ArrowRight className="w-3 h-3 ml-auto" />}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </motion.div>
  );

  const mobileIndustriesItems: DropdownItems = {
    "All Industries": industriesDropdownItems
  };

  const mobileServicesItems: DropdownItems = {
    "Our Services": servicesDropdownItems
  };

  const mobileContactItems: DropdownItems = {
    "Contact": orderedContactItems
  };

  const ecosystemProducts = [
    { name: "pmspace.ai", description: "Construction Management", href: "https://pmspace.ai/", external: false, icon: Building2, isCurrent: true },
    { name: "Space Sign", description: "E-Signature & Contracts", href: "https://space-sign.ai/", external: true, icon: FileText },
    { name: "SpaceCapture", description: "Field Inspection", href: "https://spacecapture.ai/", external: true, icon: Camera },
    { name: "SpaceLizit", description: "Immigration AI", href: "https://spacelizit.com/", external: true, icon: Briefcase },
    { name: "SpaceHR", description: "HRMS & Payroll", href: "https://spacehr.net/", external: true, icon: Users },
    { name: "SpaceLean", description: "Lean Scheduling", href: "https://spacelean.ai/", external: true, icon: GitBranch },
    { name: "SpaceNexus", description: "Virtual Data Room", href: "https://spacenexus.net/", external: true, icon: Shield },
    { name: "SpaceCRM", description: "CRM & Outreach", href: "https://spacecrm.net/", external: true, icon: Mail },
  ];

  const renderEcosystemDropdown = () => (
    <motion.div
      className="absolute right-0 top-full mt-2 w-[380px] origin-top-right rounded-2xl border border-white/15 bg-black/90 backdrop-blur-xl shadow-2xl shadow-purple-950/40 z-50 overflow-hidden"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onMouseEnter={() => { if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current); }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="px-4 pt-4 pb-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/35">Space AI Ecosystem</p>
      </div>
      <div className="grid grid-cols-2 gap-1 p-2">
        {ecosystemProducts.map((product) => (
          <a
            key={product.name}
            href={product.href}
            target={product.external ? "_blank" : undefined}
            rel={product.external ? "noopener noreferrer" : undefined}
            onClick={() => setActiveDropdown(null)}
            className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 ${
              product.isCurrent
                ? "border-transparent hover:border-purple-500/40 hover:bg-purple-500/10 cursor-default"
                : "border-transparent hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.07] flex items-center justify-center transition-colors duration-200">
              <product.icon className={`w-4 h-4 transition-colors duration-200 ${
                product.isCurrent ? "text-white/50 group-hover:text-purple-300" : "text-white/50"
              }`} />
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold leading-tight text-white/90 group-hover:text-white transition-colors">{product.name}</span>
              <span className={`text-[11px] leading-snug transition-colors ${
                product.isCurrent
                  ? "text-white/40 group-hover:text-purple-300/80"
                  : "text-white/40"
              }`}>
                {product.isCurrent ? (
                  <>
                    <span className="group-hover:hidden inline">{product.description}</span>
                    <span className="hidden group-hover:inline">You are here</span>
                  </>
                ) : product.description}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="mx-4 mb-4 mt-2 border-t border-white/10 pt-3">
        <a
          href="/blogs/space-ai-product-ecosystem/"
          onClick={() => setActiveDropdown(null)}
          className="flex items-center justify-between text-xs text-purple-300/70 hover:text-purple-200 transition-colors"
        >
          <span>About the ecosystem</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );

  return (
    <>
      <header
        className={`py-5 sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? "bg-black/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="flex items-center gap-6">
            <div
              ref={dropdownRef}
              className={`flex-1 flex justify-between items-center lg:border border-white/10 lg:p-2.5 rounded-2xl ${
                scrolled ? "lg:backdrop-blur-xl" : "lg:backdrop-blur-md"
              }`}
            >
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center"
                >
                  <Link
                    href="/"
                    className="flex items-center gap-3 px-1 py-1 rounded-lg hover:bg-white/5 transition-colors"
                    aria-label="Space AI Home"
                  >
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <Image
                        src="/assets/images/icononly_transparent_nobuffer.png"
                        alt="Space AI Logo"
                        width={18}
                        height={18}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <span className="text-white text-2xl font-bold">SPACE AI</span>
                  </Link>
                </motion.div>
              </motion.div>

              <div className="hidden lg:flex items-center gap-4">
                <nav className="flex gap-4 items-center">
                  <div className="relative" onMouseEnter={() => handleMouseEnter("product")} onMouseLeave={handleMouseLeave} onFocus={() => handleMouseEnter("product")} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) handleMouseLeave(); }} onKeyDown={(e) => handleKeyDown(e, "product")}>
                    <motion.button className="text-white/70 hover:text-white transition-colors relative group flex items-center gap-1 py-2" whileHover={{ scale: 1.02 }}>
                      Product
                      <motion.div animate={{ rotate: activeDropdown === "product" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300" initial={{ width: 0 }} animate={{ width: hoveredDropdown === "product" ? "100%" : 0 }}/>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === "product" && renderProductDropdown()}
                    </AnimatePresence>
                  </div>

                  <div className="relative" onMouseEnter={() => handleMouseEnter("industries")} onMouseLeave={handleMouseLeave} onFocus={() => handleMouseEnter("industries")} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) handleMouseLeave(); }} onKeyDown={(e) => handleKeyDown(e, "industries")}>
                    <motion.button className="text-white/70 hover:text-white transition-colors relative group flex items-center gap-1 py-2" whileHover={{ scale: 1.02 }}>
                      Industries
                      <motion.div animate={{ rotate: activeDropdown === "industries" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300" initial={{ width: 0 }} animate={{ width: hoveredDropdown === "industries" ? "100%" : 0 }}/>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === "industries" && renderIndustriesDropdown()}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/core/"
                    className="text-white/70 hover:text-white transition-colors relative group py-2 whitespace-nowrap"
                  >
                    Space AI Core
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>

                  <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave} onFocus={() => handleMouseEnter("services")} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) handleMouseLeave(); }} onKeyDown={(e) => handleKeyDown(e, "services")}>
                    <motion.button className="text-white/70 hover:text-white transition-colors relative group flex items-center gap-1 py-2" whileHover={{ scale: 1.02 }}>
                      Services
                      <motion.div animate={{ rotate: activeDropdown === "services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                      <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300" initial={{ width: 0 }} animate={{ width: hoveredDropdown === "services" ? "100%" : 0 }}/>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === "services" && renderServicesDropdown()}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/tools/"
                    className="text-white/70 hover:text-white transition-colors relative group py-2 whitespace-nowrap"
                  >
                    Tools
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>

                  <span className="w-px h-4 bg-white/20 self-center" />

                  <Link
                    href="/space-team/"
                    className="text-white/70 hover:text-white transition-colors relative group py-2 font-medium whitespace-nowrap"
                  >
                    Space Team
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/70 group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </Link>
                </nav>
              </div>

              <div className="flex items-center gap-2">
                <motion.div className="hidden lg:flex" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button noGlow>Try it now free</Button>
                </motion.div>

                <motion.div className="hidden lg:flex" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button noGlow onClick={() => router.push("/construction-software-demo/")}>Request a Demo</Button>
                </motion.div>

                <motion.div className="lg:hidden" whileTap={{ scale: 0.95 }}>
                  <Button noGlow onClick={() => router.push("/construction-software-demo/")} className="whitespace-nowrap px-3 py-2">
                    Request a Demo
                  </Button>
                </motion.div>

                <div className="relative hidden lg:flex" onMouseEnter={() => handleMouseEnter("contact")} onMouseLeave={handleMouseLeave} onFocus={() => handleMouseEnter("contact")} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) handleMouseLeave(); }} onKeyDown={(e) => handleKeyDown(e, "contact")}>
                  <motion.button
                    className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                  >
                    {primaryContactItem?.flagSrc ? (
                      <span className="relative flex h-4 w-6 items-center justify-center overflow-hidden rounded-[3px] bg-white/10">
                        <Image
                          src={primaryContactItem.flagSrc}
                          alt={`${primaryContactItem.description} flag`}
                          width={24}
                          height={16}
                          className="h-full w-full object-cover"
                        />
                      </span>
                    ) : primaryContactItem?.flag ? (
                      <span className="text-base">{primaryContactItem.flag}</span>
                    ) : (
                      <Phone className="h-4 w-4" />
                    )}
                    <span className="text-sm font-medium">{primaryContactItem?.description}</span>
                    <span className="text-sm">{primaryContactItem?.name}</span>
                    <motion.div animate={{ rotate: activeDropdown === "contact" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "contact" && renderContactDropdown()}
                  </AnimatePresence>
                </div>

                <div className="relative hidden lg:flex" onMouseEnter={() => handleMouseEnter("ecosystem")} onMouseLeave={handleMouseLeave} onFocus={() => handleMouseEnter("ecosystem")} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) handleMouseLeave(); }} onKeyDown={(e) => handleKeyDown(e, "ecosystem")}>
                  <motion.button
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    aria-label="Space AI Ecosystem"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "ecosystem" && renderEcosystemDropdown()}
                  </AnimatePresence>
                </div>

                <motion.button
                  className="lg:hidden text-white p-2 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)"}}
                  whileTap={{ scale: 0.95 }}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                >
                  <AnimatePresence mode="wait">
                    {isMenuOpen ? (
                      <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <X className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Menu className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden overflow-y-auto pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-6">
              <nav className="space-y-6">
                <div>
                  <motion.button className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10" onClick={() => handleDropdownToggle("product")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    Product
                    <motion.div animate={{ rotate: activeDropdown === "product" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "product" && renderMobileDropdown(productDropdownItems)}
                  </AnimatePresence>
                </div>

                <div>
                  <motion.button className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10" onClick={() => handleDropdownToggle("industries")} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                    Industries
                    <motion.div animate={{ rotate: activeDropdown === "industries" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "industries" && renderMobileDropdown(mobileIndustriesItems)}
                  </AnimatePresence>
                </div>

                <motion.a
                  href="/core/"
                  className="block text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Space AI Core
                </motion.a>

                <div>
                  <motion.button
                    className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                    onClick={() => handleDropdownToggle("services")}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Services
                    <motion.div animate={{ rotate: activeDropdown === "services" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "services" && renderMobileDropdown(mobileServicesItems)}
                  </AnimatePresence>
                </div>

                <motion.a
                  href="/tools/"
                  className="block text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tools
                </motion.a>

                <motion.a
                  href="/space-team/"
                  className="block text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Space Team
                </motion.a>

                <div>
                  <motion.button
                    className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                    onClick={() => handleDropdownToggle("ecosystem")}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.55 }}
                  >
                    <span className="flex items-center gap-2"><Grid3x3 className="w-4 h-4" /> Ecosystem</span>
                    <motion.div animate={{ rotate: activeDropdown === "ecosystem" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "ecosystem" && (
                      <motion.div
                        className="mt-3 bg-white/5 rounded-xl p-4 backdrop-blur-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {ecosystemProducts.map((product) => (
                            <a
                              key={product.name}
                              href={product.href}
                              target={product.external ? "_blank" : undefined}
                              rel={product.external ? "noopener noreferrer" : undefined}
                              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                                product.isCurrent
                                  ? "border border-purple-500/40 bg-purple-500/10 cursor-default"
                                  : "hover:bg-white/10"
                              }`}
                              onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}
                            >
                              <div className={`flex-shrink-0 w-7 h-7 rounded-md flex items-center justify-center ${
                                product.isCurrent ? "bg-purple-500/30" : "bg-white/[0.07]"
                              }`}>
                                <product.icon className={`w-3.5 h-3.5 ${product.isCurrent ? "text-purple-300" : "text-white/50"}`} />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span className="text-sm font-semibold text-white/90 leading-tight">{product.name}</span>
                                <span className={`text-xs leading-snug ${product.isCurrent ? "text-purple-300/80" : "text-white/45"}`}>{product.description}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <motion.button
                    className="flex items-center justify-between w-full text-white/70 hover:text-white transition-colors text-lg py-3 border-b border-white/10"
                    onClick={() => handleDropdownToggle("contact")}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Contact
                    <motion.div animate={{ rotate: activeDropdown === "contact" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {activeDropdown === "contact" && renderMobileDropdown(mobileContactItems)}
                  </AnimatePresence>
                </div>

                <motion.div className="mt-6 pt-6 border-t border-white/10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                  <div className="flex flex-col gap-4">
                    <Button noGlow>Try it now free</Button>
                    <Button noGlow onClick={() => { router.push("/construction-software-demo/"); setIsMenuOpen(false); }}>
                      Request a Demo
                    </Button>
                  </div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA bar — appears after the hero scrolls away */}
      <AnimatePresence>
        {showStickyCta && !isMenuOpen && (
          <motion.div
            className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="border-t border-white/10 bg-black/90 backdrop-blur-xl safe-bottom">
              <div className="container flex items-center gap-3 py-3">
                <a
                  href={primaryContactItem?.href ?? "tel:+18882689278"}
                  className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] p-3 text-white/80 transition-colors hover:text-white hover:border-white/25"
                  aria-label="Call Space AI"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <Button
                  noGlow
                  className="flex-1"
                  onClick={() => { router.push("/construction-software-demo/"); setIsMenuOpen(false); }}
                >
                  Request a Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
