"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Play, CheckCircle, Star, Users, ShieldCheck, Clock, ArrowRight, Quote } from 'lucide-react';

interface OfferingLandingProps {
    title: string;
    heroSubtitle: string;
    heroImage: string;
    accentColor: string;
    introTitle: string;
    introDesc: string;
    offerCards: {
        title: string;
        image: string;
        desc: string;
    }[];
    features: {
        title: string;
        image: string;
        desc: string;
    }[];
    steps: {
        title: string;
        icon: string | React.ReactNode;
        desc: string;
    }[];
    journeyHighlights: {
        phase: string;
        days: string;
        items: string[];
    }[];
    testimonials: {
        name: string;
        role: string;
        content: string;
        avatar: string;
    }[];
    videoStories: {
        title: string;
        image: string;
        location: string;
        clientName: string;
    }[];
    promiseContent: {
        title: string;
        desc: string;
        illustration: string;
        features: string[];
    };
    faqs: {
        q: string;
        a: string;
    }[];
}

const OfferingLanding: React.FC<OfferingLandingProps> = ({
    title,
    heroSubtitle,
    heroImage,
    accentColor,
    introTitle,
    introDesc,
    offerCards,
    features,
    steps,
    journeyHighlights,
    testimonials,
    videoStories,
    promiseContent,
    faqs
}) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="bg-white font-sans text-[#2d2412] selection:bg-[#eb595f] selection:text-white">
            {/* 1. Hero Section - Matching Home Page Style */}
            <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] flex items-center bg-[#faf9f6] overflow-hidden">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={heroImage}
                            alt={title}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                        {/* Gradient Overlay for Text Readability - Matching Home style with color adapted for light bg if possible or dark if needed. 
                            The home page uses a light gradient from left. I'll stick to that style. */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/95 to-transparent sm:via-[#faf9f6]/60 text-left" />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-32">
                    <div className="max-w-4xl text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#eb595f] font-bold tracking-[0.5em] uppercase text-[10px] mb-4 block" style={{ color: accentColor }}>
                                Interior Architecture & Design
                            </span>
                            <h1 className="text-[2.4rem] xs:text-[2.8rem] sm:text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#2d2412] leading-[1.05] mb-6 tracking-tight">
                                {title}<br />
                                <span className="italic font-medium" style={{ color: accentColor }}>{heroSubtitle}</span>
                            </h1>
                            <p className="text-sm sm:text-lg md:text-xl text-[#2d2412]/80 mb-8 leading-relaxed max-w-xl font-medium">
                                {introDesc}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="w-full sm:w-auto px-8 py-4 bg-[#eb595f] text-white font-bold rounded-2xl shadow-[0_10px_30px_rgba(235,89,95,0.3)] hover:shadow-xl transition-all transform active:scale-95 text-sm uppercase tracking-widest"
                                    style={{ backgroundColor: accentColor }}
                                >
                                    GET FREE QUOTE
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* 2. Intro Section */}
            <section className="py-20 md:py-32 px-5 md:px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8 text-left order-2 lg:order-1"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2 border border-stone-100" style={{ backgroundColor: `${accentColor}10` }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                                <span className="font-bold tracking-[0.3em] uppercase text-[9px]" style={{ color: accentColor }}>Expertise in Space</span>
                            </div>
                            <h2 className="text-3xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2d2412] leading-[1.1] tracking-tight">
                                {introTitle.split(' ').slice(0, -1).join(' ')} <br />
                                <span className="italic font-medium" style={{ color: accentColor }}>{introTitle.split(' ').pop()}</span>
                            </h2>
                        </div>
                        <p className="text-[#2d2412]/70 leading-relaxed text-base md:text-xl font-normal max-w-xl">
                            {introDesc}
                        </p>
                        <button className="flex items-center gap-2 text-[#2d2412] group py-2">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase border-b-2 border-stone-200 group-hover:text-[#eb595f] transition-all pb-1" style={{ borderBottomColor: `${accentColor}40` }}>
                                Know More
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2"
                    >
                        <Image src="/v4/luxury_living_2.png" alt="Evolution" fill className="object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* 3. Offer Cards - What we offer */}
            <section className="py-20 md:py-24 bg-[#faf9f6] px-5 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24 space-y-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>What we offer</span>
                        <h2 className="text-3xl md:text-6xl font-serif font-bold text-[#2d2412]">
                            Our Curated <span className="italic font-medium" style={{ color: accentColor }}>Solutions</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                        {offerCards.map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col"
                            >
                                <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                                </div>
                                <div className="p-8 md:p-10 flex flex-col flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold mb-3">{card.title}</h3>
                                    <p className="text-gray-500 mb-6 leading-relaxed line-clamp-2 text-sm md:text-base">{card.desc}</p>
                                    <div className="mt-auto">
                                        <button className="font-bold flex items-center gap-3 group/btn text-sm md:text-base" style={{ color: accentColor }}>
                                            View Details
                                            <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover/btn:bg-[#eb595f] group-hover/btn:border-[#eb595f] group-hover/btn:text-white transition-all">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Features Grid - Why you should choose the best */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Why choose us</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">
                        Unmatched <span className="italic font-medium" style={{ color: accentColor }}>Excellence</span>
                    </h2>
                    <p className="text-[#2d2412]/60 max-w-2xl mx-auto">Precision engineering and premium finishes are what make us stand out in the architectural world.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white group"
                        >
                            <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                                <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-3">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 5. Trust Highlights - Parallax Fixed Background */}
            <section className="relative py-48 overflow-hidden">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0 scale-110">
                    <div
                        className="absolute inset-0 bg-fixed bg-center bg-cover"
                        style={{ backgroundImage: `url('/v4/luxury_living_1.png')` }}
                    />
                    <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                                <Star className="text-yellow-400 w-10 h-10 fill-current" />
                            </div>
                            <h3 className="text-5xl font-bold mb-3 text-white">4.5 / 5</h3>
                            <p className="text-white/50 text-[10px] tracking-[0.3em] font-bold uppercase">AVERAGE RATING</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                                <ShieldCheck className="text-green-400 w-10 h-10" />
                            </div>
                            <h3 className="text-5xl font-bold mb-3 text-white">10 Years</h3>
                            <p className="text-white/50 text-[10px] tracking-[0.3em] font-bold uppercase">WARRANTY</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/20">
                                <Users className="text-blue-400 w-10 h-10" />
                            </div>
                            <h3 className="text-5xl font-bold mb-3 text-white">150+</h3>
                            <p className="text-white/50 text-[10px] tracking-[0.3em] font-bold uppercase">DESIGN EXPERTS</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 6. Snapshot Timeline - Matching the image style */}
            <section className="py-20 md:py-32 px-5 md:px-6 max-w-6xl mx-auto">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Timeline</span>
                    <h2 className="text-3xl md:text-6xl font-serif font-bold text-center">
                        Journey in a <span className="italic font-medium" style={{ color: accentColor }}>Snapshot</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                    {journeyHighlights.map((phase, idx) => (
                        <div key={idx} className="bg-white border border-stone-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm hover:shadow-xl transition-all h-full">
                            <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{phase.phase}</h3>
                                    <div className="h-1 w-16 rounded-full" style={{ backgroundColor: accentColor }}></div>
                                </div>
                                <span className="bg-[#fff1f1] text-[#eb595f] px-5 py-1.5 rounded-full text-xs font-bold border border-[#fde2e2] shrink-0">
                                    {phase.days}
                                </span>
                            </div>
                            <ul className="space-y-4 md:space-y-6">
                                {phase.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex gap-4 items-start group">
                                        <div className="mt-1 w-4 h-4 rounded-full border-2 border-stone-200 flex items-center justify-center shrink-0 group-hover:border-[#eb595f] transition-all">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb595f] opacity-0 group-hover:opacity-100 transition-all"></div>
                                        </div>
                                        <span className="text-gray-600 text-sm md:text-base font-medium group-hover:text-gray-900 transition-all">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. Experience Video Stories */}
            <section className="py-20 md:py-24 bg-stone-50 px-5 md:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24 space-y-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Success Stories</span>
                        <h2 className="text-3xl md:text-6xl font-serif font-bold">
                            Our Happy <span className="italic font-medium" style={{ color: accentColor }}>Homeowners</span>
                        </h2>
                    </div>
                    <div className="flex overflow-x-auto no-scrollbar gap-5 pb-5 md:grid md:grid-cols-3 md:gap-8">
                        {videoStories.map((story, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative aspect-[4/5] w-[280px] md:w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl shrink-0"
                            >
                                <Image
                                    src={story.image}
                                    alt={story.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#eb595f] shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 transition-all">
                                        <Play className="ml-1 w-6 h-6 md:w-8 md:h-8 fill-current" />
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="text-xl md:text-2xl font-bold mb-1">{story.clientName}</h4>
                                    <p className="text-[10px] border-l-2 border-[#eb595f] pl-3 opacity-80 uppercase tracking-widest">{story.location}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Testimonials (Static quotes) */}
            <section className="py-32 px-6 max-w-5xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Testimonials</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold italic text-[#2d2412]">
                        Words of <span style={{ color: accentColor }}>Appreciation</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.03)] border border-stone-100 flex flex-col items-center text-center">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden mb-8 ring-8 ring-stone-50">
                                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                            </div>
                            <div className="flex text-yellow-500 mb-6 gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-gray-600 text-lg italic leading-relaxed mb-8">"{t.content}"</p>
                            <h4 className="font-bold text-xl mb-1">{t.name}</h4>
                            <p className="text-xs text-[#eb595f] font-bold uppercase tracking-[0.2em]">{t.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 9. Our Promise + Illustration */}
            <section className="py-32 bg-[#faf9f6] px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>Our Commitment</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">
                                The evoluxstudio <span className="italic font-medium" style={{ color: accentColor }}>Promise</span>
                            </h2>
                        </div>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            {promiseContent.desc}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {promiseContent.features.map((f, idx) => (
                                <div key={idx} className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-100 hover:scale-105 transition-all">
                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                        <CheckCircle className="text-green-500 w-6 h-6" />
                                    </div>
                                    <span className="font-bold text-gray-800">{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
                        <Image
                            src={promiseContent.illustration}
                            alt="Our Promise"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                </div>
            </section>

            {/* 10. FAQ */}
            <section className="py-32 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: accentColor }}>FAQ</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-center text-[#2d2412]">
                        Common <span className="italic font-medium" style={{ color: accentColor }}>Inquiries</span>
                    </h2>
                </div>
                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white border-b border-stone-200 overflow-hidden">
                            <button
                                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-8 text-left transition-all"
                            >
                                <span className="font-bold text-xl md:text-2xl text-gray-900 pr-8">{faq.q}</span>
                                <div className={`w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center transition-all ${openFaq === idx ? 'bg-stone-900 text-white' : ''}`}>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openFaq === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-10 text-gray-600 text-lg leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>

            {/* 11. Final CTA Form - High Conversion Layout */}
            <section className="py-32 bg-[#1a1a1a] text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rotate-12 border-y-[100px] border-white" />
                </div>

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-10">
                                Your dream interiors <br />
                                <span className="italic font-medium" style={{ color: accentColor }}>is just a click away</span>
                            </h2>
                            <p className="text-2xl text-white/60 mb-12 leading-relaxed">Join 2000+ happy homeowners who transformed their living spaces with evoluxstudio.</p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[#eb595f] flex items-center justify-center shadow-lg">
                                        <Clock className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold">45 Days</p>
                                        <p className="text-white/40 uppercase tracking-widest text-xs">Standardized Delivery</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shadow-lg">
                                        <ShieldCheck className="w-8 h-8 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold">10 Years</p>
                                        <p className="text-white/40 uppercase tracking-widest text-xs">Unmatched Warranty</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-[3.5rem] text-gray-900 shadow-2xl relative"
                    >
                        <div className="absolute -top-6 -left-6 bg-[#eb595f] text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl">
                            LIMITED TIME OFFER
                        </div>
                        <h3 className="text-3xl font-bold mb-8">Book Free Consultation</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-stone-50 p-5 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#eb595f]/30 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                                    <input type="tel" placeholder="+91 98765 43210" className="w-full bg-stone-50 p-5 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#eb595f]/30 transition-all" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Project Type</label>
                                <select className="w-full bg-stone-50 p-5 rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[#eb595f]/30 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJtNiA5IDYgNiA2LTYiLz48L3N2Zz4=')] bg-[length:24px] bg-[right_20px_center] bg-no-repeat">
                                    <option>Select a service</option>
                                    <option>Full Home Design</option>
                                    <option>Modular Interiors</option>
                                    <option>Kitchen Renovations</option>
                                    <option>Commercial Spaces</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                style={{ backgroundColor: accentColor }}
                                className="w-full py-6 rounded-2xl text-white font-bold text-xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_15px_40px_-10px_rgba(235,89,95,0.5)] mt-4"
                            >
                                Get Quotes Now
                            </button>
                            <p className="text-center text-xs text-gray-400 mt-6">By clicking, you agree to our Terms and Privacy Policy.</p>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default OfferingLanding;
