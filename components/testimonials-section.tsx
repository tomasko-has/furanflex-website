"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Jan Novák",
    role: "Majitel rodinného domu",
    content:
      "Výborná práce! Instalace komínu proběhla rychle a bez problémů. Technici byli profesionální a vše po sobě uklidili.",
    rating: 5,
    date: "Prosinec 2024",
  },
  {
    name: "Marie Svobodová",
    role: "Správce bytového domu",
    content:
      "Sanace dešťových svodů v našem bytovém domě proběhla bez bourání. Skvělé řešení, které ušetřilo spoustu peněz.",
    rating: 5,
    date: "Listopad 2024",
  },
  {
    name: "Petr Dvořák",
    role: "Majitel firmy",
    content: "Profesionální přístup od začátku do konce. Doporučuji všem, kdo potřebují sanovat komín nebo svody.",
    rating: 5,
    date: "Říjen 2024",
  },
  {
    name: "Eva Procházková",
    role: "Majitelka restaurace",
    content: "Rychlá a čistá práce. Instalace vzduchotechniky byla hotová za jeden den. Jsme velmi spokojeni.",
    rating: 5,
    date: "Září 2024",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-mono font-medium text-primary">Recenze zákazníků</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Co říkají naši klienti</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Přečtěte si zkušenosti našich spokojených zákazníků s technologií FuranFlex
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="font-bold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.content}</p>
                  <div className="text-xs text-muted-foreground">{testimonial.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">4.9</span>
                <span>na základě 500+ recenzí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
