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
            <div className="h-screen flex items-center justify-center bg-white text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-8 font-bold">Request Received</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a1a] mb-8">Initiating Your Design Journey.</h1>
                    <p className="text-[#4a4a4a] text-sm leading-relaxed max-w-md mx-auto mb-12 uppercase tracking-widest font-light">
                        Our design concierge will review your inquiry and contact you within 24 hours to schedule a private consultation.
                    </p>
                    <button
                        onClick={() => setFormState("idle")}
                        className="text-gold text-[10px] uppercase tracking-[0.3em] border-b border-gold/40 font-bold"
                    >
                        Return to Atelier
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 bg-[#fcfcfc] min-h-screen">
            <section className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <span className="text-gold text-[10px] uppercase tracking-[0.5em] block mb-8 font-bold">Concierge</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-[#1a1a1a] uppercase tracking-tighter mb-8 leading-none">
                            Private <br />
                            <span className="italic">Consultation.</span>
                        </h1>
                        <p className="text-[#4a4a4a] text-[10px] uppercase tracking-[0.3em] max-w-sm mx-auto leading-loose font-bold">
                            Every masterpiece begins with a conversation. Share your vision with our atelier.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        onSubmit={handleSubmit}
                        className="bg-white p-10 md:p-20 border border-black/5 shadow-2xl mb-40"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Project Type</label>
                                <select className="bg-transparent border-none text-black text-sm outline-none appearance-none cursor-pointer font-medium">
                                    <option className="bg-white">Luxury Residential</option>
                                    <option className="bg-white">Villa Design</option>
                                    <option className="bg-white">Boutique Hotel</option>
                                    <option className="bg-white">Commercial Space</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Property Size</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 500 SQM"
                                    className="bg-transparent border-none text-black text-sm outline-none placeholder:text-black/10"
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Location</label>
                                <input
                                    type="text"
                                    placeholder="CITY, COUNTRY"
                                    className="bg-transparent border-none text-black text-sm outline-none placeholder:text-black/10"
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Budget Range</label>
                                <select className="bg-transparent border-none text-black text-sm outline-none appearance-none cursor-pointer font-medium">
                                    <option className="bg-white">€200k — €500k</option>
                                    <option className="bg-white">€500k — €1M</option>
                                    <option className="bg-white">€1M+</option>
                                    <option className="bg-white">Undisclosed</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 border-b border-black/10 pb-4 mb-12 focus-within:border-gold transition-colors">
                            <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Vision Overview</label>
                            <textarea
                                rows={4}
                                placeholder="DESCRIBE THE LIFESTYLE YOU WISH TO CURATE..."
                                className="bg-transparent border-none text-black text-sm outline-none placeholder:text-black/10 resize-none font-medium"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 mb-20">
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 flex-1 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Full Name</label>
                                <input
                                    type="text"
                                    className="bg-transparent border-none text-black text-sm outline-none"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-2 border-b border-black/10 pb-4 flex-1 focus-within:border-gold transition-colors">
                                <label className="text-gold text-[8px] uppercase tracking-[0.4em] font-bold">Email Address</label>
                                <input
                                    type="email"
                                    className="bg-transparent border-none text-black text-sm outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-8 bg-[#1a1a1a] text-white text-[10px] uppercase tracking-[0.6em] font-bold hover:bg-gold hover:text-black transition-all duration-700"
                        >
                            Request Private Concierge Contact
                        </button>
                    </motion.form>
                </div>
            </section>
        </div>
    );
}
