"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Sparkles, PenTool, Hammer, CheckCircle, ArrowRight } from 'lucide-react';

interface ProcessProps {
    variant?: 'isometric' | 'editorial' | 'artistic' | 'minimal' | 'standard';
    accentColor?: string;
}

export const ProcessHelix: React.FC<ProcessProps> = ({ variant = 'standard', accentColor = "#eb595f" }) => {
    return (
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white relative overflow-hidden">
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
                        <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>The Seamless 45-Day Evolution</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]">
                        The Modular <span className="italic font-medium" style={{ color: accentColor }}>Helix Journey.</span>
                    </h2>
                    <p className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Our precision-engineered process ensures your dream home is delivered in exactly 45 days, with zero compromises on quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                    {[
                        { title: "Consultation", day: "Day 01-02", icon: <Sparkles className="w-6 h-6" />, color: accentColor, desc: "Direct dialogue with our master designers to translate your vision into form." },
                        { title: "Design Selection", day: "Day 07-14", icon: <PenTool className="w-6 h-6" />, color: accentColor, desc: "Refining every millimeter and material choice with 3D precision mapping." },
                        { title: "Precision Mfgr.", day: "Day 15-35", icon: <Hammer className="w-6 h-6" />, color: accentColor, desc: "German-engineered fabrication with robotic accuracy in our facility." },
                        { title: "Final Handover", day: "Day 36-45", icon: <CheckCircle className="w-6 h-6" />, color: accentColor, desc: "White-glove installation and strict quality audit for a flawless reveal." }
                    ].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="bg-white rounded-[2rem] p-10 border border-stone-100 shadow-[0_15px_45px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 text-8xl font-serif font-bold italic text-stone-50 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform">0{i + 1}</div>

                            <div
                                className={`w-14 h-14 text-white flex items-center justify-center mb-10 text-xl font-bold rounded-2xl shadow-lg rotate-6 group-hover:rotate-0 transition-transform duration-500`}
                                style={{ backgroundColor: step.color }}
                            >
                                {step.icon}
                            </div>

                            <h4 className="text-2xl font-serif font-bold text-[#2d2412] mb-3">{step.title}</h4>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-[2px]" style={{ backgroundColor: accentColor }} />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: accentColor }}>{step.day}</span>
                            </div>

                            <p className="text-[#2d2412]/60 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link href="/services/the-modular-journey" className="group inline-flex items-center gap-4 font-bold text-[10px] uppercase tracking-[0.3em] hover:gap-8 transition-all" style={{ color: accentColor }}>
                        Full Process Documentation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
