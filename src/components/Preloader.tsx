"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
                >
                    <div className="relative w-64 h-64 flex items-center justify-center">
                        {/* Logo Drawing Animation */}
                        <svg viewBox="0 0 100 100" className="w-32 h-32">
                            <motion.path
                                d="M 20 20 L 80 20 L 80 80 L 20 80 L 20 20 M 35 35 L 65 35 L 65 65 L 35 65 L 35 35"
                                fill="none"
                                stroke="#c5a059"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2.5, ease: "easeInOut" }}
                            />
                        </svg>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute text-gold text-[10px] uppercase tracking-[0.5em] mt-32"
                        >
                            EVOLX Studio
                        </motion.div>
                    </div>

                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10">
                        <motion.div
                            className="h-full bg-gold"
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                        />
                        <div className="mt-4 text-center">
                            <span className="text-white/40 text-[8px] uppercase tracking-[0.2em]">
                                Initializing Atelier Experience {percent}%
                            </span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
