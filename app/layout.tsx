import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seodxb.com"),
  title: {
    default: "SEODXB | Global SEO Agency Dubai | On-Page SEO, AEO & GEO",
    template: "%s | SEODXB - Dubai SEO Agency",
  },
  description: "Dubai's leading SEO agency specialising in On-Page SEO, Answer Engine Optimisation (AEO) and Generative Engine Optimisation (GEO). We help ambitious brands rank #1 on Google and get recommended by AI search engines. 150+ clients. Proven results.",
  keywords: ["SEO Dubai", "SEO Agency Dubai", "AEO Dubai", "GEO Dubai", "Generative Engine Optimisation", "Answer Engine Optimisation", "On-Page SEO UAE", "Dubai SEO Expert"],
  authors: [{ name: "Kowmiya Annamalai", url: "https://seodxb.com" }],
  creator: "SEODXB",
  publisher: "SEODXB",
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: "SEODXB",
    images: [{ url: "/og-default.png" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@seodxb",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0A2540]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
