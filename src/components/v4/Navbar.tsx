"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User, Menu, X } from 'lucide-react';
import { topNavLinks, bottomNavLinks, slugify } from '@/data/v4/nav-data';

const Navbar = () => {
    // Reverting to individual state hooks to resolve HMR/React Hook order mismatch
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);

        // Check initial scroll
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (menuName: string) => {
        if (hoverTimeout) clearTimeout(hoverTimeout);
        setActiveMenu(menuName);
    };

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setActiveMenu(null);
        }, 300); // 300ms delay before closing
        setHoverTimeout(timeout);
    };

    const toggleMobileSubmenu = (name: string) => {
        console.log("Toggle mobile submenu for:", name);
        // Future implementation for mobile accordion toggle
    };

    const getLink = (item: string) => {
        const magazineItems = topNavLinks.find(link => link.name === 'Magazine')?.columns?.flatMap(col => col.items) || [];
        const magazineSlug = slugify(item);

        if (magazineItems.includes(item) || item === 'Magazine') {
            return `/v4/magazine/${magazineSlug}`;
        }

        const cityItems = topNavLinks.find(link => link.name === 'Cities')?.columns?.flatMap(col => col.items) || [];
        if (cityItems.includes(item)) {
            return `/v4/city/${slugify(item)}`;
        }

        const moreItems = topNavLinks.find(link => link.name === 'More')?.columns?.flatMap(col => col.items) || [];
        const resourceItems = bottomNavLinks.find(link => link.name === 'Resources')?.columns?.flatMap(col => col.items) || [];
        if (moreItems.includes(item) || resourceItems.includes(item)) {
            return `/v4/company/${slugify(item)}`;
        }

        return `/v4/topic/${slugify(item)}`;
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-sans border-b bg-white ${scrolled ? 'shadow-md border-stone-200' : 'border-stone-100'}`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col relative">

                {/* TOP ROW */}
                <div className="h-20 flex items-center justify-between border-b border-stone-100/50 relative z-20 bg-white">
                    {/* Left: Logo */}
                    <Link href="/v4" className="flex items-center gap-2 relative group z-50 shrink-0">
                        <div className="relative h-10 w-48 md:h-12 md:w-56">
                            <Image
                                src="/v4/evoluxe-logo.png"
                                alt="EVOLUXE Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Center: Top Nav Links */}
                    <div className="hidden xl:flex items-center justify-center absolute left-0 right-0 h-full pointer-events-none">
                        <ul className="pointer-events-auto flex items-center space-x-8 h-full bg-white px-6">
                            {topNavLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className="relative flex items-center h-full"
                                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={getLink(link.name)}
                                        className={`flex items-center gap-1 text-[14px] font-medium tracking-wide transition-all duration-300 ${activeMenu === link.name ? 'text-[#7a3f91]' : 'text-[#483c32] hover:text-[#7a3f91]'}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && (
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === link.name ? 'rotate-180 text-[#7a3f91]' : 'text-gray-400'}`} />
                                        )}
                                    </Link>

                                    {/* DROPDOWN: Local Anchored Position */}
                                    <AnimatePresence>
                                        {activeMenu === link.name && link.hasDropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className={`absolute top-full pt-4 z-50 ${link.isMega ? 'left-[-40px]' : 'left-0'}`}
                                            >
                                                {/* Invisible Bridge to prevent closing on gap hover */}
                                                <div className="absolute top-0 left-0 right-0 h-4 bg-transparent" />

                                                <div className="bg-white shadow-[0_10px_40px_-5px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden border-t-[3px] border-[#7a3f91] ring-1 ring-stone-100 min-w-[240px] max-w-[90vw]">
                                                    {link.columns ? (
                                                        <div className={`flex bg-white ${link.isMega ? 'p-8 gap-12' : 'p-6 flex-col gap-4'}`}>
                                                            {link.columns.map((col, idx) => (
                                                                <div key={idx} className={`${link.isMega ? 'w-[200px]' : 'w-full'}`}>
                                                                    {col.title && (
                                                                        <h3 className="font-serif text-[15px] text-[#2b0d3e] border-b border-stone-100 pb-2 mb-3 font-bold tracking-wide">
                                                                            {col.title}
                                                                        </h3>
                                                                    )}
                                                                    <ul className="space-y-2.5">
                                                                        {col.items.map((item) => (
                                                                            <li key={item}>
                                                                                <Link href={getLink(item)} className="block text-[13px] text-stone-500 hover:text-[#7a3f91] hover:font-medium hover:translate-x-1 transition-all duration-200">
                                                                                    {item}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                            {/* Mega Menu Visual Optional */}
                                                            {link.isMega && (
                                                                <div className="w-[200px] hidden 2xl:block bg-stone-100 rounded-md overflow-hidden relative self-stretch">
                                                                    <img src="/v4/interior-living-3d.jpg" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Promo" />
                                                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 p-4">
                                                                        <span className="text-white text-xs font-bold uppercase tracking-widest">Trending</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="p-6 text-center">
                                                            <p className="text-xs text-stone-400 font-medium tracking-wider">COMING SOON</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: User Icon */}
                    <div className="hidden md:flex items-center gap-6 shrink-0">
                        <div className="h-6 w-px bg-stone-200"></div>
                        <button className="text-[#483c32] hover:text-[#7a3f91] transition-colors p-1 hover:bg-stone-50 rounded-full">
                            <User className="w-5 h-5" />
                        </button>
                        {/* Mobile Trigger */}
                        <button className="xl:hidden ml-4 text-[#2b0d3e]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="h-14 flex items-center justify-between hidden xl:flex relative z-10 bg-white">
                    {/* Left & Center: Bottom Nav Links */}
                    <div className="flex-1 flex items-center">
                        <ul className="flex items-center space-x-10 h-full">
                            {bottomNavLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className="relative flex items-center h-full"
                                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={getLink(link.name)}
                                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-wide uppercase transition-colors ${activeMenu === link.name ? 'text-[#7a3f91]' : 'text-[#483c32] hover:text-[#7a3f91]'}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeMenu === link.name ? 'rotate-180' : ''}`} />}
                                    </Link>

                                    {/* DROPDOWN: Local Anchored Position for Bottom Row */}
                                    <AnimatePresence>
                                        {activeMenu === link.name && link.hasDropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 z-50 pt-2"
                                            >
                                                {/* Invisible Bridge */}
                                                <div className="absolute top-0 left-0 right-0 h-2 bg-transparent" />

                                                <div className="bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden border-t-[3px] border-[#7a3f91] ring-1 ring-stone-100 min-w-[220px]">
                                                    {link.columns ? (
                                                        <div className="flex p-6 gap-8 bg-white flex-col">
                                                            {link.columns.map((col, idx) => (
                                                                <div key={idx} className="w-[180px]">
                                                                    <h3 className="font-serif text-sm text-[#2b0d3e] border-b border-stone-100 pb-2 mb-2 font-bold">{col.title}</h3>
                                                                    <ul className="space-y-2">
                                                                        {col.items.map((item) => (
                                                                            <li key={item}>
                                                                                <Link href={getLink(item)} className="block text-[12px] text-stone-500 hover:text-[#7a3f91] hover:translate-x-1 transition-all">
                                                                                    {item}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ) : <div className="p-4 w-[180px] bg-white"><p className="text-xs text-gray-400 text-center">No items</p></div>}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Consult Button */}
                    <div>
                        <button className="px-8 py-2.5 rounded-sm text-[11px] font-black tracking-[0.15em] uppercase transition-all bg-[#7a3f91] text-white hover:bg-[#2b0d3e] shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-transparent hover:border-[#7a3f91]/30">
                            Consult Online Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu Overlay - Simple version for now */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden bg-white fixed inset-0 z-40 pt-24 px-6 overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4">
                            {[...topNavLinks, ...bottomNavLinks].map(link => (
                                <div key={link.name} className="py-2 border-b border-stone-100">
                                    <button
                                        className="text-lg font-medium text-[#2b0d3e] flex justify-between w-full items-center"
                                        onClick={() => toggleMobileSubmenu(link.name)}
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
