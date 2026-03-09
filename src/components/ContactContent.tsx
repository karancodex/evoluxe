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
                        className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#2d2412] leading-tight"
                    >
                        Let&apos;s Create <br className="hidden sm:block" /> <span className="italic text-[#eb595f] font-normal">Something Beautiful</span>
                    </motion.h1>
                    <p className="text-stone-500 text-lg md:text-xl font-normal">Visit our experience centers or talk to our experts today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="bg-[#2d2412] text-white p-6 sm:p-12 rounded-[3rem] shadow-xl">
                            <h2 className="text-3xl font-bold mb-10">Get in Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0 group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-lg md:text-xl font-bold">+91 7744 80 6644</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0 group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg md:text-xl font-bold">Info@evolxstudio.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#eb595f] shrink-0 group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Pune Experience Center</p>
                                        <p className="text-lg md:text-xl font-bold leading-relaxed">
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
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center shadow-sm">
                                <p className="text-3xl font-bold text-[#eb595f]">10+</p>
                                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Years Warranty</p>
                            </div>
                            <div className="bg-white p-8 rounded-3xl border border-stone-100 text-center shadow-sm">
                                <p className="text-3xl font-bold text-[#eb595f]">45</p>
                                <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">Days Delivery</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-12 rounded-[3rem] border border-stone-100 shadow-xl">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#2d2412] mb-8">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Full Name</label>
                                    <input type="text" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="+91 XXXXX XXXXX" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Email Address</label>
                                    <input type="email" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Select Service</label>
                                    <select className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all appearance-none cursor-pointer">
                                        <option>Full Home Interiors</option>
                                        <option>Modular Kitchen</option>
                                        <option>Wardrobe Solutions</option>
                                        <option>Commercial Spaces</option>
                                        <option>Other Services</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Budget Range</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                                    {['10k - 50k', '50k - 1L', '1L - 3L', '3L - 5L', '5L+'].map((range) => (
                                        <label key={range} className="relative cursor-pointer group">
                                            <input type="radio" name="budget" className="peer sr-only" />
                                            <div className="px-1 py-3 text-center border border-stone-100 rounded-xl peer-checked:bg-[#eb595f] peer-checked:border-[#eb595f] peer-checked:text-white transition-all text-[10px] font-bold hover:border-[#eb595f]">
                                                {range}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Message</label>
                                <textarea rows={4} className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all resize-none" placeholder="Tell us more about your dream project..." />
                            </div>

                            <button className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-xl shadow-lg hover:bg-[#2d2412] transition-all duration-300 flex items-center justify-center gap-3">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Process Section */}
                <div className="mt-40 space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-[#eb595f] uppercase tracking-widest">Our Process</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412]">How we bring your vision to life</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-stone-100 group">
                            <Image
                                src="/v4/contact_process_ill.png"
                                alt="Consultation Process"
                                fill
                                className="object-contain p-12 group-hover:scale-105 transition-transform duration-[5s]"
                            />
                            <div className="absolute inset-x-12 bottom-12 bg-white/90 backdrop-blur-xl border border-stone-100 p-8 rounded-3xl shadow-xl">
                                <p className="text-[#2d2412] italic text-lg leading-relaxed font-normal">
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
                                    <span className="text-4xl md:text-5xl font-bold text-stone-100 group-hover:text-[#eb595f] transition-all">{item.step}</span>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#2d2412]">{item.title}</h3>
                                        <p className="text-stone-500 font-normal leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ Quick Links - Pure White Version */}
                <div className="mt-40 bg-white border border-stone-100 rounded-[3rem] p-10 md:p-20 shadow-xl overflow-hidden relative">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2d2412]">Frequently asked questions.</h2>
                            <p className="text-stone-500 font-normal text-lg">Quick answers to help you prepare for your first design session with EVOLX Studio.</p>
                        </div>
                        <div className="space-y-8">
                            {[
                                { q: "Is the first consultation free?", a: "Yes, our initial 45-minute discovery session is completely complimentary." },
                                { q: "Do you offer financing?", a: "We have partnered with leading banks for easy EMI options up to 60 months." },
                                { q: "What is the minimum budget?", a: "We cater to projects starting from 50k for specific room makeovers up to multi-crore luxury villas." }
                            ].map((faq, idx) => (
                                <div key={idx} className="space-y-2 border-b border-stone-50 pb-8 last:border-0 last:pb-0">
                                    <p className="font-bold text-[#eb595f] text-[10px] uppercase tracking-widest">Question {idx + 1}</p>
                                    <h4 className="text-xl font-bold text-[#2d2412]">{faq.q}</h4>
                                    <p className="text-stone-500 font-normal">{faq.a}</p>
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
