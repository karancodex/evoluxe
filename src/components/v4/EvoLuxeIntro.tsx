"use client";

import React from "react";
import Image from "next/image";

const EvolxStudioIntro = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full bg-[#faf9f6] rounded-3xl overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Evo & Luxe Characters */}
                    <div className="text-center">
                        <span className="text-6xl mb-4 block">📏 & 💎</span>
                        <p className="text-[#eb595f] font-bold text-xl uppercase tracking-widest font-serif">Precision & Elegance</p>
                    </div>
                </div>

                <div>
                    <span className="text-[#eb595f] font-bold tracking-[0.3em] uppercase mb-2 block text-xs">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2d2412] mb-6">Designing for <br /> <span className="text-[#eb595f]">Generations</span></h2>
                    <p className="text-[#2d2412]/70 text-lg leading-relaxed mb-8">
                        Evo brings the engineering precision, while Luxe adds the touch of elegance.
                        Together, they represent our balance of form and function.
                        They're here to guide you through a seamless design journey free of stress.
                    </p>
                    <div className="p-8 bg-[#fcebeb]/50 rounded-2xl border border-[#fcebeb]">
                        <p className="italic text-[#eb595f] font-serif text-xl font-medium">"We make the complex simple, and the simple beautiful."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EvolxStudioIntro;
