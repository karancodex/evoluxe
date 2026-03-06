"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Star, Award, History, Scissors, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const brands = [
    { name: "Design Studio" },
    { name: "Urban Living" },
    { name: "Modern Home" },
    { name: "Classic Interiors" },
    { name: "Luxury Spaces" },
    { name: "Heritage Craft" },
];

const AboutContent = () => {
    return (
        <div className="bg-white overflow-hidden selection:bg-[#C5A467]/30">

            {/* --- SECTION 1: LUXURY HERO (Matches Uploaded Image top) --- */}
            <section className="relative min-h-screen flex items-center pt-20">
                {/* Background Details */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-40 right-10 w-[600px] h-[600px] bg-[#C5A467]/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-40 left-10 w-[400px] h-[400px] bg-[#2d2412]/5 rounded-full blur-[100px] pointer-events-none" />
                </div>

                <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block"
                        >
                            <span className="text-stone-400 text-[10px] font-black tracking-[0.4em] uppercase">
                                Welcome to Evoluxe
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412] leading-[1.1]"
                        >
                            Decorate your home <br />
                            <span className="text-stone-400 font-medium">in harmony.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-500 text-lg md:text-xl font-light leading-relaxed max-w-lg"
                        >
                            Facilisi ante lectus taciti curabitur felis tempus tincidunt posuere fermentum volutpat. Urna magna suscipit feugiat in proin.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button className="px-10 py-5 bg-[#D28D69] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#2d2412] transition-all transform active:scale-95 shadow-lg shadow-[#D28D69]/20">
                                Get Started
                            </button>
                            <button className="px-10 py-5 border-2 border-stone-200 text-[#2d2412] rounded-xl font-bold text-xs tracking-widest uppercase hover:border-[#D28D69] hover:text-[#D28D69] transition-all transform active:scale-95">
                                Learn more
                            </button>
                        </motion.div>
                    </div>

                    {/* Featured Furniture Piece - Inspired by the chair in the image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative h-[600px] flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 to-transparent -z-10 rounded-[3rem]" />
                        <div className="relative w-full h-full max-w-lg">
                            <Image
                                src="/v4/about/upholstery.png"
                                alt="Master Design Piece"
                                fill
                                className="object-contain drop-shadow-2xl translate-y-10"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- SECTION 2: EDITORIAL ABOUT (Matches Grid Layout from Image) --- */}
            <section className="py-32 relative bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Watermark Background Text - Exactly like the image */}
                    <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
                        <span className="text-[180px] md:text-[300px] font-serif font-black text-stone-50 tracking-tighter leading-none">
                            About
                        </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                        {/* Text Content */}
                        <div className="space-y-10">
                            <div className="space-y-4">
                                <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">
                                    WHO WE ARE
                                </span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] leading-tight max-w-md">
                                    Inspire your space through <span className="text-[#D28D69]">art and design.</span>
                                </h2>
                            </div>

                            <div className="space-y-6">
                                <p className="text-stone-500 text-lg leading-relaxed font-light">
                                    Serving in the industry for more than two decades, we've blended traditional craftsmanship with modern luxury. Our roots trace back to <span className="text-[#2d2412] font-semibold">1978</span>, carrying forward a father's legacy.
                                </p>
                            </div>

                            <button className="group px-8 py-5 bg-[#D28D69] text-white rounded-xl font-bold text-xs tracking-[0.2em] uppercase flex items-center gap-4 hover:bg-[#2d2412] transition-all">
                                Discover more
                                <MoveRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>

                        {/* Image Grid - Exact Structure from Image */}
                        <div className="grid grid-cols-12 gap-6">
                            {/* Top wide image */}
                            <div className="col-span-12 aspect-[1.8/1] relative rounded-xl overflow-hidden">
                                <Image
                                    src="/v4/about/heritage.png"
                                    alt="Heritage Workshop"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Bottom left stats box */}
                            <div className="col-span-5 p-8 bg-white border border-stone-100 rounded-xl shadow-sm flex flex-col items-center justify-center text-center space-y-2">
                                <h4 className="text-5xl font-serif font-bold text-[#D28D69]">20+</h4>
                                <p className="text-stone-400 text-[10px] font-black tracking-[0.2em] uppercase leading-tight">Years Experience</p>
                            </div>
                            {/* Bottom right vertical image */}
                            <div className="col-span-7 aspect-[1/1.2] relative rounded-xl overflow-hidden">
                                <Image
                                    src="/v4/estimates/full-home.png"
                                    alt="Modern Design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: TRUSTED BRANDS --- */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-[#2d2412] text-3xl font-serif font-bold mb-16 px-4">
                        Trusted by 30,000 world-class <br /> brands and organizations of all sizes
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 items-center justify-items-center opacity-30">
                        {brands.slice(0, 8).map((brand, i) => (
                            <div key={i} className="flex items-center gap-2 grayscale brightness-0">
                                <div className="w-10 h-10 rounded-full border-2 border-stone-900 flex items-center justify-center font-black text-xl italic">L</div>
                                <span className="font-bold text-sm tracking-widest uppercase">{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: INSPIRATION BANNER --- */}
            <section className="relative py-48 px-6 text-center overflow-hidden">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="Inspiration"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-white leading-tight">
                        Get inspired by the fresh approach <br /> to crafting a home that's uniquely yours.
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Since 1978, our legacy has been built on master upholstery and structural excellence. Experience luxury without compromise.
                    </p>
                    <button className="px-12 py-5 bg-[#D28D69] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#2d2412] transition-all transform active:scale-95 shadow-2xl">
                        Discover more
                    </button>
                </div>
            </section>

            {/* --- SECTION 5: STATS BAR (The White/Golden Tabs) --- */}
            <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20">
                <div className="bg-white rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.08)] p-12 lg:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { value: "20+", label: "Years Experience" },
                            { value: "450+", label: "Happy Customers" },
                            { value: "4.7", label: "Company Rating" },
                            { value: "1978", label: "Father's Legacy" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center text-center space-y-2">
                                <h4 className="text-5xl font-serif font-bold text-[#2d2412]">{stat.value}</h4>
                                <p className="text-stone-400 text-[10px] font-black tracking-[0.2em] uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MASTER UPHOLSTERY HIGHLIGHT --- */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/v4/about/upholstery.png"
                            alt="Master Upholstery"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">Mastery in Detail</span>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">Bespoke Upholstery <br /> Craftsmanship</h3>
                        </div>
                        <p className="text-stone-500 text-lg leading-relaxed font-light">
                            Our upholstery master-craftsmen have been serving the industry for more than two decades, using techniques passed down since our father founded the studio in 1978. Every piece is a testament to our quality-first foundation.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h5 className="font-bold text-[#2d2412] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D28D69]" /> Premium Fabrics</h5>
                                <p className="text-stone-400 text-sm">Finest silken velvets and top-grain leathers.</p>
                            </div>
                            <div>
                                <h5 className="font-bold text-[#2d2412] mb-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#D28D69]" /> Hand Stitched</h5>
                                <p className="text-stone-400 text-sm">Every seam and fold inspected twice.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutContent;
