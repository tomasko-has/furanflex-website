import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Clock, Shield, Wrench } from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/cta-section"

export const metadata = {
  title: "Dešťové svody - Sanace bez bourání | FuranFlex CZ",
  description:
    "Profesionální oprava a sanace dešťových svodů metodou FuranFlex. Rychlá instalace bez bourání v jednotlivých patrech, záruka až 25 let.",
}

export default function DestoveSvodyPage() {
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
                  <span className="text-sm font-mono font-medium text-primary">Sanace dešťových svodů</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                Dešťové svody <span className="text-primary">bez bourání</span>
              </h1>

              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                Oprava poškozených dešťových svodů metodou FuranFlex. Instalace za jeden pracovní den bez nutnosti
                bourání v jednotlivých patrech. Vložka z jednoho kusu až do výšky 100m.
              </p>

              <div className="space-y-3">
                {[
                  "Instalace za jeden pracovní den",
                  "Bez nutnosti bourání v patrech",
                  "Přístup pouze zhora a zdola",
                  "Vložka z jednoho kusu až 100m",
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
                  src="/modern-apartment-building-exterior-prague.jpg"
                  alt="Dešťové svody sanace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
                <div className="text-4xl font-bold font-mono">1 den</div>
                <div className="text-sm font-medium opacity-90">instalace</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Jak funguje sanace dešťových svodů?</h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-muted-foreground leading-relaxed">
                FuranFlex je speciální technologie pro opravu dešťových svodů bez nutnosti bourání. Kompozitní vložka se
                vkládá do pôvodního svodu a vytváří nový, vzduchotěsný a odolný kanál.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Rychlá instalace",
                  description: "Celý proces trvá jen několik hodin. Přístup je potřeba pouze zhora a zdola.",
                },
                {
                  icon: Shield,
                  title: "Dlouhá životnost",
                  description: "Materiál je odolný vůči korozi a chemikáliím. Záruka až 25 let.",
                },
                {
                  icon: Wrench,
                  title: "Bez bourání",
                  description: "Není nutné bourat zdi v jednotlivých patrech. Čistá a rychlá práce.",
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
