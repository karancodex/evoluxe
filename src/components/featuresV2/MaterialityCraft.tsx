"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const materials = [
    { title: "Calacatta Viola", desc: "Rare Italian marble with signature violet veining.", image: "/assets/portfolio_paris.png" },
    { title: "Smoked Oak", desc: "Deeply grained, hand-charred European timber.", image: "/assets/portfolio_zurich.png" },
    { title: "Brushed Brass", desc: "Oxidized metalwork with a velvet-touch finish.", image: "/assets/craft_details.png" },
    { title: "Alabaster Stone", desc: "Translucent minerals capturing soft, atmospheric light.", image: "/assets/about_hero.png" }
];

export default function MaterialityCraft() {
    return (
        <section className="bg-[#fcfcfc] text-charcoal py-40 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
                    <div className="max-w-xl">
                        <span className="text-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-8 block">The Atelier</span>
                        <h2 className="text-5xl md:text-7xl font-serif leading-none tracking-tighter">
                            The Soul of <br />
                            <span className="italic">Materiality.</span>
                        </h2>
                    </div>
                    <p className="text-[#4a4a4a] text-[10px] uppercase tracking-[0.4em] font-bold max-w-[280px] leading-loose text-right">
                        We source the earth's rarest elements to craft environments that transcend the visual and touch the tactile.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {materials.map((mat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className="group relative aspect-[3/4] overflow-hidden bg-ivory"
                        >
                            <img
                                src={mat.image}
                                alt={mat.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                                <h3 className="text-white text-xl font-serif mb-2">{mat.title}</h3>
                                <p className="text-gold text-[8px] uppercase tracking-widest leading-relaxed">
                                    {mat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Immersive Fixed Background Stats Section */}
            <div className="relative mt-40 h-[85vh] flex items-center justify-center overflow-hidden">
                {/* Fixed Background Layer */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center z-0"
                    style={{
                        backgroundImage: "url('/assets/materials_premium.png')",
                        backgroundAttachment: "fixed"
                    }}
                />

                {/* Refined Cinematic Overlays for Readability */}
                <div className="absolute inset-0 bg-black/30 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-[1]" />
                <div className="absolute inset-0 backdrop-blur-[0.5px] z-[1]" />

                <div className="container mx-auto px-6 relative z-10 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 md:gap-12">
                        <StatItem value={40} suffix="+" label="Global Quarries" />
                        <StatItem value={11} suffix="" label="Master Artisans" />
                        <StatItem value={7} suffix="k" label="Bespoke Textures" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="mt-24 flex justify-center"
                    >
                        <button className="group relative px-20 py-7 overflow-hidden bg-white/5 backdrop-blur-md border border-white/20 transition-all hover:border-gold">
                            <div className="absolute inset-0 bg-white transition-all duration-700 translate-y-full group-hover:translate-y-0" />
                            <span className="relative z-10 text-white group-hover:text-black text-[11px] uppercase tracking-[0.6em] font-black italic">
                                Request Material Lookbook
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
    const [count, setCount] = useState(0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            onViewportEnter={() => {
                let start = 0;
                const end = value;
                const duration = 2000;
                const startTime = performance.now();

                const animate = (currentTime: number) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);

                    // Ease out expo
                    const easeOutExpo = 1 - Math.pow(2, -10 * progress);
                    const currentCount = Math.floor(easeOutExpo * end);

                    setCount(currentCount);

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };

                requestAnimationFrame(animate);
            }}
            className="text-center group"
        >
            <div className="relative inline-block mb-6">
                <span className="text-7xl md:text-9xl font-serif text-white tracking-tighter leading-none">
                    {count}{suffix}
                </span>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                    className="absolute -bottom-4 left-0 w-full h-px bg-gold/50 origin-left"
                />
            </div>
            <span className="block text-[11px] uppercase tracking-[0.8em] text-white font-bold mt-8 italic">
                {label}
            </span>
        </motion.div>
    );
}
