"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Zap, Globe, Users } from "lucide-react";
import Image from "next/image";

const CareersContent = () => {
    const jobs = [
        { title: "Senior Interior Designer", location: "Pune / Mumbai", type: "Full-time", dept: "Design" },
        { title: "Project Manager", location: "Pune", type: "Full-time", dept: "Operations" },
        { title: "Modular Architect", location: "Remote / Hybrid", type: "Contract", dept: "Tech" },
        { title: "Sales Consultant", location: "Mumbai", type: "Full-time", dept: "Sales" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">WE ARE HIRING</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]">
                        Build the future <br /> of <span className="text-stone-400">luxury living.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
                        Join a team of visionaries dedicated to redefining human spaces through architectural precision and creative soul.
                    </motion.p>
                </div>
            </section>

            {/* 2. CULTURE HIGHLIGHT */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Creative Freedom", icon: <Star />, desc: "We don't believe in templates. Every designer is an artist with their own canvas." },
                        { title: "Impactful Work", icon: <Zap />, desc: "See your designs turn into real homes for real families within weeks." },
                        { title: "Global Standards", icon: <Globe />, desc: "Work with top-tier international materials and the latest 3D design tech." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-6 p-10 bg-stone-50 rounded-[3rem] hover:bg-[#2d2412] hover:text-white transition-all duration-500 group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D28D69] group-hover:bg-[#D28D69] group-hover:text-white transition-all shadow-sm">
                                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                            </div>
                            <h3 className="text-2xl font-serif font-bold">{item.title}</h3>
                            <p className="text-stone-500 font-light group-hover:text-stone-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. OFFICE VISION SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image src="/v4/luxury_living_1.png" alt="Office Life" fill className="object-cover" />
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">More than just <br /> a workspace.</h2>
                        <p className="text-stone-500 text-lg font-light leading-relaxed">
                            Our studios are designed to inspire. Collaborative lounges, dedicated VR zones, and an endless library of material samples await you.
                        </p>
                        <ul className="space-y-4">
                            {["Free Daily Coffee", "Learning Workshops", "Team Outings", "Flexible Timings"].map((perk, i) => (
                                <li key={i} className="flex items-center gap-4 text-[#D28D69] font-bold text-xs uppercase tracking-widest">
                                    <Heart className="w-4 h-4" /> {perk}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 4. OPEN POSITIONS GRID */}
            <section className="py-32 px-6 bg-[#2d2412] text-white">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold">Open Positions</h2>
                        <p className="text-stone-400 font-light">Find your place in our evolving journey.</p>
                    </div>
                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-white/10 transition-all cursor-pointer group">
                                <div className="space-y-2 text-center md:text-left">
                                    <h4 className="text-2xl font-serif font-bold group-hover:text-[#D28D69] transition-colors">{job.title}</h4>
                                    <div className="flex gap-6 text-stone-400 text-xs font-bold uppercase tracking-widest">
                                        <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> {job.location}</span>
                                        <span className="flex items-center gap-2"><Clock className="w-3 h-3" /> {job.type}</span>
                                    </div>
                                </div>
                                <button className="px-10 py-5 bg-[#D28D69] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-[#2d2412] transition-all">
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TEAM STATS */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {[
                        { label: "Designers", value: "24" },
                        { label: "Engineers", value: "18" },
                        { label: "Cities", value: "4" },
                        { label: "Hiring since", value: "1978" }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <p className="text-5xl font-serif font-bold text-[#D28D69]">{stat.value}</p>
                            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. GROWTH & LEARNING */}
            <section className="py-32 bg-stone-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">EVOLVE WITH US</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Career Growth.</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                We invest in our people. From international design fairs to advanced technical training, your growth path at Evoluxe is clearly defined and supported.
                            </p>
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 flex items-center gap-6">
                                <Users className="w-10 h-10 text-[#D28D69]" />
                                <div>
                                    <p className="font-bold text-[#2d2412]">Mentorship Program</p>
                                    <p className="text-sm text-stone-400">Get paired with veteran architects to hone your craft.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/v4/about/heritage.png" alt="Team Workshop" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. PERKS GRID */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Life at Studio</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Health Insurance", "Stock Options", "Remote Friendly", "Modern Gear", "Annual Retreats", "Paid Sabbats", "Music & Games", "Snack Pantry"].map((p, i) => (
                            <div key={i} className="p-8 border border-stone-100 rounded-3xl hover:border-[#D28D69] transition-all font-bold text-stone-400 text-xs uppercase tracking-widest">
                                {p}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. APPLICATION PROCESS */}
            <section className="py-32 px-6 bg-stone-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-center mb-20">How we hire.</h2>
                    <div className="space-y-12">
                        {[
                            { title: "Review", desc: "We look for a strong portfolio and a passion for craftsmanship." },
                            { title: "The Chat", desc: "A brief conversation about your design philosophy." },
                            { title: "Deep Dive", desc: "A technical session or a creative design challenge." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-8">
                                <div className="text-4xl font-serif font-bold text-[#D28D69]">0{i + 1}</div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-[#2d2412]">{item.title}</h4>
                                    <p className="text-stone-500 font-light">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Ready to evolve?</h2>
                    <p className="text-stone-500 text-lg font-light">Send your portfolio and resume to our talent team at careers@evolxstudio.com</p>
                    <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl flex items-center gap-4 mx-auto">
                        View Openings <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CareersContent;
