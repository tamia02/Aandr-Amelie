import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import "./globals.css";

const caslon = Libre_Caslon_Text({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Aandré Amelie — All Shades, All Souls",
    template: "%s — Aandré Amelie",
  },
  description:
    "Natural hydrosol skincare crafted for every shade and soul. Discover Royal Rose Elixir, Glow Quinch, Acne Shield, and Vital Grow Scalp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${caslon.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
