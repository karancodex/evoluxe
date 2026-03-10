"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Book, ShieldCheck, CreditCard, MessageCircle, Phone, ArrowUpRight, HelpCircle, FileText, Settings } from "lucide-react";

const HelpContent = () => {
    const popularTopics = [
        { title: "Getting Started", icon: <Book />, desc: "How to book your first design session." },
        { title: "Warranty & Support", icon: <ShieldCheck />, desc: "Understanding our 10-year warranty." },
        { title: "Payments & EMI", icon: <CreditCard />, desc: "Flexible financing options for your home." },
        { title: "Project Tracking", icon: <Settings />, desc: "How to track your execution milestones." }
    ];

    const faqs = [
        { q: "What is the typical project timeline?", a: "Most residential projects, including modular kitchens and wardrobes, are completed within 45 days from the date of design finalization." },
        { q: "Do you offer free consultations?", a: "Yes, we offer two free layout consultations to help you understand the potential of your space." },
        { q: "Is there a minimum budget requirement?", a: "We work with projects of all sizes. For specific room makeovers, budgets can start as low as ₹50,000." },
        { q: "How do I claim my warranty?", a: "Simply visit the 'Raise a Ticket' section or call our concierge desk. We'll send a technician within 48 hours." }
    ];

    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#2d2412] text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D28D69]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <div className="space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">HELP CENTER</span>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold leading-tight">How can we help <br /> you today?</h1>
                    </div>
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search for topics like 'Warranty', 'Pricing', or 'Timeline'..."
                            className="w-full px-10 py-8 bg-white/5 border border-white/10 rounded-3xl outline-none focus:bg-white focus:text-[#2d2412] transition-all text-xl font-light"
                        />
                        <button className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 bg-[#D28D69] text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-[#2d2412] transition-all">
                            <Search className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#D28D69]">
                        <span>Popular:</span>
                        <button className="underline hover:text-white transition-colors">Modular Journey</button>
                        <button className="underline hover:text-white transition-colors">Financing</button>
                        <button className="underline hover:text-white transition-colors">Pooja Room Vastu</button>
                    </div>
                </div>
            </section>

            {/* 2. POPULAR TOPICS GRID */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {popularTopics.map((item, i) => (
                            <div key={i} className="bg-stone-50 p-12 rounded-[3rem] space-y-8 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-transparent hover:border-stone-100 group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D28D69] group-hover:bg-[#D28D69] group-hover:text-white transition-all shadow-sm">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-serif font-bold text-[#2d2412]">{item.title}</h3>
                                    <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                                </div>
                                <button className="flex items-center gap-2 text-[#D28D69] font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                                    Learn More <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INSTALLATION TRACKER INFOGRAPHIC */}
            <section className="py-32 px-6 bg-stone-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">TRANSPARENCY FIRST</span>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">The 45-day tracker.</h2>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { step: "01", title: "Design Sign-off", desc: "Freeze your layout and material selections within 7 days." },
                                    { step: "02", title: "Production Phase", desc: "Precision factory cutting and edge-banding (Days 8-25)." },
                                    { step: "03", title: "Final Handover", desc: "On-site assembly and deep-clean finish (Days 26-45)." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <span className="text-4xl font-serif font-bold text-stone-200 group-hover:text-[#D28D69] transition-colors">{step.step}</span>
                                        <div className="space-y-2">
                                            <h4 className="text-xl font-bold text-[#2d2412]">{step.title}</h4>
                                            <p className="text-stone-500 font-light">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D28D69]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-8">Quick Project Status</h3>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-400">
                                        <span>Current Phase: Production</span>
                                        <span>65% Complete</span>
                                    </div>
                                    <div className="h-4 bg-stone-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#D28D69] w-[65%]" />
                                    </div>
                                </div>
                                <div className="p-6 bg-stone-50 rounded-2xl flex items-center gap-6">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-[#2d2412]">Quality Check Passed</p>
                                        <p className="text-xs text-stone-400">Section B-2 (Kitchen) inspected on March 14.</p>
                                    </div>
                                </div>
                                <button className="w-full py-5 bg-[#2d2412] text-white rounded-xl font-bold text-xs tracking-widest uppercase hover:bg-[#D28D69] transition-all">
                                    Log in to Tracker
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WARRANTY DETAILS SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-[#faf9f6] rounded-[4rem] p-12 md:p-24 border border-stone-100 relative overflow-hidden">
                    <ShieldCheck className="w-64 h-64 text-[#D28D69]/5 absolute -right-20 -bottom-20 rotate-12" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Peace of mind, <br /> guaranteed.</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                Our 10-year warranty is not just a document; it's our commitment to quality. We stand by every hinge, panel, and finish we install.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <p className="text-3xl font-serif font-bold text-[#2d2412]">10 Yrs</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#D28D69]">Full Warranty</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-3xl font-serif font-bold text-[#2d2412]">48 Hrs</p>
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#D28D69]">Support Response</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 flex flex-col justify-center">
                            {["Hardware (Blum/Hettich)", "Marine Grade Plywood", "Color & Finish Continuity"].map((item, i) => (
                                <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-3xl shadow-sm border border-stone-100">
                                    <div className="w-12 h-12 bg-[#D28D69]/10 rounded-xl flex items-center justify-center text-[#D28D69]">
                                        <HelpCircle className="w-5 h-5" />
                                    </div>
                                    <p className="font-bold text-[#2d2412] text-lg">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. POPULAR FAQS SECTION */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Common Questions.</h2>
                        <p className="text-stone-500 font-light">Quick answers for your peace of mind.</p>
                    </div>
                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-8 bg-white border border-stone-100 rounded-[2.5rem] space-y-4 hover:shadow-xl transition-all cursor-pointer group">
                                <div className="flex justify-between items-center">
                                    <h4 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#D28D69] transition-colors">{faq.q}</h4>
                                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-[#D28D69] group-hover:text-white transition-all text-stone-400">
                                        +
                                    </div>
                                </div>
                                <p className="text-stone-500 font-light leading-relaxed hidden group-hover:block transition-all duration-700">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MAINTENANCE GUIDES */}
            <section className="py-32 bg-[#2d2412] text-white">
                <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold">Maintenance Guides.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Marble Care", icon: <FileText /> },
                            { title: "Upholstery Cleaning", icon: <FileText /> },
                            { title: "Wood Polish", icon: <FileText /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 hover:bg-[#D28D69] transition-all cursor-pointer group">
                                <div className="mb-6 flex justify-center text-[#D28D69] group-hover:text-white">
                                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-12 h-12" })}
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4">{item.title}</h3>
                                <p className="text-stone-400 text-sm font-light group-hover:text-white/80">Download the PDF guide for pro maintenance tips.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CONTACT CHANNELS BAR */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] text-center space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-[#eb595f]/10 rounded-2xl flex items-center justify-center text-[#eb595f] mx-auto group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-[#2d2412]">Call Concierge</h4>
                        <p className="text-stone-400 text-sm font-light">+91 7744 80 6644</p>
                    </div>
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] text-center space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <MessageCircle className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-[#2d2412]">WhatsApp Support</h4>
                        <p className="text-stone-400 text-sm font-light">Available 10 AM - 7 PM</p>
                    </div>
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] text-center space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mx-auto group-hover:bg-purple-500 group-hover:text-white transition-all">
                            <FileText className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold text-[#2d2412]">Raise a Ticket</h4>
                        <p className="text-stone-400 text-sm font-light">Tracked support cases</p>
                    </div>
                </div>
            </section>

            {/* 8. SEARCH BAR REVISIT (Small) */}
            <section className="py-24 px-6 bg-[#faf9f6]">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    <h3 className="text-2xl font-serif font-bold text-[#2d2412]">Still can't find what you need?</h3>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Try searching again..."
                            className="w-full px-8 py-5 bg-white border border-stone-100 rounded-2xl shadow-sm outline-none focus:border-[#D28D69] transition-all"
                        />
                        <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-300" />
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA SECTION */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Need personalized <br /> assistance?</h2>
                    <p className="text-stone-500 text-lg font-light">Our design concierge is just a call away from making your dream home a reality.</p>
                    <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl">
                        Contact Expert Support
                    </button>
                </div>
            </section>
        </div>
    );
};

export default HelpContent;
