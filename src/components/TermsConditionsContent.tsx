"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, FileText, Gavel } from "lucide-react";

const TermsConditionsContent = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Simple Header */}
            <section className="py-24 bg-[#eb595f] text-white">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-white text-[10px] font-black tracking-[0.4em] uppercase mb-4 block drop-shadow-sm">EVOLX STUDIO</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-sm">Terms & Conditions</h1>
                    <p className="text-white/80 font-medium">Agreement Version: 4.2 | Last Revision: Jan 2024</p>
                </div>
            </section>

            {/* Document Content */}
            <section className="py-32 max-w-4xl mx-auto px-6">
                <div className="space-y-24">
                    {/* Summary Card */}
                    <div className="p-12 bg-stone-50 rounded-[3rem] border border-stone-100 flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#eb595f] shadow-xl shrink-0">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#2d2412]">TL;DR Summary</h3>
                            <p className="text-stone-500 font-light leading-relaxed">
                                We're committed to high-quality design and professional service. These terms ensure a
                                mutual understanding of project timelines, payment structures, and our 10-year warranty
                                commitment to you.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <section className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-[#2d2412] flex items-center gap-4">
                                <span className="text-[#eb595f]/20">01</span> Scope of Services
                            </h2>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                EVOLX Studio provides tech-enabled interior design, modular manufacturing, and
                                installation services. The specific deliverables for your project are outlined
                                in your individual 'Design Proposal' and 'Project Quotation'.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-[#2d2412] flex items-center gap-4">
                                <span className="text-[#eb595f]/20">02</span> Payment Milestones
                            </h2>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                To maintain our 45-day delivery promise, we follow a strict payment schedule:
                                10% on booking, 40% on design finalization, and 50% prior to factory dispatch.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-[#2d2412] flex items-center gap-4">
                                <span className="text-[#eb595f]/20">03</span> Project Timeline
                            </h2>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                The 45-day cycle begins after 'Design Sign-off' and receipt of the second payment milestone.
                                Delays in customer approvals or site readiness may impact the final delivery date.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-[#2d2412] flex items-center gap-4">
                                <span className="text-[#eb595f]/20">04</span> Intellectual Property
                            </h2>
                            <p className="text-stone-600 leading-relaxed font-light text-lg">
                                All design concepts, 3D visualizations, and proprietary modular configurations created by
                                EVOLX Studio remain our intellectual property until full project handover.
                            </p>
                        </section>
                    </div>

                    <div className="p-12 bg-[#eb595f] rounded-[3rem] text-white space-y-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />
                        <div className="flex gap-6 items-center relative z-10">
                            <Gavel className="w-8 h-8 text-white" />
                            <h3 className="text-2xl font-serif font-bold drop-shadow-sm">Governing Law</h3>
                        </div>
                        <p className="text-white/60 font-light leading-relaxed text-lg">
                            This agreement and any dispute or claim arising out of it shall be governed by and
                            construed in accordance with the laws of India. Any legal proceedings will be
                            subject to the exclusive jurisdiction of the courts in Gurugram, Haryana.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsConditionsContent;
