"use client";

import { motion } from "framer-motion";

const ComparisonRow = ({ label, others, EVOLX Studio, index }: { label: string, others: string, EVOLX Studio: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 border-b border-amethyst-light/10 py-10 group hover:bg-white transition-all px-8 rounded-2xl"
    >
        <div className="flex flex-col gap-2 mb-6 md:mb-0">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-amethyst-primary">The Factor</span>
            <span className="text-amethyst-dark font-serif text-2xl italic group-hover:pl-4 transition-all">{label}</span>
        </div>
        <div className="flex flex-col gap-2 mb-8 md:mb-0 opacity-40 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amethyst-dark/40">Market Standard</span>
            <span className="text-amethyst-dark/60 text-sm md:text-base font-light font-black uppercase tracking-widest">{others}</span>
        </div>
        <div className="flex flex-col gap-2 transform group-hover:scale-105 transition-all">
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-amethyst-primary">The EVOLX Studio Way</span>
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amethyst-primary flex items-center justify-center text-white shadow-lg">
                    <span>✨</span>
                </div>
                <span className="text-amethyst-primary font-serif text-2xl font-black italic">{EVOLX Studio}</span>
            </div>
        </div>
    </motion.div>
);

const V3Comparison = () => {
    const data = [
        { label: "Commission Gap", others: "30% Hidden Markups", EVOLX Studio: "0% Hidden Fees" },
        { label: "Material Quality", others: "Standard Multi-Grade", EVOLX Studio: "BWP & HDHMR Certified" },
        { label: "Design Process", others: "Pre-set Template Library", EVOLX Studio: "Artisan Individual Design" },
        { label: "Delivery Speed", others: "90+ Days Average", EVOLX Studio: "45 Days Guaranteed" },
        { label: " NRI Services", others: "Standard Local Support", EVOLX Studio: "24/7 Global Priority" },
    ];

    return (
        <section id="comparison" className="py-32 bg-amethyst-lightest pb-10">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center text-center mb-24 space-y-6">
                    <span className="text-amethyst-primary text-[11px] uppercase tracking-[1em] font-black italic">Fair Trade Interior</span>
                    <h2 className="text-5xl md:text-8xl font-serif text-amethyst-dark">
                        The <span className="italic font-light">Transparency</span> <span className="font-bold underline underline-offset-[20px] decoration-amethyst-primary/20">Metric</span>
                    </h2>
                    <p className="max-w-xl text-amethyst-dark/30 text-[10px] uppercase tracking-[0.2em] font-black leading-relaxed pt-8">
                        We don't compete on volume. We compete on trust and technical superiority.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-3xl rounded-[60px] shadow-[0_50px_100px_rgba(77,59,26,0.1)] border border-white overflow-hidden p-4 md:p-12 mb-20">
                    <div className="space-y-4">
                        {data.map((item, i) => (
                            <ComparisonRow key={i} {...item} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default V3Comparison;
