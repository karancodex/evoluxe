"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { topNavLinks, bottomNavLinks, slugify, getLink } from '@/data/nav-data';
import { useConsultation } from './providers/ConsultationProvider';

const Navbar = () => {
    // Reverting to individual state hooks to resolve HMR/React Hook order mismatch
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileNavView, setMobileNavView] = useState<'main' | string>('main');
    const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const { openConsultation } = useConsultation();

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



    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${scrolled ? 'shadow-md border-stone-200/50 backdrop-blur-md bg-white/95' : 'border-transparent bg-white'}`}
        >
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col relative">

                {/* TOP ROW */}
                <div className="h-20 flex items-center justify-between border-b border-stone-100/20 relative z-20 bg-transparent">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center gap-2 relative group z-50 shrink-0">
                        <div className="relative h-12 w-48 md:h-16 md:w-64">
                            <Image
                                src="/logo.png"
                                alt="EVOLXStudio Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Center: Top Nav Links */}
                    <div className="hidden xl:flex items-center justify-center absolute left-0 right-0 h-full pointer-events-none">
                        <ul className="pointer-events-auto flex items-center space-x-8 h-full bg-transparent px-6">
                            {topNavLinks.map((link) => (
                                <li
                                    key={link.name}
                                    className="relative flex items-center h-full"
                                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Link
                                        href={getLink(link.name)}
                                        className={`flex items-center gap-1 text-[15px] font-medium tracking-wide transition-all duration-300 ${activeMenu === link.name ? 'text-[#eb595f]' : 'text-[#2d2412] hover:text-[#eb595f]'}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && (
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeMenu === link.name ? 'rotate-180 text-[#eb595f]' : 'text-stone-400'}`} />
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

                                                <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden border border-stone-100 min-w-[240px] max-w-[90vw]">
                                                    {link.columns ? (
                                                        <div className={`flex bg-white ${link.isMega ? 'p-8 gap-12' : 'p-6 flex-col gap-4'}`}>
                                                            {link.columns.map((col, idx) => (
                                                                <div key={idx} className={`${link.isMega ? 'w-[200px]' : 'w-full'}`}>
                                                                    {col.title && (
                                                                        <h3 className="text-[13px] text-stone-400 border-b border-stone-50 pb-2 mb-3 font-bold tracking-widest uppercase">
                                                                            {col.title}
                                                                        </h3>
                                                                    )}
                                                                    <ul className="space-y-3">
                                                                        {col.items.map((item) => (
                                                                            <li key={item}>
                                                                                <Link href={getLink(item)} className="block text-[14px] text-[#2d2412] hover:text-[#eb595f] hover:translate-x-1 transition-all duration-200">
                                                                                    {item}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                            {/* Mega Menu Visual Optional */}
                                                            {link.isMega && (
                                                                <div className="w-[200px] hidden 2xl:block bg-stone-50 rounded-lg overflow-hidden relative self-stretch">
                                                                    <img src="/v4/interior-living-3d.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="Promo" />
                                                                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 p-4">
                                                                        <span className="text-white text-[10px] font-bold uppercase tracking-widest">Trending Designs</span>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        <div className="p-6 text-center">
                                                            <p className="text-xs text-stone-400 font-medium tracking-wider text-center">Coming Soon</p>
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

                    {/* Right: Trigger */}
                    <div className="flex items-center gap-4 shrink-0">
                        <button
                            className="xl:hidden flex items-center gap-2 bg-[#eb595f] text-white px-5 py-2.5 rounded-full shadow-md active:scale-95 transition-all"
                            onClick={() => {
                                setMobileMenuOpen(true);
                                setMobileNavView('main');
                            }}
                        >
                            <Menu className="w-5 h-5" />
                            <span className="text-[11px] font-bold uppercase tracking-widest">Menu</span>
                        </button>
                    </div>
                </div>


                {/* BOTTOM ROW */}
                <div className="h-14 flex items-center justify-between hidden xl:flex relative z-10 bg-transparent">
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
                                        className={`flex items-center gap-1 text-[13px] font-semibold tracking-wide uppercase transition-colors ${activeMenu === link.name ? 'text-[#eb595f]' : 'text-[#2d2412] hover:text-[#eb595f]'}`}
                                    >
                                        {link.label}
                                        {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform fill-current ${activeMenu === link.name ? 'rotate-180' : ''}`} />}
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

                                                <div className="bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] rounded-lg overflow-hidden border-t-[3px] border-[#eb595f] ring-1 ring-stone-100 min-w-[220px]">
                                                    {link.columns ? (
                                                        <div className="flex p-6 gap-8 bg-white flex-col">
                                                            {link.columns.map((col, idx) => (
                                                                <div key={idx} className="w-[180px]">
                                                                    <h3 className="font-serif text-sm text-[#4d3b1a] border-b border-stone-100 pb-2 mb-2 font-bold">{col.title}</h3>
                                                                    <ul className="space-y-2">
                                                                        {col.items.map((item) => (
                                                                            <li key={item}>
                                                                                <Link href={getLink(item)} className="block text-[12px] text-[#4d3b1a]/70 hover:text-[#c5a059] hover:translate-x-1 transition-all">
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
                        <button
                            onClick={openConsultation}
                            className="px-8 py-2.5 rounded-sm text-[11px] font-black tracking-[0.15em] uppercase transition-all bg-[#eb595f] text-white hover:bg-[#2d2412] shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-transparent hover:border-[#eb595f]/30"
                        >
                            Consult Online Now
                        </button>
                    </div>
                </div>

            </div>

            {/* Mobile Menu Sidebar - App Style */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[110]"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="xl:hidden bg-[#faf9f6] fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-[120] shadow-[-10px_0_50px_rgba(0,0,0,0.1)] flex flex-col"
                        >
                            {/* Drawer Header */}
                            <div className="h-20 px-6 flex items-center justify-between border-b border-stone-100 bg-white">
                                {mobileNavView === 'main' ? (
                                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-stone-400">Navigation</span>
                                ) : (
                                    <button
                                        onClick={() => setMobileNavView('main')}
                                        className="flex items-center gap-2 text-stone-800 hover:text-[#eb595f] transition-colors"
                                    >
                                        <ChevronDown className="w-5 h-5 rotate-90 fill-current" />
                                        <span className="text-sm font-bold uppercase tracking-widest">Back</span>
                                    </button>
                                )}
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 bg-stone-50 rounded-full text-stone-400 hover:text-[#4d3b1a] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto px-6 py-8">
                                <AnimatePresence mode="wait">
                                    {mobileNavView === 'main' ? (
                                        <motion.div
                                            key="main-nav"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-4"
                                        >
                                            {[...topNavLinks, ...bottomNavLinks].map((link, idx) => (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.03 }}
                                                >
                                                    <div className="group">
                                                        {link.hasDropdown ? (
                                                            <button
                                                                onClick={() => setMobileNavView(link.name)}
                                                                className="w-full flex items-center justify-between py-4 border-b border-stone-100 group-active:scale-[0.98] transition-transform"
                                                            >
                                                                <span className="text-xl md:text-2xl font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">
                                                                    {link.label}
                                                                </span>
                                                                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-[#eb595f]/10 group-hover:text-[#eb595f] transition-all">
                                                                    <ChevronDown className="w-5 h-5 -rotate-90" />
                                                                </div>
                                                            </button>
                                                        ) : (
                                                            <Link
                                                                href={getLink(link.name)}
                                                                onClick={() => setMobileMenuOpen(false)}
                                                                className="w-full flex items-center justify-between py-4 border-b border-stone-100 group-active:scale-[0.98] transition-transform"
                                                            >
                                                                <span className="text-xl md:text-2xl font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">
                                                                    {link.label}
                                                                </span>
                                                            </Link>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sub-nav"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="space-y-8"
                                        >
                                            <div className="mb-10">
                                                <h2 className="text-4xl font-bold text-[#2d2412] mb-2">
                                                    {[...topNavLinks, ...bottomNavLinks].find(l => l.name === mobileNavView)?.label}
                                                </h2>
                                                <div className="w-16 h-1 bg-[#eb595f] rounded-full" />
                                            </div>

                                            <div className="space-y-10">
                                                {[...topNavLinks, ...bottomNavLinks].find(l => l.name === mobileNavView)?.columns?.map((col, idx) => (
                                                    <div key={idx} className="space-y-4">
                                                        {col.title && (
                                                            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#eb595f]">
                                                                {col.title}
                                                            </h3>
                                                        )}
                                                        <div className="flex flex-col gap-4">
                                                            {col.items.map(item => (
                                                                <Link
                                                                    key={item}
                                                                    href={getLink(item)}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="text-lg text-[#2d2412]/80 hover:text-[#eb595f] transition-colors active:translate-x-2 transition-all"
                                                                >
                                                                    {item}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-6 bg-white border-t border-stone-100 flex flex-col gap-4">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        openConsultation();
                                    }}
                                    className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-xl shadow-lg active:scale-95 transition-all text-sm uppercase tracking-widest whitespace-nowrap"
                                >
                                    Consult a Designer Free
                                </button>
                                <div className="flex items-center justify-center gap-8 py-2">
                                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Connect:</span>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-500 text-xs font-bold">IG</div>
                                        <div className="w-10 h-10 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-500 text-xs font-bold">YT</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
