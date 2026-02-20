"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Smartphone as Wardrobe, Home, ChevronRight, RotateCcw, Info } from 'lucide-react';

interface CalculatorProps {
    type: 'kitchen' | 'wardrobe' | 'full-home';
}

const MasterCalculator: React.FC<CalculatorProps> = ({ type }) => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState<Record<string, any>>({});
    const [result, setResult] = useState<number | null>(null);

    const config = useMemo(() => {
        switch (type) {
            case 'full-home':
                return {
                    title: 'Full Home Price Estimator',
                    icon: <Home className="w-8 h-8" />,
                    steps: [
                        {
                            id: 'bhk',
                            label: 'Select your home type',
                            options: [
                                { id: '1bhk', label: '1 BHK', value: 350000 },
                                { id: '2bhk', label: '2 BHK', value: 650000 },
                                { id: '3bhk', label: '3 BHK', value: 950000 },
                                { id: '4bhk', label: '4 BHK', value: 1250000 },
                                { id: 'villa', label: 'Villa', value: 2500000 },
                            ]
                        },
                        {
                            id: 'package',
                            label: 'Select a package',
                            options: [
                                { id: 'essential', label: 'Essential', sub: 'Standard finishes & functional design', multiplier: 1 },
                                { id: 'premium', label: 'Premium', sub: 'Stylish upgrades & branded fittings', multiplier: 1.4 },
                                { id: 'luxe', label: 'Luxe', sub: 'Exotic finishes & high-end automation', multiplier: 2.2 },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.bhk || 0;
                        const multi = sel.package || 1;
                        return Math.round(base * multi);
                    }
                };
            case 'kitchen':
                return {
                    title: 'Kitchen Price Calculator',
                    icon: <ChefHat className="w-8 h-8" />,
                    steps: [
                        {
                            id: 'layout',
                            label: 'Select Kitchen Layout',
                            options: [
                                { id: 'straight', label: 'Straight', value: 80000 },
                                { id: 'lshape', label: 'L-Shape', value: 150000 },
                                { id: 'ushape', label: 'U-Shape', value: 220000 },
                                { id: 'parallel', label: 'Parallel', value: 180000 },
                            ]
                        },
                        {
                            id: 'finish',
                            label: 'Select Finish',
                            options: [
                                { id: 'laminate', label: 'Laminate', sub: 'Durable & economical', multiplier: 1 },
                                { id: 'acrylic', label: 'Acrylic', sub: 'Glossy & premium look', multiplier: 1.5 },
                                { id: 'pu', label: 'PU Paint', sub: 'Seamless & luxurious', multiplier: 2.1 },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.layout || 0;
                        const multi = sel.finish || 1;
                        return Math.round(base * multi);
                    }
                };
            case 'wardrobe':
                return {
                    title: 'Wardrobe Price Calculator',
                    icon: <Wardrobe className="w-8 h-8" />,
                    steps: [
                        {
                            id: 'size',
                            label: 'Select Width',
                            options: [
                                { id: '4ft', label: '4 Feet (2 Door)', value: 45000 },
                                { id: '6ft', label: '6 Feet (3 Door)', value: 75000 },
                                { id: '8ft', label: '8 Feet (4 Door)', value: 105000 },
                                { id: '10ft', label: '10 Feet+', value: 145000 },
                            ]
                        },
                        {
                            id: 'type',
                            label: 'Select Door Type',
                            options: [
                                { id: 'swing', label: 'Swing Doors', sub: 'Classic & easy access', multiplier: 1 },
                                { id: 'sliding', label: 'Sliding Doors', sub: 'Space-saving & modern', multiplier: 1.3 },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.size || 0;
                        const multi = sel.type || 1;
                        return Math.round(base * multi);
                    }
                };
            default:
                return null;
        }
    }, [type]);

    if (!config) return null;

    const handleSelect = (stepId: string, value: number) => {
        const newSelections = { ...selections, [stepId]: value };
        setSelections(newSelections);

        if (step < config.steps.length) {
            setStep(step + 1);
        } else {
            setResult(config.calculate(newSelections));
            setStep(step + 1);
        }
    };

    const reset = () => {
        setStep(1);
        setSelections({});
        setResult(null);
    };

    const fadeIn = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-stone-100">
            <div className="bg-[#2b0d3e] p-8 md:p-12 text-white flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                    {config.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-2">{config.title}</h2>
                <p className="text-[#c59dd9] text-center max-w-md opacity-80">Get an instant estimate for your interior project in seconds.</p>
            </div>

            <div className="p-8 md:p-16 min-h-[400px]">
                <AnimatePresence mode="wait">
                    {step <= config.steps.length ? (
                        <motion.div
                            key={step}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={fadeIn}
                            className="space-y-8"
                        >
                            <div className="flex justify-between items-end mb-4">
                                <span className="text-stone-400 text-sm font-bold uppercase tracking-widest">Step 0{step} / 0{config.steps.length}</span>
                                <div className="flex gap-1">
                                    {config.steps.map((_, i) => (
                                        <div key={i} className={`h-1.5 w-8 rounded-full transition-all duration-500 ${i + 1 <= step ? 'bg-[#7a3f91]' : 'bg-stone-100'}`} />
                                    ))}
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-serif text-[#2b0d3e] font-bold">
                                {config.steps[step - 1].label}
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {config.steps[step - 1].options.map((opt: any) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect(config.steps[step - 1].id, opt.value || opt.multiplier)}
                                        className="text-left p-6 border-2 border-stone-50 rounded-2xl hover:border-[#7a3f91] hover:bg-[#f2eaf7]/30 transition-all duration-300 group relative overflow-hidden"
                                    >
                                        <div className="flex justify-between items-center relative z-10">
                                            <div>
                                                <h4 className="text-xl font-bold text-[#2b0d3e] group-hover:text-[#7a3f91] transition-colors">{opt.label}</h4>
                                                {opt.sub && <p className="text-sm text-stone-500 mt-1">{opt.sub}</p>}
                                            </div>
                                            <ChevronRight className="w-5 h-5 text-stone-300 group-hover:text-[#7a3f91] group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="result"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="text-center py-8"
                        >
                            <div className="inline-block p-4 bg-[#f2eaf7] rounded-full mb-6">
                                <span className="text-4xl">🎉</span>
                            </div>
                            <h3 className="text-2xl font-serif text-[#2b0d3e] mb-2 font-bold">Your Instant Quote is Ready!</h3>
                            <p className="text-stone-500 mb-10">Based on your selections, here is your approximate estimate:</p>

                            <div className="bg-[#2b0d3e] text-white p-10 rounded-3xl inline-block shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7a3f91] opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
                                <div className="relative z-10">
                                    <span className="text-xl opacity-60 font-medium tracking-widest uppercase block mb-1">Estimated Total</span>
                                    <div className="text-5xl md:text-6xl font-bold text-[#c59dd9] mb-2">
                                        ₹{result?.toLocaleString('en-IN')}
                                    </div>
                                    <div className="h-px bg-white/10 my-4" />
                                    <p className="text-xs text-white/50">*Inclusive of design, GST & installation</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                                <button className="px-10 py-5 bg-[#7a3f91] text-white font-bold rounded-2xl hover:bg-[#2b0d3e] transition-all shadow-xl hover:-translate-y-1">
                                    Book Free Consultation
                                </button>
                                <button
                                    onClick={reset}
                                    className="px-10 py-5 border-2 border-stone-100 text-[#2b0d3e] font-bold rounded-2xl hover:bg-stone-50 transition-all flex items-center justify-center gap-2"
                                >
                                    <RotateCcw className="w-5 h-5" /> Calculate Again
                                </button>
                            </div>

                            <div className="mt-12 flex items-center justify-center gap-3 text-stone-400 bg-stone-50 p-4 rounded-xl max-w-md mx-auto">
                                <Info className="w-5 h-5 shrink-0" />
                                <p className="text-xs text-left">This is a ballpark figure. Final pricing depends on actual site measurements, material selection, and site conditions.</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default MasterCalculator;
