"use client";

import React from "react";
import Image from "next/image";
import DynamicIcon from "./DynamicIcon";

const EvolxStudioIntro = () => {
    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[300px] sm:h-[400px] w-full bg-[#faf9f6] rounded-3xl overflow-hidden flex items-center justify-center order-2 md:order-1">
                    {/* Placeholder for Evo & Luxe Characters */}
                    <div className="text-center p-6 flex flex-col items-center">
                        <div className="flex items-center gap-4 mb-4 animate-bounce">
                            <DynamicIcon name="Ruler" className="w-12 h-12 text-[#eb595f]" />
                            <span className="text-4xl text-[#2d2412]/20 font-light">&</span>
                            <DynamicIcon name="Gem" className="w-12 h-12 text-[#eb595f]" />
                        </div>
                        <p className="text-[#eb595f] font-bold text-lg sm:text-xl uppercase tracking-widest font-serif">Precision & Elegance</p>
                    </div>
                </div>

                <div className="order-1 md:order-2 text-center md:text-left">
                    <span className="text-[#eb595f] font-bold tracking-[0.3em] uppercase mb-2 block text-[10px] sm:text-xs">Our Philosophy</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2d2412] mb-6 leading-tight">Designing for <br /> <span className="text-[#eb595f] italic">Generations</span></h2>
                    <p className="text-[#2d2412]/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                        Evo brings the engineering precision, while Luxe adds the touch of elegance.
                        Together, they represent our balance of form and function.
                    </p>
                    <div className="p-6 sm:p-8 bg-[#fcebeb]/50 rounded-2xl border border-[#fcebeb] inline-block w-full">
                        <p className="italic text-[#eb595f] font-serif text-lg sm:text-xl font-medium leading-snug">"We make the complex simple, <br className="sm:hidden" /> and the simple beautiful."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EvolxStudioIntro;
