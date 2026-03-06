"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, BookOpen, Film, Lightbulb, TrendingUp, Filter, Sparkles } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Trends", "Guides", "Interiors", "Lighting", "Sustainability"];

const posts = [
    {
        id: 1,
        category: "Trends",
        title: "The Rise of Quiet Luxury in Home Interiors: Less is Now More",
        excerpt: "Discover why the 'Old Money' aesthetic is dominating modular kitchen designs this season...",
        date: "Feb 20, 2024",
        author: "Ananya Sharma",
        img: "/v4/luxury_living_1.png"
    },
    {
        id: 2,
        category: "Guides",
        title: "Choosing the Right Plywood: A Definitive Guide for Homeowners",
        excerpt: "Quality starts from what you can't see. Learn the difference between BWP, BWR, and MR grades...",
        date: "Feb 15, 2024",
        author: "Vikram Malhotra",
        img: "/v4/design-session-2.png"
    },
    {
        id: 3,
        category: "Sustainability",
        title: "Zero-VOC Paints: Breathing Fresh Air into Your New Home",
        excerpt: "Why choosing the right finish matters more than just the color. Explore eco-friendly options...",
        date: "Feb 10, 2024",
        author: "Rahul Khanna",
        img: "/v4/interior-living-3d.jpg"
    }
];

const BlogContent = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <div className="bg-white">
            {/* Magazine Style Hero */}
            <section className="py-32 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-10 order-2 lg:order-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[#eb595f] font-black tracking-[0.4em] uppercase text-xs"
                            >
                                The EVOLX Journal
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412] leading-none"
                            >
                                Thought <br /> <span className="italic text-stone-400">Leadership</span>
                            </motion.h1>
                            <p className="text-stone-500 text-xl font-light leading-relaxed max-w-lg">
                                Expert insights on architecture, interior trends, and the lifestyle of the modern dweller.
                            </p>

                            <div className="relative group max-w-md">
                                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-300 w-5 h-5 group-focus-within:text-[#eb595f] transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full pl-16 pr-8 py-5 bg-white border border-stone-100 rounded-full shadow-lg outline-none focus:border-[#eb595f] transition-all font-medium"
                                />
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative order-1 lg:order-2">
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-4xl transform rotate-3 hover:rotate-0 transition-transform duration-1000">
                                <Image src="/v4/interior-living-3d.jpg" alt="Featured Post" fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-12 left-12 right-12 text-white">
                                    <span className="px-4 py-2 bg-[#eb595f] rounded-full text-[9px] font-black uppercase tracking-widest mb-6 inline-block">Editor's Choice</span>
                                    <h2 className="text-3xl font-serif font-bold mb-4">Designing for the Future: AI in Home Decor</h2>
                                    <div className="flex items-center gap-4 text-white/60 text-xs font-bold uppercase tracking-widest">
                                        <span>7 Min Read</span>
                                        <span className="w-1 h-1 bg-white/40 rounded-full" />
                                        <span>Feb 24, 2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter Bar */}
            <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-stone-100 py-6">
                <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center justify-center gap-10 whitespace-nowrap min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all relative py-2 ${activeFilter === cat ? "text-[#eb595f]" : "text-stone-400 hover:text-[#2d2412]"
                                    }`}
                            >
                                {cat}
                                {activeFilter === cat && (
                                    <motion.div layoutId="blogFilter" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#eb595f]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    <AnimatePresence mode="popLayout">
                        {posts.filter(p => activeFilter === "All" || p.category === activeFilter).map((post, i) => (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden mb-10 shadow-xl transition-all duration-700 group-hover:shadow-[0_45px_90px_-20px_rgba(45,36,18,0.15)] group-hover:-translate-y-4">
                                    <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-[#eb595f] text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                                        <span className="text-stone-300 text-xs">•</span>
                                        <span className="text-stone-400 text-xs font-bold">{post.date}</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-stone-500 font-light line-clamp-2 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-2 text-[#2d2412] text-xs font-black uppercase tracking-widest pt-4 group-hover:gap-4 transition-all">
                                        Read More <ChevronRight className="w-4 h-4 text-[#eb595f]" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-32 bg-[#2d2412] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#eb595f]/5 rounded-full blur-[120px]" />
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <div className="w-20 h-20 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto border border-white/10 text-[#eb595f]">
                        <BookOpen className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight">Get Design Intelligence <br /> <span className="italic text-[#eb595f]">Direct to Inbox.</span></h2>
                    <p className="text-white/60 text-xl font-light">Join 50,000+ interior enthusiasts receiving weekly dose of luxury.</p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-6">
                        <input type="email" placeholder="Your premium email..." className="flex-1 px-10 py-5 bg-white/5 border border-white/10 rounded-full focus:bg-white focus:text-[#2d2412] outline-none transition-all placeholder:text-white/30" />
                        <button className="px-12 py-5 bg-[#eb595f] text-white font-bold rounded-full hover:bg-white hover:text-[#eb595f] transition-all uppercase tracking-widest text-xs">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default BlogContent;
