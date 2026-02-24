"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChefHat,
    Smartphone as Wardrobe,
    Home,
    ChevronRight,
    RotateCcw,
    Info,
    CheckCircle,
    Sparkles,
    Settings,
    Layers,
    Users,
    ArrowRight
} from 'lucide-react';
import Image from 'next/image';

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
                                { id: '1bhk', label: '1 BHK', value: 350000, img: '/v4/luxury_living_1.png' },
                                { id: '2bhk', label: '2 BHK', value: 650000, img: '/v4/luxury_living_2.png' },
                                { id: '3bhk', label: '3 BHK', value: 950000, img: '/v4/design-session-1.png' },
                                { id: '4bhk', label: '4 BHK', value: 1250000, img: '/v4/design-session-2.png' },
                                { id: 'villa', label: 'Villa', value: 2500000, img: '/v4/interior-living-3d.jpg' },
                            ]
                        },
                        {
                            id: 'package',
                            label: 'Select a package',
                            options: [
                                { id: 'essential', label: 'Essential', sub: 'Standard finishes & functional design', multiplier: 1, img: '/v4/luxe_banner_bg.png' },
                                { id: 'premium', label: 'Premium', sub: 'Stylish upgrades & branded fittings', multiplier: 1.4, img: '/v4/hero-bg.png' },
                                { id: 'luxe', label: 'Luxe', sub: 'Exotic finishes & high-end automation', multiplier: 2.2, img: '/v4/luxury_kitchen_2.png' },
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
                                { id: 'straight', label: 'Straight', value: 80000, img: '/v4/luxury_kitchen_2.png' },
                                { id: 'lshape', label: 'L-Shape', value: 150000, img: '/v4/luxury_kitchen_2.png' },
                                { id: 'ushape', label: 'U-Shape', value: 220000, img: '/v4/luxury_kitchen_2.png' },
                                { id: 'parallel', label: 'Parallel', value: 180000, img: '/v4/luxury_kitchen_2.png' },
                            ]
                        },
                        {
                            id: 'finish',
                            label: 'Select Finish',
                            options: [
                                { id: 'laminate', label: 'Laminate', sub: 'Durable & economical', multiplier: 1, img: '/v4/luxe_banner_bg.png' },
                                { id: 'acrylic', label: 'Acrylic', sub: 'Glossy & premium look', multiplier: 1.5, img: '/v4/hero-bg.png' },
                                { id: 'pu', label: 'PU Paint', sub: 'Seamless & luxurious', multiplier: 2.1, img: '/v4/luxury_kitchen_2.png' },
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
                                { id: '4ft', label: '4 Feet (2 Door)', value: 45000, img: '/v4/design-session-3.png' },
                                { id: '6ft', label: '6 Feet (3 Door)', value: 75000, img: '/v4/design-session-3.png' },
                                { id: '8ft', label: '8 Feet (4 Door)', value: 105000, img: '/v4/design-session-3.png' },
                                { id: '10ft', label: '10 Feet+', value: 145000, img: '/v4/design-session-3.png' },
                            ]
                        },
                        {
                            id: 'type',
                            label: 'Select Door Type',
                            options: [
                                { id: 'swing', label: 'Swing Doors', sub: 'Classic & easy access', multiplier: 1, img: '/v4/luxe_banner_bg.png' },
                                { id: 'sliding', label: 'Sliding Doors', sub: 'Space-saving & modern', multiplier: 1.3, img: '/v4/hero-bg.png' },
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
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    return (
        <div className="space-y-16">
            {/* Top Stepper - Timeline Visual */}
            <div className="max-w-4xl mx-auto px-6">
                <div className="relative flex items-center justify-between">
                    <div className="absolute top-5 left-0 w-full h-1 bg-stone-100 -translate-y-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#eb595f]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${((step - 1) / config.steps.length) * 100}%` }}
                            transition={{ duration: 0.8 }}
                        />
                    </div>
                    {config.steps.map((s, i) => (
                        <div key={s.id} className="relative z-10 flex flex-col items-center gap-4">
                            <motion.div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 border-4 ${step >= i + 1
                                        ? "bg-[#eb595f] border-white text-white shadow-xl scale-110"
                                        : "bg-white border-stone-100 text-stone-300"
                                    }`}
                            >
                                {i + 1}
                            </motion.div>
                            <span className={`text-[10px] uppercase tracking-[0.2em] font-black ${step >= i + 1 ? "text-[#eb595f]" : "text-stone-300"
                                }`}>
                                {s.id}
                            </span>
                        </div>
                    ))}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                        <motion.div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-500 border-4 ${step > config.steps.length
                                    ? "bg-[#eb595f] border-white text-white shadow-xl scale-110"
                                    : "bg-white border-stone-100 text-stone-300"
                                }`}
                        >
                            <CheckCircle className="w-5 h-5" />
                        </motion.div>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-black ${step > config.steps.length ? "text-[#eb595f]" : "text-stone-300"
                            }`}>Result</span>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-[4rem] shadow-[0_50px_100px_-30px_rgba(45,36,18,0.12)] overflow-hidden border border-stone-100 relative group/calc">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#eb595f]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c5a059]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />

                <div className="bg-[#2d2412] p-12 md:p-20 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/v4/luxe_banner_bg.png')] opacity-10 bg-cover mix-blend-overlay" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#eb595f]/20 to-transparent" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="w-24 h-24 bg-white/5 backdrop-blur-2xl rounded-[2rem] flex items-center justify-center mb-10 border border-white/10 shadow-3xl group-hover/calc:rotate-12 transition-transform duration-700"
                        >
                            {config.icon}
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight leading-none">{config.title}</h2>
                        <p className="text-white/50 max-w-lg text-lg md:text-xl font-light leading-relaxed">
                            Personalized pricing intelligence powered by <span className="text-white font-medium">EVOLX Design Engine.</span>
                        </p>
                    </div>
                </div>

                <div className="p-10 md:p-24 min-h-[600px] flex flex-col justify-center bg-white relative">
                    <AnimatePresence mode="wait">
                        {step <= config.steps.length ? (
                            <motion.div
                                key={step}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={fadeIn}
                                className="space-y-16"
                            >
                                <div className="text-center space-y-4">
                                    <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase">Phase 0{step}</span>
                                    <h3 className="text-4xl md:text-5xl font-serif text-[#2d2412] font-bold tracking-tight">
                                        {config.steps[step - 1].label}
                                    </h3>
                                    <div className="w-24 h-1 bg-[#eb595f]/20 mx-auto rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-[#eb595f]"
                                            initial={{ x: "-100%" }}
                                            animate={{ x: "0%" }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {config.steps[step - 1].options.map((opt: any, i: number) => (
                                        <motion.button
                                            key={opt.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            onClick={() => handleSelect(config.steps[step - 1].id, opt.value || opt.multiplier)}
                                            className="text-left group relative flex flex-col gap-6 focus:outline-none"
                                        >
                                            <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border border-stone-100 bg-stone-50 transition-all duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(235,89,95,0.25)] group-hover:-translate-y-4 group-hover:border-[#eb595f]/30">
                                                <Image
                                                    src={opt.img || '/v4/interior-living-3d.jpg'}
                                                    alt={opt.label}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s] grayscale group-hover:grayscale-0"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-[#2d2412]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity flex items-end p-10">
                                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                        <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase flex items-center gap-3">
                                                            Select <ArrowRight className="w-4 h-4 text-[#eb595f]" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4">
                                                <h4 className="text-2xl font-serif font-bold text-[#2d2412] group-hover:text-[#eb595f] transition-colors">{opt.label}</h4>
                                                {opt.sub && <p className="text-sm text-stone-400 mt-2 font-light leading-relaxed">{opt.sub}</p>}
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial="hidden"
                                animate="visible"
                                variants={fadeIn}
                                className="text-center"
                            >
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-[#fcebeb] rounded-full text-[#eb595f] font-black text-xs uppercase tracking-[0.3em] mb-12 shadow-inner"
                                >
                                    <Sparkles className="w-5 h-5 animate-pulse" /> Precision Quote Ready
                                </motion.div>
                                <h3 className="text-5xl md:text-7xl font-serif text-[#2d2412] mb-16 font-bold tracking-tight px-4 leading-none italic decoration-[#eb595f] underline underline-offset-8">Your Custom Estimate</h3>

                                <div className="bg-[#2d2412] text-white p-16 md:p-24 rounded-[4rem] inline-block shadow-4xl relative overflow-hidden group w-full max-w-3xl border-8 border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#eb595f]/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                                    <div className="relative z-10">
                                        <span className="text-[12px] text-[#eb595f] font-black tracking-[0.5em] uppercase block mb-8">Estimated Investment</span>
                                        <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white mb-8 tabular-nums tracking-tighter drop-shadow-2xl">
                                            ₹{result?.toLocaleString('en-IN')}
                                        </div>
                                        <div className="w-32 h-1.5 bg-[#eb595f] mx-auto mb-12 rounded-full" />
                                        <div className="grid grid-cols-2 gap-12 text-left max-w-sm mx-auto">
                                            <div className="space-y-2">
                                                <p className="text-[10px] uppercase tracking-widest text-[#eb595f] font-black">Design & GST</p>
                                                <p className="text-lg font-light opacity-60 italic">Included</p>
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-[10px] uppercase tracking-widest text-[#eb595f] font-black">Installation</p>
                                                <p className="text-lg font-light opacity-60 italic">Bespoke</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-8 mt-20 justify-center">
                                    <button className="px-16 py-7 bg-[#eb595f] text-white font-black rounded-3xl hover:bg-[#2d2412] transition-all shadow-[0_30px_60px_-15px_rgba(235,89,95,0.5)] hover:-translate-y-2 uppercase tracking-[0.2em] text-xs">
                                        Download Detailed PDF
                                    </button>
                                    <button
                                        onClick={reset}
                                        className="px-16 py-7 border-4 border-stone-50 text-[#2d2412] font-black rounded-3xl hover:bg-stone-50 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] text-xs"
                                    >
                                        <RotateCcw className="w-5 h-5" /> Recalculate
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Process Section - High Impact Visuals */}
            <section className="max-w-[1600px] mx-auto px-6 py-40 border-t border-stone-100">
                <div className="flex flex-col items-center text-center mb-32 space-y-6">
                    <span className="text-[#eb595f] text-sm font-black tracking-[0.6em] uppercase">The Intelligence Behind</span>
                    <h2 className="text-5xl md:text-9xl font-serif text-[#2d2412] font-bold leading-none tracking-tighter">How We Estimate <br /> <span className="italic text-stone-200">With 99% Accuracy</span></h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                    {[
                        {
                            title: "Material Market Intelligence",
                            desc: "Our engine tracks 450+ raw material price points daily across India. From high-gloss laminates to architectural grade plywood, your estimate reflects real-world costs.",
                            img: "/v4/calc-process-1.png",
                            icon: <Layers className="w-8 h-8" />
                        },
                        {
                            title: "Human Precision Algorithm",
                            desc: "Every design choice is calculated against historical project hours. We factor in structural complexity and artisan labor to prevent any post-contract surprises.",
                            img: "/v4/interior-living-3d.jpg",
                            icon: <Users className="w-8 h-8" />
                        },
                        {
                            title: "Direct Sourcing Loop",
                            desc: "By connecting our factory directly to your quote, we eliminate dealer margins and retail overheads, delivering luxury at 15-20% lower investment.",
                            img: "/v4/luxury_kitchen_2.png",
                            icon: <Settings className="w-8 h-8" />
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                            viewport={{ once: true }}
                            className="group space-y-12"
                        >
                            <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-4xl transform group-hover:rotate-1 transition-transform duration-1000">
                                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[3s]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2412] via-[#2d2412]/20 to-transparent opacity-80" />
                                <div className="absolute top-12 right-12 w-20 h-20 bg-white/10 backdrop-blur-3xl rounded-3xl flex items-center justify-center text-white border border-white/20 shadow-2xl group-hover:bg-[#eb595f] group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div className="absolute bottom-12 left-12 right-12">
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">{item.title}</h3>
                                    <div className="w-16 h-1 bg-[#eb595f] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                                </div>
                            </div>
                            <div className="px-6">
                                <p className="text-stone-400 font-light leading-relaxed text-lg md:text-xl italic opacity-60 group-hover:opacity-100 transition-opacity">"{item.desc}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MasterCalculator;
