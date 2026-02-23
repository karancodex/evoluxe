"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Benefit = ({ icon, title, index }: { icon: string, title: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col items-center text-center gap-4 group cursor-pointer"
    >
        <div className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-500 transform group-hover:-translate-y-2 border border-ivory">
            <span className="text-4xl group-hover:scale-125 transition-transform duration-500 group-hover:filter group-hover:brightness-0 group-hover:invert">{icon}</span>
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-gold-dark group-hover:text-gold transition-colors">{title}</span>
    </motion.div>
);

const V3QuickBenefits = () => {
    const [activeTab, setActiveTab] = useState("3BHK");

    const benefits = [
        { icon: "🏠", title: "Full Home" },
        { icon: "🍳", title: "Kitchen" },
        { icon: "🧥", title: "Wardrobe" },
        { icon: "🛋️", title: "Living Room" },
        { icon: "🛏️", title: "Bedroom" }
    ];

    const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"];

    return (
        <section className="relative z-20 -mt-16 pb-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
                {/* Benefits Circles */}
                <div className="w-full bg-white/70 backdrop-blur-xl p-12 rounded-[50px] shadow-2xl border border-white/50 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                        {benefits.map((b, i) => (
                            <Benefit key={i} {...b} index={i} />
                        ))}
                    </div>
                </div>

                {/* Property Type Selector */}
                <div className="text-center w-full max-w-4xl">
                    <h3 className="text-3xl font-serif text-gold-dark mb-10">Showcasing home designs based on <span className="text-gold italic font-bold">your home size</span></h3>
                    <div className="flex flex-wrap justify-center gap-4 bg-white/50 p-2 rounded-2xl border border-gold-soft/20 w-fit mx-auto shadow-lg">
                        {propertyTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveTab(type)}
                                className={`px-10 py-4 rounded-xl text-[10px] uppercase tracking-widest font-black transition-all ${activeTab === type
                                        ? "bg-gold text-white shadow-xl shadow-gold/30"
                                        : "text-gold-dark hover:bg-ivory"
                                    }`}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default V3QuickBenefits;
