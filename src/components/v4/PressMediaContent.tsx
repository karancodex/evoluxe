"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, Tv, Mic, Award, Share2, Calendar, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

const news = [
    {
        category: "Featured",
        title: "EVOLX Studio Raises $50M to Expand its AI-Driven Interior Design Engine",
        source: "Economic Times",
        date: "Feb 12, 2024",
        img: "/v4/luxe_banner_bg.png"
    },
    {
        category: "Awards",
        title: "Winner: Interior Design Brand of the Year (Modular Innovation)",
        source: "Design Digest",
        date: "Jan 28, 2024",
        img: "/v4/hero-bg.png"
    },
    {
        category: "Tech",
        title: "How EVOLX is reducing modular delivery time from 60 to 45 days",
        source: "TechCrunch India",
        date: "Jan 15, 2024",
        img: "/v4/interior-living-3d.jpg"
    }
];

const mediaKit = [
    { title: "Brand Identity Guide", type: "PDF (12MB)" },
    { title: "Executive Portraits", type: "ZIP (45MB)" },
    { title: "B-Roll Footage", type: "MP4 (2.4GB)" }
];

const PressMediaContent = () => {
    return (
        <div className="bg-white">
            {/* Dark Hero */}
            <section className="py-32 bg-[#2d2412] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#eb595f]/10 skew-x-12 translate-x-20" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-6 py-2 bg-[#eb595f] rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 inline-block"
                    >
                        Press Room
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-9xl font-serif font-bold mb-10 leading-tight"
                    >
                        Headlines <br /> of <span className="italic text-[#eb595f]">Innovation</span>
                    </motion.h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
                        Stay updated with our latest milestones, technological breakthroughs,
                        and brand announcements.
                    </p>
                </div>
            </section>

            {/* Featured PR Grid */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {news.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden mb-8 shadow-xl transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(45,36,18,0.15)] group-hover:-translate-y-4">
                                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[9px] font-black uppercase tracking-widest">
                                    {item.category}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                                    <span>{item.source}</span>
                                    <span className="w-1 h-1 bg-stone-200 rounded-full" />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors line-clamp-2 leading-tight">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[#eb595f] text-xs font-black uppercase tracking-[0.2em] transform translate-x-0 group-hover:translate-x-2 transition-transform">
                                    Read Article <ChevronRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Media Resources */}
            <section className="py-32 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Press Assets</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                Our comprehensive media kit includes everything you need for coverage:
                                brand guidelines, high-res photography, and executive biographies.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {mediaKit.map((asset, i) => (
                                <div key={i} className="flex items-center justify-between p-8 bg-white rounded-3xl border border-stone-100 hover:border-[#eb595f]/30 transition-all cursor-pointer group">
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#2d2412] group-hover:bg-[#eb595f] group-hover:text-white transition-colors">
                                            <Newspaper className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#2d2412]">{asset.title}</h4>
                                            <p className="text-xs text-stone-400 uppercase tracking-widest font-medium">{asset.type}</p>
                                        </div>
                                    </div>
                                    <ExternalLink className="w-5 h-5 text-stone-200 group-hover:text-[#eb595f] transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-4xl group">
                        <Image src="/v4/design-session-1.png" alt="Press Kit Visual" fill className="object-cover group-hover:scale-105 transition-transform duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#eb595f]/20 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Inquiry Contact */}
            <section className="py-32 max-w-5xl mx-auto px-6 text-center">
                <div className="space-y-8">
                    <div className="w-20 h-20 bg-[#fcebeb] rounded-3xl flex items-center justify-center mx-auto text-[#eb595f] mb-12">
                        <Mic className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Writer or Journalist?</h2>
                    <p className="text-stone-500 text-xl font-light max-w-2xl mx-auto">
                        For expert commentary, interview requests, or platform demonstrations,
                        reach out to our PR team.
                    </p>
                    <div className="pt-8">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300 mb-4">Direct PR Line</p>
                        <p className="text-4xl font-serif font-bold text-[#eb595f]">press@evolx.studio</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PressMediaContent;
