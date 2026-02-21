"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Star,
    ChevronRight,
    MapPin,
    Phone,
    ShieldCheck,
    Clock,
    Award,
    Users,
    Plus,
    Minus,
    ArrowRight
} from 'lucide-react';

interface CityContentProps {
    cityName: string;
    slug: string;
}

const CityContent = ({ cityName, slug }: CityContentProps) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqs = [
        { q: `How much do interior designers in ${cityName} charge?`, a: "The cost depends on various factors like square footage, materials used, and the complexity of the design. Typically, for a 2BHK, the cost can range from ₹3.5L to ₹10L+ depending on whether you choose essential or luxury finishes." },
        { q: "What services do you provide in my city?", a: "We provide end-to-end interior design services including modular kitchens, wardrobes, living room designs, lighting, false ceiling, painting, and civil work." },
        { q: "Do you have an experience center nearby?", a: "Yes, we have multiple experience centers where you can touch and feel the materials and explore various design styles in person." },
        { q: "What is the warranty on your products?", a: "We provide a flat 10-year warranty on all our modular products, ensuring peace of mind for our customers." }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Hero Section */}
            <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
                <Image
                    src="/v4/interior-living-3d.jpg"
                    alt={`Best Interior Designers in ${cityName}`}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-12 pt-20">
                    <div className="text-white max-w-2xl space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block px-4 py-1 bg-[#7a3f91] rounded-full text-xs font-bold uppercase tracking-widest"
                        >
                            Trusted by 10,000+ Families
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif font-bold leading-tight"
                        >
                            Interior Designers in <span className="text-[#c59dd9]">{cityName}</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-stone-200 font-light"
                        >
                            Get personalized home interiors that blend functionality with aesthetics, tailored specifically for your lifestyle in {cityName}.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-[#2b0d3e] rounded-[2.5rem] p-10 text-white w-full max-w-[420px] shadow-2xl relative overflow-hidden border border-white/10"
                    >
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#7a3f91] opacity-20 blur-3xl rounded-full"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-serif font-bold mb-4">Designs for every budget</h3>
                            <p className="text-stone-300 text-sm mb-10 font-light leading-relaxed">Fill details and get your personalized design quote from our experts in {cityName}.</p>

                            <form className="space-y-5">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light"
                                />
                                <div className="flex gap-2">
                                    <div className="px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-stone-400 text-sm">+91</div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light"
                                    />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Pincode"
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:bg-white/10 outline-none placeholder:text-stone-500 text-sm focus:border-white/30 transition-all font-light"
                                />

                                <button className="w-full py-4 bg-[#7a3f91] hover:bg-white hover:text-[#7a3f91] text-white font-bold rounded-2xl transition-all duration-500 shadow-xl mt-4 transform hover:-translate-y-1">
                                    Book Free Consultation
                                </button>

                                <p className="text-[10px] text-stone-500 text-center leading-relaxed mt-6">
                                    By clicking this button, you agree to our Terms and Conditions and Privacy Policy.
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Experience Center Section */}
            <section className="py-24 bg-stone-50 overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group">
                            <Image src="/v4/interior-living-3d.jpg" fill alt="Experience Center" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2">
                                    <MapPin className="w-5 h-5 text-[#c59dd9]" />
                                    <span className="font-bold underline">Navigate to Center</span>
                                </div>
                                <h4 className="text-xl font-bold">Main Market, {cityName}</h4>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2b0d3e] mb-6 leading-tight">
                                    Step into our Design Experience Center in {cityName}
                                </h2>
                                <p className="text-stone-600 text-lg font-light leading-relaxed">
                                    Experience luxury interior design like never before. Touch premium materials, explore modular kitchen setups, and walk through full-scale room designs to visualize your dream home.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-6 pb-4">
                                <div className="space-y-1">
                                    <p className="text-2xl font-serif font-bold text-[#7a3f91]">5,000+ sqft</p>
                                    <p className="text-stone-400 text-sm">Experience Zone</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-2xl font-serif font-bold text-[#7a3f91]">20+ Ready</p>
                                    <p className="text-stone-400 text-sm">Room Displays</p>
                                </div>
                            </div>
                            <button className="px-10 py-4 bg-[#2b0d3e] text-white font-bold rounded-full hover:bg-[#7a3f91] transition-all transform hover:-translate-y-1">
                                Book a Center Visit
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Services Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2b0d3e]">Personalized Home Interiors</h2>
                        <p className="text-stone-500 font-light">From modular kitchens to complete home renovations, we bring your vision to life in {cityName}.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Modular Kitchens', desc: 'Precision engineered for the modern home.', img: '/v4/interior-living-3d.jpg' },
                            { title: 'Wardrobes & Storage', desc: 'Smart storage solutions for every space.', img: '/v4/interior-living-3d.jpg' },
                            { title: 'Full Home Interiors', desc: 'End-to-end furniture and styling.', img: '/v4/interior-living-3d.jpg' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 shadow-lg">
                                    <Image src={item.img} fill alt={item.title} className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-[#2b0d3e] mb-2">{item.title}</h3>
                                <p className="text-stone-500 font-light text-sm mb-4">{item.desc}</p>
                                <div className="flex items-center gap-2 text-[#7a3f91] font-bold text-xs uppercase tracking-widest">
                                    Explore Now <ChevronRight className="w-4 h-4" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Evoluxe? */}
            <section className="py-24 bg-[#2b0d3e] text-white">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                                Why Evoluxe is {cityName}&apos;s Preferred Choice?
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9]">
                                        <Award className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-xl">10-Year Warranty</h4>
                                    <p className="text-stone-400 font-light text-sm">Long-term peace of mind with our quality guarantee.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9]">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-xl">45-Day Delivery</h4>
                                    <p className="text-stone-400 font-light text-sm">Rapid fulfillment without compromising on quality.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9]">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-xl">250+ Quality Checks</h4>
                                    <p className="text-stone-400 font-light text-sm">Rigorous auditing for flawless finishing.</p>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9]">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h4 className="font-bold text-xl">Bespoke Designs</h4>
                                    <p className="text-stone-400 font-light text-sm">Tailor-made to reflect your personal style.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image src="/v4/interior-living-3d.jpg" fill alt="Trust" className="object-cover" />
                            <div className="absolute inset-0 bg-[#7a3f91]/20 mix-blend-multiply" />
                            <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex gap-1 text-yellow-400">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                                    </div>
                                    <span className="text-sm font-bold tracking-widest uppercase">Excellent Reviews</span>
                                </div>
                                <p className="text-xl font-serif italic font-light">&quot;The attention to detail and professional handling of my project in {cityName} was remarkable. Highly recommend!&quot;</p>
                                <p className="mt-4 font-bold text-[#c59dd9]">Rahul Sharma, {cityName} Homeowner</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQs Section */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2b0d3e] mb-4">Got Questions?</h2>
                        <p className="text-stone-500 font-light">Everything you need to know about working with us in {cityName}.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="bg-white rounded-2xl border border-stone-100 overflow-hidden transition-all shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                >
                                    <span className="text-lg font-bold text-[#2b0d3e] group-hover:text-[#7a3f91] transition-colors">{faq.q}</span>
                                    <div className={`p-2 rounded-full transition-all ${openFaq === idx ? 'bg-[#7a3f91] text-white' : 'bg-stone-50 text-stone-400'}`}>
                                        {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                                            <div className="px-8 pb-8 pt-0 text-stone-500 leading-relaxed font-light">
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
            <section className="py-24 px-6">
                <div className="max-w-[1400px] mx-auto relative h-[500px] rounded-[3rem] overflow-hidden group">
                    <Image src="/v4/interior-living-3d.jpg" fill alt="Final CTA" className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2b0d3e]/90 via-[#2b0d3e]/40 to-transparent flex items-center p-10 md:p-20">
                        <div className="max-w-2xl text-white space-y-8">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                                Transform your home in <span className="text-[#c59dd9]">{cityName}</span> today.
                            </h2>
                            <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed">
                                Join our community of happy homeowners. Get your free personalized design quote and start your interior journey with Evoluxe.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-10 py-4 bg-[#7a3f91] text-white font-bold rounded-full hover:bg-white hover:text-[#7a3f91] transition-all shadow-xl">
                                    Book Free Consultation
                                </button>
                                <button className="px-10 py-4 border-2 border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2">
                                    View Our Catalog <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CityContent;
