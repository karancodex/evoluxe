"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Material {
    title: string;
    image: string;
    desc: string;
}

interface MaterialShowcaseProps {
    materials: Material[];
    layoutType: 'isometric' | 'editorial' | 'artistic' | 'minimal';
    accentColor?: string;
}

export const MaterialShowcase: React.FC<MaterialShowcaseProps> = ({ materials, layoutType, accentColor = "#eb595f" }) => {
    return (
        <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Style */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                            style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                            <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>Curated Surfaces</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] tracking-tight leading-[1.1]">
                            The Palette of <span className="italic font-medium" style={{ color: accentColor }}>Luxury Living.</span>
                        </h2>
                    </div>
                    <p className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                        Sourced globally, selected locally for uncompromising quality and timeless elegance.
                    </p>
                </div>

                <div className="space-y-16 md:space-y-24">
                    {materials.map((material, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`flex flex-col lg:flex-row items-stretch gap-10 md:gap-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Part */}
                            <div className="w-full lg:w-1/2 relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-xl group">
                                <Image
                                    src={material.image}
                                    alt={material.title}
                                    fill
                                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700" />

                                {/* Badge */}
                                <div className={`absolute top-6 ${i % 2 === 1 ? 'left-6' : 'right-6'} w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md border border-white/20`}>
                                    <span className="text-stone-900 font-serif font-bold italic text-sm">0{i + 1}</span>
                                </div>
                            </div>

                            {/* Text Part */}
                            <div className="w-full lg:w-1/2 flex flex-col justify-center py-4">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-[1px]" style={{ backgroundColor: accentColor }} />
                                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: accentColor }}>Premium Selection</span>
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">
                                        {material.title}
                                    </h3>
                                    <p className="text-[#2d2412]/60 text-lg leading-relaxed max-w-xl">
                                        {material.desc}
                                    </p>

                                    <div className="flex gap-8 pt-6 border-t border-stone-100">
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2412]/40 mb-1">Durability</p>
                                            <p className="text-lg font-serif font-bold text-[#2d2412]">Architectural Grade</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2d2412]/40 mb-1">Selection</p>
                                            <p className="text-lg font-serif font-bold text-[#2d2412]">Hand-picked</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
