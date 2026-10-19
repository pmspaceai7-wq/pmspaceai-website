"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BrainCircuit, Tags, Search, CheckCheck, GitMerge, AlertTriangle, TrendingUp, Cpu, Rocket, FileDiff, GitBranch, BarChart3, ClipboardEdit, MessageCircle, BarChart, FileText, Layout, CircleUser, Lightbulb, Workflow, Building2, ShieldCheck, Truck, Factory, Atom, Hotel, GitFork, Users, Cloud, Code, Share2, Globe, Eye, X, Check } from 'lucide-react';

const iconMap: { [key: string]: any } = {
	BrainCircuit,
	Tags,
	Search,
	CheckCheck,
	GitMerge,
	GitBranch,
	FileDiff,
	MessageCircle,
	ClipboardEdit,
	AlertTriangle,
	TrendingUp,
	Cpu,
	Rocket,
	BarChart3,
	BarChart,
	FileText,
	Layout,
	CircleUser,
	Lightbulb,
	Workflow,
	Building2,
	ShieldCheck,
	Truck,
	Factory,
	Atom,
	Hotel,
	GitFork,
	Users,
	Cloud,
	Code,
	Share2,
	Globe,
	Eye,
	X,
	Check
};

const sectionVariants = {
	initial: { opacity: 0, y: 50 },
	in: { opacity: 1, y: 0 },
};

