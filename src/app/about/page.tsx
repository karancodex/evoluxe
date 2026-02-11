"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20 bg-[#fbfbfb]">
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-8 font-bold"
                        >
                            The Story
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-serif text-[#1a1a1a] mb-12 leading-none uppercase"
                        >
                            The Art of <br />
                            <span className="italic">Evolution.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#4a4a4a] text-lg leading-loose font-light max-w-xl pb-4"
                    >
                        EVOLUXE was born from a desire to redefine luxury. Not as a status, but as an experience that evolves with the person. Founded in Paris and operating globally, our studio brings together architectural rigour and the finest craftsmanship to create spaces that are as intelligent as they are beautiful.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="aspect-[21/9] w-full relative overflow-hidden mb-32 shadow-2xl"
                >
                    <img
                        src="/assets/about_hero.png"
                        alt="Evoluxe Atelier"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
                    <div className="p-10 bg-white shadow-sm border border-black/5">
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Philosophy</h3>
                        <p className="text-[#4a4a4a] text-sm leading-relaxed font-light">
                            We believe a space should be a reflection of your future self. Our design ideology focuses on longevity, adaptability, and emotional resonance.
                        </p>
                    </div>
                    <div className="p-10 bg-white shadow-sm border border-black/5">
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Craftsmanship</h3>
                        <p className="text-[#4a4a4a] text-sm leading-relaxed font-light">
                            We partner with the world's finest artisans—from master stone carvers to bespoke weavers—to ensure every detail is a masterpiece.
                        </p>
                    </div>
                    <div className="p-10 bg-white shadow-sm border border-black/5">
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6 font-bold">Innovation</h3>
                        <p className="text-[#4a4a4a] text-sm leading-relaxed font-light">
                            Integrating the latest in smart home technology and sustainable materials without ever compromising on the refined aesthetic.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-[#1a1a1a] py-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden shadow-2xl">
                            <img src="/assets/visionary_leader.png" alt="Founder" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-serif text-gold-soft mb-8 italic leading-tight">"Luxury is the freedom to evolve within your own sanctuary."</h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-2xl font-light">
                                Our founder, Julian Vane, spent two decades working at the intersection of architecture and emotional psychology. His vision for EVOLUXE was to create a studio that prioritizes the human experience above all else.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-[1px] bg-gold" />
                                <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold">Julian Vane — Principal Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
