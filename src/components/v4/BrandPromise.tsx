"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandPromise = () => {
    return (
        <section className="relative w-full h-[85vh] min-h-[700px] overflow-hidden flex items-center justify-center">
            {/* Background Image with subtle zoom effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/v4/luxe_banner_bg.png"
                    alt="EVOLX Studio Luxe Interior"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Vignette for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
            </motion.div>

            {/* Central Vertical Banner - High-End Restyle */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative z-10 w-full max-w-lg md:max-w-xl h-full bg-white/10 backdrop-blur-xl flex flex-col items-center justify-center px-12 text-center border-x border-white/20"
            >
                {/* Gold Line Accent Top */}
                <div className="absolute top-20 w-16 h-[1px] bg-[#c5a059]" />

                <div className="space-y-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-[#faf9f6] text-xs font-bold uppercase block tracking-[0.5em]"
                    >
                        Introducing
                    </motion.span>

                    <div className="relative pt-4 text-center">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-0 flex items-baseline justify-center gap-1">
                            EVOLX Studio
                        </h2>

                        {/* Elite Script signature style */}

                    </div>

                    <div className="space-y-4 pt-8">
                        <h4 className="text-white text-xl md:text-2xl font-serif italic tracking-wide">
                            "Where Artistry Meets Absolute Integrity."
                        </h4>
                        <div className="w-12 h-[1px] bg-[#c5a059] mx-auto opacity-50" />
                        <p className="text-white/70 text-sm md:text-base font-light max-w-sm mx-auto leading-relaxed">
                            A curated experience for the discerning few. We don't just design spaces; we curate legacies of elegance and comfort.
                        </p>
                    </div>

                    <div className="pt-10">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#c5a059" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-4 bg-transparent border border-[#c5a059] text-[#faf9f6] font-bold rounded-sm tracking-widest uppercase text-xs transition-all hover:text-[#4d3b1a] shadow-[0_0_20px_rgba(197,160,89,0.3)]"
                        >
                            Explore the Collection
                        </motion.button>
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute bottom-20 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-t from-[#c5a059] to-transparent" />
                    <span
                        className="text-[10px] text-[#faf9f6]/40 uppercase tracking-[0.3em]"
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                        Scroll Experience
                    </span>
                </div> */}
            </motion.div>

            {/* Side Highlights */}
            <div className="absolute left-20 bottom-20 hidden lg:block">
                <p className="text-[#c5a059] font-serif italic text-3xl opacity-30 select-none">Bespoke.</p>
            </div>
            <div className="absolute right-20 top-20 hidden lg:block">
                <p className="text-[#c5a059] font-serif italic text-3xl opacity-30 select-none">Timeless.</p>
            </div>
        </section>
    );
};

export default BrandPromise;
