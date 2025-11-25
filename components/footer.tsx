import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div>
            <div className="font-mono text-xl font-bold mb-4">FURANFLEX</div>
            <p className="text-sm opacity-80 leading-relaxed">
              Profesionální sanace komínů a průduchů pomocí kompozitních vložek.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Služby</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Dešťové svody
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Komíny na dřevo
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Komíny na plyn
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Vzduchotechnika
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">O nás</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  O technologii
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Certifikáty
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+420 123 456 789</li>
              <li>info@furanflex.cz</li>
              <li>Praha, Česká republika</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
          <div>© 2025 FuranFlex CZ. Všechna práva vyhrazena.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Ochrana osobních údajů
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Obchodní podmínky
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
