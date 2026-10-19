"use client";

import Button from "@/components/Button";
import starBg from "@/assets/stars.png";
import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      ref={sectionRef}
      id="spaceai-hero"
      className="flex min-h-[500px] h-[calc(79vh)] max-h-[800px] items-center relative overflow-hidden bg-black [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ backgroundImage: `url(${starBg.src})`, backgroundPositionY }}
      animate={{ backgroundPositionX: starBg.width }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="absolute -inset-6"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/assets/images/contact-ai-black-background.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover opacity-75"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/45"></div>
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.28)_15%,rgb(14,0,36,.38)_78%,transparent)]"></div>

 
     
      <div className="hidden md:flex relative z-10 h-full flex-col items-center justify-center container mx-auto px-4 sm:px-6">

 
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mt-10 sm:mt-10 md:-mt-14 md:mb-0" // moved upward
  >
    <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold tracking-[0.2em] uppercase">
      <span className="text-white">Think</span>{" "}
      <motion.span
        className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ textShadow: "0 0 20px rgba(251, 146, 60, 0.5)" }}
      >
        Intelligent
      </motion.span>
      {" • "}
      <span className="text-white">Think</span>{" "}
      <motion.span
        className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ textShadow: "0 0 20px rgba(251, 146, 60, 0.5)" }}
      >
        Future
      </motion.span>
    </p>
  </motion.div>

 
  <motion.div
    initial={{ opacity: 0, y: 0, scale: 0.8 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="text-center mt-8 sm:mt-12 md:mt-16 md:mb-2" // adds extra space below
  >
    <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] uppercase">
      <span className="inline-flex items-center">
  <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">&quot;</span>
  <span 
  className="bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent filter-[drop-shadow(0_1px_2px_rgba(0,0,0,0.7))_drop-shadow(0_0_8px_rgba(245,158,11,0.7))]"
>
  Think
</span>

 



  
  
</span>{" "}
      <motion.span
        className="text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{ textShadow: "0 0 20px rgba(251, 146, 60, 0.5)" }}
      >
        Space AI&quot;
      </motion.span>
    </p>
  </motion.div>

  {/* ===== BOTTOM TEXT (Header and Paragraph) ===== */}
  <div className="text-center flex flex-col items-center gap-4 sm:gap-5 mt-4 sm:mt-6 md:mt-18 md:mb-20">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="sm:mb-4 text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-transparent bg-clip-text tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,.5))]"
    >
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
      >
        Space AI - One AI Platform.
      </motion.span>{" "}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
      >
        Every Construction Decision
      </motion.span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl text-white/90 font-light px-2"
    >
      Connect BIM, planning, scheduling, procurement, cost, and project intelligence in one AI-powered construction platform.
    </motion.p>

    </div>

      

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative top-[-20px] text-center sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl text-white font-light px-2"
    >
      Founded in 2025, Space AI revolutionizes the AEC industry through innovative technology, enhancing operational efficiency and decision-making for Building Owners and Stakeholders.
    </motion.p>





</div>


      <div className="container mx-auto px-4 sm:px-6 flex items-center flex-col gap-4 sm:gap-5 relative z-50 md:hidden">


        {/* <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} 
          className="mb-2 sm:mb-6 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-transparent bg-clip-text tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]"
        >
          Transform construction Management with{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            AI
          </motion.span>
        </motion.h1> */}

           <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 text-center"
        >
          <motion.p
            className="text-lg sm:text-xl md:text-xl lg:text-xl font-semibold tracking-[0.2em] uppercase"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-white">Think</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                textShadow: "0 0 20px rgba(251, 146, 60, 0.5)"
              }}
            >
              Intelligent
            </motion.span>
            {" • "}
            <span className="text-white">Think</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              style={{
                textShadow: "0 0 20px rgba(251, 146, 60, 0.5)"
              }}
            >
              Future
            </motion.span>
            {" • "}
            <span className="text-white">&quot;Think</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-orange-400 to-amber-200 bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                textShadow: "0 0 20px rgba(251, 146, 60, 0.5)"
              }}
            >
              Space AI&quot;
            </motion.span>
          </motion.p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-2 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-transparent bg-clip-text tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent"
          >
            Space AI - One AI Platform.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          >
            Every Construction Decision
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-xl text-white/90 text-center font-light px-2"
        >
          Connect BIM, planning, scheduling, procurement, cost, and project intelligence in one AI-powered construction platform.
        </motion.p>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-xl text-white text-center font-light px-2"
        >
          Founded in 2025, Space AI revolutionizes the AEC industry through innovative technology, enhancing operational efficiency and decision-making for Building Owners and Stakeholders.
        </motion.p>
      </div>

    </motion.section>
  );
};
