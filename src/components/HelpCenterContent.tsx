"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle, MessageSquare, Book, ChevronRight, PhoneCall, Mail, LifeBuoy } from "lucide-react";
import { useConsultation } from "./providers/ConsultationProvider";

const faqs = [
    {
        q: "What is the typical timeline for a full home interior project?",
        a: "Our standard 'Modular Journey' takes exactly 45 days from the date of design sign-off. This includes manufacturing at our state-of-the-art facility and on-site installation by professional crews."
    },
    {
        q: "Do you offer a warranty on your modular products?",
        a: "Yes, we offer an industry-leading 10-year warranty on all modular woodwork and hardware. We stand by the quality of our materials and architectural grade plywood."
    },
    {
        q: "Is there a consultation fee for the first meeting?",
        a: "The first design consultation and site visit are completely free. We want you to feel confident in our expertise before you commit to your dream home transformation."
    },
    {
        q: "How do you handle post-installation service?",
        a: "We have a dedicated 'After-Care' team. Any maintenance or service requests can be raised through our help center, and we aim to resolve them within 48-72 hours."
    }
];

const HelpCenterContent = () => {
    const { openConsultation } = useConsultation();
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <div className="bg-white min-h-screen">
            {/* Search Hero */}
            <section className="py-32 bg-[#faf9f6] border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-[#fcebeb] rounded-3xl flex items-center justify-center mx-auto text-[#eb595f] mb-12 shadow-inner"
                    >
                        <LifeBuoy className="w-10 h-10 animate-spin-slow" />
                    </motion.div>
                    <div className="space-y-6">
                        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]">How can we <br /> help <span className="italic text-stone-300">today?</span></h1>
                        <p className="text-stone-500 text-xl font-light">Search our knowledge base or browse frequently asked questions.</p>
                    </div>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-8 top-1/2 -translate-y-1/2 text-[#eb595f] w-6 h-6" />
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full pl-20 pr-10 py-7 bg-white border border-stone-200 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(45,36,18,0.08)] outline-none focus:border-[#eb595f] transition-all text-lg font-medium"
                        />
                    </div>
                </div>
            </section>

            {/* Support Categories */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Project Tracking", desc: "Check the status of your live interior project.", icon: <HelpCircle className="w-8 h-8" /> },
                        { title: "Service Request", desc: "Need maintenance? Raise a ticket here.", icon: <MessageSquare className="w-8 h-8" /> },
                        { title: "Policy Hub", desc: "Learn about warranties, returns & more.", icon: <Book className="w-8 h-8" /> }
                    ].map((item, i) => (
                        <div key={i} className="p-12 rounded-[3rem] border border-stone-100 hover:border-[#eb595f]/20 hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer hover:-translate-y-4">
                            <div className="w-16 h-16 bg-[#fcebeb] rounded-2xl flex items-center justify-center text-[#eb595f] mb-8 group-hover:bg-[#eb595f] group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] mb-4">{item.title}</h3>
                            <p className="text-stone-500 font-light leading-relaxed mb-8">{item.desc}</p>
                            <div className="flex items-center gap-2 text-[#eb595f] text-xs font-black uppercase tracking-widest pt-4 opacity-0 group-hover:opacity-100 transition-all">
                                Open Portal <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Detailed FAQs */}
            <section className="py-32 bg-[#2d2412] text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-[#eb595f] text-xs font-black tracking-[0.4em] uppercase mb-4 block">Knowledge Base</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold">Frequently Asked</h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className={`rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 ${openIdx === i ? 'bg-white text-[#2d2412]' : 'bg-white/5 hover:bg-white/10'}`}
                            >
                                <button
                                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                    className="w-full p-10 flex items-center justify-between text-left"
                                >
                                    <span className="text-xl md:text-2xl font-serif font-bold">{faq.q}</span>
                                    <ChevronRight className={`w-6 h-6 transition-transform duration-500 ${openIdx === i ? 'rotate-90' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openIdx === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                        >
                                            <div className="px-10 pb-10">
                                                <div className="w-full h-[1px] bg-stone-100 mb-8" />
                                                <p className="text-lg font-light leading-relaxed">
                                                    {faq.a}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Direct Support */}
            <section className="py-32 max-w-7xl mx-auto px-6">
                <div className="bg-[#eb595f] rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden text-center">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12">Couldn't find an answer?</h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <button
                            onClick={openConsultation}
                            className="px-12 py-6 bg-white text-[#eb595f] font-bold rounded-2xl flex items-center gap-4 hover:scale-105 transition-transform uppercase tracking-widest text-xs"
                        >
                            <PhoneCall className="w-5 h-5" /> Speak to an Agent
                        </button>
                        <button className="px-12 py-6 border-2 border-white/30 text-white font-bold rounded-2xl flex items-center gap-4 hover:bg-white hover:text-[#eb595f] transition-all uppercase tracking-widest text-xs">
                            <Mail className="w-5 h-5" /> Email Support
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenterContent;
