"use client";

import { motion } from "framer-motion";

const CollectionCard = ({ title, image, index }: { title: string, image: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative aspect-[4/5] overflow-hidden rounded-[32px] cursor-pointer"
    >
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-amethyst-dark/90 via-amethyst-dark/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <h4 className="text-2xl font-serif text-white group-hover:italic transition-all mb-2">{title}</h4>
            <span className="text-amethyst-light text-[9px] uppercase tracking-[0.4em] font-black opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">Explore Designs →</span>
        </div>
    </motion.div>
);

const V3Collections = () => {
    const collections = [
        { title: "Modular Kitchens", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop" },
        { title: "Luxury Wardrobes", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2070&auto=format&fit=crop" },
        { title: "Living Room Art", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop" },
        { title: "Master Bedrooms", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2070&auto=format&fit=crop" }
    ];

    return (
        <section className="py-32 bg-amethyst-lightest">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="space-y-4">
                        <span className="text-amethyst-primary text-[11px] uppercase tracking-[0.6em] font-black italic">Collection 2026</span>
                        <h2 className="text-4xl md:text-7xl font-serif text-amethyst-dark leading-tight">
                            Be inspired with <br />
                            our <span className="italic font-light">modular designs</span>.
                        </h2>
                    </div>
                    <button className="px-10 py-4 border-2 border-amethyst-primary text-amethyst-primary text-[10px] uppercase tracking-widest font-black rounded-xl hover:bg-amethyst-primary hover:text-white transition-all">
                        View All Collections
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {collections.map((c, i) => (
                        <CollectionCard key={i} {...c} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default V3Collections;
