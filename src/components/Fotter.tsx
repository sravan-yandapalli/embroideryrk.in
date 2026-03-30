"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/images/logo.png";

// --- Data ---
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Our Journey", href: "/about" },
  { label: "Embroidery Machines", href: "/products" },
  { label: "Materials & Supplies", href: "/materials" },
  { label: "Book a Free Demo", href: "/demo" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-600 text-gray-600 relative z-20 overflow-hidden mt-auto">
      {/* Colorful Top Border 
        Inspired by the RK Logo petals (Blue, Green, Orange, Pink) 
      */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#8CC63F] to-[#ED1C24] via-[#F7931E]"></div>
      
      {/* Very subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] rounded-full blur-1xl -translate-y-1/2 translate-x-1 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-8 relative z-10">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand & Welcome Column */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col pr-0 lg:pr-8"
          >
            <Image
                    className="w-[45px] sm:w-[50px] md:w-[60px] h-auto object-contain"
                    src={logo}
                    alt="RK Embroidery Logo"
                    width={60}
                    height={60}
                />
            <h2 className="text-2xl font-black text-blue-400 tracking-tight mb-4 flex items-center gap-2">
              RK ENTERPRISES
            </h2>
            <p className="text-base leading-relaxed text-gray-100 mb-6 max-w-md">
              We believe in turning dedication into success. By providing top-quality computerized embroidery machines and unwavering support, our goal is to empower women to become independent and self-reliant.
            </p>
            
            {/* Colorful Empowerment Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-100 text-pink-700 px-5 py-2.5 rounded-full text-sm font-bold w-fit shadow-sm">
              <span className="text-red-500 animate-pulse">❤️</span> Empowering 1 Lakh Women
            </div>
          </motion.div>

          {/* Contact Details with Colorful Icons */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4"
          >
            <h3 className="text-red-500 font-bold text-lg mb-6">We're Here for You</h3>
            <ul className="space-y-6 text-sm">
              
              {/* Address - Blue Accent */}
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="leading-relaxed text-gray-100 pt-0.5">
                  <strong className="text-blue-200 block mb-0.5 font-bold">Visit our store</strong>
                  39-14-11/1, Near More Super Market, Beside SBI, Birla Junction, Visakhapatnam, AP 530007
                </span>
              </li>

              {/* Phone - Green Accent */}
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <a href="tel:+917032839780" className="text-gray-200 hover:text-green-600 font-bold transition-colors">
                    +91 70328 39780
                  </a>
                  <a href="tel:+917032720972" className="text-gray-200 hover:text-green-600 font-bold transition-colors">
                    +91 70327 20972
                  </a>
                </div>
              </li>

              {/* Email - Orange Accent */}
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:kavimanpowercreations@gmail.com" className="text-gray-200 font-medium hover:text-orange-500 transition-colors break-all pt-2">
                  kavimanpowercreations@gmail.com
                </a>
              </li>

            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar Separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-6" />

        {/* Copyright & Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300">
          <p>
            © {currentYear} <span className="font-semibold text-gray-400">Siri Ganesh Enterprises</span> & RK Enterprises. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 font-medium">
            <Link href="/privacy" className="hover:text-[#2B237C]  text-blue-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#2B237C] text-blue-300  transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;