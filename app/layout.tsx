import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Using Inter for modern industrial look and JetBrains Mono for technical elements
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "FuranFlex CZ - Kompozitní vložky pro komíny a svody",
  description:
    "Profesionální sanace komínů, dešťových svodů a vzduchotechniky pomocí kompozitních vložek FuranFlex. Rychlá instalace bez bourání, záruka až 25 let.",
  keywords:
    "furanflex, kompozitní vložky, sanace komínů, oprava komínů, dešťové svody, vzduchotechnika, renovace komínů",
  openGraph: {
    title: "FuranFlex CZ - Kompozitní vložky",
    description: "Profesionální sanace komínů a svodů pomocí kompozitních vložek",
    type: "website",
    locale: "cs_CZ",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
      </body>
    </html>
  )
}
