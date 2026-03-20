"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface GalleryProps {
    images: string[];
    accentColor?: string;
}

export const GalleryGrid: React.FC<GalleryProps> = ({ images, accentColor = "#eb595f" }) => {
    return (
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#faf9f6]/30 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Style */}
                <div className="text-center mb-16 md:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                        style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                        <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>The Visual Portfolio</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]">
                        A Gallery of <span className="italic font-medium" style={{ color: accentColor }}>Bespoke Living.</span>
                    </h2>
                    <p className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Explore our latest meticulously crafted projects that blend form and function into a seamless architectural experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {images.slice(0, 6).map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className={`relative overflow-hidden group rounded-[2.5rem] shadow-lg aspect-[4/5] ${idx % 3 === 1 ? 'md:mt-12' : ''}`}
                        >
                            <Image
                                src={img}
                                alt="Gallery Preview"
                                fill
                                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    className="space-y-4"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Signature Project</span>
                                    <h4 className="text-white text-2xl font-serif font-bold leading-tight">Modern Luxury Module 0{idx + 1}</h4>
                                    <button className="flex items-center gap-2 text-white/80 group/btn hover:text-white transition-colors">
                                        <span
                                            className="text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/40 transition-all pb-1"
                                            style={{ borderBottomColor: `var(--accent-hover-color, ${accentColor}40)` }}
                                        >
                                            View Case Study
                                        </span>
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
