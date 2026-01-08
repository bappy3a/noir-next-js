import Foter from "@/components/Foter";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
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
                <NextTopLoader
                    color="#ff3366"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #ff3366,0 0 5px #ff3366"
                    template='<div class="bar" role="bar"><div class="peg"></div></div> <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
                    zIndex={1600}
                />
                <Navbar />
                {children}
                <Foter />
                <Script src="../public/script.js" />
            </body>
        </html>
    );
}
