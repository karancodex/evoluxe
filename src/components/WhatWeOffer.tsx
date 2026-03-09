"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Wrench, Wallet, ShieldCheck } from "lucide-react";

const offerings = [
    {
        title: "Our Services",
        subtitle: "Interior Solutions",
        description: "From structural civil work to the final stroke of paint, we provide a complete end-to-end design and execution experience under one roof.",
        image: "/v4/what_we_offer_services.png",
        items: [
            "Modular Kitchens",
            "Wardrobes",
            "Custom Furniture",
            "Electrical",
            "Plumbing",
            "False Ceiling",
            "Civil",
            "Painting"
        ],
        icon: <Wrench className="w-5 h-5" />,
        reverse: false
    },
    {
        title: "Price Benefits",
        subtitle: "Transparent Luxury",
        description: "We believe in honest luxury with no hidden costs. Our flexible payment plans make your dream home more accessible than ever.",
        image: "/v4/what_we_offer_benefits.png",
        items: [
            "EMI Solutions",
            "Flexible Payments",
            "Zero Hidden Costs",
            "Bank Tie-ups",
            "Instant Quotes"
        ],
        icon: <Wallet className="w-5 h-5" />,
        reverse: true
    },
    {
        title: "Warranty",
        subtitle: "Quality Assurance",
        description: "Our quality is backed by rigorous testing and certifications, giving you peace of mind that lasts long after your move-in.",
        image: "/v4/what_we_offer_warranty.png",
        items: [
            "10-Year Warranty",
            "On-site Service",
            "Structural Shield",
            "QC Certified",
            "Premium Hardware"
        ],
        icon: <ShieldCheck className="w-5 h-5" />,
        reverse: false
    }
];

const WhatWeOffer = () => {
    return (
        <section className="py-20 bg-white overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto px-5 md:px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-50 rounded-full mb-6 border border-stone-100"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f]" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">What we offer</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Luxury Built on <span className="text-[#eb595f] italic font-normal">Trust.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed px-4"
                    >
                        Experience the perfect blend of architectural excellence and comprehensive service solutions.
                    </motion.p>
                </div>

                {/* Compact Editorial Cards */}
                <div className="space-y-12">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`group relative bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-[0_15px_50px_rgba(0,0,0,0.05)] flex flex-col-reverse ${offering.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch lg:h-[450px]`}
                        >
                            {/* Content Side */}
                            <div className="w-full lg:w-[50%] p-8 md:p-12 lg:px-16 flex flex-col justify-center">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-[1px] bg-[#eb595f]" />
                                            <span className="text-[#eb595f] text-[10px] font-bold tracking-[0.3em] uppercase">
                                                {offering.subtitle}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-[#2d2412] leading-tight">
                                            {offering.title}
                                        </h3>
                                    </div>

                                    <p className="text-stone-600 text-base md:text-lg leading-relaxed font-normal">
                                        {offering.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2.5 pt-2">
                                        {offering.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1.5 rounded-full bg-stone-50 border border-stone-100 text-stone-500 text-[11px] md:text-[12px] font-bold hover:bg-[#eb595f] hover:text-white transition-all duration-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <button className="flex items-center gap-2 text-[#2d2412] group/btn hover:text-[#eb595f] transition-colors">
                                            <span className="text-[11px] font-bold tracking-[0.2em] uppercase border-b border-stone-100 group-hover:border-[#eb595f] transition-all pb-1">
                                                Explore Details
                                            </span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="w-full lg:w-[50%] relative h-[300px] lg:h-auto overflow-hidden">
                                <img
                                    src={offering.image}
                                    alt={offering.title}
                                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                                />
                                {/* Clean Badge */}
                                <div className={`absolute top-8 ${offering.reverse ? 'left-8' : 'right-8'} w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg`}>
                                    <span className="text-[#2d2412] font-bold text-sm">0{index + 1}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
