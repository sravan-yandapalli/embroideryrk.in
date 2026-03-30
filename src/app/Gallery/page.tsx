import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, MapPin, Heart, Star, Award } from 'lucide-react';

// Generate image list
const galleryImages = Array.from({ length: 41 }, (_, i) => {
  const id = i + 1;
  return {
    src: `/assets/images/mpic (${id}).webp`,
    alt: `Happy Customer Success Story #${id}`,
    span:
      id % 7 === 0
        ? 'md:col-span-2 md:row-span-2'
        : 'col-span-1',
  };
});

export const metadata = {
  title: 'Happy Customers | RK Enterprises',
  description:
    'See our growing family of happy customers and their success stories with RK Enterprises Visakhapatnam.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-34 pb-20 pr-10 overflow-x-clip">
      <div className="container max-w-6xl mx-auto px-6">


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 text-[#655BB3] font-bold mb-4">
                <Heart size={20} fill="#655BB3" />
                <span className="uppercase tracking-widest text-xs">
                  Customer Success
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-[#21186B] mb-6 leading-tight">
                Our Happy <br />
                <span className="text-[#655BB3]">Customers</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At RK Enterprises, customer satisfaction is the heartbeat of our business.
                Take a look at our growing family of successful entrepreneurs,
                boutique owners, and creators who have trusted our embroidery machines
                and materials to bring their visions to life.
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-gray-600 bg-gray-50 inline-flex px-5 py-2.5 rounded-full border border-gray-200">
                <MapPin size={16} className="text-[#21186B]" />
                Birla Junction, Visakhapatnam, 530007
              </div>
            </div>

            {/* Right */}
            <div className="bg-[#f8f9fc] p-8 rounded-3xl border border-gray-100 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#21186B] mb-4">
                Why Customers Love Us
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Star size={20} fill="#655BB3" className="shrink-0 mt-0.5 text-[#655BB3]" />
                  <span className="text-gray-700">
                    <strong>Trusted Quality:</strong> Every machine and product is rigorously tested.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Award size={20} className="shrink-0 mt-0.5 text-[#655BB3]" />
                  <span className="text-gray-700">
                    <strong>Unmatched Support:</strong> We provide expert after-sales service.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <Heart size={20} className="shrink-0 mt-0.5 text-[#655BB3]" />
                  <span className="text-gray-700">
                    <strong>Empowering Dreams:</strong> Helping businesses grow and succeed.
                  </span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group bg-gray-100 shadow-sm ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={idx < 3} // improves initial load
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#21186B]/80 via-[#21186B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white font-semibold text-lg flex items-center gap-2">
                    <Star size={16} fill="white" className="text-yellow-400" />
                    {image.alt}
                  </span>
                  <span className="text-white/80 text-sm mt-1 block">
                    Click to view success story
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
  );
}