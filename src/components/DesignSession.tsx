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
        <section className="py-20 bg-white overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-50 rounded-full mb-6 border border-stone-100"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f]" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">The Process</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        What is a <br />
                        <span className="text-[#eb595f] italic font-normal opacity-90">Design Session?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed"
                    >
                        Experience our proprietary design methodology that turns your vision into a structural masterpiece.
                    </motion.p>
                </div>

                <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Left side: Content & Controls */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-4 px-1">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    onMouseEnter={() => setActiveStep(index)}
                                    onClick={() => setActiveStep(index)}
                                    className={`relative group cursor-pointer p-6 rounded-2xl transition-all duration-500 border ${activeStep === index
                                        ? "bg-white border-stone-200 shadow-xl scale-[1.02]"
                                        : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                                        }`}
                                >
                                    <div className="flex items-start gap-6">
                                        <span className={`text-2xl font-black transition-colors duration-300 ${activeStep === index ? "text-[#eb595f]" : "text-stone-200"
                                            }`}>
                                            {step.number}
                                        </span>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="text-xl font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors duration-300">{step.title}</h3>

                                            <div className="hidden lg:block">
                                                <AnimatePresence mode="wait">
                                                    {activeStep === index && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <p className="text-stone-500 leading-relaxed max-w-md font-normal">
                                                                {step.desc}
                                                            </p>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                            <div className="lg:hidden text-stone-500 text-sm font-normal leading-relaxed">
                                                {step.desc}
                                            </div>
                                        </div>
                                    </div>

                                    {activeStep === index && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute left-0 top-4 bottom-4 w-1 bg-[#eb595f] rounded-r-full"
                                        />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Visual Stage */}
                    <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px] lg:h-[700px]">
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={steps[activeStep].image}
                                        alt={steps[activeStep].title}
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-10 left-10 text-white">
                                        <p className="text-xs font-bold tracking-widest uppercase opacity-80 mb-1">Step {steps[activeStep].number}</p>
                                        <h4 className="text-2xl font-bold">{steps[activeStep].subtitle}</h4>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === i ? "w-12 bg-[#eb595f]" : "w-3 bg-stone-100"
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

