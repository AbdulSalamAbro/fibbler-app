import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/common/Footer/Footer";
import CookieConsent from "./components/cookieConsent";
import PlausibleProvider from "next-plausible";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fibbler.co"),
  title: {
    default:
      "Fibbler: Identify influenced deals from your LinkedIn Ads impression data",
    template: "%s | Fibbler",
  },
  description:
    "Fibbler helps you track how LinkedIn Ads impressions influence pipeline and revenue. Turn engagement data into actionable intent signals for your ABM strategy with seamless CRM and outbound tool integrations.",
  keywords: [
    "linkedin ads data",
    "pipeline attribution",
    "abm program",
    "revenue attribution",
    "linkedin ad performance",
    "intent signals",
    "crm integration",
    "hubspot integration",
    "salesforce integration",
    "b2b marketing analytics",
    "account-based marketing",
    "ad campaign insights",
    "marketing automation",
  ],
  authors: [{ name: "Adam Holmgren" }],
  creator: "Fibbler",
  publisher: "Fibbler",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Fibbler",
    title:
      "Fibbler: Identify influenced deals from your LinkedIn Ads impression data",
    description:
      "Fibbler helps you track how LinkedIn Ads impressions influence pipeline and revenue. Turn engagement data into actionable intent signals for your ABM strategy with seamless CRM and outbound tool integrations.",
    url: "https://fibbler.co",
    images: [
      {
        url: "https://fibbler.co/assets/img/fibbler_preview.png",
        width: 1200,
        height: 630,
        alt: "Fibbler Platform Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fibbler: Identify influenced deals from your LinkedIn Ads impression data",
    description:
      "Fibbler helps you track how LinkedIn Ads impressions influence pipeline and revenue. Turn engagement data into actionable intent signals for your ABM strategy with seamless CRM and outbound tool integrations.",
    images: ["https://fibbler.co/assets/img/fibbler_preview.png"],
    creator: "@fibbler",
    site: "@fibbler",
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
  alternates: {
    canonical: "https://fibbler.co",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="fibbler.co" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
