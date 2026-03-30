"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-start py-20 relative z-20 overflow-x-clip">
      
      {/* Main CTA Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center w-full px-4 mb-16 mt-10" 
      >
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-[#2B237C] mb-6 drop-shadow-sm">
          MASTER THE CRAFT
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto font-medium">
          Unlock unlimited creative possibilities with the RK series precision engineering. We provide everything you need to become independent and self-reliant. Turn your creativity into income!
        </p>
        <Link href="/demo">
          <button className="mt-8 px-10 py-4 bg-[#2B237C] text-white rounded-full font-bold shadow-xl hover:scale-105 transition-transform text-sm sm:text-base hover:bg-[#1f1959]">
            Book a Free Demo & Training
          </button>
        </Link>
      </motion.div>

      {/* BENTO GRID */}
      <div className="w-full max-w-7xl px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
   {/* 2. Maggam & Add-ons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          // Ensure mx-[10px] is REMOVED from this line:
          className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-[#2B237C] mb-4">RK 12-Needle Models</h3>
          <div className="space-y-4 text-sm text-gray-700">
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <strong className="block text-blue-900 mb-1">RK1201 (Butterfly Model)</strong>
              10" Touch Screen, Dahao A15 Plus, 1000 SPM.
            </div>
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <strong className="block text-blue-900 mb-1">RK1201 (Advance Pro)</strong>
              Dahao A15 Pro (New Launch), 1200 SPM High Speed.
            </div>
            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <strong className="block text-blue-900 mb-1">RK1201 (Top End Model)</strong>
              Automatic Logo & Signature Converter, Air Proof.
            </div>
          </div>
        </motion.div>

        {/* 2. Maggam & Add-ons */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white mx-[10px] p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold text-[#2B237C] mb-4">Maggam Devices & Features</h3>
          <ul className="space-y-4 text-sm text-gray-700 flex-1">
            <li className="flex items-start gap-3">
              <span className="text-[#2B237C] text-lg leading-none">✦</span> 
              <span><strong>Double Beads Device</strong> for intricate designs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2B237C] text-lg leading-none">✦</span> 
              <span><strong>Triple Beads</strong> (with double sequence)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2B237C] text-lg leading-none">✦</span> 
              <span><strong>Four Beads</strong> (Jardhoshi supported)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2B237C] text-lg leading-none">✦</span> 
              <span>Automatic & Manual Thread Trimmer</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#2B237C] text-lg leading-none">✦</span> 
              <span>Wi-Fi, LAN, & USB Connectivity</span>
            </li>
          </ul>
        </motion.div>

        {/* 3. Products & Materials */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#2B237C] text-white p-8 mx-[10px] rounded-3xl shadow-lg flex flex-col hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-bold mb-4 text-white">Complete Supplies</h3>
          <p className="text-blue-200 text-sm mb-6">We supply premium materials for the perfect finish, ensuring your work always stands out.</p>
          <ul className="space-y-3 text-sm text-blue-50 flex-1 font-medium">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> V Plus Viscose & Royal Polyester</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> Zari, Nylon, and Silk Threads</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> Groz-Beckert Needles</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> Fusion Paper Rolls & Cutters</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> 1.7mm - 4mm Beads & Pearls</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-300 rounded-full"></span> All Machine Spare Parts</li>
          </ul>
        </motion.div>

        {/* 4. Contact (Centered on Desktop & Styled) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          // lg:col-start-2 is the magic class that centers it in the 3-column grid!
          className="bg-white py-[10px] rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-shadow w-full lg:col-start-2"
        >
          <h3 className="text-2xl font-black text-[#2B237C] text-center tracking-wide">
            Get In Touch
          </h3>
          
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <a 
              href="tel:+917032839780" 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#2B237C] px-6 py-4 rounded-2xl font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300 no-underline border border-blue-100"
            >
              <span className="text-xl">📞</span> +91 70328 39780
            </a>
            
            <a 
              href="tel:+917032720972" 
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#2B237C] px-6 py-4 rounded-2xl font-bold hover:shadow-md hover:-translate-y-1 transition-all duration-300 no-underline border border-blue-100"
            >
              <span className="text-xl">📞</span> +91 70327 20972
            </a>

            <a 
              href="mailto:kavimanpowercreations@gmail.com" 
              className="flex items-center justify-center gap-3 bg-gray-50 text-gray-700 px-6 py-4 rounded-2xl font-medium text-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 no-underline border border-gray-200 mt-2"
            >
              <span className="text-xl">✉️</span> Email Us
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;