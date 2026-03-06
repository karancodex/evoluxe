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
        image: "/v4/luxury_kitchen_1.png",
        fallback: "/v4/hero-bg.png",
        title: "Culinary Perfection,",
        subtitle: "Crafted for You.",
        desc: "Transform your kitchen into a masterpiece of efficiency and style. Premium materials meet world-class design."
    },
    {
        id: 3,
        image: "/v4/luxury_bedroom_1.png",
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
        <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] flex items-center bg-[#faf9f6]">
            {/* Image Container with Overflow Hidden to prevent slide overflow */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <AnimatePresence mode="wait">
                    {slides.map((slide, index) => (
                        index === current && (
                            <motion.div
                                key={slide.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                className="absolute inset-0"
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
            </div>

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
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Refined Feature Bar - Positioned Half-In Half-Out */}
            <div className="absolute bottom-0 left-0 right-0 z-30 px-6 transform translate-y-1/2 hidden md:block">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="bg-white rounded-[2.5rem] p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] flex justify-between items-center border border-white/40"
                    >
                        {/* 45 Days Guarantee */}
                        <div className="flex items-center gap-4 px-8">
                            <div className="w-14 h-14 bg-[#fcebeb] rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#2d2412] font-bold text-lg leading-tight">45 days</span>
                                <span className="text-[#2d2412]/40 text-[10px] uppercase tracking-[0.15em] font-bold">move-in guarantee</span>
                            </div>
                        </div>

                        {/* 10 Years Warranty */}
                        <div className="flex items-center gap-4 px-8">
                            <div className="w-14 h-14 bg-[#fcebeb] rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#2d2412] font-bold text-lg leading-tight">10 years</span>
                                <span className="text-[#2d2412]/40 text-[10px] uppercase tracking-[0.15em] font-bold">warranty</span>
                            </div>
                        </div>

                        {/* No Hidden Cost */}
                        <div className="flex items-center gap-4 px-8">
                            <div className="w-14 h-14 bg-[#fcebeb] rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0">
                                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#2d2412] font-bold text-lg leading-tight">No hidden cost</span>
                                <span className="text-[#2d2412]/40 text-[10px] uppercase tracking-[0.15em] font-bold">transparent pricing</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-12 translate-y-1 md:bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">


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
