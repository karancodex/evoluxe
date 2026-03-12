"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Clock, User, ChevronLeft, Sparkles, Send } from 'lucide-react';
import { useConsultation } from './providers/ConsultationProvider';

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
        className={`group relative overflow-hidden rounded-[2rem] bg-stone-50 transition-all duration-700 hover:shadow-2xl ${variant === 'large' ? 'aspect-[4/5] md:aspect-auto md:h-[600px]' : 'aspect-square'}`}
    >
        <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 sm:p-10 flex flex-col justify-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c5a059] mb-3 block">{category}</span>
            <h3 className={`font-serif font-bold text-white leading-tight mb-4 ${variant === 'large' ? 'text-3xl sm:text-5xl' : 'text-xl sm:text-2xl'}`}>
                {title}
            </h3>
            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className="flex items-center gap-4 text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {date}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-white" />
            </div>
        </div>
    </motion.div>
);

interface MagazineContentProps {
    title?: string;
    description?: string;
    slug?: string;
}

const MagazineContent = ({
    title = "Design Refined.",
    description = "Exploring the intersection of architectural heritage and modern living through our curated lens.",
    slug
}: MagazineContentProps) => {
    const { openConsultation } = useConsultation();

    // Mapping titles and descriptions based on common slugs if needed, 
    // or just using the passed props.

    // Formatting title for the split effect
    const titleParts = title.includes('.') ? title.split('.') : [title, ""];

    return (
        <div className="bg-white min-h-screen">
            {/* Editorial Header */}
            <section className="pt-32 pb-12 px-6 sm:px-12 max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-100 rounded-full mb-6"
                        >
                            <Sparkles className="w-3 h-3 text-[#c5a059]" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
                                {slug === 'news' ? 'Press & Media' : 'Design Editorial'}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412] leading-[0.9]"
                        >
                            {titleParts[0]} <br />
                            {titleParts[1] ? <span className="italic text-[#c5a059]">{titleParts[1]}.</span> : null}
                            {!titleParts[1] && title.endsWith('.') && <span className="italic text-[#c5a059]">.</span>}
                        </motion.h1>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-stone-400 text-lg font-light max-w-sm leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Featured Large */}
                    <div className="md:col-span-8">
                        <ArticleCard
                            variant="large"
                            category="Cover Story"
                            title="The Minimalist Manifesto: Crafting Silence in Modern Luxury"
                            image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070"
                        />
                    </div>

                    {/* Side Column */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <ArticleCard
                            category="Trends"
                            title="Biophilic Design: Bringing Nature In"
                            image="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000"
                        />
                        <ArticleCard
                            category="Architecture"
                            title="Legacy Homes of South Mumbai"
                            image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974"
                        />
                    </div>

                    {/* Secondary Row */}
                    <div className="md:col-span-4">
                        <ArticleCard
                            category="Interiors"
                            title="The Art of Lighting"
                            image="https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070"
                        />
                    </div>
                    <div className="md:col-span-4">
                        <ArticleCard
                            category="Materials"
                            title="Stone & Soul"
                            image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070"
                        />
                    </div>
                    <div className="md:col-span-4">
                        <div className="h-full bg-[#2d2412] rounded-[2rem] p-10 flex flex-col justify-between text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Sparkles className="w-32 h-32" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl font-serif font-bold mb-6">Want your home to look like this?</h3>
                                <p className="text-white/60 font-light leading-relaxed mb-8">
                                    Our designers can transform any space into a masterpiece matching your personality.
                                </p>
                            </div>
                            <button
                                onClick={openConsultation}
                                className="relative z-10 w-full py-5 bg-[#eb595f] hover:bg-white hover:text-[#2d2412] text-white font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3"
                            >
                                <Send className="w-4 h-4" /> Start Your Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-stone-50 overflow-hidden relative">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] aspect-square bg-[#c5a059] rounded-full blur-[200px] opacity-[0.03]" />

                <div className="max-w-[1600px] mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412] mb-6">Stay Inspired.</h2>
                        <p className="text-stone-500 font-light text-lg leading-relaxed">
                            Subscribe to our newsletter for exclusive interior trends, architectural insights, and behind-the-scenes content delivered to your inbox.
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="flex-1 px-8 py-5 bg-white border-2 border-transparent rounded-2xl focus:border-[#c5a059] outline-none transition-all shadow-sm"
                            />
                            <button className="px-8 py-5 bg-[#2d2412] text-white font-bold rounded-2xl hover:bg-[#c5a059] transition-all transform active:scale-95 shadow-lg">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </form>
                        <p className="text-[10px] text-stone-400 mt-4 text-center md:text-left uppercase tracking-widest font-bold">No spam. Only inspiration.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MagazineContent;
