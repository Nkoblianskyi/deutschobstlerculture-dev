import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Cookie-Richtlinie – Deutschobstlerculture',
  description: 'Cookie-Richtlinie für deutschobstlerculture.com',
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-4 pb-20 pt-[max(8rem,calc(env(safe-area-inset-top,0px)+5.5rem))] md:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>

          <h1 className="mb-8 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Cookie-Richtlinie
          </h1>

          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Was sind Cookies?</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
                  wenn Sie eine Website besuchen. Sie ermöglichen es der Website, sich an Ihre Aktionen und 
                  Präferenzen (wie Login, Sprache, Schriftgröße und andere Anzeigeeinstellungen) über einen 
                  bestimmten Zeitraum zu erinnern.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Wie verwenden wir Cookies?</h2>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Auf deutschobstlerculture.com verwenden wir Cookies für folgende Zwecke:
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg border-2 border-border/50 bg-muted/20 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-foreground">Notwendige Cookies</h3>
                    <p className="mb-3 leading-relaxed text-muted-foreground">
                      Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können in unseren 
                      Systemen nicht deaktiviert werden.
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Cookie-Einwilligungsstatus (speichert Ihre Cookie-Präferenzen)</li>
                      <li>Session-Cookies für grundlegende Websitfunktionalität</li>
                    </ul>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      Speicherdauer: Session / 1 Jahr
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-border/50 bg-muted/20 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-foreground">Leistungs-Cookies</h3>
                    <p className="mb-3 leading-relaxed text-muted-foreground">
                      Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die 
                      Leistung unserer Website messen und verbessern können.
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Analyse von Seitenaufrufen und Nutzerverhalten</li>
                      <li>Erkennung von beliebten Inhalten</li>
                      <li>Optimierung der Website-Geschwindigkeit</li>
                    </ul>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      Speicherdauer: 1-2 Jahre
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-border/50 bg-muted/20 p-6">
                    <h3 className="mb-3 text-xl font-semibold text-foreground">Funktionale Cookies</h3>
                    <p className="mb-3 leading-relaxed text-muted-foreground">
                      Diese Cookies ermöglichen erweiterte Funktionalität und Personalisierung.
                    </p>
                    <ul className="ml-6 list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Speicherung von Spracheinstellungen</li>
                      <li>Speicherung von Anzeigeeinstellungen (z.B. Dark Mode)</li>
                      <li>Personalisierte Inhaltspräferenzen</li>
                    </ul>
                    <p className="mt-3 text-sm font-semibold text-foreground">
                      Speicherdauer: 1 Jahr
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Verwendete Cookie-Typen</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-border">
                        <th className="p-3 text-left font-semibold text-foreground">Cookie-Name</th>
                        <th className="p-3 text-left font-semibold text-foreground">Zweck</th>
                        <th className="p-3 text-left font-semibold text-foreground">Dauer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="transition-colors hover:bg-muted/30">
                        <td className="p-3 font-mono text-sm text-foreground">cookie-consent</td>
                        <td className="p-3 text-sm text-muted-foreground">Speichert Ihre Cookie-Einwilligungspräferenz</td>
                        <td className="p-3 text-sm text-muted-foreground">1 Jahr</td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/30">
                        <td className="p-3 font-mono text-sm text-foreground">session_id</td>
                        <td className="p-3 text-sm text-muted-foreground">Identifiziert Ihre Browser-Sitzung</td>
                        <td className="p-3 text-sm text-muted-foreground">Session</td>
                      </tr>
                      <tr className="transition-colors hover:bg-muted/30">
                        <td className="p-3 font-mono text-sm text-foreground">theme_preference</td>
                        <td className="p-3 text-sm text-muted-foreground">Speichert Ihre Design-Präferenz (Hell/Dunkel)</td>
                        <td className="p-3 text-sm text-muted-foreground">1 Jahr</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Ihre Cookie-Einstellungen verwalten</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie:
                </p>
                <ul className="mb-6 ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
                  <li>Den Cookie-Banner erneut aufrufen (löschen Sie dazu den Cookie &quot;cookie-consent&quot; in Ihrem Browser)</li>
                  <li>Ihre Browser-Einstellungen anpassen, um Cookies zu blockieren oder zu löschen</li>
                  <li>Private/Inkognito-Modus Ihres Browsers verwenden</li>
                </ul>

                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-3 text-lg font-semibold text-foreground">Browser-Einstellungen</h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    So verwalten Sie Cookies in den gängigsten Browsern:
                  </p>
                  <ul className="ml-6 space-y-1 text-sm text-muted-foreground">
                    <li><span className="font-semibold text-foreground">Google Chrome:</span> Einstellungen {'>'} Datenschutz und Sicherheit {'>'} Cookies</li>
                    <li><span className="font-semibold text-foreground">Firefox:</span> Einstellungen {'>'} Datenschutz & Sicherheit {'>'} Cookies</li>
                    <li><span className="font-semibold text-foreground">Safari:</span> Einstellungen {'>'} Datenschutz {'>'} Cookies verwalten</li>
                    <li><span className="font-semibold text-foreground">Edge:</span> Einstellungen {'>'} Cookies und Websiteberechtigungen</li>
                  </ul>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Third-Party Cookies</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Wir verwenden derzeit keine Third-Party Cookies (Cookies von Drittanbietern) auf dieser Website. 
                  Alle Cookies werden ausschließlich von deutschobstlerculture.com gesetzt und verwaltet.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Rechtsgrundlage</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Die Verwendung von Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) 
                  bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) für technisch notwendige Cookies.
                </p>
              </section>

              <Separator className="my-8" />

              <section>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Weitere Informationen</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Wenn Sie weitere Fragen zu unserer Cookie-Verwendung haben, lesen Sie bitte auch unsere{' '}
                  <Link href="/datenschutz" className="font-semibold text-primary underline hover:text-primary/80">
                    Datenschutzerklärung
                  </Link>
                  {' '}oder kontaktieren Sie uns über die im{' '}
                  <Link href="/impressum" className="font-semibold text-primary underline hover:text-primary/80">
                    Impressum
                  </Link>
                  {' '}angegebenen Kontaktdaten.
                </p>
              </section>
            </div>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">Stand: 2026</p>
          </div>
        </div>
      </main>
    </div>
  )
}
