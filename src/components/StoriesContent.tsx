"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Quote, Star, ArrowRight, CheckCircle, ExternalLink, MessageCircle } from "lucide-react";
import Image from "next/image";

const StoriesContent = () => {
    const stories = [
        {
            title: "A Modern Oasis in the Heart of Pune.",
            client: "The Malhotra Family",
            location: "Koregaon Park, Pune",
            description: "A complete transformation of a heritage bungalow into a contemporary luxury space while preserving its architectural soul.",
            image: "/v4/luxury_living_1.png",
            stats: ["120 Days", "Bespoke Furniture", "Smart Home Integration"]
        },
        {
            title: "The Penthouse Evolution.",
            client: "Siddharth & Rhea",
            location: "Bandra, Mumbai",
            description: "Maximizing views and spatial flow in a 4,500 sq.ft. penthouse with Italian marble and custom-built modular systems.",
            image: "/v4/luxury_living_2.png",
            stats: ["90 Days", "Italian Marble", "Open-Plan Concept"]
        }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center pt-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/v4/interior-living-3d.jpg"
                        alt="Background"
                        fill
                        className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
                </div>
                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">OUR PORTFOLIO</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-9xl font-serif font-bold text-[#2d2412]"
                    >
                        Real Homes. <br />
                        <span className="text-stone-400">Real Stories.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    >
                        Witness the journey of homeowners who trusted Evoluxe Studio to translate their aspirations into architectural realities.
                    </motion.p>
                </div>
            </section>

            {/* 2. FEATURED STORY SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#2d2412] rounded-[4rem] overflow-hidden relative shadow-2xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="relative aspect-square lg:aspect-auto h-full">
                                <Image
                                    src="/v4/luxury_living_3.png"
                                    alt="Featured Case Study"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-24 h-24 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center group hover:bg-[#D28D69] transition-all">
                                        <Play className="w-10 h-10 text-white fill-white group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>
                            </div>
                            <div className="p-12 md:p-24 space-y-12 flex flex-col justify-center">
                                <div className="space-y-4">
                                    <span className="text-[#D28D69] font-bold text-xs uppercase tracking-widest">Featured Story</span>
                                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">The Heritage Villa <br /> Transformation.</h2>
                                    <p className="text-stone-400 text-lg font-light leading-relaxed">
                                        "Evoluxe didn't just design our house; they understood our family. The result is a home that balances our heritage with our modern lifestyle perfectly."
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-stone-800 border border-white/10 overflow-hidden relative">
                                        <Image src="/v4/about/upholstery.png" alt="Client" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold">The Singhania Family</p>
                                        <p className="text-[#D28D69] text-xs uppercase tracking-widest font-bold">Entrepreneur</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CASE STUDIES GRID */}
            <section className="py-32 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">RECENT TRANSFORMATIONS</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Success delivered</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {stories.map((story, i) => (
                            <div key={i} className="bg-white rounded-[3rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={story.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-8 left-8">
                                        <span className="px-6 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest text-[#2d2412] uppercase shadow-lg">{story.location}</span>
                                    </div>
                                </div>
                                <div className="p-12 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-3xl font-serif font-bold text-[#2d2412]">{story.title}</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">{story.description}</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        {story.stats.map((stat, j) => (
                                            <span key={j} className="px-4 py-2 bg-stone-50 rounded-lg text-stone-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                                <CheckCircle className="w-3 h-3 text-[#D28D69]" /> {stat}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="flex items-center gap-4 text-[#D28D69] font-black text-xs uppercase tracking-widest border-b border-transparent hover:border-[#D28D69] transition-all pb-2">
                                        View Case Study <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BEFORE & AFTER SLIDER (Conceptual) */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">THE EVOLUTION</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">The power of <br /> transformation.</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                We specialize in "Bare-Shell-to-Bespoke". See how our designers turn empty concrete structures into soulful sanctuaries of luxury and comfort.
                            </p>
                            <div className="pt-8">
                                <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl">
                                    Browse Full Gallery
                                </button>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl">
                            <Image src="/v4/luxury_living_1.png" alt="After" fill className="object-cover" />
                            <div className="absolute inset-y-0 left-0 w-1/3 bg-stone-300 overflow-hidden border-r-2 border-white">
                                <div className="w-[300%] h-full relative">
                                    <Image src="/v4/about/upholstery.png" alt="Before" fill className="object-cover grayscale" />
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-8 py-4 rounded-full shadow-2xl flex items-center gap-6">
                                <span className="text-[10px] font-black tracking-widest uppercase text-stone-400">Before</span>
                                <div className="w-px h-4 bg-stone-200" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-[#D28D69]">After</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CLIENT REVIEWS SLIDER */}
            <section className="py-32 bg-[#2d2412] text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold">What they say.</h2>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-5 h-5 text-[#D28D69] fill-[#D28D69]" />
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { name: "Priya Rao", review: "The transparency in pricing and the 45-day delivery guarantee were the reasons we chose them. They stuck to it!" },
                            { name: "Amit Khanna", review: "The modular kitchen is a masterpiece. Ergonomics meet aesthetics in the most beautiful way possible." },
                            { name: "Sonal Gupta", review: "From the first 3D render to the final handover, the experience was seamless. Highly professional team." }
                        ].map((rev, i) => (
                            <div key={i} className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 space-y-8 relative group hover:bg-white/10 transition-colors">
                                <Quote className="w-12 h-12 text-[#D28D69] opacity-20 absolute top-12 left-12" />
                                <p className="text-xl font-light leading-relaxed text-stone-300 relative z-10">"{rev.review}"</p>
                                <div className="pt-4 border-t border-white/10 mt-8">
                                    <p className="font-bold text-white uppercase tracking-widest text-xs">{rev.name}</p>
                                    <p className="text-[#D28D69] text-xs uppercase tracking-widest mt-1">Verified Client</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. GOOGLE REVIEWS BADGE */}
            <section className="py-24 px-6">
                <div className="max-w-2xl mx-auto bg-white border border-stone-100 rounded-[3rem] p-12 flex flex-col md:flex-row items-center gap-12 shadow-xl hover:shadow-2xl transition-all">
                    <div className="text-center md:text-left space-y-2">
                        <div className="flex justify-center md:justify-start gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-6 h-6 text-[#FABE05] fill-[#FABE05]" />
                            ))}
                        </div>
                        <h3 className="text-4xl font-serif font-bold text-[#2d2412]">4.8 / 5.0</h3>
                        <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">Google Customer Rating</p>
                    </div>
                    <div className="w-px h-24 bg-stone-100 hidden md:block" />
                    <div className="flex-1 text-center md:text-left space-y-6">
                        <p className="text-stone-500 font-light">Join over <span className="text-[#2d2412] font-bold">1,200+ happy families</span> who have shared their journey on Google.</p>
                        <button className="group flex items-center gap-3 text-blue-600 font-bold text-xs uppercase tracking-widest">
                            View all reviews <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. DETAILED CASE STUDY 1 */}
            <section className="py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">CASE STUDY</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Urban Modernity <br /> in Flat 402.</h2>
                        </div>
                        <div className="space-y-6">
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                We were tasked with turning a compact 3BHK into a spacious 'loft-style' apartment. By removing non-structural walls and using mirror finishes, we doubled the perceived space.
                            </p>
                            <ul className="space-y-4">
                                {["Open Kitchen Design", "Hidden Storage Solutions", "Ambient Lighting Control"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-[#2d2412] font-bold text-xs uppercase tracking-widest">
                                        <CheckCircle className="w-5 h-5 text-[#D28D69]" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="px-10 py-5 bg-[#D28D69] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#2d2412] transition-all">
                            Deep Dive into Design
                        </button>
                    </div>
                    <div className="lg:w-1/2 relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image src="/v4/3d_kitchen_iso.png" alt="Modern Apartment" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 8. INSTAGRAM HIGHLIGHTS */}
            <section className="py-24 px-6 text-center space-y-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412]">Stories from the Field.</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { label: "Execution", icon: <MessageCircle /> },
                        { label: "Materials", icon: <CheckCircle /> },
                        { label: "Handover", icon: <Star /> }
                    ].map((item, i) => (
                        <div key={i} className="space-y-4 group cursor-pointer">
                            <div className="w-24 h-24 rounded-full border-2 border-stone-100 flex items-center justify-center text-[#D28D69] group-hover:border-[#D28D69] group-hover:bg-[#D28D69] group-hover:text-white transition-all">
                                {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                            </div>
                            <p className="text-[10px] font-black tracking-widest uppercase text-stone-400 group-hover:text-[#2d2412] transition-colors">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Want to be our next <br /> success story?</h2>
                    <p className="text-stone-500 text-lg font-light">Let's create something beautiful together. Reach out for a free consultation.</p>
                    <div className="flex justify-center gap-6 pt-4">
                        <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl">
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StoriesContent;
