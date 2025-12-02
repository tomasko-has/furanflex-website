import type { Metadata } from "next"
import KominyNaPlynClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Komíny na plyn - FuranFlex",
  description: "Vhodné pro všechny typy plynových kotlů. Splňuje všechny normové požadavky.",
}

export default function KominyNaPlynPage() {
  return <KominyNaPlynClientPage />
}
