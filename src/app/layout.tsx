import "./globals.css";
import type { Metadata } from "next";

import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: "Dev Stage",
};

const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'],
  variable: '--font-oxanium'
})

const monstserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-montserrat'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${monstserrat.variable}`}>
      <body className="bg-black text-white text-4xl ">{children}</body>
    </html>
  );
}
