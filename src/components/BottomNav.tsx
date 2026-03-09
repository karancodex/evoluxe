"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Home, Grid, Calculator, MessageSquare, Briefcase } from 'lucide-react';

const BottomNav = () => {
    const pathname = usePathname();

    const navItems = [
        {
            label: 'Home',
            icon: Home,
            href: '/',
            active: pathname === '/'
        },
        {
            label: 'Offerings',
            icon: Grid,
            href: '/Offerings/modular-interiors',
            active: pathname.includes('/Offerings')
        },
        {
            label: 'Price',
            icon: Calculator,
            href: '/calculators/kitchen-price-calculator',
            active: pathname.includes('/calculators')
        },
        {
            label: 'Portfolio',
            icon: Briefcase,
            href: '/projects',
            active: pathname === '/projects'
        },
        {
            label: 'Contact',
            icon: MessageSquare,
            href: '/company/contact-us',
            active: pathname.includes('contact-us')
        }
    ];

    return (
        <div className="xl:hidden fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-2 pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-white/80 backdrop-blur-xl border border-stone-200 shadow-[0_-10px_40px_rgba(0,0,0,0.08)] rounded-3xl h-16 flex items-center justify-around px-2 pointer-events-auto"
            >
                {navItems.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="relative flex flex-col items-center justify-center w-full h-full gap-1 group"
                    >
                        <div className={`relative p-2 rounded-2xl transition-all duration-300 ${item.active ? 'bg-[#eb595f] text-white' : 'text-stone-400 group-active:scale-90'}`}>
                            <item.icon className="w-5 h-5" strokeWidth={item.active ? 2.5 : 2} />
                            {item.active && (
                                <motion.div
                                    layoutId="bottom-nav-indicator"
                                    className="absolute inset-0 bg-[#eb595f] rounded-2xl -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-tighter transition-colors duration-300 ${item.active ? 'text-[#eb595f]' : 'text-stone-400'}`}>
                            {item.label}
                        </span>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
};

export default BottomNav;
