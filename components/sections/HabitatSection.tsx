'use client'

import Link from 'next/link'
import { Thermometer, Sun, Droplets, Box, Utensils, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Box,
    name: 'Terrarium',
    description: 'Complete habitat systems',
    count: '12+ options',
  },
  {
    icon: Thermometer,
    name: 'Heating',
    description: 'Temperature control',
    count: '8+ options',
  },
  {
    icon: Sun,
    name: 'Lighting',
    description: 'UVB & LED systems',
    count: '15+ options',
  },
  {
    icon: Droplets,
    name: 'Substrate',
    description: 'Natural & safe bedding',
    count: '6+ options',
  },
  {
    icon: Utensils,
    name: 'Feeding',
    description: 'Bowls & supplements',
    count: '10+ options',
  },
  {
    icon: Sparkles,
    name: 'Decoration',
    description: 'Hides & enrichment',
    count: '20+ options',
  },
]

export function HabitatSection() {
  return (
    <section className="relative py-32 px-6 bg-background-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            HABITAT
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            BUILD THEIR
            <br />
            <span className="text-accent-sand">WORLD</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Everything you need to create the perfect environment for your companion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.name}
                href="/shop"
                className="group relative p-8 bg-background-primary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex p-4 border border-text-primary/20 group-hover:border-accent-sand/50 transition-colors duration-500">
                    <Icon className="text-accent-sand" size={28} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                  {category.name}
                </h3>
                <p className="text-text-secondary mb-4 leading-relaxed">
                  {category.description}
                </p>
                <p className="text-xs text-accent-sand tracking-wider uppercase">
                  {category.count}
                </p>
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/shop"
            className="inline-block group relative px-14 py-5 bg-transparent border-2 border-accent-sand transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
              EXPLORE PRODUCTS
            </span>
            <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </div>
    </section>
  )
}
