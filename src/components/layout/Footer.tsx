"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { usePathname } from "next/navigation";

const Footer = () => {
    const pathname = usePathname();

    // Hide global footer on v2, v3, and v4 pages
    if (pathname === "/v2" || pathname === "/v3" || pathname === "/v4") return null;

    return (
        <footer className="relative bg-black text-white pt-40 pb-12 overflow-hidden">
            {/* Massive Background Text (Like high-end fashion/architecture sites) */}
            <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
                <span className="text-[25rem] font-serif uppercase tracking-tighter whitespace-nowrap block leading-none">
                    EVOLUXE • ATELIER
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-end">
                    {/* Main Statement */}
                    <div className="lg:col-span-6">
                        <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-12">
                            The pursuit of <br />
                            <span className="text-gold italic">spatial perfection</span> <br />
                            never concludes.
                        </h2>

                        <div className="flex flex-col md:flex-row gap-12 mt-20">
                            <div>
                                <span className="text-gold text-[9px] uppercase tracking-[0.5em] mb-4 block">General Inquiry</span>
                                <p className="text-xl font-serif border-b border-gold/20 pb-2">concierge@evoluxe.com</p>
                            </div>
                            <div>
                                <span className="text-gold text-[9px] uppercase tracking-[0.5em] mb-4 block">Private Office</span>
                                <p className="text-xl font-serif border-b border-gold/20 pb-2">+33 1 82 93 04 00</p>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-16 border-l border-white/5 pl-12 lg:pl-20 py-4">
                        <div>
                            <span className="text-white/20 text-[9px] uppercase tracking-[0.8em] mb-8 block font-bold">Atelier</span>
                            <ul className="space-y-4 text-sm font-sans tracking-widest uppercase text-white/60">
                                <li><Link href="/about" className="hover:text-gold transition-colors">Manifesto</Link></li>
                                <li><Link href="/services" className="hover:text-gold transition-colors">Chronicle</Link></li>
                                <li><Link href="/portfolio" className="hover:text-gold transition-colors">Vault</Link></li>
                            </ul>
                        </div>
                        <div>
                            <span className="text-white/20 text-[9px] uppercase tracking-[0.8em] mb-8 block font-bold">Global</span>
                            <ul className="space-y-4 text-sm font-sans tracking-widest uppercase text-white/60">
                                <li><Link href="/join" className="hover:text-gold transition-colors">Paris</Link></li>
                                <li><Link href="/contact" className="hover:text-gold transition-colors">London</Link></li>
                                <li><Link href="/legal" className="hover:text-gold transition-colors">Monaco</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Closing Strip */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
                    <div className="flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20">Studio Evoluxe © 2026</span>
                        <div className="w-[1px] h-4 bg-white/10" />
                        <span className="text-[10px] uppercase tracking-[0.5em] text-white/20">Architectural Evolution</span>
                    </div>

                    <div className="flex gap-12 text-[10px] uppercase tracking-[0.4em] text-gold font-bold">
                        <Link href="#" className="hover:text-white transition-all">Instagram</Link>
                        <Link href="#" className="hover:text-white transition-all">Pinterest</Link>
                        <Link href="#" className="hover:text-white transition-all">Behance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
