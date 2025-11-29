"use client"

import { Shield, Factory, Flame, Droplet } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Certifikovaná kvalita",
    description: "Vyrobeno z tepelně odolné pryskyřice vyztužené skleněnými vlákny podle evropských norem.",
  },
  {
    icon: Factory,
    title: "Bez spojů",
    description: "Vložka z jednoho kusu až do výšky 100m eliminuje riziko netěsností a slabin.",
  },
  {
    icon: Flame,
    title: "Teplotní odolnost",
    description: "Materiál odolává teplotám až 600°C, vhodný pro všechny typy topných systémů.",
  },
  {
    icon: Droplet,
    title: "Chemická stabilita",
    description: "Odolné proti kondenzátu, kyselinám a dalším agresivním látkám.",
  },
]

export function TechnologySection() {
  return (
    <section id="technologie" className="py-20 lg:py-32 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Technologie <span className="text-primary">FuranFlex</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty">
            Moderní kompozitní systém pro sanaci komínů a průduchů bez bourání s jedinečnými vlastnostmi a dlouhou
            životností.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-4xl font-bold">Jak funguje instalace?</h3>
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Příprava",
                  description: "Prohlídka komína a příprava prostoru pro instalaci shora a zdola.",
                },
                {
                  step: "02",
                  title: "Impregnace",
                  description: "Hadice je nasycena tepelně odolnou pryskyřicí v našem závodě.",
                },
                {
                  step: "03",
                  title: "Instalace",
                  description: "Vložka je vložena do komína a pomocí tlaku vzduchu rozepnuta.",
                },
                {
                  step: "04",
                  title: "Vytvrzení",
                  description: "Pryskyřice vytvrzuje při pokojové teplotě nebo pomocí horké páry.",
                },
              ].map((step) => (
                <div key={step.step} className="flex gap-4 group">
                  <div className="shrink-0 w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center font-mono font-bold text-primary text-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden border-2 border-border shadow-2xl">
              <img
                src="/technical-installation-process-chimney-worker.jpg"
                alt="FuranFlex instalační proces"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-8 rounded-sm shadow-xl">
              <div className="text-5xl font-bold font-mono">1 den</div>
              <div className="text-base font-medium opacity-90 mt-2">kompletní instalace</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
