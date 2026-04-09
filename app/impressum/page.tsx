import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Impressum – Deutschobstlerculture',
  description: 'Impressum für deutschobstlerculture.com',
}

export default function ImpressumPage() {
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
            Impressum
          </h1>

          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Angaben gemäß § 5 TMG</h2>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-semibold text-foreground">Deutschobstlerculture</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Kontakt</h2>
                <div className="space-y-1 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">E-Mail:</span>{' '}
                    <a href="mailto:info@deutschobstlerculture.com" className="text-primary hover:underline">
                      info@deutschobstlerculture.com
                    </a>
                  </p>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Verantwortlich für den Inhalt</h2>
                <p className="text-muted-foreground">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                </p>
                <div className="mt-3 space-y-1 text-muted-foreground">
                  <p className="font-semibold text-foreground">Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Haftungsausschluss</h2>
                
                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Haftung für Inhalte</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                  zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Haftung für Links</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Urheberrecht</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Hinweis zu Alkoholinhalten</h2>
                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <p className="mb-3 leading-relaxed text-foreground">
                    Diese Website enthält ausschließlich Informationen über alkoholische Getränke zu Bildungs- und 
                    Informationszwecken.
                  </p>
                  <p className="mb-3 leading-relaxed text-muted-foreground">
                    Es werden keine alkoholischen Getränke verkauft, vertrieben oder zum Verkauf angeboten. 
                    Die Inhalte richten sich ausschließlich an Personen ab 18 Jahren.
                  </p>
                  <p className="font-semibold text-foreground">
                    18+ — Bitte trinken Sie verantwortungsbewusst.
                  </p>
                </div>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">EU-Streitschlichtung</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Verbraucherstreitbeilegung</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <Separator className="my-8" />

              <section>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">Weitere Informationen</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Weitere Informationen zum Datenschutz und zur Verwendung von Cookies finden Sie in unserer{' '}
                  <Link href="/datenschutz" className="font-semibold text-primary underline hover:text-primary/80">
                    Datenschutzerklärung
                  </Link>
                  {' '}und unserer{' '}
                  <Link href="/cookie-policy" className="font-semibold text-primary underline hover:text-primary/80">
                    Cookie-Richtlinie
                  </Link>
                  .
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
