"use client";

import { motion } from "framer-motion";

const ProcessStep = ({ num, icon, title, desc, index }: { num: string, icon: string, title: string, desc: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="relative flex flex-col items-center text-center group"
    >
        {/* Connection Line */}
        {index < 4 && (
            <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-amethyst-light/20 z-0">
                <div className="h-full bg-amethyst-primary w-0 group-hover:w-full transition-all duration-1000" />
            </div>
        )}

        <div className="w-32 h-32 rounded-[40px] bg-white border border-amethyst-lightest shadow-xl flex items-center justify-center text-5xl mb-8 relative z-10 group-hover:bg-amethyst-primary transition-all duration-500 group-hover:-translate-y-4">
            <span className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">{icon}</span>
            <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-amethyst-dark text-white text-[12px] flex items-center justify-center font-serif italic border-4 border-amethyst-lightest">
                {num}
            </div>
        </div>

        <div className="space-y-4 max-w-[200px]">
            <h4 className="text-[14px] uppercase tracking-[0.2em] font-black text-amethyst-dark group-hover:text-amethyst-primary transition-colors">{title}</h4>
            <p className="text-[10px] uppercase tracking-[0.15em] text-amethyst-dark/40 font-bold leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const V3ProcessSimple = () => {
    const steps = [
        { num: "01", icon: "💬", title: "Discovery", desc: "Share your floorplan & design vision with us." },
        { num: "02", icon: "📐", title: "Tech Survey", desc: "Millimeter precision laser site measurements." },
        { num: "03", icon: "🎨", title: "Design Hub", desc: "Pick finishes & finalize 3D visual walkthroughs." },
        { num: "04", icon: "⚙️", title: "Production", desc: "Digital factory precision manufacturing begins." },
        { num: "05", icon: "🔑", title: "Handover", desc: "Final 146 checks & move into your dream home." }
    ];

    return (
        <section id="process" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="text-center mb-24 max-w-2xl mx-auto space-y-6">
                    <span className="text-amethyst-primary text-[11px] uppercase tracking-[0.8em] font-black italic">Seamless Execution</span>
                    <h2 className="text-4xl md:text-7xl font-serif text-amethyst-dark">How it <span className="italic font-light">works?</span></h2>
                    <div className="w-24 h-[2px] bg-amethyst-primary/30 mx-auto" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 md:gap-12 relative">
                    {steps.map((s, i) => (
                        <ProcessStep key={i} {...s} index={i} />
                    ))}
                </div>

                <div className="mt-32 p-12 bg-amethyst-lightest rounded-[50px] border border-amethyst-light/20 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-amethyst-light shadow-lg">
                                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center md:text-left flex-1 max-w-md">
                        <p className="text-xl font-serif text-amethyst-dark italic leading-relaxed">
                            "The process was so transparent, I knew exactly where my money was going at every stage."
                        </p>
                    </div>
                    <button className="px-12 py-5 bg-amethyst-primary text-white text-[11px] uppercase tracking-[0.4em] font-black rounded-2xl hover:bg-amethyst-dark transition-all shadow-2xl shadow-amethyst-primary/20">
                        Start Your Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default V3ProcessSimple;
