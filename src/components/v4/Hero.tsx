"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/v4/luxury_living_1.png",
        fallback: "/v4/hero-bg.png",
        title: "Luxury Interiors,",
        subtitle: "Designed for Life.",
        desc: "Experience the perfect blend of elegance and functionality. We create homes that reflect your style and stand the test of time."
    },
    {
        id: 2,
        image: "/v4/luxury_kitchen_2.png",
        fallback: "/v4/hero-bg.png",
        title: "Culinary Perfection,",
        subtitle: "Crafted for You.",
        desc: "Transform your kitchen into a masterpiece of efficiency and style. Premium materials meet world-class design."
    },
    {
        id: 3,
        image: "/v4/luxury_living_2.png", // Using the 2nd living room image as the 3rd slide for now since bedroom gen failed
        fallback: "/v4/hero-bg.png",
        title: "Serenity & Comfort,",
        subtitle: "Redefined Daily.",
        desc: "Your personal sanctuary, designed for ultimate relaxation. Wake up to luxury every single morning."
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] flex items-center bg-[#faf9f6] overflow-hidden">
            <AnimatePresence mode="wait">
                {slides.map((slide, index) => (
                    index === current && (
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            className="absolute inset-0 z-0"
                        >
                            <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-cover object-center"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = slide.fallback;
                                }}
                                priority={index === 0}
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/90 to-transparent sm:via-[#faf9f6]/50 text-left" />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-32">
                <div className="max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-[#eb595f] font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block font-accent">
                                Interior Architecture & Design
                            </span>
                            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2d2412] leading-[1.05] mb-6 tracking-tight">
                                {slides[current].title}<br />
                                <span className="text-[#eb595f] italic font-medium">{slides[current].subtitle}</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-[#2d2412]/80 mb-10 leading-relaxed max-w-xl font-medium">
                                {slides[current].desc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                <button className="px-8 py-4 bg-[#eb595f] text-white font-bold rounded-full shadow-lg hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base">
                                    Start Your Journey
                                </button>
                                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#eb595f] border-2 border-[#eb595f] font-bold rounded-full hover:bg-[#faf9f6] transition-all text-sm sm:text-base">
                                    View Portfolio
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-[#eb595f] w-8" : "bg-[#2d2412]/30 hover:bg-[#eb595f]/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
