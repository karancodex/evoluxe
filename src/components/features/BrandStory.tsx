"use client";

import { motion } from "framer-motion";

export default function BrandStory() {
    return (
        <section className="bg-white text-charcoal section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
                {/* Left Side: Brand Overview (Solid readability) */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">
                        Brand Overview
                    </span>
                    <h2 className="text-charcoal mb-10 leading-[1.1] font-serif">
                        EVOLUXE
                    </h2>
                    <div className="space-y-8 max-w-lg">
                        <p className="text-xl leading-relaxed text-charcoal font-body">
                            A blend of <span className="text-gold font-bold">Evolve + Luxury</span>, symbolizing the continuous evolution of interior spaces through timeless, sophisticated design.
                        </p>
                        <div className="h-[2px] w-20 bg-gold" />
                        <p className="text-sm uppercase tracking-[0.3em] text-gold font-bold font-sans">
                            Where evolution meets luxury.
                        </p>
                    </div>
                </motion.div>

                {/* Right Side: Colorful Brand Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative aspect-square md:aspect-[4/5] overflow-hidden shadow-2xl"
                >
                    <img
                        src="/assets/brand_vision.png"
                        alt="Evoluxe Luxury Vision"
                        className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-8 bg-charcoal text-white">
                        <span className="text-[9px] uppercase tracking-[0.4em] block mb-2 text-gold">Architectural Vision</span>
                        <p className="font-serif italic text-2xl uppercase tracking-tighter">The Future of Living.</p>
                    </div>
                </motion.div>
            </div>

            {/* Mission & Vision Grid with Colorful Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-32 border-t border-charcoal/10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-10"
                >
                    <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-lg">
                        <img src="/assets/vision_colorful.png" className="w-full h-full object-cover" alt="Brand Vision" />
                    </div>
                    <div>
                        <h4 className="text-gold text-[11px] uppercase tracking-[0.5em] mb-6 font-bold">Brand Vision</h4>
                        <p className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed italic">
                            "To redefine modern luxury by crafting interior spaces that evolve with culture, lifestyle, and innovation—while maintaining an enduring sense of refinement and comfort."
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-10"
                >
                    <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-lg">
                        <img src="/assets/mission_colorful.png" className="w-full h-full object-cover" alt="Brand Mission" />
                    </div>
                    <div>
                        <h4 className="text-gold text-[11px] uppercase tracking-[0.5em] mb-6 font-bold">Brand Mission</h4>
                        <p className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed italic">
                            "To deliver transformative design experiences that blend heritage, innovation, and bespoke craftsmanship elevating everyday living through thoughtful and luxurious spatial design."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
