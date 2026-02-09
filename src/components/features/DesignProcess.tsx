"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        title: "The Inquiry",
        desc: "A deep psychological excavation of your lifestyle and aspirations.",
        icon: "I"
    },
    {
        title: "Concept Soul",
        desc: "Architectural blueprints meeting artistic intuition and tectonic rhythm.",
        icon: "II"
    },
    {
        title: "Material Craft",
        desc: "Precise selection of Carrara, aged walnut, and bespoke metalwork.",
        icon: "III"
    },
    {
        title: "The Manifest",
        desc: "Realization of the spatial ecosystem through obsessive craftsmanship.",
        icon: "IV"
    },
];

export default function DesignProcess() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const pathLength = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-80 bg-black overflow-hidden">
            <div className="container mx-auto px-8 md:px-20 relative z-10">
                <div className="flex flex-col items-center mb-60">
                    <span className="text-gold text-[12px] uppercase tracking-[1.5em] mb-12 opacity-60">The Evolution Sequence</span>
                    <h2 className="text-white text-7xl md:text-[10rem] font-serif uppercase tracking-tightest text-center leading-none">
                        Bespoke <span className="italic text-gold-soft">Methodology.</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Path of Light */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5">
                        <motion.div
                            style={{ scaleY: pathLength }}
                            className="absolute top-0 left-0 w-full h-full bg-gold origin-top shadow-[0_0_20px_rgba(197,160,89,0.8)]"
                        />
                    </div>

                    <div className="space-y-[40vh]">
                        {steps.map((step, index) => (
                            <ProcessStep key={step.title} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[150px] pointer-events-none rounded-full" />
        </section>
    );
}

function ProcessStep({ step, index }: { step: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex items-center justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} w-full`}
        >
            <div className={`relative w-full md:w-[45%] ${isEven ? 'text-right md:pr-20' : 'text-left md:pl-20'}`}>
                <div className={`flex flex-col ${isEven ? 'items-end' : 'items-start'}`}>
                    <span className="text-gold font-serif italic text-7xl md:text-9xl mb-8 opacity-20">
                        {step.icon}
                    </span>
                    <h3 className="text-white text-4xl md:text-6xl font-serif uppercase tracking-widest mb-8">
                        {step.title}
                    </h3>
                    <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                        {step.desc}
                    </p>
                </div>

                {/* Floating Stage Indicator */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-10 md:-right-[60px]' : '-left-10 md:-left-[60px]'} z-20`}>
                    <div className="w-20 h-20 rounded-full border border-gold/20 flex items-center justify-center bg-black backdrop-blur-xl group cursor-help transition-all duration-700 hover:border-gold">
                        <div className="w-2 h-2 rounded-full bg-gold group-hover:scale-[3] transition-transform duration-700" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
