import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

// Using Inter for modern industrial look and JetBrains Mono for technical elements
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "FuranFlex CZ - Profesionální sanace komínů a dešťových svodů kompozitními vložkami",
  description:
    "Profesionální sanace komínů, dešťových svodů a vzduchotechniky pomocí certifikovaných kompozitních vložek FuranFlex. Rychlá instalace bez bourání, záruka až 25 let. ISO 9001 certifikace.",
  keywords:
    "furanflex, kompozitní vložky, sanace komínů, oprava komínů, dešťové svody, vzduchotechnika, renovace komínů",
  openGraph: {
    title: "FuranFlex CZ - Profesionální sanace komínů kompozitními vložkami",
    description:
      "Sanace komínů bez bourání. Certifikované kompozitní vložky FuranFlex s až 25letou zárukou. ISO 9001 certifikace, 500+ realizovaných projektů.",
    type: "website",
    locale: "cs_CZ",
    url: "https://furanflex-website.vercel.app",
    siteName: "FuranFlex CZ",
    images: [
      {
        url: "https://furanflex-website.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FuranFlex CZ - Profesionální sanace komínů kompozitními vložkami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FuranFlex CZ - Profesionální sanace komínů kompozitními vložkami",
    description:
      "Sanace komínů bez bourání. Certifikované kompozitní vložky s až 25letou zárukou. ISO 9001 certifikace.",
    images: ["https://furanflex-website.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
