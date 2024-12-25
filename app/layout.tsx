import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Antonio } from 'next/font/google';
import { Inter } from 'next/font/google';


const antonio = Antonio({ subsets: ['latin'], weight: ['400'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const humane = localFont({
  src: "./fonts/Humane-SemiBold.ttf",
  variable: "--font-humane",
  weight: "100 900",
});
const jacquard = localFont({
  src: "./fonts/Jacquard12-Regular.ttf",
  variable: "--font-jacquard",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Xactitude2k25",
  description: "Xactitude'25: Kristu Jayanti College's IT fest featuring gaming, tech challenges, and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${antonio.className} ${humane.className} ${jacquard.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
