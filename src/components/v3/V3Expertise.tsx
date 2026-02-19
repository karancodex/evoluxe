"use client";

import { motion } from "framer-motion";

const ExpertiseItem = ({ icon, title, desc, index }: { icon: string, title: string, desc: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex gap-8 p-10 rounded-[40px] bg-white shadow-xl hover:shadow-2xl transition-all border border-amethyst-lightest group"
    >
        <div className="w-20 h-20 rounded-full bg-amethyst-lightest flex-shrink-0 flex items-center justify-center text-4xl group-hover:bg-amethyst-primary transition-all duration-500 group-hover:rotate-[360deg]">
            <span className="group-hover:brightness-0 group-hover:invert transition-all">{icon}</span>
        </div>
        <div className="space-y-3">
            <h4 className="text-xl font-serif text-amethyst-dark group-hover:text-amethyst-primary transition-colors font-bold">{title}</h4>
            <p className="text-amethyst-dark/50 text-[10px] uppercase tracking-widest leading-relaxed font-black">{desc}</p>
        </div>
    </motion.div>
);

const V3Expertise = () => {
    const expertise = [
        { icon: "✨", title: "End-to-End Execution", desc: "From design to civil work to final delivery, we manage it all." },
        { icon: "📜", title: "Transparent BOQ", desc: "Line-by-line pricing of every material used. No hidden costs." },
        { icon: "🏭", title: "Factory-Direct Finish", desc: "Precision manufacturing ensures a level of finish local carpenters cannot match." },
        { icon: "✅", title: "146 Quality Checks", desc: "Rigorous inspection at every stage of the installation process." }
    ];

    return (
        <section className="py-32 bg-amethyst-lightest">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-amethyst-primary text-[11px] uppercase tracking-[1em] font-black italic">The Evoluxe Edge</span>
                    <h2 className="text-4xl md:text-7xl font-serif text-amethyst-dark">Why we <span className="italic font-light">stand out?</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {expertise.map((item, i) => (
                        <ExpertiseItem key={i} {...item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default V3Expertise;
