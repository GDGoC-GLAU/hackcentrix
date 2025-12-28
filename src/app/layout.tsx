import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Hackcentrix | GDG On Campus GLAU",
  description: "A high-stakes hackathon where tech meets the supernatural.",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/icon.png",
  },
  openGraph: {
    title: "Hackcentrix | GDG On Campus GLAU",
    description: "A high-stakes hackathon where tech meets the supernatural.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hackcentrix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hackcentrix | GDG On Campus GLAU",
    description: "A high-stakes hackathon where tech meets the supernatural.",
    images: ["/og.jpg"],
  },
  themeColor: "#ff0909",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
