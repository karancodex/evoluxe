"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useConsultation } from '../providers/ConsultationProvider';

interface FinalCTAProps {
    accentColor?: string;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ accentColor = "#eb595f" }) => {
    const { openConsultation } = useConsultation();
    return (
        <section className="py-24 md:py-32 relative overflow-hidden text-white" style={{ backgroundColor: accentColor }}>
            {/* Background Texture Accents - Subtle */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="cta-dots" width="4" height="4" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.5" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#cta-dots)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full mb-6 border border-white/20"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            <span className="text-white font-bold tracking-[0.4em] uppercase text-[10px]">The Evolution Starts Here</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-[1.1]">
                            Your Legacy <span className="italic opacity-80 font-medium">Begins Today.</span>
                        </h2>

                        <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                            Experience the pinnacle of luxury interiors and transform your living space into a work of architectural art.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                        <button
                            onClick={openConsultation}
                            className="px-10 py-5 bg-white font-bold rounded-full transition-all hover:bg-[#2d2412] hover:text-white shadow-2xl hover:-translate-y-2 text-sm uppercase tracking-widest"
                            style={{ color: accentColor }}
                        >
                            Book a Design Session
                        </button>
                        <button
                            className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-full transition-all hover:bg-white/10 hover:border-white text-sm uppercase tracking-widest"
                        >
                            Download Brochure
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
