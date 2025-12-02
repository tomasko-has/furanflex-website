"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useRef } from "react"

export function CTASection() {
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("lottie-web").then((lottie) => {
      if (lottieRef.current) {
        lottie.default.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://lottie.host/embed/a8f3d2e1-5c4b-4a3d-8e2f-1b9c6d7a5e8f/animation.json",
        })
      }
    })
  }, [])

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 opacity-10 pointer-events-none hidden lg:block">
        <div ref={lottieRef} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Máte zájem o nezávaznou konzultaci?</h2>
            <p className="text-lg opacity-90 leading-relaxed mb-12 text-pretty">
              Kontaktujte nás a my vám poskytneme profesionální posouzení vašeho projektu včetně cenové nabídky.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-sm flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">Telefon</div>
                  <a href="tel:+420123456789" className="opacity-90 hover:opacity-100 transition-opacity">
                    +420 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-sm flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">E-mail</div>
                  <a href="mailto:info@furanflex.cz" className="opacity-90 hover:opacity-100 transition-opacity">
                    info@furanflex.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-sm flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold mb-1">Adresa</div>
                  <div className="opacity-90">Praha, Česká republika</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background text-foreground rounded-sm p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Poptávkový formulář</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Jméno a příjmení *
                </label>
                <Input id="name" placeholder="Jan Novák" required className="bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail *
                </label>
                <Input id="email" type="email" placeholder="jan@example.com" required className="bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <Input id="phone" type="tel" placeholder="+420 123 456 789" className="bg-background cursor-text" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Zpráva *
                </label>
                <Textarea
                  id="message"
                  placeholder="Popište váš projekt a požadavky..."
                  rows={4}
                  required
                  className="bg-background resize-none cursor-text"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold cursor-pointer"
              >
                Odeslat poptávku
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
