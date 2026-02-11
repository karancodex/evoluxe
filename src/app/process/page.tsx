"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
    {
        step: "01",
        title: "Discovery",
        subtitle: "The Foundation",
        desc: "We begin by decoding the rhythm of your life. Through deep consultation, we uncover the functional needs and emotional aspirations.",
        image: "/assets/strategic_planning.png",
        meta: "4-6 Weeks"
    },
    {
        step: "02",
        title: "Concept",
        subtitle: "Visual Language",
        desc: "Developing a unique design language. We present moodboards, material palettes, and initial sketches.",
        image: "/assets/craft_details.png",
        meta: "Presentation"
    },
    {
        step: "03",
        title: "Precision",
        subtitle: "Architectural Detail",
        desc: "Optimizing flow and spatial harmony. Detailed CAD drawings and 3D modeling ensure every inch acts in service of the whole.",
        image: "/assets/office_luxury.png",
        meta: "Technical Drafts"
    },
    {
        step: "04",
        title: "Artistry",
        subtitle: "Bespoke Execution",
        desc: "Partnering with master craftsmen. From custom joinery to stone masonry, we oversee the rigorous translation of design.",
        image: "/assets/commercial_luxury.png",
        meta: "Construction"
    },
    {
        step: "05",
        title: "Styling",
        subtitle: "The Reveal",
        desc: "Curating the soul of the space. Art acquisition, object placement, and the final sensory tuning.",
        image: "/assets/residential_luxury.png",
        meta: "Handover"
    }
];

export default function ProcessPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="bg-white min-h-screen selection:bg-gold selection:text-white">

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[110]"
                style={{ scaleX }}
            />

            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/about_hero.png"
                        alt="Process Vision"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </div>

                <div className="relative z-10 text-center max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="border border-white/50 inline-block px-10 py-3 rounded-full mb-12 backdrop-blur-2xl bg-white/5"
                    >
                        <span className="text-[12px] uppercase tracking-[0.5em] font-bold text-white shadow-lg">The Methodology of Luxury</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-7xl md:text-[8rem] font-serif mb-8 leading-[0.8] tracking-tighter drop-shadow-2xl"
                    >
                        Blueprint <span className="italic text-gold">&</span> <br />
                        <span className="text-white">Creation.</span>
                    </motion.h1>
                </div>
            </section>

            {/* Alternating Process Section */}
            <section className="relative py-40 lg:py-60 bg-white overflow-hidden">
                {/* Central Vertical Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-black/[0.08] -translate-x-1/2 hidden lg:block" />

                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`flex flex-col lg:flex-row items-center justify-between mb-40 lg:mb-80 last:mb-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Image Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                                    className="w-full lg:w-[45%] aspect-[4/5] relative group"
                                >
                                    <div className="absolute inset-0 border border-black/5 -m-4 lg:-m-8 transition-transform duration-700 group-hover:scale-95" />
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover shadow-2xl transition-all duration-1000 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 p-6 bg-white/95 backdrop-blur-xl border border-black/5 shadow-xl">
                                        <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gold block mb-1">Architecture</span>
                                        <span className="text-sm font-bold text-black uppercase tracking-widest">{step.meta}</span>
                                    </div>
                                </motion.div>

                                {/* Central Visual Node */}
                                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                    <div className="w-5 h-5 rounded-full bg-white border-[3px] border-gold z-20 shadow-xl" />
                                    <div className="absolute w-24 h-[1px] bg-gold/20 -translate-x-1/2 left-0" />
                                </div>

                                {/* Content Column */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                                    className="w-full lg:w-[45%] mt-16 lg:mt-0"
                                >
                                    <div className="relative lg:px-12">
                                        <span className="text-[12rem] md:text-[18rem] font-serif text-black/5 absolute -top-32 -left-10 select-none pointer-events-none font-black leading-none">
                                            {step.step}
                                        </span>

                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="w-12 h-px bg-gold" />
                                            <span className="text-gold text-[11px] uppercase tracking-[0.5em] font-black italic tracking-widest">Phase {step.step}</span>
                                        </div>

                                        <h3 className="text-6xl md:text-8xl font-serif text-black mb-10 leading-[0.9] tracking-tighter">
                                            {step.title}
                                        </h3>

                                        <p className="text-black/50 text-xl leading-relaxed max-w-lg font-light mb-12">
                                            {step.desc}
                                        </p>

                                        <div className="inline-block px-10 py-4 border border-black/10 rounded-full bg-stone-50/50 backdrop-blur-sm">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-black font-black italic">{step.subtitle}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Turnkey Process Footer */}
            <section className="h-[70vh] bg-neutral-900 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 grayscale transition-transform duration-[4s] group-hover:scale-110">
                    <img src="/assets/strategic_planning.png" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <span className="text-gold text-[10px] uppercase tracking-[0.8em] mb-12 block font-black">Finality</span>
                    <h2 className="text-white text-5xl md:text-8xl font-serif mb-16 leading-tight">Your vision, <br /> <span className="italic text-gold-soft">Architected.</span></h2>
                    <button className="px-16 py-6 bg-white text-black text-[12px] uppercase tracking-[0.5em] font-black hover:bg-gold hover:text-white transition-all shadow-2xl">
                        Request Private Consultation
                    </button>
                </div>
            </section>
        </div>
    );
}
