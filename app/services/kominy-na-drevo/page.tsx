import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Flame, Thermometer, Shield } from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Komíny - Sanace pro dřevo a plyn | FuranFlex CZ",
  description:
    "Profesionální sanace komínů metodou FuranFlex. Vhodné pro krby, krbové vložky, plynové kotle. Odolné až do 600°C, záruka až 25 let.",
}

export default function KominyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-16 lg:pt-20">
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
                  <span className="text-sm font-mono font-medium text-primary">Sanace komínů</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                Komíny pro <span className="text-primary">dřevo a plyn</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Profesionální sanace komínů pro krby, krbové vložky, kamna a plynové kotle. Tepelně odolné až do 600°C.
                Splňuje všechny normové požadavky EU.
              </p>

              <div className="space-y-3">
                {[
                  "Odolnost až do 600°C",
                  "Vhodné pro dřevo i plyn",
                  "Certifikováno pro ČR a EU",
                  "Chemicky odolné",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/#kontakt">
                  <Button size="lg" className="text-base font-semibold w-full">
                    Nezávazná poptávka
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent w-full">
                    Zpět na hlavní stránku
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden border-2 border-primary/20 shadow-2xl">
                <img
                  src="/modern-family-house-chimney-renovation.jpg"
                  alt="Komín sanace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
                <div className="text-4xl font-bold font-mono">600°C</div>
                <div className="text-sm font-medium opacity-90">odolnost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Typy komínů</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary/20 p-8 rounded-sm border border-border">
                <Flame className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Komíny na dřevo</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vložky určené pro krby, krbové vložky a kamna na tuhá paliva. Tepelně odolné až do 600°C s dlouhou
                  životností.
                </p>
                <ul className="space-y-2">
                  {["Krby a krbové vložky", "Kamna na dřevo", "Kachle", "Teplotní odolnost 600°C"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/20 p-8 rounded-sm border border-border">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Komíny na plyn</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Vhodné pro všechny typy plynových kotlů. Vzduchotěsné, chemicky odolné a splňují všechny normové
                  požadavky EU.
                </p>
                <ul className="space-y-2">
                  {["Plynové kotle", "Kondenzační kotle", "Vzduchotěsné", "Normy EU"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Thermometer,
                  title: "Tepelná odolnost",
                  description: "Materiál vydrží teploty až do 600°C. Ideální pro všechny typy topidel.",
                },
                {
                  icon: Shield,
                  title: "Certifikace",
                  description: "Splňuje všechny české a evropské normy pro komínové systémy.",
                },
                {
                  icon: CheckCircle,
                  title: "Záruka kvality",
                  description: "Poskytujeme záruku 10-25 let na všechny instalace komínových vložek.",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <Footer />
    </main>
  )
}
