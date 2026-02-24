"use client";

import { motion } from "framer-motion";

const V3VideoBanner = () => {
    return (
        <section className="py-20 bg-ivory overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative aspect-video rounded-[60px] overflow-hidden shadow-[0_50px_100px_rgba(77,59,26,0.2)]"
                >
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" alt="Virtual Tour" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gold-dark/80 via-transparent to-transparent flex flex-col items-center justify-center text-center p-12">
                        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center mb-8 cursor-pointer hover:scale-110 transition-transform group">
                            <span className="text-white text-3xl transform translate-x-1 group-hover:text-gold-soft transition-colors">▶</span>
                        </div>
                        <h3 className="text-4xl md:text-6xl font-serif text-white mb-6">Take a Virtual Tour <span className="italic font-light">of our Experience Centre</span></h3>
                        <p className="text-ivory/60 text-lg uppercase tracking-widest font-black max-w-xl">See the technical brilliance and royal finishes in a 360° walkthrough</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default V3VideoBanner;
