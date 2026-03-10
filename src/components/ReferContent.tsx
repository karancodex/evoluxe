"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gift, Share2, Users, Heart, ArrowRight, CheckCircle, Smartphone, Mail, Phone } from "lucide-react";

const ReferContent = () => {
    return (
        <div className="bg-white overflow-hidden">
            {/* 1. HERO SECTION */}
            <section className="relative py-32 px-6 bg-[#2d2412] text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D28D69]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block">
                        <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">COMMUNITY REWARDS</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-9xl font-serif font-bold text-white">
                        Share the <br /><span className="text-[#D28D69] italic">Evolution.</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-stone-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Refer a friend or family member to EVOLX Studio and earn exclusive rewards when they build their dream home with us.
                    </motion.p>
                </div>
            </section>

            {/* 2. HOW IT WORKS GRID */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: "Invite Friends", icon: <Share2 />, desc: "Share your unique referral link or contact details with your inner circle." },
                        { title: "The Handshake", icon: <Users />, desc: "When they book their first design session, you both unlock exclusive perks." },
                        { title: "Get Rewarded", icon: <Gift />, desc: "Receive high-value vouchers or cash rewards upon their project sign-off." }
                    ].map((item, i) => (
                        <div key={i} className="text-center space-y-6 p-12 bg-stone-50 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-stone-100">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#D28D69] mx-auto group-hover:bg-[#D28D69] group-hover:text-white transition-all shadow-sm">
                                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-[#2d2412] mt-4">{item.title}</h3>
                            <p className="text-stone-500 font-light leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. REWARD SHOWCASE */}
            <section className="py-32 px-6 bg-[#faf9f6]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">THE PERKS</span>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Exciting rewards <br /> for both of you.</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { title: "₹10,000 Voucher", subtitle: "For your next decor upgrade." },
                                { title: "Free Design Upgrade", subtitle: "Choose a premium finish for your friend." },
                                { title: "Concierge Priority", subtitle: "Lifetime VIP support access." }
                            ].map((reward, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#D28D69] group-hover:bg-[#D28D69] group-hover:text-white transition-all shadow-sm shrink-0">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-[#2d2412]">{reward.title}</h4>
                                        <p className="text-stone-400 text-sm font-light">{reward.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D28D69]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-3xl font-serif font-bold text-[#2d2412] mb-8 text-center">Refer Your Inner Circle</h3>
                        <form className="space-y-6">
                            <input type="text" placeholder="Your Name" className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:bg-white focus:border-[#D28D69] transition-all" />
                            <input type="tel" placeholder="Friend's Mobile Number" className="w-full px-8 py-4 bg-stone-50 border border-stone-100 rounded-2xl outline-none focus:bg-white focus:border-[#D28D69] transition-all" />
                            <button className="w-full py-5 bg-[#2d2412] text-white font-bold rounded-xl shadow-lg hover:bg-[#D28D69] transition-all tracking-widest uppercase">
                                Send Invite Link
                            </button>
                        </form>
                        <p className="text-stone-300 text-[10px] text-center mt-6">By clicking, you agree to our Referral Program T&C.</p>
                    </div>
                </div>
            </section>

            {/* 4. RECENT REFERRAL SUCCESS BAR */}
            <section className="py-24 px-6 border-y border-stone-100">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-12">
                    <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">Recent Success</p>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white" />
                            <p className="text-[#2d2412] font-bold text-xs">Priya R. referred Sameer K. <span className="text-[#D28D69] ml-2">₹10k Earned</span></p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. TRUST & COMMUNITY */}
            <section className="py-32 px-6 text-center space-y-16">
                <div className="space-y-4">
                    <span className="text-[#D28D69] text-[10px] font-black tracking-[0.4em] uppercase">OUR TRIBE</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#2d2412]">Built on word of mouth.</h2>
                </div>
                <div className="flex justify-center -space-x-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="w-20 h-20 rounded-full border-4 border-white bg-stone-100 first:bg-[#D28D69] last:bg-stone-800" />
                    ))}
                </div>
                <p className="text-stone-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Over 40% of our new projects come from direct referrals from our happy family of homeowners. Trust is our most valuable material.
                </p>
            </section>

            {/* 6. SHARE CHANNELS BAR */}
            <section className="py-24 px-6 bg-stone-50">
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "WhatsApp", icon: <Smartphone />, color: "bg-green-500" },
                        { label: "Email", icon: <Mail />, color: "bg-blue-500" },
                        { label: "Social", icon: <Heart />, color: "bg-pink-500" },
                        { label: "Call", icon: <Phone />, color: "bg-stone-500" }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white border border-stone-100 rounded-3xl text-center space-y-4 hover:shadow-xl transition-all group cursor-pointer">
                            <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform`}>
                                {React.cloneElement(item.icon, { className: "w-5 h-5" })}
                            </div>
                            <p className="text-stone-400 font-bold text-[10px] uppercase tracking-widest">{item.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. PROGRAM DETAILS / T&C SUMMARY */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl font-serif font-bold text-[#2d2412]">Program Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 border border-stone-100 rounded-3xl space-y-4">
                            <h5 className="font-bold flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D28D69]" /> Referral Window</h5>
                            <p className="text-sm text-stone-400 font-light leading-relaxed">Referral must book a consultation within 90 days of your invitation.</p>
                        </div>
                        <div className="p-8 border border-stone-100 rounded-3xl space-y-4">
                            <h5 className="font-bold flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#D28D69]" /> Referral Payout</h5>
                            <p className="text-sm text-stone-400 font-light leading-relaxed">Rewards are disbursed within 14 days of the referee's first project milestone payment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. TESTIMONIAL FROM REFERRER */}
            <section className="py-32 bg-[#2d2412] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <p className="text-2xl md:text-3xl font-serif italic font-light leading-relaxed">
                        "Referring my best friend was the best decision. Not only did she get a beautiful home, I got a premium kitchen island upgrade for free!"
                    </p>
                    <div className="space-y-2">
                        <p className="font-bold text-[#D28D69] uppercase tracking-widest text-xs">Ananya Varma</p>
                        <p className="text-stone-500 text-xs uppercase tracking-widest font-bold">Luxe Homeowner & Brand Advocate</p>
                    </div>
                </div>
            </section>

            {/* 9. FINAL CTA */}
            <section className="py-24 border-t border-stone-100">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#2d2412]">Start sharing <br /> the love.</h2>
                    <p className="text-stone-500 text-lg font-light">Join the EVOLX tribe and start earning rewards for spreading the word.</p>
                    <button className="px-12 py-6 bg-[#2d2412] text-white rounded-2xl font-bold tracking-widest uppercase hover:bg-[#D28D69] transition-all shadow-xl flex items-center gap-4 mx-auto">
                        Copy Referral Link <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ReferContent;
