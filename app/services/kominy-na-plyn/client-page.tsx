"use client"

import Image from "next/image"
import { Flame, Shield, CheckCircle, ThermometerSnowflake, Zap, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export default function KominyNaPlynClientPage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontakt")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Komíny na plyn pomocí <span className="text-primary">FuranFlex</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Vhodné pro všechny typy plynových kotlů. Splňuje všechny normové požadavky.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={scrollToContact} className="text-lg">
                  Nezávazná poptávka
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
                  <a href="tel:+420773177095">
                    <Phone className="w-5 h-5 mr-2" />
                    +420 773 177 095
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px] rounded-sm overflow-hidden shadow-2xl">
              <Image src="/modern-gas-chimney-installation.jpg" alt="Komíny na plyn" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center text-balance">
            Proč zvolit FuranFlex pro plynové komíny
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Vzduchotěsné",
                description: "Splňuje nejpřísnější požadavky na vzduchotěsnost pro plynové aplikace",
              },
              {
                icon: CheckCircle,
                title: "Normy EU",
                description: "Certifikováno podle všech evropských norem pro plynové komíny",
              },
              {
                icon: ThermometerSnowflake,
                title: "Chemicky odolné",
                description: "Odolné vůči kondenzátu a chemickým látkám z plynových kotlů",
              },
              {
                icon: Flame,
                title: "Bezpečné",
                description: "Materiál je nehořlavý a zaručuje maximální bezpečnost provozu",
              },
              {
                icon: Zap,
                title: "Dlouhá životnost",
                description: "Minimální údržba a dlouhá životnost i při náročném provozu",
              },
              {
                icon: Clock,
                title: "Rychlá instalace",
                description: "Kompletní instalace za 1 pracovní den bez bourání",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-sm p-6 hover:border-primary/40 transition-all"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="kontakt" className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Máte záujem o naše služby?</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Kontaktujte nás pro nezávaznou cenovou nabídku zdarma
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <a href="tel:+420773177095">
                <Phone className="w-5 h-5 mr-2" />
                +420 773 177 095
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <a href="mailto:info@furanflex.cz">
                <Mail className="w-5 h-5 mr-2" />
                info@furanflex.cz
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
