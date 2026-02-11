"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const traits = ["Sophisticated", "Visionary", "Minimal", "Cultured", "Elegant", "Futuristic"];
const colors = [
    { name: "Gold", hex: "#c5a059", desc: "Craft" },
    { name: "Charcoal", hex: "#121212", desc: "Heritage" },
    { name: "Ivory", hex: "#faf9f6", desc: "Culture" },
];

const audiences = [
    {
        title: "Private Estates",
        image: "/assets/villa_audience.png",
        items: ["High-income Homeowners", "Villa Estate Owners", "Luxury Apartments"]
    },
    {
        title: "Commercial World",
        image: "/assets/hotel_commercial.png",
        items: ["Boutique Hotels", "Hospitality Spaces", "Premium Commercial"]
    },
    {
        title: "Industry Synergy",
        image: "/assets/studio_partner.png",
        items: ["Real-estate Developers", "Architects", "Project Consultants"]
    }
];

export default function BrandIdentity() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white text-charcoal section-padding border-y border-charcoal/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                {/* Left: Personality Traits */}
                <div className="lg:col-span-5">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-12 block">
                        Brand Personality
                    </span>
                    <div className="flex flex-wrap gap-x-12 gap-y-8">
                        {traits.map((trait, i) => (
                            <motion.div
                                key={trait}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col"
                            >
                                <span className="text-3xl md:text-5xl font-serif italic text-charcoal/30 hover:text-gold transition-colors cursor-default hover:opacity-100">
                                    {trait}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 max-w-sm">
                        <p className="text-charcoal leading-relaxed font-body">
                            Our personality is defined by a rigorous pursuit of <span className="text-gold italic font-bold">architectural clarity</span> and emotional resonance.
                        </p>
                    </div>
                </div>

                {/* Right: Color Palette */}
                <div className="lg:col-span-7 flex flex-col items-end">
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-12 block">
                        The Palette
                    </span>
                    <div className="grid grid-cols-3 gap-8 w-full">
                        {colors.map((color, i) => (
                            <motion.div
                                key={color.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="space-y-6"
                            >
                                <div
                                    className="aspect-[3/4] shadow-2xl border border-charcoal/5"
                                    style={{ backgroundColor: color.hex }}
                                />
                                <div className="text-right">
                                    <span className="block text-[10px] uppercase tracking-widest text-gold font-bold mb-1">{color.name}</span>
                                    <span className="block text-[8px] uppercase tracking-widest text-charcoal/60">{color.desc}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Curated Partnerships: Interactive Atmosphere Hub */}
            <div className="mt-60">
                <div className="text-center mb-24">
                    <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6 block">Our Ecosystem</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-charcoal">Curated Partnerships.</h2>
                </div>

                <div className="relative h-[80vh] bg-charcoal flex overflow-hidden group border border-charcoal/5 shadow-2xl">
                    {/* Background Transitions */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 0.4, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={audiences[activeIndex].image}
                                className="w-full h-full object-cover"
                                alt="Atmosphere"
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Foreground Interactive Layout */}
                    <div className="relative z-10 w-full flex flex-col md:flex-row">
                        {/* Selector Column */}
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-12 lg:px-24 border-r border-white/5">
                            <div className="space-y-12">
                                {audiences.map((audience, idx) => (
                                    <button
                                        key={idx}
                                        onMouseEnter={() => setActiveIndex(idx)}
                                        onClick={() => setActiveIndex(idx)}
                                        className="block text-left group"
                                    >
                                        <div className="flex items-center gap-8">
                                            <span className={`text-gold font-serif text-2xl italic transition-all duration-500 ${activeIndex === idx ? 'opacity-100 translate-x-2' : 'opacity-20 translate-x-0'}`}>
                                                0{idx + 1}
                                            </span>
                                            <h3 className={`text-4xl md:text-6xl font-serif tracking-tighter transition-all duration-500 ${activeIndex === idx ? 'text-white translate-x-4' : 'text-white/30 hover:text-white/60'}`}>
                                                {audience.title}
                                            </h3>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Details Column */}
                        <div className="w-full md:w-1/2 h-full flex items-center px-12 lg:px-24 bg-black/20 backdrop-blur-md">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{ duration: 0.8 }}
                                    className="max-w-md w-full"
                                >
                                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold block mb-12 border-l-2 border-gold pl-6">Focus Sectors</span>
                                    <ul className="space-y-8">
                                        {audiences[activeIndex].items.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-6"
                                            >
                                                <div className="w-2 h-[1px] bg-gold shadow-[0_0_10px_rgba(197,160,89,1)]" />
                                                <span className="text-white text-2xl md:text-3xl font-serif">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <div className="mt-20 pt-10 border-t border-white/10">
                                        <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] leading-loose">
                                            Partner with the Atelier to manifest <br /> unprecedented architectural depth.
                                        </p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-12 right-12 z-20 pointer-events-none">
                        <div className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 animate-spin-slow border-t border-gold rounded-full" />
                            <span className="text-gold text-[8px] uppercase tracking-widest font-bold">Inquiry Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
