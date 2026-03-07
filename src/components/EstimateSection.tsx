"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calculator, Sparkles, ArrowRight } from 'lucide-react';

const estimates = [
    {
        title: "Full Home",
        category: "Complete Transformation",
        description: "Comprehensive costing for your complete home interior transformation.",
        image: "/v4/estimates/full-home.png",
        tag: "Premium Choice"
    },
    {
        title: "Modular Kitchen",
        category: "Culinary Excellence",
        description: "Detailed estimates for modular and custom kitchen designs.",
        image: "/v4/estimates/kitchen.png",
        tag: "Most Popular"
    },
    {
        title: "Luxury Wardrobes",
        category: "Smart Storage",
        description: "Transparent price breakdowns for smart storage solutions.",
        image: "/v4/estimates/wardrobe.png",
        tag: "New Arrival"
    }
];

const EstimateSection = () => {
    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            {/* Soft decorative background circles */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#eb595f]/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#2d2412]/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Standardized Premium Header */}
                <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 px-5 py-2 bg-[#eb595f]/5 rounded-full mb-8 border border-[#eb595f]/10"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-[#eb595f]" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Pricing & Value</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] leading-[1.1] mb-8"
                    >
                        Plan your dream home <br className="hidden md:block" />
                        with <span className="text-[#eb595f] italic font-medium">Transparent Estimates</span>.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Precision meets luxury. Our detailed calculator provides accurate pricing for your unique space with zero hidden costs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {estimates.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.21, 0.45, 0.32, 0.9]
                            }}
                            className="group relative h-[550px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(45,36,18,0.12)] cursor-pointer"
                        >
                            {/* Background Image with Slow Zoom */}
                            <div className="absolute inset-0 transition-transform duration-[4s] ease-out group-hover:scale-110">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover"
                                    alt={item.title}
                                />
                                {/* Sophisticated Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-[#2d2412]/40 to-transparent group-hover:via-[#2d2412]/60 transition-colors duration-500" />
                                <div className="absolute inset-0 bg-[#eb595f]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Content Overlays */}
                            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 z-20 flex flex-col justify-end h-full">
                                {/* Tag - Glassmorphism style */}
                                <div className="mb-auto">
                                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-4 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {item.tag}
                                    </span>
                                </div>

                                {/* Main Text */}
                                <div className="space-y-4 transform transition-transform duration-500 group-hover:-translate-y-4">
                                    <div className="space-y-1">
                                        <p className="text-[#eb595f] text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">
                                            {item.category}
                                        </p>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-white/70 text-base leading-relaxed max-w-xs font-light transition-opacity duration-500 group-hover:opacity-100 opacity-60">
                                        {item.description}
                                    </p>

                                    {/* Link Style Button */}
                                    <div className="pt-6">
                                        <div className="flex items-center gap-3 text-white group/btn">
                                            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-[#eb595f] group-hover/btn:border-[#eb595f] transition-all duration-300">
                                                <Calculator className="w-5 h-5 transition-transform group-hover:rotate-12" />
                                            </div>
                                            <span className="text-xs font-bold tracking-[0.2em] uppercase border-b border-transparent group-hover/btn:border-white transition-all pb-1">
                                                Calculate Pricing
                                            </span>
                                            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] pointer-events-none group-hover:border-white/20 transition-colors" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA or Disclaimer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-stone-400 text-xs tracking-widest uppercase font-medium">
                        *Estimates based on current market standards and material quality.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default EstimateSection;
