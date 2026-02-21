"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Shield, Heart, Lightbulb, Users } from 'lucide-react';

const AboutContent = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="About Evoluxe"
                    fill
                    className="object-cover scale-110 blur-[2px] opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#2b0d3e]/20 to-white" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#7a3f91] font-bold text-sm tracking-[0.3em] uppercase mb-6 block"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-[#2b0d3e] mb-8 leading-tight"
                    >
                        Redefining the <br /> <span className="italic text-stone-400">Art of Living</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        At Evoluxe, we believe that a home is more than just a space—it's a reflection of your soul and a sanctuary for your dreams.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-32 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/v4/interior-living-3d.jpg" fill alt="Our Mission" className="object-cover" />
                        </div>
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2b0d3e]">Our Mission</h2>
                                <p className="text-stone-500 text-lg leading-relaxed font-light">
                                    To revolutionize the interior design industry by combining world-class aesthetics with cutting-edge technology and transparent pricing, making luxury living accessible to everyone.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                                    <h4 className="text-4xl font-serif font-bold text-[#7a3f91] mb-2">50K+</h4>
                                    <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">Homes Transformed</p>
                                </div>
                                <div className="p-8 bg-stone-50 rounded-3xl border border-stone-100">
                                    <h4 className="text-4xl font-serif font-bold text-[#7a3f91] mb-2">300+</h4>
                                    <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">Expert Designers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 bg-[#2b0d3e] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7a3f91]/10 blur-3xl rounded-full" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic text-[#c59dd9]">Our Core Values</h2>
                        <div className="w-24 h-1 bg-[#7a3f91] mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: Shield, title: "Trust & Transparency", desc: "No hidden costs. No compromises on quality. Just pure honesty." },
                            { icon: Lightbulb, title: "Innovation", desc: "Pushing the boundaries of design with AI and modern engineering." },
                            { icon: Heart, title: "Empathy", desc: "We design for your lifestyle, your family, and your unique story." }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
                            >
                                <value.icon className="w-12 h-12 text-[#c59dd9] mb-8 transition-transform group-hover:scale-110" />
                                <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                                <p className="text-stone-400 font-light leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
