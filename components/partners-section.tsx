"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function PartnersSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation()

  const partners = [
    {
      name: "Kominy Novák s.r.o.",
      country: "Česká republika",
      city: "Praha",
      description: "Specializace na sanaci komínů a ventilačních systémů",
      logo: "/chimney-company-logo-czech.jpg",
      website: "https://example.cz",
    },
    {
      name: "Magyar Kémény Kft.",
      country: "Maďarsko",
      city: "Budapest",
      description: "Profesionální řešení pro komínové systémy",
      logo: "/chimney-company-logo-hungary.jpg",
      website: "https://example.hu",
    },
    {
      name: "Komin-Tech Polska",
      country: "Polsko",
      city: "Warszawa",
      description: "Modernizace a sanace komínových systémů",
      logo: "/chimney-company-logo-poland.jpg",
      website: "https://example.pl",
    },
    {
      name: "Ventilace Pro s.r.o.",
      country: "Česká republika",
      city: "Brno",
      description: "Komplexní řešení vzduchotechniky a ventilace",
      logo: "/ventilation-company-logo-czech.jpg",
      website: "https://example.cz",
    },
    {
      name: "Lengyel Építő",
      country: "Maďarsko",
      city: "Szeged",
      description: "Stavební práce a renovace komínů",
      logo: "/construction-company-logo-hungary.jpg",
      website: "https://example.hu",
    },
    {
      name: "Dach-Komin Sp. z o.o.",
      country: "Polsko",
      city: "Kraków",
      description: "Střešní práce a komínové systémy",
      logo: "/roofing-company-logo-poland.jpg",
      website: "https://example.pl",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div ref={titleRef} className={`text-center mb-16 ${titleVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Naši partneři</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spolupracujeme s ověřenými firmami v Česku, Maďarsku a Polsku pro komplexní řešení
          </p>
        </div>

        {/* Partners Grid */}
        <div ref={partnersRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 overflow-hidden ${
                partnersVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: partnersVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Logo Container */}
              <div className="relative h-32 bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-6 border-b-2 border-gray-200 group-hover:border-blue-400 transition-colors">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={180}
                  height={120}
                  className="object-contain max-h-20 transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {partner.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">
                    {partner.city}, {partner.country}
                  </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  Navštívit web
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Máte zájem o partnerství?</strong>
            </p>
            <p className="text-gray-600 mb-6 max-w-2xl">
              Hledáme spolehlivé firmy v oblasti sanace komínů a ventilace pro vzájemnou spolupráci
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Kontaktujte nás
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
