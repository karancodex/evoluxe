"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Filter, Phone, Mail, User, Sparkles, Send, Target } from 'lucide-react';
import { useConsultation } from './providers/ConsultationProvider';

interface DesignCardProps {
    title: string;
    rating: number;
    reviews: number;
    image: string;
    onConsult: () => void;
}

const DesignCard = ({ title, rating, reviews, image, onConsult }: DesignCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 group"
    >
        <div className="relative h-64 w-full overflow-hidden">
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute top-4 left-4">
                <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-[10px] font-black">{rating}</span>
                </div>
            </div>
        </div>
        <div className="p-8 space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#2d2412] line-clamp-2 leading-tight">
                {title}
            </h3>

            <div className="flex gap-3">
                <button
                    onClick={onConsult}
                    className="flex-1 px-4 py-3.5 bg-[#eb595f] text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#2d2412] transition-colors shadow-lg shadow-[#eb595f]/20"
                >
                    Get Free Quote
                </button>
                <button
                    onClick={onConsult}
                    className="flex-1 px-4 py-3.5 border border-stone-100 text-[#2d2412] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-stone-50 transition-colors"
                >
                    View Details
                </button>
            </div>
        </div>
    </motion.div>
);

interface DesignIdeasContentProps {
    title: string;
    description?: string;
    slug: string;
    galleryImages?: string[];
}

const DesignIdeasContent = ({ title, description, slug, galleryImages }: DesignIdeasContentProps) => {
    const { openConsultation } = useConsultation();
    const [activeFilter, setActiveFilter] = useState('All');

    // Mock data for designs
    const mockDesigns = useMemo(() => {
        const baseTags = ['Modern', 'Contemporary', 'Luxury', 'Minimalist', 'Space-Saving'];
        const items = [];

        const imagesToUse = galleryImages && galleryImages.length > 0 ? galleryImages : ['/v4/interior-living-3d.jpg'];

        for (let i = 0; i < 9; i++) {
            const imgIndex = i % imagesToUse.length;
            const tag = baseTags[i % baseTags.length];
            items.push({
                title: `${tag} ${title} with ${i % 2 === 0 ? 'Elegant' : 'Modern'} Finishes`,
                rating: (4.5 + Math.random() * 0.5).toFixed(1),
                reviews: Math.floor(50 + Math.random() * 200),
                image: imagesToUse[imgIndex],
                tag: tag
            });
        }
        return items;
    }, [title, galleryImages]);

    const filteredDesigns = activeFilter === 'All'
        ? mockDesigns
        : mockDesigns.filter(d => d.tag === activeFilter);

    const filters = ['All', 'Modern', 'Contemporary', 'Luxury', 'Minimalist', 'Space-Saving', 'L-Shaped', 'U-Shaped'];

    return (
        <div className="bg-[#fcfcfc] min-h-screen pb-20 selection:bg-[#eb595f]/10">
            {/* Breadcrumbs */}
            <div className="max-w-[1400px] mx-auto px-6 py-8">
                <nav className="flex items-center text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    <span className="hover:text-[#eb595f] cursor-pointer transition-colors">Home</span>
                    <ChevronRight className="w-3 h-3 mx-2 opacity-30" />
                    <span className="hover:text-[#eb595f] cursor-pointer transition-colors">Interior Design</span>
                    <ChevronRight className="w-3 h-3 mx-2 opacity-30" />
                    <span className="text-[#eb595f]">{title}</span>
                </nav>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left & Center: Content */}
                    <div className="flex-1 min-w-0 space-y-12">
                        {/* Header */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 rounded-full"
                            >
                                <Sparkles className="w-3 h-3 text-[#eb595f]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">Design Inspiration</span>
                            </motion.div>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2d2412] leading-[0.95]">
                                {title} <br /> <span className="italic text-[#eb595f]">Concepts.</span>
                            </h1>
                            <p className="text-stone-500 text-lg font-light max-w-2xl leading-relaxed">
                                {description || `Discover stunning ${title.toLowerCase()} ideas for your home. Browse our curated collection of premium designs tailored to your unique style and space requirements.`}
                            </p>
                        </div>

                        {/* Filters */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6">
                            <div className="p-2.5 bg-white border border-stone-100 rounded-xl shadow-sm mr-2 shrink-0">
                                <Filter className="w-4 h-4 text-[#eb595f]" />
                            </div>
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-8 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeFilter === filter ? 'bg-[#eb595f] text-white shadow-lg shadow-[#eb595f]/20' : 'bg-white border border-stone-100 text-stone-400 hover:text-[#eb595f] hover:border-[#eb595f]'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                            {filteredDesigns.map((design, idx) => (
                                <DesignCard
                                    key={idx}
                                    {...design}
                                    rating={parseFloat(design.rating as string)}
                                    onConsult={openConsultation}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Sidebar Form (Replaced with Premium CTA) */}
                    <div className="w-full lg:w-[400px] shrink-0">
                        <div className="sticky top-32 bg-[#2d2412] rounded-[3rem] p-10 text-white relative overflow-hidden group border border-white/5">
                            <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Target className="w-48 h-48" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-serif font-bold leading-tight">Design your <br /> dream <span className="text-[#eb595f] italic">{title.toLowerCase()}</span></h2>
                                    <p className="text-white/40 font-light text-sm leading-relaxed">Talk to our experts and get a customized design proposal within 24 hours.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 rounded-xl bg-[#eb595f]/20 flex items-center justify-center text-[#eb595f]">
                                            <Sparkles className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest">Free Consultation</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 rounded-xl bg-[#eb595f]/20 flex items-center justify-center text-[#eb595f]">
                                            <Send className="w-5 h-5" />
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-widest">Instant Booking</span>
                                    </div>
                                </div>

                                <button
                                    onClick={openConsultation}
                                    className="w-full py-5 bg-[#eb595f] text-white font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all hover:bg-white hover:text-[#2d2412] shadow-2xl flex items-center justify-center gap-3"
                                >
                                    Initialize Design Journey
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Form Section (CTA Banner) */}
            <div className="mt-20 md:mt-32 max-w-[1500px] mx-auto px-6 h-[500px] md:h-[600px] overflow-hidden relative group rounded-[4rem]">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt="Start journey"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
                />
                <div className="absolute inset-0 bg-[#2d2412]/80 backdrop-blur-md flex items-center p-8 md:p-24 overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 opacity-10">
                        <Sparkles className="w-96 h-96 text-[#eb595f]" />
                    </div>
                    <div className="max-w-2xl text-white space-y-10 relative z-10">
                        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold leading-[0.95] tracking-tight">
                            Your dream <span className="italic text-[#eb595f]">{title.toLowerCase()}</span> is ready for <span className="italic">execution.</span>
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                            Join 10,000+ elite families who transformed their spaces with Evoluxe. Get your free personalized design quote today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 pt-4">
                            <button
                                onClick={openConsultation}
                                className="px-10 py-5 bg-[#eb595f] text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white hover:text-[#2d2412] transition-all shadow-2xl flex items-center justify-center gap-3"
                            >
                                <Send className="w-4 h-4" /> Start My Project
                            </button>
                            <button
                                onClick={openConsultation}
                                className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-3"
                            >
                                Get Price Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignIdeasContent;
