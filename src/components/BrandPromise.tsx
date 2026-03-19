"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useConsultation } from "./providers/ConsultationProvider";

const BrandPromise = () => {
    const { openConsultation } = useConsultation();
    return (
        <section className="relative w-full h-[70vh] md:h-[85vh] min-h-[500px] md:min-h-[700px] overflow-hidden flex items-center justify-center">
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
                className="relative z-10 w-full max-w-[90%] sm:max-w-lg md:max-w-xl h-full bg-white/10 backdrop-blur-xl flex flex-col items-center justify-center px-4 sm:px-12 text-center border-x border-white/20"
            >
                {/* Coral Line Accent Top */}
                <div className="absolute top-20 w-16 h-[1px] bg-[#eb595f]" />

                <div className="space-y-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 2, delay: 0.5 }}
                        className="text-[#fcebeb] text-[10px] font-bold uppercase block tracking-[0.6em] font-accent"
                    >
                        Introducing
                    </motion.span>

                    <div className="relative pt-4 flex items-center justify-center group cursor-default">
                        <div className="relative w-56 sm:w-72 h-20 sm:h-24 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                            <Image
                                src="/logo.png"
                                alt="EVOLX Studio Logo"
                                fill
                                className="object-contain brightness-0 invert opacity-100 transition-all duration-500"
                                priority
                                quality={100}
                            />
                        </div>
                    </div>

                    <div className="space-y-4 pt-8">
                        <h4 className="text-[#eb595f] text-lg md:text-3xl font-serif italic tracking-wide px-4 sm:px-0 font-medium">
                            "Where Artistry Meets Absolute Integrity."
                        </h4>
                        <div className="w-12 h-[1px] bg-[#eb595f] mx-auto opacity-50" />
                        <p className="text-white/70 text-sm md:text-base font-light max-w-sm mx-auto leading-relaxed">
                            A curated experience for the discerning few. We don't just design spaces; we curate legacies of elegance and comfort.
                        </p>
                    </div>

                    <div className="pt-10">
                        <motion.button
                            onClick={openConsultation}
                            whileHover={{ scale: 1.05, backgroundColor: "#eb595f" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-4 bg-transparent border border-[#eb595f] text-[#fcebeb] font-bold rounded-sm tracking-[0.3em] uppercase text-[10px] transition-all hover:text-white shadow-[0_0_20px_rgba(235,89,95,0.3)] font-accent"
                        >
                            Explore the Collection
                        </motion.button>
                    </div>
                </div>

                {/* Decorative Elements */}
                {/* <div className="absolute bottom-20 flex flex-col items-center gap-4">
                    <div className="w-[1px] h-20 bg-gradient-to-t from-[#eb595f] to-transparent" />
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
                <p className="text-[#eb595f] font-serif italic text-3xl opacity-30 select-none">Bespoke.</p>
            </div>
            <div className="absolute right-20 top-20 hidden lg:block">
                <p className="text-[#eb595f] font-serif italic text-3xl opacity-30 select-none">Timeless.</p>
            </div>
        </section>
    );
};

export default BrandPromise;
