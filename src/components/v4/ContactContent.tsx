"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactContent = () => {
    return (
        <div className="bg-white">
            <section className="py-24 px-6 max-w-[1400px] mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-[#2b0d3e]"
                    >
                        Let&apos;s Create <br /> <span className="italic text-stone-400">Something Beautiful</span>
                    </motion.h1>
                    <p className="text-stone-500 text-lg md:text-xl font-light">Visit our experience centers or talk to our experts today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="bg-[#2b0d3e] text-white p-12 rounded-[3.5rem] relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7a3f91] opacity-20 blur-3xl" />
                            <h2 className="text-3xl font-serif font-bold mb-10 relative z-10">Get in Touch</h2>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9] shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-xl font-medium">1800-EVOLUXE-00</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9] shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-xl font-medium">hello@evoluxe.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#c59dd9] shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Headquarters</p>
                                        <p className="text-xl font-medium leading-relaxed">Level 12, Amethyst Towers, <br />Indiranagar, Bengaluru - 560038</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-12 rounded-[3.5rem] border border-stone-100">
                        <h2 className="text-3xl font-serif font-bold text-[#2b0d3e] mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest px-1">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#7a3f91] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-stone-400 uppercase tracking-widest px-1">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#7a3f91] transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-stone-400 uppercase tracking-widest px-1">Message</label>
                                <textarea rows={4} className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#7a3f91] transition-all resize-none" placeholder="How can we help you today?" />
                            </div>
                            <button className="w-full py-5 bg-[#7a3f91] text-white font-bold rounded-2xl shadow-xl hover:bg-[#2b0d3e] transition-all duration-300 flex items-center justify-center gap-3">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactContent;
