"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function LightShift() {
    const { scrollYProgress } = useScroll();

    // Transition from Deep Charcoal to Ivory to Black
    const bgColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        ["#0a0a0a", "#faf9f6", "#121212", "#000000"]
    );

    const textColor = useTransform(
        scrollYProgress,
        [0, 0.3, 0.6, 1],
        ["#faf9f6", "#0a0a0a", "#e5d5b0", "#ffffff"]
    );

    return (
        <motion.div
            style={{ backgroundColor: bgColor, color: textColor }}
            className="transition-colors duration-1000"
        >
            {/* This component is just a wrapper for the entire page or sections */}
        </motion.div>
    );
}
