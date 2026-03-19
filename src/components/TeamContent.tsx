"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Award, Users, Lightbulb, Zap } from "lucide-react";
import Image from "next/image";
import { useConsultation } from "./providers/ConsultationProvider";

const TeamContent = () => {
    const { openConsultation } = useConsultation();
    const leaders = [
        {
            name: "Vikram Malhotra",
            role: "Founder & Creative Director",
            bio: "Carrying forward the family legacy since 1978, Vikram combines traditional upholstery techniques with modern architectural concepts.",
            image: "/v4/about/heritage.png"
        },
        {
            name: "Ananya Sharma",
            role: "Head of Design",
            bio: "With over 15 years in luxury interiors, Ananya specializes in spatial planning and sustainable material innovation.",
            image: "/v4/estimates/full-home.png"
        },
        {
            name: "Rahul Mehra",
            role: "Chief Engineer",
            bio: "Rahul ensures that every design is structurally sound and executed with surgical precision.",
            image: "/v4/about/upholstery.png"
        }
    ];

    const stats = [
        { label: "Design Experts", value: "45+" },
        { label: "Master Craftsmen", value: "120+" },
        { label: "Projects Completed", value: "2,500+" },
        { label: "Years of Legacy", value: "45+" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 flex items-center justify-center text-center">
                <div className="absolute inset-0 bg-[#fdfaf6] -z-10" />
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">MEET THE ARCHITECTS</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]"
                    >
                        The Hands & Minds Behind <br />
                        <span className="text-stone-400">Evoluxe Studio.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 text-lg md:text-xl font-light max-w-2xl mx-auto"
                    >
                        A collective of specialized designers, architects, and master-craftsmen working in harmony to redefine luxury living.
                    </motion.p>
                </div>
            </section>

            {/* 2. STATS BAR */}
            <section className="bg-[#eb595f] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center space-y-2">
                                <p className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-sm">{stat.value}</p>
                                <p className="text-white/80 text-[10px] font-black tracking-widest uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. LEADERSHIP SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">LEADERSHIP</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Visionary guidance</h2>
                        </div>
                        <p className="text-stone-500 max-w-md font-light text-lg">
                            Our leadership team brings together decades of experience in craftsmanship, design, and engineering excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="space-y-6 group"
                            >
                                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412]/80 to-transparent" />
                                    <div className="absolute bottom-8 left-8 flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#eb595f] transition-colors">
                                            <Linkedin className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#eb595f] transition-colors">
                                            <Twitter className="w-4 h-4 text-white" />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-serif font-bold text-[#2d2412]">{leader.name}</h3>
                                    <p className="text-[#eb595f] font-bold text-xs uppercase tracking-widest">{leader.role}</p>
                                    <p className="text-stone-500 font-light leading-relaxed">{leader.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. DESIGN EXPERTS GRID */}
            <section className="py-32 bg-stone-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">THE COLLECTIVE</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Specialized by passion</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { title: "Modular Architects", icon: <Zap /> },
                            { title: "Interior Stylists", icon: <Users /> },
                            { title: "Lighting Experts", icon: <Lightbulb /> },
                            { title: "Material Scientists", icon: <Award /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2rem] text-center space-y-6 hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f] mx-auto">
                                    {item.icon}
                                </div>
                                <h4 className="font-serif font-bold text-[#2d2412] text-xl">{item.title}</h4>
                                <p className="text-stone-400 text-sm font-light leading-relaxed">Dedicated experts ensuring perfection in every corner.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. WORKSHOP PREVIEW */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src="/v4/about/heritage.png"
                            alt="The Workshop"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-8">
                        <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">WHERE MAGIC HAPPENS</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">The heart of craftsmanship</h2>
                        <p className="text-stone-500 text-lg font-light leading-relaxed">
                            Our master-craftsmen don't just assemble; they create. With techniques passed down through generations, every piece of furniture is a unique expression of art.
                        </p>
                        <div className="pt-4">
                            <button className="px-10 py-5 bg-[#eb595f] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#2d2412] transition-all">
                                Watch Workshop Story
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TEAM CULTURE */}
            <section className="py-32 bg-[#eb595f] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold drop-shadow-sm">A culture of excellence.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { title: "Transparency", desc: "No hidden agendas, just honest design and clear communication." },
                            { title: "Precision", desc: "We measure twice, cut once, and detail everything in between." },
                            { title: "Empathy", desc: "We design for people, understanding their lives and aspirations." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <h3 className="text-2xl font-serif text-white font-bold">{item.title}</h3>
                                <p className="text-white/80 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CAREERS CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto bg-stone-50 rounded-[3rem] p-12 md:p-24 text-center space-y-8 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#eb595f]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] relative z-10">We're always looking for <span className="text-[#eb595f]">visionaries.</span></h2>
                    <p className="text-stone-500 text-lg font-light max-w-2xl mx-auto relative z-10">
                        Think you have what it takes to define the next era of luxury home design? Explore our open positions.
                    </p>
                    <div className="relative z-10">
                        <button className="px-12 py-6 bg-[#eb595f] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#2d2412] transition-all shadow-xl">
                            Join the Studio
                        </button>
                    </div>
                </div>
            </section>

            {/* 8. TESTIMONIALS FROM TEAM */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-10">
                    <div className="flex justify-center mb-8">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Award key={s} className="w-6 h-6 text-[#eb595f]" />
                        ))}
                    </div>
                    <p className="text-2xl md:text-4xl font-serif italic text-stone-600 leading-relaxed font-light">
                        "At Evoluxe, we don't just build furniture; we build the stage for life's most precious moments. Every project is a personal journey for us."
                    </p>
                    <div className="space-y-2">
                        <p className="font-bold text-[#2d2412] uppercase tracking-[0.2em] text-xs">Aarav Singhania</p>
                        <p className="text-stone-400 text-xs uppercase tracking-widest">Senior Design Consultant</p>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Ready to meet with our experts?</h2>
                    <p className="text-stone-500">Book a session with our design team today.</p>
                    <button
                        onClick={openConsultation}
                        className="px-12 py-5 bg-[#eb595f] text-white rounded-xl font-bold tracking-widest uppercase hover:bg-[#2d2412] transition-all"
                    >
                        Schedule an Appointment
                    </button>
                </div>
            </section>
        </div>
    );
};

export default TeamContent;
