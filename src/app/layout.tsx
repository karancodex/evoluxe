import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
export const metadata: Metadata = {
    title: "EVOLX Studio — Interior Architecture & Design",
    description: "High-end interior architecture and architectural studio offering bespoke luxury residential and premium commercial spatial design experiences.",
    icons: {
        icon: "/v4/favicon.png",
        shortcut: "/v4/favicon.png",
        apple: "/v4/favicon.png",
    }
};

import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

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
