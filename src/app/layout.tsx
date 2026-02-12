import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
export const metadata: Metadata = {
    title: "EVOLUXE — The Evolution of Luxury",
    description: "High-end interior design and architectural studio offering bespoke luxury residential and premium commercial spatial design experiences.",
};

import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Preloader />
                <CustomCursor />
                <SmoothScroll>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
