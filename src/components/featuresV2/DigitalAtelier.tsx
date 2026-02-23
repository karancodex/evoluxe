"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import clsx from 'clsx';

// Simple SVG Icons to replace lucide
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
);
const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
);
const ActivityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
);
const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);

const DigitalAtelier: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('spatial');

    const snapshots = [
        {
            id: 'spatial',
            title: 'Spatial',
            subtitle: 'Architecture & Flow',
            icon: SunIcon,
            description: "Designing the bones of a sanctuary. We prioritize light and movement to create effortless living.",
            detail: "Monaco Penthouse",
            image: "/assets/villa_exterior.png",
            color: "bg-stone-900/40",
            textColor: "text-gold-soft"
        },
        {
            id: 'textural',
            title: 'Textural',
            subtitle: 'Rare Materials',
            icon: SparklesIcon,
            description: "Hand-selected stones and bespoke timbers. The tactile soul of every project.",
            detail: "Viola Marble Detail",
            image: "/assets/craft_details.png",
            color: "bg-charcoal/40",
            textColor: "text-gold-soft"
        },
        {
            id: 'conceptual',
            title: 'Conceptual',
            subtitle: 'Vision & Planning',
            icon: ActivityIcon,
            description: "From moodboard to blue-print. The intellectual foundation of luxury living.",
            detail: "Strategic Planning",
            image: "/assets/strategic_planning.png",
            color: "bg-black/40",
            textColor: "text-gold-soft"
        },
        {
            id: 'finality',
            title: 'Finality',
            subtitle: 'Finished Reveal',
            icon: MoonIcon,
            description: "The moment of transformation. High-art environments ready for life.",
            detail: "Vibrant Reveal Hub",
            image: "/assets/EVOLX Studio_final_reveal_home_vibrant.png",
            color: "bg-stone-900/40",
            textColor: "text-gold-soft"
        }
    ];

    return (
        <section className="py-40 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-4 block">Atelier</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-charcoal tracking-tight">Digital <i className="text-gold">Atelier</i></h2>
                </div>

                <div className="flex flex-col lg:flex-row h-[700px] gap-4">
                    {snapshots.map((item) => {
                        const isActive = activeId === item.id;
                        return (
                            <motion.div
                                key={item.id}
                                layout
                                onMouseEnter={() => setActiveId(item.id)}
                                onClick={() => setActiveId(item.id)}
                                className={clsx(
                                    "relative rounded-[40px] overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1]",
                                    isActive ? "flex-[4]" : "flex-1 opacity-80 hover:opacity-100"
                                )}
                            >
                                {/* Background Image with Overlay */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-1000"
                                        style={{ transform: isActive ? 'scale(1.1)' : 'scale(1)' }}
                                    />
                                    <div className={clsx("absolute inset-0 transition-colors duration-500",
                                        isActive ? "opacity-40" : "opacity-60",
                                        item.color
                                    )} />
                                </div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">

                                    {/* Top Icon/Title */}
                                    <div className="flex justify-between items-start">
                                        <div className={clsx(
                                            "w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-all",
                                            isActive ? "bg-white/20 border-white/30 text-white" : "bg-white/10 border-white/10 text-white/60"
                                        )}>
                                            <item.icon />
                                        </div>

                                        {/* Vertical Title for inactive state on desktop */}
                                        {!isActive && (
                                            <div className="hidden lg:block absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-90 origin-left">
                                                <span className="text-xl font-serif uppercase tracking-widest text-white/80">{item.title}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Active Content */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="relative z-10"
                                            >
                                                <span className={clsx("text-xs font-bold uppercase tracking-[0.4em] mb-4 block", item.textColor)}>{item.subtitle}</span>
                                                <h3 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-none">{item.title}</h3>
                                                <p className="text-white text-lg font-light leading-relaxed max-w-md mb-8">
                                                    {item.description}
                                                </p>

                                                {/* Detail Card Overlay */}
                                                <div className="bg-white/10 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-lg">
                                                    <div className="w-20 h-20 bg-white/5 rounded-2xl flex-shrink-0 border border-white/5 overflow-hidden">
                                                        <img src={item.image} className="w-full h-full object-cover opacity-60" />
                                                    </div>
                                                    <div className="flex-grow text-center md:text-left">
                                                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-2">Perspective</p>
                                                        <h4 className="text-2xl font-serif text-white">{item.detail}</h4>
                                                    </div>
                                                    <Link href="/portfolio" className="w-14 h-14 bg-white text-charcoal rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                                                        <ArrowRightIcon />
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DigitalAtelier;
