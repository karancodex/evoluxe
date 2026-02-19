"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        value: "10-Year",
        label: "Flat Warranty",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.033L4 10c0 5.291 3.42 9.775 8 11.352 4.58-1.577 8-6.06 8-11.352l-.382-4.016z" />
            </svg>
        )
    },
    {
        value: "45-Day",
        label: "Move-in Guarantee",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        )
    },
    {
        value: "146",
        label: "Quality Checks",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2v-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        )
    },
    {
        value: "1L+",
        label: "Happy Homes",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        )
    },
    {
        value: "100+",
        label: "Cities Presence",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    },
    {
        value: "2",
        label: "Countries",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        value: "20L+",
        label: "Products Range",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    },
    {
        value: "2000+",
        label: "Expert Designers",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L15.343 13" />
            </svg>
        )
    },
];

const StatsSection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Artistic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 bg-[#c59dd9] rounded-full blur-[100px]" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7a3f91] rounded-full blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#7a3f91] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                    >
                        Why Evoluxe?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-[#2b0d3e] mb-6"
                    >
                        Built on Trust, Crafted with <span className="text-[#7a3f91]">Precision</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#2b0d3e]/70 max-w-xl mx-auto text-lg leading-relaxed"
                    >
                        We combine artistic vision with engineering excellence to deliver
                        homes that aren't just beautiful, but built for generations.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.5,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(43,13,62,0.05)] border border-[#f2eaf7] relative group overflow-hidden"
                        >
                            {/* Decorative Background Blob */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#f2eaf7]/50 rounded-full group-hover:bg-[#7a3f91]/10 transition-colors duration-500 -z-0" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-[#f2eaf7] rounded-2xl flex items-center justify-center text-[#7a3f91] mb-8 group-hover:bg-[#7a3f91] group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 shadow-sm">
                                    {stat.icon}
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-bold text-[#2b0d3e] group-hover:text-[#7a3f91] transition-colors tracking-tight">
                                        {stat.value}
                                    </h3>
                                    <p className="text-[#2b0d3e]/60 font-medium group-hover:text-[#2b0d3e] transition-colors leading-snug">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <svg className="w-6 h-6 text-[#7a3f91]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-10 bg-[#2b0d3e] rounded-[3rem] text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Abstract Circle Decoration */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-white/5 rounded-full" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 border-8 border-white/5 rounded-full" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        <div className="text-left space-y-2 max-w-sm">
                            <h4 className="text-white text-2xl font-bold">Ready to start your project?</h4>
                            <p className="text-white/60 font-light">Join over 1,00,000+ happy families and build your dream sanctuary today.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-[#c59dd9] text-[#2b0d3e] font-bold rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg">
                                Consult a Designer
                            </button>
                            <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all active:scale-95">
                                View Our Process
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default StatsSection;
