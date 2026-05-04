import type { Metadata } from "next";
import dynamic from 'next/dynamic';
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ConsultationProvider } from "@/components/providers/ConsultationProvider";

const Footer = dynamic(() => import('@/components/Footer'));
const BottomNav = dynamic(() => import('@/components/BottomNav'));

export const metadata: Metadata = {
    title: "EVOLXSTUDIO Interior Architecture & Design",
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
                    <ConsultationProvider>
                        <Navbar />
                        <main>{children}</main>
                        <BottomNav />
                        <Footer />
                    </ConsultationProvider>
                </SmoothScroll>
            </body>
        </html>
    );
}
