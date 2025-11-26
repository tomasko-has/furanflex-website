import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="font-mono text-2xl lg:text-3xl font-bold text-primary">FURANFLEX</div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10 ml-auto">
            <Link href="#technologie" className="text-base lg:text-lg font-medium hover:text-primary transition-colors">
              Technologie
            </Link>
            <Link href="#sluzby" className="text-base lg:text-lg font-medium hover:text-primary transition-colors">
              Služby
            </Link>
            <Link href="#vyhody" className="text-base lg:text-lg font-medium hover:text-primary transition-colors">
              Výhody
            </Link>
            <Link href="#kontakt" className="text-base lg:text-lg font-medium hover:text-primary transition-colors">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
