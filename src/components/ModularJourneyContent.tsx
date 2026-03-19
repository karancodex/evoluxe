"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Calendar,
    Sparkles,
    Ruler,
    Monitor,
    Factory,
    Truck,
    PartyPopper,
    Clock,
    ShieldCheck,
    Users
} from "lucide-react";
import Image from "next/image";
import { useConsultation } from "./providers/ConsultationProvider";

const steps = [
    {
        id: 1,
        title: "Initial Consultation",
        desc: "Meet our expert designers to discuss your vision, lifestyle, and budget. We'll outline the possibilities for your space.",
        icon: <Sparkles className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 1-2",
        image: "/v4/journey-step-1.png"
    },
    {
        id: 2,
        title: "Site Measurement",
        desc: "Our technical team visits your home for precision measurements, ensuring every modular unit fits perfectly.",
        icon: <Ruler className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 3-5",
        image: "/v4/interior-living-3d.jpg" // Placeholder for now
    },
    {
        id: 3,
        title: "Design Visualization",
        desc: "See your dream home in 3D in our collaborative studio. We iterate on layouts and material selections until you're 100% satisfied.",
        icon: <Monitor className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 7-14",
        image: "/v4/journey-step-3.png"
    },
    {
        id: 4,
        title: "Precision Manufacturing",
        desc: "Your designs are sent to our state-of-the-art factory where German technology ensures millimetre precision.",
        icon: <Factory className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 15-35",
        image: "/v4/design-session-2.png" // Placeholder for now
    },
    {
        id: 5,
        title: "Delivery & Installation",
        desc: "All components are delivered in flat-pack boxes and installed by our certified professionals in just a few days.",
        icon: <Truck className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 36-42",
        image: "/v4/luxury_kitchen_2.png" // Placeholder for now
    },
    {
        id: 6,
        title: "The Big Reveal",
        desc: "Quality checks are completed, and we hand over your beautiful new home with a comprehensive warranty.",
        icon: <PartyPopper className="w-8 h-8" />,
        color: "#eb595f",
        day: "Day 45",
        image: "/v4/journey-step-6.png"
    }
];

const ModularJourneyContent = () => {
    const { openConsultation } = useConsultation();
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="py-20 text-center px-6 border-b border-stone-100">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[#eb595f] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                >
                    The EVOLX Way
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6"
                >
                    Your 45-Day <span className="text-[#eb595f] italic">Transformation</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#2d2412]/60 max-w-2xl mx-auto text-lg leading-relaxed"
                >
                    From the first sketch to the final handover, we've optimized every step to deliver
                    luxury modular interiors with transparency and speed.
                </motion.p>
            </section>

            {/* Steps Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="relative">
                    {/* Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-stone-100 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-32">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-8 md:left-1/2 top-10 md:top-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#eb595f] -translate-x-1/2 z-10 shadow-lg hidden md:block" />

                                {/* Content Card */}
                                <div className="w-full md:w-[45%] bg-white p-8 md:p-12 rounded-[2rem] border border-stone-100 hover:border-[#eb595f]/30 hover:shadow-2xl transition-all duration-500 group">
                                    <div className="flex items-center justify-between mb-8">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl transition-transform duration-500 group-hover:rotate-12"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            {step.icon}
                                        </div>
                                        <span className="text-4xl md:text-6xl font-black text-stone-100 group-hover:text-[#eb595f]/10 transition-colors">
                                            0{step.id}
                                        </span>
                                    </div>
                                    <span className="text-[#eb595f] font-bold text-[10px] tracking-widest uppercase mb-2 block">{step.day}</span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2d2412] mb-4 group-hover:text-[#eb595f] transition-colors">{step.title}</h3>
                                    <p className="text-stone-500 leading-relaxed text-lg font-light">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Step Image for Desktop */}
                                <div className="hidden md:block w-[45%]">
                                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100 group">
                                        <Image
                                            src={step.image || "/v4/interior-living-3d.jpg"}
                                            alt={step.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Confidence Section */}
            <section className="py-24 bg-[#faf9f6]/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                            <Clock className="w-12 h-12 text-[#eb595f] mb-6" />
                            <h4 className="text-xl font-bold text-[#2d2412] mb-3">On-Time Delivery</h4>
                            <p className="text-stone-500 text-sm">We stick to our timelines. If we're late, we pay you rent.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                            <ShieldCheck className="w-12 h-12 text-[#eb595f] mb-6" />
                            <h4 className="text-xl font-bold text-[#2d2412] mb-3">10-Year Warranty</h4>
                            <p className="text-stone-500 text-sm">Peace of mind guaranteed with a decade-long structural warranty.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-stone-100 shadow-sm">
                            <Users className="w-12 h-12 text-[#eb595f] mb-6" />
                            <h4 className="text-xl font-bold text-[#2d2412] mb-3">Dedicated Manager</h4>
                            <p className="text-stone-500 text-sm">One point of contact for everything throughout your journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-[#eb595f] relative overflow-hidden text-center text-white px-6">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
                        <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                    </svg>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Ready to Start Your Journey?</h2>
                    <p className="text-white/80 mb-12 text-lg md:text-xl font-light">
                        Book your design session today and take the first step towards your dream home.
                    </p>
                    <button
                        onClick={openConsultation}
                        className="px-12 py-5 bg-white text-[#eb595f] font-bold rounded-full shadow-2xl hover:bg-[#2d2412] hover:text-white transition-all transform hover:-translate-y-1 uppercase tracking-widest text-sm"
                    >
                        Start Your Journey Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ModularJourneyContent;
