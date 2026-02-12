"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";

export default function V2Hero() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {mounted && <V2HeroContent containerRef={containerRef} />}

            {/* Cinematic Aperture Opening */}
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 2, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
                className="fixed inset-0 bg-white z-[200] origin-top"
            />
        </section>
    );
}

function V2HeroContent({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <>
            {/* Background Image - Full Screen Immersive */}
            <motion.div
                style={{ scale }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="/assets/v2_hero.png"
                    className="w-full h-full object-cover opacity-100"
                    alt="Luxury Estate"
                    loading="eager"
                />
            </motion.div>

            {/* Content Layer */}
            <div className="relative z-10 w-full px-6 pt-64 flex flex-col items-center justify-center text-center">
                <motion.div
                    style={{ y: textY }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 1.2 }}
                >
                    <span className="text-[#c5a059] text-[11px] uppercase tracking-[1.5em] font-black block mb-12 animate-pulse drop-shadow-sm">
                        Established in Zurich
                    </span>

                    <h1 className="text-[#1a1a1a] mb-16 px-4">
                        The Architecture <br />
                        <span className="italic text-gold-soft">Of Emotion.</span>
                    </h1>

                    <div className="max-w-xl mx-auto mb-20 bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/40 shadow-2xl shadow-black/5">
                        <p className="text-[#1a1a1a] text-lg md:text-2xl font-serif italic mb-12 leading-relaxed">
                            "We do not create buildings. We curate spatial legacies that breathe with your presence."
                        </p>

                        <div className="w-px h-24 bg-gold mx-auto" />
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
                        <button className="group relative">
                            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#1a1a1a] block mb-2">Private Briefing</span>
                            <div className="w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </button>
                        <button className="group relative">
                            <span className="text-[10px] uppercase tracking-[0.8em] font-bold text-[#1a1a1a] block mb-2">The Archive</span>
                            <div className="w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating Info Panels */}
            <div className="absolute bottom-20 left-12 md:left-24 z-20 hidden lg:block overflow-hidden bg-white/60 backdrop-blur-xl px-6 py-2 rounded-full border border-white/40 shadow-xl">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="flex items-center gap-8"
                >
                    <div className="w-10 h-px bg-gold" />
                    <span className="text-[9px] uppercase tracking-[0.8em] text-[#1a1a1a] font-bold">Residences // Exhibits // Yachting</span>
                </motion.div>
            </div>

            {/* Scroll Progress Indicator - Luxury Style */}
            <div className="absolute right-12 bottom-20 z-20 flex flex-col items-center gap-6">
                <div className="w-[1px] h-32 bg-[#1a1a1a]/10 relative overflow-hidden">
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gold h-1/2 w-full"
                    />
                </div>
                <span className="text-gold text-[8px] uppercase tracking-widest vertical-text rotate-180">Discovery Transition</span>
            </div>
        </>
    );
}
