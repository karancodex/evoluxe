"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white/95 backdrop-blur-md shadow-sm py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/v4" className="text-2xl font-bold tracking-tight text-[#2b0d3e]">
                    EVOLUXE
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {['Design Ideas', 'Magazines', 'Cities', 'Careers'].map((item) => (
                        <Link key={item} href="#" className="text-sm font-medium hover:text-[#7a3f91] transition-colors text-[#2b0d3e]">
                            {item}
                        </Link>
                    ))}
                    <button className="px-6 py-2 rounded-full text-sm font-bold transition-transform hover:scale-105 bg-[#7a3f91] text-white shadow-lg shadow-[#7a3f91]/30">
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
