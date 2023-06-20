import './globals.css';
import { Figtree } from 'next/font/google';
import { Sidebar } from "@/components/Sidebar";
import React from "react";
import { SupabaseProvider } from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";

const figTree = Figtree({ subsets: ['latin'] });

export const metadata = {
    title: 'Spotify clone',
    description: 'Listen to music!',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={figTree.className}>
        <SupabaseProvider>
            <UserProvider>
                <Sidebar>
                    {children}
                </Sidebar>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    );
}
