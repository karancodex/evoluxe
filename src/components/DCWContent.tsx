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

// The Home page uses standard Tailwind serif/sans fonts. 
// We'll use the same font classes to ensure similarity.

const DCWContent = () => {
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
            title: "New Sofa Manufacturing",
            desc: "Custom-designed sofas built with premium materials and modern comfort. We bring your vision to life.",
            image: "/v4/dcw_sectional.png",
            items: ['Custom Sofas', 'Sectional Sofas', 'Luxury Sofas', 'Office Sofas', 'Custom Cushions']
        },
        {
            title: "Upholstery Services",
            desc: "Professional reupholstery and restoration. Breathe new life into your cherished furniture pieces.",
            image: "/v4/dcw_upholstery.png",
            items: ['Sofa Reupholstery', 'Foam Replacement', 'Chair Upholstery', 'Furniture Restoration', 'Cushion Repair']
        }
    ];

    const materials = [
        { title: "High-density Foam", desc: "For superior shape retention and lasting comfort." },
        { title: "Premium Fabrics", desc: "Curated collection of global upholstery textiles." },
        { title: "Leatherette & Suede", desc: "Luxurious textures with high durability ratings." },
        { title: "Durable Stitching", desc: "Reinforced seams for heavy-duty daily usage." }
    ];

    return (
        <div className="bg-white text-[#2d2412] min-h-screen overflow-x-hidden selection:bg-[#eb595f] selection:text-white">

            {/* HERO SECTION — STYLED LIKE HOME HERO */}
            <section className="relative w-full h-screen md:h-[85vh] lg:h-[90vh] flex items-center bg-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/v4/dcw_hero_full.png"
                        alt="DCW Luxury Living"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    {/* Light Overlay to match Home Hero */}
                    <div className="absolute inset-0 bg-white/30" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">
                                Premium Sofa & Upholstery Masters
                            </span>
                            <h1 className="text-[2.8rem] xs:text-[3.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-[1.05] mb-6 tracking-tight font-serif">
                                Crafting Comfort <br />
                                <span className="text-[#eb595f] italic font-normal">For Generations.</span>
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl text-black mb-8 leading-relaxed max-w-xl font-normal">
                                DCW combines traditional craftsmanship with modern design, delivering high-quality upholstery and custom sofas built for durability and style.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="w-full sm:w-auto px-10 py-4 bg-[#eb595f] text-white font-bold rounded-full shadow-lg hover:bg-[#2d2412] transition-all transform active:scale-95 text-xs uppercase tracking-widest">
                                    Get Instant Quote
                                </button>
                                <button className="w-full sm:w-auto px-10 py-4 border border-[#eb595f]/20 bg-white/50 backdrop-blur-sm text-[#eb595f] font-bold rounded-full hover:bg-[#eb595f] hover:text-white transition-all transform active:scale-95 text-xs uppercase tracking-widest">
                                    View Workshop
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Feature Bar - EXACTLY LIKE HOME HERO */}
                <div className="absolute bottom-0 left-0 right-0 z-30 px-4 transform translate-y-1/2 hidden md:block">
                    <div className="max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="bg-white rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-row justify-around items-center border border-stone-100"
                        >
                            <div className="flex items-center gap-4 px-8 border-r border-stone-100 last:border-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">45+ Years</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Legacy of Mastery</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-8 border-r border-stone-100 last:border-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">Lifetime</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Warranty</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 px-8 last:border-0 shrink-0">
                                <div className="w-12 h-12 bg-stone-50 rounded-2xl flex items-center justify-center text-[#eb595f]">
                                    <Star className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[#2d2412] font-bold text-lg leading-tight">Handcrafted</span>
                                    <span className="text-stone-400 text-[10px] uppercase tracking-widest font-bold">Premium Quality</span>
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
            <section className="py-24 md:py-32 bg-[#fcf8ff]">
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
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Honest Service", desc: "Trusted for quality across Pune." },
                                        { title: "Premium Foams", desc: "32D to 40D density options." },
                                        { title: "Global Fabrics", desc: "Italian, Turkish & Indian velvet." },
                                        { title: "Free Consultation", desc: "Expert advice at your doorstep." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-4 items-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#eb595f]" />
                                            <span className="text-[#2d2412] font-medium text-sm">{item.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICES — STYLED LIKE WHATWEOFFER */}
            <section className="py-24 bg-white">
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
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-[#fcf8ff] rounded-[3rem] overflow-hidden p-4 border border-[#faf9f6] hover:shadow-2xl transition-all duration-500"
                            >
                                <div className="aspect-[16/9] relative rounded-[2.5rem] overflow-hidden mb-8">
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
                                    <button className="flex items-center gap-4 text-[#eb595f] font-bold group-hover:translate-x-2 transition-transform uppercase tracking-widest text-xs">
                                        Learn More <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: MATERIALS — STYLED LIKE STATS/FEATURES */}
            <section className="py-24 bg-[#eb595f] relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image src="/v4/dcw_hero_full.png" alt="Overlay" fill className="object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">The Materials of Excellence</h2>
                        <p className="text-white/70 max-w-2xl mx-auto">We use only high-end, premium materials to ensure your comfort is timeless.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {materials.map((mat, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/20 hover:bg-white hover:text-[#eb595f] transition-all duration-500 group">
                                <h4 className="text-2xl font-serif font-bold text-white group-hover:text-[#eb595f] mb-4">{mat.title}</h4>
                                <p className="text-white/60 group-hover:text-[#2d2412]/60 font-light text-sm">{mat.desc}</p>
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
                                        <button className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-full hover:bg-[#2d2412] transition-all transform active:scale-95 shadow-lg text-xs uppercase tracking-widest">
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
                <MessageCircle className="w-8 h-8 fill-current" />
            </motion.a>
        </div>
    );
};

export default DCWContent;
