'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { CookieBanner } from '@/components/cookie-banner'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Image from 'next/image'

export default function UeberUnsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    betreff: '',
    nachricht: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', betreff: '', nachricht: '' })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <CookieBanner />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-16 pt-[max(8rem,calc(env(safe-area-inset-top,0px)+7rem))] md:pb-24 md:pt-40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/orchard-landscape.jpg"
            alt="Deutsche Obstgärten"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Über uns
          </span>
          <h1 className="mb-6 font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl lg:text-3xl">
            Deutschobstlerculture
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Wir sind ein Informationsportal, das sich der Bewahrung und Verbreitung 
            des Wissens über die deutsche Obstbrand-Tradition widmet.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Mission */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Unsere Mission
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Deutschobstlerculture wurde gegründet, um das reiche Erbe der deutschen 
                  Obstbrand-Kultur zu dokumentieren und zu teilen. Unser Ziel ist es, 
                  Wissen über traditionelle Brennverfahren, regionale Besonderheiten 
                  und die Geschichte des Obstlers zugänglich zu machen.
                </p>
                <p className="leading-relaxed">
                  Wir glauben, dass die Kunst der Obstdestillation ein wichtiger Teil 
                  des deutschen Kulturerbes ist, der es verdient, bewahrt und gewürdigt 
                  zu werden. Von den Obstgärten Süddeutschlands bis zu den traditionellen 
                  Brennereien - wir erzählen die Geschichten hinter dem Obstler.
                </p>
                <p className="leading-relaxed">
                  Diese Website dient ausschließlich der Information und Bildung. 
                  Wir verkaufen keine Produkte und bieten keine kommerziellen 
                  Dienstleistungen an.
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-foreground">
                Unsere Werte
              </h2>
              <div className="space-y-6">
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                    Tradition
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Wir ehren die jahrhundertealten Techniken und das Handwerk 
                    der deutschen Brennmeister.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                    Wissen
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Wir recherchieren gründlich und präsentieren fundierte 
                    Informationen über die Obstbrand-Kultur.
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="mb-2 font-serif text-xl font-bold text-foreground">
                    Verantwortung
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Wir fördern einen bewussten und verantwortungsvollen 
                    Umgang mit alkoholischen Getränken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted/30 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
              Kontakt
            </span>
            <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
              Schreiben Sie uns
            </h2>
            <p className="text-muted-foreground">
              Haben Sie Fragen, Anregungen oder möchten Sie mehr über die 
              deutsche Obstbrand-Kultur erfahren? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <Card className="border border-border bg-card p-6 md:p-8">
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                  Vielen Dank!
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Ihre Nachricht wurde erfolgreich gesendet. 
                  Wir werden uns in Kürze bei Ihnen melden.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Neue Nachricht senden
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="betreff">Betreff</Label>
                  <Input
                    id="betreff"
                    type="text"
                    placeholder="Worum geht es?"
                    value={formData.betreff}
                    onChange={(e) => setFormData({ ...formData, betreff: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nachricht">Nachricht</Label>
                  <Textarea
                    id="nachricht"
                    placeholder="Ihre Nachricht..."
                    rows={6}
                    value={formData.nachricht}
                    onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                    required
                    className="bg-background resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </Button>
              </form>
            )}
          </Card>
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
