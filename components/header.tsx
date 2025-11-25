import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-mono text-2xl lg:text-3xl font-bold text-primary">FURANFLEX</div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#technologie" className="text-sm font-medium hover:text-primary transition-colors">
              Technologie
            </Link>
            <Link href="#sluzby" className="text-sm font-medium hover:text-primary transition-colors">
              Služby
            </Link>
            <Link href="#vyhody" className="text-sm font-medium hover:text-primary transition-colors">
              Výhody
            </Link>
            <Link href="#kontakt" className="text-sm font-medium hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>

          <Button className="font-medium">Nezávazná poptávka</Button>
        </div>
      </div>
    </header>
  )
}
