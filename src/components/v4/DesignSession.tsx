"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        number: "01",
        title: "Curated Consultation",
        subtitle: "Personal Design Partner",
        desc: "Begin your journey with a master designer. A bespoke dialogue to translate your aspirations into architectural reality.",
        image: "/v4/design-session-1.png",
        color: "#eb595f"
    },
    {
        id: 2,
        number: "02",
        title: "The Living Studio",
        subtitle: "Material Experience",
        desc: "Step into our curated showroom. Touch the textures, feel the finishes, and witness the uncompromising quality of our craft.",
        image: "/v4/design-session-2.png",
        color: "#2d2412"
    },
    {
        id: 3,
        number: "03",
        title: "Crystalline 3D Vision",
        subtitle: "Digital Immersion",
        desc: "Witness your future space in stunning clarity. Our advanced 3D visualization brings every detail to life before a single brick is laid.",
        image: "/v4/design-session-3.png",
        color: "#fcebeb"
    },
    {
        id: 4,
        number: "04",
        title: "Transparent Clarity",
        subtitle: "Precision Valuation",
        desc: "No guesses, just granular accuracy. Receive a comprehensive quote with 100% transparency on materials and timelines.",
        image: "/v4/design-session-4.png",
        color: "#eb595f"
    }
];

const DesignSession = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-24 bg-[#faf9f6]/30 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left side: Content & Controls */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-[#eb595f] font-semibold tracking-widest uppercase text-sm">The Process</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2d2412] leading-tight">
                                What is a <br />
                                <span className="text-[#eb595f]">
                                    Design Session?
                                </span>
                            </h2>
                            <div className="w-20 h-1 bg-[#eb595f] rounded-full" />
                        </motion.div>

                        <div className="space-y-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    onMouseEnter={() => setActiveStep(index)}
                                    onClick={() => setActiveStep(index)}
                                    className={`relative group cursor-pointer p-6 rounded-2xl transition-all duration-500 border ${activeStep === index
                                        ? "bg-white border-[#e5d5b0] shadow-2xl shadow-purple-200/50 scale-[1.02]"
                                        : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <div className="flex items-start gap-6">
                                        <span className={`text-2xl font-black italic transition-colors duration-300 ${activeStep === index ? "text-[#eb595f]" : "text-[#2d2412]/20"
                                            }`}>
                                            {step.number}
                                        </span>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors duration-300">{step.title}</h3>
                                            <AnimatePresence mode="wait">
                                                {activeStep === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p className="text-[#2d2412]/70 leading-relaxed max-w-md">
                                                            {step.desc}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    {/* Active Indicator */}
                                    {activeStep === index && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#eb595f] rounded-r-full shadow-[0_0_10px_#eb595f]"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Visual Stage */}
                    <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[500px] lg:h-[700px]">
                        <div className="absolute inset-0 bg-[#e5d5b0]/10 rounded-[3rem] blur-3xl" />

                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                                    transition={{ duration: 0.8, ease: "anticipate" }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#4d3b1a]/60 via-transparent to-transparent" />

                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-10 left-10 text-white"
                                    >
                                        <p className="text-sm font-medium tracking-[0.2em] uppercase opacity-80 mb-1">Step {steps[activeStep].number}</p>
                                        <h4 className="text-2xl font-bold">{steps[activeStep].subtitle}</h4>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Floating decorative element */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#e5d5b0]/30 to-transparent rounded-full blur-2xl animate-pulse" />
                            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-[#c5a059]/20 to-transparent rounded-full blur-3xl" />
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === i ? "w-12 bg-[#eb595f]" : "w-3 bg-[#eb595f]/20"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DesignSession;

