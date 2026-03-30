import React from 'react';
import Link from 'next/link';
import { Palette, Gem, Wrench, Scissors, ArrowRight, ArrowLeft } from 'lucide-react';

// Data extracted from RK Enterprises flyers
const materialsData = [
  {
    id: 'threads',
    title: "Premium Threads & Yarns",
    description: "A massive spectrum of high-quality threads suitable for high-speed computerized embroidery machines.",
    icon: Palette,
    items: [
      "V Plus Viscose Embroidery Threads (Rayon)",
      "Royal Polyester Threads",
      "Premium Zari Threads",
      "Silk & Nylon Threads",
      "Ycones & Custom Yarn"
    ]
  },
  {
    id: 'maggam',
    title: "Maggam Embellishments",
    description: "Add the perfect finishing touch to your designer wear with our beautiful assortment of Maggam materials.",
    icon: Gem,
    items: [
      "1.7mm, 2.0mm, 2.5mm Exact Sized Beads",
      "3mm & 4mm Pearls",
      "Jardhoshi, Sequence & Cording",
      "Motives, Butas & Patch Necks",
      "Tazzles & Decorative Borders"
    ]
  },
  {
    id: 'spares',
    title: "Machine Spares & Accessories",
    description: "Keep your 12-needle machines running smoothly with our genuine, high-speed spare parts and tools.",
    icon: Wrench,
    items: [
      "Groz-Beckert Needles (High-Speed Standard)",
      "Bobbins & Bobbin Cases",
      "Precision Cutters & Trimmers",
      "Fusion Paper Rolls",
      "Special Design Catalogues"
    ]
  },
  {
    id: 'tailoring',
    title: "Laces & Tailoring Basics",
    description: "A complete selection of tailoring staples for boutique owners, fashion designers, and creators.",
    icon: Scissors,
    items: [
      "Premium Designer Fabrics",
      "RoMy Lace (Authorized Distributor)",
      "Chetna Lace Collections",
      "High-Quality Fasteners (Hooks & Buttons)",
      "General Tailoring Materials"
    ]
  }
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center pt-30 pb-24">
      {/* Background Decorative Blur using your custom utility */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] hero-circle -z-10 opacity-40 mix-blend-multiply pointer-events-none"></div>

      {/* Hero Section */}
      <section className="container max-w-5xl mx-auto text-center mb-20">
        <h1 className="hero-title mb-6 leading-tight">
          <span style={{ color: 'var(--primary)' }}>Premium Embroidery</span>
          <br />
          <span style={{ color: 'var(--secondary)' }}>Materials & Accessories</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
          Discover a world of infinite variety and uncompromising quality. Rooted in decades of textile heritage, RK Enterprises brings you an exhaustive range of computerized embroidery and Maggam materials to turn your creativity into income.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/Form"><button className="btn-primary flex items-center gap-2 hover:opacity-90 transition-opacity">
            Book Now <ArrowRight size={18} />
          </button>
          </Link>
          <Link href="/Form" ><button className="btn-secondary hover:bg-gray-200 transition-colors">
            Contact Sales
          </button></Link>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {materialsData.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id} 
                className="group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ 
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--gray)',
                  boxShadow: '0 10px 40px -10px rgba(33, 24, 107, 0.08)'
                }}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="p-3 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--primary)', color: 'var(--white)' }}
                  >
                    <IconComponent size={24} />
                  </div>
                  <h2 className="text-2xl font-semibold" style={{ color: 'var(--primary)' }}>
                    {category.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed" style={{ color: 'var(--text-primary)', opacity: 0.7 }}>
                  {category.description}
                </p>

                {/* Material List */}
                <ul className="space-y-3">
                  {category.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--secondary)' }}
                      ></div>
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)', opacity: 0.9 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ backgroundColor: 'var(--primary)' }}
                ></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="container max-w-4xl mx-auto px-6 mt-24 text-center">
        <div 
          className="rounded-3xl p-10 relative overflow-hidden"
          style={{ backgroundColor: 'var(--gray)' }}
        >
          <h3 className="text-3xl font-semibold mb-4" style={{ color: 'var(--primary)' }}>
            Need bulk supplies for your business?
          </h3>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-primary)', opacity: 0.8 }}>
            We provide free training, technical support, and the best wholesale pricing for independent boutique owners across Andhra Pradesh & Telangana.
          </p>
          <button className="btn-primary inline-flex items-center gap-2">
            Join Hands with RK Enterprises
          </button>
        </div>
      </section>
    </div>
  );
}