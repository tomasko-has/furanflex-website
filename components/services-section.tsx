"use client"

import { Flame, CloudRain, Wind, Factory } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    icon: CloudRain,
    title: "Dešťové svody",
    description: "Oprava a sanace dešťových svodů bez bourání v jednotlivých patrech. Instalace za jeden pracovní den.",
    features: ["Bez bourání", "Rychlá instalace", "Trvalé řešení"],
    href: "/destove-svody",
  },
  {
    icon: Flame,
    title: "Komíny na dřevo",
    description: "Vložky pro krby, krbové vložky a kamna. Odolné až do 600°C s dlouhou životností.",
    features: ["Tepelná odolnost", "Certifikováno", "Bezpečné"],
    href: "/kominy",
  },
  {
    icon: Factory,
    title: "Komíny na plyn",
    description: "Vhodné pro všechny typy plynových kotlů. Splňuje všechny normové požadavky.",
    features: ["Vzduchotěsné", "Normy EU", "Chemicky odolné"],
    href: "/kominy",
  },
  {
    icon: Wind,
    title: "Vzduchotechnika",
    description: "Vertikální vedení vzduchotechniky odolné vůči chemikáliím a korozi.",
    features: ["Hladký povrch", "Odolnost", "Dlouhá životnost"],
    href: null,
  },
]

export function ServicesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation()

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-3xl mx-auto text-center mb-16 lg:mb-20 animate-on-scroll ${titleVisible ? "animate-fade-in-up animated" : ""}`}
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Komplexní řešení pro <span className="text-primary">průduchy a komíny</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Nabízíme profesionální sanaci všech typů vertikálních vedení pomocí certifikované technologie FuranFlex.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const CardContent = (
              <div
                key={index}
                className={`bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:scale-105 group h-full animate-on-scroll ${cardsVisible ? "animate-fade-in-up animated" : ""} ${service.href ? "cursor-pointer" : ""}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-xl lg:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-sm lg:text-base font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {service.href && (
                  <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                    Více informací
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            )

            return service.href ? (
              <Link key={service.title} href={service.href}>
                {CardContent}
              </Link>
            ) : (
              <div key={service.title}>{CardContent}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
