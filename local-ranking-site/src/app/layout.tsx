import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "RankTracker Pro - Google Maps Rank Tracking with Geo Grid",
    template: "%s | RankTracker Pro",
  },
  description:
    "Track your Google Maps rankings with geo grid visualization and organic SEO insights. Built for local SEO agencies and professionals.",
  keywords: [
    "Google Maps rank tracking",
    "geo grid SEO",
    "local SEO",
    "rank tracker",
    "SERP tracking",
  ],
  authors: [{ name: "RankTracker Pro" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "RankTracker Pro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