export default function SpaceBimPage({ guideData }: { guideData: any }) {
	const renderIcon = (name: string, size: number = 20) => {
		const IconComponent = iconMap[name];
		return IconComponent ? <IconComponent size={size} /> : null;
	};

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
			<div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
			<div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>

			<div className="container mx-auto px-4 py-8 sm:py-12 relative z-10">
				<div className="mb-8">
					<Link
						href="/guides/"
						className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
					>
						<ArrowLeft className="w-4 h-4" />
						<span className="text-sm font-medium">Back to Guides</span>
					</Link>
				</div>

				{/* Main Header Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-center max-w-5xl mx-auto mb-12 sm:mb-16"
				>
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 pb-4">
						{guideData.header.title}
					</h1>
					<p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
						{guideData.header.description}
					</p>
				</motion.div>

				{/* Purpose Section */}
				<section className="mb-16 sm:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
					>
						Purpose: Why Use Space BIM?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg text-white/70 leading-relaxed text-center max-w-4xl mx-auto mb-8"
					>
						{guideData.purpose.intro}
					</motion.p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="relative group p-8 rounded-2xl bg-gradient-to-br from-red-900/30 to-red-700/15 border border-red-500/30 hover:border-red-400/50 transition-all duration-500 transform hover:scale-[1.02]"
						>
							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-xl flex items-center justify-center">
										<AlertTriangle className="w-6 h-6 text-red-400" />
									</div>
									<h3 className="text-2xl font-bold text-white">{guideData.purpose.before.heading}</h3>
								</div>
								<p className="text-white/85 leading-relaxed text-base">{guideData.purpose.before.text}</p>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="relative group p-8 rounded-2xl bg-gradient-to-br from-green-900/30 to-emerald-700/15 border border-green-500/30 hover:border-green-400/50 transition-all duration-500 transform hover:scale-[1.02]"
						>
							<div className="relative z-10">
								<div className="flex items-center gap-4 mb-6">
									<div className="w-12 h-12 bg-gradient-to-br from-green-500/30 to-emerald-600/20 rounded-xl flex items-center justify-center">
										<CheckCheck className="w-6 h-6 text-green-400" />
									</div>
									<h3 className="text-2xl font-bold text-white">{guideData.purpose.after.heading}</h3>
								</div>
								<p className="text-white/85 leading-relaxed text-base">{guideData.purpose.after.text}</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Key Features Section */}
				<section className="mb-16 sm:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
					>
						<BrainCircuit size={32} className="text-purple-400" />
						Key Features
					</motion.h2>
					<p className="text-white/70 text-center max-w-4xl mx-auto mb-8">
						{guideData.keyFeatures.intro}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{guideData.keyFeatures.features.map((feature: any, index: number) => {
							const IconComponent = iconMap[feature.icon];
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "-50px" }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="group flex flex-col items-start p-6 rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-purple-500/50 hover:bg-white/10"
								>
									<div className="flex items-center gap-4 mb-4">
										<div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg border border-purple-500/50 text-purple-400 bg-purple-500/10">
											{IconComponent && <IconComponent className="w-6 h-6" />}
										</div>
										<h3 className="text-xl font-semibold text-white">{feature.name}</h3>
									</div>
									<p className="text-white/70 text-sm leading-relaxed">{feature.text}</p>
								</motion.div>
							);
						})}
					</div>
				</section>

				{/* Benefits & Advantages */}
				<section className="mb-16 sm:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
					>
						<TrendingUp size={32} className="text-green-400" />
						Benefits & Advantages
					</motion.h2>
					<p className="text-white/70 text-center max-w-4xl mx-auto mb-8">
						Adopting Space BIM provides significant benefits that accelerate projects and improve collaboration.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
						{guideData.benefits.map((benefit: string, index: number) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group relative p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-[1.02]"
							>
								<div className="relative z-10">
									<div className="flex items-start gap-4 mb-3">
										<div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-blue-400/50 text-blue-300 bg-blue-500/10">
											<CheckCheck className="w-4 h-4" />
										</div>
										<p className="text-white/85 leading-relaxed font-medium group-hover:text-white transition-colors duration-300">{benefit}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				{/* Who Can Use It Section */}
				<section className="mb-16 sm:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
					>
						<Globe size={32} className="text-cyan-400" />
						Who Can Use It?
					</motion.h2>
					<p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.whoCanUse.intro}</p>
					<ul className="list-disc list-inside space-y-2 text-white/80 max-w-3xl mx-auto">
						{guideData.whoCanUse.industries.map((industry: string, index: number) => (
							<motion.li
								key={index}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								className="leading-relaxed"
							>
								{industry}
							</motion.li>
						))}
					</ul>
				</section>

				{/* How Space BIM is Used in Space AI */}
				<section className="mb-16 sm:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center gap-4"
					>
						<Cpu size={32} className="text-purple-400" />
						How Space BIM is Used in Space AI
					</motion.h2>
					<p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.howUsed.intro}</p>
					<p className="text-white/70 text-center max-w-4xl mx-auto mb-8">{guideData.howUsed.details}</p>
				</section>

				{/* Start of PPT Content */}
				{guideData.pptContent.pages.map((page: any, index: number) => (
					<section key={page.id} className="mb-16 sm:mb-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.7, delay: index * 0.2 }}
							className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
						>
							<h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6 pb-4">
								{page.title}
							</h2>
							<p className="text-lg text-white/80 leading-relaxed mb-8">{page.description}</p>

							{page.imageSrc && (
								<div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden mb-6 border border-white/10 group">
									<Image 
										src={page.imageSrc} 
										alt={page.title} 
								fill
								className="object-cover transition-transform duration-500 group-hover:scale-105"
								priority
									/>
									{/* Overlay and Explore Button */}
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<Link
											href="/construction-software-demo/"
											className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 text-lg"
										>
											Explore
											<ArrowRight className="ml-3 w-5 h-5" />
										</Link>
									</div>
								</div>
							)}

							{page.keyTransformation && (
								<div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg mb-6">
									<h3 className="text-lg font-semibold text-blue-300">Key Transformation</h3>
									<p className="text-white/80">{page.keyTransformation}</p>
								</div>
							)}

							{page.subheadings && page.subheadings.map((item: any, subheadingIndex: number) => (
								<div key={subheadingIndex} className="mb-6">
									<h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
									{item.text && <p className="text-white/70 mb-2">{item.text}</p>}
									{item.list && (
										<ul className="list-disc list-inside space-y-1 text-white/70">
											{item.list.map((listItem: string, listIndex: number) => (
												<li key={listIndex}>{listItem}</li>
											))}
										</ul>
									)}
								</div>
							))}

							{page.sections && page.sections.map((section: any, sectionIndex: number) => (
								<div key={sectionIndex} className="mb-6">
									<h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
										{section.name === "Data-Centric Architecture" && <Building2 size={24} className="text-cyan-400" />}
										{section.name === "Universal Interoperability" && <GitFork size={24} className="text-purple-400" />}
										{section.name === "Real-Time Collaboration" && <Users size={24} className="text-green-400" />}
										{section.name === "Advanced Version Control" && <GitMerge size={24} className="text-yellow-400" />}
										{section.name === "Cloud-Native Architecture" && <Cloud size={24} className="text-blue-400" />}
										{section.name === "Extensibility & Customization" && <Code size={24} className="text-red-400" />}
										{section.name === "Lightweight Data Sharing" && <Share2 size={24} className="text-orange-400" />}
										{section.name === "Architecture" && <Layout size={24} className="text-cyan-400" />}
										{section.name === "Engineering" && <Cpu size={24} className="text-purple-400" />}
										{section.name === "Construction" && <Building2 size={24} className="text-green-400" />}
										{section.name === "Assessment" && <Eye size={24} className="text-cyan-400" />}
										{section.name === "Planning" && <Lightbulb size={24} className="text-purple-400" />}
										{section.name === "Implementation" && <Rocket size={24} className="text-green-400" />}
										{section.name === "Optimization" && <Search size={24} className="text-yellow-400" />}
										{section.name === "API Integration" && <Code size={24} className="text-cyan-400" />}
										{section.name === "Automation Workflows" && <Workflow size={24} className="text-purple-400" />}
										{section.name === "Digital Twin Implementation" && <Layout size={24} className="text-green-400" />}
										{section.name}
									</h3>
									<p className="text-white/70 leading-relaxed">{section.text}</p>
									{section.bullets && (
										<ul className="list-disc list-inside space-y-2 text-white/70 mt-4">
											{section.bullets.map((bullet: string, bulletIndex: number) => (
												<li key={bulletIndex}>{bullet}</li>
											))}
										</ul>
									)}
									{section.subsections && section.subsections.map((sub: any, subIndex: number) => (
										<div key={subIndex} className="mt-4 ml-4">
											<h4 className="font-semibold text-white/90 mb-2">{sub.title}</h4>
											<ul className="list-disc list-inside space-y-1 text-white/70">
												{sub.bullets.map((b: string, i: number) => (
													<li key={i}>{b}</li>
												))}
											</ul>
										</div>
									))}
								</div>
							))}

							{page.beforeAfter && (
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
									<div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
										<h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
											<X size={24} /> Traditional BIM Challenges
										</h3>
										<ul className="list-disc list-inside space-y-2 text-white/80">
											{page.beforeAfter.before.map((item: string, i: number) => <li key={i}>{item}</li>)}
										</ul>
									</div>
									<div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
										<h3 className="text-xl font-semibold text-green-400 mb-4 flex items-center gap-2">
											<Check size={24} /> Space BIM Solution
										</h3>
										<ul className="list-disc list-inside space-y-2 text-white/80">
											{page.beforeAfter.after.map((item: string, i: number) => <li key={i}>{item}</li>)}
										</ul>
									</div>
								</div>
							)}

							{page.bestPractice && (
								<div className="mt-8 bg-purple-900/30 border border-purple-500/50 p-4 rounded-lg">
									<p className="text-white/80 font-semibold">{page.bestPractice}</p>
								</div>
							)}
						</motion.div>
					</section>
				))}

				{/* Final CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7 }}
					className="mt-16 sm:mt-20 text-center"
				>
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
						{guideData.cta.heading}
					</h2>
					<p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
						{guideData.cta.description}
					</p>
					<Link
						href={guideData.cta.linkHref}
						className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
					>
						{guideData.cta.linkText}
						<ArrowRight className="ml-2 w-5 h-5" />
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
