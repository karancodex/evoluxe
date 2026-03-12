"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

interface ConsultationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/evolxinteriordesign@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Failed to send message. Please check your connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[99999] flex items-center justify-center p-0 sm:p-4 overflow-hidden outline-none">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-[#2d2412]/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 50 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative bg-white w-full sm:max-w-4xl lg:max-w-5xl h-screen sm:h-auto sm:max-h-[90vh] sm:rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-none sm:border border-stone-100 flex flex-col md:flex-row"
                    >
                        {/* Left Side: Visual/Info (Hidden on small mobile if height is an issue, but we'll stack it) */}
                        <div className="hidden md:flex md:w-2/5 bg-[#2d2412] text-white p-8 lg:p-12 flex-col justify-between relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <Image
                                    src="/v4/interior-living-3d.jpg"
                                    alt="Luxury Interior"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#2d2412] via-[#2d2412]/90 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="w-12 h-1 bg-[#eb595f] mb-8"
                                />
                                <h2 className="text-3xl lg:text-5xl font-serif font-bold leading-tight mb-6">
                                    Crafting <br /> <span className="text-[#eb595f] italic">Homes</span> <br /> of Tomorrow
                                </h2>
                                <p className="text-white/60 font-light text-sm lg:text-base leading-relaxed max-w-xs">
                                    Join our elite design circle and transform your space into a masterpiece of architectural precision.
                                </p>
                            </div>

                            <div className="relative z-10 space-y-4">
                                <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#eb595f] group-hover:border-[#eb595f] transition-all">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest uppercase">+91 7744 80 6644</span>
                                </div>
                                <div className="flex items-center gap-4 group cursor-pointer transition-all hover:translate-x-1">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-[#eb595f] group-hover:border-[#eb595f] transition-all">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-white/70">_Info@evolxstudio.com</span>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#eb595f] rounded-full blur-[80px] opacity-20" />
                        </div>

                        {/* Right Side: Form */}
                        <div className="flex-1 bg-white p-6 sm:p-10 lg:p-16 relative flex flex-col overflow-y-auto">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 sm:top-8 sm:right-8 p-3 bg-stone-50 rounded-full text-stone-400 hover:text-[#eb595f] hover:bg-[#eb595f]/10 transition-all z-20 group"
                            >
                                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                            </button>

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="space-y-8 my-auto"
                                    >
                                        <div className="space-y-3">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eb595f]/5 rounded-full border border-[#eb595f]/10">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#eb595f] animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#eb595f]">Instant Booking</span>
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2d2412]">Start Consultation</h2>
                                            <p className="text-stone-500 font-light text-sm sm:text-base">
                                                Fill in the details below and our design specialists will reach out within 2 hours.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="group relative">
                                                    <label className="absolute left-6 top-1 text-[8px] font-black uppercase tracking-widest text-[#eb595f] opacity-0 group-focus-within:opacity-100 transition-all">Full Name</label>
                                                    <input
                                                        required
                                                        name="Full Name"
                                                        type="text"
                                                        placeholder="Full Name"
                                                        className="w-full px-7 py-5 bg-stone-50 border-2 border-transparent rounded-[1.25rem] focus:border-[#eb595f]/20 focus:bg-white outline-none transition-all placeholder:text-stone-400 font-medium text-sm sm:text-base"
                                                    />
                                                </div>
                                                <div className="group relative">
                                                    <label className="absolute left-6 top-1 text-[8px] font-black uppercase tracking-widest text-[#eb595f] opacity-0 group-focus-within:opacity-100 transition-all">Email Address</label>
                                                    <input
                                                        required
                                                        name="Email"
                                                        type="email"
                                                        placeholder="Email Address"
                                                        className="w-full px-7 py-5 bg-stone-50 border-2 border-transparent rounded-[1.25rem] focus:border-[#eb595f]/20 focus:bg-white outline-none transition-all placeholder:text-stone-400 font-medium text-sm sm:text-base"
                                                    />
                                                </div>
                                            </div>

                                            <div className="group relative">
                                                <label className="absolute left-6 top-1 text-[8px] font-black uppercase tracking-widest text-[#eb595f] opacity-0 group-focus-within:opacity-100 transition-all">Phone Number</label>
                                                <input
                                                    required
                                                    name="Phone Number"
                                                    type="tel"
                                                    placeholder="Phone Number (+91)"
                                                    className="w-full px-7 py-5 bg-stone-50 border-2 border-transparent rounded-[1.25rem] focus:border-[#eb595f]/20 focus:bg-white outline-none transition-all placeholder:text-stone-400 font-medium text-sm sm:text-base"
                                                />
                                            </div>

                                            <div className="group relative">
                                                <label className="absolute left-6 top-1 text-[8px] font-black uppercase tracking-widest text-[#eb595f] opacity-0 group-focus-within:opacity-100 transition-all">Message / Requirements</label>
                                                <textarea
                                                    required
                                                    name="Message"
                                                    rows={3}
                                                    placeholder="Tell us about your dream space..."
                                                    className="w-full px-7 py-5 bg-stone-50 border-2 border-transparent rounded-[1.25rem] focus:border-[#eb595f]/20 focus:bg-white outline-none transition-all placeholder:text-stone-400 font-medium resize-none text-sm sm:text-base"
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full py-5 bg-[#2d2412] text-white font-bold rounded-2xl hover:bg-[#eb595f] transition-all transform hover:-translate-y-1 shadow-2xl flex items-center justify-center gap-3 uppercase tracking-widest text-[10px] sm:text-xs disabled:opacity-50 disabled:cursor-not-allowed group"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-3">
                                                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </span>
                                                ) : (
                                                    <><Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Initialize Design Journey</>
                                                )}
                                            </button>
                                        </form>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#eb595f]/20 transition-all cursor-pointer group">
                                                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                                                    <MessageCircle className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest group-hover:text-[#2d2412]">WhatsApp</span>
                                            </div>
                                            <div className="flex items-center gap-3 p-4 bg-stone-50 rounded-2xl border border-stone-100 hover:border-[#eb595f]/20 transition-all cursor-pointer group">
                                                <div className="w-8 h-8 rounded-lg bg-[#eb595f]/10 flex items-center justify-center text-[#eb595f] group-hover:bg-[#eb595f] group-hover:text-white transition-all">
                                                    <Clock className="w-4 h-4" />
                                                </div>
                                                <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest group-hover:text-[#2d2412]">10:00 - 20:00</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12 space-y-8 my-auto"
                                    >
                                        <div className="relative mx-auto w-32 h-32">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                                                className="absolute inset-0 bg-[#eb595f]/10 rounded-full"
                                            />
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
                                                className="absolute inset-4 bg-[#eb595f] rounded-full flex items-center justify-center text-white shadow-2xl"
                                            >
                                                <CheckCircle className="w-12 h-12" />
                                            </motion.div>
                                        </div>

                                        <div className="space-y-4">
                                            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-[#2d2412]">Thank You!</h2>
                                            <p className="text-stone-500 font-light max-w-sm mx-auto leading-relaxed text-sm sm:text-lg">
                                                Your creative journey with Evoluxe has begun. A design concierge will be in touch within <span className="text-[#eb595f] font-bold">120 minutes</span>.
                                            </p>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                            <button
                                                onClick={() => {
                                                    setSubmitted(false);
                                                    onClose();
                                                }}
                                                className="w-full sm:w-auto px-12 py-5 bg-[#2d2412] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#eb595f] transition-all shadow-xl"
                                            >
                                                Done & Close
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ConsultationModal;
