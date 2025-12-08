"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["technologie", "sluzby", "vyhody", "kontakt"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // If not on homepage, navigate there first
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMenuOpen(false)
  }

  const services = [
    { href: "/services/destove-svody", label: "Dešťové svody" },
    { href: "/services/kominy-na-drevo", label: "Komíny na dřevo" },
    { href: "/services/kominy-na-plyn", label: "Komíny na plyn" },
    { href: "/services/vzduchotechnika", label: "Vzduchotechnika" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-mono text-2xl lg:text-3xl font-bold text-primary">FURANFLEX</div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">
            <button
              onClick={() => scrollToSection("technologie")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "technologie" ? "text-primary" : ""
              }`}
            >
              {t.nav.technology}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`text-base lg:text-lg font-medium hover:text-primary transition-colors flex items-center gap-1 ${
                    pathname.startsWith("/services") ? "text-primary" : ""
                  }`}
                >
                  {t.nav.services}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="cursor-pointer w-full">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => scrollToSection("vyhody")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "vyhody" ? "text-primary" : ""
              }`}
            >
              {t.nav.benefits}
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "kontakt" ? "text-primary" : ""
              }`}
            >
              {t.nav.contact}
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  {language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("cs")} className="cursor-pointer">
                  <span className="mr-2">🇨🇿</span>
                  Čeština
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile menu button and language switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("cs")} className="cursor-pointer">
                  <span className="mr-2">🇨🇿</span>
                  Čeština
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
                  <span className="mr-2">🇬🇧</span>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("technologie")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "technologie" ? "text-primary" : ""
                }`}
              >
                {t.nav.technology}
              </button>
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 w-full flex items-center justify-between ${
                    pathname.startsWith("/services") ? "text-primary" : ""
                  }`}
                >
                  {t.nav.services}
                  <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-base text-muted-foreground hover:text-primary transition-colors py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => scrollToSection("vyhody")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "vyhody" ? "text-primary" : ""
                }`}
              >
                {t.nav.benefits}
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "kontakt" ? "text-primary" : ""
                }`}
              >
                {t.nav.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
