"use client";

import { motion } from "framer-motion";
import { Cookie, Settings, Eye, Shield, ToggleLeft, ToggleRight, Mail, Calendar, ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type CookieKey = "essential" | "analytics" | "marketing" | "preferences";


export default function CookiePolicyPage() {
    const [cookieSettings, setCookieSettings] = useState<Record<CookieKey, boolean>>({
        essential: true,
        analytics: true,
        marketing: false,
        preferences: true
    });

    const [selectedCookies, setSelectedCookies] = useState<string[]>([]);


    const toggleCookie = (type: CookieKey) => {
        if (type === "essential") return; // Cannot be disabled
        setCookieSettings(prev => ({
            ...prev,
            [type]: !prev[type] // ✅ Safe now
        }));
    };

    const handleCookieSelection = (key: string) => {
        if (selectedCookies.includes(key)) {
            setSelectedCookies(selectedCookies.filter(cookie => cookie !== key));
        } else {
            setSelectedCookies([...selectedCookies, key]);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const sectionVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const cookieTypes = [
        {
            title: "Essential Cookies",
            icon: Shield,
            color: "from-green-500 to-emerald-400",
            required: true,
            key: "essential",
            description:
                "Cookies are necessary for the platform to function properly and cannot be disabled.",
            purposes: [
                "User authentication and session management",
                "Security and fraud prevention measures",
                "Load balancing and performance optimization",
                "Basic platform functionality and navigation",
                "Remembering user preference settings"
            ]
        },
        {
            title: "Analytics Cookies",
            icon: Eye,
            color: "from-blue-500 to-cyan-400",
            required: false,
            key: "analytics",
            description:
                "These cookies help us understand how you use our platform so we can improve your experience.",
            purposes: [
                "Usage patterns and feature adoption tracking",
                "Performance monitoring and optimization",
                "Error tracking and debugging assistance",
                "User journey and behavior analysis",
                "Platform improvement and feature insights"
            ]
        },
        {
            title: "Marketing Cookies",
            icon: Settings,
            color: "from-purple-500 to-pink-400",
            required: false,
            key: "marketing",
            description:
                "These cookies are used to deliver relevant advertisements and track campaign effectiveness.",
            purposes: [
                "Personalized advertising content delivery",
                "Campaign effectiveness measurement",
                "Cross-platform user identification",
                "Retargeting and remarketing campaigns",
                "Third-party advertising network integration"
            ]
        },
        {
            title: "Preference Cookies",
            icon: Cookie,
            color: "from-orange-500 to-red-400",
            required: false,
            key: "preferences",
            description:
                "These cookies store user preferences to provide a personalized experience and remember settings.",
            purposes: [
                "Language and region preferences",
                "Theme and display settings",
                "Dashboard layout customization",
                "Notification preferences",
                "Saved filter and search settings"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black">
            {/* ===== Main Content ===== */}
            <section className="py-16 sm:py-20 md:py-24">
                <div className="container px-4 sm:px-6 mx-auto max-w-6xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 md:mb-16"
                    >
                        <div className="flex items-center justify-center mb-6">
                            <div className="bg-gradient-to-r from-orange-500 to-red-400 p-4 rounded-xl">
                                <Cookie className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Cookie Policy
                        </h1>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/70 font-light mb-8">
                            Learn about how we use cookies and similar technologies to enhance your experience.
                        </p>
                        <div className="flex items-center justify-center text-sm text-white/50">
                            <Calendar className="w-4 h-4 mr-2" />
                            Last updated: January 15, 2025
                        </div>
                    </motion.div>

                    {/* Cookie Preferences Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-6 sm:p-8 mb-12"
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">
                            Cookie Preferences
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cookieTypes.map(type => (
                                <div key={type.key} className="bg-black/30 border border-white/10 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-medium">{type.title}</h3>
                                        <button
                                            //@ts-ignore
                                            onClick={() => toggleCookie(type?.key)}
                                            disabled={type.required}
                                            className={`p-1 rounded-full transition-colors ${type.required
                                                    ? "cursor-not-allowed opacity-50"
                                                    : "hover:bg-white/10"
                                                }`}
                                        >
                                            {/* @ts-ignore */}
                                            {cookieSettings[type.key] ? (
                                                <ToggleRight className="w-6 h-6 text-green-400" />
                                            ) : (
                                                <ToggleLeft className="w-6 h-6 text-gray-400" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-white/60 text-sm">{type.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


        </div>
    );
}
