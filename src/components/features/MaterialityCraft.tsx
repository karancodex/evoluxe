"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const materials = [
    { title: "Calacatta Viola", desc: "Rare Italian marble with signature violet veining.", image: "/assets/portfolio_paris.png" },
    { title: "Smoked Oak", desc: "Deeply grained, hand-charred European timber.", image: "/assets/portfolio_zurich.png" },
    { title: "Brushed Brass", desc: "Oxidized metalwork with a velvet-touch finish.", image: "/assets/craft_details.png" },
    { title: "Alabaster Stone", desc: "Translucent minerals capturing soft, atmospheric light.", image: "/assets/about_hero.png" }
];

export default function MaterialityCraft() {
    return (
        <section className="bg-white text-charcoal py-40 overflow-hidden relative">
            {/* Background Decorative Rings (Image 1 style) */}
            <div className="absolute top-1/4 left-0 w-96 h-96 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0 border-[2px] border-charcoal rounded-full -ml-32" />
                <div className="absolute inset-0 border-[1px] border-charcoal/20 rounded-full scale-125 -ml-32" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header (Inspired by Image 3) */}
                <div className="flex flex-col lg:flex-row items-baseline justify-between mb-40 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-gold text-[10px] uppercase tracking-[1em] font-black mb-8 block">Atelier Excellence</span>
                        <h2 className="text-6xl md:text-[8vw] font-serif leading-[0.85] tracking-tighter">
                            The Soul of <br />
                            <span className="italic text-gold-soft">Materiality.</span>
                        </h2>
                    </div>
                    <div className="max-w-sm lg:text-right">
                        <p className="text-charcoal/40 text-sm md:text-base font-medium uppercase tracking-[0.3em] leading-relaxed">
                            Creating style and elegance through the earth's rarest tactile elements.
                        </p>
                    </div>
                </div>

                {/* Materials Grid (Image 0 & 1 Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
                    {materials.map((mat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: i * 0.1 }}
                            className="bg-[#faf9f6]/80 p-6 md:p-8 rounded-[4rem] rounded-tr-[10rem] border border-charcoal/5 flex flex-col xl:flex-row gap-10 items-center group"
                        >
                            <div className="w-full xl:w-1/2 aspect-square rounded-[3.5rem] rounded-tr-[9rem] overflow-hidden shadow-2xl relative">
                                <img
                                    src={mat.image}
                                    alt={mat.title}
                                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-700" />
                            </div>
                            <div className="w-full xl:w-1/2 space-y-6">
                                <div>
                                    <span className="text-gold text-[8px] uppercase tracking-widest font-bold mb-2 block">Special Edition</span>
                                    <h3 className="text-4xl font-serif text-charcoal tracking-tight">{mat.title}</h3>
                                </div>
                                <p className="text-charcoal/60 text-lg font-light italic font-serif italic py-4 border-l border-gold/20 pl-6">
                                    "{mat.desc}"
                                </p>
                                <button className="bg-white px-10 py-5 rounded-full shadow-lg text-[10px] uppercase tracking-widest font-black text-charcoal hover:bg-gold hover:text-white transition-all duration-500">
                                    Read more
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Featured Stat Banner (Inspired by Image 2 & 3) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl bg-charcoal min-h-[600px] md:h-[70vh] flex flex-col md:flex-row"
                >
                    {/* Image Side */}
                    <div className="w-full md:w-[45%] h-64 md:h-full relative overflow-hidden">
                        <img
                            src="/assets/materials_premium.png"
                            alt="Premium Materials"
                            className="w-full h-full object-cover scale-110"
                        />
                        <div className="absolute inset-0 bg-charcoal/30 mix-blend-multiply" />

                        {/* Cutout Corner Effect (Image 2 style) */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-[5rem] hidden md:block" />
                    </div>

                    {/* Content Side with Stats */}
                    <div className="w-full md:w-[55%] bg-white p-8 md:p-16 lg:p-20 flex flex-col justify-center relative">
                        {/* Decorative Circles (Image 3 style) */}
                        <div className="absolute top-10 right-10 flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-ivory border border-charcoal/10" />
                            <div className="w-3 h-3 rounded-full bg-gold/50" />
                            <div className="w-3 h-3 rounded-full bg-charcoal/20" />
                        </div>

                        <span className="text-gold text-[10px] uppercase tracking-[1em] font-black mb-6 block">Global Reach</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal tracking-tighter mb-8 italic">
                            Curating The <span className="italic text-gold">Masterpieces.</span>
                        </h2>

                        <div className="grid grid-cols-3 gap-4 md:gap-8 border-y border-charcoal/5 py-8 md:py-12 mb-8 md:mb-12">
                            <StatItem value={40} suffix="+" label="Quarries" />
                            <StatItem value={11} suffix="" label="Artisans" />
                            <StatItem value={7} suffix="k" label="Textures" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40 font-serif italic text-xl">f</div>
                                <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal/40 font-serif italic text-xl">t</div>
                            </div>
                            <button className="bg-charcoal px-10 py-5 md:px-12 md:py-6 rounded-full text-white text-[10px] uppercase tracking-[0.4em] font-black hover:bg-gold transition-all shadow-xl whitespace-nowrap">
                                Book Now
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    return (
        <div className="text-center group">
            <span className="text-4xl md:text-5xl font-serif text-charcoal leading-none block mb-3">
                {value}{suffix}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-charcoal/40 font-bold italic">
                {label}
            </span>
        </div>
    );
}
