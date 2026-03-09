import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <SmoothScroll>
                    <Navbar />
                    <main>{children}</main>
                    <BottomNav />
                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
