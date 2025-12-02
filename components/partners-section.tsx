"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function PartnersSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: partnersRef, isVisible: partnersVisible } = useScrollAnimation();

  const partners = [
    {
      name: "Kominy Novák s.r.o.",
      description: "Specializace na sanaci komínů",
      logo: "/chimney-company-logo-czech.jpg",
    },
    {
      name: "Magyar Kémény Kft.",
      description: "Profesionální komínové systémy",
      logo: "/chimney-company-logo-hungary.jpg",
    },
    {
      name: "Komin-Tech Polska",
      description: "Modernizace komínových systémů",
      logo: "/chimney-company-logo-poland.jpg",
    },
    {
      name: "Ventilace Pro s.r.o.",
      description: "Komplexní řešení vzduchotechniky",
      logo: "/ventilation-company-logo-czech.jpg",
    },
    {
      name: "Schiedel s.r.o.",
      description: "Prémiové komínové systémy",
      logo: "/construction-company-logo-hungary.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-12 ${
            titleVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Naši partneři
          </h2>
          <p className="text-lg text-gray-600">
            Spolupracujeme s ověřenými firmami v Česku, Maďarsku a Polsku
          </p>
        </div>

        {/* Partners Grid */}
        <div
          ref={partnersRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ${
            partnersVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
              style={{
                animationDelay: partnersVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Logo Container */}
              <div className="mb-4 relative w-24 h-24 flex items-center justify-center rounded-full border-2 border-gray-200 bg-white overflow-hidden">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={96}
                  height={96}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
