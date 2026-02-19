"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
    { title: "Modular Kitchen", image: "/v4/luxury_kitchen_2.png", price: "Starts ₹1.2L*", size: "large", desc: "Italian finishes & German hardware" },
    { title: "Wardrobes", image: "/v4/service_wardrobe.png", price: "Starts ₹80k*", size: "medium", desc: "Walk-in & sliding solutions" },
    { title: "Living Room", image: "/v4/luxury_living_1.png", price: "Starts ₹55k*", size: "medium", desc: "TV units & accent walls" },
    { title: "Bedroom", image: "/v4/luxury_living_2.png", price: "Starts ₹45k*", size: "medium", desc: "Cosy & serene retreats" },
    { title: "False Ceiling", image: "/v4/hero-bg.png", price: "Starts ₹15k*", size: "small", desc: "Ambient & cove lighting" },
    { title: "Luxury Pooja", image: "/v4/service_crockery.png", price: "Starts ₹25k*", size: "small", desc: "Spiritual & serene designs" },
    { title: "Foyer Area", image: "/v4/luxury_living_1.png", price: "Starts ₹35k*", size: "small", desc: "First impressions count" },
    { title: "Study Office", image: "/v4/hero-bg.png", price: "Starts ₹30k*", size: "small", desc: "Productive working spaces" }
];

const ServicesSlider = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f2eaf7]/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-[#c59dd9]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#c59dd9] font-bold tracking-[0.3em] uppercase text-[10px] mb-3 block">Price Estimator</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-[#2b0d3e] leading-none mb-4">
                                Luxury Designs, <br />
                                <span className="italic text-[#7a3f91]">Transparent Quotes.</span>
                            </h2>
                            <p className="text-[#2b0d3e]/60 text-lg font-light leading-relaxed max-w-lg">
                                Select a category to explore bespoke design solutions tailored for your premium lifestyle.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Staggered Modern Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[280px]">
                    {servicesList.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className={`
                                relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-2xl transition-all duration-500
                                ${service.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${service.size === 'medium' ? 'md:col-span-2 md:row-span-1' : 'md:col-span-1 md:row-span-1'}
                            `}
                        >
                            {/* Base Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Sophisticated Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2b0d3e] via-[#2b0d3e]/30 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />

                            {/* Glassmorphism Price Tag */}
                            <div className="absolute top-5 right-5 z-20">
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-[10px] font-bold tracking-widest uppercase shadow-sm">
                                    {service.price}
                                </span>
                            </div>

                            {/* Content Details */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <motion.div
                                    animate={{
                                        y: hoveredIndex === index ? 0 : 10,
                                        opacity: 1
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h3 className={`font-serif text-white mb-2 leading-tight ${service.size === 'large' ? 'text-4xl' : 'text-2xl'}`}>
                                        {service.title}
                                    </h3>

                                    <AnimatePresence>
                                        {(hoveredIndex === index || service.size === 'large') && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/70 text-sm font-light mb-4 line-clamp-1">
                                                    {service.desc}
                                                </p>
                                                <div className="flex items-center gap-2 text-[#c59dd9] text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-white transition-colors">
                                                    <span>View Details</span>
                                                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>

                            {/* Border Glow for Highlight */}
                            <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-[#2b0d3e]/5 pt-10">
                    <p className="text-[#2b0d3e]/40 text-xs font-medium italic mb-6 md:mb-0">
                        *Indicative pricing. Connect for a bespoke quotation.
                    </p>
                    <button className="px-10 py-4 bg-[#2b0d3e] text-white rounded-full font-bold text-sm hover:bg-[#7a3f91] transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-3">
                        Talk to a Specialist
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;