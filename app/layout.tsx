import './globals.css'
import { Figtree } from 'next/font/google'
import { Sidebar } from "@/components/Sidebar";
import React from "react";

const figTree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify clone',
  description: 'Listen to music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={figTree.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
