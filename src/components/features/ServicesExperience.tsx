"use client";

import { motion } from "framer-motion";

const sectors = [
    {
        title: "Residential",
        category: "Interior Expert",
        image: "/assets/residential_luxury.png",
        description: "Curating private universes that reflect the soul through structural poetry and artisanal precision.",
        number: "01"
    },
    {
        title: "Commercial",
        category: "Executive Identity",
        image: "/assets/commercial_luxury.png",
        description: "Redefining workspace dynamics with architectural authority and professional elegance.",
        number: "02"
    },
    {
        title: "Specialty",
        category: "Rare Spaces",
        image: "/assets/office_luxury.png",
        description: "Experimental structures that push the boundaries of spatial art and physical forms.",
        number: "03"
    },
    {
        title: "Craftsmanship",
        category: "The Final Note",
        image: "/assets/bespoke_details.png",
        description: "Meticulous fusion of material excellence and human-hand craft for absolute perfection.",
        number: "04"
    },
];

export default function ServicesExperience() {
    return (
        <section className="bg-[#d2b48c] py-24 md:py-40 relative overflow-hidden">
            {/* Global Decorative Elements (Image 3 Inspiration) */}
            <div className="absolute top-10 left-10 flex gap-4 opacity-40">
                <div className="w-4 h-4 rounded-full bg-white" />
                <div className="w-4 h-4 rounded-full bg-[#3e2723]" />
                <div className="w-4 h-4 rounded-full bg-[#8d826c]" />
                <div className="w-4 h-4 rounded-full bg-[#5d6d3e]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-32 text-center text-[#3e2723]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[10px] uppercase tracking-[1em] font-black mb-4 block">Archive Portfolio</span>
                        <h2 className="text-5xl md:text-8xl font-serif text-[#3e2723] leading-none tracking-tighter">
                            Premium <span className="italic">Design</span> <br />
                            Expertise.
                        </h2>
                    </motion.div>
                </div>

                {/* Alternating Service Rows */}
                <div className="space-y-32 md:space-y-56">
                    {sectors.map((sector, index) => (
                        <ServiceRow key={index} sector={sector} isEven={index % 2 === 0} />
                    ))}
                </div>
            </div>

            {/* Background Narrative Stamp */}
            <div className="absolute bottom-20 right-10 opacity-5 pointer-events-none select-none hidden lg:block">
                <span className="text-[15vw] font-serif font-black uppercase text-white leading-none">Creative</span>
            </div>
        </section>
    );
}

function ServiceRow({ sector, isEven }: { sector: typeof sectors[0], isEven: boolean }) {
    return (
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>

            {/* The "Arched" Image Framework (Image 3 Style) */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 relative group"
            >
                {/* Background Sweep Accent */}
                <div className={`absolute inset-0 border-2 border-white/20 -m-4 ${isEven ? 'rounded-tr-[240px]' : 'rounded-tl-[240px]'} hidden lg:block pointer-events-none`} />

                <div className={`relative aspect-[16/10] overflow-hidden shadow-2xl ${isEven ? 'rounded-tr-[200px]' : 'rounded-tl-[200px]'}`}>
                    <img
                        src={sector.image}
                        alt={sector.title}
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:opacity-0 transition-opacity duration-1000" />
                </div>

                {/* Floating Decorative Dots */}
                <div className={`absolute ${isEven ? '-right-4' : '-left-4'} bottom-1/4 flex flex-col gap-3 pointer-events-none`}>
                    <div className="w-2 h-2 rounded-full bg-[#3e2723]/30" />
                    <div className="w-2 h-2 rounded-full bg-[#000]" />
                    <div className="w-2 h-2 rounded-full bg-white" />
                </div>
            </motion.div>

            {/* The Narrative Content (Image 3 Style) */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 space-y-4 relative"
            >
                <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'} space-y-4`}>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-[#3e2723]/20" />
                        <span className="text-[#3e2723] text-[10px] uppercase tracking-[0.8em] font-black">{sector.category}</span>
                    </div>
                    <h3 className="text-5xl md:text-7xl font-serif text-[#000] leading-none tracking-tighter">
                        {sector.title.split(' ')[0]} <br />
                        <span className="italic">{sector.title.split(' ')[1] || 'Design'}</span>
                    </h3>
                </div>

                <p className={`text-[#3e2723]/60 text-lg md:text-xl font-light leading-relaxed max-w-lg ${isEven ? 'text-left' : 'text-right ml-auto'}`}>
                    {sector.description}
                </p>

                <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} pt-8`}>
                    <button className="bg-[#000] px-16 py-6 rounded-full text-white text-[10px] uppercase tracking-[0.5em] font-black hover:bg-white hover:text-black transition-all shadow-xl shadow-black/10">
                        READ MORE
                    </button>
                </div>

                {/* Connection Line with Circle */}
                <div className={`absolute ${isEven ? '-left-8' : '-right-8'} top-1/2 -translate-y-1/2 hidden xl:block`}>
                    <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full bg-white border-2 border-[#3e2723]/10" />
                        <div className="w-24 h-[1px] bg-white/40" />
                    </div>
                </div>


            </motion.div>
        </div>
    );
}
