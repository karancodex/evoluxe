"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface FeatureProps {
    features: { title: string; desc: string; icon?: string }[];
    layoutType: 'isometric' | 'editorial' | 'artistic' | 'minimal';
    title: string;
    accentColor?: string;
}

export const FeaturesGrid: React.FC<FeatureProps> = ({ features, layoutType, title, accentColor = "#eb595f" }) => {
    return (
        <section className="py-24 md:py-32 bg-[#faf9f6]/30 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Standardized Header Style - Matching Home */}
                <div className="text-center mb-16 md:mb-24 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                        style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                        <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>Exceptional Features</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]">
                        What Makes Our <span className="italic font-medium" style={{ color: accentColor }}>{title} Special?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 border border-stone-100 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"
                                    style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
                                >
                                    {feature.icon || "✦"}
                                </div>
                                <span className="text-[#2d2412]/10 font-serif font-bold italic text-5xl">0{i + 1}</span>
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-[#2d2412]/60 text-base leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
