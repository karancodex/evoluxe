"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Star, ChevronRight, Quote, Calendar, MapPin, Layout, Ruler, Hammer } from "lucide-react";
import Image from "next/image";

const stories = [
    {
        id: 1,
        client: "The Kapoor Family",
        location: "Gurugram, HR",
        title: "A Contemporary Oasis in DLF Phase 5",
        description: "From a bare shell to a warm, sophisticated family home. We translated the Kapoors' love for minimalism into a functional masterpiece with custom modular solutions.",
        img: "/v4/luxury_living_1.png",
        rating: 5,
        service: "Full Home Design",
        duration: "45 Days"
    },
    {
        id: 2,
        client: "Dr. Anirudh Mehta",
        location: "South Delhi, DL",
        title: "The Tech-Forward Bachelor Pad",
        description: "Merging smart home automation with raw, industrial aesthetics. This project focused on creating a seamless blend of work and luxury leisure spaces.",
        img: "/v4/luxury_kitchen_2.png",
        rating: 5,
        service: "Modular Interiors",
        duration: "38 Days"
    },
    {
        id: 3,
        client: "Ms. Priyanka Roy",
        location: "Indiranagar, KA",
        title: "Heritage Charm Meets Modern Kitchen",
        description: "A complete kitchen renovation that preserved the soul of a 40-year-old villa while introducing state-of-the-art PU finishes and storage magic.",
        img: "/v4/interior-living-3d.jpg",
        rating: 5,
        service: "Kitchen Remodel",
        duration: "25 Days"
    }
];

const CustomerStoriesContent = () => {
    return (
        <div className="bg-white">
            {/* Story Hero */}
            <section className="py-32 bg-[#2d2412] text-white relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[#eb595f] font-bold text-[10px] uppercase tracking-widest mb-12 shadow-2xl"
                    >
                        <Star className="w-4 h-4 fill-current" /> 12,000+ Dream Homes Delivered
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-9xl font-serif font-bold mb-10 leading-none tracking-tighter"
                    >
                        Voices of <br /> <span className="italic text-[#eb595f]">Satisfaction</span>
                    </motion.h1>
                    <p className="text-white/40 text-xl md:text-3xl font-light max-w-3xl mx-auto leading-tight italic">
                        "Your dream home isn't just a project for us. It's a journey we take together."
                    </p>
                </div>
            </section>

            {/* Stories Grid */}
            <section className="pb-32 max-w-7xl mx-auto px-6 relative -mt-32 z-20">
                <div className="grid grid-cols-1 gap-32">
                    {stories.map((story, i) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row items-center gap-16 md:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute -inset-4 bg-[#fcebeb] rounded-[4rem] group-hover:inset-0 transition-all duration-700 -z-10 opacity-40" />
                                <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-4xl group-hover:shadow-[0_60px_100px_-30px_rgba(235,89,95,0.3)] transition-all duration-700">
                                    <Image src={story.img} alt={story.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[4s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <button className="w-24 h-24 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center text-[#eb595f] shadow-3xl hover:scale-110 transition-transform group">
                                            <Play className="w-8 h-8 fill-current translate-x-1" />
                                        </button>
                                    </div>
                                    <div className="absolute bottom-12 left-12 right-12 text-white">
                                        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-60">House reveal</p>
                                        <h3 className="text-3xl font-serif font-bold">{story.client}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-12">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-[#eb595f]">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">Verified Review</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] leading-tight">
                                        {story.title}
                                    </h2>
                                    <div className="relative">
                                        <Quote className="absolute -top-6 -left-8 w-16 h-16 text-stone-50 -z-0" />
                                        <p className="text-stone-500 text-xl font-light leading-relaxed relative z-10 italic">
                                            {story.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-10 py-10 border-y border-stone-100">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-stone-400">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Location</span>
                                        </div>
                                        <p className="font-bold text-[#2d2412]">{story.location}</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3 text-stone-400">
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-[10px] font-black uppercase tracking-widest">Timeline</span>
                                        </div>
                                        <p className="font-bold text-[#eb595f]">{story.duration}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <div className="px-6 py-3 bg-[#faf9f6] rounded-2xl flex items-center gap-3 text-[#2d2412]">
                                        <Layout className="w-4 h-4 text-[#eb595f]" />
                                        <span className="text-xs font-bold uppercase tracking-widest">{story.service}</span>
                                    </div>
                                    <button className="flex-1 py-5 bg-[#2d2412] text-white font-bold rounded-2xl flex items-center justify-center gap-4 hover:bg-[#eb595f] transition-all group shadow-xl">
                                        View Full Project <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Achievement Bar */}
            <section className="py-24 bg-[#eb595f] text-white">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <div className="space-y-4">
                        <Ruler className="w-10 h-10 mx-auto opacity-40" />
                        <h4 className="text-4xl font-serif font-black">1.2M+</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Sq. Ft Interiorized</p>
                    </div>
                    <div className="space-y-4">
                        <Hammer className="w-10 h-10 mx-auto opacity-40" />
                        <h4 className="text-4xl font-serif font-black">450+</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Artisans & Partners</p>
                    </div>
                    <div className="space-y-4">
                        <Star className="w-10 h-10 mx-auto opacity-40" />
                        <h4 className="text-4xl font-serif font-black">4.9/5</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Average Rating</p>
                    </div>
                    <div className="space-y-4">
                        <Layout className="w-10 h-10 mx-auto opacity-40" />
                        <h4 className="text-4xl font-serif font-black">45 Days</h4>
                        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">On-Time delivery</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerStoriesContent;
