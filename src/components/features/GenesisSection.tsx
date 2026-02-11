"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GenesisSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sketchRef = useRef<SVGSVGElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yImg = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const yFloat = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacityBg = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useEffect(() => {
        if (sketchRef.current) {
            const paths = sketchRef.current.querySelectorAll("path, circle");
            gsap.fromTo(paths,
                { strokeDasharray: 2000, strokeDashoffset: 2000 },
                {
                    strokeDashoffset: 0,
                    duration: 3,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: sketchRef.current,
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative py-40 md:py-80 bg-[#faf9f6] text-charcoal overflow-hidden">
            {/* Ambient Background Text */}
            <motion.div
                style={{ opacity: opacityBg }}
                className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            >
                <span className="text-[35vw] font-serif uppercase text-charcoal/[0.02] tracking-tightest leading-none">
                    Genesis
                </span>
            </motion.div>

            <div className="container mx-auto px-8 md:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

                    {/* Left: Content & Philosophy */}
                    <div className="lg:col-span-6 space-y-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-8 mb-16">
                                <div className="w-16 h-[1px] bg-gold" />
                                <span className="text-gold text-[11px] uppercase tracking-[1em] font-bold">The Foundation</span>
                            </div>

                            <h2 className="text-7xl md:text-[9vw] font-serif leading-[0.85] tracking-tightest mb-16">
                                Where <br />
                                <span className="italic text-gold-soft pl-12 md:pl-24">Evolution</span> <br />
                                Meets <span className="text-gold">Art.</span>
                            </h2>
                        </motion.div>

                        <div className="max-w-xl border-l border-gold/20 pl-12 md:pl-20 space-y-12">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-charcoal/80 text-2xl font-light font-serif italic"
                            >
                                "Architecture is not the creation of shelter, but the orchestration of an evolving human spirit with its environment."
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-charcoal/50 text-[10px] uppercase tracking-[0.4em] font-bold leading-loose"
                            >
                                EVOLUXE represents the delicate intersection of Evolve + Luxury. We curate spatial high-art that transcends traditional interior design.
                            </motion.p>
                        </div>

                        {/* Feature Points */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-20">
                            {[
                                { label: "Spatial Logic", value: "Tectonic Purity" },
                                { label: "Materiality", value: "Artisanal Soul" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="p-8 border border-charcoal/5 bg-white/50 backdrop-blur-sm group hover:border-gold transition-colors"
                                >
                                    <span className="text-gold text-[8px] uppercase tracking-widest block mb-4">{item.label}</span>
                                    <span className="text-charcoal text-xl font-serif italic group-hover:text-gold transition-colors">{item.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Technical Beauty */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative z-10 w-full aspect-[4/5] overflow-hidden shadow-2xl">
                            <motion.img
                                style={{ y: yImg }}
                                src="/assets/atelier.png"
                                className="w-full h-full object-cover scale-110 grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* The Drawing Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <svg
                                    ref={sketchRef}
                                    viewBox="0 0 500 800"
                                    className="w-full h-auto opacity-30 px-10"
                                    fill="none"
                                    stroke="#c5a059"
                                    strokeWidth="1.2"
                                >
                                    <path d="M 50 200 L 450 200 L 450 700 L 50 700 Z" />
                                    <path d="M 50 450 L 450 450" />
                                    <path d="M 150 200 L 150 700" />
                                    <path d="M 350 200 L 350 700" />
                                    <path d="M 250 200 L 250 100" />
                                    <circle cx="250" cy="450" r="80" />
                                </svg>
                            </div>
                        </div>

                        {/* Floating Info Box */}
                        <motion.div
                            style={{ y: yFloat }}
                            className="absolute -right-12 top-1/2 w-48 h-64 bg-charcoal p-10 flex flex-col justify-between shadow-2xl border border-white/10 hidden xl:flex"
                        >
                            <div className="space-y-4">
                                <span className="text-gold text-[8px] uppercase tracking-widest">Precision</span>
                                <div className="w-8 h-[1px] bg-gold/50" />
                            </div>
                            <p className="text-white text-sm font-serif leading-relaxed italic">
                                "The beauty lies in the tension of a single line."
                            </p>
                            <span className="text-white/20 text-[7px] uppercase tracking-[0.5em]">Atelier Evoluxe</span>
                        </motion.div>

                        {/* Background Decoration */}
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full border border-gold/10 animate-slow-spin flex items-center justify-center">
                            <div className="w-48 h-48 rounded-full border border-gold/5" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Side Branding */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90">
                <span className="text-[9px] uppercase tracking-[1.5em] text-charcoal/10 font-black">Spatial High Art • Spatial High Art</span>
            </div>
        </section>
    );
}
