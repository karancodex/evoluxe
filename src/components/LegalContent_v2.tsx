"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Scale, Info, CheckCircle, Mail, Phone, ChevronRight, Settings } from "lucide-react";

interface LegalContentProps {
    title: string;
}

const LegalContentV2 = ({ title }: LegalContentProps) => {
    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block"
                    >
                        <Shield className="w-16 h-16 text-[#D28D69] mx-auto mb-6" />
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">TRANSPARENCY & TRUST</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif font-bold text-[#2d2412]"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-stone-500 text-lg font-light max-w-2xl mx-auto"
                    >
                        Last updated: March 15, 2024. Your trust is our greatest asset. Learn how we protect your design data and maintain legal integrity.
                    </motion.p>
                </div>
            </section>

            {/* 2. QUICK NAVIGATION SECTION */}
            <section className="py-12 border-y border-stone-100 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
                    {["Overview", "Data Collection", "User Rights", "Cookies", "Liabilities", "Contact"].map((nav, i) => (
                        <button key={i} className="text-[10px] font-black tracking-widest uppercase text-stone-400 hover:text-[#D28D69] transition-colors">
                            {nav}
                        </button>
                    ))}
                </div>
            </section>

            {/* 3. INTRODUCTION / OVERVIEW */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[.4em] uppercase">01. INTRODUCTION</span>
                        <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Our commitment to you.</h2>
                    </div>
                    <p className="text-stone-500 text-lg font-light leading-relaxed">
                        At EVOLX Studio, we are committed to protecting your privacy and ensuring a transparent relationship. This document outlines our practices regarding information provided when you interact with our design services, website, or experience centers.
                    </p>
                    <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100 flex items-start gap-6">
                        <Info className="w-8 h-8 text-[#D28D69] shrink-0" />
                        <p className="text-sm text-stone-600 font-light leading-relaxed">
                            By using our services, you agree to the terms outlined in this {title}. We recommend reading this document carefully to understand your rights and our obligations.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. DATA COLLECTION / SERVICE DEFINITION (Section 2) */}
            <section className="py-24 px-6 bg-[#faf9f6]">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[.4em] uppercase">02. CORE POLICIES</span>
                        <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Detailed operations.</h2>
                    </div>
                    <div className="space-y-8">
                        {[
                            { title: "Information Gathering", icon: <Eye />, content: "We collect only the data necessary to provide a personalized design experience, including Floor plans, site photos, and contact preferences." },
                            { title: "Usage Protocols", icon: <Settings />, content: "Your information is used solely for project execution, timeline management, and providing lifetime warranty support." },
                            { title: "Third-party Safety", icon: <Lock />, content: "We never sell your data. We share only essential project details with our certified logistical and structural partners." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col md:flex-row gap-8 items-center border border-stone-100 hover:shadow-xl transition-all">
                                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center text-[#D28D69] shrink-0">
                                    {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold text-[#2d2412]">{item.title}</h4>
                                    <p className="text-stone-500 font-light leading-relaxed">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. COOKIES / INTELLECTUAL PROPERTY (Section 3) */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[.4em] uppercase">03. TECHNOLOGY & IP</span>
                        <h2 className="text-4xl font-serif font-bold text-[#2d2412]">Security measures.</h2>
                    </div>
                    <p className="text-stone-500 font-light text-lg leading-relaxed">
                        All designs, 3D renders, and technical drawings created by EVOLX Studio are the intellectual property of the studio. While customers are granted a license to use these for their specific project, unauthorized reproduction is strictly prohibited.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border border-stone-100 rounded-3xl space-y-4">
                            <h5 className="font-bold text-[#2d2412] flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D28D69]" /> Encryption</h5>
                            <p className="text-sm text-stone-400 font-light">All digital project folders are encrypted and stored on secure enterprise-grade servers.</p>
                        </div>
                        <div className="p-8 border border-stone-100 rounded-3xl space-y-4">
                            <h5 className="font-bold text-[#2d2412] flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D28D69]" /> Access Control</h5>
                            <p className="text-sm text-stone-400 font-light">Strict internal access controls ensure only your project team can view specific personal data.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. USER RIGHTS / OBLIGATIONS (Section 4) */}
            <section className="py-24 px-6 bg-[#2d2412] text-white">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-4">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[.4em] uppercase text-center w-full block">04. YOUR RIGHTS</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center">Take control of your data.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Right to Access", desc: "Request a full copy of all data and design files we hold regarding your project at any time." },
                            { title: "Right to Erasure", desc: "Request the deletion of your personal contact data from our marketing databases upon project completion." },
                            { title: "Right to Correction", desc: "Instantly update any incorrect project details, contact info, or site addresses." },
                            { title: "Project Portability", desc: "Export your 2D and 3D design files for your own personal use and archiving." }
                        ].map((right, i) => (
                            <div key={i} className="space-y-4 border-l border-white/10 pl-8">
                                <h4 className="text-xl font-bold text-[#D28D69]">{right.title}</h4>
                                <p className="text-stone-400 font-light leading-relaxed">{right.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CONTACT FOR LEGAL MATTERS (Section 5) */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-stone-50 rounded-[4rem] p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Legal inquiries.</h2>
                            <p className="text-stone-500 text-lg font-light leading-relaxed">
                                Have questions about our {title}? Our legal compliance team is here to provide clarity and resolve any concerns you may have.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer group">
                                <div className="w-14 h-14 bg-[#D28D69]/10 rounded-2xl flex items-center justify-center text-[#D28D69] group-hover:bg-[#D28D69] group-hover:text-white transition-all">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Email Our Team</p>
                                    <p className="text-lg font-bold text-[#2d2412]">legal@evolxstudio.com</p>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex items-center gap-6 hover:shadow-xl transition-all cursor-pointer group">
                                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Call Compliance Desk</p>
                                    <p className="text-lg font-bold text-[#2d2412]">+91 7744 80 6644</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. UPDATES TO POLICY (Section 6) */}
            <section className="py-24 px-6 text-center bg-[#faf9f6]">
                <div className="max-w-2xl mx-auto space-y-6">
                    <FileText className="w-12 h-12 text-stone-200 mx-auto" />
                    <h3 className="text-2xl font-serif font-bold text-[#2d2412]">Future Updates</h3>
                    <p className="text-stone-500 font-light leading-relaxed text-sm">
                        As technology and regulations evolve, we may update this {title} from time to time. We will notify major changes via email or a prominent notice on our website homepage.
                    </p>
                </div>
            </section>

            {/* 9. FINAL CTA (Section 7) */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Your evolution, <br /> safely handled.</h2>
                    <p className="text-stone-500 text-lg font-light">Continue exploring our design world with confidence.</p>
                    <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl">
                        Back to Home
                    </button>
                    <div className="pt-12 flex justify-center gap-12 text-[10px] font-black tracking-widest uppercase text-stone-300">
                        <button className="hover:text-[#D28D69] transition-colors">Privacy Policy</button>
                        <button className="hover:text-[#D28D69] transition-colors">Terms of Service</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LegalContentV2;
