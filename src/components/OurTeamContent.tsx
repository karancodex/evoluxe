"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Twitter, ChevronRight } from "lucide-react";
import Image from "next/image";

const leaders = [
    {
        name: "Vikram Malhotra",
        role: "Founder & CEO",
        img: "/v4/customer-1.png",
        bio: "Visionary designer with 20+ years of experience in luxury architecture across Europe and Asia. Vikram founded EVOLX Studio to revolutionize the Indian modular market.",
        social: { li: "#", tw: "#" }
    },
    {
        name: "Ananya Sharma",
        role: "Head of Design",
        img: "/v4/customer-2.png",
        bio: "An award-winning interior architect, Ananya leads a team of 300 designers, ensuring every home reflects our signature 'Bespoke Modern' aesthetic.",
        social: { li: "#", tw: "#" }
    },
    {
        name: "Rahul Khanna",
        role: "Chief Technology Officer",
        img: "/v4/customer-3.png",
        bio: "Ex-Silicon Valley engineer, Rahul is the brain behind our 3D visualization engine and factory-direct supply chain automation.",
        social: { li: "#", tw: "#" }
    }
];

const departments = [
    { name: "Interior Architects", count: "120+" },
    { name: "3D Visualizers", count: "80+" },
    { name: "Project Managers", count: "150+" },
    { name: "Quality Auditors", count: "40+" }
];

const OurTeamContent = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="py-32 bg-[#2d2412] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/v4/luxe_banner_bg.png')] opacity-10 bg-cover mix-blend-overlay" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-xs mb-8 block"
                        >
                            The Minds Behind
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-none"
                        >
                            The Artists of <br /> <span className="italic text-[#eb595f]/80">Evolution</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-white/60 text-xl font-light leading-relaxed mb-12"
                        >
                            We are a collective of dreamers, builders, and perfectionists.
                            From the first sketch to the final polish, our team is dedicated
                            to crafting your perfect sanctuary.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                    <div className="space-y-4">
                        <span className="text-[#eb595f] text-xs font-black tracking-[0.4em] uppercase">Core Leadership</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Led by Passion</h2>
                    </div>
                    <p className="text-stone-500 max-w-md font-light text-lg">
                        Meet the visionaries guiding EVOLX Studio towards a future of sustainable,
                        intelligent, and beautiful living.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {leaders.map((leader, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-transform duration-700 group-hover:-translate-y-4">
                                <Image
                                    src={leader.img}
                                    alt={leader.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-10 left-10 flex gap-4">
                                    <a href={leader.social.li} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#eb595f] transition-all">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <a href={leader.social.tw} className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#eb595f] transition-all">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                            <div className="px-4 text-center sm:text-left">
                                <h3 className="text-3xl font-serif font-bold text-[#2d2412] mb-2">{leader.name}</h3>
                                <p className="text-[#eb595f] font-bold text-xs uppercase tracking-widest mb-6">{leader.role}</p>
                                <p className="text-stone-500 font-light leading-relaxed">{leader.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Department Grid */}
            <section className="py-24 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {departments.map((dept, i) => (
                            <div key={i} className="text-center md:text-left">
                                <h3 className="text-5xl font-serif font-bold text-[#eb595f] mb-2">{dept.count}</h3>
                                <p className="text-[#2d2412] font-black text-[10px] uppercase tracking-widest">{dept.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section className="py-32 max-w-5xl mx-auto px-6 text-center">
                <div className="bg-[#eb595f] rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 relative z-10 leading-tight">Believe in our vision? <br /> <span className="italic">Join the Evolution.</span></h2>
                    <p className="text-white/80 text-xl font-light mb-12 max-w-2xl mx-auto relative z-10">
                        We're always looking for talented designers, engineers, and dreamers
                        to help us shape the future of home interiors.
                    </p>
                    <button className="px-12 py-5 bg-white text-[#eb595f] font-bold rounded-full relative z-10 hover:bg-[#2d2412] hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-widest text-xs">
                        View Open Careers
                    </button>
                </div>
            </section>
        </div>
    );
};

export default OurTeamContent;
