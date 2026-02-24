"use client";

import { motion } from "framer-motion";

export default function V2Contact() {
    return (
        <section className="py-60 bg-[#fafaf9] relative overflow-hidden flex flex-col items-center">

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        className="mb-40"
                    >
                        <span className="text-gold text-[10px] uppercase tracking-[1.5em] font-black block mb-12">The Invitation</span>
                        <h2 className="text-[#1a1a1a] mb-20 px-4">
                            Shape Your <br />
                            <span className="italic text-gold-soft">Legacy.</span>
                        </h2>
                        <div className="w-20 h-px bg-gold mx-auto" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full max-w-6xl mb-40">
                        <div className="space-y-8 flex flex-col items-center">
                            <span className="text-gold text-[8px] uppercase tracking-widest block font-bold">Studio Hub</span>
                            <p className="text-[#1a1a1a] text-2xl font-serif italic text-center">
                                Bahnhofstrasse 45, <br />
                                8001 Zurich
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col items-center">
                            <span className="text-gold text-[8px] uppercase tracking-widest block font-bold">Communication</span>
                            <p className="text-[#1a1a1a] text-2xl font-serif italic text-center underline decoration-gold/20 underline-offset-8">
                                concierge@EVOLX Studio.art <br />
                                +41 44 211 40
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col items-center">
                            <span className="text-gold text-[8px] uppercase tracking-widest block font-bold">Social Flux</span>
                            <p className="text-[#1a1a1a] text-2xl font-serif italic text-center">
                                Instagram <br />
                                LinkedIn
                            </p>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-20 py-8 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.8em] font-black overflow-hidden shadow-2xl"
                    >
                        <span className="relative z-10 transition-colors group-hover:text-black">Request Private Consultation</span>
                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    </motion.button>

                </div>
            </div>

            {/* Huge Background Branding */}
            <div className="absolute bottom-[-10vw] left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.03] select-none">
                <h3 className="text-[40vw] font-serif uppercase leading-none tracking-tightest">
                    EVOLX Studio
                </h3>
            </div>

            <div className="absolute bottom-20 left-12 flex items-center gap-6">
                <div className="w-12 h-px bg-gold/50" />
                <span className="text-[9px] uppercase tracking-[1em] text-[#1a1a1a]/20 font-black">Archive Code 0xV2</span>
            </div>

        </section>
    );
}
