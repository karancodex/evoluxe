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
        <section className="bg-[#050505] text-white section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[0.8em] mb-8 block">Contact Atelier</span>
                    <h2 className="text-white mb-10 leading-[1.1]">
                        Bespoke <br />
                        <span className="italic text-gold-soft">Manifesto.</span>
                    </h2>
                    <p className="text-white/40 text-lg leading-relaxed max-w-sm mb-12">
                        Share your vision and allow us to curate an environment that evolves with your identity.
                    </p>
                    <div className="flex items-center gap-6 opacity-30 text-[9px] uppercase tracking-[0.4em]">
                        <span>Appointment Only</span>
                        <div className="w-1 h-1 rounded-full bg-gold" />
                        <span>Global Dispatch</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-charcoal/30 backdrop-blur-xl p-10 md:p-16 border border-white/5 relative"
                >
                    {formState === "success" ? (
                        <div className="text-center py-10">
                            <span className="text-gold text-[10px] uppercase tracking-[1em] block mb-6">Confirmed</span>
                            <h3 className="text-white text-2xl font-serif italic mb-6">Your Journey Begins Shortly.</h3>
                            <button onClick={() => setFormState("idle")} className="text-gold text-[10px] uppercase tracking-[0.4em] border-b border-gold/30">New Inquiry</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 focus-within:border-gold transition-all">
                                <label className="text-gold text-[8px] uppercase tracking-[0.5em] opacity-60">Identity</label>
                                <input type="text" placeholder="NAME" className="bg-transparent border-none text-white text-xl font-serif outline-none placeholder:text-white/5" required />
                            </div>
                            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 focus-within:border-gold transition-all">
                                <label className="text-gold text-[8px] uppercase tracking-[0.5em] opacity-60">Communication</label>
                                <input type="email" placeholder="EMAIL" className="bg-transparent border-none text-white text-xl font-serif outline-none placeholder:text-white/5" required />
                            </div>
                            <button
                                type="submit"
                                disabled={formState === "submitting"}
                                className="w-full py-8 bg-gold text-black text-[10px] uppercase tracking-[0.8em] font-bold hover:bg-white transition-all duration-700"
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
