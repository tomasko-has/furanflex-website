import { Check, Star } from "lucide-react"
import Image from "next/image"

export function TrustSection() {
  const projects = [
    {
      title: "Bytový dům Praha 3",
      description: "Kompletní sanace 8 dešťových svodů bez bourání",
      stats: "24 hodin | 8 svodů | 120m",
      image: "/modern-apartment-building-exterior-prague.jpg",
    },
    {
      title: "Rodinný dům Brno",
      description: "Renovace komína pro plynový kotel",
      stats: "6 hodin | 1 komín | 15m",
      image: "/modern-family-house-chimney-renovation.jpg",
    },
    {
      title: "Průmyslová budova Ostrava",
      description: "Vzduchotechnika ve výrobní hale",
      stats: "48 hodin | 12 ventilací | 200m",
      image: "/industrial-building-ventilation-system.jpg",
    },
  ]

  const certifications = [
    { name: "ISO 9001", description: "Certifikace kvality" },
    { name: "10-25 let", description: "Záruka výrobce" },
    { name: "500+", description: "Realizovaných projektů" },
    { name: "98%", description: "Spokojenost zákazníků" },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Trust Badges */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-8 p-8 bg-white rounded-2xl border-2 border-blue-100 shadow-lg">
            {/* Google Reviews Badge */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-white rounded-full flex items-center justify-center shadow-md border-2 border-blue-100">
                <svg viewBox="0 0 24 24" className="w-9 h-9">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-3xl font-bold text-gray-900">4.9</span>
                </div>
                <p className="text-base text-gray-600 font-medium">Based on 500+ reviews</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-gray-300" />

            {/* Certifications */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-1">{cert.name}</div>
                  <div className="text-sm text-gray-600 font-medium">{cert.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Realizované projekty</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Podívejte se na naše úspěšně dokončené projekty a přesvědčte se o kvalitě našich řešení
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[3/2]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <Check className="w-4 h-4" />
                    <span>{project.stats}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        {/* Why Trust Us */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Proč nám důvěřovat?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Více než 15 let zkušeností v oboru",
              "Certifikovaní instalatéři s odbornými školeními",
              "Používáme pouze prověřené materiály",
              "Komplexní servis od návrhu po realizaci",
              "Záruční a pozáruční servis",
              "Transparent pricing a profesionální přístup",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
