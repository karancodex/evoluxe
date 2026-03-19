"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    MapPin,
    ShieldCheck,
    Clock,
    Award,
    Users,
    Plus,
    Minus,
    ArrowRight,
    Sparkles,
    Send
} from 'lucide-react';
import { cityData } from '@/data/nav-data';
import { useConsultation } from './providers/ConsultationProvider';

interface CityContentProps {
    cityName: string;
    slug: string;
}

const CityContent = ({ cityName, slug }: CityContentProps) => {
    const { openConsultation } = useConsultation();
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const data = cityData[slug] || {
        heroImage: "/v4/interior-living-3d.jpg",
        experienceCenterImage: "/v4/interior-living-3d.jpg",
        tagline: `Best Interior Designers in ${cityName}`,
        description: `Get personalized home interiors that blend functionality with aesthetics, tailored specifically for your lifestyle in ${cityName}.`,
        locations: [{ name: 'Experience Center', address: `Main Market, ${cityName}` }],
        stats: [
            { label: 'Trusted by', value: '10,000+' },
            { label: 'Families', value: 'Happy' }
        ],
        services: [
            { title: 'Modular Kitchens', desc: 'Precision engineered for the modern home.', img: '/v4/luxury_kitchen_1.png' },
            { title: 'Wardrobes & Storage', desc: 'Smart storage solutions for every space.', img: '/v4/service_wardrobe.png' },
            { title: 'Full Home Interiors', desc: 'End-to-end furniture and styling.', img: '/v4/full-home-design.png' }
        ]
    };

    const faqs = [
        { q: `How much do interior designers in ${cityName} charge?`, a: "The cost depends on various factors like square footage, materials used, and the complexity of the design. Typically, for a 2BHK, the cost can range from ₹3.5L to ₹10L+ depending on whether you choose essential or luxury finishes." },
        { q: `What services do you provide in ${cityName}?`, a: "We provide end-to-end interior design services including modular kitchens, wardrobes, living room designs, lighting, false ceiling, painting, and civil work." },
        { q: "Do you have an experience center nearby?", a: `Yes, we have multiple experience centers in ${cityName} where you can touch and feel the materials and explore various design styles in person.` },
        { q: "What is the warranty on your products?", a: "We provide a flat 10-year warranty on all our modular products, ensuring peace of mind for our customers." }
    ];

    return (
        <div className="bg-white min-h-screen selection:bg-[#eb595f]/10">
            {/* 1. Hero Section */}
            <section className="relative h-[85vh] md:h-screen flex items-center overflow-hidden bg-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={data.heroImage}
                        alt={`Best Interior Designers in ${cityName}`}
                        fill
                        className="object-cover opacity-90 scale-105"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />

                <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
                    <div className="text-[#2d2412] max-w-2xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#eb595f]/5 backdrop-blur-sm rounded-full border border-[#eb595f]/10 text-[10px] font-black uppercase tracking-widest text-[#eb595f]"
                        >
                            <Star className="w-3 h-3 fill-current" />
                            Premium Interiors in {cityName}
                        </motion.div>
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold leading-[0.95] tracking-tight"
                            >
                                {data.tagline.includes(cityName) ? (
                                    <>
                                        {data.tagline.split(cityName)[0]}
                                        <span className="text-[#eb595f] italic">{cityName}</span>
                                        {data.tagline.split(cityName)[1]}
                                    </>
                                ) : data.tagline}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-xl"
                            >
                                {data.description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <button
                                onClick={openConsultation}
                                className="px-10 py-5 bg-[#eb595f] text-white font-black text-xs uppercase tracking-widest rounded-2xl transition-all duration-300 shadow-2xl hover:bg-stone-900 transform hover:-translate-y-1 flex items-center gap-3"
                            >
                                <Sparkles className="w-4 h-4" /> Start Design Journey
                            </button>
                            <button
                                onClick={openConsultation}
                                className="px-10 py-5 border-2 border-stone-200 bg-white/50 backdrop-blur-sm text-[#2d2412] font-black text-xs uppercase tracking-widest rounded-2xl transition-all hover:border-[#eb595f] hover:text-[#eb595f] shadow-sm flex items-center gap-3"
                            >
                                Get Free Quote
                            </button>
                        </motion.div>
                    </div>

                    {/* Responsive Floating Card for Desktop */}
                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, x: 50 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#eb595f] rounded-[3rem] p-12 text-white w-full max-w-[440px] shadow-[0_50px_100px_-20px_rgba(235,89,95,0.3)] border border-white/10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Sparkles className="w-32 h-32" />
                            </div>
                            <div className="relative z-10 space-y-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl font-serif font-bold leading-tight">Book a <br /> Site Visit</h3>
                                    <p className="text-white/50 font-light text-sm">Experience our craftsmanship first-hand at your own space.</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 rounded-xl bg-[#eb595f] flex items-center justify-center">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium">Quality Guaranteed</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="w-10 h-10 rounded-xl bg-[#eb595f] flex items-center justify-center">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium">45-Day Delivery</span>
                                    </div>
                                </div>
                                <button
                                    onClick={openConsultation}
                                    className="w-full py-5 bg-white text-[#eb595f] font-black uppercase text-[10px] tracking-widest rounded-2xl transition-all hover:bg-stone-900 hover:text-white shadow-xl flex items-center justify-center gap-3"
                                >
                                    <Send className="w-4 h-4" /> Book Now
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. Stats Section */}
            {/* <section className="py-24 bg-stone-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { label: 'Completed Projects', value: '1,500+' },
                            { label: 'Families Smiles', value: '10,000+' },
                            { label: 'Material Library', value: '5,000+' },
                            { label: 'Warranty Period', value: '10 YRS' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-2"
                            >
                                <p className="text-5xl md:text-7xl font-serif font-bold text-[#eb595f]">{stat.value}</p>
                                <p className="text-stone-400 text-[10px] uppercase font-black tracking-[0.2em]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 3. Services Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="w-12 h-1 bg-[#eb595f]"
                            />
                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#2d2412]">Our Offerings.</h2>
                            <p className="text-stone-500 font-light text-xl leading-relaxed">From initial concept to final touch-up, we handle everything for your {cityName} home.</p>
                        </div>
                        <button
                            onClick={openConsultation}
                            className="group flex items-center gap-4 px-8 py-4 bg-stone-50 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#2d2412] hover:bg-[#eb595f] hover:text-white transition-all shadow-sm"
                        >
                            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                        {data.services.map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl">
                                    <Image src={item.img} fill alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-10 flex flex-col justify-end">
                                        <h3 className="text-3xl font-serif font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-white/60 text-sm font-light mb-8 opacity-0 group-hover:opacity-100 transition-all duration-500">{item.desc}</p>
                                        <button
                                            onClick={openConsultation}
                                            className="inline-flex items-center gap-3 text-white font-black text-[10px] uppercase tracking-widest bg-[#eb595f] w-fit px-6 py-3 rounded-full hover:bg-white hover:text-[#2d2412] transition-colors"
                                        >
                                            Consult Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Excellence Section */}
            <section className="py-32 bg-stone-50 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[0.95] text-[#2d2412]">
                                    Unmatched <br /> <span className="text-[#eb595f] italic">Mastery.</span>
                                </h2>
                                <p className="text-stone-500 text-xl font-light">Why we are the first choice for luxury interiors in {cityName}.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {[
                                    { icon: Award, title: '10-Year Warranty', desc: 'Comprehensive coverage for your peace of mind.' },
                                    { icon: Clock, title: '45-Day Promise', desc: 'Swift delivery from design sign-off to installation.' },
                                    { icon: ShieldCheck, title: '250+ Quality Checks', desc: 'Rigorous auditing at every stage of production.' },
                                    { icon: Users, title: 'Expert Team', desc: 'Certified architects and specialized craftsmen.' }
                                ].map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="space-y-6 group"
                                    >
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-xl border border-stone-100 group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                            <feature.icon className="w-8 h-8" />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-serif font-bold text-2xl text-[#2d2412]">{feature.title}</h4>
                                            <p className="text-stone-500 font-light text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <Image src="/v4/interior-living-3d.jpg" fill alt="Quality Promise" className="object-cover" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute -bottom-12 md:-left-20 bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] max-w-sm hidden md:block border border-stone-100"
                            >
                                <div className="flex gap-1 text-[#eb595f] mb-6">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-xl md:text-2xl font-serif italic text-[#2d2412] leading-relaxed mb-8">
                                    &quot;EVOLX Studio transformed our empty shell into a masterpiece. Their attention to detail in {cityName} is unparalleled.&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-stone-100 rounded-full overflow-hidden">
                                        <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200" width={56} height={56} alt="Vikram" className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#2d2412] uppercase tracking-widest text-xs">Vikram Malhotra</p>
                                        <p className="text-xs text-[#eb595f] font-bold mt-0.5">{cityName} Homeowner</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQs Section */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-24 space-y-6">
                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#2d2412]">Journal <br /> of <span className="text-[#eb595f]">Common Queries.</span></h2>
                        <p className="text-stone-500 font-light text-lg">Planning your interior journey in {cityName}.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-3xl border border-stone-100 overflow-hidden shadow-sm transition-all hover:shadow-xl hover:border-[#eb595f]/10">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left group"
                                >
                                    <span className="text-xl md:text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-all领先 leading-snug">{faq.q}</span>
                                    <div className={`p-3 rounded-full transition-all ${openFaq === idx ? 'bg-[#eb595f] text-white rotate-180' : 'bg-stone-50 text-stone-300'}`}>
                                        <Plus className={`w-6 h-6 ${openFaq === idx ? 'hidden' : 'block'}`} />
                                        <Minus className={`w-6 h-6 ${openFaq === idx ? 'block' : 'hidden'}`} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 md:px-12 pb-10 text-stone-500 font-light text-lg leading-relaxed pt-2">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA Banner */}
            <section className="py-32 px-6 flex justify-center bg-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="max-w-[1400px] w-full relative min-h-[600px] rounded-[4rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.2)] group"
                >
                    <Image src={data.heroImage} fill alt="Final CTA" className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]" />
                    <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-md flex items-center p-8 md:p-24 overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 opacity-10">
                            <Sparkles className="w-96 h-96 text-[#eb595f]" />
                        </div>
                        <div className="max-w-3xl text-white space-y-12 relative z-10">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold leading-[0.9] tracking-tight">
                                Transform <br /> Your <span className="text-[#eb595f] italic">{cityName}</span> <br /> Living.
                            </h2>
                            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                                Join 10,000+ elite families who chose Evoluxe. Get your free personalized design quote and start your luxury journey today.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <button
                                    onClick={openConsultation}
                                    className="px-12 py-6 bg-[#eb595f] text-white font-black uppercase text-xs tracking-widest rounded-3xl hover:bg-white hover:text-stone-900 transition-all shadow-2xl flex items-center justify-center gap-4"
                                >
                                    <Send className="w-5 h-5" /> Initialize Design Now
                                </button>
                                <button
                                    onClick={openConsultation}
                                    className="px-12 py-6 border-2 border-white/20 text-white font-black uppercase text-xs tracking-widest rounded-3xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-4"
                                >
                                    Experience Studio <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default CityContent;
