"use client"

import { Clock, Shield, Wrench, Zap, Award, TrendingUp } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  {
    icon: Clock,
    title: "Rychlost instalace",
    description: "Kompletní instalace trvá pouze několik hodin. Systém je okamžitě připraven k provozu.",
  },
  {
    icon: Shield,
    title: "Dlouhá záruka",
    description: "Poskytujeme záruku 10-25 let v závislosti na typu aplikace a použití.",
  },
  {
    icon: Wrench,
    title: "Bez bourání",
    description: "Čistá instalace vyžadující přístup pouze shora a zdola, bez zásahů v patrech.",
  },
  {
    icon: Zap,
    title: "Vysoká odolnost",
    description: "Odolné proti korozi, chemikáliím a teplotám až do 600°C.",
  },
  {
    icon: Award,
    title: "Certifikováno",
    description: "Splňuje všechny evropské normy a požadavky pro sanaci komínů.",
  },
  {
    icon: TrendingUp,
    title: "Spolehlivost",
    description: "Vložka z jednoho kusu až do výšky 100m bez spojů a slabin.",
  },
]

export function BenefitsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id="vyhody" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div ref={titleRef} className={`animate-on-scroll ${titleVisible ? "animate-fade-in-up animated" : ""}`}>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Proč zvolit <span className="text-primary">FuranFlex</span>
              </h2>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8 text-pretty">
                Kompozitní vložky FuranFlex představují moderní a spolehlivé řešení pro sanaci komínů a průduchů.
                Technologie je vyrobena z tepelně odolné pryskyřice vyztužené skleněnými vlákny.
              </p>
            </div>

            <div ref={benefitsRef} className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={benefit.title}
                    className={`space-y-3 animate-on-scroll ${benefitsVisible ? "animate-fade-in-up animated" : ""}`}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-sm flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold">{benefit.title}</h3>
                    <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            ref={imageRef}
            className={`relative animate-on-scroll ${imageVisible ? "animate-fade-in-right animated" : ""}`}
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden border-2 border-border shadow-2xl hover:shadow-primary/20 hover:scale-[1.02] transition-all duration-500">
              <img
                src="/industrial-composite-material-close-up-technical.jpg"
                alt="FuranFlex materiál"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-8 -left-8 bg-accent text-accent-foreground px-6 py-4 rounded-sm shadow-xl hover:scale-110 transition-transform">
              <div className="text-2xl font-bold font-mono">600°C</div>
              <div className="text-sm font-medium opacity-90">max. teplota</div>
            </div>
            <div className="absolute bottom-8 -right-8 bg-card border-2 border-primary px-6 py-4 rounded-sm shadow-xl hover:scale-110 transition-transform">
              <div className="text-2xl font-bold font-mono text-primary">100m</div>
              <div className="text-sm font-medium">max. výška</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
