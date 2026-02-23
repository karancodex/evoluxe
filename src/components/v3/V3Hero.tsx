"use client";

import { motion } from "framer-motion";

const V3Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-amethyst-lightest">
            {/* Background Image with Amethyst Tint Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10s] scale-110 motion-safe:animate-[slow-zoom_20s_infinite_alternate]"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2064&auto=format&fit=crop')",
                }}
            >
                {/* Gradient overlay to ensure text readability with Amethyst hues */}
                <div className="absolute inset-0 bg-gradient-to-r from-amethyst-dark/60 via-amethyst-dark/20 to-transparent" />
                <div className="absolute inset-0 bg-amethyst-primary/10 mix-blend-overlay" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-white"
                >
                    <span className="inline-block px-5 py-2 bg-amethyst-primary/30 backdrop-blur-md border border-amethyst-light/30 text-white text-[11px] uppercase tracking-[0.4em] font-black rounded-full mb-8">
                        Evolved Luxury Interiors
                    </span>
                    <h1 className="text-5xl md:text-8xl font-serif leading-[1.05] mb-10 drop-shadow-2xl">
                        Home to <span className="italic text-amethyst-light font-light">Beautiful</span><br />
                        Smart <span className="font-bold">Interiors</span>.
                    </h1>
                    <p className="text-amethyst-lightest/80 text-lg md:text-2xl max-w-xl mb-12 leading-relaxed font-light drop-shadow-lg">
                        We blend technical precision with royal aesthetics to create homes that resonate with your soul. Transparent pricing, factory finish.
                    </p>

                    <div className="flex flex-wrap gap-8 items-center mb-16">
                        <button className="px-12 py-5 bg-amethyst-primary text-white text-[11px] uppercase tracking-[0.4em] font-black rounded-xl hover:bg-white hover:text-amethyst-dark transition-all shadow-2xl shadow-amethyst-primary/30 active:scale-95">
                            Book Design Preview
                        </button>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-amethyst-dark transition-all">
                                <span className="text-xl">▶</span>
                            </div>
                            <span className="text-[10px] uppercase tracking-widest font-black">Watch Film</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-12 opacity-60">
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif">100k+</span>
                            <span className="text-[8px] uppercase tracking-widest font-bold">Happy Homes</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/20" />
                        <div className="flex flex-col">
                            <span className="text-2xl font-serif">10 Yrs</span>
                            <span className="text-[8px] uppercase tracking-widest font-bold">Warranty</span>
                        </div>
                    </div>
                </motion.div>

                {/* Lead Form - Following similar layout as reference */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="bg-white/95 backdrop-blur-2xl p-10 md:p-12 rounded-[40px] shadow-[0_50px_100px_rgba(77,59,26,0.15)] border border-amethyst-lightest w-full max-w-md relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amethyst-lightest rounded-full -translate-x-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-50" />

                        <h3 className="text-3xl font-serif text-amethyst-dark mb-3">Enquire <span className="italic">Now</span></h3>
                        <p className="text-amethyst-primary text-[10px] uppercase tracking-widest mb-10 font-black">Transform your space in 45 days</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-amethyst-lightest/50 border border-amethyst-light/20 rounded-2xl outline-none focus:border-amethyst-primary focus:bg-white transition-all text-amethyst-dark placeholder:text-amethyst-dark/40" />
                            </div>
                            <div className="space-y-2">
                                <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 bg-amethyst-lightest/50 border border-amethyst-light/20 rounded-2xl outline-none focus:border-amethyst-primary focus:bg-white transition-all text-amethyst-dark placeholder:text-amethyst-dark/40" />
                            </div>
                            <div className="space-y-2">
                                <select className="w-full px-6 py-4 bg-amethyst-lightest/50 border border-amethyst-light/20 rounded-2xl outline-none focus:border-amethyst-primary focus:bg-white transition-all text-amethyst-dark/60 appearance-none">
                                    <option>Select Property Type</option>
                                    <option>1 BHK</option>
                                    <option>2 BHK</option>
                                    <option>3 BHK</option>
                                    <option>4+ BHK / Villa</option>
                                </select>
                            </div>

                            <button className="w-full bg-amethyst-primary text-white py-5 rounded-2xl text-[11px] uppercase tracking-[0.4em] font-black mt-4 hover:bg-amethyst-dark transition-all shadow-xl shadow-amethyst-primary/30 active:scale-95">
                                Get Free Quote
                            </button>

                            <div className="flex items-center justify-center gap-2 mt-6">
                                <div className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
                                <span className="text-[9px] uppercase tracking-widest text-amethyst-dark/50 font-bold">12 Active Experts Online</span>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Slow Zoom animation defined locally */}
            <style jsx>{`
                @keyframes slow-zoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.15); }
                }
            `}</style>
        </section>
    );
};

export default V3Hero;
