// src/app/usecases/IntelligenceCenterContent.tsx

"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
    // General Icons
    ArrowRight, DollarSign, Zap, ShieldCheck, Database, 
    BarChart3, Briefcase, Bot, Users, Filter, X, FileText,
    // Industry Icons
    Landmark, Factory, HeartPulse, BedDouble, Shield, Truck, School
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- YOUR ORIGINAL USE CASE DATA, with new filter properties applied ---
const allResources = [
    {
    "id": 202,
    "slug": "clinic-management-software",
    "title": "Clinic Management Software for Hospitals and Clinics | Space AI",
    "description": "Streamline patient scheduling, records management, and billing with our all-in-one platform. Improve clinic efficiency and patient care.",
    "href": "/tools/clinic-management",
    "image": "/assets/images/clinicmanagementwithspaceai.png",
    "readTime": "10 min read",
    "solutionType": "Smart Project Management",
    "coreFunction": "Data & Reporting",
    "industry": "Healthcare"
},
    {
        id: 101,
        slug: "analytics-reporting-software",
        title: "Smart Analytics Reporting Software for Insights | Space AI",
        description: "Automate reporting and visualize data with Space AI. Get actionable insights through real-time dashboards and predictive analytics.",
        href: "/tools/construction-analytics-software/",
        image: "/assets/images/analyticsreportingsoftware.png",
        readTime: "12 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Data & Reporting",
        industry: "Transportation",
    },

    {
        id: 102,
        slug: "project-management-tool",
        title: "AI-Powered Project Management Dashboard | Space AI",
        description: "Manage tasks, resources, and timelines effortlessly. Space AI enables real-time tracking, automation, and collaboration for project success.",
        href: "/tools/construction-project-management-software/",
        image: "/assets/images/projectmanagementdashboard.png",
        readTime: "10 min read",
        solutionType: "Project Management",
        coreFunction: "Collaboration",
        industry: "Real Estate / Government",
    },
    {
        id: 111,
        slug: "digital-asset-tracking-system",
        title: "AI Digital Asset Tracking System | Space AI",
        description: "Monitor assets in real time with Space AI. Improve efficiency, reduce losses, and ensure accurate asset management across all projects.",
        href: "/tools/construction-asset-tracking-software/",
        image: "/assets/images/assetdashboard.png",
        readTime: "12 min read",
        solutionType: "Construction Management",
        coreFunction: "Risk Management",
        industry: "Defense",
    },
    {
        id: 104,
        slug: "expense-tracking-application",
        title: "AI Cost Estimation Tools for Accurate Budgeting | Space AI",
        description: "Forecast expenses accurately with AI. Space AI helps reduce overruns, improve cost efficiency, and streamline financial planning.",
        href: "/tools/construction-expense-management-software/",
        image: "/assets/images/costestimation.png",
        readTime: "14 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Cost Control",
        industry: "Hospitality",
    },
    {
        id: 105,
        slug: "invoice-management-software",
        title: "AI Invoice Management Software with Automation | Space AI",
        description: "Simplify invoicing and payment tracking with Space AI. Automate workflows, ensure accuracy, and enhance financial control for your business.",
        href: "/tools/invoice-management-software/",
        image: "/assets/images/invoicemanagementsystem.png",
        readTime: "10 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Cost Control",
        industry: "Healthcare",
    },
    {
        id: 106,
        slug: "crm",
        title: "Custom AI CRM for Smarter Client Management | Space AI",
        description: "Manage customer relationships effectively with Space AI. Use AI-driven insights, automation, and personalization to boost engagement.",
        href: "/tools/construction-crm-software/",
        image: "/assets/images/crm.jpg",
        readTime: "8 min read",
        solutionType: "Project Management",
        coreFunction: "Collaboration",
        industry: "Real Estate / Government",
    },
    {
        id: 107,
        slug: "backoffice-apps",
        title: " AI Workflow and Internal Tools for Teams | Space AI ",
        description: "Automate internal processes and optimize workflows. Space AI empowers teams with smart tools for collaboration and increased efficiency.",
        href: "/tools/backoffice-apps/",
        image: "/assets/images/aiworkflows.png",
        readTime: "11 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Collaboration",
        industry: "Education",
    },
    {
        id: 109,
        slug: "supply-chain-management-system",
        title: "AI Supply Chain Management System for Businesses | Space AI",
        description: "Streamline logistics and inventory with Space AI. Boost supply chain efficiency, increase visibility, and reduce operational costs.",
        href: "/tools/construction-supply-chain-management-software/",
        image: "/assets/images/supplychainmanagement.png",
        readTime: "15 min read",
        solutionType: "Construction Management",
        coreFunction: "Data & Reporting",
        industry: "Transportation",
    },
    {
        id: 110,
        slug: "document-management-and-collaboration-software",
        title: "AI Document Management & Collaboration Tools | Space AI",
        description: "Organize, share, and collaborate on documents easily. Space AI ensures secure, accessible, and seamless workflow integration.",
        href: "/tools/construction-document-management-software/",
        image: "/assets/images/documentmanagement.png",
        readTime: "15 min read",
        solutionType: "Construction Management",
        coreFunction: "Collaboration",
        industry: "Education",
    },
    {
        // Renumbered ID to avoid conflicts
        id: 111.1, 
        slug: "digital-asset-management-system",
        title: "Digital Asset Management with AI Automation | Space AI",
        description: "Manage digital assets efficiently with Space AI. Enjoy AI-powered indexing, secure access, and enhanced collaboration for productivity.",
        href: "/tools/digital-asset-management-system/",
        image: "/assets/images/assetdashboard.png",
        readTime: "12 min read",
        solutionType: "Construction Management",
        coreFunction: "Data & Reporting",
        industry: "Real Estate / Government",
    },
    {
        id: 112,
        slug: "scheduling-software",
        title: "AI Scheduling Software with Optimization Features | Space AI",
        description: "Automate workforce scheduling with Space AI to boost efficiency, reduce conflicts, and optimize team productivity for smooth operations.",
        href: "/project-scheduling-software/",
        image: "/assets/images/scheduleingsoftware.webp",
        readTime: "9 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Collaboration",
        industry: "Healthcare",
    },
    {
        id: 115,
        slug: "equipment-checkout-app",
        title: "AI Equipment Checkout App for Easy Tracking | Space AI",
        description: "Manage equipment lending with Space AI. Ensure accurate tracking, reduce losses, and streamline checkout workflows for your team.",
        href: "/tools/equipment-checkout-app/",
        image: "/assets/images/equipmentcheckoutapp.png",
        readTime: "10 min read",
        solutionType: "Construction Management",
        coreFunction: "Risk Management",
        industry: "Defense",
    },
    {
        id: 116,
        slug: "inventory-management",
        title: "AI Inventory Management Dashboard for Businesses | Space AI",
        description: "Optimize inventory with Space AI. Gain real-time visibility, automate stock updates, and improve overall supply chain efficiency.",
        href: "/tools/inventory-management/",
        image: "/assets/images/inventorymanagement.png",
        readTime: "11 min read",
        solutionType: "Construction Management",
        coreFunction: "Cost Control",
        industry: "Oil and Gas",
    },
    {
        id: 1,
        slug: "admin-panels",
        title: "Admin Panels",
        description: "Customizable admin panels for managing AECO project data, user roles, and workflows with intuitive dashboards and real-time insights.",
        href: "/tools/admin-panels/",
        image: "/usecases/admin.png",
        readTime: "7 min read",
        solutionType: "Project Management",
        coreFunction: "Data & Reporting",
        industry: "Real Estate / Government",
    },
    {
        id: 2,
        slug: "ai-assistant",
        title: "AI-Powered Assistant Tool",
        description: "An AI-driven assistant to automate repetitive tasks, provide real-time project updates, and enhance decision-making for AECO teams.",
        href: "/tools/ai-assistant/",
        image: "/usecases/ai.png",
        readTime: "10 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Collaboration",
        industry: "Hospitality",
    },
    {
        id: 3,
        slug: "ai-recommendation-engine",
        title: "AI-Powered Sentimental Analysis",
        description: "Leverage AI to deliver personalized recommendations for optimizing resource allocation, scheduling, and risk mitigation in AECO projects.",
        href: "/tools/ai-recommendation-engine/",
        image: "/usecases/analysis.png",
        readTime: "15 min read",
        solutionType: "Smart Project Management",
        coreFunction: "Risk Management",
        industry: "Oil and Gas",
    },
    {
        id: 10,
        slug: "digital-signature",
        title: "Digital Signature Tool",
        description: "Streamline document signing processes with secure, legally binding electronic signatures for AECO contracts and approvals.",
        href: "/core/e-sign/",
        image: "/assets/images/esignature.png",
        readTime: "5 min read",
        solutionType: "Construction Management",
        coreFunction: "Collaboration",
        industry: "Real Estate / Government",
    },
];

