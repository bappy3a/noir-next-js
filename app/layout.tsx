import Foter from "@/components/Foter";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
    title: "NOIR",
    description: "NOIR is a luxury fashion brand that offers a wide range of products for men and women.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Foter />
                <Script src="../public/script.js" />
            </body>
        </html>
    );
}
