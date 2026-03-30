"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Asset imports
import machine from "@/assets/images/machine.png";
import logo from "@/assets/images/logo.png";
import blue from "@/assets/images/blue.svg";
import inner from "@/assets/images/inner.svg";
import outer from "@/assets/images/outer.svg";
import design1 from "@/assets/images/design1.png";
import founderImg from "@/assets/images/founder.png";

const EmbroideryShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- RESPONSIVE STATE ---
  const [windowWidth, setWindowWidth] = useState(1200);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const arcRadius = isMobile ? 160 : isTablet ? 240 : 330;

  // --- SCROLL TRACKING ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // --- PHASE 1: HOME ---
  const homeOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const homeY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // --- MACHINE & CIRCLES ---
  const machineScale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [1, 0.75, 0.75, 1.2]);
  const machineY = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    isMobile ? [0, -120, -180, -600] : [0, -230, -290, -1000]
  );

  const circleScale = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [1, 2.2, 2.2, 0.8]);
  const circleY = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], ["25%", "-60%", "-60%", "-115%"]);

  // --- PHASE 2: ABOUT CONTENT ---
  // LEFT: Fades out earlier on mobile
  const aboutLeftOpacity = useTransform(
    scrollYProgress,
    isMobile ? [0.15, 0.25, 0.45, 0.55] : [0.15, 0.3, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  const aboutLeftX = useTransform(scrollYProgress, [0.15, 0.3], isMobile ? [-50, 0] : [-150, 0]);
  const aboutLeftY = useTransform(scrollYProgress, [0.45, 0.55], isMobile ? [0, -50] : [0, 0]);

  // RIGHT OPACITY: Stays visible until the very end of the scroll container
  const aboutRightOpacity = useTransform(
    scrollYProgress,
    // Fades out between 90% (0.9) and 100% (1.0) on mobile
    isMobile ? [0.15, 0.25, 0.80, 1] : [0.15, 0.3, 0.6, 0.7],
    [0, 1, 1, 0]
  );
  const aboutRightX = useTransform(scrollYProgress, [0.15, 0.3], isMobile ? [50, 0] : [150, 0]);
  
  // RIGHT Y-AXIS: Slides up exactly when the left side leaves
  const aboutRightY = useTransform(
    scrollYProgress,
    // Left finishes fading out at 0.55, so we start sliding Right up at 0.55
    isMobile ? [0.55, 0.8] : [0, 0],
    // Moves from 0px to -100px (adjust -100 to however far up you want it to go)
    isMobile ? [0, -100] : [0, 0]
  );

  return (
    <main ref={containerRef} className="relative w-full h-[300vh] bg-white overflow-clip">
      {mounted && (
        <>
          {/* =========================================
              STICKY LAYER (Machine & Animations)
          ========================================= */}
          <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pointer-events-none z-0">
            
            <motion.div
              style={{ scale: circleScale, y: circleY }}
              className="absolute bottom-[7%] left-1/2 -translate-x-1/2 translate-y-[450px] sm:translate-y-[450px] lg:translate-y-[520px] flex justify-center items-center"
            >
              <div className="relative w-[800px] sm:w-[1000px] lg:w-[1600px] xl:w-[1000px] aspect-square flex items-center justify-center">
                <Image src={outer} alt="" className="absolute inset-0 w-full h-full object-contain opacity-90" />
                <Image src={blue} alt="" className="absolute inset-0 w-full h-full object-contain scale-90" />
                <Image src={inner} alt="" className="absolute inset-0 w-full h-full object-contain scale-150 z-10" />
              </div>
            </motion.div>

            <motion.div
              style={{ scale: machineScale, y: machineY }}
              className="relative z-10 flex flex-col items-center mt-[360px] sm:mt-[600px] lg:mt-[500px]"
            >
              <div className="relative flex flex-col items-center">
                
                {/* INITIAL MOUNT ANIMATION */}
                <motion.div
                   layoutId="embroidery-machine"
                   className="relative z-40"
                   initial={{ scale: 0, opacity: 0, y: 50 }}
                   animate={{ scale: 1, opacity: 1, y: 0 }}
                   transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.2 }}
                >
                  <Image
                    src={machine}
                    alt="Embroidery Machine"
                    className="w-[320px] sm:w-[280px] lg:w-[450px] object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
              
              <div className="absolute bottom-[20%] sm:bottom-[20%] w-[140px] sm:w-[250px] lg:w-[300px] h-[30px] bg-black/30 blur-[18px] rounded-full -z-10" />
            </motion.div>
          </div>

          {/* =========================================
              SCROLLING TEXT CONTENT
          ========================================= */}
          <div className="absolute top-0 left-0 w-full pointer-events-none">
            
            {/* PHASE 1: HERO */}
            <motion.section 
              style={{ opacity: homeOpacity, y: homeY }}
              className="h-screen w-full flex flex-col items-center justify-start text-center pt-[100px] sm:pt-[80px] relative z-10 pointer-events-auto overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="font-extralight text-sm sm:text-[27px] lg:text-[49px]"
              >
                COMPUTERIZED
              </motion.div>

              <div className="flex flex-row items-center justify-center sm:gap-4 font-extrabold text-[22px] sm:text-[45px] lg:text-[77px] leading-tight overflow-hidden pb-2">
                <motion.span 
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                  className="text-[#2B237C] inline-block mr-2 sm:mr-0"
                >
                  EMBROIDERY
                </motion.span>
                
                <motion.span 
                  initial={{ opacity: 0, x: -80 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  className="text-gray-300 inline-block"
                >
                  MACHINES
                </motion.span>
              </div>

              <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 px-8 sm:px-10 gap-6 lg:gap-20 mt-[0px] sm:mt-10">
                <div className="overflow-hidden pb-4">
                  <motion.div 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                  >
                    <div className="flex items-center gap-2 text-[20px] sm:text-[26px] mb-1 text-[#2B237C]">
                      <Image src={logo} width={40} height={40} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                      <span className="font-semibold">RK Enterprises</span>
                    </div>
                    <p className="text-[12px] sm:text-lg text-gray-700 font-medium px-[30px] sm:px-0">Empowering Women Through Embroidery Technology</p>
                    <p className="text-[13px] sm:text-base text-gray-500 mt-2 px-4 sm:px-0">Start your own embroidery business with high-performance machines, complete training, and full technical support.</p>
                
                  </motion.div>
                </div>
                
                <div className="hidden lg:block" />
                
                <div className="overflow-hidden pb-4">
                  <motion.div 
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.4, ease: "easeOut" }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left mt-0 hidden lg:flex"
                  >
                    <h3 className="text-lg sm:text-base font-semibold text-[#2B237C]">Advanced 12-Needle Computerized Embroidery Machines & Maggam Devices</h3>
                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      <li>500+ Machines Installed</li>
                      <li>Free Training & Skill Development</li>
                      <li>Latest Imported Machines</li>
                      <li>Sales & Technical Support</li>
                      <li>Suitable for Home & Business Use</li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* PHASE 2: FOUNDER & MISSION SECTION */}
            <section className="h-screen w-full flex items-center justify-center relative z-10 pointer-events-auto">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-[#2B237C]">
                
                {/* LEFT: Founder Story with Image */}
                <motion.div 
                  style={{ opacity: aboutLeftOpacity, x: aboutLeftX, y: aboutLeftY }}
                  className="flex-1 bg-white/92 p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-sm"
                >
                  {/* Profile Header Block */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center lg:justify-start gap-5 mb-6 text-center sm:text-left">
                    <div className="w-20 h-32 sm:w-28 sm:h-40 overflow-hidden border-4 border-white shadow-md shrink-0">
                      <Image 
                        src={founderImg} 
                        alt="Mrs. Mahalakshmi Garu" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center pt-2">
                      <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-500 mb-1">Founder & CEO</h3>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-[#2B237C]">Mrs. Ronanki Kavitha Kumari</h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 font-medium mb-4 leading-relaxed text-center sm:text-left">
                    Her journey began with a small boutique and a passion for creativity. Handling embroidery personally, she built success but faced limitations from lacking manpower and proper technical support, creating dependency.
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">
                    Motivated to explore automation, she entered the embroidery machine industry, importing components and assembling machines to create reliable solutions.
                  </p>
                </motion.div>
                
                <div className="hidden lg:block flex-[1.2]" />
                
                {/* RIGHT: Mission, Quote & Stats */}
                <motion.div 
                  style={{ opacity: aboutRightOpacity, x: aboutRightX, y: aboutRightY }}
                  className="flex-1 text-center lg:text-left bg-white/80 p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-sm"
                >
                  <blockquote className="italic font-medium text-lg sm:text-xl border-l-4 border-[#2B237C] pl-4 mb-6 text-gray-800">
                    "When women set their mind on something with determination, they achieve success."
                  </blockquote>
                  
                  <div className="mb-6">
                    <p className="text-sm sm:text-base text-gray-700">
                      Her mission is to <span className="font-bold text-[#2B237C]">empower 1 lakh women in the next 5 years</span>, providing financial freedom through embroidery.
                    </p>
                  </div>

                  <ul className="space-y-3 font-semibold text-gray-800 text-sm sm:text-base">
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-green-600 text-lg">✔</span> 500+ Machines Installed
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-green-600 text-lg">✔</span> Empowering Women Entrepreneurs
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-green-600 text-lg">✔</span> Trusted Across AP & Telangana
                    </li>
                    <li className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-green-600 text-lg">✔</span> Complete Training & Support
                    </li>
                  </ul>
                </motion.div>
              </div>
            </section>

            {/* 4. Contact & Location Banner (Spans Full Width) */}
            {/* FIXED GAP: Swapped mt-[250px] to mt-12 lg:mt-[250px] and added mx-6 lg:mx-10 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8 mt-[200px] lg:mt-[250px] mx-6 lg:mx-10 hover:shadow-xl transition-shadow pointer-events-auto"
            >
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl font-black text-[#2B237C] mb-3">Visit RK Enterprises</h3>
                <p className="text-gray-600 text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Door No: 39-14-11/1, Near More Super Market, Beside SBI, Birla Junction, Kalinganagar, Madhavadhara, Visakhapatnam, Andhra Pradesh 530007
                </p>
                <div className="mt-4 inline-block bg-green-100 text-green-800 text-sm font-bold px-4 py-1.5 rounded-full">
                  Hours: Open ⋅ Closes 9:00 PM
                </div>
              </div>
            </motion.div>

          </div>
        </>
      )}
    </main>
  );
};

export default EmbroideryShowcase;