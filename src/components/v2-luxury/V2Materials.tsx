"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const focusMaterials = [
    { name: "Raw Alabaster", category: "Translucence", coord: "47.37° N" },
    { name: "Smoked Oak", category: "Essence", coord: "48.85° N" },
    { name: "Hand-Rubbed Bronze", category: "Tension", coord: "45.46° N" }
];

export default function V2Materials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section ref={containerRef} className="py-60 bg-[#1a1a1a] text-[#fafaf9] relative overflow-hidden">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">

                    {/* Sticky Sidebar Navigation */}
                    <div className="lg:col-span-4 sticky top-40">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold text-[10px] uppercase tracking-[1em] block mb-12"
                        >
                            The Physicality
                        </motion.span>

                        <h2 className="mb-20">
                            Matter <br />
                            <span className="italic text-gold-soft">Curated.</span>
                        </h2>

                        <div className="space-y-12">
                            {focusMaterials.map((mat, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className="flex flex-col items-start gap-2 group w-full text-left"
                                >
                                    <div className="flex items-center gap-4 w-full">
                                        <span className={`text-[10px] font-serif transition-all duration-500 ${activeIndex === i ? 'text-gold' : 'text-white/20'}`}>0{i + 1}</span>
                                        <div className={`h-px transition-all duration-700 ${activeIndex === i ? 'w-20 bg-gold' : 'w-8 bg-white/10 group-hover:w-12'}`} />
                                    </div>
                                    <span className={`text-2xl md:text-3xl font-serif transition-all duration-500 ${activeIndex === i ? 'text-white translate-x-4' : 'text-white/30 hover:text-white/60'}`}>
                                        {mat.name}
                                    </span>
                                    <span className={`text-[8px] uppercase tracking-widest pl-24 transition-opacity duration-500 ${activeIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                                        {mat.category} // {mat.coord}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Showcase Area */}
                    <div className="lg:col-span-8">
                        <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={activeIndex === 0 ? "/assets/v2_marble.png" : activeIndex === 1 ? "/assets/portfolio_zurich.png" : "/assets/v2_atelier.png"}
                                        className="w-full h-full object-cover"
                                        alt="Material Focal Point"
                                    />

                                    <div className="absolute bottom-12 left-12 max-w-sm">
                                        <p className="text-white/60 text-lg font-serif italic leading-relaxed">
                                            "{activeIndex === 0 ? "A dialogue between time and stone, where every vein is a century of geological memory." : activeIndex === 1 ? "The scent of aged timber, smoking with deep oils and the history of European forests." : "Molten bronze cooled by Swiss air, hand-rubbed until it reflects the soul of the artisan."}"
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Interactive "Touch" Element */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12"
                        >
                            <div className="flex gap-4 items-center">
                                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Sourcing exclusively from private quarries.</span>
                            </div>
                            <button className="px-12 py-5 border border-white/10 text-white text-[9px] uppercase tracking-[0.5em] font-bold hover:bg-white hover:text-[#1a1a1a] transition-all">
                                Review Material Manifesto
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
