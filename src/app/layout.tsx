import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// TODO: edit this
export const metadata: Metadata = {
    title: "Colorade Agrovoltaic Learning Center",
    description: "A map of Solar Development in Colorado",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
