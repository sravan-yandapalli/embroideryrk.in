"use client"
import type { NextPage } from 'next';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";
import hamburger from "@/assets/images/hamburger.svg";
import cross from "@/assets/images/cross.svg";

const Navbar: NextPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-[100] shadow-[0px_2px_2px_rgba(0,0,0,0.15)] sm:shadow-[0px_4px_4px_rgba(0,0,0,0.25)] bg-white flex items-center justify-between py-[10px] px-[46px] sm:px-[60px] md:px-[120px] box-border gap-5 text-left text-base text-[var(--primary)]
            transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.9,0,0.09,1)]
            ${isLoaded ? "translate-y-0" : "-translate-y-[180px]"}
        `}>
            
            {/* Logo */}
            <Link href="/" className="no-underline flex items-center gap-3">
                <Image
                    className="w-[45px] sm:w-[50px] md:w-[60px] h-auto object-contain"
                    src={logo}
                    alt="RK Embroidery Logo"
                    width={60}
                    height={60}
                />
                <div className="relative text-lg sm:text-[26px]">
                    <span className="font-semibold">{`RK `}</span>
                    <span>Embroidery</span>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                <Link href="/home" className="no-underline cursor-pointer text-[var(--text-primary)] hover:text-[var(--primary)] hover:font-bold transition-all duration-200">Home</Link>
                <Link href="/machines" className="no-underline cursor-pointer text-[var(--text-primary)] hover:text-[var(--primary)] hover:font-bold transition-all duration-200">Embroidery Machines</Link>
                <Link href="/materials" className="no-underline cursor-pointer text-[var(--text-primary)] hover:text-[var(--primary)] hover:font-bold transition-all duration-200">Materials</Link>
                <Link href="/gallery" className="no-underline cursor-pointer text-[var(--text-primary)] hover:text-[var(--primary)] hover:font-bold transition-all duration-200">Gallery</Link>
                <Link href="/about" className="no-underline cursor-pointer text-[var(--text-primary)] hover:text-[var(--primary)] hover:font-bold transition-all duration-200">About</Link>
            </div>
                
            {/* Right Buttons */}
            <div className="flex items-center gap-6">
                <Link href="/contact" className="no-underline">
                    <div className="hidden cursor-pointer md:block h-9 w-[110px] relative rounded-[10px] bg-[var(--gray)] hover:bg-[var(--primary)] hover:text-white transition-all duration-300">
                        <div className="absolute top-[0px] left-[0px] rounded-[20px] w-[110px] h-9 pointer-events-none" />
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_33px)] font-medium">
                            Contact
                        </div>
                    </div>
                </Link>

                <Link href="/book-demo" className="no-underline">
                    <div className="hidden sm:block cursor-pointer h-9 w-[110px] relative rounded-[10px] bg-[var(--primary)] text-white hover:bg-[var(--gray)] hover:text-black transition-all duration-300">
                        <div className="absolute top-[0px] left-[0px] rounded-[10px] w-[110px] h-9 pointer-events-none" />
                        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_46px)] font-medium">
                            Book Demo
                        </div>
                    </div>
                </Link>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div 
                    className="fixed inset-0 bg-black/30 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Mobile Menu */}
            <div className={`absolute top-full left-0 w-[240px] md:hidden flex flex-col gap-5 bg-[#21186b] text-white py-6 px-8 z-50 transform transition-all duration-300 ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
            }`}>
                <Link href="/home" className="no-underline w-fit hover:text-[var(--primary)] hover:bg-white hover:font-medium p-[5px] rounded transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/machines" className="no-underline w-fit hover:text-[var(--primary)] hover:bg-white hover:font-medium p-[5px] rounded transition-colors" onClick={() => setMenuOpen(false)}>Embroidery Machines</Link>
                <Link href="/materials" className="no-underline w-fit hover:text-[var(--primary)] hover:bg-white hover:font-medium p-[5px] rounded transition-colors" onClick={() => setMenuOpen(false)}>Materials</Link>
                <Link href="/gallery" className="no-underline w-fit hover:text-[var(--primary)] hover:bg-white hover:font-medium p-[5px] rounded transition-colors" onClick={() => setMenuOpen(false)}>Gallery</Link>
                <Link href="/about" className="no-underline w-fit hover:text-[var(--primary)] hover:bg-white hover:font-medium p-[5px] rounded transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            </div>

            {/* Hamburger / Cross Toggle */}
            <Image
                src={menuOpen ? cross : hamburger}
                alt="menu toggle"
                width={30}
                height={30}
                className="md:hidden cursor-pointer z-50"
                onClick={() => setMenuOpen(!menuOpen)}
            />

        </nav>
    );
};

export default Navbar;