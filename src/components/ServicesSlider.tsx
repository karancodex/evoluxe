"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const servicesList = [
    { title: "Modular Kitchen", image: "/v4/gen/luxury_kitchen.png", price: "Starts ₹1.2L*", size: "large", desc: "Italian finishes & German hardware", sub: "Bespoke Gastronomy", slug: "modular-kitchen" },
    { title: "Modular Wardrobes", image: "/v4/gen/luxury_wardrobe.png", price: "Starts ₹80k*", size: "medium", desc: "Walk-in & sliding solutions", sub: "Storage & Organizing", slug: "modular-wardrobes" },
    { title: "Customized Furniture", image: "/v4/gen/luxury_furniture.png", price: "Starts ₹55k*", size: "medium", desc: "TV units & accent walls", sub: "Interior Artistry", slug: "customized-furniture" },
    { title: "Electrical Work", image: "/v4/gen/luxury_electrical.png", price: "Starts ₹45k*", size: "medium", desc: "Smart & safe solutions", sub: "Automation & Lighting", slug: "electrical-work" },
    { title: "False Ceiling", image: "/v4/gen/luxury_ceiling.png", price: "Starts ₹15k*", size: "small", desc: "Ambient & cove lighting", sub: "Gypsum & Design", slug: "false-ceiling" },
    { title: "Plumbing", image: "/v4/gen/luxury_plumbing.png", price: "Starts ₹25k*", size: "small", desc: "Seamless engineering", sub: "Fluid Engineering", slug: "plumbing" },
    { title: "Civil Work", image: "/v4/gen/luxury_civil.png", price: "Starts ₹35k*", size: "small", desc: "Foundations of luxury", sub: "Structural Integrity", slug: "civil-work" },
    { title: "Painting", image: "/v4/gen/luxury_painting.png", price: "Starts ₹30k*", size: "small", desc: "Chromatic perfection", sub: "Chromatic Luxury", slug: "painting" },
    { title: "Flooring & Walls", image: "/v4/gen/luxury_flooring.png", price: "Starts ₹65k*", size: "small", desc: "Surface elegance", sub: "Surface Engineering", slug: "floorings-wall-design" }
];

const ServicesSlider = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-12 md:py-16 bg-[#faf9f6]/30 relative overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#eb595f]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[30%] h-[40%] bg-[#e5d5b0]/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
                {/* Standardized Header Style matching WhatWeOffer */}
                <div className="text-center mb-12 md:mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Curation of Excellence</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Luxury Designs, <br />
                        <span className="italic text-[#eb595f] font-medium opacity-90">Transparent Quotes.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Bespoke design solutions tailored for your premium lifestyle. <br className="hidden md:block" />
                        Explore our comprehensive interior services.
                    </motion.p>
                </div>

                {/* Staggered Modern Mosaic Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:auto-rows-[340px]">
                    {servicesList.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`
                                relative rounded-[2.5rem] overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl transition-all duration-700 min-h-[450px] md:min-h-0
                                ${service.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}
                                ${service.size === 'medium' ? 'sm:col-span-2 sm:row-span-1' : 'sm:col-span-1 sm:row-span-1'}
                            `}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="w-full h-full relative"
                            >
                                {/* Base Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                {/* Sophisticated Gradient Overlay - Poster Style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-all duration-500 z-10" />

                                {/* Poster Elements - Brand Logo */}
                                <div className="absolute top-8 left-8 z-20">
                                    <div className="flex flex-col">
                                        <span className="text-white font-accent font-bold tracking-[0.3em] text-[10px] leading-none mb-1">EVOLX</span>
                                        <span className="text-white/60 font-sans font-medium tracking-[0.1em] text-[7px] leading-none">STUDIO</span>
                                        <div className="w-6 h-[1px] bg-white/40 mt-2" />
                                    </div>
                                </div>

                                {/* Price Tag Tag */}
                                <div className="absolute top-8 right-8 z-20">
                                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[9px] font-bold tracking-widest uppercase shadow-lg">
                                        {service.price}
                                    </span>
                                </div>

                                {/* Content Details - Bottom Poster Style */}
                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                                    <motion.div
                                        animate={{
                                            y: hoveredIndex === index ? -10 : 0
                                        }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    >
                                        <div className="mb-2">
                                            <span className="text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase block mb-1">
                                                {service.sub}
                                            </span>
                                            <div className="w-8 h-[1px] bg-[#eb595f] mb-3 group-hover:w-16 transition-all duration-500" />
                                        </div>

                                        <h3 className={`font-serif text-white mb-3 leading-tight ${service.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                                            {service.title.split(' ').map((word, i) => (
                                                <span key={i} className="block last:italic last:font-medium">{word}</span>
                                            ))}
                                        </h3>

                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <p className="text-white/50 text-[10px] font-medium tracking-widest uppercase group-hover:text-white transition-colors duration-300">
                                                Explore Collection
                                            </p>
                                            <div className="h-[1px] flex-grow bg-white/20 group-hover:bg-white/40 transition-colors" />
                                            <svg className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </motion.div>

                                    {/* Revealable Description on Hover */}
                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 0.8, height: "auto", marginTop: 12 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                className="text-white/60 text-xs font-light leading-relaxed border-t border-white/10 pt-4"
                                            >
                                                {service.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Border Glow for Highlight */}
                                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2rem] transition-colors pointer-events-none" />
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-[#2d2412]/5 pt-12">
                    <div className="flex items-center gap-6 mb-8 md:mb-0">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-[#e5d5b0] flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                    <Image src={`/v4/brand/brand-1.png`} width={40} height={40} alt="Expert" className="opacity-80" />
                                </div>
                            ))}
                        </div>
                        <p className="text-[#2d2412]/50 text-xs font-medium italic">
                            Join 500+ luxury homeowners who trusted <br className="hidden sm:block" /> our expertise this year.
                        </p>
                    </div>

                    <button className="group px-12 py-5 bg-[#2d2412] text-white rounded-full font-bold text-sm hover:bg-[#eb595f] transition-all transform hover:-translate-y-1 shadow-2xl flex items-center gap-4 overflow-hidden relative">
                        <span className="relative z-10">Request a Bespoke Proposal</span>
                        <svg className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <div className="absolute inset-0 bg-[#eb595f] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;