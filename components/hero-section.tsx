"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function HeroSection() {
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    import("lottie-web").then((lottie) => {
      if (lottieRef.current) {
        lottie.default.loadAnimation({
          container: lottieRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "https://lottie.host/4f3b0c8e-7e5a-4d3f-9c5e-8a2b1d4e6f7a/animation.json", // Construction/Industrial animation
        })
      }
    })
  }, [])

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
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center pt-20 md:pt-12">
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

      <div className="absolute top-20 right-10 w-64 h-64 opacity-10 -z-10 hidden lg:block">
        <div ref={lottieRef} className="w-full h-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance animate-fade-in-up animation-delay-100">
              Sanace komínů <span className="text-primary">bez bourání</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl animate-fade-in-up animation-delay-200">
              Profesionální kompozitní vložky FuranFlex pro rekonstrukci komínů, dešťových svodů a vzduchotechniky.
              Rychlá instalace, až 25 let záruky.
            </p>

            <div className="space-y-3 animate-fade-in-up animation-delay-300">
              {["Instalace za jeden pracovní den", "Bez nutnosti bourání v patrech", "Odolné až do 600°C"].map(
                (item, idx) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{ animationDelay: `${300 + idx * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up animation-delay-400">
              <Button size="lg" className="text-base font-semibold cursor-pointer" onClick={scrollToContact}>
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base font-semibold bg-transparent cursor-pointer"
                onClick={scrollToTechnology}
              >
                Více o technologii
              </Button>
            </div>

            <div className="pt-8 space-y-6 animate-fade-in-up animation-delay-500">
              {/* Google Rating Card - Premium Design */}
              <div className="max-w-xs mx-auto">
                <div className="relative bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl border border-blue-100 p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-blue-200 overflow-hidden group">
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,rgb(0,0,0)_1px,transparent_0)] bg-[length:20px_20px]" />

                  <div className="relative flex items-start gap-3">
                    {/* Google Logo */}
                    <div className="shrink-0 mt-0.5">
                      <svg className="w-10 h-10 drop-shadow-sm" viewBox="0 0 24 24">
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

                    <div className="flex-1 space-y-1.5">
                      {/* Rating */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">4.9</span>
                        <span className="text-xs text-muted-foreground font-medium">/5</span>
                      </div>

                      {/* Review count */}
                      <p className="text-xs text-gray-600 font-medium">
                        Na základě <span className="text-primary font-semibold">500+ recenzí</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid - Modern Cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: "ISO 9001",
                    desc: "Certifikace kvality",
                    gradient: "from-blue-500/10 to-blue-600/5",
                    border: "border-blue-200/50",
                    hoverBorder: "hover:border-blue-400",
                    textColor: "text-blue-700",
                  },
                  {
                    label: "500+",
                    desc: "Realizovaných projektů",
                    gradient: "from-emerald-500/10 to-emerald-600/5",
                    border: "border-emerald-200/50",
                    hoverBorder: "hover:border-emerald-400",
                    textColor: "text-emerald-700",
                  },
                  {
                    label: "98%",
                    desc: "Spokojenost zákazníků",
                    gradient: "from-amber-500/10 to-amber-600/5",
                    border: "border-amber-200/50",
                    hoverBorder: "hover:border-amber-400",
                    textColor: "text-amber-700",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.label}
                    className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-xl border ${item.border} ${item.hoverBorder} p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group`}
                    style={{ animationDelay: `${600 + idx * 100}ms` }}
                  >
                    {/* Animated background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      <div className={`text-2xl lg:text-3xl font-bold ${item.textColor} mb-1.5`}>{item.label}</div>
                      <p className="text-[10px] lg:text-xs text-muted-foreground font-semibold leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right animation-delay-200">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border-2 border-primary/20 shadow-2xl relative hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-500">
              <Image
                src="/industrial-chimney-pipe-installation-worker.jpg"
                alt="FuranFlex instalace"
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
