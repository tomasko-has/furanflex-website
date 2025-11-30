import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Obchodní podmínky | FuranFlex CZ",
  description: "Obchodní podmínky společnosti FuranFlex CZ",
}

export default function TermsPage() {
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

          <h1 className="text-4xl lg:text-5xl font-bold mb-8">Obchodní podmínky</h1>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Základní ustanovení</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tyto obchodní podmínky (dále jen "podmínky") upravují vztahy mezi společností FuranFlex CZ, se sídlem
                Praha, Česká republika (dále jen "poskytovatel") a zákazníkem (dále jen "zákazník") při poskytování
                služeb v oblasti sanace komínů a dešťových svodů pomocí kompozitních vložek.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Rozsah poskytovaných služeb</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Poskytovatel nabízí následující služby:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Sanace komínů pomocí technologie FuranFlex</li>
                <li>Sanace dešťových svodů kompozitními vložkami</li>
                <li>Rekonstrukce vzduchotechnických průduchů</li>
                <li>Diagnostika a posouzení stavu komínových systémů</li>
                <li>Poradenská činnost v oblasti sanací</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Uzavření smlouvy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Smlouva o poskytnutí služeb vzniká na základě písemné objednávky zákazníka a jejího písemného potvrzení
                poskytovatelem. Součástí smlouvy je cenová nabídka, technická specifikace prací a harmonogram realizace.
                Poskytovatel si vyhrazuje právo odmítnout objednávku v případě technické neproveditelnosti nebo jiných
                objektivních důvodů.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Cena a platební podmínky</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cena služeb je stanovena na základě cenové nabídky. Cena zahrnuje:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                <li>Materiál a technologii FuranFlex</li>
                <li>Práci a dopravní náklady</li>
                <li>Certifikát o provedené sanaci</li>
                <li>Záruku na provedenou práci</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Platba se provádí formou zálohové faktury (obvykle 50 % z celkové ceny) a konečné faktury po dokončení a
                předání díla. Splatnost faktur je 14 dní od vystavení, pokud není dohodnuto jinak.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Realizace zakázky</h2>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel se zavazuje realizovat zakázku v dohodnutém termínu. Termín realizace může být prodloužen v
                případě nepříznivých povětrnostních podmínek, vyšší moci nebo z důvodů na straně zákazníka. Zákazník je
                povinen zajistit přístup k místu realizace, připojení elektřiny a vody a vyklizení pracovního prostoru.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Záruční podmínky</h2>
              <p className="text-muted-foreground leading-relaxed">
                Na provedené práce poskytujeme záruku v délce 25 let při dodržení provozních podmínek. Záruka se
                nevztahuje na poškození způsobená nesprávným užíváním, mechanickým poškozením nebo zásahem třetí strany.
                Záruční list a certifikát jsou předány zákazníkovi po dokončení prací.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Reklamační řád</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reklamace musí být uplatněna písemně (e-mailem nebo doporučeným dopisem) s popisem závady a přiložením
                fotodokumentace. Reklamaci vyřídíme do 30 dnů od jejího doručení. V případě oprávněné reklamace
                provedeme opravu na naše náklady v nejbližším možném termínu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Odpovědnost za škodu</h2>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel odpovídá za škodu způsobenou při realizaci zakázky. Poskytovatel je pojištěn pro případ
                odpovědnosti za škodu. Zákazník odpovídá za škodu způsobenou poskytovateli v důsledku porušení svých
                povinností nebo poskytnutí nesprávných informací.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Ochrana osobních údajů</h2>
              <p className="text-muted-foreground leading-relaxed">
                Poskytovatel zpracovává osobní údaje zákazníka v souladu s nařízením GDPR. Podrobné informace o
                zpracování osobních údajů naleznete v dokumentu{" "}
                <Link href="/ochrana-osobnich-udaju" className="text-primary hover:underline">
                  Ochrana osobních údajů
                </Link>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Závěrečná ustanovení</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tyto obchodní podmínky jsou platné od {new Date().toLocaleDateString("cs-CZ")} a řídí se právním řádem
                České republiky. Poskytovatel si vyhrazuje právo tyto podmínky měnit. Aktuální verze je vždy dostupná na
                webových stránkách. Případné spory budou řešeny před příslušným soudem České republiky.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Kontaktní údaje</h2>
              <div className="text-muted-foreground leading-relaxed space-y-2">
                <p className="font-semibold text-foreground">FuranFlex CZ</p>
                <p>Praha, Česká republika</p>
                <p>IČ: [IČ]</p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:info@furanflex.cz" className="text-primary hover:underline">
                    info@furanflex.cz
                  </a>
                </p>
                <p>Tel: +420 123 456 789</p>
              </div>
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
