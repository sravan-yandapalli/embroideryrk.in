"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon, MapPin } from 'lucide-react';
import Link from 'next/link';
import g1 from '@/assets/images/g1.jpg';
import g2 from '@/assets/images/g2.webp';
import g3 from '@/assets/images/g3.webp';
import g4 from '@/assets/images/g4.webp';

const storeImages = [
  g1.src,
  g2.src,
  g3.src,
  g4.src
];

export default function StoreSlideshowBlock() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === storeImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev === storeImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? storeImages.length - 1 : prev - 1));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col gap-6 mt-[200px] lg:mt-[250px] mx-6 lg:mx-10 pointer-events-auto"
    >
      {/* Top Section with ENRICHED MATTER */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 px-2">
        <div className="max-w-3xl">
          <h3 className="text-3xl font-black text-[#21186B] mb-3">Step Inside RK Enterprises</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Explore our state-of-the-art showroom in Visakhapatnam. Get a glimpse of our high-speed 12-needle computerized embroidery machines, our massive wall of premium threads, and the comprehensive setup where we provide free training and technical support to our clients. 
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1 font-medium">
            <MapPin size={16} className="text-[#655BB3]" /> Birla Junction, Visakhapatnam
          </p>
        </div>
        <Link href="/Gallery" className="btn-secondary whitespace-nowrap flex items-center gap-2 text-[#21186B] font-medium hover:bg-gray-100 transition-colors mt-2 md:mt-0">
          <ImageIcon size={18} />
          View Full Gallery
        </Link>
      </div>

      {/* 16:9 Responsive Slideshow */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gray-100 group shadow-inner">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={storeImages[currentIndex]}
            alt={`RK Enterprises Store Image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Slideshow Controls */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#21186B] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#21186B] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {storeImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}