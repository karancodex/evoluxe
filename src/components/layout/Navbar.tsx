"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [time, setTime] = useState("");

    // Hide global navbar on v2, v3, and v4 pages
    if (pathname?.startsWith("/v2") || pathname?.startsWith("/v3") || pathname?.startsWith("/v4")) return null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        updateClock();
        const timer = setInterval(updateClock, 10000);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(timer);
        };
    }, []);

    const navLinks = [
        { name: "Story", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/process" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ease-[0.76, 0, 0.24, 1] ${isScrolled ? 'w-[calc(100%-4rem)] md:w-auto' : 'w-[calc(100%-4rem)] md:w-[90%]'}`}>
                <div
                    className={`relative px-12 py-3 backdrop-blur-2xl border flex items-center justify-between transition-all duration-700 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${isScrolled ? 'rounded-full' : 'rounded-xl'}`}
                    style={{
                        backgroundColor: isScrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg-top)',
                        borderColor: 'var(--nav-border)'
                    }}
                >
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-white/5 to-black/5 pointer-events-none" />

                    {/* Logo */}
                    <Link href="/" className="relative z-10 group">
                        <span className="text-gold text-[12px] font-serif uppercase tracking-[0.6em] transition-all duration-500 group-hover:tracking-[0.8em] font-bold">
                            EVOLX Studio
                        </span>
                    </Link>

                    {/* Center: Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-16 relative z-10">
                        {navLinks.slice(0, 4).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] uppercase tracking-[0.4em] hover:text-gold transition-all font-bold"
                                style={{ color: 'var(--nav-text)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Interactive Right Side */}
                    <div className="flex items-center gap-10 relative z-10">
                        <div className="hidden lg:flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                            <span className="text-[8px] uppercase tracking-widest font-bold" style={{ color: 'var(--nav-text)', opacity: 0.6 }}>{time} LONDON</span>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="flex items-center gap-4 group"
                        >
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold">Menu</span>
                            <div className="relative w-6 h-[2px] bg-gold/50 group-hover:bg-gold transition-all overflow-hidden" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Overlay Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 90% 10%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[110] bg-charcoal/98 backdrop-blur-3xl flex flex-col pt-40 px-6 md:px-32"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                            <div className="flex flex-col space-y-8">
                                <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">Navigation</span>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 + 0.5 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="group relative inline-block"
                                        >
                                            <span className="text-4xl md:text-6xl font-serif text-white/20 group-hover:text-gold-soft transition-all duration-700 group-hover:italic group-hover:pl-8">
                                                {link.name}
                                            </span>
                                            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gold text-xl opacity-0 group-hover:opacity-100 transition-all">0{i + 1}</span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="hidden lg:flex flex-col justify-between border-l border-white/5 pl-20 py-8">
                                <div>
                                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] mb-12 block font-bold">Atelier Location</span>
                                    <p className="text-2xl font-serif italic text-white/60 leading-relaxed mb-4">
                                        Rue de l'Évolution, 12<br />
                                        Private Chambers<br />
                                        75008 Paris
                                    </p>
                                    <Link href="/contact" className="text-gold text-[9px] uppercase tracking-[0.4em] border-b border-gold/30 pb-1">Get Directions</Link>
                                </div>

                                <div className="space-y-6">
                                    <span className="text-white/20 text-[9px] uppercase tracking-[1em]">Press & Inquiries</span>
                                    <p className="text-xl font-serif">concierge@EVOLX Studio.com</p>
                                    <div className="flex gap-8">
                                        <span className="text-gold text-[9px] uppercase tracking-[0.4em]">Instagram</span>
                                        <span className="text-gold text-[9px] uppercase tracking-[0.4em]">LinkedIn</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-12 right-12 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all group"
                        >
                            <span className="text-xl group-hover:rotate-180 transition-transform">✕</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
