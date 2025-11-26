"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTechnology = () => {
    const technologySection = document.getElementById("technologie")
    if (technologySection) {
      technologySection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background with industrial pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background -z-10" />
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url('/industrial-metal-pipes-pattern.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono font-medium text-primary">Certifikovaná technologie</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Sanace komínů <span className="text-primary">bez bourání</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Profesionální kompozitní vložky FuranFlex pro rekonstrukci komínů, dešťových svodů a vzduchotechniky.
              Rychlá instalace, až 25 let záruky.
            </p>

            <div className="space-y-3">
              {["Instalace za jeden pracovní den", "Bez nutnosti bourání v patrech", "Odolné až do 600°C"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base font-semibold" onClick={scrollToContact}>
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold bg-transparent"
                onClick={scrollToTechnology}
              >
                Více o technologii
              </Button>
            </div>

            <div className="pt-8 space-y-6">
              {/* Google Review Badge */}
              <div className="flex items-center gap-6 p-6 bg-white rounded-sm border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-3xl font-bold ml-2">4.9</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">Based on 500+ reviews</p>
                  </div>
                </div>

                {/* Certifications inline */}
                <div className="hidden lg:flex items-center gap-8 ml-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">ISO 9001</div>
                    <p className="text-xs text-muted-foreground">Certifikace kvality</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10-25 let</div>
                    <p className="text-xs text-muted-foreground">Záruka výrobce</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <p className="text-xs text-muted-foreground">Realizovaných projektů</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">98%</div>
                    <p className="text-xs text-muted-foreground">Spokojenost zákazníků</p>
                  </div>
                </div>
              </div>

              {/* Mobile certifications - shown below on smaller screens */}
              <div className="grid grid-cols-2 gap-4 lg:hidden">
                <div className="text-center p-4 bg-white rounded-sm border border-border">
                  <div className="text-xl font-bold text-primary">ISO 9001</div>
                  <p className="text-xs text-muted-foreground">Certifikace kvality</p>
                </div>
                <div className="text-center p-4 bg-white rounded-sm border border-border">
                  <div className="text-xl font-bold text-primary">10-25 let</div>
                  <p className="text-xs text-muted-foreground">Záruka výrobce</p>
                </div>
                <div className="text-center p-4 bg-white rounded-sm border border-border">
                  <div className="text-xl font-bold text-primary">500+</div>
                  <p className="text-xs text-muted-foreground">Realizovaných projektů</p>
                </div>
                <div className="text-center p-4 bg-white rounded-sm border border-border">
                  <div className="text-xl font-bold text-primary">98%</div>
                  <p className="text-xs text-muted-foreground">Spokojenost zákazníků</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border-2 border-primary/20 shadow-2xl">
              <img
                src="/industrial-chimney-pipe-installation-worker.jpg"
                alt="FuranFlex instalace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
              <div className="text-4xl font-bold font-mono">25+</div>
              <div className="text-sm font-medium opacity-90">let záruky</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
