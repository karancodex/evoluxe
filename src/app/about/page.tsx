"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <section className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-32">
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-8"
                        >
                            The Story
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-serif text-gold-soft mb-12 leading-none"
                        >
                            The Art of <br />
                            <span className="italic">Evolution.</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/60 text-lg leading-loose font-light max-w-xl pb-4"
                    >
                        EVOLUXE was born from a desire to redefine luxury. Not as a status, but as an experience that evolves with the person. Founded in Paris and operating globally, our studio brings together architectural rigour and the finest craftsmanship to create spaces that are as intelligent as they are beautiful.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="aspect-[21/9] w-full relative overflow-hidden mb-32"
                >
                    <img
                        src="/assets/atelier.png"
                        alt="Evoluxe Atelier"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
                    <div>
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6">Philosophy</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We believe a space should be a reflection of your future self. Our design ideology focuses on longevity, adaptability, and emotional resonance.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6">Craftsmanship</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            We partner with the world's finest artisans—from master stone carvers to bespoke weavers—to ensure every detail is a masterpiece.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-gold text-[10px] uppercase tracking-[0.3em] mb-6">Innovation</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Integrating the latest in smart home technology and sustainable materials without ever compromising on the refined aesthetic.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-charcoal py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-20 items-center">
                        <div className="w-full md:w-1/3 aspect-[3/4] bg-white/5 relative overflow-hidden">
                            {/* placeholder for founder portrait */}
                            <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-serif text-2xl italic">
                                Founder Portrait
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="text-4xl font-serif text-gold-soft mb-8 italic">"Luxury is the freedom to evolve within your own sanctuary."</h2>
                            <p className="text-white/60 leading-relaxed mb-8 max-w-2xl">
                                Our founder, Julian Vane, spent two decades working at the intersection of architecture and emotional psychology. His vision for EVOLUXE was to create a studio that prioritizes the human experience above all else.
                            </p>
                            <span className="text-gold text-[10px] uppercase tracking-[0.3em]">Julian Vane — Principal Designer</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
