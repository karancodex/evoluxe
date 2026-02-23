"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Clock, User, MessageCircle, ChevronLeft } from 'lucide-react';

interface ArticleCardProps {
    title: string;
    category: string;
    image: string;
    date?: string;
    variant?: 'small' | 'large';
}

const ArticleCard = ({ title, category, image, date = "Oct 24, 2024", variant = 'small' }: ArticleCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-500"
    >
        <div className={`relative ${variant === 'large' ? 'aspect-[16/9]' : 'aspect-[16/10]'} overflow-hidden`}>
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-[#c5a059] text-white text-[10px] font-bold uppercase tracking-wider rounded-md shadow-lg">
                    {category}
                </span>
            </div>
        </div>
        <div className="p-5 space-y-3">
            <h3 className={`font-serif font-bold text-[#4d3b1a] group-hover:text-[#c5a059] transition-colors leading-snug ${variant === 'large' ? 'text-2xl' : 'text-lg'}`}>
                {title}
            </h3>
            <div className="flex items-center justify-between text-stone-400 text-[11px] pt-2 border-t border-stone-50">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {date}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> By Admin</span>
                </div>
                <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 12</span>
            </div>
        </div>
    </motion.div>
);

const MagazineContent = ({ title, description, slug }: { title: string, description?: string, slug: string }) => {
    const categories = [
        { name: 'Kitchen', img: '/v4/interior-living-3d.jpg' },
        { name: 'Living Room', img: '/v4/interior-living-3d.jpg' },
        { name: 'Bedroom', img: '/v4/interior-living-3d.jpg' },
        { name: 'Bathroom', img: '/v4/interior-living-3d.jpg' },
        { name: 'Decor', img: '/v4/interior-living-3d.jpg' },
        { name: 'Lighting', img: '/v4/interior-living-3d.jpg' },
        { name: 'Vastu', img: '/v4/interior-living-3d.jpg' },
    ];

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20">
            {/* Top Breadcrumb & Title */}
            <div className="max-w-[1400px] mx-auto px-6 pt-10 pb-6">
                <nav className="flex items-center text-[12px] text-stone-400 font-medium mb-8">
                    <span>Home</span>
                    <ChevronRight className="w-3 h-3 mx-2" />
                    <span>Magazine</span>
                    <ChevronRight className="w-3 h-3 mx-2" />
                    <span className="text-[#c5a059] font-bold uppercase tracking-wider">{title}</span>
                </nav>

                <div className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#4d3b1a] mb-4">
                        {title}
                    </h1>
                    <div className="w-24 h-1.5 bg-[#c5a059] rounded-full mb-6"></div>
                    <p className="text-stone-500 text-lg max-w-3xl leading-relaxed italic">
                        {description || `Discover the latest trends and stories in ${title.toLowerCase()}. Expertly curated for your dream home.`}
                    </p>
                </div>

                {/* Categories Slider */}
                <div className="mb-16">
                    <h2 className="text-sm font-bold text-stone-400 uppercase tracking-[0.2em] mb-8">Explore In {title}</h2>
                    <div className="flex items-center gap-6 overflow-x-auto pb-6 scrollbar-hide">
                        {categories.map((cat) => (
                            <div key={cat.name} className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer">
                                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:border-[#c5a059] transition-all duration-300 relative">
                                    <Image src={cat.img} fill alt={cat.name} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <span className="text-[13px] font-bold text-[#4d3b1a] group-hover:text-[#c5a059] transition-colors">{cat.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content: Recent Stories & Form */}
            <section className="max-w-[1400px] mx-auto px-6 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Recent Stories */}
                    <div className="flex-1 space-y-12">
                        <div className="flex items-end justify-between border-b border-stone-100 pb-6">
                            <h2 className="text-3xl font-serif font-bold text-[#4d3b1a]">Recent Stories</h2>
                            <div className="flex gap-2">
                                <button className="p-2 border border-stone-200 rounded-full hover:bg-stone-50"><ChevronLeft className="w-5 h-5" /></button>
                                <button className="p-2 border border-stone-200 rounded-full hover:bg-stone-50"><ChevronRight className="w-5 h-5" /></button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {[1, 2, 3, 4].map(i => (
                                <ArticleCard
                                    key={i}
                                    title={`${title} Trends That Are Transforming Indian Homes in 2024`}
                                    category="Design Trends"
                                    image="/v4/interior-living-3d.jpg"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Sidebar Form */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <div className="bg-[#4d3b1a] rounded-[2.5rem] p-10 text-white sticky top-28 shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c5a059] opacity-20 blur-3xl rounded-full"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-bold mb-4">Designs for every budget</h3>
                                <p className="text-stone-300 text-sm mb-10 font-light max-w-[280px]">Fill details and get your personalized design quote from our experts.</p>

                                <form className="space-y-5">
                                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light" />
                                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light" />
                                    <div className="flex gap-2">
                                        <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-stone-400 text-sm">+91</div>
                                        <input type="tel" placeholder="Mobile Number" className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light" />
                                    </div>
                                    <input type="text" placeholder="Pincode" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light" />

                                    <button className="w-full py-4 bg-[#c5a059] hover:bg-white hover:text-[#c5a059] text-white font-bold rounded-2xl transition-all duration-500 shadow-xl mt-4 transform hover:-translate-y-1">
                                        Book Free Consultation
                                    </button>

                                    <p className="text-[10px] text-stone-500 text-center leading-relaxed mt-6">
                                        By clicking this button, you agree to our Terms and Conditions and Privacy Policy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Featured Example: Kitchen */}
            <section className="py-24 bg-[#4d3b1a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-full">
                    <Image src="/v4/interior-living-3d.jpg" fill alt="Kitchen" className="object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4d3b1a] via-[#4d3b1a]/40 to-transparent"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 text-white space-y-8">
                        <div className="w-16 h-16 bg-[#c5a059] rounded-2xl flex items-center justify-center text-3xl shadow-2xl rotate-12">🍳</div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">Kitchen</h2>
                        <p className="text-stone-300 text-lg font-light leading-relaxed max-w-md">
                            From breakfast nooks to gourmet workstations, explore kitchens that are as efficient as they are beautiful.
                        </p>
                        <button className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-sm hover:text-[#e5d5b0] transition-colors">
                            Explore All Kitchen Stories <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                        {[1, 2].map(i => (
                            <div key={i} className="min-w-[320px] bg-white rounded-3xl overflow-hidden shadow-2xl">
                                <div className="relative aspect-video">
                                    <Image src="/v4/interior-living-3d.jpg" fill alt="Kitchen" className="object-cover" />
                                </div>
                                <div className="p-6">
                                    <h4 className="font-serif font-bold text-[#4d3b1a] mb-2 line-clamp-2">5 Modern Kitchen Colors That Designers Swear By</h4>
                                    <span className="text-[#c5a059] text-xs font-bold uppercase tracking-wider">Expert Advice</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Before & After Comparison */}
            <section className="py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="flex-1 space-y-12">
                            <h2 className="text-4xl font-serif font-bold text-[#4d3b1a]">Real Transformations</h2>
                            <div className="relative h-[600px] rounded-[3rem] overflow-hidden group shadow-2xl border-8 border-white">
                                <Image src="/v4/interior-living-3d.jpg" fill alt="Before After" className="object-cover" />
                                <div className="absolute inset-0 flex">
                                    <div className="w-1/2 bg-black/20 flex items-center justify-center relative">
                                        <span className="text-white font-black uppercase tracking-[0.2em] text-4xl opacity-30 transform -rotate-90">Before</span>
                                    </div>
                                    <div className="w-2 bg-white cursor-ew-resize relative group">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-125">
                                            <span className="text-[#c5a059] font-bold">↔</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center relative bg-[#c5a059]/10">
                                        <span className="text-white font-black uppercase tracking-[0.2em] text-4xl opacity-30 transform 90">After</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[450px] space-y-10 flex flex-col justify-center bg-[#faf9f6]/40 p-12 rounded-[3rem]">
                            <h3 className="text-4xl font-serif font-bold text-[#4d3b1a]">Ready for your own transformation?</h3>
                            <p className="text-stone-600 text-lg font-light leading-relaxed">
                                Join 50,000+ happy homeowners who turned their design dreams into reality with EVOLX Studio.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                                    <div className="w-12 h-12 bg-[#c5a059]/10 rounded-xl flex items-center justify-center text-[#c5a059]">✦</div>
                                    <div>
                                        <p className="font-bold text-[#4d3b1a]">10-Year Warranty</p>
                                        <p className="text-stone-400 text-xs">Unmatched quality assurance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                                    <div className="w-12 h-12 bg-[#e5d5b0]/10 rounded-xl flex items-center justify-center text-[#e5d5b0]">✦</div>
                                    <div>
                                        <p className="font-bold text-[#4d3b1a]">45-Day Delivery</p>
                                        <p className="text-stone-400 text-xs">Quickest turnaround in the industry</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-5 bg-[#4d3b1a] text-white font-bold rounded-2xl shadow-xl hover:bg-[#c5a059] transition-all duration-300">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MagazineContent;
