"use client";

import React from "react";
import Image from "next/image";

const EvoLuxeIntro = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[400px] w-full bg-[#f2eaf7] rounded-3xl overflow-hidden flex items-center justify-center">
                    {/* Placeholder for Evo & Luxe Characters */}
                    <div className="text-center">
                        <span className="text-6xl mb-4 block">🤖 & ✨</span>
                        <p className="text-[#7a3f91] font-bold text-xl">Meet Evo & Luxe</p>
                    </div>
                </div>

                <div>
                    <span className="text-[#c59dd9] font-bold tracking-widest uppercase mb-2 block">Our Mascots</span>
                    <h2 className="text-4xl font-bold text-[#2b0d3e] mb-6">Introducing <br /> <span className="text-[#7a3f91]">Evo & Luxe</span></h2>
                    <p className="text-[#2b0d3e]/70 text-lg leading-relaxed mb-8">
                        Evo brings the engineering precision, while Luxe adds the touch of elegance.
                        Together, they represent our balance of form and function.
                        They're here to guide you through a seamless design journey free of stress.
                    </p>
                    <div className="p-6 bg-[#fbf7fd] rounded-2xl border border-[#f2eaf7]">
                        <p className="italic text-[#7a3f91]">"We make the complex simple, and the simple beautiful."</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EvoLuxeIntro;
