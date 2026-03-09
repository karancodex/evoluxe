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
    ArrowRight
} from 'lucide-react';
import { cityData } from '@/data/nav-data';

interface CityContentProps {
    cityName: string;
    slug: string;
}

const CityContent = ({ cityName, slug }: CityContentProps) => {
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
        <div className="bg-white min-h-screen">
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
                        className="object-cover opacity-90"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 bg-white/40" />

                <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12 pt-20">
                    <div className="text-[#2d2412] max-w-2xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-stone-200 text-xs font-bold uppercase tracking-widest shadow-sm"
                        >
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            Trusted by 10,000+ Homes
                        </motion.div>
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1]"
                            >
                                {data.tagline.includes(cityName) ? (
                                    <>
                                        {data.tagline.split(cityName)[0]}
                                        <span className="text-[#eb595f]">{cityName}</span>
                                        {data.tagline.split(cityName)[1]}
                                    </>
                                ) : data.tagline}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-stone-600 font-normal leading-relaxed max-w-xl"
                            >
                                {data.description}
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <button className="px-8 py-4 bg-[#eb595f] text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:bg-[#2d2412] transform hover:-translate-y-1">
                                Start Your Design Journey
                            </button>
                            <button className="px-8 py-4 border border-stone-300 bg-white/50 backdrop-blur-sm text-[#2d2412] font-bold rounded-full transition-all hover:bg-white shadow-sm">
                                View Recent Projects
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 text-[#2d2412] w-full max-w-[440px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-stone-100"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">Get Free Estimate</h3>
                        <p className="text-stone-500 text-sm mb-8 font-normal text-center">Takes less than 1 minute</p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl focus:bg-white outline-none placeholder:text-stone-400 text-base focus:border-[#eb595f] transition-all"
                            />
                            <div className="flex gap-2">
                                <div className="px-4 py-4 bg-stone-50 border border-stone-100 rounded-xl text-stone-500 text-base flex items-center">+91</div>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="flex-1 px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl focus:bg-white outline-none placeholder:text-stone-400 text-base focus:border-[#eb595f] transition-all"
                                />
                            </div>
                            <select className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl focus:bg-white outline-none text-stone-500 text-base focus:border-[#eb595f] transition-all appearance-none cursor-pointer">
                                <option value="" disabled defaultValue="">Project Type</option>
                                <option value="kitchen">Modular Kitchen</option>
                                <option value="wardrobe">Modular Wardrobe</option>
                                <option value="full">Full Home Interior</option>
                            </select>

                            <button type="submit" className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-xl transition-all duration-300 shadow-md mt-4 hover:bg-[#2d2412]">
                                Book Free Consultation
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* 2. Stats Section */}
            <section className="py-20 bg-white border-y border-stone-100">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {data.stats.map((stat: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-4xl md:text-5xl font-bold text-[#eb595f] mb-2">{stat.value}</p>
                                <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Experience Center Section */}
            <section className="py-24 bg-white overflow-hidden relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="w-full lg:w-1/2 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl relative"
                            >
                                <Image src={data.experienceCenterImage} fill alt="Experience Center" className="object-cover" />
                                <div className="absolute inset-0 bg-black/10" />
                            </motion.div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div className="space-y-6">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="text-4xl md:text-6xl font-bold text-[#2d2412] leading-tight"
                                >
                                    Visit Our Studio in <span className="text-[#eb595f]">{cityName}</span>
                                </motion.h2>
                                <p className="text-stone-600 text-xl font-normal leading-relaxed">
                                    Touch, feel, and experience the finest materials from across the globe. Our experience centers are designed to help you visualize your future home with real-life room displays.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {data.locations.map((loc: any, idx: number) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="p-6 bg-stone-50 rounded-2xl border border-stone-100 flex items-start gap-4 hover:border-[#eb595f] transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#eb595f] group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-[#2d2412] mb-1">{loc.name}</h4>
                                            <p className="text-stone-500 font-normal">{loc.address}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <button className="px-10 py-5 bg-[#2d2412] text-white font-bold rounded-full hover:bg-[#eb595f] transition-all transform hover:-translate-y-1 shadow-md">
                                Get Directions To Studio
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Services Grid */}
            <section className="py-32 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl space-y-4">
                            <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412]">Personalized Services</h2>
                            <p className="text-stone-500 font-normal text-xl">From initial concept to final touch-up, we handle everything for your {cityName} home.</p>
                        </div>
                        <button className="hidden md:flex items-center gap-2 font-bold text-[#eb595f] hover:underline">
                            View All Services <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {data.services.map((item: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group"
                            >
                                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-lg">
                                    <Image src={item.img} fill alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                                    <div className="absolute bottom-8 left-8 right-8 text-white">
                                        <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-white/90 text-sm font-normal mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500">{item.desc}</p>
                                        <div className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest bg-[#eb595f] w-fit px-4 py-2 rounded-full">
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Excellence Section */}
            <section className="py-32 bg-stone-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#2d2412]">
                                    Excellence in Every Detail
                                </h2>
                                <p className="text-stone-600 text-xl font-normal">Why we are the first choice for luxury interiors in {cityName}.</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
                                        className="space-y-4"
                                    >
                                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm border border-stone-100">
                                            <feature.icon className="w-7 h-7" />
                                        </div>
                                        <h4 className="font-bold text-xl text-[#2d2412]">{feature.title}</h4>
                                        <p className="text-stone-500 font-normal text-sm leading-relaxed">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl"
                            >
                                <Image src="/v4/interior-living-3d.jpg" fill alt="Quality Promise" className="object-cover" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="absolute -bottom-12 -left-12 md:-left-20 bg-white p-10 rounded-[2rem] shadow-2xl max-w-sm hidden md:block border border-stone-100"
                            >
                                <div className="flex gap-1 text-yellow-500 mb-4">
                                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                                </div>
                                <p className="text-xl italic text-stone-700 leading-relaxed mb-6 font-normal">
                                    &quot;EVOLX Studio transformed our empty shell into a masterpiece. Their attention to detail in {cityName} is unparalleled.&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-stone-100 rounded-full" />
                                    <div>
                                        <p className="font-bold text-stone-900">Vikram Malhotra</p>
                                        <p className="text-sm text-stone-500">{cityName} Homeowner</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQs Section */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412]">Common Questions</h2>
                        <p className="text-stone-500 font-normal text-lg">Planning your interior journey in {cityName}.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 py-7 flex items-center justify-between text-left group"
                                >
                                    <span className="text-xl font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-all">{faq.q}</span>
                                    <div className={`p-2 rounded-full transition-all ${openFaq === idx ? 'bg-[#eb595f] text-white rotate-180' : 'bg-stone-50 text-stone-400'}`}>
                                        <Plus className={`w-5 h-5 ${openFaq === idx ? 'hidden' : 'block'}`} />
                                        <Minus className={`w-5 h-5 ${openFaq === idx ? 'block' : 'hidden'}`} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 pt-0 text-stone-600 leading-relaxed text-lg font-normal border-t border-stone-50 pt-4">
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

            {/* 7. CTA Banner */}
            <section className="py-24 px-6 flex justify-center bg-white">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="max-w-[1400px] w-full relative min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group"
                >
                    <Image src={data.heroImage} fill alt="Final CTA" className="object-cover opacity-90" />
                    <div className="absolute inset-0 bg-white/60 flex items-center p-10 md:p-24 backdrop-blur-sm">
                        <div className="max-w-2xl text-[#2d2412] space-y-10">
                            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                                Ready to Elevate Your Living in <span className="text-[#eb595f]">{cityName}</span>?
                            </h2>
                            <p className="text-stone-700 text-xl font-normal leading-relaxed">
                                Join our community of 10,000+ happy families. Get your free personalized design quote and start your journey with India&apos;s most innovative design studio.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <button className="px-10 py-5 bg-[#eb595f] text-white font-bold rounded-full hover:bg-[#2d2412] transition-all shadow-lg scale-105">
                                    Book Free Consultation
                                </button>
                                <button className="px-10 py-5 border border-stone-400 text-[#2d2412] font-bold rounded-full hover:bg-white transition-all backdrop-blur-sm flex items-center justify-center gap-3">
                                    Explore Catalog <ArrowRight className="w-5 h-5" />
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
