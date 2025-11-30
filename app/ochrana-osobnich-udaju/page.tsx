import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Ochrana osobních údajů | FuranFlex CZ",
  description: "Zásady ochrany osobních údajů společnosti FuranFlex CZ",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Zpět na hlavní stránku
          </Link>

          <h1 className="text-4xl lg:text-5xl font-bold mb-8">Ochrana osobních údajů</h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Správce osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed">
                Správcem vašich osobních údajů je společnost FuranFlex CZ, se sídlem Praha, Česká republika, IČ: [IČ].
                Kontaktovat nás můžete na e-mailové adrese info@furanflex.cz nebo na telefonním čísle +420 123 456 789.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Jaké osobní údaje zpracováváme</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                V rámci našich služeb můžeme zpracovávat následující kategorie osobních údajů:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Identifikační údaje (jméno, příjmení)</li>
                <li>Kontaktní údaje (e-mail, telefon, adresa)</li>
                <li>Údaje o zakázkách a realizovaných projektech</li>
                <li>Komunikační údaje (obsah korespondence)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Účel zpracování osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Vaše osobní údaje zpracováváme pro následující účely:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Zpracování poptávek a nabídek</li>
                <li>Realizace zakázek a poskytování služeb</li>
                <li>Komunikace se zákazníky</li>
                <li>Vyřízení reklamací a stížností</li>
                <li>Plnění právních povinností</li>
                <li>Marketingové účely (pouze se souhlasem)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Právní základ zpracování</h2>
              <p className="text-muted-foreground leading-relaxed">
                Osobní údaje zpracováváme na základě plnění smlouvy, splnění právní povinnosti, oprávněného zájmu
                správce nebo na základě vašeho souhlasu v souladu s nařízením GDPR (nařízení Evropského parlamentu a
                Rady (EU) 2016/679).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Doba uchovávání osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed">
                Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu jejich zpracování, minimálně však po
                dobu stanovenou právními předpisy (např. daňové a účetní předpisy). Po uplynutí této doby budou osobní
                údaje bezpečně zlikvidovány.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Vaše práva jako subjektu údajů</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Máte právo:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Na přístup ke svým osobním údajům</li>
                <li>Na opravu nepřesných údajů</li>
                <li>Na výmaz údajů ("právo být zapomenut")</li>
                <li>Na omezení zpracování</li>
                <li>Na přenositelnost údajů</li>
                <li>Vznést námitku proti zpracování</li>
                <li>Odvolat souhlas se zpracováním</li>
                <li>Podat stížnost u Úřadu pro ochranu osobních údajů</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Cookies a analytické nástroje</h2>
              <p className="text-muted-foreground leading-relaxed">
                Naše webové stránky používají soubory cookies pro zlepšení uživatelské zkušenosti a analytické účely.
                Více informací o používání cookies naleznete v naší cookie liště.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Zabezpečení osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed">
                Přijali jsme vhodná technická a organizační opatření k ochraně vašich osobních údajů před neoprávněným
                přístupem, ztrátou, zneužitím nebo pozměněním.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Kontakt pro záležitosti ochrany osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed">
                V případě jakýchkoli dotazů ohledně zpracování vašich osobních údajů nás prosím kontaktujte na e-mailu
                info@furanflex.cz nebo na telefonním čísle +420 123 456 789.
              </p>
            </section>

            <p className="text-sm text-muted-foreground mt-12">
              Poslední aktualizace: {new Date().toLocaleDateString("cs-CZ")}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
