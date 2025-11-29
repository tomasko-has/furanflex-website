"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [language, setLanguage] = useState("CZ")
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
              Technologie
            </button>
            <button
              onClick={() => scrollToSection("sluzby")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "sluzby" ? "text-primary" : ""
              }`}
            >
              Služby
            </button>
            <button
              onClick={() => scrollToSection("vyhody")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "vyhody" ? "text-primary" : ""
              }`}
            >
              Výhody
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className={`text-base lg:text-lg font-medium hover:text-primary transition-colors ${
                activeSection === "kontakt" ? "text-primary" : ""
              }`}
            >
              Kontakt
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Globe className="h-4 w-4" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("CZ")} className="cursor-pointer">
                  <span className="mr-2">🇨🇿</span>
                  Čeština
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("EN")} className="cursor-pointer">
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
                <DropdownMenuItem onClick={() => setLanguage("CZ")} className="cursor-pointer">
                  <span className="mr-2">🇨🇿</span>
                  Čeština
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("EN")} className="cursor-pointer">
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
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection("technologie")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "technologie" ? "text-primary" : ""
                }`}
              >
                Technologie
              </button>
              <button
                onClick={() => scrollToSection("sluzby")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "sluzby" ? "text-primary" : ""
                }`}
              >
                Služby
              </button>
              <button
                onClick={() => scrollToSection("vyhody")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "vyhody" ? "text-primary" : ""
                }`}
              >
                Výhody
              </button>
              <button
                onClick={() => scrollToSection("kontakt")}
                className={`text-lg font-medium hover:text-primary transition-colors text-left py-2 ${
                  activeSection === "kontakt" ? "text-primary" : ""
                }`}
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
