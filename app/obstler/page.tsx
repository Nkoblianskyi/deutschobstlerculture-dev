import { Navigation } from '@/components/navigation'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Was ist Obstler? - Deutschobstlerculture',
  description: 'Ausführlicher Artikel über Obstler - den reinen deutschen Fruchtbrand aus Äpfeln, Birnen, Pflaumen und Kirschen mit bis zu 50% Alkoholgehalt.',
}

export default function ObstlerArtikelPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieBanner />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-[max(8rem,calc(env(safe-area-inset-top,0px)+7rem))] md:pb-24 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/fruits.jpg"
            alt="Obstler Früchte"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Ausführlicher Artikel
          </span>
          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Was ist Obstler?
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Der reine deutsche Fruchtbrand aus Äpfeln, Birnen, Pflaumen und Kirschen - 
            ein Destillat mit bis zu 50% Alkoholgehalt, geboren in den Obstgärten Süddeutschlands.
          </p>
        </div>
      </section>

      {/* Alcohol Badge */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-accent/30 bg-accent/5 p-6 text-center">
            <span className="text-sm font-medium uppercase tracking-wide text-accent">
              Maximale Alkoholstärke
            </span>
            <div className="mt-2 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl font-bold text-foreground">50%</span>
              <span className="text-lg text-muted-foreground">vol</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-4xl">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Obstler ist mehr als nur ein Schnaps - er ist ein Stück deutscher Kulturgeschichte, 
              das die Essenz der süddeutschen Obstgärten in sich trägt. Dieser klare Fruchtbrand 
              wird aus vollreifen Früchten wie Äpfeln, Birnen, Pflaumen und Kirschen destilliert 
              und verkörpert die handwerkliche Tradition der Brennkunst, die in Deutschland seit 
              Jahrhunderten gepflegt wird.
            </p>
          </div>

          <Separator className="my-12" />

          {/* Section 1: Definition */}
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Definition und Grundlagen
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Der Begriff "Obstler" stammt aus dem süddeutschen Sprachraum und bezeichnet 
                  einen klaren Schnaps, der aus verschiedenen Obstsorten gebrannt wird. Im 
                  Gegensatz zu sortenreinen Destillaten wie Williams-Birnenbrand oder Kirschwasser 
                  vereint der Obstler mehrere Früchte in einer harmonischen Komposition.
                </p>
                <p className="mb-4 leading-relaxed text-muted-foreground">
                  Typischerweise werden für einen hochwertigen Obstler folgende Früchte verwendet:
                </p>
                <ul className="mb-4 list-inside space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span><strong className="text-foreground">Äpfel</strong> - bilden oft die Basis mit ihrer fruchtigen Süße</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span><strong className="text-foreground">Birnen</strong> - verleihen sanfte, aromatische Noten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span><strong className="text-foreground">Pflaumen</strong> - bringen intensive, würzige Aromen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                    <span><strong className="text-foreground">Kirschen</strong> - sorgen für charakteristische Tiefe</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg lg:h-auto">
                <Image
                  src="/images/fruits.jpg"
                  alt="Früchte für Obstler"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Herkunft */}
          <section className="mb-16">
            <div className="relative mb-8 h-64 overflow-hidden rounded-lg md:h-80">
              <Image
                src="/images/orchard-landscape.jpg"
                alt="Deutsche Obstgärten"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="font-serif text-3xl font-bold text-white drop-shadow-lg">
                  Herkunft und Geschichte
                </h2>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Die Wiege des Obstlers liegt in den fruchtbaren Regionen Süddeutschlands - 
                vor allem in Baden-Württemberg, Bayern und dem Schwarzwald. Hier, wo das 
                milde Klima ideale Bedingungen für den Obstanbau bietet, entwickelte sich 
                über Jahrhunderte eine einzigartige Brenntradition.
              </p>
              <p className="leading-relaxed">
                Bereits im Mittelalter begannen Bauern damit, überschüssiges Obst zu 
                destillieren. Was zunächst als praktische Methode zur Konservierung diente, 
                entwickelte sich im Laufe der Zeit zu einer anerkannten Handwerkskunst. 
                Im 16. Jahrhundert wurden die ersten Brennrechte vergeben, und die 
                Obstbrennerei wurde zu einem wichtigen Wirtschaftszweig.
              </p>
              <p className="leading-relaxed">
                Im 18. und 19. Jahrhundert erreichte die Kunst der Obstdestillation ihren 
                Höhepunkt. Brennmeister perfektionierten die Technik der Doppeldestillation, 
                bei der das Destillat zweimal durch die Kupferblase läuft, um maximale 
                Reinheit und Aromaintensität zu erreichen. Der Obstler wurde zum Symbol 
                für regionale Qualität und bäuerliche Tradition.
              </p>
            </div>
          </section>

          {/* Section 3: Herstellung */}
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Der Herstellungsprozess
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg lg:h-auto lg:row-span-2">
                <Image
                  src="/images/distillation.jpg"
                  alt="Destillation"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  1. Ernte und Auswahl
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Die Qualität eines Obstlers beginnt mit der Auswahl der Früchte. 
                  Nur vollreife, aromatische Früchte werden verwendet. Traditionell 
                  werden die Früchte von Hand geerntet und sorgfältig aussortiert. 
                  Beschädigte oder unreife Früchte werden entfernt, da sie den 
                  Geschmack negativ beeinflussen können.
                </p>

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  2. Maischen
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Die Früchte werden gewaschen, zerkleinert und in Gärbehältern 
                  angesetzt. Der natürliche Fruchtzucker wird durch Hefekulturen 
                  zu Alkohol vergoren. Dieser Prozess dauert je nach Obstsorte 
                  und Temperatur mehrere Wochen.
                </p>
              </div>
              
              <div>
                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  3. Destillation
                </h3>
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Das Herzstück der Obstlerproduktion ist die Destillation in 
                  traditionellen Kupferblasen. Die vergorene Maische wird erhitzt, 
                  der Alkohol verdampft und wird in der Kühlschlange wieder 
                  verflüssigt. Bei der Doppeldestillation wird dieser Prozess 
                  wiederholt, um ein besonders reines Destillat zu erhalten.
                </p>

                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                  4. Reifung
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  Nach der Destillation ruht der Obstler in Glasbehältern oder 
                  Edelstahltanks. Diese Lagerung ermöglicht es dem Brand, seine 
                  Aromen zu harmonisieren. Einige Brennereien lagern ihren 
                  Obstler auch in Holzfässern für zusätzliche Geschmacksnuancen.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Alkoholgehalt */}
          <section className="mb-16">
            <Card className="border-primary/20 bg-primary/5 p-8">
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Alkoholgehalt und Qualität
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <p className="mb-4 leading-relaxed text-muted-foreground">
                    Obstler weist typischerweise einen Alkoholgehalt zwischen 38% und 50% vol auf. 
                    Der gesetzliche Mindestalkoholgehalt für Obstbrände in Deutschland beträgt 37,5% vol.
                  </p>
                  <p className="leading-relaxed text-muted-foreground">
                    Hochwertige, handwerklich hergestellte Obstler erreichen oft 40-45% vol, 
                    während besonders starke Varianten bis zu 50% vol aufweisen können. 
                    Der höhere Alkoholgehalt ermöglicht eine intensivere Aromaentfaltung 
                    und längere Haltbarkeit.
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-foreground">Mindestalkoholgehalt</span>
                      <span className="shrink-0 font-serif text-xl font-bold text-primary">37.5% vol</span>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border border-border bg-background p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-foreground">Typischer Bereich</span>
                      <span className="shrink-0 font-serif text-xl font-bold text-primary">38-45% vol</span>
                    </div>
                    <div className="flex flex-col gap-2 rounded-lg border border-accent/30 bg-accent/10 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="min-w-0 font-medium text-foreground">Maximum</span>
                      <span className="shrink-0 font-serif text-xl font-bold text-accent">50% vol</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 5: Varianten */}
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Regionale Varianten
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border border-border p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  Schwarzwälder Obstler
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Bekannt für die Verwendung von Wildkirschen und Zwetschgen. 
                  Kräftiger Charakter mit würzigen Noten.
                </p>
                <span className="text-xs font-medium text-primary">38-45% vol</span>
              </Card>
              
              <Card className="border border-border p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  Bayerischer Obstbrand
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Traditionell mit Äpfeln und Birnen aus den bayerischen 
                  Voralpenregionen. Mild und fruchtig im Geschmack.
                </p>
                <span className="text-xs font-medium text-primary">40-42% vol</span>
              </Card>
              
              <Card className="border border-border p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                  Bodensee-Obstler
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                  Geprägt von den Apfel- und Birnensorten der Bodenseeregion. 
                  Elegant mit feiner Fruchtigkeit.
                </p>
                <span className="text-xs font-medium text-primary">38-40% vol</span>
              </Card>
            </div>
          </section>

          {/* Section 6: Genuss */}
          <section className="mb-16">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg lg:h-auto">
                <Image
                  src="/images/tradition.jpg"
                  alt="Obstler Genuss"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                  Genuss und Verkostung
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Traditionell wird Obstler bei Zimmertemperatur in kleinen 
                    Gläsern serviert - den sogenannten "Stamperln". Diese Form 
                    des Genusses ermöglicht es, die volle Aromavielfalt 
                    wahrzunehmen.
                  </p>
                  <p className="leading-relaxed">
                    Die ideale Trinktemperatur liegt zwischen 16 und 18 Grad Celsius. 
                    Bei dieser Temperatur entfalten sich die Fruchtaromen optimal, 
                    während der Alkohol nicht zu dominant wirkt.
                  </p>
                  
                  <div className="mt-6 rounded-lg border border-border bg-card p-4">
                    <h4 className="mb-2 font-semibold text-foreground">Verkostungstipps</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                        <span>Zuerst am Glas riechen, um die Aromen wahrzunehmen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                        <span>Einen kleinen Schluck nehmen und im Mund verteilen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                        <span>Die verschiedenen Fruchtaromen identifizieren</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"></span>
                        <span>Den Nachklang genießen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Kulinarik */}
          <section className="mb-16">
            <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
              Obstler und Kulinarik
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  In der süddeutschen Küche spielt der Obstler eine wichtige Rolle 
                  als Digestif nach deftigen Mahlzeiten. Er wird traditionell nach 
                  einer "Vesper" - einer herzhaften Brotzeit - gereicht.
                </p>
                <p className="leading-relaxed">
                  Die klare, fruchtige Schärfe des Obstlers harmoniert besonders 
                  gut mit fettreichen Speisen und hilft bei der Verdauung. 
                  Klassische Kombinationen sind:
                </p>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg">
                <Image
                  src="/images/vesper.jpg"
                  alt="Schwarzwälder Vesper"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="mb-2 font-semibold text-foreground">Schwarzwälder Schinken</h4>
                <p className="text-sm text-muted-foreground">
                  Geräuchert und luftgetrocknet - perfekt zum Obstler
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="mb-2 font-semibold text-foreground">Bergkäse</h4>
                <p className="text-sm text-muted-foreground">
                  Würziger Alpenkäse ergänzt die Fruchtigkeit
                </p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <h4 className="mb-2 font-semibold text-foreground">Bauernbrot</h4>
                <p className="text-sm text-muted-foreground">
                  Rustikales Brot als neutrale Basis
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Tradition */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <Image
                  src="/images/festival.jpg"
                  alt="Brennerfeste"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
              </div>
              <div className="relative p-8 md:max-w-xl md:p-12">
                <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                  Feste und Tradition
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    In vielen Gemeinden Baden-Württembergs und Bayerns werden 
                    jährlich Brennerfeste gefeiert, bei denen lokale Brennereien 
                    ihre Produkte präsentieren. Diese Feste sind wichtige 
                    kulturelle Ereignisse, die die Gemeinschaft zusammenbringen.
                  </p>
                  <p className="leading-relaxed">
                    Die Schnapsbrennerei-Tradition wird oft innerhalb von Familien 
                    weitergegeben. Viele kleine Brennereien existieren seit 
                    Generationen und bewahren alte Rezepturen und Techniken.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <Card className="border-2 border-primary/20 bg-primary/5 p-8 md:p-12">
              <h2 className="mb-6 text-center font-serif text-3xl font-bold text-foreground">
                Fazit
              </h2>
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
                Der Obstler ist mehr als ein Getränk - er ist ein lebendiges Stück 
                deutscher Kulturgeschichte. Von den sorgfältig gepflegten Obstgärten 
                Süddeutschlands bis in die traditionellen Brennereien verkörpert er 
                handwerkliche Exzellenz, regionale Identität und jahrhundertealte 
                Tradition. Wer einen echten Obstler genießt, trinkt ein Stück 
                deutsche Geschichte.
              </p>
            </Card>
          </section>

        </div>
      </article>

      {/* Related Links */}
      <section className="bg-muted/30 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="mb-8 font-serif text-2xl font-bold text-foreground">
            Weitere Themen entdecken
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/#bier" 
              className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Deutsche Bierkultur
            </Link>
            <Link 
              href="/ueber-uns" 
              className="rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Über uns
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="font-serif text-xl font-bold text-foreground">
              Deutschobstlerculture
            </Link>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/datenschutz" className="transition-colors hover:text-foreground">
                Datenschutz
              </Link>
              <Link href="/cookie-policy" className="transition-colors hover:text-foreground">
                Cookie-Richtlinie
              </Link>
              <Link href="/impressum" className="transition-colors hover:text-foreground">
                Impressum
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-muted-foreground">
            Diese Website dient nur zu Informationszwecken. Bitte trinken Sie verantwortungsbewusst.
          </div>
        </div>
      </footer>
    </div>
  )
}
