"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyContent = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Simple Header */}
            <section className="py-24 border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-[#eb595f] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Legal Center</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2d2412] mb-6">Privacy Policy</h1>
                    <p className="text-stone-400 font-medium">Last Updated: February 24, 2024</p>
                </div>
            </section>

            {/* Document Content */}
            <section className="py-24 max-w-4xl mx-auto px-6 prose prose-stone lg:prose-xl">
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-[#2d2412]">1. Introduction</h2>
                        <p className="text-stone-600 leading-relaxed font-light">
                            Welcome to EVOLX Studio. We value your privacy and are committed to protecting your personal data.
                            This privacy policy will inform you as to how we look after your personal data when you visit
                            our website (regardless of where you visit it from) and tell you about your privacy rights.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-[#2d2412]">2. Data We Collect</h2>
                        <p className="text-stone-600 leading-relaxed font-light">
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                        </p>
                        <ul className="list-disc pl-10 space-y-4 text-stone-600 font-light">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-[#2d2412]">3. How We Use Your Data</h2>
                        <p className="text-stone-600 leading-relaxed font-light">
                            We will only use your personal data when the law allows us to. Most commonly, we will use your
                            personal data in the following circumstances:
                        </p>
                        <ul className="list-disc pl-10 space-y-4 text-stone-600 font-light">
                            <li>To provide you with our interior design services.</li>
                            <li>To manage our relationship with you.</li>
                            <li>To improve our website, products/services, marketing and customer relationships.</li>
                            <li>To make suggestions and recommendations to you about goods or services that may be of interest.</li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif font-bold text-[#2d2412]">4. Your Legal Rights</h2>
                        <p className="text-stone-600 leading-relaxed font-light">
                            Under certain circumstances, you have rights under data protection laws in relation to your personal data,
                            including the right to request access, correction, erasure, restriction, transfer, to object to processing,
                            and the right to withdraw consent.
                        </p>
                    </div>

                    <div className="p-10 bg-[#faf9f6] rounded-[2rem] border border-stone-100">
                        <h3 className="text-xl font-serif font-bold text-[#2d2412] mb-4">Questions?</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">
                            If you have any questions about this privacy policy or our privacy practices, please contact our
                            data protection officer at <span className="text-[#eb595f] font-bold">privacy@evolx.studio</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyContent;
