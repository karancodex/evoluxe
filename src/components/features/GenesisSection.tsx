"use client";

import { motion } from "framer-motion";

const foundationItems = [
    {
        id: "01",
        title: "Brand Mission",
        subtitle: "The Pursuit of Harmony",
        description: "To orchestrate the delicate tension between the evolution of the human spirit and its physical environment.",
        image: "/assets/mission.png",
    },
    {
        id: "02",
        title: "Brand Vision",
        subtitle: "Future Forms",
        description: "To define the future of architectural living where every space is a timeless masterpiece of spatial high-art.",
        image: "/assets/vision.png",
    },
    {
        id: "03",
        title: "Brand Values",
        subtitle: "Artisanal Soul",
        description: "Purity of line, artisanal soul, and a commitment to materials that transcend the boundaries of the ordinary.",
        image: "/assets/values.png",
    }
];

export default function GenesisSection() {
    return (
        <section className="bg-[#faf9f6] pt-20 pb-0 relative overflow-hidden">
            {/* Ambient Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Minimalist Header */}
                <div className="max-w-4xl mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-gold text-[10px] uppercase tracking-[1em] font-black">The Genesis</span>
                            <div className="h-[1px] w-12 bg-gold/30" />
                        </div>
                        <h2 className="text-4xl md:text-[5vw] font-serif leading-[1.1] tracking-tighter text-charcoal">
                            Where <span className="italic text-gold-soft">Art</span> meets <br />
                            <span className="text-charcoal/70">Structural Soul.</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Overlapping Content Gallery */}
                <div className="space-y-40 md:space-y-24">
                    {foundationItems.map((item, i) => (
                        <div key={item.id} className="relative">
                            <div className={`flex flex-col items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>

                                {/* Image Container */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
                                    className="w-full lg:w-2/3 relative aspect-[16/10] md:aspect-[21/9] lg:aspect-[16/9] overflow-hidden shadow-2xl z-0"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5" />
                                </motion.div>

                                {/* Floating Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                    className={`w-full lg:w-[40%] bg-white p-10 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] z-10 
                                               -mt-20 lg:mt-0 ${i % 2 === 0 ? 'lg:-ml-24' : 'lg:-mr-24'} relative border border-charcoal/5`}
                                >
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-4">
                                            <span className="text-gold font-serif italic text-3xl">0{item.id}</span>
                                            <div className="w-8 h-px bg-gold/30" />
                                            <span className="text-gold text-[10px] uppercase tracking-[0.5em] font-bold">
                                                {item.subtitle}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-5xl font-serif text-charcoal tracking-tight">
                                            {item.title}
                                        </h3>

                                        <div className="relative pl-8 border-l border-gold/20">
                                            <p className="text-charcoal/60 text-lg md:text-xl font-light italic font-serif leading-relaxed">
                                                "{item.description}"
                                            </p>
                                        </div>

                                        <motion.button
                                            whileHover={{ x: 10 }}
                                            className="pt-8 group flex items-center gap-6 text-[9px] uppercase tracking-[0.4em] font-black text-charcoal/40 hover:text-gold transition-all"
                                        >
                                            View Architectural Brief
                                            <div className="w-10 h-px bg-gold" />
                                        </motion.button>
                                    </div>

                                    {/* Subtle Architectural Number Badge */}
                                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gold/5 flex items-center justify-center rounded-full border border-gold/10 pointer-events-none">
                                        <span className="text-gold/20 text-[10px] font-bold italic font-serif">{item.id}</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Faint Background Label for Depth */}
                            <div className={`absolute top-1/2 ${i % 2 === 0 ? '-right-20' : '-left-20'} -translate-y-1/2 rotate-90 opacity-[0.03] pointer-events-none hidden xl:block`}>
                                <span className="text-[10rem] font-serif font-black uppercase text-charcoal whitespace-nowrap">
                                    {item.title.split(' ')[1]}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Subtle Brand Footer Divider */}
            <div className="mt-40 border-t border-charcoal/5 w-1/3 mx-auto opacity-20" />
        </section>
    );
}
