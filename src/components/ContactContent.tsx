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
                        className="text-4xl sm:text-5xl md:text-8xl font-serif font-bold text-[#4d3b1a] leading-tight"
                    >
                        Let&apos;s Create <br className="hidden sm:block" /> <span className="italic text-stone-400">Something Beautiful</span>
                    </motion.h1>
                    <p className="text-stone-500 text-lg md:text-xl font-light">Visit our experience centers or talk to our experts today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="bg-[#4d3b1a] text-white p-6 sm:p-12 rounded-[2rem] sm:rounded-[4rem] relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#c5a059] opacity-20 blur-3xl" />
                            <h2 className="text-3xl font-serif font-bold mb-10 relative z-10">Get in Touch</h2>
                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#e5d5b0] shrink-0 group-hover:bg-[#c5a059] transition-colors duration-500">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-lg md:text-xl font-medium">+91 7744 80 6644</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#e5d5b0] shrink-0 group-hover:bg-[#c5a059] transition-colors duration-500">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg md:text-xl font-medium">Info@evolxstudio.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#e5d5b0] shrink-0 group-hover:bg-[#c5a059] transition-colors duration-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Pune Experience Center</p>
                                        <p className="text-lg md:text-xl font-medium leading-relaxed">
                                            Shop No-4, Ram Nivas, 1034, <br />
                                            New Nana Peth, Opp Padamji Police Station, <br />
                                            Pune - 411002
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-100 text-center">
                                <p className="text-2xl font-serif font-bold text-[#4d3b1a]">10+</p>
                                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Years Warranty</p>
                            </div>
                            <div className="bg-stone-50 p-6 rounded-3xl border border-stone-100 text-center">
                                <p className="text-2xl font-serif font-bold text-[#4d3b1a]">45</p>
                                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Days Delivery</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-stone-50 p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-stone-100 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4d3b1a] mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#c5a059] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#c5a059] transition-all" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#c5a059] transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Select Service</label>
                                    <select className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#c5a059] transition-all appearance-none cursor-pointer">
                                        <option>Full Home Interiors</option>
                                        <option>Modular Kitchen</option>
                                        <option>Wardrobe Solutions</option>
                                        <option>Commercial Spaces</option>
                                        <option>Other Services</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Budget Range</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {['10k - 50k', '50k - 1L', '1L - 3L', '3L - 5L', '5L+'].map((range) => (
                                        <label key={range} className="relative cursor-pointer group">
                                            <input type="radio" name="budget" className="peer sr-only" />
                                            <div className="px-1 py-3 text-center border border-stone-200 rounded-xl peer-checked:bg-[#c5a059] peer-checked:border-[#c5a059] peer-checked:text-white transition-all text-[10px] font-bold hover:border-[#c5a059]">
                                                {range}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] px-1">Message</label>
                                <textarea rows={4} className="w-full px-6 py-4 bg-white border border-stone-200 rounded-2xl outline-none focus:border-[#c5a059] transition-all resize-none" placeholder="Tell us more about your dream project..." />
                            </div>

                            <button className="w-full py-5 bg-[#c5a059] text-white font-bold rounded-2xl shadow-xl hover:bg-[#4d3b1a] transition-all duration-300 flex items-center justify-center gap-3 active:scale-95">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mt-40 space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-[10px] font-bold text-[#c5a059] uppercase tracking-[0.4em]">Our Process</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4d3b1a]">How we bring your vision to life</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-stone-50 group">
                            <Image
                                src="/v4/contact_process_ill.png"
                                alt="Consultation Process"
                                fill
                                className="object-contain p-12 group-hover:scale-105 transition-transform duration-[5s]"
                            />
                            <div className="absolute inset-x-12 bottom-12 bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-xl">
                                <p className="text-[#4d3b1a] font-serif italic text-lg leading-relaxed">
                                    "Your journey begins with a conversation. We map out every detail before the first hammer strikes."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {[
                                { step: '01', title: 'Consultation', desc: 'Book a free sessions where our designers understand your lifestyle and functional needs.' },
                                { step: '02', title: 'Design Proposal', desc: 'Visualize your home with bespoke 3D renders and detailed technical drawings tailored for you.' },
                                { step: '03', title: 'Material Selection', desc: 'Visit our experience centers to touch, feel and finalize finishes from our curated library.' },
                                { step: '04', title: 'Expert Execution', desc: 'Watch your dream unfold as our skilled craftsmen bring the digital vision to physical reality.' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-8 group"
                                >
                                    <span className="text-4xl md:text-5xl font-serif font-bold text-stone-200 group-hover:text-[#c5a059] transition-colors">{item.step}</span>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#4d3b1a]">{item.title}</h3>
                                        <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="mt-40 bg-stone-900 rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c5a059] opacity-10 blur-[120px] rounded-full" />
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Frequently asked questions before getting started.</h2>
                            <p className="text-stone-400 font-light text-lg">Quick answers to help you prepare for your first design session with EVOLX Studio.</p>
                        </div>
                        <div className="space-y-8">
                            {[
                                { q: "Is the first consultation free?", a: "Yes, our initial 45-minute discovery session is completely complimentary." },
                                { q: "Do you offer financing?", a: "We have partnered with leading banks for easy EMI options up to 60 months." },
                                { q: "What is the minimum budget?", a: "We cater to projects starting from 50k for specific room makeovers up to multi-crore luxury villas." }
                            ].map((faq, idx) => (
                                <div key={idx} className="space-y-2 border-b border-white/10 pb-8">
                                    <p className="font-bold text-[#c5a059] text-sm uppercase tracking-widest">Question {idx + 1}</p>
                                    <h4 className="text-xl font-serif font-medium">{faq.q}</h4>
                                    <p className="text-stone-400 font-light">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactContent;
