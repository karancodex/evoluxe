"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    ShieldCheck,
    Heart,
    ChevronRight,
    Phone,
    MessageCircle,
    MapPin,
    Send,
    CheckCircle,
    ArrowRight,
    Star,
    Layers,
    Clock,
    Users,
    Zap,
    MousePointer2,
    Check
} from "lucide-react";
import { useConsultation } from '@/components/providers/ConsultationProvider';

// The Home page uses standard Tailwind serif/sans fonts. 
// We'll use the same font classes to ensure similarity.

const DCWContent = () => {
    const { openConsultation } = useConsultation();
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const stats = [
        { label: "Years Experience", value: "45+", icon: <Clock className="w-5 h-5" /> },
        { label: "Sofas Crafted", value: "1000+", icon: <Layers className="w-5 h-5" /> },
        { label: "Upholstery Projects", value: "2000+", icon: <MousePointer2 className="w-5 h-5" /> },
        { label: "Happy Clients", value: "100s", icon: <Users className="w-5 h-5" /> }
    ];

    const services = [
        {
            id: "sofas",
            title: "New Sofa Manufacturing",
            desc: "Custom-designed sofas built with premium materials and modern comfort. We bring your vision to life.",
            image: "/v4/dcw_sectional.png",
            items: ['Luxury Sofas', 'Sectional Sofas', 'L-Shape Sofas', 'Modern Minimal Sofas', 'Office Sofas']
        },
        {
            id: "upholstery",
            title: "Upholstery Services",
            desc: "Professional reupholstery and restoration. Breathe new life into your cherished furniture pieces.",
            image: "/v4/dcw_upholstery.png",
            items: ['Sofa Upholstery', 'Chair Upholstery', 'Cushion Replacement', 'Foam Replacement', 'Furniture Restoration']
        }
    ];

    const materials = [
        { title: "High-density Foam", desc: "For superior shape retention and lasting comfort." },
        { title: "Premium Fabrics", desc: "Curated collection of global upholstery textiles." },
        { title: "Leatherette & Suede", desc: "Luxurious textures with high durability ratings." },
        { title: "Durable Stitching", desc: "Reinforced seams for heavy-duty daily usage." },
        { title: "Long-lasting Support", desc: "Premium cushion support built for decades of use." }
    ];

    return (
        <div className="bg-white text-[#2d2412] min-h-screen overflow-x-hidden selection:bg-[#eb595f] selection:text-white">

            {/* HERO SECTION — STYLED LIKE HOME HERO */}
            <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] flex items-center bg-white">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/v4/dcw_hero_full.png"
                        alt="DCW Luxury Living"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Subtle Dark Gradient for text pop without washing image, matched to main landing page */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block drop-shadow-sm">
                                Sofa & Upholstery Specialists Since 1978
                            </span>
                            <h1 className="text-[2.8rem] xs:text-[3.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight font-serif drop-shadow-lg">
                                Premium Sofas & Upholstery <br />
                                <span className="text-[#eb595f] italic font-normal drop-shadow-sm">Since 1978.</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-stone-200 mb-8 leading-relaxed max-w-xl font-normal drop-shadow-md">
                                DCW specializes in crafting custom sofas and expert upholstery solutions trusted for over four decades.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full sm:w-auto px-10 py-4 bg-[#eb595f] text-white font-bold rounded-full shadow-lg hover:bg-stone-900 transition-all transform active:scale-95 text-xs uppercase tracking-widest"
                                >
                                    Get Instant Quote
                                </button>
                                <button className="w-full sm:w-auto px-10 py-4 border border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-[#eb595f] hover:border-[#eb595f] transition-all transform active:scale-95 text-xs uppercase tracking-widest">
                                    View Workshop
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Feature Bar - EXACTLY LIKE HOME HERO */}
                <div className="absolute bottom-0 left-0 right-0 z-30 px-4 transform translate-y-1/2">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] grid grid-cols-1 sm:grid-cols-3 md:flex md:flex-row md:justify-around items-center border border-stone-100 gap-6 md:gap-0"
                        >
                            {/* 45+ Years Legacy */}
                            <div className="flex items-center gap-4 px-6 md:px-8 border-b md:border-b-0 md:border-r border-stone-100 last:border-0 pb-6 md:pb-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">45+ Years</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Legacy of Mastery</span>
                                </div>
                            </div>

                            {/* Lifetime Warranty */}
                            <div className="flex items-center gap-4 px-6 md:px-8 border-b md:border-b-0 md:border-r border-stone-100 last:border-0 pb-6 md:pb-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">Lifetime</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Warranty</span>
                                </div>
                            </div>

                            {/* Handcrafted Premium Quality */}
                            <div className="flex items-center gap-4 px-6 md:px-8 last:border-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">Premium Materials</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">& Durable Craftsmanship</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SPACER FOR FEATURE BAR */}
            <div className="h-24 md:h-32 bg-white" />

            {/* SECTION 2: STATS — STYLED LIKE STATSSECTION */}
            <section className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(77,59,26,0.05)] border border-[#faf9f6] text-center group"
                            >
                                <div className="w-16 h-16 bg-[#faf9f6] rounded-2xl flex items-center justify-center text-[#eb595f] mb-8 mx-auto group-hover:bg-[#eb595f] group-hover:text-white transition-all duration-300">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-serif font-bold text-[#2d2412] mb-2">{stat.value}</h3>
                                <p className="text-[#2d2412]/60 font-medium uppercase tracking-widest text-[10px]">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: CRAFTSMANSHIP — STYLED LIKE DESIGN SESSION / INTRO */}
            <section id="about" className="py-24 md:py-32 bg-[#fcf8ff]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="aspect-[4/5] relative rounded-[3rem] overflow-hidden shadow-2xl"
                            >
                                <Image
                                    src="/v4/dcw_sectional.png"
                                    alt="Legacy Craftsmanship"
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                            <div className="absolute -bottom-6 -right-6 bg-[#eb595f] text-white p-8 rounded-[2rem] shadow-xl hidden md:block">
                                <span className="text-4xl font-serif font-bold">1978</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Established</p>
                            </div>
                        </div>

                        <div className="space-y-8 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                                    <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Since 1978</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-8 leading-[1.1] tracking-tight">
                                    Craftsmanship That <br />
                                    <span className="text-[#eb595f] italic font-medium">Lasts Generations</span>.
                                </h2>
                                <p className="text-[#2d2412]/60 text-lg md:text-xl font-light leading-relaxed mb-10">
                                    For more than four decades, DCW has been the hallmark of premium sofa manufacturing and upholstery. We don't just build furniture; we create icons of comfort.
                                </p>

                                {/* 4 Services in front of image — moved and styled as grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10 w-full">
                                    {[
                                        { title: "Honest Service", desc: "Trusted for quality across Pune." },
                                        { title: "Premium Foams", desc: "32D to 40D density options." },
                                        { title: "Global Fabrics", desc: "Italian, Turkish & Indian velvet." },
                                        { title: "Free Consultation", desc: "Expert advice at your doorstep." }
                                    ].map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-5 p-7 bg-white rounded-3xl border border-stone-100 shadow-[0_15px_45px_-15px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-500"
                                        >
                                            <div className="w-12 h-12 bg-[#fcebeb] rounded-full flex items-center justify-center text-[#eb595f] shrink-0">
                                                <CheckCircle className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-1">
                                                <h3 className="text-base font-bold text-[#2d2412]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-stone-400 font-light text-[11px] leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICES — STYLED LIKE WHATWEOFFER */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 px-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                            <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Core Offerings</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]">
                            Our Specialized <br className="hidden md:block" />
                            <span className="text-[#eb595f] italic font-medium">Solutions</span>.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {services.map((service, idx) => (
                            <motion.div
                                id={service.id}
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#fcf8ff] rounded-[3rem] overflow-hidden p-4 border border-[#faf9f6] hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-[16/9] md:aspect-[4/3] relative rounded-[2.5rem] overflow-hidden mb-8">
                                    <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="px-8 pb-8 space-y-6">
                                    <h3 className="text-3xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">{service.title}</h3>
                                    <p className="text-[#2d2412]/60 font-light text-lg">{service.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.items.map(item => (
                                            <span key={item} className="px-5 py-2 bg-white rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-[#eb595f] transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    <button onClick={openConsultation} className="flex items-center gap-4 text-[#eb595f] font-bold group-hover:translate-x-2 transition-transform uppercase tracking-widest text-xs">
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: MATERIALS — STYLED LIKE STATS/FEATURES */}
            <section id="materials" className="py-24 bg-[#eb595f] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src="/v4/dcw_hero_full.png" alt="Overlay" fill className="object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">The Materials of Excellence</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">We use only high-end, premium materials to ensure your comfort is timeless.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {materials.map((mat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#eb595f] transition-all duration-500 group">
                                <h4 className="text-2xl font-serif font-bold text-white group-hover:text-[#eb595f] mb-4">{mat.title}</h4>
                                <p className="text-white/60 group-hover:text-[#2d2412]/60 font-light text-sm">{mat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: OUR PROCESS */}
            <section id="process" className="py-24 md:py-32 bg-[#fcf8ff]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                            <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">How We Work</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] mb-6 tracking-tight leading-[1.1]">
                            Our Proven <br className="hidden md:block" />
                            <span className="text-[#eb595f] italic font-medium">Four-Step Process</span>.
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-[#eb595f]/20 to-transparent" />

                        {[
                            { title: "Consultation", desc: "We discuss your specific needs, style preferences, and space dimensions.", num: "01" },
                            { title: "Design & Selection", desc: "Choose from our curated collection of high-density foams and global fabrics.", num: "02" },
                            { title: "Craftsmanship", desc: "Our masterful artisans bring your custom piece to life with precision.", num: "03" },
                            { title: "Delivery", desc: "Safe, hassle-free delivery directly to your home or office space.", num: "04" }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative bg-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(77,59,26,0.05)] border border-[#faf9f6]"
                            >
                                <div className="w-16 h-16 bg-[#eb595f] rounded-2xl flex items-center justify-center text-white font-serif font-bold text-2xl mb-8 shadow-lg relative z-10 mx-auto lg:mx-0">
                                    {step.num}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#2d2412] mb-4 text-center lg:text-left">{step.title}</h3>
                                <p className="text-[#2d2412]/60 text-sm leading-relaxed text-center lg:text-left">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION: PORTFOLIO & REVIEWS */}
            <section id="portfolio" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Our Work</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412] tracking-tight">
                                Featured <span className="text-[#eb595f] italic font-medium">Projects</span>.
                            </h2>
                        </div>
                        <p className="text-[#2d2412]/60 max-w-md text-sm">
                            A showcase of our finest custom sofas and remarkable upholstery transformations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 group relative aspect-[16/9] lg:aspect-auto rounded-[2rem] overflow-hidden bg-stone-100">
                            <Image src="/v4/dcw_sectional.png" alt="Luxury Sofa" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div className="text-white">
                                    <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block text-[#eb595f]">New Manufacturing</span>
                                    <h4 className="text-2xl font-serif font-bold">Luxury L-Shape Sectional</h4>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-square lg:aspect-auto rounded-[2rem] overflow-hidden bg-stone-100">
                            <Image src="/v4/dcw_upholstery.png" alt="Before After Upholstery" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-[#eb595f]">Before & After</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div className="text-white relative z-10">
                                    <h4 className="text-xl font-serif font-bold">Antique Chair Restoration</h4>
                                </div>
                            </div>
                        </div>
                        <div className="group relative aspect-square lg:aspect-auto min-h-[250px] rounded-[2rem] overflow-hidden bg-stone-100">
                            <Image src="/v4/luxury_living_1.png" alt="Modern Minimal" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div className="text-white">
                                    <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block text-[#eb595f]">Commercial Upholstery</span>
                                    <h4 className="text-xl font-serif font-bold">Office Lounge Seating</h4>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 group relative aspect-[16/9] lg:aspect-auto min-h-[250px] rounded-[2rem] overflow-hidden bg-stone-100">
                            <Image src="/v4/luxury_bedroom_1.png" alt="Custom Furniture" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <div className="text-white">
                                    <span className="text-[10px] uppercase tracking-widest font-bold mb-2 block text-[#eb595f]">Custom Craftsmanship</span>
                                    <h4 className="text-2xl font-serif font-bold">Premium Bedroom Seating</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: CUSTOMER REVIEWS */}
            <section className="py-24 bg-[#eb595f] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src="/v4/dcw_hero_full.png" alt="Overlay" fill className="object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">Client Testimonials</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">Hear what hundreds of our happy customers have to say about DCW.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Rahul S.", role: "Homeowner", text: "DCW transformed our old ancestral sofa completely. The cushioning feels better than when we originally bought it 15 years ago!" },
                            { name: "Megha K.", role: "Interior Designer", text: "I regularly source custom L-shape couches for my clients from DCW. Their stitching quality and foam density are unmatched in Pune." },
                            { name: "Priya M.", role: "Corporate Client", text: "Got our entire office lounge seating customized by them. Excellent delivery timeline and very transparent pricing with no hidden costs." }
                        ].map((review, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-xl relative mt-8 md:mt-0">
                                <div className="absolute -top-6 right-8 text-[#eb595f] opacity-20 transform -scale-x-100">
                                    <MessageCircle className="w-16 h-16 fill-current" />
                                </div>
                                <div className="flex text-[#FFD700] mb-6">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <p className="text-[#2d2412]/70 font-medium mb-8 relative z-10 leading-relaxed italic">
                                    "{review.text}"
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-bold text-[#eb595f]">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#2d2412] text-sm">{review.name}</h4>
                                        <span className="text-[10px] uppercase tracking-widest text-[#2d2412]/40 font-bold">{review.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 6: CONTACT — STYLED LIKE ESTIMATESECTION / MEETDESIGNER */}
            <section id="contact" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#fcf8ff] rounded-[3rem] px-8 py-16 md:p-16 flex flex-col lg:flex-row gap-16 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-[#faf9f6]">
                        {/* Decorative Gradient like EstimateSection */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eb595f] opacity-5 blur-[120px] rounded-full pointer-events-none" />

                        <div className="lg:w-[45%] space-y-10 relative z-10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eb595f]/5 rounded-full mb-6 border border-[#eb595f]/10">
                                    <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px]">Contact Us</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412] leading-[1.1] tracking-tight">
                                    Redefine Your <br />
                                    <span className="text-[#eb595f] italic font-medium">Comfort Spaces</span>.
                                </h2>
                            </div>
                            <p className="text-[#2d2412]/60 text-lg leading-relaxed">
                                Our expert sofa architects are ready to help you choose the best style and material for your home.
                            </p>
                            <div className="space-y-6 pt-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <span className="text-xl font-bold text-[#2d2412] tracking-tight">+91 7744 80 6644</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#eb595f] shadow-sm">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <span className="text-lg font-medium text-[#2d2412]/70 leading-snug">New Nana Peth, Opp Padamji Police Station, Pune.</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 relative z-10">
                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        onSubmit={handleSubmit}
                                        className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl space-y-6 border border-stone-100"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <input required type="text" className="w-full px-6 py-4 bg-[#faf9f6] rounded-full outline-none focus:ring-2 focus:ring-[#eb595f]/20 transition-all text-sm" placeholder="Full Name" />
                                            <input required type="tel" className="w-full px-6 py-4 bg-[#faf9f6] rounded-full outline-none focus:ring-2 focus:ring-[#eb595f]/20 transition-all text-sm" placeholder="Phone Number" />
                                        </div>
                                        <select className="w-full px-6 py-4 bg-[#faf9f6] rounded-full outline-none focus:ring-2 focus:ring-[#eb595f]/20 transition-all text-sm appearance-none">
                                            <option>New Sofa Manufacturing</option>
                                            <option>Upholstery & Restoration</option>
                                            <option>Others</option>
                                        </select>
                                        <textarea rows={4} className="w-full px-8 py-5 bg-[#faf9f6] rounded-[2rem] outline-none focus:ring-2 focus:ring-[#eb595f]/20 transition-all text-sm resize-none" placeholder="How can we help you?"></textarea>
                                        <button className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-full hover:bg-stone-900 transition-all transform active:scale-95 shadow-lg text-xs uppercase tracking-widest">
                                            Send Request
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full bg-white p-12 rounded-[2.5rem] text-center flex flex-col items-center justify-center space-y-8"
                                    >
                                        <div className="w-20 h-20 bg-[#eb595f]/10 text-[#eb595f] rounded-full flex items-center justify-center">
                                            <CheckCircle className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-3xl font-serif font-bold text-[#2d2412]">Request Sent!</h3>
                                            <p className="text-[#2d2412]/60">We've received your inquiry. One of our experts will call you within 24 hours.</p>
                                        </div>
                                        <button onClick={() => setSubmitted(false)} className="text-[#eb595f] font-bold uppercase tracking-widest text-xs hover:underline">
                                            Send Another Inquiry
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* WA FLOAT */}
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://wa.me/917744806644"
                target="_blank"
                className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
            </motion.a>
        </div>
    );
};

export default DCWContent;
