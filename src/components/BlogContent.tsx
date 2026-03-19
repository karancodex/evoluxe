"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag, ChevronRight, Search, Heart, Share2 } from "lucide-react";
import Image from "next/image";

const BlogContent = () => {
    const featuredPost = {
        title: "The Renaissance of Minimalism: 2024 Interior Trends.",
        excerpt: "Discover how the new year is bringing a softer, more human approach to minimalist design, blending warmth with clean lines.",
        category: "Design Trends",
        date: "March 15, 2024",
        author: "Ananya Sharma",
        image: "/v4/luxury_living_1.png"
    };

    const categories = ["All", "Kitchen", "Living Room", "Materials", "Technology", "Renovation"];

    const posts = [
        {
            title: "Why Italian Marble Still Rules Luxury Architecture.",
            category: "Materials",
            date: "March 12, 2024",
            image: "/v4/luxury_living_2.png"
        },
        {
            title: "Smart Kitchens: 5 Technologies You Can't Ignore.",
            category: "Technology",
            date: "March 10, 2024",
            image: "/v4/3d_kitchen_iso.png"
        },
        {
            title: "Maximizing Small Spaces with Modular Magic.",
            category: "Solutions",
            date: "March 08, 2024",
            image: "/v4/service_wardrobe.png"
        },
        {
            title: "The Art of Layered Lighting in Modern Homes.",
            category: "Lighting",
            date: "March 05, 2024",
            image: "/v4/luxury_living_3.png"
        },
        {
            title: "Sustainability: Designing for a Greener Future.",
            category: "Eco-Design",
            date: "March 01, 2024",
            image: "/v4/estimates/full-home.png"
        },
        {
            title: "Choosing the Perfect Palette for Master Bedrooms.",
            category: "Color Theory",
            date: "Feb 28, 2024",
            image: "/v4/luxury_bedroom_1.png"
        }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">THE JOURNAL</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]"
                    >
                        Insights, Trends & <br /> <span className="text-stone-400">Design Stories.</span>
                    </motion.h1>
                    <div className="relative w-full max-w-xl group">
                        <input
                            type="text"
                            placeholder="Search articles, trends, or materials..."
                            className="w-full px-8 py-6 bg-white rounded-2xl shadow-sm outline-none border border-stone-100 focus:border-[#eb595f] transition-all text-lg font-light"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#eb595f] text-white rounded-xl flex items-center justify-center hover:bg-[#2d2412] transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. CATEGORY BAR */}
            <section className="border-y border-stone-100 py-6 px-6 overflow-x-auto no-scrollbar">
                <div className="max-w-7xl mx-auto flex gap-12 justify-center whitespace-nowrap">
                    {categories.map((cat, i) => (
                        <button key={i} className="text-[10px] font-black tracking-[0.2em] uppercase text-stone-400 hover:text-[#eb595f] transition-colors">
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. FEATURED POST */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-8 relative aspect-[16/9] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                            <Image
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                            />
                            <div className="absolute inset-x-8 bottom-8">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black tracking-widest uppercase text-[#2d2412]">FEATURED</span>
                            </div>
                        </div>
                        <div className="lg:col-span-4 space-y-8">
                            <div className="space-y-4">
                                <span className="text-[#eb595f] font-bold text-xs uppercase tracking-widest">{featuredPost.category}</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412] leading-tight hover:text-[#eb595f] transition-colors cursor-pointer">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-stone-500 font-light leading-relaxed text-lg">
                                    {featuredPost.excerpt}
                                </p>
                            </div>
                            <div className="flex items-center gap-12 text-stone-400 text-sm">
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {featuredPost.date}</div>
                                <div className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</div>
                            </div>
                            <button className="group flex items-center gap-4 text-[#2d2412] font-black tracking-widest text-xs uppercase border-b-2 border-transparent hover:border-[#eb595f] transition-all pb-2">
                                Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. POST GRID */}
            <section className="py-24 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {posts.map((post, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white rounded-[2rem] overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="px-4 py-2 bg-[#2d2412]/80 backdrop-blur-md text-white rounded-lg text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                                    </div>
                                </div>
                                <div className="p-10 space-y-6">
                                    <div className="flex items-center gap-4 text-stone-400 text-[10px] font-black tracking-widest uppercase">
                                        <Calendar className="w-3 h-3" /> {post.date}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2d2412] leading-tight hover:text-[#eb595f] transition-colors cursor-pointer">
                                        {post.title}
                                    </h3>
                                    <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                                        <button className="group flex items-center gap-2 text-[#eb595f] font-bold text-[10px] uppercase tracking-widest">
                                            Read More <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <div className="flex gap-4">
                                            <Heart className="w-4 h-4 text-stone-300 hover:text-red-500 transition-colors cursor-pointer" />
                                            <Share2 className="w-4 h-4 text-stone-300 hover:text-[#2d2412] transition-colors cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-20 text-center">
                        <button className="px-12 py-6 border-2 border-[#eb595f] text-[#eb595f] rounded-2xl font-bold tracking-widest uppercase hover:bg-[#eb595f] hover:text-white transition-all">
                            Load More Articles
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. NEWSLETTER SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#eb595f] rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white drop-shadow-sm">Subscribe to <br /> the <span className="italic font-medium text-white/90">Studio Journal.</span></h2>
                            <p className="text-white/80 text-lg font-light leading-relaxed">
                                Join our exclusive circle. Get the latest design trends, material guides, and project spotlights delivered to your inbox every month.
                            </p>
                        </div>
                        <div className="lg:w-[45%] w-full space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-8 py-6 bg-white border border-white/20 rounded-2xl text-[#2d2412] placeholder-stone-400 outline-none focus:border-white shadow-sm transition-all"
                                />
                                <button className="px-10 py-6 bg-white text-[#eb595f] rounded-2xl font-bold tracking-widest uppercase hover:bg-[#2d2412] hover:text-white transition-all shadow-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-white/20 text-xs text-center sm:text-left">By subscribing, you agree to our Privacy Policy.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. INSTAGRAM FEED LINK */}
            <section className="py-24 px-6 text-center space-y-12">
                <div className="space-y-4">
                    <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">SOCIALS</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412]">Follow the evolution @evoluxe</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square relative rounded-xl overflow-hidden group">
                            <Image
                                src={`/v4/luxury_living_${(i % 3) + 1}.png`}
                                alt="Social Feed"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Search className="w-8 h-8 text-white" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. EXPERT TIPS SECTION */}
            <section className="py-32 bg-[#faf9f6] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/v4/about/upholstery.png"
                                alt="Expert Tips"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Weekly Design Hacks.</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                Our creative director shares secrets on how to maintain your luxury modular pieces and how to choose the right lighting for every mood.
                            </p>
                            <div className="space-y-4">
                                {["Lighting Guide", "Upholstery Care", "Material Selection"].map((tip, i) => (
                                    <div key={i} className="flex items-center gap-4 text-[#eb595f] font-bold text-sm tracking-widest uppercase py-4 border-b border-stone-200">
                                        <Tag className="w-4 h-4" /> {tip}
                                        <ChevronRight className="w-4 h-4 ml-auto" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. TRENDING TOPICS */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-16">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Trending Topics</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Eco-Luxury", "Smart Homes", "Marble Inlay", "Velvet Textures", "Modular Living", "Open Concept", "Interior Tech"].map((tag, i) => (
                            <span key={i} className="px-8 py-4 bg-stone-50 rounded-full text-stone-500 font-bold text-xs uppercase tracking-widest hover:bg-[#2d2412] hover:text-white transition-all cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Wanna build your own design story?</h2>
                    <p className="text-stone-500">Book a free design consultation with our experts today.</p>
                    <button className="px-12 py-6 bg-[#eb595f] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#2d2412] transition-all">
                        Start Your Evolution
                    </button>
                </div>
            </section>
        </div>
    );
};

export default BlogContent;
