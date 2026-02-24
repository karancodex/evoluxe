"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Heart, Award, ShieldCheck, Globe, Zap } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Design Studios", value: "45+" },
    { label: "Happy Homeowners", value: "12,000+" },
    { label: "Expert Designers", value: "300+" },
    { label: "Cities Presence", value: "22+" }
];

const values = [
    {
        title: "Integrity First",
        desc: "Transparency is our foundation. From material pricing to delivery timelines, we keep it real.",
        icon: <ShieldCheck className="w-6 h-6" />
    },
    {
        title: "Innovation Driven",
        desc: "We use state-of-the-art tech to ensure your home is future-proof and functionally superior.",
        icon: <Zap className="w-6 h-6" />
    },
    {
        title: "Customer Obsession",
        desc: "Your joy is our success metric. We don't just build homes; we craft experiences.",
        icon: <Heart className="w-6 h-6" />
    },
    {
        title: "Award Winning",
        desc: "Recognized nationally for excellence in modular design and architectural innovation.",
        icon: <Award className="w-6 h-6" />
    }
];

const AboutContent = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="EVOLX Studio Heritage"
                    fill
                    className="object-cover scale-110 blur-[2px] opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#eb595f]/10 to-white" />
                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#eb595f] font-bold text-xs tracking-[0.4em] uppercase mb-8 block"
                    >
                        Our Heritage
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-9xl font-serif font-bold text-[#2d2412] mb-10 leading-none"
                    >
                        Pioneering <br /> <span className="italic text-stone-400">Digital Luxury</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-stone-500 text-lg md:text-2xl font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        From a boutique design house to India's most innovative interior brand.
                        We're redefining how people dream, design, and dwell.
                    </motion.p>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 border-y border-stone-100 py-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center group">
                            <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-4 group-hover:text-[#eb595f] transition-colors">{stat.value}</h3>
                            <p className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-4xl group">
                        <Image
                            src="/v4/luxury_living_1.png"
                            alt="Mission"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-[#2d2412]/20 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Target className="w-12 h-12 text-[#eb595f]" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412]">Our Mission</h2>
                            <p className="text-stone-500 text-xl font-light leading-relaxed">
                                To democratize luxury home design through technological innovation,
                                transparent pricing, and world-class craftsmanship. We believe every
                                family deserves a home that inspires them.
                            </p>
                        </div>
                        <div className="space-y-6 pt-12 border-t border-stone-100">
                            <Rocket className="w-12 h-12 text-[#eb595f]" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412]">Our Vision</h2>
                            <p className="text-stone-500 text-xl font-light leading-relaxed">
                                To be the global benchmark for tech-enabled interior solutions,
                                setting new standards in sustainability and design efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-32 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <span className="text-[#eb595f] text-xs font-black tracking-[0.4em] uppercase">The Foundation</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">What We Stand For</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="p-12 bg-white rounded-[3rem] border border-stone-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 group">
                                <div className="w-16 h-16 bg-[#fcebeb] rounded-2xl flex items-center justify-center text-[#eb595f] mb-8 group-hover:bg-[#eb595f] group-hover:text-white transition-colors duration-500">
                                    {v.icon}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-4">{v.title}</h3>
                                <p className="text-stone-500 font-light leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
