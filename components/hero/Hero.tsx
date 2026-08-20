'use client'

import { GeckoScene } from '@/components/3d/GeckoScene'
import { Navigation } from './Navigation'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B0A08]">
      {/* Navigation */}
      <Navigation />

      {/*
        One container, shared with Navigation, so the H1's left edge sits on the
        same axis as the WILDEN wordmark at every width.
      */}
      <div className="wilden-container">
        {/*
          Two-column grid on lg+ (copy left, Chameleon right), single column below.
          The Canvas used to be an `absolute inset-0` full-bleed layer underneath
          the copy, which is what made the text and the model overlap and made the
          composition shift unpredictably on resize. Each now owns a real grid
          cell, so they can no longer collide.

          The split starts at lg (1024px), not md (768px): at 768px a 0.9fr second
          column leaves the copy ~359px, which cannot hold a 68px "COMPANION" on
          one line. Portrait tablets therefore stay single-column, which is also
          where they read best.

          Height: 100svh, not 100vh — on mobile browsers 100vh is the *expanded*
          viewport, so the URL bar clipped the bottom of the Hero. The top offset
          is var(--nav-h), the height Navigation actually renders at, rather than
          a hard-coded pt-24 guess.
        */}
        <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center gap-[clamp(2rem,4vw,4rem)] pt-[calc(var(--nav-h)+clamp(1.5rem,3vh,2.5rem))] pb-[clamp(7rem,14vh,9rem)]">
          {/* Copy column — first in DOM order, so mobile stacks 文案 → CTA → 3D */}
          <div className="hero-copy relative z-10">
            {/* Eyebrow - 品牌定位 */}
            <div className="mb-6 sm:mb-8">
              <p className="text-accent-sand text-xs tracking-[0.32em] uppercase font-medium">
                REPTILES · DISCOVERY · CARE
              </p>
            </div>

            {/* Main Title - fluid clamp(), see .hero-title in globals.css */}
            <h1 className="hero-title font-bold mb-6 sm:mb-8 text-text-primary">
              FIND YOUR
              <br />
              <span className="text-text-primary">PERFECT</span>
              <br />
              <span className="text-accent-sand">COMPANION</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-text-secondary mb-10 sm:mb-12 tracking-wide max-w-md sm:max-w-lg md:max-w-xl">
              Discover reptiles differently. A new way to explore, understand, and care.
            </p>

            {/* CTA Button */}
            <button
              className="group relative px-8 py-4 sm:px-10 sm:py-4 md:px-14 md:py-5 bg-transparent border-2 border-text-primary/20 hover:border-accent-sand transition-all duration-500 overflow-hidden"
              aria-label="Explore reptile species"
            >
              <span className="relative z-10 text-text-primary text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
                EXPLORE
              </span>
              <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </div>

          {/*
            Chameleon column. The cell has an explicit height because a WebGL
            canvas has no intrinsic size — without one the grid row would collapse
            to 0 and the scene would silently disappear.
          */}
          <div
            className="relative w-full h-[clamp(16rem,40svh,26rem)] lg:h-[min(64svh,38.75rem)]"
            aria-hidden="true"
          >
            <GeckoScene />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3 animate-bounce motion-reduce:animate-none">
          <p className="text-text-secondary text-xs tracking-[0.35em] uppercase font-light">
            SCROLL
          </p>
          <ChevronDown className="text-text-secondary" size={18} strokeWidth={1.5} />
        </div>
      </div>

      {/* Gradient Overlay - 增加深度 */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A08]/90 via-transparent to-transparent pointer-events-none z-[5]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0A08]/60 via-transparent to-transparent pointer-events-none z-[5]" />
    </section>
  )
}
