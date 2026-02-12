"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function V2Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useEffect(() => {
        const updateScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", updateScroll);
        return () => window.removeEventListener("scroll", updateScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-[1000] p-6 transition-all duration-700 ${scrolled ? 'pt-4' : 'pt-8'}`}
        >
            <div className={`max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4 rounded-full transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] border border-white/20' : 'bg-[#1a1a1a]/85 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/40'}`}>

                {/* Logo Area */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors duration-500 ${scrolled ? 'bg-[#1a1a1a]' : 'bg-white'} group-hover:bg-gold`}>
                        <span className={`text-[10px] font-black ${scrolled ? 'text-white' : 'text-[#1a1a1a]'}`}>E.</span>
                    </div>
                    <span className={`text-[12px] uppercase tracking-[0.4em] font-black transition-colors duration-500 ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}>Evoluxe</span>
                </Link>

                {/* Navigation Links - Center */}
                <nav className="hidden md:flex items-center gap-12">
                    {["The Studio", "Portfolio", "Materials", "Process", "Journal"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className={`text-[9px] uppercase tracking-[0.3em] font-bold transition-colors relative group ${scrolled ? 'text-[#1a1a1a]/70 hover:text-gold' : 'text-white/80 hover:text-white'}`}
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA - Right */}
                <div className="flex items-center gap-8">
                    <button className={`hidden sm:block text-[9px] uppercase tracking-[0.3em] font-bold transition-colors ${scrolled ? 'text-[#1a1a1a]/50 hover:text-[#1a1a1a]' : 'text-white/50 hover:text-white'}`}>
                        Member Access
                    </button>
                    <button className={`px-8 py-3 text-[9px] uppercase tracking-[0.3em] font-bold rounded-full transition-all duration-500 shadow-lg ${scrolled ? 'bg-[#1a1a1a] text-white hover:bg-gold' : 'bg-white text-[#1a1a1a] hover:bg-gold-soft'} shadow-black/10`}>
                        Inquiry
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
