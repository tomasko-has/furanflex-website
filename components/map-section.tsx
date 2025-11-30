import { MapPin } from "lucide-react"

export function MapSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono font-medium text-primary">Kde nás najdete</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Naše pobočka</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navštivte nás v Praze nebo nás kontaktujte pro nezávaznou konzultaci
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-sm border border-border shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Kontaktní informace</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold mb-1">Adresa</div>
                      <div className="text-muted-foreground">
                        Pozdeňská 159/00
                        <br />
                        Praha 6, 160 00
                        <br />
                        Česká republika
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="font-bold mb-2">Provozní doba</div>
                    <div className="text-muted-foreground text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Pondělí - Pátek:</span>
                        <span>8:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sobota:</span>
                        <span>9:00 - 13:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Neděle:</span>
                        <span>Zavřeno</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[500px] rounded-sm overflow-hidden border-2 border-border shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.7234567890123!2d14.333326!3d50.077895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bebb6e4c3d5ed%3A0x1234567890abcdef!2sPozde%C5%88sk%C3%A1%20159%2C%20160%2000%20Praha%206%2C%20Czechia!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FuranFlex CZ Location - Pozdeňská 159, Praha 6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
