"use client";

import Link from "next/link";

const V3Footer = () => {
    return (
        <footer className="bg-gold-dark pt-32 pb-16 border-t border-white/5 relative overflow-hidden">
            {/* Background Branding Elements */}
            <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif text-white/5 italic select-none">EVOLX Studio</div>

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-32">
                    {/* Brand Meta */}
                    <div className="lg:col-span-1 space-y-10">
                        <Link href="/v3" className="flex items-center gap-4 group">
                            <div className="w-12 h-12 bg-gold flex items-center justify-center rounded-xl shadow-2xl">
                                <span className="text-white font-serif text-2xl font-bold">E</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-serif tracking-widest uppercase font-bold text-white">
                                    EVOLX Studio
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.6em] text-gold-soft font-black leading-none">Interiors</span>
                            </div>
                        </Link>
                        <p className="text-ivory/40 text-[10px] uppercase tracking-widest leading-loose font-black italic max-w-xs">
                            Redefining the Indian interior landscape through transparency, precision engineering, and the Royal Amethyst aesthetic.
                        </p>
                        <div className="flex gap-6">
                            {["Instagram", "LinkedIn", "Houzz"].map(social => (
                                <span key={social} className="text-white text-[9px] uppercase tracking-widest font-black border-b border-gold pb-1 cursor-pointer hover:border-white transition-all">
                                    {social}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="space-y-10">
                        <span className="text-gold text-[11px] uppercase tracking-[0.8em] font-black italic">Collections</span>
                        <div className="flex flex-col gap-6">
                            {["Modular Kitchens", "Smart Wardrobes", "Full Home Interiors", "Luxury Civil Work", "Bespoke Lighting"].map(item => (
                                <Link key={item} href="#" className="text-ivory/30 text-[10px] uppercase tracking-widest hover:text-white transition-all font-black hover:pl-2">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="space-y-10">
                        <span className="text-gold text-[11px] uppercase tracking-[0.8em] font-black italic">Inside EVOLX Studio</span>
                        <div className="flex flex-col gap-6">
                            {["Pricing Ethics", "NRI Solutions", "How it Works", "Quality Audit", "Contact Expert"].map(item => (
                                <Link key={item} href="#" className="text-ivory/30 text-[10px] uppercase tracking-widest hover:text-white transition-all font-black hover:pl-2">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter / Contact */}
                    <div className="space-y-10">
                        <span className="text-gold text-[11px] uppercase tracking-[0.8em] font-black italic">Concierge Contact</span>
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <p className="text-white text-lg font-serif italic">+91 40 2345 6789</p>
                                <p className="text-ivory/20 text-[9px] uppercase tracking-widest font-black">Available 10 AM — 8 PM IST</p>
                            </div>
                            <div className="space-y-4">
                                <p className="text-ivory/40 text-[10px] uppercase tracking-widest font-black leading-relaxed">
                                    Level 4, Signature Towers,<br />
                                    Shaikpet, Hyderabad, India.
                                </p>
                            </div>
                            <div className="pt-2">
                                <button className="w-full bg-gold/10 border border-gold/30 text-gold py-4 rounded-xl text-[10px] uppercase tracking-widest font-black hover:bg-gold hover:text-white transition-all">
                                    View Experience Centre
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-16 border-t border-white/5">
                    <span className="text-ivory/20 text-[9px] uppercase tracking-[0.5em] font-black italic">
                        &copy; 2026 EVOLX Studio Interiors. Technical Integrity. Royal Finish.
                    </span>
                    <div className="flex gap-12 text-ivory/20 text-[9px] uppercase tracking-widest font-black">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Security</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Transparency Audit</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default V3Footer;
