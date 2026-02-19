"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import V3Navbar from "@/components/v3/V3Navbar";
import V3Hero from "@/components/v3/V3Hero";
import V3QuickBenefits from "@/components/v3/V3QuickBenefits";
import V3Collections from "@/components/v3/V3Collections";
import V3VideoBanner from "@/components/v3/V3VideoBanner";
import V3ValueProp from "@/components/v3/V3ValueProp";
import V3Expertise from "@/components/v3/V3Expertise";
import V3ProcessSimple from "@/components/v3/V3ProcessSimple";
import V3Testimonials from "@/components/v3/V3Testimonials";
import V3Comparison from "@/components/v3/V3Comparison";
import V3FAQ from "@/components/v3/V3FAQ";
import V3FinalCTA from "@/components/v3/V3FinalCTA";
import V3Footer from "@/components/v3/V3Footer";

export default function HomeV3() {
    useEffect(() => {
        // Apply light theme class to body for this page
        document.body.classList.add("light-theme");

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            document.body.classList.remove("light-theme");
            lenis.destroy();
        };
    }, []);

    return (
        <main className="bg-amethyst-lightest text-amethyst-dark selection:bg-amethyst-primary selection:text-white">
            <V3Navbar />
            <V3Hero />
            <V3QuickBenefits />
            <V3Collections />
            <V3VideoBanner />
            <V3Expertise />
            <V3ValueProp />
            <V3ProcessSimple />
            <V3Comparison />
            <V3Testimonials />
            <V3FAQ />
            <V3FinalCTA />
            <V3Footer />
        </main>
    );
}
