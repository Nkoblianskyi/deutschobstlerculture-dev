import { Card } from '@/components/ui/card'
import Image from 'next/image'

export function BeerStyleCards() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="overflow-hidden border border-border transition-all hover:shadow-lg">
          <div className="relative h-48 overflow-hidden bg-[#F5E6D3]">
            <Image
              src="/images/weizenbier.jpg"
              alt="Weizenbier"
              fill
              className="object-cover opacity-40"
            />
            <div className="relative z-10 p-6">
              <h3 className="mb-2 font-serif text-2xl font-bold text-[#2C2416]">Weizenbier</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#2C2416]">5-6</span>
                <span className="text-sm font-medium text-[#5C4A2C]">% vol</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 bg-white p-6">
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#2C2416]">Ursprung</h4>
              <p className="text-sm leading-relaxed text-[#5C4A2C]">
                Bayern - 16. Jahrhundert. Das obergärige Weizenbier entstand als königliches Privileg und wurde zum
                Symbol bayerischer Braukunst.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#2C2416]">Charakter</h4>
              <p className="text-sm leading-relaxed text-[#5C4A2C]">
                Fruchtige Bananen- und Nelkenaromen, natürlich trüb durch die Hefe, erfrischend mit weichem Körper.
              </p>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden border border-border transition-all hover:shadow-lg">
          <div className="relative h-48 overflow-hidden bg-[#D8E3D0]">
            <Image
              src="/images/pilsner.jpg"
              alt="Pilsner"
              fill
              className="object-cover opacity-40"
            />
            <div className="relative z-10 p-6">
              <h3 className="mb-2 font-serif text-2xl font-bold text-[#1C2A16]">Pilsner</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#1C2A16]">4.5-5</span>
                <span className="text-sm font-medium text-[#3A4A2E]">% vol</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 bg-white p-6">
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#1C2A16]">Ursprung</h4>
              <p className="text-sm leading-relaxed text-[#3A4A2E]">
                Norddeutschland - 19. Jahrhundert. Das untergärige Pils wurde zum meistgebrauten Bierstil Deutschlands.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#1C2A16]">Charakter</h4>
              <p className="text-sm leading-relaxed text-[#3A4A2E]">
                Klar und goldgelb, ausgeprägte Hopfenbittere, elegant trocken mit blumigen Noten.
              </p>
            </div>
          </div>
        </Card>

        <Card className="overflow-hidden border border-border transition-all hover:shadow-lg">
          <div className="relative h-48 overflow-hidden bg-[#F0DCC8]">
            <Image
              src="/images/bockbier.jpg"
              alt="Bockbier"
              fill
              className="object-cover opacity-40"
            />
            <div className="relative z-10 p-6">
              <h3 className="mb-2 font-serif text-2xl font-bold text-[#2C1F14]">Bockbier</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-[#2C1F14]">6.5-8</span>
                <span className="text-sm font-medium text-[#5C4632]">% vol</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 bg-white p-6">
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#2C1F14]">Ursprung</h4>
              <p className="text-sm leading-relaxed text-[#5C4632]">
                Süddeutschland - Mittelalter. Starkes Bier, traditionell zur Fastenzeit gebraut, um den Mönchen Kraft zu
                geben.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold text-[#2C1F14]">Charakter</h4>
              <p className="text-sm leading-relaxed text-[#5C4632]">
                Malzig-süß, vollmundig mit Karamell- und Brotnoten, kräftiger Körper und wärmendes Finish.
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm italic text-muted-foreground">Höchste Alkoholstärke in der Biersektion: 8 % vol</p>
      </div>
    </>
  )
}
