"use client";

import React from "react";
import { motion } from "framer-motion";
import { Newspaper, ExternalLink, Calendar, Search, ArrowRight, Download, Share2 } from "lucide-react";
import Image from "next/image";

const PressContent = () => {
    const pressMentions = [
        { title: "Architectural Digest", desc: "The rise of the modern Indian villa: Evoluxe Studio's modular signature.", date: "Jan 12, 2024", logo: "/v4/brands/p-1.png" },
        { title: "The Hindu", desc: "How EVOLX is pioneering furniture tech in Pune.", date: "Dec 05, 2023", logo: "/v4/brands/p-2.png" },
        { title: "Elle Decor", desc: "Sustainable luxury: A deep dive into the 2024 Collection.", date: "Oct 22, 2023", logo: "/v4/brands/p-3.png" }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">PRESS ENQUIRIES</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]">
                        In the <br /> <span className="text-stone-400">Spotlight.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-stone-500 text-lg font-light max-w-2xl mx-auto">
                        Latest news, media features, and updates from the EVOLX Design Studio.
                    </motion.p>
                </div>
            </section>

            {/* 2. MEDIA COVERAGE GRID */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pressMentions.map((mention, i) => (
                        <div key={i} className="p-12 bg-white border border-stone-100 rounded-[3rem] space-y-8 hover:shadow-2xl transition-all duration-500 group">
                            <div className="h-12 w-32 relative">
                                <span className="text-xl font-serif font-bold text-stone-200 group-hover:text-[#D28D69] transition-colors">{mention.title}</span>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-serif font-bold text-[#2d2412] tracking-tight">{mention.desc}</h3>
                                <div className="flex items-center gap-4 text-stone-300 text-xs font-bold tracking-widest uppercase">
                                    <Calendar className="w-4 h-4" /> {mention.date}
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-[#D28D69] font-black tracking-widest text-[10px] uppercase hover:gap-4 transition-all">
                                Read Article <ExternalLink className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. PRESS KIT SECTION */}
            <section className="py-32 px-6 bg-[#2d2412] text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">MEDIA RESOURCES</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">Brand & Press Kit.</h2>
                        </div>
                        <p className="text-stone-400 text-lg font-light leading-relaxed">
                            Looking for high-resolution images, brand guidelines, or our company overview? Download our comprehensive press kit for everything you need.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Brand Identity", size: "12 MB" },
                                { title: "Studio Photos", size: "45 MB" }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl flex justify-between items-center group hover:bg-white hover:text-[#2d2412] transition-all cursor-pointer">
                                    <div>
                                        <p className="font-bold">{item.title}</p>
                                        <p className="text-stone-500 text-xs font-bold uppercase tracking-widest group-hover:text-[#2d2412]/50">{item.size}</p>
                                    </div>
                                    <Download className="w-5 h-5 text-[#D28D69]" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/5">
                        <Image src="/v4/luxury_living_2.png" alt="Press Kit" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 4. RECENT RELEASES SEARCH SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Press Releases</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Find latest releases..."
                            className="w-full px-10 py-8 bg-stone-50 border border-stone-100 rounded-3xl outline-none focus:bg-white focus:border-[#D28D69] shadow-sm transition-all"
                        />
                        <Search className="absolute right-8 top-1/2 -translate-y-1/2 w-6 h-6 text-stone-300" />
                    </div>
                </div>
            </section>

            {/* 5. RELEASE LISTING */}
            <section className="py-24 px-6 bg-stone-50">
                <div className="max-w-4xl mx-auto space-y-8">
                    {[
                        { title: "EVOLX Studio wins Design of the Year 2023.", date: "Nov 15, 2023" },
                        { title: "Expansion Announcement: New Mumbai Flagship.", date: "Sept 30, 2023" },
                        { title: "Collaborating with Hettich for Silent Systems.", date: "July 12, 2023" }
                    ].map((item, i) => (
                        <div key={i} className="p-10 bg-white rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:shadow-2xl transition-all border border-stone-100">
                            <div className="space-y-2">
                                <h4 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#D28D69] transition-colors">{item.title}</h4>
                                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest">{item.date}</p>
                            </div>
                            <ArrowRight className="w-6 h-6 text-stone-200 group-hover:text-[#D28D69] group-hover:translate-x-2 transition-all" />
                        </div>
                    ))}
                    <div className="pt-12 text-center">
                        <button className="px-12 py-6 border-2 border-[#2d2412] text-[#2d2412] font-bold tracking-widest uppercase rounded-2xl hover:bg-[#2d2412] hover:text-white transition-all">
                            Load Archives
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. AWARDS & RECOGNITION */}
            <section className="py-32 px-6 text-center space-y-16">
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Awards & Recognition</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {[
                        { year: "2023", title: "Luxury Studio Winner" },
                        { year: "2022", title: "Modular Innovation" },
                        { year: "2020", title: "Fastest Execution" },
                        { year: "2018", title: "Best Upholstery" }
                    ].map((award, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-[#D28D69] text-5xl font-serif font-bold opacity-20">{award.year}</div>
                            <h4 className="text-xl font-bold text-[#2d2412]">{award.title}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. EVENT HIGHLIGHTS */}
            <section className="py-32 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8 lg:order-2">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">The Unveiling Event.</h2>
                        <p className="text-stone-500 text-lg font-light leading-relaxed">
                            Flashback to the launch of our Modular Journey series where architects and designers gathered to witness the future of precision furniture.
                        </p>
                        <button className="flex items-center gap-4 text-[#D28D69] font-black uppercase text-xs tracking-widest">
                            Watch Event Film <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl lg:order-1">
                        <Image src="/v4/about/upholstery.png" alt="Event" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* 8. MEDIA CONTACT CARD */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-stone-50 rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
                    <Newspaper className="absolute -left-20 -bottom-20 w-80 h-80 text-[#D28D69]/5" />
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] relative z-10">Media contact.</h2>
                    <p className="text-stone-500 text-lg font-light relative z-10">For official statements, interviews, or collaborations, contact our PR team.</p>
                    <div className="relative z-10 p-8 bg-white rounded-3xl inline-block shadow-sm">
                        <p className="text-[#2d2412] font-bold text-xl">pr@evolxstudio.com</p>
                        <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mt-2">+91 7744 80 6644</p>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Follow our <br /> <span className="text-stone-400">Evolution.</span></h2>
                    <p className="text-stone-500 text-lg font-light">Stay updated with our latest news across social platforms.</p>
                    <div className="flex justify-center gap-4 pt-4">
                        {["IG", "TW", "FB", "LI"].map((s, i) => (
                            <div key={i} className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-xs font-bold text-stone-400 hover:bg-[#D28D69] hover:text-white transition-all cursor-pointer">
                                {s}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PressContent;
