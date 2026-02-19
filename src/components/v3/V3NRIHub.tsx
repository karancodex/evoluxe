"use client";

import { motion } from "framer-motion";

const V3NRIHub = () => {
    return (
        <section id="nri-hub" className="py-32 relative overflow-hidden">
            {/* Background Texture/Accent */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/5 blur-[120px] -z-10" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-2 lg:order-1"
                >
                    <div className="bg-charcoal p-1 rounded-3xl border border-white/5 relative group">
                        {/* Mock Mobile App/Dashboard */}
                        <div className="bg-brand-black rounded-[22px] overflow-hidden aspect-[4/5] md:aspect-video lg:aspect-square flex flex-col">
                            <div className="bg-white/5 p-6 flex justify-between items-center border-b border-white/5">
                                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Project Portal</span>
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                                    <span className="text-[8px] uppercase tracking-widest text-emerald">Live Updates</span>
                                </div>
                            </div>
                            <div className="flex-1 p-8 flex flex-col gap-6">
                                <div className="w-full h-40 bg-white/5 rounded-xl animate-pulse" />
                                <div className="flex gap-4">
                                    <div className="w-1/2 h-24 bg-white/5 rounded-xl" />
                                    <div className="w-1/2 h-24 bg-gold/10 rounded-xl flex items-center justify-center">
                                        <span className="text-[8px] uppercase tracking-widest text-gold">Latest Site Photo</span>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                                    <div className="w-full h-2 bg-white/10 rounded-full" />
                                    <div className="w-1/2 h-2 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        </div>
                        {/* Status Label */}
                        <div className="absolute -bottom-8 -right-8 bg-gold p-8 rounded-2xl shadow-2xl hidden md:block">
                            <span className="text-black text-[10px] uppercase tracking-[0.4em] font-black italic">NRI Priority Hub</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="order-1 lg:order-2"
                >
                    <span className="text-gold text-[10px] uppercase tracking-[1em] mb-6 block font-bold">Global Presence, Local Care</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-ivory mb-10 leading-tight">
                        Designed in <span className="italic">Dubai</span>.<br />
                        Built in <span className="text-gold">Hyderabad</span>.
                    </h2>
                    <p className="text-ivory/60 text-lg md:text-xl font-light mb-12 leading-relaxed">
                        Being away shouldn't mean being out of the loop. Our specialized NRI Hub provides a 24/7 transparent gateway to your home's evolution.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <h4 className="text-ivory font-serif text-xl italic">Remote Tracking</h4>
                            <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose">
                                Daily site photos and technical milestone updates via your private dashboard.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-ivory font-serif text-xl italic">Flex-Time Consults</h4>
                            <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose">
                                Design sessions scheduled according to your timezone, not ours.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-ivory font-serif text-xl italic">Global Payments</h4>
                            <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose">
                                Secure international gateways ensuring hassle-free financial transitions.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-ivory font-serif text-xl italic">Concierge Handover</h4>
                            <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose">
                                We handle everything from IKEA deliveries to utility setup before you arrive.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default V3NRIHub;
