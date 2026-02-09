"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1.05, 1.2]);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
            {/* Cinematic Parallax Background */}
            <motion.div
                style={{ y: y1, scale }}
                className="absolute inset-0 z-0 opacity-50"
            >
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: "url('/assets/hero.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </motion.div>

            {/* Depth Overlays */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-transparent to-black" />
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)]" />

            {/* Hero Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center px-6"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[1em] block mb-8 opacity-60">
                        Atelier of Spatial High-Art
                    </span>

                    <h1 className="text-white mb-12 italic font-light tracking-tightest">
                        EVOLUXE
                    </h1>

                    <div className="h-[1px] w-24 bg-gold/40 mx-auto mb-12" />

                    <p className="text-white/40 font-serif text-lg md:text-xl tracking-[0.3em] max-w-xl mx-auto uppercase">
                        Evolution • Architecture • Luxury
                    </p>
                </motion.div>
            </motion.div>

            {/* Trending Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
            >
                <span className="text-[8px] uppercase tracking-[0.6em] text-white/20">Discovery</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
            </motion.div>

            {/* Architectural Frame Decoration */}
            <div className="absolute inset-12 border border-white/5 pointer-events-none z-10" />
        </section>
    );
}
