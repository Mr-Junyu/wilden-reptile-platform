'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative py-40 px-6 bg-background-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-12 text-text-primary leading-[0.95]">
            YOUR NEXT
            <br />
            COMPANION IS
            <br />
            <span className="text-accent-sand">WAITING</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-text-secondary mb-16 leading-relaxed max-w-2xl mx-auto">
            Begin your journey into the fascinating world of reptile companionship.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/geckos"
              className="group relative px-14 py-5 bg-transparent border-2 border-accent-sand transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
                EXPLORE REPTILES
              </span>
              <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>

            <Link
              href="/match"
              className="group inline-flex items-center gap-3 text-text-primary hover:text-accent-sand transition-colors duration-300"
            >
              <span className="text-sm tracking-[0.2em] uppercase">Find Your Match</span>
              <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
