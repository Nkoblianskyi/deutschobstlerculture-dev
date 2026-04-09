'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Deutschobstlerculture" width={32} height={32} />
            <p className="font-serif text-xl font-bold text-foreground md:text-2xl">Deutschobstlerculture</p>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/obstler" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Obstler
            </Link>
            <Link href="/#bier" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Bierkultur
            </Link>
            <Link href="/ueber-uns" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              Über uns
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border/50 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/obstler"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Obstler
              </Link>
              <Link
                href="/#bier"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Bierkultur
              </Link>
              <Link
                href="/ueber-uns"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Über uns
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
