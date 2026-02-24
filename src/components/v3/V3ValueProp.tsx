"use client";

import { motion } from "framer-motion";

const V3ValueProp = () => {
    return (
        <section id="value" className="py-32 bg-gold-dark text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold rounded-full filter blur-[180px] -translate-y-1/2 translate-x-1/2 opacity-20" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold-soft rounded-full filter blur-[150px] translate-y-1/2 -translate-x-1/2 opacity-10" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                    <span className="text-gold-soft text-[11px] uppercase tracking-[1em] font-black italic">The Financial Blueprint</span>
                    <h2 className="text-5xl md:text-8xl font-serif leading-[1.05]">
                        Your investment, <br />
                        <span className="italic text-gold-soft font-light">Evolved</span> & Secured.
                    </h2>
                    <p className="text-ivory/60 text-lg md:text-2xl font-light leading-relaxed max-w-lg italic">
                        In the Indian market, interior design is often a black box of hidden commissions. At EVOLX Studio, we return that value to you.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/10">
                        <div className="space-y-4 group">
                            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold-soft border border-gold-soft/20 group-hover:bg-gold transition-all">
                                <span>💰</span>
                            </div>
                            <h4 className="text-gold-soft text-[12px] uppercase tracking-widest font-black italic">No Hidden Markup</h4>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
                                Traditional brands take up to 30% commission. We offer direct-path pricing from factory to your home.
                            </p>
                        </div>
                        <div className="space-y-4 group">
                            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold-soft border border-gold-soft/20 group-hover:bg-gold transition-all">
                                <span>🏢</span>
                            </div>
                            <h4 className="text-gold-soft text-[12px] uppercase tracking-widest font-black italic">Direct Factory Procure</h4>
                            <p className="text-white/40 text-[10px] uppercase tracking-widest leading-loose">
                                Every hinge, sheet, and finish is sourced directly, ensuring you get the highest grade for the best value.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative p-1 bg-gradient-to-br from-gold-soft/30 to-transparent rounded-[50px]">
                    <div className="bg-gold-dark/80 backdrop-blur-3xl p-12 md:p-16 rounded-[48px] border border-white/10 relative overflow-hidden group">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <div className="space-y-12">
                            <div className="pb-10 border-b border-white/5 relative">
                                <span className="text-gold-soft text-7xl md:text-8xl font-serif">30%</span>
                                <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-4 font-black italic">Markup Saved vs Competitors</p>
                                <div className="absolute top-0 right-0 text-3xl opacity-20">📈</div>
                            </div>
                            <div className="pb-10 border-b border-white/5 relative">
                                <span className="text-gold-soft text-7xl md:text-8xl font-serif">₹0</span>
                                <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-4 font-black italic">Hidden Brokerage Costs</p>
                                <div className="absolute top-0 right-0 text-3xl opacity-20">🚫</div>
                            </div>
                            <div className="relative">
                                <span className="text-gold-soft text-7xl md:text-8xl font-serif">10Y</span>
                                <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mt-4 font-black italic">Investment Protection Warranty</p>
                                <div className="absolute top-0 right-0 text-3xl opacity-20">🛡️</div>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-col md:flex-row gap-6">
                            <button className="flex-1 bg-white text-gold-dark py-5 rounded-2xl text-[11px] uppercase tracking-[0.4em] font-black hover:bg-gold hover:text-white transition-all shadow-2xl">
                                Verify Pricing
                            </button>
                            <button className="flex-1 bg-gold text-white py-5 rounded-2xl text-[11px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-gold-dark transition-all border border-gold-soft/20">
                                Get Estimate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default V3ValueProp;
