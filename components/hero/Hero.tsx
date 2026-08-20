'use client'

import { GeckoScene } from '@/components/3d/GeckoScene'
import { Navigation } from './Navigation'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B0A08]">
      {/* Navigation */}
      <Navigation />

      {/* 3D Scene - 作为全屏背景层 */}
      <div className="absolute inset-0 w-full h-full z-0" aria-hidden="true">
        <GeckoScene />
      </div>

      {/* Hero Content - 前景层 */}
      <div className="relative z-10 h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Eyebrow - 品牌定位 */}
            <div className="mb-6 sm:mb-8">
              <p className="text-accent-sand text-xs tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase font-medium">
                REPTILES · DISCOVERY · CARE
              </p>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight sm:leading-[0.95] md:leading-[0.9] mb-6 sm:mb-8 text-text-primary">
              FIND YOUR
              <br />
              <span className="text-text-primary">PERFECT</span>
              <br />
              <span className="text-accent-sand">COMPANION</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary mb-10 sm:mb-12 tracking-wide max-w-md sm:max-w-lg md:max-w-xl leading-relaxed">
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
