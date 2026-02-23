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
        <section className="relative w-full h-[90vh] flex items-center bg-[#faf9f6] overflow-hidden">
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

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-[#c5a059] font-bold tracking-[0.4em] uppercase text-xs mb-4 block">
                                Interior Architecture & Design
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#4d3b1a] leading-tight mb-6">
                                {slides[current].title}<br />
                                <span className="text-[#c5a059]">{slides[current].subtitle}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#4d3b1a]/80 mb-10 leading-relaxed max-w-xl font-medium">
                                {slides[current].desc}
                            </p>

                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-[#c5a059] text-white font-semibold rounded-full shadow-lg hover:bg-[#4d3b1a] transition-all transform hover:-translate-y-1 hover:shadow-xl">
                                    Start Your Journey
                                </button>
                                <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-[#c5a059] border-2 border-[#c5a059] font-semibold rounded-full hover:bg-[#faf9f6] transition-all">
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
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-[#c5a059] w-8" : "bg-[#4d3b1a]/30 hover:bg-[#c5a059]/50"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
