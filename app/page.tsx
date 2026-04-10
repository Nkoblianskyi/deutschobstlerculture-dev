import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BeerStyleCards } from '@/components/beer-style-cards'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 pb-16 pt-[max(8rem,calc(env(safe-area-inset-top,0px)+7rem))] sm:pb-20 md:pb-32 md:pt-40">
        {/* Full Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/obstler-hero.jpg"
            alt="Deutsche Obstgärten"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-background/85"></div>
        </div>
        
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 border border-primary/20 bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm">
              Süddeutschland - Seit Jahrhunderten
            </Badge>
            <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-balance text-foreground sm:text-4xl md:text-6xl lg:text-7xl">
              Die Seele der deutschen Obstgärten im Glas
            </h1>
            <div className="mx-auto mb-8 h-1 w-24 bg-primary"></div>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-pretty text-foreground/80 md:text-xl">
              Obstler - oder wie man in Bayern und Baden-Württemberg sagt: der reinste Ausdruck deutscher Obstkultur. 
              Ein kristallklarer Fruchtbrand aus Äpfeln, Birnen, Pflaumen und Kirschen, der seit Generationen die 
              Handwerkskunst süddeutscher Brennereien verkörpert.
            </p>
            
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#geschichte"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
              >
                Geschichte entdecken
              </a>
              <a
                href="#genuss"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary/30 bg-card/80 px-8 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card"
              >
                Wie man genießt
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              18+ - Diese Informationen über alkoholische Getränke sind nur für Personen ab 18 Jahren. Bitte trinken Sie verantwortungsbewusst.
            </p>
          </div>
        </div>
      </section>

      {/* Alcohol strength highlight — Kirschwasser / Obstbrand */}
      <section
        className="relative overflow-hidden border-y border-primary/15 bg-gradient-to-b from-secondary/40 via-background to-muted/50 px-4 py-14 sm:py-16 md:py-20"
        aria-labelledby="alkohol-highlight-heading"
      >
        <div
          className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl md:h-80 md:w-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-accent/15 blur-3xl md:h-72 md:w-72"
          aria-hidden
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-lg shadow-primary/5 backdrop-blur-sm sm:rounded-3xl">
            <div className="grid gap-8 p-6 sm:p-8 md:gap-10 md:p-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-12">
              <div className="space-y-4 text-center lg:col-span-7 lg:text-left">
                <Badge
                  variant="secondary"
                  className="border border-primary/20 bg-primary/10 text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  Höchste Stärke hier
                </Badge>
                <div className="space-y-2">
                  <h2
                    id="alkohol-highlight-heading"
                    className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-tight"
                  >
                    Kirschwasser
                  </h2>
                  <p className="text-base font-medium text-primary sm:text-lg">
                    Reiner Obstbrand aus Süßkirschen
                  </p>
                </div>
                <p className="mx-auto max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base lg:mx-0">
                  Klar, aromatisch und kraftvoll — in süddeutschen Brennereien entsteht edles Kirschwasser,
                  oft zweifach destilliert. Besonders ausdrucksstarke Abfüllungen erreichen bis zu{' '}
                  <span className="font-semibold text-foreground">50&nbsp;% vol</span> und zählen zu den
                  intensivsten Obstbränden der deutschen Tradition.
                </p>
              </div>

              <div className="flex justify-center lg:col-span-5">
                <div className="relative w-full max-w-[18rem] sm:max-w-xs">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-accent/10" />
                  <div className="relative rounded-2xl border border-primary/25 bg-gradient-to-b from-card to-muted/30 p-6 text-center shadow-inner sm:p-8">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                      Auf dieser Website
                    </p>
                    <p className="mt-1 font-serif text-lg font-semibold text-foreground sm:text-xl">
                      Maximalwert
                    </p>
                    <div className="mt-4 flex flex-wrap items-baseline justify-center gap-x-1 gap-y-0">
                      <span className="font-serif text-5xl font-bold text-primary tabular-nums sm:text-6xl md:text-7xl">
                        50
                      </span>
                      <span className="pb-1 text-lg font-semibold text-foreground sm:text-xl md:text-2xl">
                        % vol
                      </span>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Bezieht sich auf beschriebene Spitzenwerte bei Obstbränden — keine Verkaufs- oder
                      Angebotsinformation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-border/60 bg-muted/20 px-6 py-6 sm:px-8 md:px-10 lg:px-12">
              <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">
                Diese Seite ist ein reines Informationsangebot über alkoholische Getränke der deutschen
                Tradition. Hier wird weder verkauft noch bestellt — nur die Kultur bewahrt.
              </p>
              <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
                <span className="font-semibold text-foreground">18+</span>
                {' — '}
                Alkoholische Getränke sind nur für Personen ab 18 Jahren. Bitte trinken Sie
                verantwortungsbewusst.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beer Section */}
      <section id="bier" className="bg-background px-4 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wide text-primary">
              Tradition
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">
              Deutsche Bierkultur
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-pretty text-muted-foreground">
              Vom Reinheitsgebot bis zur modernen Craft-Bewegung - deutsches Bier ist Weltkultur
            </p>
            <p className="mx-auto mt-6 max-w-xl">
              <Link
                href="/bier"
                className="text-sm font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
              >
                Ausführliche Seite: Brauereien, Bierstuben &amp; Tradition →
              </Link>
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden border border-primary/20 bg-gradient-to-br from-card via-card to-primary/[0.07] shadow-sm transition-shadow hover:shadow-md">
              <div className="h-1.5 bg-gradient-to-r from-amber-800/90 via-amber-600/50 to-primary/35" aria-hidden />
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Brauorte</span>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground md:text-2xl">Brauereien</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Familienbetriebe, Klosterbrauereien und moderne Handwerksbrauereien prägen das Bild: Kupferkessel,
                  Malzduft und oft Führungen machen das Brauen erlebbar. Regionale Sorten sind Ausdruck lokaler Identität.
                </p>
              </div>
            </Card>
            <Card className="overflow-hidden border border-primary/20 bg-gradient-to-br from-card via-card to-accent/[0.08] shadow-sm transition-shadow hover:shadow-md">
              <div className="h-1.5 bg-gradient-to-r from-emerald-900/80 via-emerald-600/45 to-accent/30" aria-hidden />
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Gastkultur</span>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground md:text-2xl">
                  Bierstube, Biergarten &amp; Bar
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Gemütliche Stuben mit Stammtisch, Kastanien-Biergärten mit Vesperkultur und urbane Bierbars mit vielen
                  Zapfhähnen — überall steht Geselligkeit und frisch gezapftes Bier im Mittelpunkt.
                </p>
              </div>
            </Card>
          </div>

          <div className="mb-12 rounded-2xl border border-border/70 bg-muted/25 px-6 py-8 shadow-sm md:rounded-3xl md:px-10 md:py-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Handwerk &amp; Ästhetik</span>
              <h3 className="mt-2 font-serif text-xl font-bold text-foreground md:text-2xl">
                Schmuck, Krüge &amp; Rezepttradition
              </h3>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Historische Schilder, Zunftzeichen und Fassadenmalerei erzählen Braugeschichte sichtbar;{' '}
                <strong className="font-semibold text-foreground">Bierkrüge</strong> und Zinndeckel sind Sammler- und
                Kultobjekte. Das <strong className="font-semibold text-foreground">Reinheitsgebot</strong> und
                bewahrte <strong className="font-semibold text-foreground">Hausrezepturen</strong> sichern Stil und
                Qualität — dazu saisonale Rituale wie der <strong className="font-semibold text-foreground">Bockanstich</strong>.
              </p>
            </div>
          </div>

          <BeerStyleCards />
        </div>
      </section>

      {/* Topics Section */}
      <section className="bg-muted/30 px-4 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wide text-primary">
              Themen
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">
              Die Welt des Obstlers
            </h2>
            <div className="mx-auto h-1 w-16 bg-accent"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Geschichte */}
            <Card id="geschichte" className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/orchard-landscape.jpg"
                  alt="Historische deutsche Obstgärten"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-primary">
                  Historisches
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Vom Römischen Obstgarten bis heute</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Die Geschichte des Obstlers beginnt in den Obstgärten Süddeutschlands. 
                  Bereits im Mittelalter brannten Bauern aus überschüssigem Obst klare Destillate. 
                  Was als praktische Konservierungsmethode begann, wurde zur Kunst.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Im 18. und 19. Jahrhundert perfektionierten Brennmeister in Baden-Württemberg und Bayern 
                  die Technik der Doppeldestillation. Der Obstler wurde zum Symbol für Qualität und regionale Identität.
                </p>
              </div>
            </Card>

            {/* Herstellung */}
            <Card id="herstellung" className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/distillation.jpg"
                  alt="Traditionelle Destillation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-accent">
                  Herstellung
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Die Kunst der Destillation</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Echter Obstler entsteht aus vollreifen Früchten - Äpfel, Birnen, Zwetschgen oder Kirschen. 
                  Die Früchte werden gemahlen, fermentiert und dann zweifach destilliert.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Maischen:</span> Früchte werden zerkleinert und vergoren</li>
                  <li><span className="font-semibold text-foreground">Brennen:</span> Zweifache Destillation für Reinheit</li>
                  <li><span className="font-semibold text-foreground">Reifung:</span> Lagerung für harmonischen Geschmack</li>
                </ul>
              </div>
            </Card>

            {/* Sorten */}
            <Card className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/fruits.jpg"
                  alt="Deutsche Obstvielfalt"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-primary">
                  Vielfalt
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Obstler-Varianten</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Apfel-Birnen-Obstler (38-43% vol)</h4>
                    <p className="text-muted-foreground">
                      Der Klassiker - ausgewogen zwischen fruchtiger Süße und milder Säure
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Zwetschgenwasser (40-45% vol)</h4>
                    <p className="text-muted-foreground">
                      Intensive Pflaumenfrucht mit leichter Mandelnote
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-foreground">Kirschwasser (43-50% vol)</h4>
                    <p className="text-muted-foreground">
                      Die Königsdisziplin - kraftvoll, aromatisch, mit Kirsch-Eleganz
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Genuss */}
            <Card id="genuss" className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/tradition.jpg"
                  alt="Traditioneller Genuss"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-accent">
                  Genuss
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Die Kunst des Genießens</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Obstler wird traditionell bei Zimmertemperatur in kleinen Gläsern serviert - 
                  das &quot;Stamperl&quot; oder &quot;Schnäpsle&quot;, wie man im Süden sagt.
                </p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-foreground">Temperatur:</span>
                    <span className="text-muted-foreground"> 16-18°C - zu kalt verschließen sich die Aromen</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Glas:</span>
                    <span className="text-muted-foreground"> Tulpenförmiges Obstlerglas oder kleines Schnapsglas</span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Moment:</span>
                    <span className="text-muted-foreground"> Als Digestif nach einem herzhaften Essen</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Kulinarik */}
            <Card className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/vesper.jpg"
                  alt="Schwarzwälder Vesper"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  In Süddeutschland gehört der Obstler zur deftigen Küche wie die Butter aufs Brot. 
                  Seine klare Fruchtigkeit harmoniert perfekt mit herzhaften Speisen.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Schwarzwälder Schinken</span> - geräuchert und würzig</li>
                  <li><span className="font-semibold text-foreground">Käsespätzle</span> - cremig und gehaltvoll</li>
                  <li><span className="font-semibold text-foreground">Brezel & Bauernbrot</span> - rustikal und authentisch</li>
                </ul>
              </div>
            </Card>

            {/* Tradition */}
            <Card className="group overflow-hidden border border-border bg-card transition-all hover:shadow-lg">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src="/images/festival.jpg"
                  alt="Brennerfeste & Tradition"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block text-xs font-bold uppercase tracking-wide text-accent">
                  Feste
                </span>
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Brennerfeste & Tradition</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  In Baden-Württemberg und Bayern feiern ganze Dörfer ihre Brennereitradition. 
                  Obstler ist mehr als ein Getränk - er ist gelebte Kultur.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><span className="font-semibold text-foreground">Brennerfeste im Herbst:</span> Nach der Ernte wird gemeinsam gefeiert</li>
                  <li><span className="font-semibold text-foreground">Schnapsbrenner-Märkte:</span> Traditionelle Destillate zum Probieren</li>
                  <li><span className="font-semibold text-foreground">Brennereiführungen:</span> Einblick in alte Handwerkskunst</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 px-4 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 font-serif text-xl font-bold text-foreground">Deutschobstlerculture</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Eine informative Plattform über die Kultur und Tradition des deutschen Obstlers und deutscher Biere. 
                Hier wird weder verkauft noch bestellt.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Rechtliches</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/datenschutz" className="text-muted-foreground transition-colors hover:text-primary">
                    Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <a href="/cookie-policy" className="text-muted-foreground transition-colors hover:text-primary">
                    Cookie-Richtlinie
                  </a>
                </li>
                <li>
                  <a href="/impressum" className="text-muted-foreground transition-colors hover:text-primary">
                    Impressum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-foreground">Hinweis</h4>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Diese Website richtet sich ausschließlich an Personen ab 18 Jahren. 
                Bitte genießen Sie alkoholische Getränke verantwortungsbewusst.
              </p>
              <Badge variant="outline" className="border-primary/30 bg-primary/10">
                18+ Nur für Erwachsene
              </Badge>
            </div>
          </div>
          <div className="mt-8 border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
            <p>Copyright 2026 Deutschobstlerculture. Alle Rechte vorbehalten.</p>
            <p className="mt-2">Nur Information - kein Verkauf alkoholischer Getränke.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
