"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { getLink } from '@/data/nav-data';

const Footer = () => {
    const footerLinks = {
        company: [
            { name: "About Us", href: getLink("About Us") },
            { name: "Our Team", href: getLink("Our Team") },
            // { name: "Press & Media", href: getLink("Press & Media") },
            { name: "Contact Us", href: getLink("Contact Us") },
            { name: "Privacy Policy", href: getLink("Privacy Policy") }
        ],
        resources: [
            { name: "Blog", href: getLink("Blog") },
            { name: "Customer Stories", href: getLink("Customer Stories") },
            { name: "Help Center", href: getLink("Help Center") },
            { name: "Terms & Conditions", href: getLink("Terms & Conditions") }
        ]
    };

    const socialIcons = [
        {
            name: "Instagram",
            path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        },
        {
            name: "Facebook",
            path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
        },
        {
            name: "Twitter",
            path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
        },
        {
            name: "LinkedIn",
            path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
        }
    ];

    return (
        <footer className="bg-[#fcf8ff] text-[#2d2412] pt-24 pb-12 relative overflow-hidden text-center border-t border-[#faf9f6]">
            {/* Background Watermark */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
                <h1 className="text-[20vw] font-bold text-[#eb595f] leading-none tracking-tighter absolute -bottom-20 left-1/2 transform -translate-x-1/2 select-none whitespace-nowrap">
                    EVOLXStudio
                </h1>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e5d5b0] opacity-10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                {/* Top Section: CTA & Newsletter */}
                <div className="flex flex-col items-center gap-8 mb-24 border-b border-[#faf9f6] pb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif font-medium text-[#4d3b1a]"
                    >
                        Let's create your <br className="hidden sm:block" />
                        <span className="text-[#eb595f] italic">dream space.</span>
                    </motion.h2>

                    <p className="text-[#4d3b1a]/60 mb-2 max-w-md mx-auto">
                        Subscribe to our newsletter for the latest design trends, tips, and exclusive offers.
                    </p>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);
                            const data = Object.fromEntries(formData.entries());
                            try {
                                const response = await fetch("https://formsubmit.co/ajax/info@evolxstudio.com", {
                                    method: "POST",
                                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                                    body: JSON.stringify(data)
                                });
                                if (response.ok) {
                                    alert("Subscribed successfully!");
                                    form.reset();
                                }
                            } catch (err) {
                                alert("Failed to subscribe.");
                            }
                        }}
                        className="flex flex-col sm:flex-row gap-4 max-w-lg w-full justify-center"
                    >
                        <input
                            required
                            name="Newsletter Email"
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full sm:w-80 px-6 py-4 bg-white border border-stone-200 rounded-full focus:outline-none focus:border-[#eb595f] text-[#2d2412] placeholder-stone-400 transition-colors shadow-sm text-center sm:text-left"
                        />
                        <button type="submit" className="px-10 py-4 bg-[#eb595f] text-white font-bold rounded-full hover:bg-[#2d2412] transition-all whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Middle Section: Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16 md:mb-24 justify-items-center">

                    {/* Column 1: Company */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-bold mb-6 text-[#eb595f] uppercase tracking-widest text-xs">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#2d2412]/60 hover:text-[#eb595f] transition-colors relative group text-sm font-medium">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-[#eb595f] group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2: Brand & Socials (Center) */}
                    <div className="flex flex-col items-center order-first sm:order-none sm:col-span-2 md:col-span-1 border-b sm:border-b-0 border-[#faf9f6] pb-12 sm:pb-0">
                        <Link href="/" className="mb-4 block group">
                            <div className="relative h-16 w-56 md:h-20 md:w-80">
                                <Image
                                    src="/logo.png"
                                    alt="EVOLXStudio Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-[#4d3b1a]/60 leading-relaxed max-w-sm mb-8 text-sm">
                            Redefining luxury living spaces with bespoke interiors that blend functionality with timeless aesthetics.
                        </p>
                        <div className="flex gap-4 justify-center mb-8">
                            {socialIcons.map((social) => (
                                <Link
                                    key={social.name}
                                    href="#"
                                    className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center text-stone-400 hover:bg-[#eb595f] hover:text-white hover:border-[#eb595f] transition-all duration-300 group shadow-sm bg-white"
                                    aria-label={social.name}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="group-hover:scale-110 transition-transform duration-300"
                                    >
                                        <path d={social.path} />
                                    </svg>
                                </Link>
                            ))}
                        </div>

                        {/* Business Details */}
                        <div className="text-[#4d3b1a]/70 text-sm space-y-2 mt-4">
                            <p className="font-bold text-[#eb595f] uppercase tracking-widest text-[10px] mb-2">Visit Us</p>
                            <p>1034, New Nana Peth,</p>
                            <p>Opp Padamji Police Station, Pune - 411002</p>
                            <div className="pt-4 space-y-1">
                                <p><span className="font-bold">Email:</span> Info@evolxstudio.com</p>
                                <p><span className="font-bold">Phone:</span> +91 7744 80 6644</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Resources */}
                    <div className="flex flex-col items-center">
                        <h4 className="text-lg font-bold mb-6 text-[#eb595f] uppercase tracking-widest text-xs">Resources</h4>
                        <ul className="space-y-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#2d2412]/60 hover:text-[#eb595f] transition-colors relative group text-sm font-medium">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-[1.5px] bg-[#eb595f] group-hover:w-full transition-all duration-300 transform -translate-x-1/2"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-[#faf9f6] pt-8 flex flex-col items-center gap-4 text-xs text-stone-400 font-medium">
                    <p>© 2026 EVOLXStudio Design Studio. All rights reserved. | Developed by RightBrain Infotech Pvt. Ltd.</p>
                    <div className="flex gap-8">
                        <Link href={getLink("Privacy Policy")} className="hover:text-[#eb595f] transition-colors">Privacy Policy</Link>
                        <Link href={getLink("Terms & Conditions")} className="hover:text-[#eb595f] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#eb595f] transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