const filters = {
    solutionType: [
        { name: "Project Management", icon: Briefcase },
        { name: "Construction Solution", icon: Landmark },
        { name: "Construction Management", icon: Factory },
        { name: "Smart Project Management", icon: Zap },
    ],
    coreFunction: [
        { name: "Risk Management", icon: ShieldCheck },
        { name: "Cost Control", icon: DollarSign },
        { name: "Collaboration", icon: Users },
        { name: "Data & Reporting", icon: BarChart3 },
    ],
    industry: [
        { name: "Real Estate / Government", icon: Landmark },
        { name: "Healthcare", icon: HeartPulse },
        { name: "Hospitality", icon: BedDouble },
        { name: "Oil and Gas", icon: Factory },
        { name: "Defense", icon: Shield },
        { name: "Transportation", icon: Truck },
        { name: "Education", icon: School },
    ],
};

const filterCategories = [
    { key: 'solutionType', title: 'Solution Type' },
    { key: 'coreFunction', title: 'Core Function' },
    { key: 'industry', title: 'Industry' },
];

export default function IntelligenceCenterContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeFilters = useMemo(() => ({
        solutionType: searchParams.get('solutionType') || '',
        coreFunction: searchParams.get('coreFunction') || '',
        industry: searchParams.get('industry') || '',
    }), [searchParams]);

    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

    const handleFilterClick = (type: string, value: string) => {
        const newParams = new URLSearchParams(searchParams.toString());
        const currentVal = newParams.get(type);

        if (currentVal === value) {
            newParams.delete(type);
        } else {
            newParams.set(type, value);
        }
        router.push(`?${newParams.toString()}`, { scroll: false });
    };

    const clearAllFilters = () => {
        router.push('?', { scroll: false });
    };
    
    const handleImageError = (resourceId: string) => {
        setImageErrors(prev => ({ ...prev, [resourceId]: true }));
    };

    const hasActiveFilters = Object.values(activeFilters).some(value => value !== "");

    const filteredResources = useMemo(() => {
        return allResources.filter(resource => {
            return Object.entries(activeFilters).every(([key, value]) => {
                if (!value) return true;
                if (key === 'solutionType') return resource.solutionType === value;
                if (key === 'coreFunction') return resource.coreFunction === value;
                if (key === 'industry') return resource.industry === value;
                return true;
            });
        });
    }, [activeFilters]);

    useEffect(() => {
        let title = "All Use Cases | Space AI";
        if (activeFilters.solutionType) {
            title = `${activeFilters.solutionType} Solutions | Space AI`;
        } else if (activeFilters.industry) {
            title = `Solutions for ${activeFilters.industry} | Space AI`;
        }
        document.title = title;
    }, [activeFilters]);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-10 sm:py-10 text-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent rounded-3xl" />
                <div className="relative z-10">
                    <motion.h1
                        className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        All Use Cases
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Expert insights for the new era of construction.
                    </motion.p>
                </div>
            </section>

            {/* Filters and Content Section */}
            <section className="container mx-auto px-4 pb-20">
                <div className="md:hidden mb-6">
                    <button
                        onClick={() => setShowMobileFilters(!showMobileFilters)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                        {hasActiveFilters && (
                            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                {Object.values(activeFilters).filter(Boolean).length}
                            </span>
                        )}
                    </button>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className={`md:w-1/4 ${showMobileFilters ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-gray-900/30 rounded-xl p-6 backdrop-blur-sm border border-gray-700/30">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-white">Filter Resources</h2>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearAllFilters}
                                        className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                                    >
                                        <X className="w-3 h-3" />
                                        Clear all
                                    </button>
                                )}
                            </div>

                            <div className="space-y-8">
                                {filterCategories.map(category => (
                                    <div key={category.key}>
                                        <h3 className="font-medium mb-4 text-gray-300">{category.title}</h3>
                                        <div className="space-y-2">
                                            {filters[category.key as keyof typeof filters].map(item => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => handleFilterClick(category.key, item.name)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-all duration-200 ${
                                                         activeFilters[category.key as keyof typeof activeFilters] === item.name
                                                             ? 'bg-blue-600 text-white'
                                                             : 'bg-gray-800/50 hover:bg-gray-700/70 text-gray-300'
                                                    }`}
                                                >
                                                    <item.icon className="w-4 h-4 flex-shrink-0" />
                                                    <span className="text-sm">{item.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Resources Grid */}
                    <main className="md:w-3/4">
            
                        <motion.div
                            key={filteredResources.map(r => r.id).join('-')}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                        >
                            {filteredResources.map((resource, index) => (
                                <motion.article
                                    key={resource.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-900/40 border border-gray-700/50 rounded-xl overflow-hidden group hover:border-blue-500/50 hover:bg-gray-800/60 flex flex-col"
                                >
                                    <Link href={resource.href} className="block relative h-48 overflow-hidden bg-gray-800">
                                        {imageErrors[String(resource.id)] ? (
                                             <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-gray-900/40 flex items-center justify-center text-center p-4">
                                                <p className="text-gray-400">Image not available</p>
                                             </div>
                                        ) : (
                                            <>
                                                <Image
                                                    src={resource.image}
                                                    alt={resource.title}
                                                    fill
                                                    sizes="(max-width: 1024px) 50vw, 33vw"
                                                    style={{ objectFit: "cover" }}
                                                    className="transition-transform duration-300 group-hover:scale-105"
                                                    onError={() => handleImageError(String(resource.id))}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            </>
                                        )}
                                    </Link>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <span className="text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded mb-3 self-start">
                                            {resource.solutionType}
                                        </span>
                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                                           <Link href={resource.href} className="hover:text-blue-300 transition-colors duration-300">{resource.title}</Link>
                                        </h3>
                                        <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                                            {resource.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/50">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                                    {resource.industry}
                                                </span>
                                            </div>
                                            <Link
                                                href={resource.href}
                                                className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
                                            >
                                                View
                                                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                            {filteredResources.length === 0 && (
                                <div className="lg:col-span-2 text-center py-16">
                                    <div className="text-6xl mb-4">🔍</div>
                                    <h3 className="text-xl font-semibold text-white mb-2">No Resources Found</h3>
                                    <p className="text-gray-400 mb-6">Try adjusting your filters to see more results.</p>
                                    <button
                                        onClick={clearAllFilters}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}
                        </motion.div>
                    </main>
                </div>
            </section>
        </div>
    );
}
