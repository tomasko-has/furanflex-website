import { Clock, Shield, Wrench, Zap, Award, TrendingUp } from "lucide-react"

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
  return (
    <section id="vyhody" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
              Proč zvolit <span className="text-primary">FuranFlex</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Kompozitní vložky FuranFlex představují moderní a spolehlivé řešení pro sanaci komínů a průduchů.
              Technologie je vyrobena z tepelně odolné pryskyřice vyztužené skleněnými vlákny.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="space-y-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] rounded-sm overflow-hidden border-2 border-border shadow-2xl">
              <img src="/industrial-composite-material-close-up-technical.jpg" alt="FuranFlex materiál" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-8 -left-8 bg-accent text-accent-foreground px-6 py-4 rounded-sm shadow-xl">
              <div className="text-2xl font-bold font-mono">600°C</div>
              <div className="text-sm font-medium opacity-90">max. teplota</div>
            </div>
            <div className="absolute bottom-8 -right-8 bg-card border-2 border-primary px-6 py-4 rounded-sm shadow-xl">
              <div className="text-2xl font-bold font-mono text-primary">100m</div>
              <div className="text-sm font-medium">max. výška</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
