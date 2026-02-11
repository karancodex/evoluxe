"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const timelineSteps = [
    { id: "01", title: "Curation", detail: "MATERIAL SELECTION" },
    { id: "02", title: "Precision", detail: "ARCHITECTURAL DRAFTING" },
    { id: "03", title: "Creation", detail: "ARTISANAL EXECUTION" },
];

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const [stage, setStage] = useState(0); // 0: Intro, 1: Timeline, 2: Reveal

    useEffect(() => {
        setMounted(true);
        const timers = [
            setTimeout(() => setStage(1), 3000),
            setTimeout(() => setStage(2), 8000),
        ];
        return () => timers.forEach(t => clearTimeout(t));
    }, []);

    if (!mounted) return null;

    return (
        <section className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
                {stage === 0 && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-10 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 z-0">
                            <img src="/assets/hero_luxury.png" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                        </div>
                        <div className="relative z-10 text-center px-6 drop-shadow-2xl">
                            <motion.span
                                initial={{ opacity: 0, letterSpacing: "2em" }}
                                animate={{ opacity: 0.6, letterSpacing: "1em" }}
                                transition={{ duration: 2 }}
                                className="text-gold text-[10px] uppercase block mb-8"
                            >
                                Atelier of Spatial High-Art
                            </motion.span>
                            <h1 className="text-white text-7xl md:text-9xl italic font-light tracking-tightest mb-4">
                                EVOLUXE
                            </h1>
                            <div className="w-24 h-[1px] bg-gold/40 mx-auto" />
                        </div>
                    </motion.div>
                )}

                {stage === 1 && (
                    <motion.div
                        key="timeline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 bg-[#0a0a0a]"
                    >
                        <div className="max-w-6xl w-full">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {timelineSteps.map((step, i) => (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.5 + 0.5, duration: 1 }}
                                        className="relative group mt-20"
                                    >
                                        <span className="text-gold/20 text-8xl font-serif absolute -top-20 left-0 leading-none">
                                            {step.id}
                                        </span>
                                        <div className="relative z-10 pt-10 border-t border-gold/10">
                                            <h3 className="text-white text-2xl font-serif mb-2">{step.title}</h3>
                                            <p className="text-gold text-[8px] uppercase tracking-[0.4em]">{step.detail}</p>
                                        </div>
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ delay: i * 0.5 + 1.2, duration: 2 }}
                                            className="absolute top-0 left-0 w-full h-[1px] bg-gold origin-left"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3.5 }}
                            className="mt-32 text-center"
                        >
                            <p className="text-white/20 text-[10px] uppercase tracking-[0.8em] animate-pulse">
                                Architecting the Transition...
                            </p>
                        </motion.div>
                    </motion.div>
                )}

                {stage === 2 && (
                    <motion.div
                        key="reveal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5 }}
                        className="absolute inset-0 z-30"
                    >
                        <motion.div
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 8 }}
                            className="w-full h-full relative"
                        >
                            <img src="/assets/evoluxe_final_reveal_home_vibrant.png" className="w-full h-full object-cover" />
                            {/* Refined Gradient: Clearer Center, Darker Bottom for Text */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_80%)] opacity-30" />
                        </motion.div>

                        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="relative z-10"
                            >
                                <span className="text-gold text-[12px] uppercase tracking-[0.8em] block mb-8 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">The Final Masterpiece</span>
                                <h1 className="text-white text-6xl md:text-9xl font-serif uppercase tracking-tighter mb-12 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                                    Reside in <br />
                                    <span className="italic text-gold-soft">Refinement.</span>
                                </h1>
                                <div className="flex gap-8 justify-center">
                                    <button className="px-12 py-5 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-gold hover:text-white transition-all shadow-[0_4px_14px_0_rgba(255,255,255,0.39)]">
                                        View Portfolio
                                    </button>
                                    <button className="px-12 py-5 border border-white/40 text-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all font-bold backdrop-blur-sm">
                                        Private Inquiry
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Global Overlays */}
            <div className="absolute inset-12 border border-white/5 pointer-events-none z-[40]" />

            {/* Scroll Indicator (Only visible in stage 2 or with delay) */}
            {stage === 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-[40] flex flex-col items-center gap-4"
                >
                    <span className="text-[8px] uppercase tracking-[0.6em] text-white/40">Discover More</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
                </motion.div>
            )}
        </section>
    );
}
