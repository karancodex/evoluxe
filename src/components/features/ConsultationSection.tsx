"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ConsultationSection() {
    const [formState, setFormState] = useState("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 2000);
    };

    return (
        <section className="bg-white text-charcoal section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[1em] mb-8 block font-bold">Connect with the Atelier</span>
                    <h2 className="text-charcoal mb-10 leading-[1.1] text-6xl md:text-8xl font-serif">
                        Bespoke <br />
                        <span className="italic text-gold-soft">Inquiry.</span>
                    </h2>
                    <p className="text-charcoal/50 text-xl font-light leading-relaxed max-w-sm mb-12 italic font-serif">
                        "Your vision is our blueprint. Let us curate an environment that breathes with your soul."
                    </p>
                    <div className="flex items-center gap-6 text-charcoal/40 text-[9px] uppercase tracking-[0.6em] font-bold">
                        <span>Appointment Only</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>Global Dispatch</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-charcoal/5 backdrop-blur-3xl p-10 md:p-16 border border-charcoal/5 shadow-2xl relative rounded-[2px]"
                >
                    {formState === "success" ? (
                        <div className="text-center py-10">
                            <span className="text-gold text-[10px] uppercase tracking-[1em] block mb-6 font-black">Confirmed</span>
                            <h3 className="text-charcoal text-4xl font-serif italic mb-8">Your Journey Begins Shortly.</h3>
                            <button onClick={() => setFormState("idle")} className="text-gold text-[10px] uppercase tracking-[0.6em] font-bold border-b border-gold pb-1">New Inquiry</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 focus-within:border-gold transition-all">
                                <label className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Identity</label>
                                <input type="text" placeholder="NAME" className="bg-transparent border-none text-charcoal text-2xl font-serif outline-none placeholder:text-charcoal/5" required />
                            </div>
                            <div className="flex flex-col gap-4 border-b border-charcoal/10 pb-6 focus-within:border-gold transition-all">
                                <label className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">Communication</label>
                                <input type="email" placeholder="EMAIL" className="bg-transparent border-none text-charcoal text-2xl font-serif outline-none placeholder:text-charcoal/5" required />
                            </div>
                            <button
                                type="submit"
                                disabled={formState === "submitting"}
                                className="w-full py-10 bg-charcoal text-white text-[11px] uppercase tracking-[1em] font-bold hover:bg-gold transition-all duration-700"
                            >
                                {formState === "submitting" ? "Processing..." : "Dispatch Briefing"}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
