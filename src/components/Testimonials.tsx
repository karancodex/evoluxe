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
        <section className="py-16 md:py-10 bg-white">
            <div className="max-w-[1800px] mx-auto px-6">
                {/* Standardized Header Style */}
                <div className="text-center mb-20 md:mb-28 px-4">
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
                        className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]"
                    >
                        Loved by <span className="text-[#eb595f] italic font-medium opacity-90">Homeowners.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
                    >
                        Real stories from the families who have trusted us to build their dream sanctuaries.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] overflow-hidden border border-neutral-200 hover:border-[#eb595f] hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
                        >
                            {/* 1. Video Thumbnail Section */}
                            <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                                <Image
                                    src={review.image}
                                    alt={review.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Play Button - Centered */}
                                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/10 group-hover:bg-black/20 transition-colors">
                                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer shadow-lg group-hover:scale-110 transition-transform duration-300 text-[#eb595f]">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col">

                                {/* 2. Name & City */}
                                <div className="mb-6 border-b border-neutral-100 pb-4">
                                    <h3 className="text-[#2d2412] font-serif text-xl font-bold mb-1">{review.name}</h3>
                                    <p className="text-[#eb595f] text-xs font-bold tracking-widest uppercase">{review.city}</p>
                                </div>

                                {/* 3. Description */}
                                <div className="relative">
                                    <svg className="absolute -top-2 -left-2 w-6 h-6 text-neutral-200" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 7.55228 14.017 7V3H19.017C20.6739 3 22.017 4.34315 22.017 6V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 7.55228 5.0166 7V3H10.0166C11.6735 3 13.0166 4.34315 13.0166 6V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z" />
                                    </svg>
                                    <p className="text-neutral-600 text-sm leading-relaxed pl-6 pt-1 italic">
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
