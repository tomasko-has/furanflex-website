"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

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
  {
    name: "Martin Černý",
    role: "Majitel penzionu",
    content:
      "Sanace komína pomocí FuranFlex technologie nás mile překvapila. Žádný prach, žádný hluk a hotovo za pár hodin.",
    rating: 5,
    date: "Srpen 2024",
  },
  {
    name: "Lucie Horáková",
    role: "Majitelka rodinné vily",
    content: "Perfektní práce! Svody byly v havarijním stavu a díky FuranFlex jsme je zachránili bez bourání stěn.",
    rating: 5,
    date: "Červenec 2024",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth >= 768 ? 2 : 1)
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, currentIndex])

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView,
  )

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

          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="grid md:grid-cols-2 gap-8 transition-all duration-500">
              {visibleTestimonials.map((testimonial, index) => (
                <Card
                  key={currentIndex * itemsPerView + index}
                  className="border-2 hover:border-primary/50 transition-colors animate-in fade-in duration-500"
                >
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

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Pagination dots */}
              <div className="flex gap-2">
                {[...Array(maxIndex + 1)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
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
