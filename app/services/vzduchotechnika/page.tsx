import type { Metadata } from "next"
import VzduchotechnikaClientPage from "./client-page"

export const metadata: Metadata = {
  title: "Vzduchotechnika - FuranFlex",
  description: "Vertikální vedení vzduchotechniky odolné vůči chemikáliím a korozi.",
}

export default function VzduchotechnikaPage() {
  return <VzduchotechnikaClientPage />
}
