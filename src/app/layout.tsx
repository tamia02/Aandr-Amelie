import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import RecentPurchaseToast from "@/components/RecentPurchaseToast";

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

const siteUrl = "https://www.aandreamelie.com";
const siteTitle = "Aandré Amelie — All Shades, All Souls";
const siteDescription =
  "Natural hydrosol skincare crafted for every shade and soul. Discover Royal Rose Elixir, Glow Quinch, Acne Shield, and Vital Grow Scalp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "Aandré Amelie",
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/royal-rose-new-main.jpg",
        width: 896,
        height: 1200,
        alt: "Aandré Amelie — Royal Rose Elixir",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/royal-rose-new-main.jpg"],
  },
  verification: {
    google: "dP-2LvuqDW7VgUJ3ByQcND4GuKXca33ZAYkFBQ_EA6E",
  },
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
      <body className="min-h-full flex flex-col bg-cream text-charcoal overflow-x-hidden">
        <div className="grain-overlay" />
        {children}
        <RecentPurchaseToast />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}

        {/* Klaviyo */}
        {process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID && (
          <Script
            src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.NEXT_PUBLIC_KLAVIYO_COMPANY_ID}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
