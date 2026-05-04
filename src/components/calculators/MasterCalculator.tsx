"use client";

import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChefHat,
    Smartphone as Wardrobe,
    Home,
    ChevronRight,
    RotateCcw,
    CheckCircle,
    Sparkles,
    ArrowRight,
    Layout,
    PencilRuler,
    Settings,
    ShieldCheck,
    Mail,
    Phone,
    User,
    ClipboardList,
    Send
} from 'lucide-react';
import Image from 'next/image';
import { useConsultation } from '../providers/ConsultationProvider';


interface CalculatorProps {
    type: 'kitchen' | 'wardrobe' | 'full-home';
}

const MasterCalculator: React.FC<CalculatorProps> = ({ type }) => {
    const { openConsultation } = useConsultation();
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState<Record<string, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hoveredOption, setHoveredOption] = useState<any>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const config = useMemo(() => {
        switch (type) {
            case 'kitchen':
                return {
                    title: 'Kitchen Price Calculator',
                    accent: '#eb595f',
                    illustration: '/assets/calculators/v2_kitchen_straight.png',
                    icon: <ChefHat className="w-10 h-10" />,
                    steps: [
                        {
                            id: 'layout',
                            label: 'Select Kitchen Layout',
                            options: [
                                { id: 'straight', label: 'Straight', value: 80000, img: '/assets/calculators/v2_kitchen_straight.png', desc: 'Single wall efficiency' },
                                { id: 'lshape', label: 'L-Shape', value: 150000, img: '/v4/v5-kitchen-l-shape.png', desc: 'Perfect for corners' },
                                { id: 'ushape', label: 'U-Shape', value: 220000, img: '/assets/calculators/v2_kitchen_ushape.png', desc: 'Maximum workspace' },
                                { id: 'parallel', label: 'Parallel', value: 180000, img: '/assets/calculators/v2_kitchen_parallel.png', desc: 'Professional workflow' },
                            ]
                        },
                        {
                            id: 'finish',
                            label: 'External Finish',
                            options: [
                                { id: 'laminate', label: 'Laminate', sub: 'Durable & versatile matte', multiplier: 1, img: '/assets/calculators/finishes/laminate.png' },
                                { id: 'acrylic', label: 'Acrylic', sub: 'Glossy & premium look', multiplier: 1.4, img: '/v4/luxury_kitchen_1.png' },
                                { id: 'lacquered', label: 'Lacquered Glass', sub: 'Glossy high-end reflection', multiplier: 1.6, img: '/assets/calculators/finishes/lacquered_glass.png' },
                                { id: 'pu', label: 'PU Paint', sub: 'Seamless & luxurious', multiplier: 1.9, img: '/v4/luxury_kitchen_3.png' },
                                { id: 'veneer', label: 'Natural Veneer', sub: 'Authentic wood warmth', multiplier: 2.1, img: '/assets/calculators/finishes/natural_veneer.png' },
                            ]
                        },
                        {
                            id: 'hardware',
                            label: 'Hardware & Fittings',
                            options: [
                                { id: 'basic', label: 'Standard', sub: 'Functional soft-close', multiplier: 1, img: '/assets/calculators/kitchen_hardware_standard.png' },
                                { id: 'premium', label: 'Hettich/Innotech', sub: 'German engineering', multiplier: 1.25, img: '/v4/3d_kitchen_iso.png' },
                                { id: 'luxe', label: 'Blum Tandembox', sub: 'The gold standard', multiplier: 1.5, img: '/v4/3d_kitchen_iso.png' },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.layout?.value || 0;
                        const finishMulti = sel.finish?.multiplier || 1;
                        const hardwareMulti = sel.hardware?.multiplier || 1;
                        return Math.round(base * finishMulti * hardwareMulti);
                    }
                };
            case 'wardrobe':
                return {
                    title: 'Wardrobe Price Calculator',
                    accent: '#eb595f',
                    illustration: '/v4/service_wardrobe.png',
                    icon: <Wardrobe className="w-10 h-10" />,
                    steps: [
                        {
                            id: 'type',
                            label: 'Door Style',
                            options: [
                                { id: 'swing', label: 'Swing Doors', sub: 'Classic appeal & full access', value: 50000, img: '/assets/calculators/wardrobe_swing_doors.png' },
                                { id: 'sliding', label: 'Sliding Doors', sub: 'Space-saving modern elegance', value: 75000, img: '/v4/3d_wardrobe_iso.png' },
                                { id: 'walkin', label: 'Walk-in Closet', sub: 'The ultimate luxury experience', value: 150000, img: '/v4/luxury_bedroom_1.png' },
                            ]
                        },
                        {
                            id: 'finish',
                            label: 'Finish Material',
                            options: [
                                { id: 'laminate', label: 'Laminate', sub: 'Durable & versatile matte', multiplier: 1, img: '/assets/calculators/finishes/laminate.png' },
                                { id: 'lacquered', label: 'Lacquered Glass', sub: 'Glossy high-end reflection', multiplier: 1.6, img: '/assets/calculators/finishes/lacquered_glass.png' },
                                { id: 'veneer', label: 'Natural Veneer', sub: 'Authentic wood warmth', multiplier: 2.1, img: '/assets/calculators/finishes/natural_veneer.png' },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.type?.value || 0;
                        const finishMulti = sel.finish?.multiplier || 1;
                        return Math.round(base * finishMulti);
                    }
                };
            case 'full-home':
                return {
                    title: 'Full Home Price Estimator',
                    accent: '#eb595f',
                    illustration: '/v4/interior-living-3d.jpg',
                    icon: <Home className="w-10 h-10" />,
                    steps: [
                        {
                            id: 'bhk',
                            label: 'Property Type',
                            options: [
                                { id: '1bhk', label: '1 BHK Apartment', sub: 'Compact & efficient living', value: 450000, img: '/v4/luxury_living_1.png' },
                                { id: '2bhk', label: '2 BHK Apartment', sub: 'Balanced family comfort', value: 850000, img: '/v4/luxury_living_2.png' },
                                { id: '3bhk', label: '3 BHK Apartment', sub: 'Spacious & premium layout', value: 1250000, img: '/v4/luxury_living_3.png' },
                                { id: 'villa', label: 'Villa / Large Home', sub: 'Grand scale luxury design', value: 2500000, img: '/v4/interior-living-3d.jpg' },
                            ]
                        },
                        {
                            id: 'package',
                            label: 'Quality Package',
                            options: [
                                { id: 'essential', label: 'Essential', sub: 'Core design essentials', multiplier: 1, img: '/v4/gen/space_saving.png' },
                                { id: 'premium', label: 'Premium', sub: 'Luxury finishes & fixtures', multiplier: 1.4, img: '/v4/gen/luxury_furniture.png' },
                                { id: 'luxe', label: 'Luxe', sub: 'Bespoke design & automation', multiplier: 2.2, img: '/v4/gen/luxury_project_1.png' },
                            ]
                        },
                        {
                            id: 'scope',
                            label: 'Scope of Work',
                            options: [
                                { id: 'partial_1', label: 'Living + Kitchen', sub: 'Social and culinary spaces', multiplier: 0.6, img: '/v4/luxury_living_2.png' },
                                { id: 'partial_2', label: 'Bedrooms + Kitchen', sub: 'Private and culinary spaces', multiplier: 0.8, img: '/v4/luxury_bedroom_1.png' },
                                { id: 'complete', label: 'Complete Home', sub: 'Full turnkey transformation', multiplier: 1.1, img: '/v4/interior-living-3d.jpg' },
                            ]
                        }
                    ],
                    calculate: (sel: any) => {
                        const base = sel.bhk?.value || 0;
                        const packageMulti = sel.package?.multiplier || 1;
                        const scopeMulti = sel.scope?.multiplier || 1;
                        return Math.round(base * packageMulti * scopeMulti);
                    }
                };
            default:
                return null;
        }
    }, [type]);

    const currentIllustration = useMemo(() => {
        if (!config) return '';
        if (hoveredOption?.img) return hoveredOption.img;
        if (step > config.steps.length) return config.illustration;

        const currentStep = config.steps[step - 1];
        const prevStep = step > 1 ? config.steps[step - 2] : null;

        // If we have a selection for the previous step, show that.
        if (prevStep && selections[prevStep.id]) {
            return selections[prevStep.id].img;
        }

        return currentStep.options[0].img;
    }, [config, step, selections, hoveredOption]);

    if (!config) return null;

    const handleSelect = (stepId: string, option: any) => {
        const newSelections = { ...selections, [stepId]: option };
        setSelections(newSelections);
        setHoveredOption(null);
        setStep(step + 1);
    };

    const reset = () => {
        setStep(1);
        setSelections({});
        setIsSubmitted(false);
    };

    const finalResult = config.calculate(selections);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData: Record<string, any> = {
            "Full Name": selections.contact?.name,
            "Email": selections.contact?.email,
            "PhoneNo": selections.contact?.phone,
            "Calculator Type": config.title,
        };

        // Add all selections dynamically
        Object.entries(selections)
            .filter(([key]) => key !== 'contact')
            .forEach(([key, val]: [string, any]) => {
                // Capitalize key
                const label = key.charAt(0).toUpperCase() + key.slice(1);
                formData[label] = val.label;
            });

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@evolxstudio.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Failed to send. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to send. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepsCount = config.steps.length + 1; // +1 for summary/form

    return (
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-8 md:py-12">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16 space-y-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-2xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-6"
                    style={{ backgroundColor: `${config.accent}15`, color: config.accent }}
                >
                    {React.cloneElement(config.icon as React.ReactElement<any>, { className: "w-6 h-6 md:w-10 md:h-10" })}
                </motion.div>
                <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#2d2412] leading-tight">
                    {config.title.split(' ').slice(0, -1).join(' ')} <span className="italic font-medium" style={{ color: config.accent }}>{config.title.split(' ').pop()}</span>
                </h1>
                <p className="text-stone-400 text-sm md:text-base max-w-2xl mx-auto px-4">Get an instant, transparent cost estimate powered by our proprietary design engine.</p>
            </div>

            {/* Stepper */}
            <div className="max-w-3xl mx-auto mb-12 md:mb-20 px-2">
                <div className="flex justify-between relative">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-stone-100 -translate-y-1/2 z-0" />
                    {[...Array(stepsCount)].map((_, i) => (
                        <div key={i} className="relative z-10">
                            <div
                                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-500 border-2 md:border-4 ${step > i + 1 ? 'bg-stone-900 border-white text-white' :
                                    step === i + 1 ? 'border-white text-white shadow-lg scale-110' :
                                        'bg-white border-stone-100 text-stone-300'
                                    }`}
                                style={{ backgroundColor: step === i + 1 ? config.accent : (step > i + 1 ? '#2d2412' : '#fff') }}
                            >
                                {step > i + 1 ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" /> : i + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(45,36,18,0.08)] border border-stone-100 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col">
                <AnimatePresence mode="wait">
                    {step <= config.steps.length ? (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="p-6 md:p-20 flex-1 flex flex-col"
                        >
                            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center flex-1">
                                <div className="w-full flex-1 space-y-6 md:space-y-8">
                                    <div className="space-y-2">
                                        <span className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: config.accent }}>Step {step} of {config.steps.length}</span>
                                        <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#2d2412] leading-tight">
                                            {config.steps[step - 1].label}
                                        </h2>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {config.steps[step - 1].options.map((opt: any) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => handleSelect(config.steps[step - 1].id, opt)}
                                                onMouseEnter={() => setHoveredOption(opt)}
                                                onMouseLeave={() => setHoveredOption(null)}
                                                className="group text-left p-6 rounded-3xl border border-stone-100 hover:border-stone-900 transition-all hover:shadow-xl relative overflow-hidden"
                                            >
                                                <div className="relative z-10 flex gap-4 items-center">
                                                    <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                                                        <Image src={opt.img} alt={opt.label} width={64} height={64} className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-700" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-[#2d2412] text-lg">{opt.label}</h4>
                                                        {opt.sub && <p className="text-xs text-stone-400 mt-1">{opt.sub}</p>}
                                                        {opt.desc && <p className="text-xs text-stone-400 mt-1">{opt.desc}</p>}
                                                    </div>
                                                </div>
                                                <div className="absolute inset-0 bg-stone-900 opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                                            </button>
                                        ))}
                                    </div>

                                    {step > 1 && (
                                        <button
                                            onClick={() => setStep(step - 1)}
                                            className="text-stone-400 font-bold text-xs uppercase tracking-widest hover:text-stone-900 transition-colors flex items-center gap-2"
                                        >
                                            <RotateCcw className="w-4 h-4" /> Go Back
                                        </button>
                                    )}
                                </div>
                                <div className="w-full md:w-[40%] aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl hidden md:block group/ill">
                                    <Image
                                        src={currentIllustration}
                                        alt="Visual Context"
                                        fill
                                        className="object-cover p-0 group-hover/ill:scale-105 transition-transform duration-[5s]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f6]/20 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8 text-[#2d2412]/60 bg-white/40 backdrop-blur-md p-4 rounded-2xl">
                                        <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-60">Architectural View</p>
                                        <p className="text-lg font-serif italic">"Designed with precision for your lifestyle."</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="final"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-10 md:p-20 flex-1"
                        >
                            {!isSubmitted ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                                    {/* Summary Display */}
                                    <div className="space-y-12">
                                        <div className="space-y-4">
                                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase" style={{ color: config.accent }}>Review Your Choices</span>
                                            <h2 className="text-4xl font-serif font-bold">Project <span className="italic font-medium" style={{ color: config.accent }}>Summary</span></h2>
                                        </div>

                                        <div className="space-y-6">
                                            {Object.entries(selections).map(([key, val]: [string, any]) => (
                                                <div key={key} className="flex justify-between items-center p-4 rounded-2xl bg-stone-50 border border-stone-100/50">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-stone-400 text-xs shadow-sm">
                                                            {key === 'layout' || key === 'type' || key === 'bhk' ? <Layout className="w-4 h-4" /> :
                                                                key === 'finish' ? <PencilRuler className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                                                        </div>
                                                        <span className="text-sm font-bold text-[#2d2412]/60 uppercase tracking-widest">{key}</span>
                                                    </div>
                                                    <span className="font-bold text-[#2d2412]">{val.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* <div className="p-10 rounded-[2.5rem] bg-[#2d2412] text-white relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                                            <div className="relative z-10 text-center">
                                                <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/40 block mb-4">Estimated Investment</span>
                                                <div className="text-5xl md:text-6xl font-black mb-4 tracking-tighter">₹{finalResult.toLocaleString('en-IN')}*</div>
                                                <p className="text-[10px] text-white/30 uppercase tracking-widest">*Inclusive of Design, GST & Warranty</p>
                                            </div>
                                        </div> */}
                                    </div>

                                    {/* Capture Form */}
                                    <div className="bg-stone-50 rounded-[2.5rem] p-10 md:p-12 space-y-10">
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold">Get Full Breakdown</h3>
                                            <p className="text-stone-400 text-sm">Send this estimate to your email and get a free detailed consultation worth ₹4,999.</p>
                                        </div>

                                        <form onSubmit={sendEmail} className="space-y-6">
                                            <div className="space-y-4">
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Full Name"
                                                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-stone-100 focus:border-stone-900 outline-none transition-all text-sm font-medium"
                                                        onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, name: e.target.value } })}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="Email Address"
                                                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-stone-100 focus:border-stone-900 outline-none transition-all text-sm font-medium"
                                                        onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, email: e.target.value } })}
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                                    <input
                                                        required
                                                        type="tel"
                                                        placeholder="Phone Number"
                                                        className="w-full pl-12 pr-6 py-4 rounded-xl bg-white border border-stone-100 focus:border-stone-900 outline-none transition-all text-sm font-medium"
                                                        onChange={(e) => setSelections({ ...selections, contact: { ...selections.contact, phone: e.target.value } })}
                                                    />
                                                </div>
                                            </div>

                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full py-5 rounded-xl text-white font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all hover:scale-[1.02] shadow-xl disabled:opacity-50"
                                                style={{ backgroundColor: config.accent }}
                                            >
                                                {isSubmitting ? 'Processing...' : (
                                                    <>Send Detailed Quote <ArrowRight className="w-4 h-4" /></>
                                                )}
                                            </button>
                                        </form>

                                        <div className="flex gap-4 items-center justify-center pt-4 opacity-40">
                                            <ShieldCheck className="w-4 h-4" />
                                            <span className="text-[10px] font-bold uppercase tracking-widest">100% Secure & Private</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-20 space-y-10">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto"
                                    >
                                        <CheckCircle className="w-12 h-12" />
                                    </motion.div>
                                    <div className="space-y-4">
                                        <h2 className="text-4xl font-serif font-bold">Estimate <span className="italic font-medium text-green-500">Sent Successfully</span></h2>
                                        <p className="text-stone-400 max-w-lg mx-auto">Check your inbox for the detailed breakdown. Our design concierge will reach out to you within 24 hours.</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <button
                                            onClick={reset}
                                            className="px-12 py-5 border-2 border-stone-100 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-100 transition-all flex items-center justify-center gap-3"
                                        >
                                            <RotateCcw className="w-4 h-4" /> New Calculation
                                        </button>
                                        <button
                                            onClick={openConsultation}
                                            className="px-12 py-5 bg-[#2d2412] text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#eb595f] transition-all flex items-center justify-center gap-3 shadow-xl"
                                        >
                                            <Sparkles className="w-4 h-4" /> Consult a Designer
                                        </button>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Educational Section */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#fcebeb] flex items-center justify-center mx-auto text-[#eb595f] border border-[#eb595f]/10 shadow-sm">
                        <ClipboardList className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Transparent Pricing</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">No hidden costs. Every quote includes design fees, logistics, and taxes.</p>
                </div>
                <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#fcebeb] flex items-center justify-center mx-auto text-[#eb595f] border border-[#eb595f]/10 shadow-sm">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">10 Year Warranty</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Our estimates aren't just for products, but for a decade of peace of mind.</p>
                </div>
                <div className="space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#fcebeb] flex items-center justify-center mx-auto text-[#eb595f] border border-[#eb595f]/10 shadow-sm">
                        <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Direct from Factory</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">Eliminate dealer margins and retail overheads, saving you up to 20%.</p>
                </div>
            </div>
        </div>
    );
};

export default MasterCalculator;
