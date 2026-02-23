"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const V3Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Kitchens", href: "#kitchens" },
        { name: "Wardrobes", href: "#wardrobes" },
        { name: "How it works", href: "#process" },
        { name: "Transparency", href: "#value" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled ? "py-3 bg-white/90 backdrop-blur-md shadow-lg" : "py-5 bg-transparent"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/v3" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-amethyst-primary flex items-center justify-center rounded-lg shadow-lg group-hover:rotate-6 transition-transform">
                        <span className="text-white font-serif text-xl font-bold">E</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-xl font-serif tracking-widest uppercase font-bold ${isScrolled ? "text-amethyst-dark" : "text-white"}`}>
                            EVOLX Studio
                        </span>
                        <span className="text-[8px] uppercase tracking-[0.4em] text-amethyst-primary font-bold">Premium Interiors</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-[11px] uppercase tracking-widest font-bold transition-all relative group h-full py-2 ${isScrolled ? "text-amethyst-dark hover:text-amethyst-primary" : "text-white hover:text-amethyst-light"
                                }`}
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amethyst-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex flex-col items-end mr-4">
                        <span className={`text-[9px] uppercase tracking-widest font-bold opacity-60 ${isScrolled ? "text-amethyst-dark" : "text-white"}`}>Talk to us</span>
                        <span className={`text-xs font-bold ${isScrolled ? "text-amethyst-primary" : "text-amethyst-light"}`}>+91 40 2345 6789</span>
                    </div>
                    <Link
                        href="#estimate"
                        className="px-8 py-3 bg-amethyst-primary text-white text-[10px] uppercase tracking-widest font-black rounded-lg hover:bg-amethyst-dark transition-all shadow-lg shadow-amethyst-primary/20"
                    >
                        Get a Quote
                    </Link>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden flex flex-col gap-1.5 group cursor-pointer"
                    >
                        <div className={`w-6 h-[2.5px] rounded-full transition-all ${isScrolled ? "bg-amethyst-dark" : "bg-white"}`} />
                        <div className={`w-4 h-[2.5px] rounded-full transition-all self-end ${isScrolled ? "bg-amethyst-primary" : "bg-amethyst-light"}`} />
                    </button>
                </div>
            </div>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-[110] bg-amethyst-dark/95 backdrop-blur-xl flex flex-col items-center justify-center p-10"
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute top-10 right-10 text-white hover:text-amethyst-light transition-all"
                        >
                            <span className="text-3xl font-light">✕</span>
                        </button>
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-serif text-white hover:text-amethyst-light transition-all italic tracking-wide"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="#estimate"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-8 px-12 py-5 bg-amethyst-primary text-white uppercase tracking-[0.3em] font-black text-xs rounded-xl shadow-2xl shadow-amethyst-primary/40"
                            >
                                Free Design Preview
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default V3Navbar;
