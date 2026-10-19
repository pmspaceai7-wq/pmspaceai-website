"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  Star,
  Building2,
  Network,
  BarChart3,
  Brain,
  Landmark,
  BookOpen,
  Sparkles,
} from "lucide-react";

interface KeyPoint {
  icon: React.ElementType;
  title: string;
  text: string;
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  tag: string;
  image: string;
  imageAlt: string;
  accentColor: string;
  borderColor: string;
  tagColor: string;
  linkedinUrl?: string;
  leftPoints: KeyPoint[];
  rightPoints: KeyPoint[];
  fullBio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "paul-deasy",
    name: "Paul Deasy",
    role: "Managing Partner – Ireland & Advisory Board",
    tag: "AEC Leadership & Advisory",
    image: "/assets/images/aboutus/paul.jpeg",
    imageAlt: "Paul Deasy – Managing Partner Ireland",
    accentColor: "from-violet-600 to-purple-700",
    borderColor: "border-violet-500/60",
    tagColor: "bg-violet-900/50 text-violet-300 border border-violet-500/30",
    leftPoints: [
      {
        icon: Globe,
        title: "Global Footprint",
        text: "Over three decades of international practice across Europe, Middle East, Africa, Southeast Asia, and the United States.",
      },
      {
        icon: Building2,
        title: "Landmark Projects",
        text: "Contributed to the Chicago Spire (USA), Raffles City (Bahrain), Davao International Airport (Philippines), and MRT networks in Singapore and Hong Kong.",
      },
      {
        icon: Users,
        title: "Community Engagement",
        text: "Active contributor to the Safety, Health & Wellbeing Panel of the Institution of Structural Engineers and mentorship at Singapore Institute of Technology.",
      },
      {
        icon: Award,
        title: "Chartered Engineer",
        text: "Esteemed member of the Institution of Structural Engineers, Institution of Civil Engineers, and Engineers Ireland.",
      },
    ],
    rightPoints: [
      {
        icon: TrendingUp,
        title: "Executive Leadership",
        text: "General Director at Meinhardt Vietnam and Director of Project Delivery at Masterise Homes, overseeing premium branded residential developments.",
      },
      {
        icon: Star,
        title: "Iconic Brand Collaborations",
        text: "Distinguished portfolio includes projects for Ritz-Carlton, JW Marriott, Hilton, and Stanley Black & Decker.",
      },
      {
        icon: Shield,
        title: "QHSE Excellence",
        text: "Regional QHSE leadership roles at McConnell Dowell and Samsung C&T, institutionalizing corporate management systems and ISO accreditations.",
      },
      {
        icon: GraduationCap,
        title: "Academic Excellence",
        text: "BEng Civil Engineering (UCC Ireland), Diploma in Quality Management (CQI UK), and currently pursuing an MBA at Nexford University.",
      },
    ],
    fullBio: `Paul Deasy is a distinguished construction and engineering professional whose career spans more than three decades of international practice across Europe, the Middle East, Africa, Southeast Asia, and the United States. A Chartered Engineer and esteemed member of leading professional bodies—including the Institution of Structural Engineers, the Institution of Civil Engineers, and Engineers Ireland. Paul's trajectory is characterized by technical mastery, visionary leadership, and an unwavering commitment to excellence in Architecture, Engineering and Construction.

He earned his Bachelor of Engineering in Civil Engineering from University College Cork, Ireland, and further augmented his expertise with a Diploma in Quality Management from the Chartered Quality Institute in the United Kingdom. He is presently advancing his strategic and executive capabilities through an MBA at Nexford University.

Throughout his illustrious career, Paul has held pivotal leadership roles, including General Director at Meinhardt Vietnam, where he spearheads multidisciplinary design, construction, and project management services. He has also served as Director of Project Delivery at Masterise Homes, overseeing the execution of premium branded residential developments across Vietnam. His portfolio is distinguished by collaborations with globally renowned brands such as Ritz-Carlton, JW Marriott, Hilton, and Stanley Black & Decker.

Paul's project repertoire is both expansive and multifaceted, encompassing luxury residential high-rises, commercial developments, power generation facilities, aviation infrastructure, maritime ports, mass rapid transit systems, and complex industrial installations. Among the landmark projects he has contributed to are the Chicago Spire in the United States, Raffles City in Bahrain, Davao International Airport in the Philippines, and multiple MRT networks in Singapore and Hong Kong.

Earlier in his career, Paul assumed regional leadership positions in Quality, Health, Safety, and Environment (QHSE) with McConnell Dowell and Samsung C&T. In these roles, he was instrumental in architecting and institutionalizing corporate management systems, safeguarding ISO accreditations, and elevating safety performance benchmarks across Southeast Asia.

Beyond his executive responsibilities, Paul remains an active and influential contributor to the engineering community. He serves on panels and committees, including the Safety, Health & Wellbeing Panel of the Institution of Structural Engineers, and is deeply committed to nurturing future talent through mentorship initiatives with the Singapore Institute of Technology.

With a career defined by global impact, operational excellence, and a steadfast dedication to continuous improvement, Paul Deasy exemplifies leadership at the highest echelon of the AEC Industry.`,
  },
  {
    id: "thomas-jomon",
    name: "Thomas Jomon",
    role: "Co-Founder, President & Chief AI Officer",
    tag: "Enterprise AI & Digital Transformation",
    linkedinUrl: "https://www.linkedin.com/in/thomas-jomon-45475327/",
    image: "/assets/images/aboutus/jthomas.jpeg",
    imageAlt: "Thomas Jomon – Co-Founder, President & Chief AI Officer",
    accentColor: "from-cyan-600 to-teal-700",
    borderColor: "border-cyan-500/60",
    tagColor: "bg-cyan-900/50 text-cyan-300 border border-cyan-500/30",
    leftPoints: [
      {
        icon: Brain,
        title: "Enterprise AI Visionary",
        text: "Two decades of experience pioneering AI-powered construction technology, project management, and enterprise automation across America, the Middle East, and Asia.",
      },
      {
        icon: Lightbulb,
        title: "Contextual Intelligence Pioneer",
        text: "Leads next-generation contextual intelligence solutions at SPACE AI, redefining the future of construction technology and decision-making.",
      },
      {
        icon: Network,
        title: "Digital Transformation Leadership",
        text: "Senior executive and consultancy roles at globally recognized organizations including Asite Solutions, Newforma, and Trimble.",
      },
      {
        icon: BarChart3,
        title: "Measurable Business Impact",
        text: "Consistently delivered accelerated project delivery, enhanced user adoption, optimized operational workflows, and significant improvements in customer retention and revenue growth.",
      },
    ],
    rightPoints: [
      {
        icon: Globe,
        title: "AEC & BIM Expertise",
        text: "Deep expertise in BIM-integrated ecosystems, Common Data Environments (CDE), AI-enabled analytics, and cloud-based collaboration platforms.",
      },
      {
        icon: TrendingUp,
        title: "Enterprise System Architecture",
        text: "Successfully led complex digital transformation programs encompassing strategic planning, enterprise system architecture, and large-scale stakeholder collaboration.",
      },
      {
        icon: Award,
        title: "AI Strategy & Certifications",
        text: "Graduate Diploma in AI for Business (SUSS Singapore), certifications in Cisco Networking, Oracle Primavera, and Trimble Prolog technologies.",
      },
      {
        icon: GraduationCap,
        title: "Academic Foundation",
        text: "Bachelor of Technology in Electronics and Communication Engineering from Pondicherry University, reinforcing multidisciplinary expertise across enterprise systems and AI strategy.",
      },
    ],
    fullBio: `SPACE AI Co-Founder, President, and Chief AI Officer, Thomas Jomon is a distinguished technology evangelist, digital transformation leader, and enterprise AI visionary with more than two decades of international experience spanning the Architecture, Engineering, Construction (AEC), Enterprise Asset Management, and Project Information Management domains. Renowned for his exceptional ability to bridge advanced technology with operational excellence, he has consistently spearheaded high-impact digital initiatives across the Middle East and Asia.

With a career built upon innovation, strategic leadership, and technical mastery, Thomas has cultivated an illustrious professional journey through senior executive and consultancy positions across globally recognized organizations, including Asite Solutions, Newforma, and Trimble. His expertise encompasses enterprise AI systems, digital project delivery platforms, BIM-integrated ecosystems, intelligent asset management, and large-scale software implementation programs.

As the current President and Chief AI Officer of SPACE AI, Thomas plays a pivotal role in pioneering next-generation contextual intelligence solutions designed to redefine the future of construction technology, project management, and enterprise automation. His leadership philosophy revolves around leveraging artificial intelligence not merely as a technological enhancement, but as a transformative force capable of revolutionizing decision-making, operational efficiency, and organizational scalability.

Throughout his professional tenure, Thomas has successfully led complex digital transformation programs involving strategic planning, enterprise system architecture, change management, implementation governance, customer success frameworks, and large-scale stakeholder collaboration. His contributions have consistently delivered measurable business value through accelerated project delivery, enhanced user adoption, optimized operational workflows, and significant improvements in customer retention and revenue growth.

An accomplished consultant and technology evangelist, Thomas is highly respected for his profound understanding of enterprise ecosystems including Project Information Management Systems (PIMS), Common Data Environments (CDE), BIM workflows, AI-enabled analytics, and cloud-based collaboration platforms. His ability to align business objectives with intelligent technological frameworks has earned him recognition as a trusted advisor to organizations navigating digital modernization initiatives.

Academically grounded with Bachelor of Technology in Electronics and Communication Engineering from Pondicherry University, Thomas further strengthened his academic and professional credentials by earning a Graduate Diploma in Artificial Intelligence for Business from Singapore University of Social Sciences. He also holds multiple industry-recognized certifications in Cisco Networking, Oracle Primavera, and Trimble Prolog technologies, reinforcing his multidisciplinary expertise across enterprise systems, AI strategy, and digital transformation leadership.

Driven by entrepreneurial ambition and an unwavering commitment to technological advancement, Thomas Jomon continues to champion the evolution of AI-powered ecosystems that empower enterprises to achieve unprecedented levels of intelligence, connectivity, and operational excellence.`,
  },
  {
    id: "mohammed-assakkaf",
    name: "Mohammed Assakkaf",
    role: "Managing Partner – Kingdom of Saudi Arabia",
    tag: "Strategic Business Development & Growth",
    linkedinUrl: "https://www.linkedin.com/in/mohammed-assakkaf-%D9%85%D8%AD%D9%85%D8%AF-%D8%A7%D9%84%D8%B3%D9%82%D8%A7%D9%81-1b9668104/",
    image: "/assets/images/aboutus/mohammed.jpeg",
    imageAlt: "Mohammed Assakkaf – Managing Partner KSA",
    accentColor: "from-emerald-600 to-green-700",
    borderColor: "border-emerald-500/60",
    tagColor: "bg-emerald-900/50 text-emerald-300 border border-emerald-500/30",
    leftPoints: [
      {
        icon: TrendingUp,
        title: "Corporate Sales Leader",
        text: "Nearly a decade of experience in corporate sales, strategic business development, and commercial leadership across the Gulf region.",
      },
      {
        icon: Globe,
        title: "GCC Market Authority",
        text: "Successfully led business expansion initiatives and cultivated high-value partnerships across Saudi Arabia and the United Arab Emirates.",
      },
      {
        icon: Briefcase,
        title: "Managing Partner – KSA",
        text: "Leads PMSPACE AI's innovation, strategic partnerships, and digital transformation initiatives within the construction and enterprise technology sectors in Saudi Arabia.",
      },
      {
        icon: Lightbulb,
        title: "AI-Driven Solutions Advocate",
        text: "Champions AI-driven solutions that enhance operational intelligence, business efficiency, and future-ready transformation across the industry.",
      },
    ],
    rightPoints: [
      {
        icon: GraduationCap,
        title: "International Education",
        text: "Bachelor's Degree in Global Business Management (Middlesex University) and Postgraduate Diploma in International Business Management (University of West London).",
      },
      {
        icon: Network,
        title: "Multilingual Communicator",
        text: "Fluent in both Arabic and English, enabling seamless engagement across diverse regional and international business environments.",
      },
      {
        icon: Star,
        title: "Strategic Mindset",
        text: "Recognized for dynamic approach to growth and innovation, delivering strategic solutions across diverse industries with strong leadership capabilities.",
      },
      {
        icon: BarChart3,
        title: "Digital Economy Impact",
        text: "Continuously striving to create meaningful and lasting impact within the evolving digital economy through strategic business development.",
      },
    ],
    fullBio: `Mohammed Assakkaf is a Saudi Arabian business executive with nearly a decade of experience in corporate sales, strategic business development, and commercial leadership across the Gulf region. Recognized for his dynamic approach to growth and innovation, he has successfully led business expansion initiatives, cultivated high-value partnerships, and delivered strategic solutions across diverse industries in Saudi Arabia and the United Arab Emirates.

Mohammed holds a Bachelor's Degree in Global Business Management from Middlesex University and a Postgraduate Diploma in International Business Management from University of West London. His academic background has equipped him with a strong international perspective on business strategy, leadership, and global market development.

Currently serving as the Managing Partner of PMSPACE AI in Saudi Arabia, Mohammed plays a leading role in driving innovation, strategic partnerships, and digital transformation initiatives within the construction and enterprise technology sectors. His focus lies in advancing AI-driven solutions that enhance operational intelligence, business efficiency, and future-ready transformation across the industry.

Fluent in both Arabic and English, Mohammed is known for his strategic mindset, strong leadership capabilities, and commitment to excellence, continuously striving to create meaningful and lasting impact within the evolving digital economy.`,
  },
  {
    id: "geetha-pradeep",
    name: "Geetha Pradeep",
    role: "Chief Financial Officer & Financial Advisory",
    tag: "Financial Governance & Operations",
    image: "/assets/images/aboutus/geetha.jpeg",
    imageAlt: "Geetha Pradeep – Chief Financial Officer",
    accentColor: "from-rose-600 to-pink-700",
    borderColor: "border-rose-500/60",
    tagColor: "bg-rose-900/50 text-rose-300 border border-rose-500/30",
    leftPoints: [
      {
        icon: Landmark,
        title: "CFO & Financial Architect",
        text: "Steers PMSPACE AI's financial architecture, operational resilience, and long-term strategic growth initiatives as Chief Financial Officer.",
      },
      {
        icon: BarChart3,
        title: "Financial Strategy & Governance",
        text: "Oversees financial strategy formulation, budgeting frameworks, compliance governance, investment planning, and operational optimization across a global ecosystem.",
      },
      {
        icon: Network,
        title: "Blockchain Trade Finance",
        text: "Former Director of Finance and Operations at dltledgers, a blockchain-powered supply chain and trade finance platform, strengthening operational transparency and governance.",
      },
      {
        icon: Shield,
        title: "Regulatory Compliance Leadership",
        text: "Responsibilities encompass fiscal risk management, regulatory compliance, and strategic resource allocation across innovation-driven AI platforms.",
      },
    ],
    rightPoints: [
      {
        icon: TrendingUp,
        title: "Operational Transformation",
        text: "Demonstrated exceptional ability to align fiscal discipline with organizational innovation, driving operational transformation across technology-driven organizations.",
      },
      {
        icon: Building2,
        title: "Multi-Sector Executive",
        text: "Led critical financial and operational functions at Dowser Group, managing complex organizational growth and business process optimization.",
      },
      {
        icon: Star,
        title: "Financial Intelligence Bridge",
        text: "Known for bridging financial intelligence with technological transformation, positioning her as a key strategic leader enabling scalability and sustainable innovation.",
      },
      {
        icon: BookOpen,
        title: "Academic Foundation",
        text: "Bachelor's degree from St. Joseph's College, Irinjalakkuda and Master's degree from St. Teresa's College, Ernakulam — reflecting lifelong commitment to academic excellence.",
      },
    ],
    fullBio: `Geetha Pradeep is a distinguished finance and operations executive based in Singapore, recognized for her strategic leadership in financial governance, operational transformation, and enterprise management across technology-driven organizations. She currently serves as Chief Financial Officer & Financial Advisory at PMSPACE AI, where she plays an instrumental role in steering the company's financial architecture, operational resilience, and long-term strategic growth initiatives.

With an extensive professional background spanning finance, operations, trade technology, and enterprise systems, Geetha has consistently demonstrated an exceptional ability to align fiscal discipline with organizational innovation. At PMSPACE AI, she oversees financial strategy formulation, budgeting frameworks, compliance governance, investment planning, and operational optimization across the company's expanding global ecosystem. Her leadership supports the organization's mission of transforming the future of the built environment through advanced artificial intelligence, contextual intelligence, and next-generation digital technologies.

Prior to joining PMSPACE AI, Geetha served as Director of Finance and Operations at dltledgers, a blockchain-powered supply chain and trade finance platform focused on digitizing and modernizing cross-border trade ecosystems. During her tenure, she was deeply involved in strengthening financial operations and ensuring the seamless execution of enterprise-wide financial and operational strategies within a highly dynamic digital trade environment. Her work contributed significantly to improving operational transparency, financial efficiency, and governance standards in blockchain-enabled trade infrastructures.

Before her role at dltledgers, Geetha held the position of Director of Finance and Operations at Dowser Group, where she managed critical financial and operational functions while supporting organizational growth and business process optimization. Across each of her leadership appointments, she has built a reputation for precision, analytical acumen, and the ability to lead multidisciplinary teams through complex operational landscapes.

At PMSPACE AI, Geetha is responsible for managing financial strategies, overseeing operational efficiency, and directing monetary governance across the organization's innovation-driven ecosystem. Her responsibilities encompass financial planning, corporate governance, fiscal risk management, regulatory compliance, and strategic resource allocation. She also supports the company's broader global initiatives by ensuring financial sustainability and operational excellence within its evolving AI-powered platforms and enterprise solutions.

Known for her meticulous approach to financial stewardship and operational leadership, Geetha contributes significantly to strengthening institutional frameworks that enable scalability, resilience, and sustainable innovation. Her ability to bridge financial intelligence with technological transformation has positioned her as a key strategic leader within the organization.

Academically, Geetha Pradeep possesses a strong educational foundation in commerce and management. She earned her Bachelor's degree from St. Joseph's College, Irinjalakkuda and later completed her Master's degree from St. Teresa's College, Ernakulam. She completed her schooling at Sacred Heart School Dalhousie, an institution known for its academic rigor and holistic educational environment. Her academic journey reflects a lifelong commitment to excellence, discipline, and professional development, which continues to define her leadership approach today.`,
  },
];

