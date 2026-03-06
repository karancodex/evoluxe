"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Style {
    title: string;
    image: string;
    desc: string;
}

interface DesignStylesProps {
    styles: Style[];
    title: string;
    accentColor?: string;
}

export const DesignStyles: React.FC<DesignStylesProps> = ({ styles, title, accentColor = "#eb595f" }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    <div className="space-y-12">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border"
                                style={{ backgroundColor: `${accentColor}10`, borderColor: `${accentColor}20` }}
                            >
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                                <span className="font-bold tracking-[0.4em] uppercase text-[10px]" style={{ color: accentColor }}>Aesthetics & Form</span>
                            </motion.div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] tracking-tight leading-[1.1]">
                                Signature <span className="italic font-medium" style={{ color: accentColor }}>Design Styles.</span>
                            </h2>
                            <p className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed mt-8 max-w-lg font-normal">
                                Choose from our curated design languages or work with our specialists to create a bespoke aesthetic that is uniquely yours.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {styles.map((style, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`w-full group flex items-center justify-between p-6 md:p-8 rounded-[2rem] transition-all duration-500 border ${activeIndex === i ? 'bg-white shadow-[0_15px_45px_-10px_rgba(0,0,0,0.1)]' : 'border-stone-100 hover:border-stone-200 bg-[#faf9f6]/50'}`}
                                    style={{ borderColor: activeIndex === i ? accentColor : undefined }}
                                >
                                    <div className="flex items-center gap-6 md:gap-8 text-left">
                                        <span className={`text-xl font-serif font-bold italic transition-colors ${activeIndex === i ? '' : 'text-stone-300'}`} style={{ color: activeIndex === i ? accentColor : undefined }}>0{i + 1}</span>
                                        <h3 className={`text-xl md:text-2xl font-serif font-bold transition-colors ${activeIndex === i ? 'text-[#2d2412]' : 'text-stone-500 group-hover:text-stone-700'}`}>{style.title}</h3>
                                    </div>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeIndex === i ? 'text-white rotate-0' : 'bg-stone-100 text-stone-400 rotate-[-45deg] group-hover:rotate-0'}`}
                                        style={{ backgroundColor: activeIndex === i ? accentColor : undefined }}
                                    >
                                        <span className="font-bold">➔</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative aspect-[4/5] lg:aspect-square group hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="absolute inset-0 w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-stone-100"
                            >
                                <Image
                                    src={styles[activeIndex].image}
                                    alt={styles[activeIndex].title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 p-12 text-white">
                                    <p className="font-bold tracking-[0.3em] uppercase text-[10px] mb-4" style={{ color: accentColor }}>Design Philosophy</p>
                                    <h4 className="text-3xl font-serif font-bold mb-4">{styles[activeIndex].title}</h4>
                                    <p className="leading-relaxed text-lg font-light opacity-80">{styles[activeIndex].desc}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

