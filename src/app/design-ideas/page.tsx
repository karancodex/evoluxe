"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Filter, Search, ArrowRight } from 'lucide-react';
import { topNavLinks, slugify, getPageContent } from '@/data/nav-data';

const DesignIdeaCard = ({ item, categoryTitle }: { item: string; categoryTitle: string }) => {
    const slug = slugify(item);
    const content = useMemo(() => getPageContent(slug), [slug]);
    const image = content?.heroImage || '/v4/interior-living-3d.jpg';

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
        >
            <Link href={`/design-ideas/${slug}`}>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={item}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                            {categoryTitle}
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-[#eb595f] transition-colors">
                        {item}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                        <span>Explore Designs</span>
                        <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function DesignIdeasPage() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const designIdeasNav = topNavLinks.find(link => link.name === 'Design Ideas');
    const categories = designIdeasNav?.columns || [];
    const filterOptions = ['All', ...categories.map(c => c.title)];

    const allItems = useMemo(() => {
        return categories.flatMap(cat =>
            cat.items.map(item => ({
                name: item,
                category: cat.title,
                slug: slugify(item)
            }))
        );
    }, [categories]);

    const filteredItems = useMemo(() => {
        return allItems.filter(item => {
            const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [allItems, activeFilter, searchQuery]);

    return (
        <main className="min-h-screen bg-[#fcfcfc] pt-24 pb-20">
            {/* Hero Section */}
            <div className="bg-stone-900 overflow-hidden relative mb-16">
                <div className="absolute inset-0 opacity-40">
                    <Image
                        src="/v4/hero-bg.png"
                        alt="Hero background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-900/90" />

                <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-32 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <nav className="flex items-center text-[11px] font-bold text-[#eb595f] uppercase tracking-[0.3em] mb-6">
                            <span>Inspiration</span>
                            <ChevronRight className="w-3 h-3 mx-2" />
                            <span className="text-white/60">Design Ideas</span>
                        </nav>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Transforming <span className="italic text-[#eb595f]">Visions</span> <br />
                            into Reality.
                        </h1>
                        <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
                            Browse through our curated collection of 1000+ interior designs across multiple categories. Find the perfect inspiration for your home.
                        </p>

                        <div className="relative max-w-lg">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                            <input
                                type="text"
                                placeholder="Search e.g. 'Modern Kitchen'..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 bg-white shadow-2xl rounded-2xl text-stone-800 placeholder:text-stone-400 focus:ring-2 focus:ring-[#eb595f] outline-none transition-all"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6">
                {/* Filter Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 sticky top-24 z-30 bg-[#fcfcfc]/80 backdrop-blur-md py-4 -mx-6 px-6">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <div className="p-2.5 bg-white border border-stone-200 rounded-xl">
                            <Filter className="w-4 h-4 text-[#eb595f]" />
                        </div>
                        {filterOptions.map(option => (
                            <button
                                key={option}
                                onClick={() => setActiveFilter(option)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeFilter === option
                                        ? 'bg-[#eb595f] text-white shadow-lg shadow-[#eb595f]/20'
                                        : 'bg-white border border-stone-200 text-stone-600 hover:border-[#eb595f] hover:text-[#eb595f]'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="text-stone-400 text-sm font-medium">
                        Showing <span className="text-[#2d2412] font-bold">{filteredItems.length}</span> Design Ideas
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.map((item) => (
                            <DesignIdeaCard
                                key={item.slug}
                                item={item.name}
                                categoryTitle={item.category}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-40">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-stone-100 rounded-full mb-6">
                            <Search className="w-8 h-8 text-stone-300" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-2">No designs found</h3>
                        <p className="text-stone-500">Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
                            className="mt-6 text-[#eb595f] font-bold hover:underline"
                        >
                            Reset all filters
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
