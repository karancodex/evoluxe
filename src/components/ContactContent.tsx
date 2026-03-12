"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { useConsultation } from './providers/ConsultationProvider';

const ContactContent = () => {
    const { openConsultation } = useConsultation();
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <section className="py-24 px-6 max-w-[1400px] mx-auto">
                <div className="text-center mb-24 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-8xl font-bold text-[#2d2412] leading-tight"
                    >
                        Let&apos;s Create <br className="hidden sm:block" /> <span className="italic text-[#eb595f] font-normal">Something Beautiful</span>
                    </motion.h1>
                    <p className="text-stone-500 text-lg md:text-xl font-normal text-center max-w-2xl mx-auto">Visit our experience centers or talk to our experts today to start your home evolution.</p>
                </div>

                {/* 2. MAIN CONTACT & FORM */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                        <div className="bg-[#2d2412] text-white p-6 sm:p-12 rounded-[3rem] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#eb595f]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
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

                    <div className="bg-white p-6 sm:p-12 rounded-[3rem] border border-stone-100 shadow-xl overflow-hidden min-h-[500px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            {!submitted ? (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="w-full"
                                >
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#2d2412] mb-8 font-serif">Send a Message</h2>
                                    <form
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            const form = e.target as HTMLFormElement;
                                            const formData = new FormData(form);
                                            const data = Object.fromEntries(formData.entries());
                                            try {
                                                const response = await fetch("https://formsubmit.co/ajax/evolxinteriordesign@gmail.com", {
                                                    method: "POST",
                                                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                                                    body: JSON.stringify(data)
                                                });
                                                if (response.ok) {
                                                    setSubmitted(true);
                                                    form.reset();
                                                } else {
                                                    alert("Something went wrong.");
                                                }
                                            } catch (err) {
                                                alert("Failed to send message.");
                                            }
                                        }}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Full Name</label>
                                                <input required name="Full Name" type="text" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="John Doe" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Phone Number</label>
                                                <input required name="Phone Number" type="tel" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="+91 XXXXX XXXXX" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Email Address</label>
                                                <input required name="Email" type="email" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all" placeholder="john@example.com" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Select Service</label>
                                                <select name="Service" className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all appearance-none cursor-pointer">
                                                    <option>Full Home Interiors</option>
                                                    <option>Modular Kitchen</option>
                                                    <option>Wardrobe Solutions</option>
                                                    <option>Commercial Spaces</option>
                                                    <option>Other Services</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest px-1">Message</label>
                                            <textarea required name="Message" rows={4} className="w-full px-6 py-4 bg-stone-50 border border-stone-100 rounded-xl outline-none focus:bg-white focus:border-[#eb595f] transition-all resize-none" placeholder="Tell us more about your dream project..." />
                                        </div>

                                        <button type="submit" className="w-full py-5 bg-[#eb595f] text-white font-bold rounded-xl shadow-lg hover:bg-[#2d2412] transition-all duration-300 flex items-center justify-center gap-3">
                                            Send Message <Send className="w-5 h-5" />
                                        </button>
                                    </form>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center space-y-8 py-12"
                                >
                                    <div className="w-20 h-20 bg-[#eb595f] rounded-full flex items-center justify-center mx-auto text-white shadow-2xl">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Message Sent</h2>
                                        <p className="text-stone-500 font-light max-w-xs mx-auto leading-relaxed">
                                            Thank you for reaching out. We will contact you within the next 2 hours.
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="px-8 py-4 border-2 border-stone-100 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-[#eb595f] transition-all"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3. WHY CHOOSE US (NEW) */}
                <div className="mt-40 bg-stone-50 py-24 rounded-[4rem] px-10">
                    <div className="text-center mb-16">
                        <span className="text-[11px] font-bold text-[#eb595f] uppercase tracking-widest">WHY EVOLUXE</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412] mt-4">Unmatched benefits</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {[
                            { title: "Direct Factory Pricing", desc: "No middlemen. We manufacture our own furniture to pass the savings to you.", icon: "🏭" },
                            { title: "Precision Engineering", desc: "Every joint and finish is machine-cut for millimetric accuracy.", icon: "⚙️" },
                            { title: "Lifetime Support", desc: "Our relationship doesn't end at handover. We're here for any service needs.", icon: "🤝" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-[#2d2412]">{item.title}</h3>
                                <p className="text-stone-500 leading-relaxed font-light">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. PROCESS SECTION */}
                <div className="mt-40 space-y-20">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-[#eb595f] uppercase tracking-widest">Our Process</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412]">Bringing vision to life</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-stone-100 group">
                            <Image
                                src="/v4/contact_process_ill.png"
                                alt="Consultation Process"
                                fill
                                className="object-contain p-12 group-hover:scale-105 transition-transform duration-[5s]"
                            />
                        </div>

                        <div className="space-y-12">
                            {[
                                { step: '01', title: 'Consultation', desc: 'Book a free sessions where our designers understand your lifestyle.' },
                                { step: '02', title: 'Design Proposal', desc: 'Visualize your home with bespoke 3D renders tailored for you.' },
                                { step: '03', title: 'Material Selection', desc: 'Visit our experience centers to touch and finalize finishes.' },
                                { step: '04', title: 'Expert Execution', desc: 'Watch your dream unfold as our craftsmen bring the vision to reality.' }
                            ].map((item, idx) => (
                                <motion.div key={idx} className="flex gap-8 group">
                                    <span className="text-4xl md:text-5xl font-bold text-stone-200 group-hover:text-[#eb595f] transition-all">{item.step}</span>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold text-[#2d2412]">{item.title}</h3>
                                        <p className="text-stone-500 font-normal leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 5. LOCATIONS / MAP SECTION (NEW) */}
                <div className="mt-40 text-center space-y-12">
                    <div className="space-y-4">
                        <span className="text-[11px] font-bold text-[#eb595f] uppercase tracking-widest">Experience Centers</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2d2412]">Come visit us</h2>
                    </div>
                    <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-stone-100 shadow-2xl">
                        <Image src="/v4/luxury_living_1.png" alt="Experience Center" fill className="object-cover" />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-12 text-left">
                            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                                <div className="text-white space-y-2">
                                    <h4 className="text-2xl font-bold">Pune Flagship Studio</h4>
                                    <p className="text-stone-300 font-light">New Nana Peth, Opp Padamji Police Station, Pune</p>
                                </div>
                                <button className="px-8 py-4 bg-[#eb595f] text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 6. FAQ SECTION */}
                <div className="mt-40 bg-white border border-stone-100 rounded-[3rem] p-10 md:p-20 shadow-xl relative">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#2d2412]">Frequently asked questions.</h2>
                            <p className="text-stone-500 font-normal text-lg">Quick answers to help you prepare for your first session.</p>
                        </div>
                        <div className="space-y-8">
                            {[
                                { q: "Is the first consultation free?", a: "Yes, our initial 45-minute discovery session is completely complimentary." },
                                { q: "Do you offer financing?", a: "We have partnered with leading banks for easy EMI options up to 60 months." },
                                { q: "What is the minimum budget?", a: "We work with projects starting from ₹50k up to luxury villas." }
                            ].map((faq, idx) => (
                                <div key={idx} className="space-y-2 border-b border-stone-50 pb-8 last:border-0 last:pb-0">
                                    <h4 className="text-xl font-bold text-[#2d2412]">{faq.q}</h4>
                                    <p className="text-stone-500 font-normal">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 7. SOCIAL CONNECT (NEW) */}
                <div className="mt-40 text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2d2412]">Follow the evolution</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-square relative rounded-2xl overflow-hidden group">
                                <Image src={`/v4/luxury_living_${(i % 3) + 1}.png`} alt="Insta" fill className="object-cover group-hover:scale-110 transition-all duration-700" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 8. QUICK CONTACT CHANNELS (NEW) */}
                <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-[#eb595f]/10 rounded-2xl flex items-center justify-center text-[#eb595f] mx-auto group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                            <MessageSquare className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold">Live Chat</h4>
                        <p className="text-stone-400 text-sm">Response time: ~5 mins</p>
                    </div>
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold">WhatsApp</h4>
                        <p className="text-stone-400 text-sm">Instant support</p>
                    </div>
                    <div className="p-10 bg-white border border-stone-100 rounded-[3rem] space-y-4 hover:shadow-2xl transition-all group">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-600 mx-auto group-hover:bg-green-600 group-hover:text-white transition-all">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-stone-400 text-sm">Official queries</p>
                    </div>
                </div>

                {/* 9. FINAL CTA SECTION (NEW) */}
                <div className="mt-40 bg-[#2d2412] rounded-[4rem] p-12 md:p-24 text-center space-y-8 overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-[#eb595f]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <h2 className="text-4xl md:text-7xl font-bold text-white relative z-10">Start your journey today.</h2>
                    <p className="text-stone-400 text-lg md:text-xl font-light relative z-10">Book your first design session and let's bring your dream home to life.</p>
                    <div className="relative z-10">
                        <button
                            onClick={openConsultation}
                            className="px-12 py-6 bg-[#eb595f] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-white hover:text-[#2d2412] transition-all transform hover:-translate-y-1 shadow-2xl"
                        >
                            Book Free Consultation
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactContent;
