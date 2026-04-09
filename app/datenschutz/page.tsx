import { Navigation } from '@/components/navigation'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Datenschutzerklärung – Deutschobstlerculture',
  description: 'Datenschutzerklärung für deutschobstlerculture.com',
}

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <Card className="p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">1. Datenschutz auf einen Blick</h2>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Allgemeine Hinweise</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">2. Datenerfassung auf dieser Website</h2>
                <h3 className="mb-3 text-xl font-semibold text-foreground">Wer ist verantwortlich für die Datenerfassung?</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt &quot;Hinweis zur verantwortlichen Stelle&quot; in dieser Datenschutzerklärung entnehmen.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Wie erfassen wir Ihre Daten?</h3>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. 
                  um Daten handeln, die Sie in ein Kontaktformular eingeben.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder 
                  Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Wofür nutzen wir Ihre Daten?</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                  Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h3 className="mb-3 mt-6 text-xl font-semibold text-foreground">Welche Rechte haben Sie bezüglich Ihrer Daten?</h3>
                <p className="leading-relaxed text-muted-foreground">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                  können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">3. Cookies</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind kleine Textdateien und richten auf 
                  Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung 
                  (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf 
                  Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren 
                  Webbrowser erfolgt.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  Weitere Informationen zu Cookies finden Sie in unserer{' '}
                  <Link href="/cookie-policy" className="font-semibold text-primary underline hover:text-primary/80">
                    Cookie-Richtlinie
                  </Link>
                  .
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">4. Server-Log-Dateien</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="leading-relaxed text-muted-foreground">
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                  Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes 
                  Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
                </p>
              </section>

              <Separator className="my-8" />

              <section className="mb-8">
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">5. Hinweis zu Alkoholinhalten</h2>
                <p className="leading-relaxed text-muted-foreground">
                  Diese Website enthält Informationen über alkoholische Getränke. Wir weisen darauf hin, dass der Konsum 
                  von Alkohol nur für Personen ab 18 Jahren gestattet ist. Die auf dieser Website bereitgestellten 
                  Informationen dienen ausschließlich Bildungs- und Informationszwecken. Es werden keine alkoholischen 
                  Getränke verkauft oder zum Verkauf angeboten.
                </p>
              </section>

              <Separator className="my-8" />

              <section>
                <h2 className="mb-4 font-serif text-2xl font-bold text-foreground">6. Ihre Rechte</h2>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Sie haben nach der DSGVO verschiedene Rechte. Dazu gehören insbesondere:
                </p>
                <ul className="ml-6 list-disc space-y-2 leading-relaxed text-muted-foreground">
                  <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                  <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                  <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                  <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                  <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                  <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                </ul>
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
