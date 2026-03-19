"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
    {
        id: 1,
        name: "Rohit Paul & Shveta",
        city: "Gurugram",
        text: "Hats off to the entire team at EVOLX Studio. They finished the project ahead of time and the quality is unmatched.",
        image: "/v4/design-session-1.png"
    },
    {
        id: 2,
        name: "Swati & Gaurav",
        city: "Bangalore",
        text: "Our experience with EVOLX Studio was nice thanks to the project managers who were always available.",
        image: "/v4/brand_promise_trust.png"
    },
    {
        id: 3,
        name: "Puja Bhatia",
        city: "Mumbai",
        text: "We reached out to EVOLX Studio and they designed the house that we really wanted. It feels like a dream home.",
        image: "/v4/design-session-3.png"
    },
    {
        id: 4,
        name: "Ananya & Vikram",
        city: "Hyderabad",
        text: "The attention to detail in the kitchen design was incredible. Every corner is functional and beautiful.",
        image: "/v4/luxury_kitchen_2.png"
    },
];

const Testimonials = () => {
    return (
        <section className="pt-4 md:pt-6 pb-24 bg-white">
            <div className="max-w-[1800px] mx-auto px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-12 md:mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                        <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Client Voices</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Loved by <span className="text-[#eb595f] italic font-normal">Homeowners.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 max-w-2xl mx-auto text-lg md:text-xl font-normal leading-relaxed"
                    >
                        Real stories from the families who have trusted us to build their dream sanctuaries.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] overflow-hidden border border-stone-100 transition-all duration-500 flex flex-col h-full group hover:shadow-2xl"
                        >
                            {/* 1. Video Thumbnail Section */}
                            <div className="relative h-72 w-full overflow-hidden bg-stone-50">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Play Button - Centered */}
                                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/5 group-hover:bg-black/10 transition-colors">
                                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-lg group-hover:scale-110 transition-transform duration-300 text-[#eb595f]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 md:p-10 flex-1 flex flex-col">

                                {/* 2. Name & City */}
                                <div className="mb-6 border-b border-stone-100 pb-6">
                                    <h3 className="text-[#2d2412] text-2xl font-bold mb-1">{review.name}</h3>
                                    <p className="text-[#eb595f] text-[10px] font-bold tracking-widest uppercase">{review.city}</p>
                                </div>

                                {/* 3. Description */}
                                <div className="relative">
                                    <p className="text-stone-500 text-base leading-relaxed italic font-normal">
                                        "{review.text}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
