"use client";

import { useEffect } from "react";
import V2Navbar from "@/components/v2-luxury/V2Navbar";
import V2Hero from "@/components/v2-luxury/V2Hero";
import V2Philosophy from "@/components/v2-luxury/V2Philosophy";
import V2Showcase from "@/components/v2-luxury/V2Showcase";
import V2Materials from "@/components/v2-luxury/V2Materials";
import V2Process from "@/components/v2-luxury/V2Process";
import V2Contact from "@/components/v2-luxury/V2Contact";

export default function HomeV2() {
    useEffect(() => {
        document.body.classList.add("light-theme", "v2-page");
        return () => {
            document.body.classList.remove("light-theme", "v2-page");
        };
    }, []);

    return (
        <main className="bg-white selection:bg-gold selection:text-white">
            <V2Navbar />
            <V2Hero />
            <V2Philosophy />
            <V2Showcase />
            <V2Materials />
            <V2Process />
            <V2Contact />
        </main>
    );
}
