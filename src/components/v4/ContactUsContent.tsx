"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, ChevronRight, CheckCircle } from "lucide-react";

const ContactUsContent = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="bg-white">
            {/* Split Layout Section */}
            <section className="min-h-screen flex flex-col lg:flex-row">
                {/* Info Side */}
                <div className="lg:w-[40%] bg-[#2d2412] p-12 md:p-24 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('/v4/luxe_banner_bg.png')] opacity-10 bg-cover mix-blend-overlay" />

                    <div className="relative z-10 space-y-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-[#eb595f] font-bold tracking-[0.4em] uppercase text-xs mb-8 block"
                            >
                                Get in Touch
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-8xl font-serif font-bold mb-10 leading-none"
                            >
                                Let's Start <br /> Your <span className="italic text-[#eb595f]">Story</span>
                            </motion.h1>
                        </div>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group hover:bg-[#eb595f] transition-all duration-500">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Email Us</p>
                                    <p className="text-xl font-light">hello@evolx.studio</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group hover:bg-[#eb595f] transition-all duration-500">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Call Us</p>
                                    <p className="text-xl font-light">+91 9999 000 111</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group hover:bg-[#eb595f] transition-all duration-500">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-2">Visit Us</p>
                                    <p className="text-xl font-light">DLF Phase 5, Golf Course Road, <br /> Gurugram, HR 122002</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 pt-20 flex gap-6">
                        <div className="flex items-center gap-3 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-xs font-bold tracking-widest uppercase">
                            <Clock className="w-4 h-4 text-[#eb595f]" />
                            <span>Available 10:00 - 20:00</span>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="flex-1 p-12 md:p-24 bg-white flex items-center justify-center relative">
                    <div className="max-w-2xl w-full">
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Send a Message</h2>
                                        <p className="text-stone-500 text-lg font-light">
                                            Have a specific project in mind? Our designers are ready to help.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-stone-300 px-1">Full Name</label>
                                                <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-stone-50 border-2 border-transparent rounded-2xl focus:border-[#eb595f] focus:bg-white outline-none transition-all placeholder:text-stone-300 font-medium" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-stone-300 px-1">Email Address</label>
                                                <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-stone-50 border-2 border-transparent rounded-2xl focus:border-[#eb595f] focus:bg-white outline-none transition-all placeholder:text-stone-300 font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-stone-300 px-1">Phone Number</label>
                                            <input required type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-stone-50 border-2 border-transparent rounded-2xl focus:border-[#eb595f] focus:bg-white outline-none transition-all placeholder:text-stone-300 font-medium" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-stone-300 px-1">Message</label>
                                            <textarea rows={5} placeholder="Tell us about your dream home..." className="w-full px-6 py-4 bg-stone-50 border-2 border-transparent rounded-2xl focus:border-[#eb595f] focus:bg-white outline-none transition-all placeholder:text-stone-300 font-medium resize-none" />
                                        </div>

                                        <button type="submit" className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-2xl hover:bg-[#2d2412] transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                                            <Send className="w-4 h-4" /> Initialize Consultation
                                        </button>
                                    </form>

                                    <div className="flex items-center gap-4 p-8 bg-stone-50 rounded-3xl border border-stone-100">
                                        <MessageCircle className="w-8 h-8 text-[#eb595f]" />
                                        <p className="text-sm text-stone-500 leading-relaxed font-light">
                                            Prefer a quick chat? <span className="text-[#eb595f] font-bold cursor-pointer hover:underline">Chat on WhatsApp</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-8"
                                >
                                    <div className="w-24 h-24 bg-[#eb595f] rounded-full flex items-center justify-center mx-auto text-white shadow-2xl">
                                        <CheckCircle className="w-12 h-12" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-5xl font-serif font-bold text-[#2d2412]">Message Sent</h2>
                                        <p className="text-stone-500 text-xl font-light max-w-md mx-auto leading-relaxed">
                                            Thank you for reaching out. One of our design concierge specialists will contact you within the next 2 hours.
                                        </p>
                                    </div>
                                    <button onClick={() => setSubmitted(false)} className="px-10 py-5 border-2 border-stone-100 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-[#eb595f] transition-all">
                                        Go Back
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Decorative Watermark */}
                    <div className="absolute bottom-10 right-10 text-[10vw] font-serif font-black text-stone-50 pointer-events-none -z-0 whitespace-nowrap">
                        EVOLX STUDIO
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsContent;
