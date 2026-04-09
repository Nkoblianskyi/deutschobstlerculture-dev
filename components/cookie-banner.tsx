'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom,0px))] md:p-6 md:pb-[max(1.5rem,env(safe-area-inset-bottom,0px))]">
      <Card className="mx-auto max-w-4xl border-2 border-primary/20 bg-card/95 p-4 backdrop-blur-sm sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="mb-2 font-serif text-lg font-semibold text-foreground">
              Cookie-Hinweis
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten. 
              Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="underline hover:text-primary">
                Datenschutzerklärung
              </Link>{' '}
              und{' '}
              <Link href="/cookie-policy" className="underline hover:text-primary">
                Cookie-Richtlinie
              </Link>
              .
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:justify-end sm:shrink-0">
            <Button
              variant="outline"
              onClick={declineCookies}
              className="h-11 w-full border-primary/30 sm:w-auto"
            >
              Ablehnen
            </Button>
            <Button onClick={acceptCookies} className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto">
              Akzeptieren
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
