
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Update this when your permanent domain is ready.
const siteUrl = "https://mirshabsinnen.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Mirshab Sinnen | IT Undergraduate & Aspiring IT Professional",
    template: "%s | Mirshab Sinnen",
  },

  description:
    "Explore the portfolio of Mirshab Sinnen, an IT undergraduate at SLIIT interested in full-stack development, business and data analysis, quality assurance, and mobile development.",

  applicationName: "Mirshab Sinnen Portfolio",

  keywords: [
    "Mirshab Sinnen",
    "IT Undergraduate",
    "SLIIT",
    "Full Stack Development",
    "Business Analysis",
    "Data Analysis",
    "Quality Assurance",
    "Mobile Development",
    "IT Portfolio",
  ],

  authors: [{ name: "Mirshab Sinnen" }],
  creator: "Mirshab Sinnen",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mirshab Sinnen Portfolio",
    title: "Mirshab Sinnen | IT Undergraduate",
    description:
      "An IT undergraduate exploring technology, data, business solutions, software quality, and application development.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mirshab Sinnen | IT Undergraduate",
    description:
      "Explore my work and interests across technology, data, business solutions, QA, and mobile development.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
