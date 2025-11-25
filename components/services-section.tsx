import { Flame, CloudRain, Wind, Factory } from "lucide-react"

const services = [
  {
    icon: CloudRain,
    title: "Dešťové svody",
    description: "Oprava a sanace dešťových svodů bez bourání v jednotlivých patrech. Instalace za jeden pracovní den.",
    features: ["Bez bourání", "Rychlá instalace", "Trvalé řešení"],
  },
  {
    icon: Flame,
    title: "Komíny na dřevo",
    description: "Vložky pro krby, krbové vložky a kamna. Odolné až do 600°C s dlouhou životností.",
    features: ["Tepelná odolnost", "Certifikováno", "Bezpečné"],
  },
  {
    icon: Factory,
    title: "Komíny na plyn",
    description: "Vhodné pro všechny typy plynových kotlů. Splňuje všechny normové požadavky.",
    features: ["Vzduchotěsné", "Normy EU", "Chemicky odolné"],
  },
  {
    icon: Wind,
    title: "Vzduchotechnika",
    description: "Vertikální vedení vzduchotechniky odolné vůči chemikáliám a korozi.",
    features: ["Hladký povrch", "Odolnost", "Dlouhá životnost"],
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Komplexní řešení pro <span className="text-primary">průduchy a komíny</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Nabízíme profesionální sanaci všech typů vertikálních vedení pomocí certifikované technologie FuranFlex.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
