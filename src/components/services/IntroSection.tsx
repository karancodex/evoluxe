"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface IntroProps {
    title: string;
    description: string;
    image: string;
    layoutType: 'isometric' | 'editorial' | 'artistic' | 'minimal';
    accentColor?: string;
}

export const IntroSection: React.FC<IntroProps> = ({ title, description, image, layoutType, accentColor = "#eb595f" }) => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={`space-y-8 ${layoutType === 'editorial' ? 'order-2' : ''}`}
                    >
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2 border"
                                style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>The Evolution</span>
                            </motion.div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2d2412] leading-[1.1] tracking-tight">
                                Transformative <br />
                                <span className="italic font-medium" style={{ color: accentColor }}>{title} Solutions</span>
                            </h2>
                        </div>

                        <p className="text-[#2d2412]/70 leading-relaxed text-lg md:text-xl font-normal max-w-xl">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <button
                                className="px-10 py-5 text-white font-bold rounded-full transition-all hover:bg-[#2d2412] shadow-lg hover:-translate-y-1 text-sm uppercase tracking-wider"
                                style={{ backgroundColor: accentColor }}
                            >
                                Explore Concepts
                            </button>
                            <button className="flex items-center gap-2 text-[#2d2412] group py-4">
                                <span
                                    className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-stone-200 group-hover:text-[#eb595f] transition-all pb-1"
                                    style={{ borderBottomColor: `var(--accent-hover-color, ${accentColor}40)` }}
                                >
                                    Our Approach
                                </span>
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className={`relative aspect-[4/5] lg:aspect-square group ${layoutType === 'editorial' ? 'order-1 scale-95 -rotate-2' : ''}`}
                    >
                        <div className="absolute inset-0 bg-stone-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src={image}
                                alt={title}
                                fill
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/5" />
                        </div>

                        {/* Interactive Accent Element */}
                        <div
                            className="absolute -bottom-10 -right-6 md:-right-10 w-40 md:w-56 bg-white p-6 md:p-8 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.2)] border hidden md:block"
                            style={{ borderColor: `${accentColor}10` }}
                        >
                            <div className="space-y-4">
                                <div className="w-10 h-1" style={{ backgroundColor: accentColor }} />
                                <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest leading-relaxed">
                                    Crafted with <span style={{ color: accentColor }}>uncompromising</span> attention to every single detail.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
