"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
    { title: "Configuration", options: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Villa"] },
    { title: "Project Type", options: ["New Home", "Full Renovation", "Modular Only", "Rental Focus"] },
    { title: "Style Palette", options: ["Minimalist Lux", "Modern Classical", "Industrial Chic", "Bohemian Spirit"] },
    { title: "Timeline", options: ["ASAP (45 Days)", "Next 3 Months", "Planning Stage"] }
];

const V3EstimateFlow = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [selections, setSelections] = useState<string[]>([]);
    const [isComplete, setIsComplete] = useState(false);

    const handleSelect = (option: string) => {
        const newSelections = [...selections];
        newSelections[currentStep] = option;
        setSelections(newSelections);

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsComplete(true);
        }
    };

    const reset = () => {
        setCurrentStep(0);
        setSelections([]);
        setIsComplete(false);
    };

    return (
        <section id="estimate" className="py-32 bg-charcoal/30 relative">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center">
                <div className="text-center mb-16">
                    <span className="text-gold text-[10px] uppercase tracking-[1em] mb-4 block font-bold">The Precision Calculator</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-ivory">
                        Architect Your <span className="italic">Budget</span>
                    </h2>
                </div>

                <div className="w-full max-w-4xl bg-brand-black border border-white/5 rounded-[40px] p-8 md:p-16 min-h-[500px] flex flex-col relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {!isComplete ? (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="flex-1 flex flex-col"
                            >
                                <span className="text-white/20 text-[10px] uppercase tracking-widest mb-12">Step 0{currentStep + 1} / 04</span>
                                <h3 className="text-3xl md:text-4xl font-serif text-ivory mb-12 italic">{steps[currentStep].title}</h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {steps[currentStep].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(option)}
                                            className={`group p-8 rounded-2xl border transition-all text-left flex justify-between items-center ${selections[currentStep] === option
                                                    ? "bg-gold border-gold text-black"
                                                    : "bg-white/5 border-white/5 text-ivory/60 hover:border-gold/30 hover:bg-white/[0.08]"
                                                }`}
                                        >
                                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{option}</span>
                                            <div className={`w-2 h-2 rounded-full transition-all ${selections[currentStep] === option ? "bg-black" : "bg-gold scale-0 group-hover:scale-100"
                                                }`} />
                                        </button>
                                    ))}
                                </div>

                                {currentStep > 0 && (
                                    <button
                                        onClick={() => setCurrentStep(currentStep - 1)}
                                        className="mt-12 text-[8px] uppercase tracking-widest text-ivory/30 underline underline-offset-8 hover:text-gold transition-colors block w-fit"
                                    >
                                        Go Back
                                    </button>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex-1 flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-12 shadow-2xl shadow-gold/20">
                                    <span className="text-black text-3xl font-black">✓</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-serif text-ivory mb-6 italic">Configuration Captured</h3>
                                <p className="text-ivory/60 max-w-md mb-12 font-light">
                                    Our concierge will prepare a technical BOQ for your <span className="text-gold font-bold">{selections[0]}</span> {selections[1].toLowerCase()} project.
                                </p>

                                <div className="w-full max-w-sm space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Mobile / WhatsApp Number"
                                        className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl text-ivory placeholder:text-white/20 outline-none focus:border-gold transition-all"
                                    />
                                    <button className="w-full bg-gold p-6 rounded-2xl text-black text-[10px] uppercase tracking-[0.4em] font-black hover:bg-white transition-all">
                                        Get Bespoke Preview
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="text-[8px] uppercase tracking-widest text-ivory/20 hover:text-gold pt-4 transition-all"
                                    >
                                        Start Over
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="mt-12 flex items-center gap-8 opacity-40">
                    <span className="text-[8px] uppercase tracking-widest">No Hidden Markups</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[8px] uppercase tracking-widest">Precision Measurements</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    <span className="text-[8px] uppercase tracking-widest">Technical BOQ</span>
                </div>
            </div>
        </section>
    );
};

export default V3EstimateFlow;
