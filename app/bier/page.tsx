import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BeerStyleCards } from '@/components/beer-style-cards'

export default function BierPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CookieBanner />

      <header className="border-b border-border/50 bg-gradient-to-b from-primary/10 via-background to-background px-4 pb-16 pt-[max(8rem,calc(env(safe-area-inset-top,0px)+7rem))] md:pb-20 md:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4 border border-primary/20 bg-card/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Deutsche Bierkultur
          </Badge>
          <h1 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
            Brauereien, Bierstuben & lebendige Tradition
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Vom Familienbetrieb bis zum Biergarten unter Kastanien: deutsches Bier ist untrennbar mit Orten, Ritualen und
            handwerklicher Geschichte verbunden. Hier sammeln wir Einblicke in Brauorte, Gastkultur und die feinen
            Traditionen von Ausstattung bis Rezeptur — rein informativ, ohne Verkauf.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">18+</span> — Bitte verantwortungsbewusst genießen.
          </p>
        </div>
      </header>

      <main className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
          <section aria-labelledby="brauorte-heading" className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <Card className="overflow-hidden border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-sm">
              <div className="h-2 bg-gradient-to-r from-amber-700/80 via-amber-600/60 to-primary/40" aria-hidden />
              <div className="space-y-4 p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Brauorte</span>
                <h2 id="brauorte-heading" className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Brauereien — Herzstück der Region
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  In Deutschland verbinden Brauereien oft Generationen: Kupferkessel, offene Gärtanks und der Duft von
                  Malz gehören zum Erlebnis vieler Kommunen. Klosterbrauereien prägten früh Standards der Qualität;
                  heute ergänzen Regional- und Craft-Brauereien klassische Stile mit Experimenten — immer wieder
                  verwurzelt in lokaler Identität.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Brauereibesichtigungen und „Brauhaustage“ machen sichtbar, wie Wasser, Malz, Hopfen und Hefe zum fertigen
                  Bier werden — ein Stück Kulturgeschichte im Glas.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border border-primary/20 bg-gradient-to-br from-card via-card to-accent/10 shadow-sm">
              <div className="h-2 bg-gradient-to-r from-emerald-800/70 via-emerald-600/50 to-accent/30" aria-hidden />
              <div className="space-y-4 p-6 md:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Gastkultur</span>
                <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Bierstube, Biergarten &amp; Bar
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Die <strong className="font-semibold text-foreground">Bierstube</strong> mit Holz, Stammtisch und
                  oft bodenständiger Küche ist das Innenpendant zur lockeren Freiluftkultur: im klassischen{' '}
                  <strong className="font-semibold text-foreground">Biergarten</strong> stehen Bierkasten, Bänke unter
                  Bäumen und mitgebrachte Vesper im Mittelpunkt — ein Brauch, der bis heute gepflegt wird.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  Moderne <strong className="font-semibold text-foreground">Bierbars</strong> und Taprooms setzen auf
                  Zapfanlagen mit vielen Sorten, kleine Speisen und Gespräch am Tresen; gemeinsam ist allen Formaten die
                  Geselligkeit rund ums frisch gezapfte Bier.
                </p>
              </div>
            </Card>
          </section>

          <section
            aria-labelledby="tradition-heading"
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-muted/20 px-6 py-10 shadow-inner md:px-10 md:py-14"
          >
            <div
              className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div className="relative mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Kultur &amp; Handwerk</span>
              <h2 id="tradition-heading" className="mt-3 font-serif text-2xl font-bold text-foreground md:text-4xl">
                Schmuck, Fasskunst &amp; Rezepttradition
              </h2>
              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                Brauereifassaden und Innenräume erzählen oft ihre eigene Geschichte: Zunftzeichen, historische
                Werbeschilder, Malereien an Fachwerk oder Lüftl-Fassaden, kunstvolle{' '}
                <strong className="font-semibold text-foreground">Bierkrüge</strong> und Zinndeckel — alles gehört zur
                ästhetischen Welt des deutschen Biers. Im Keller lagern Holzfässer oder Edelstahltanks; manche Betriebe
                bewahren noch alte Eichenfässer als Schmuckstück und Erinnerung an frühere Reifung.
              </p>
            </div>

            <div className="relative mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
              <Card className="border-border/60 bg-card/90 p-6 text-left">
                <h3 className="font-serif text-lg font-bold text-foreground">Rezepte &amp; Reinheitsgebot</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Das <strong className="font-semibold text-foreground">Reinheitsgebot von 1516</strong> (historisch in
                  Bayern) prägte die Vorstellung von „echtem“ Bier aus Wasser, Malz, Hopfen und Hefe. Viele Brauereien
                  halten an bewährten <strong className="font-semibold text-foreground">Hausrezepturen</strong> fest —
                  Stammwürze, Rastzeiten und Hopfengaben werden oft als Betriebsgeheimnis geführt. Saisonale Bräuten wie
                  <strong className="font-semibold text-foreground"> Bockbier zum Anstich</strong> oder
                  Festbier zur Kirchweih gehören zum Kalender der Brau- und Dorftraditionen.
                </p>
              </Card>
              <Card className="border-border/60 bg-card/90 p-6 text-left">
                <h3 className="font-serif text-lg font-bold text-foreground">Rituale &amp; Genuss</h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Bockbieranstich:</span> Fass wird feierlich
                    angestochen — oft mit Bürgermeister oder Brauer.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Krug spülen:</span> In manchen Stuben wird der Krug
                    vor dem Zapfen mit kaltem Wasser benetzt — Ritual und Praxis zugleich.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Brotzeit:</span> Ob Radi, Obazda oder
                    Weißwurst — regionale Küche rundet das Biererlebnis ab.
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          <section aria-labelledby="stile-heading">
            <div className="mb-10 text-center">
              <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wide text-primary">
                Stile
              </span>
              <h2 id="stile-heading" className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                Klassische deutsche Bierstile
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
                Ein Überblick über drei prägende Sorten — mit typischer Stärke und Charakter.
              </p>
            </div>
            <BeerStyleCards />
          </section>

          <p className="text-center text-sm text-muted-foreground">
            <Link href="/" className="font-medium text-primary underline-offset-4 hover:underline">
              Zurück zur Startseite
            </Link>
          </p>
        </div>
      </main>
    </div>
  )
}
