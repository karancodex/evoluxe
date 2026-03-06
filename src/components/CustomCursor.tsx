"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).tagName === "A" || (e.target as HTMLElement).tagName === "BUTTON") {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 bg-gold rounded-full pointer-events-none z-[10000] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 4 : 1,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-64 h-64 bg-gold/10 rounded-full pointer-events-none z-[9999] blur-[80px]"
                animate={{
                    x: mousePosition.x - 128,
                    y: mousePosition.y - 128,
                    opacity: isHovering ? 0.6 : 0.3,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30, mass: 1 }}
            />
        </>
    );
}
