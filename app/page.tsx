import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { TechnologySection } from "@/components/technology-section";
import { ServicesSection } from "@/components/services-section";
import { BenefitsSection } from "@/components/benefits-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { MapSection } from "@/components/map-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TechnologySection />
      <ServicesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <MapSection />
      <CTASection />
      <Footer />
    </main>
  );
}
