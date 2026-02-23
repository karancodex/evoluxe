"use client";

import { motion } from "framer-motion";

const V3FinalCTA = () => {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-gold-dark rounded-[80px] p-12 md:p-24 flex flex-col items-center text-center overflow-hidden shadow-2xl"
                >
                    {/* Decorative Background */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full filter blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    </div>

                    <div className="relative z-10 space-y-12 max-w-4xl">
                        <span className="text-gold-soft text-[11px] uppercase tracking-[1.5em] font-black italic">Start Your Evolution</span>
                        <h2 className="text-5xl md:text-8xl font-serif text-white leading-tight">
                            Your dream home <br />
                            <span className="italic font-light text-gold-soft">is just a design away</span>.
                        </h2>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                            <button className="w-full md:w-auto px-16 py-6 bg-gold text-white text-[12px] uppercase tracking-[0.4em] font-black rounded-2xl hover:bg-white hover:text-gold-dark transition-all shadow-2xl shadow-gold/30 active:scale-95">
                                Free 3D Design Session
                            </button>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-[1px] bg-white/20 hidden md:block" />
                                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Or call us at</span>
                                <span className="text-white text-lg font-bold tracking-widest transition-colors hover:text-gold-soft cursor-pointer">+91 40 2345 6789</span>
                            </div>
                        </div>

                        <div className="pt-12 flex flex-wrap justify-center gap-12 border-t border-white/5 opacity-30">
                            <span className="text-[9px] uppercase tracking-widest font-black">Limited Free Slots for March</span>
                            <span className="text-[9px] uppercase tracking-widest font-black">Zero Booking Fees</span>
                            <span className="text-[9px] uppercase tracking-widest font-black">Hyderabad Local Experts</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default V3FinalCTA;
