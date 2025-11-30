"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowBanner(false)
    // Enable analytics/tracking scripts here if needed
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      })
    }
  }

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-in-down">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-lg border border-border bg-background/95 backdrop-blur-sm p-4 md:p-6 shadow-lg">
          <button
            onClick={rejectCookies}
            className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
            aria-label="Zavrieť"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between pr-8">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Súbory cookie a ochrana osobných údajov</h3>
              <p className="text-sm text-muted-foreground">
                Používame súbory cookie na zlepšenie vášho zážitku z prehliadania, zobrazenie personalizovaného obsahu a
                analýzu návštevnosti našej webovej stránky. Kliknutím na „Prijať všetko" súhlasíte s používaním súborov
                cookie.{" "}
                <Link href="/ochrana-osobnich-udaju" className="underline hover:text-primary">
                  Zásady ochrany osobných údajov
                </Link>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
              <Button variant="outline" onClick={rejectCookies} className="w-full sm:w-auto bg-transparent">
                Odmietnuť
              </Button>
              <Button onClick={acceptCookies} className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Prijať všetko
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