function LinkedInBadge({ url, name, size = "md" }: { url: string; name: string; size?: "sm" | "md" }) {
  const isSmall = size === "sm";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn`}
      onClick={(e) => e.stopPropagation()}
      className={`group flex-shrink-0 flex items-center gap-1.5 rounded-lg border border-[#0A66C2]/40 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/25 hover:border-[#0A66C2]/70 backdrop-blur-sm transition-all duration-250 shadow-[0_0_12px_rgba(10,102,194,0.2)] hover:shadow-[0_0_20px_rgba(10,102,194,0.4)] ${isSmall ? "px-2 py-1" : "px-2.5 py-1.5"}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`text-[#0A66C2] group-hover:text-[#3b9eff] transition-colors duration-200 flex-shrink-0 ${isSmall ? "w-3.5 h-3.5" : "w-4 h-4"}`}
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
      <span className={`font-semibold text-[#0A66C2] group-hover:text-[#3b9eff] transition-colors duration-200 leading-none ${isSmall ? "text-[11px]" : "text-xs"}`}>
        LinkedIn
      </span>
    </a>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const bioRef = useRef<HTMLDivElement>(null);

  function handleToggleBio() {
    if (!expanded) {
      setExpanded(true);
      setTimeout(() => {
        bioRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else {
      setExpanded(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative mb-8 last:mb-0"
    >
      {/* Subtle background glow */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${member.accentColor} opacity-[0.04] blur-2xl pointer-events-none`}
      />

      <div
        className={`relative rounded-3xl border ${member.borderColor} bg-white/[0.03] backdrop-blur-sm overflow-hidden`}
      >
        {/* Top accent line */}
        <div className={`h-[2px] w-full bg-gradient-to-r ${member.accentColor}`} />

        <div className="p-4 md:p-6">

          {/* Main row: name+points LEFT, image RIGHT */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">

            {/* LEFT COLUMN: name/role/tag stacked above the points grid */}
            <div className="w-full lg:flex-1 order-2 lg:order-1 flex flex-col gap-4">

              {/* NAME + ROLE + TAG — hidden on mobile (shown on image overlay), visible on lg+ */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                    {member.name}
                  </h2>
                  {member.linkedinUrl && (
                    <LinkedInBadge url={member.linkedinUrl} name={member.name} size="md" />
                  )}
                </div>
                <div className={`inline-block mt-2 bg-gradient-to-r ${member.accentColor} px-3 py-1.5 rounded-md`}>
                  <p className="text-white font-bold text-sm leading-snug">{member.role}</p>
                </div>
                <div className="mt-2">
                  <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide ${member.tagColor}`}>
                    {member.tag}
                  </span>
                </div>
              </div>

              {/* KEY POINTS grid — interleaved L1,R1,L2,R2... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.leftPoints.flatMap((point, i) => [point, member.rightPoints[i]]).map((point, i) => (
                  <KeyPointCard
                    key={i}
                    point={point}
                    accentColor={member.accentColor}
                    borderColor={member.borderColor}
                    delay={i * 0.07}
                  />
                ))}
              </div>

            </div>{/* end left column */}

            {/* IMAGE — always right, proper aspect ratio, top-aligned */}
            <div className="w-64 md:w-72 lg:w-72 xl:w-80 flex-shrink-0 order-1 lg:order-2 mx-auto lg:mx-0 lg:self-start">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden border-2 ${member.borderColor} shadow-2xl aspect-[3/4]`}
                style={{ boxShadow: `0 0 40px rgba(0,0,0,0.6), 0 0 80px rgba(0,0,0,0.25)` }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.accentColor} opacity-10 z-10 pointer-events-none`} />
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 288px, 320px"
                  priority={index < 2}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20">
                  <div className="bg-gradient-to-t from-black/80 to-transparent px-4 pt-6 pb-1">
                    <div className="flex items-center gap-2">
                      <p className="text-white font-extrabold text-2xl leading-tight">{member.name}</p>
                      {member.linkedinUrl && (
                        <LinkedInBadge url={member.linkedinUrl} name={member.name} size="sm" />
                      )}
                    </div>
                  </div>
                  <div className={`bg-gradient-to-r ${member.accentColor} px-4 py-2`}>
                    <p className="text-white font-bold text-sm leading-snug">{member.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* View Full Biography button — below image, right-aligned */}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={handleToggleBio}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-xl border ${member.borderColor} bg-white/[0.04] hover:bg-white/[0.09] transition-all duration-300`}
                  aria-label={expanded ? "Collapse biography" : "View full biography"}
                >
                  <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${member.accentColor} shadow-md`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                    {expanded ? "Collapse Biography" : "View Full Biography"}
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Expanded full bio */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div
                  ref={bioRef}
                  className={`mt-8 pt-8 border-t ${member.borderColor}`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`h-[3px] w-10 rounded-full bg-gradient-to-r ${member.accentColor}`}
                    />
                    <h3 className="text-sm font-bold text-white/50 tracking-widest uppercase">
                      Full Biography
                    </h3>
                    <div
                      className={`h-[3px] flex-1 rounded-full bg-gradient-to-r ${member.accentColor} opacity-20`}
                    />
                  </div>
                  <div className="space-y-4">
                    {member.fullBio
                      .split("\n\n")
                      .filter((p) => p.trim())
                      .map((paragraph, i) => (
                        <motion.p
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.06 }}
                          className="text-white/75 text-[15px] leading-relaxed font-light"
                        >
                          {paragraph.trim()}
                        </motion.p>
                      ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function KeyPointCard({
  point,
  accentColor,
  borderColor,
  delay,
}: {
  point: KeyPoint;
  accentColor: string;
  borderColor: string;
  delay: number;
}) {
  const Icon = point.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className={`group flex gap-3 p-4 rounded-xl border ${borderColor} bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-300`}
    >
      <div className={`flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br ${accentColor} flex items-center justify-center shadow-lg mt-0.5`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-white font-bold text-base leading-snug mb-1.5">
          {point.title}
        </p>
        <p className="text-white/60 text-sm leading-relaxed">{point.text}</p>
      </div>
    </motion.div>
  );
}

export default function SpaceTeamPage() {
  useEffect(() => {
    document.documentElement.classList.add("space-team-page");
    return () => {
      document.documentElement.classList.remove("space-team-page");
    };
  }, []);

  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden text-white">
      <style>{`
        html.space-team-page ::-webkit-scrollbar { width: 10px; }
        html.space-team-page ::-webkit-scrollbar-track { background: transparent; }
        html.space-team-page ::-webkit-scrollbar-thumb { background: rgba(107,33,168,0.85); border-radius: 50px; }
        html.space-team-page ::-webkit-scrollbar-thumb:hover { background: rgba(139,92,246,1); }
      `}</style>
      <div className="relative z-10">
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-12 text-center sm:px-6 sm:pt-14">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            <Sparkles className="h-4 w-4" />
            Space AI Leadership
          </div>
          <h1 className="text-4xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-purple-300 sm:text-5xl md:text-6xl">
            Meet the Space Team
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            A global leadership team combining construction delivery, enterprise AI, finance, and operational transformation experience.
          </p>
        </section>

        {/* ── TEAM CARDS ── */}
        <section className="max-w-7xl mx-auto px-4 pt-4 pb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </section>
      </div>
    </main>
  );
}
