"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    TrendingUp,
    Home,
    Award,
    Globe,
    Briefcase,
    PenTool,
    Truck,
    BarChart,
    ChevronRight,
    Search,
    MapPin,
    Building
} from "lucide-react";
import Image from "next/image";

const FranchiseContent = () => {
    const [formState, setFormState] = useState({ name: "", city: "", phone: "", investment: "" });

    const benefits = [
        {
            title: "Proven Model",
            desc: "Join a brand with successful operational experience and high profitability ratios.",
            icon: <Award className="w-6 h-6" />
        },
        {
            title: "Design Support",
            desc: "Expert designers to help you set up and maintain a high-end experience center.",
            icon: <PenTool className="w-6 h-6" />
        },
        {
            title: "Supply Chain",
            desc: "End-to-end manufacturing and logistics support directly from our factory.",
            icon: <Truck className="w-6 h-6" />
        },
        {
            title: "Advanced Tech",
            desc: "Proprietary CRM and design tools to handle leads and projects efficiently.",
            icon: <BarChart className="w-6 h-6" />
        }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[80vh] flex items-center overflow-hidden">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="Business Partnership"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#eb595f] font-bold tracking-[0.3em] uppercase text-xs mb-4 block"
                        >
                            Partnership Opportunity
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412] mb-6 leading-tight"
                        >
                            Build the Future of <br />
                            <span className="text-[#eb595f] italic">Luxury Living</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-[#2d2412]/70 text-lg md:text-xl leading-relaxed mb-10 font-light"
                        >
                            Partner with India's fastest-growing premium interior design studio.
                            Bring EVOLX Studio to your city and transform how homes are designed.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="px-10 py-5 bg-[#eb595f] text-white font-bold rounded-full shadow-2xl hover:bg-[#2d2412] transition-all transform hover:-translate-y-1"
                        >
                            Apply for Franchise
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Core Stats */}
            <section className="py-24 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { label: "Partner Sites", value: "50+" },
                            { label: "City Presence", value: "25+" },
                            { label: "Avg. ROI", value: "24-36M" },
                            { label: "Happy Clients", value: "5000+" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl border border-stone-100 text-center">
                                <p className="text-4xl font-serif font-black text-[#eb595f] mb-2">{stat.value}</p>
                                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why EVOLX? */}
            <section className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div>
                            <span className="text-[#eb595f] font-bold text-sm tracking-widest uppercase block mb-4">Why EVOLX Studio?</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412] leading-tight">
                                Empowering Partners <br className="hidden md:block" /> with Every Advantage
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="w-12 h-12 bg-[#fcebeb] rounded-xl flex items-center justify-center text-[#eb595f]">
                                        {benefit.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-[#2d2412]">{benefit.title}</h4>
                                    <p className="text-stone-500 text-sm leading-relaxed">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative bg-[#eb595f] rounded-[3rem] p-1 shadow-2xl overflow-hidden aspect-square md:aspect-video">
                        <Image
                            src="/v4/luxe_banner_bg.png"
                            alt="Experience Center"
                            fill
                            className="object-cover rounded-[3rem] opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
                        />
                        <div className="absolute inset-x-12 bottom-12 bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                            <p className="text-white text-xl font-serif italic mb-4">"Partnering with EVOLX has been the best professional decision for our group."</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-stone-100" />
                                <div>
                                    <p className="text-white font-bold text-sm">Vikram Malhotra</p>
                                    <p className="text-white/60 text-xs uppercase tracking-widest">Franchise Owner, Pune</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Section */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#2d2412]">Start Your Application</h3>
                        <p className="text-[#2d2412]/60 text-lg leading-relaxed font-light">
                            Take the first step towards a rewarding business journey. Fill out the form,
                            and our partnership team will get in touch within 48 hours for a preliminary discussion.
                        </p>

                        <div className="space-y-6 pt-6">
                            {[
                                { icon: <MapPin className="w-5 h-5" />, label: "Flexible Location Selection" },
                                { icon: <Building className="w-5 h-5" />, label: "Store Layout Assistance" },
                                { icon: <Briefcase className="w-5 h-5" />, label: "Comprehensive Training Provided" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-[#2d2412]">
                                    <div className="text-[#eb595f]">{item.icon}</div>
                                    <span className="font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-stone-100">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Full Name</label>
                                <input type="text" placeholder="John Doe" className="w-full px-0 py-4 border-b-2 border-stone-100 focus:border-[#eb595f] outline-none transition-all placeholder:text-stone-200" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Target City</label>
                                <input type="text" placeholder="City Name" className="w-full px-0 py-4 border-b-2 border-stone-100 focus:border-[#eb595f] outline-none transition-all placeholder:text-stone-200" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Phone Number</label>
                                <input type="tel" placeholder="+91 XXX XXX XXXX" className="w-full px-0 py-4 border-b-2 border-stone-100 focus:border-[#eb595f] outline-none transition-all placeholder:text-stone-200" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Investment Budget</label>
                                <select className="w-full px-0 py-4 border-b-2 border-stone-100 focus:border-[#eb595f] outline-none bg-transparent transition-all text-stone-600">
                                    <option>₹50L - ₹1Cr</option>
                                    <option>₹1Cr - ₹2Cr</option>
                                    <option>₹2Cr+</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 pt-6">
                                <button className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-2xl shadow-xl hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 uppercase tracking-widest">
                                    Send Franchise Inquiry
                                </button>
                                <p className="text-center text-stone-400 text-xs mt-6">By clicking, you agree to our Partnership Terms and Privacy Policy.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FranchiseContent;
