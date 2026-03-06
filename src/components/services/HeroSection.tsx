"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
    title: string;
    subtitle: string;
    image: string;
    layoutType: 'isometric' | 'editorial' | 'artistic' | 'minimal';
    accentColor?: string;
}

export const HeroSection: React.FC<HeroProps> = ({ title, subtitle, image, layoutType, accentColor = "#eb595f" }) => {
    return (
        <section className={`relative h-[80vh] md:h-[85vh] flex items-center bg-[#faf9f6]`}>
            {/* Image Container with Overlay */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover object-center opacity-40 md:opacity-100"
                        priority
                    />
                    {/* Gradient Overlay for Text Readability - Matching Home style */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/95 to-transparent sm:via-[#faf9f6]/60 text-left" />
                </motion.div>

                {/* SVG Background Pattern - Subtle */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                            <pattern id="dot-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                                <circle cx="1" cy="1" r="0.5" fill="#4d3b1a" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dot-grid)" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-32">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span
                            className="font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block"
                            style={{ color: accentColor }}
                        >
                            {layoutType === 'isometric' ? 'Precision Engineering' : 'Architectural Excellence'}
                        </span>

                        <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2d2412] leading-[1.05] mb-6 tracking-tight">
                            {title}<br />
                            <span
                                className="italic font-medium"
                                style={{ color: accentColor }}
                            >
                                {subtitle.split(':')[0]}
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#2d2412]/80 mb-10 leading-relaxed max-w-xl font-medium">
                            {subtitle.includes(':') ? subtitle.split(':')[1].trim() : subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <button
                                className="px-10 py-5 text-white font-bold rounded-full shadow-lg transition-all transform hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base"
                                style={{ backgroundColor: accentColor }}
                            >
                                Get a Quote
                            </button>
                            <button
                                className="px-10 py-5 border-2 font-bold rounded-full transition-all text-sm sm:text-base text-[#2d2412]/60 hover:text-[#2d2412] hover:border-[#2d2412]/20"
                                style={{ borderColor: `${accentColor}40` }}
                            >
                                View Gallery
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Slide Indicators - Static for single service */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                <div
                    className="w-8 h-3 rounded-full transition-all duration-300"
                    style={{ backgroundColor: accentColor }}
                />
            </div>
        </section>
    );
};

