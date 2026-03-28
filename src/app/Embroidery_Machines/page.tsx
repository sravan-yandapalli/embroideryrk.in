"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import machine1 from "@/assets/images/m1.png";
import machine2 from "@/assets/images/m2.png";
import machine3 from "@/assets/images/m3.png";

const machines = [
  {
    title: "RK1201 (Butterfly Model)",
    speed: "1000 SPM",
    image: machine1,
    features: [
      "10” Touch Screen (Dahao A15 Plus)",
      "Frame Area: 20x32 & 20x48 inch",
      "12 Needles",
      "Automatic / Manual Trimmer",
      "Thread Break Detection",
      "Beads & Sequence Add-ons",
      "USB, Wi-Fi & LAN",
      "Automatic Logo Converter",
    ],
  },
  {
    title: "RK1201 (Advance Pro)",
    speed: "1200 SPM",
    image: machine2,
    highlight: true,
    features: [
      "Dahao A15 Pro (New Launch)",
      "High Speed 1200 SPM",
      "Frame Moving 360°",
      "Air Proof System",
      "High Speed Shuttle",
      "Auto Logo Converter",
      "Smooth Finishing",
    ],
  },
  {
    title: "RK1201 (Top End Model)",
    speed: "1200 SPM",
    image: machine3,
    features: [
      "Dahao A15 Pro",
      "12 Needles",
      "High Speed 1200 SPM",
      "Air Proof System",
      "High Speed Shuttle",
      "Auto Signature Converter",
      "USB, Wi-Fi & LAN",
      "Premium Finishing",
    ],
  },
];

export default function MachinesPage() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] py-10 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e2a78] mb-3 tracking-tight">
          RK 12-Needle Machines
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore our advanced computerized embroidery machines designed for high-performance business and home use.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">

        {machines.map((machine, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className={`
              group relative rounded-3xl p-5 sm:p-7 flex flex-col
              shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
              ${machine.highlight
                ? "bg-gradient-to-br from-[#1e2a78] to-[#2B237C] text-white lg:scale-105 z-10"
                : "bg-white text-gray-900"}
            `}
          >

            {/* BEST SELLER BADGE */}
            {machine.highlight && (
              <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                BEST SELLER
              </div>
            )}

            {/* IMAGE */}
            <div className="relative flex justify-center mb-4 mt-2 h-[180px] sm:h-[200px]">
              <Image
                src={machine.image}
                alt={machine.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out"
              />
            </div>

            {/* TITLE */}
            <h2 className="text-lg sm:text-xl font-bold text-center mb-1">
              {machine.title}
            </h2>

            {/* SPEED */}
            <p className={`text-center font-semibold mb-5 text-sm sm:text-base ${
              machine.highlight ? "text-blue-200" : "text-[#2B237C]"
            }`}>
              Speed: {machine.speed}
            </p>

            {/* FEATURES */}
            <ul className="space-y-2.5 text-xs sm:text-sm flex-1 mb-6">
              {machine.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className={`shrink-0 ${
                    machine.highlight ? "text-green-400" : "text-green-500"
                  }`}>
                    ✔
                  </span>
                  <span className="leading-tight text-gray-600 data-[highlight=true]:text-gray-100" data-highlight={machine.highlight}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTONS */}
            <div className="mt-auto flex gap-3">
              <Link href="/demo" className="flex-1">
                <button
                  className={`
                    w-full py-2.5 sm:py-3 rounded-xl font-bold text-sm transition-colors duration-300
                    ${machine.highlight
                      ? "bg-white text-[#2B237C] hover:bg-gray-100 shadow-md"
                      : "bg-[#2B237C] text-white hover:bg-[#1f1959] shadow-md"
                    }
                  `}
                >
                  Book Demo
                </button>
              </Link>

              <a href="tel:+917032839780" className="flex-1">
                <button 
                  className={`
                    w-full py-2.5 sm:py-3 rounded-xl text-sm font-semibold transition-colors duration-300 border
                    ${machine.highlight
                      ? "border-white/30 text-gray-400 hover:bg-white/10"
                      : "border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                    }
                  `}
                >
                  Enquiry
                </button>
              </a>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}