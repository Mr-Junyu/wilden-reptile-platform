'use client'

import { speciesData } from '@/data/species'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function SpeciesSection() {
  return (
    <section className="relative py-32 px-6 bg-background-primary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            DISCOVER
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            FIND YOUR
            <br />
            <span className="text-accent-sand">SPECIES</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Each species brings unique characteristics, care needs, and personality traits.
          </p>
        </div>

        {/* Species Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {speciesData.map((species, index) => (
            <Link
              key={species.id}
              href={`/species/${species.slug}`}
              className="group relative overflow-hidden bg-background-secondary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
            >
              {/* Background Accent */}
              <div
                className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                style={{ backgroundColor: species.accent }}
              />

              {/* Content */}
              <div className="relative p-8 lg:p-10">
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs tracking-[0.3em] uppercase px-3 py-1 border"
                    style={{
                      borderColor: `${species.accent}40`,
                      color: species.accent
                    }}
                  >
                    {species.difficulty}
                  </span>
                  <span className="text-xs text-text-secondary tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                  {species.name}
                </h3>

                {/* Scientific Name */}
                <p className="text-text-secondary italic mb-4 text-sm">
                  {species.scientificName}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {species.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-text-secondary tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-8">
                  {species.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-text-primary/10">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">
                      Size
                    </p>
                    <p className="text-text-primary font-medium">{species.size}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">
                      Lifespan
                    </p>
                    <p className="text-text-primary font-medium">{species.lifespan}</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3 text-accent-sand">
                  <span className="text-sm tracking-[0.2em] uppercase font-semibold">
                    Explore
                  </span>
                  <ArrowRight
                    size={18}
                    className="transform transition-transform duration-500 group-hover:translate-x-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            href="/species"
            className="inline-flex items-center gap-3 text-text-primary hover:text-accent-sand transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase">View All Species</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
