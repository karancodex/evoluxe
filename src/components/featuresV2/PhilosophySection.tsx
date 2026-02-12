"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PhilosophySection() {
    const containerRef = useRef(null);
    const sketchRef = useRef<SVGSVGElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    useEffect(() => {
        if (sketchRef.current) {
            const paths = sketchRef.current.querySelectorAll("path, circle");
            gsap.fromTo(paths,
                { strokeDasharray: 2000, strokeDashoffset: 2000 },
                {
                    strokeDashoffset: 0,
                    duration: 4,
                    ease: "power3.inOut",
                    scrollTrigger: {
                        trigger: sketchRef.current,
                        start: "top 60%",
                    }
                }
            );
        }
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[160vh] flex items-center justify-center py-60 overflow-hidden bg-ivory">
            {/* Immersive Background Texture */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
            >
                <div
                    className="w-full h-[200%] bg-repeat"
                    style={{ backgroundImage: "url('/assets/marble.png')", backgroundSize: '1000px' }}
                />
            </motion.div>

            <div className="container mx-auto px-8 md:px-20 relative z-10 max-w-[1700px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

                    <div className="lg:col-span-1" /> {/* Spacer */}

                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-6 mb-16">
                                <div className="w-12 h-[1px] bg-gold" />
                                <span className="text-gold text-[12px] uppercase tracking-[0.8em] font-medium">The Proposition</span>
                            </div>

                            <h2 className="text-7xl md:text-[10rem] font-serif text-charcoal mb-20 leading-[0.85] tracking-tightest">
                                Evolution <br />
                                <span className="italic pl-12 md:pl-24 text-gold-soft">Defined</span> <br />
                                By <span className="text-gold">Luxury.</span>
                            </h2>

                            <div className="max-w-2xl border-l-[1px] border-gold/30 pl-16 md:pl-24 space-y-16 py-8">
                                {[
                                    "We do not design spaces; we curate living ecosystems that evolve alongside your identity.",
                                    "Every project is a deep architectural excavation of the client's cultural and spiritual heritage.",
                                    "Our mastery lies in the precise tension between raw tectonic power and refined artistic soul."
                                ].map((text, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.2, duration: 1.2 }}
                                        className="text-charcoal/80 text-xl md:text-2xl font-light leading-relaxed"
                                    >
                                        {text}
                                    </motion.p>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1.5 }}
                                className="mt-32 flex flex-wrap gap-20"
                            >
                                <div className="flex flex-col gap-3">
                                    <span className="text-gold text-[10px] uppercase tracking-[0.4em] opacity-40">Section I</span>
                                    <span className="text-charcoal font-serif text-3xl italic">Culture</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-gold text-[10px] uppercase tracking-[0.4em] opacity-40">Section II</span>
                                    <span className="text-charcoal font-serif text-3xl italic">Craft</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <span className="text-gold text-[10px] uppercase tracking-[0.4em] opacity-40">Section III</span>
                                    <span className="text-charcoal font-serif text-3xl italic">Soul</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-4 relative h-full flex flex-col justify-center">
                        <motion.div
                            style={{ rotateY: -15, rotateX: 10, perspective: "2000px" }}
                            className="relative z-10"
                        >
                            <svg
                                ref={sketchRef}
                                viewBox="0 0 500 800"
                                className="w-full h-auto opacity-20 grep-shadow-2xl translate-x-12"
                                fill="none"
                                stroke="#483c32"
                                strokeWidth="0.8"
                            >
                                {/* Ornate Architectural Sketch */}
                                <path d="M 50 200 L 450 200 L 450 700 L 50 700 Z" />
                                <path d="M 50 450 L 450 450" />
                                <path d="M 150 200 L 150 700" />
                                <path d="M 350 200 L 350 700" />
                                <path d="M 250 200 L 250 100" />
                                <circle cx="250" cy="450" r="80" />
                                <path d="M 50 200 Q 250 100 450 200" />
                                <path d="M 50 700 Q 250 800 450 700" />
                            </svg>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 border border-gold/10 rounded-full animate-slow-spin" />
                    </div>

                    <div className="lg:col-span-1" />
                </div>
            </div>

            {/* Decorative side bar */}
            <div className="absolute left-10 top-40 bottom-40 w-[1px] bg-gold/10 hidden md:block" />
        </section>
    );
}
