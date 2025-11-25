import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background with industrial pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background -z-10" />
      <div
        className="absolute inset-0 opacity-5 -z-10"
        style={{
          backgroundImage: `url('/industrial-metal-pipes-pattern.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-mono font-medium text-primary">Certifikovaná technologie</span>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
              Sanace komínů <span className="text-primary">bez bourání</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
              Profesionální kompozitní vložky FuranFlex pro rekonstrukci komínů, dešťových svodů a vzduchotechniky.
              Rychlá instalace, až 25 let záruky.
            </p>

            <div className="space-y-3">
              {["Instalace za jeden pracovní den", "Bez nutnosti bourání v patrech", "Odolné až do 600°C"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-base font-semibold">
                Nezávazná poptávka
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold bg-transparent">
                Více o technologii
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden border-2 border-primary/20 shadow-2xl">
              <img src="/industrial-chimney-pipe-installation-worker.jpg" alt="FuranFlex instalace" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-sm shadow-xl">
              <div className="text-4xl font-bold font-mono">25+</div>
              <div className="text-sm font-medium opacity-90">let záruky</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
