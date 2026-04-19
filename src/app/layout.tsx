import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.css";
import QuoteModal from "@/components/QuoteModal";
import Background from "@/components/Background";
import Header from "@/components/Header";
import HomeHashScroll from "@/components/HomeHashScroll";
import FallingPetals from "@/components/FallingPetals";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const cormorantExp = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-exp-display",
  weight: ["500", "600", "700"],
});

const nunitoExp = Nunito({
  subsets: ["latin"],
  variable: "--font-exp-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pranavi Immanni | Data Science & AI Engineer",
  description: "Engineering intelligent systems from data. Portfolio: projects, experience, and skills.",
};

export const viewport: Viewport = {
  themeColor: "#4a4950",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${cormorantExp.variable} ${nunitoExp.variable} font-sans antialiased min-h-screen`}
      >
        <Background />
        <FallingPetals />
        <QuoteModal />
        <Header />
        <HomeHashScroll />
        {children}
      </body>
    </html>
  );
}
