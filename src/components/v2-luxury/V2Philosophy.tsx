"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function V2Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section ref={containerRef} className="py-60 bg-[#fafaf9] overflow-hidden relative">
            {mounted && <V2PhilosophyContent containerRef={containerRef} />}
        </section>
    );
}

function V2PhilosophyContent({ containerRef }: { containerRef: React.RefObject<HTMLDivElement | null> }) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

            <motion.div
                style={{ scale }}
                className="text-center mb-40"
            >
                <div className="flex items-center justify-center gap-6 mb-12">
                    <div className="w-12 h-px bg-gold/30" />
                    <span className="text-gold text-[10px] uppercase tracking-[1em] font-medium">The Intent</span>
                    <div className="w-12 h-px bg-gold/30" />
                </div>

                <h2 className="text-[#1a1a1a] max-w-4xl mx-auto">
                    Space is the <br />
                    <span className="italic text-gold-soft underline decoration-gold/10 underline-offset-[12px]">Aperture</span> of <br />
                    Human <span className="text-gold">Heritage.</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center w-full">

                <div className="lg:col-span-4 flex flex-col gap-16 justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="space-y-6"
                    >
                        <span className="text-gold text-[8px] uppercase tracking-widest block font-bold">Concept 01 // The Void</span>
                        <p className="text-[#1a1a1a]/60 text-lg md:text-xl font-serif italic leading-relaxed">
                            "We do not fear the empty room. We celebrate it. For only in the void can light find its true resonance."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <span className="text-gold text-[8px] uppercase tracking-widest block font-bold">Concept 02 // Material Echo</span>
                        <p className="text-[#1a1a1a]/60 text-lg md:text-xl font-serif italic leading-relaxed">
                            "Materials are not skins. They are storytellers. We select stone that has lived for eons to ground our modern souls."
                        </p>
                    </motion.div>
                </div>

                <div className="lg:col-span-8 relative">
                    <motion.div
                        style={{ y }}
                        className="relative aspect-video lg:aspect-[16/10] overflow-hidden shadow-2xl rounded-sm border border-[#1a1a1a]/5"
                    >
                        <img
                            src="/assets/v2_atelier.png"
                            className="w-full h-full object-cover"
                            alt="Atelier Detail"
                        />
                    </motion.div>

                    {/* Floating Floating Element */}
                    <div className="absolute -right-12 -top-12 w-1/3 aspect-square bg-[#1a1a1a] shadow-2xl hidden md:flex items-center justify-center p-12 overflow-hidden border border-gold/20">
                        <img src="/assets/v2_sketch.png" className="w-full invert" alt="Sketch" />
                        <span className="absolute bottom-6 left-6 text-gold text-[8px] uppercase tracking-widest">Architectural Logic v.01</span>
                    </div>
                </div>
            </div>

            {/* Signature Bottom Scroll */}
            <div className="mt-60 w-full overflow-hidden whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
                <motion.h3
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="text-[20vw] font-serif uppercase leading-none"
                >
                    POETRY • PURPOSE • PHYSICALITY • PRECISION • POETRY • PURPOSE • PHYSICALITY •
                </motion.h3>
            </div>
        </div>
    );
}
