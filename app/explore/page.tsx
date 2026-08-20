'use client'

import { speciesData } from '@/data/species'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ExplorePage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-background-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-8">
              DISCOVER
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 text-text-primary">
              EXPLORE
              <br />
              <span className="text-accent-sand">THE WILD</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Each species brings its own character, beauty, and unique care requirements.
            </p>
          </div>

          {/* Species Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {speciesData.map((species) => (
              <Link
                key={species.id}
                href={`/species/${species.slug}`}
                onMouseEnter={() => setHoveredId(species.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative h-[600px] overflow-hidden bg-background-secondary"
              >
                {/* Background Image Placeholder */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundColor: species.accent,
                    opacity: 0.1,
                  }}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                  {/* Difficulty Badge */}
                  <div className="absolute top-8 right-8">
                    <span className="text-xs tracking-[0.3em] uppercase px-4 py-2 border border-text-primary/20 text-text-secondary">
                      {species.difficulty}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {species.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs tracking-wider text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-5xl font-bold mb-3 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                    {species.name}
                  </h2>

                  {/* Scientific Name */}
                  <p className="text-text-secondary italic mb-4 text-lg">
                    {species.scientificName}
                  </p>

                  {/* Description */}
                  <p className="text-text-secondary mb-6 leading-relaxed max-w-md">
                    {species.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-8 mb-8 text-sm">
                    <div>
                      <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                        Size
                      </p>
                      <p className="text-text-primary">{species.size}</p>
                    </div>
                    <div>
                      <p className="text-text-secondary text-xs uppercase tracking-wider mb-1">
                        Lifespan
                      </p>
                      <p className="text-text-primary">{species.lifespan}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-accent-sand">
                    <span className="text-sm tracking-[0.2em] uppercase font-semibold">
                      Learn More
                    </span>
                    <ArrowRight
                      size={20}
                      className="transform transition-transform duration-500 group-hover:translate-x-2"
                    />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 border-2 transition-colors duration-500 pointer-events-none"
                  style={{
                    borderColor: hoveredId === species.id ? species.accent : 'transparent',
                  }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary">
            Not sure where to start?
          </h2>
          <p className="text-xl text-text-secondary mb-12 leading-relaxed">
            Take our matching quiz to find the perfect reptile companion for your lifestyle.
          </p>
          <Link
            href="/match"
            className="inline-block group relative px-14 py-5 bg-transparent border-2 border-accent-sand hover:border-accent-sand transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
              FIND YOUR MATCH
            </span>
            <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </section>
    </main>
  )
}
