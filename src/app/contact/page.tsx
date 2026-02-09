"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState("idle"); // idle | submitting | success

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => {
            setFormState("success");
        }, 2000);
    };

    if (formState === "success") {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-8">Request Received</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-gold-soft mb-8">Initiating Your Design Journey.</h1>
                    <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto mb-12 uppercase tracking-widest">
                        Our design concierge will review your inquiry and contact you within 24 hours to schedule a private consultation.
                    </p>
                    <button
                        onClick={() => setFormState("idle")}
                        className="text-gold text-[10px] uppercase tracking-[0.3em] border-b border-gold/20"
                    >
                        Return to Atelier
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 bg-[#0a0a0a] min-h-screen">
            <section className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-8">Concierge</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-gold-soft uppercase tracking-tighter mb-8">
                            Private <br />
                            <span className="italic">Consultation.</span>
                        </h1>
                        <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] max-w-sm mx-auto leading-loose">
                            Every masterpiece begins with a conversation. Share your vision with our atelier.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onSubmit={handleSubmit}
                        className="bg-charcoal/30 backdrop-blur-xl p-10 md:p-20 border border-white/5 mb-40"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Project Type</label>
                                <select className="bg-transparent border-none text-white text-sm outline-none appearance-none cursor-pointer">
                                    <option className="bg-charcoal">Luxury Residential</option>
                                    <option className="bg-charcoal">Villa Design</option>
                                    <option className="bg-charcoal">Boutique Hotel</option>
                                    <option className="bg-charcoal">Commercial Space</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Property Size</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 500 SQM"
                                    className="bg-transparent border-none text-white text-sm outline-none placeholder:text-white/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Location</label>
                                <input
                                    type="text"
                                    placeholder="CITY, COUNTRY"
                                    className="bg-transparent border-none text-white text-sm outline-none placeholder:text-white/20"
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Budget Range</label>
                                <select className="bg-transparent border-none text-white text-sm outline-none appearance-none cursor-pointer">
                                    <option className="bg-charcoal">€200k — €500k</option>
                                    <option className="bg-charcoal">€500k — €1M</option>
                                    <option className="bg-charcoal">€1M+</option>
                                    <option className="bg-charcoal">Undisclosed</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 border-b border-white/10 pb-4 mb-12">
                            <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Vision Overview</label>
                            <textarea
                                rows={4}
                                placeholder="DESCRIBE THE LIFESTYLE YOU WISH TO CURATE..."
                                className="bg-transparent border-none text-white text-sm outline-none placeholder:text-white/20 resize-none"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 mb-20">
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4 flex-1">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Full Name</label>
                                <input
                                    type="text"
                                    className="bg-transparent border-none text-white text-sm outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-white/10 pb-4 flex-1">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em]">Email Address</label>
                                <input
                                    type="email"
                                    className="bg-transparent border-none text-white text-sm outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-6 bg-gold text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-gold-soft transition-colors duration-500"
                        >
                            Request Private Concierge Contact
                        </button>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}
