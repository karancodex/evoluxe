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
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Minimalist Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#eb595f]/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-10 relative z-10">
                {/* Standardized Header Style */}
                <div className="text-center mb-16 md:mb-24 px-4">
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
                        className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Luxury Designs, <br />
                        <span className="italic text-[#eb595f] font-normal">Transparent Quotes.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed"
                    >
                        Bespoke design solutions tailored for your premium lifestyle. <br className="hidden md:block" />
                        Explore our comprehensive interior services.
                    </motion.p>
                </div>

                {/* Staggered Grid */}
                <div className="flex overflow-x-auto no-scrollbar gap-6 pb-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 md:auto-rows-[360px] px-1 md:px-0 snap-x snap-mandatory">
                    {servicesList.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`
                                relative rounded-[3rem] overflow-hidden cursor-pointer group shadow-xl transition-all duration-700 w-[300px] md:w-full shrink-0 snap-center
                                ${service.size === 'large' ? 'sm:col-span-2 sm:row-span-2 h-[480px] md:h-full' : 'h-[480px] md:h-full'}
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
                                        className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                                    />
                                </div>

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                                {/* Price Tag */}
                                <div className="absolute top-8 right-8 z-20">
                                    <span className="px-4 py-1.5 bg-black/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
                                        {service.price}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                                    <motion.div
                                        animate={{ y: hoveredIndex === index ? -10 : 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="mb-4">
                                            <span className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase block mb-2">
                                                {service.sub}
                                            </span>
                                            <div className="w-10 h-[2px] bg-[#eb595f] group-hover:w-20 transition-all duration-500" />
                                        </div>

                                        <h3 className={`text-white mb-4 leading-tight font-bold ${service.size === 'large' ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
                                            {service.title.split(' ').map((word, i) => (
                                                <span key={i} className="block last:italic last:font-normal">{word}</span>
                                            ))}
                                        </h3>

                                        <div className="flex items-center gap-4">
                                            <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                                                Explore Collection
                                            </p>
                                            <div className="h-[1px] flex-grow bg-white/20" />
                                            <svg className="w-5 h-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </motion.div>

                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 0.8, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-white/60 text-xs font-normal leading-relaxed border-t border-white/10 pt-4 mt-6"
                                            >
                                                {service.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-stone-100 pt-16">
                    <div className="flex items-center gap-6 mb-8 md:mb-0">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-stone-100 flex items-center justify-center text-[10px] font-bold overflow-hidden shadow-sm">
                                    <Image src={`/v4/brand/brand-1.png`} width={48} height={48} alt="Expert" className="opacity-80" />
                                </div>
                            ))}
                        </div>
                        <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                            Join 500+ luxury homeowners
                        </p>
                    </div>

                    <button className="px-12 py-5 bg-[#2d2412] text-white rounded-full font-bold text-sm hover:bg-[#eb595f] transition-all shadow-xl flex items-center gap-4">
                        Request a Proposal
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesSlider;