import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Theme} from '@radix-ui/themes';
import NavBar from "@/app/NavBar";


const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Issue Tracker",
    description: "Issue Tracker Description Goes here",
};

export default function RootLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en" className={inter.variable}>
        <body>
        <Theme accentColor="iris">
            <NavBar/>
            <main className="p-5">
                {children}
            </main>
        </Theme>
        </body>
        </html>
    );
}
