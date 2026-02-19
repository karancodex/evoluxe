"use client";

import { motion } from "framer-motion";

const CategorySection = ({ title, desc, images, index }: { title: string, desc: string, images: string[], index: number }) => (
    <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gold/10 pb-6">
            <div className="space-y-2">
                <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-black italic">Category 0{index + 1}</span>
                <h3 className="text-4xl font-serif text-charcoal">{title}</h3>
            </div>
            <p className="text-taupe/60 text-sm max-w-sm italic">{desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="group relative h-72 rounded-xl overflow-hidden shadow-md border border-gold/5"
                >
                    <img src={img} alt={`${title} design`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
                        <span className="text-white text-[10px] uppercase tracking-widest font-black">View Design Detail</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const V3CategoryShowcase = () => {
    const categories = [
        {
            title: "Modular Kitchens",
            desc: "Ergonomic designs optimized for Indian cooking habits. Heat and oil resistant surfaces.",
            images: [
                "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556909212-d5b604392998?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556912170-4537da39fd03?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop"
            ]
        },
        {
            title: "Wardrobes & Storage",
            desc: "Intelligent storage solutions that maximize every inch. Soft-close mechanisms as standard.",
            images: [
                "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1449247709967-319737036467?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1449247709967-319737036467?w=800&auto=format&fit=crop"
            ]
        },
        {
            title: "Living & Bedrooms",
            desc: "Atmospheric spaces designed for comfort and luxury. Cohesive textures and ambient lighting.",
            images: [
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1617331140180-e8262094733a?w=800&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop"
            ]
        }
    ];

    return (
        <section id="categories" className="py-32 bg-ivory/50">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
                <div className="text-center space-y-4">
                    <span className="text-gold text-[10px] uppercase tracking-[1em] font-black">Our Service Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-serif text-charcoal">Curated <span className="italic">Specialties</span></h2>
                    <p className="text-taupe/60 text-sm max-w-xl mx-auto uppercase tracking-widest">Premium designs, precision engineering, and transparent pricing in every category.</p>
                </div>

                {categories.map((cat, i) => (
                    <CategorySection key={i} {...cat} index={i} />
                ))}
            </div>
        </section>
    );
};

export default V3CategoryShowcase;
