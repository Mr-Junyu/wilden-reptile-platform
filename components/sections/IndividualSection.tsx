'use client'

import { individualsData } from '@/data/individuals'
import Link from 'next/link'
import { Heart, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function IndividualSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  // 只显示前6个可用的个体
  const availableIndividuals = individualsData.filter(g => g.available).slice(0, 6)

  return (
    <section className="relative py-32 px-6 bg-background-primary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            INDIVIDUALS
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            MEET
            <br />
            <span className="text-accent-sand">THEM</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Each one has a unique personality, story, and character waiting to connect with you.
          </p>
        </div>

        {/* Individuals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {availableIndividuals.map((gecko) => (
            <Link
              key={gecko.id}
              href={`/geckos/${gecko.id}`}
              onMouseEnter={() => setHoveredId(gecko.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden bg-background-secondary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-square bg-background-tertiary overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${gecko.difficulty === 'beginner' ? '#C4A57B' : gecko.difficulty === 'intermediate' ? '#D4A574' : '#A89080'}20, transparent)`,
                  }}
                />

                {/* Available Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs tracking-wider px-3 py-1 bg-accent-sand/90 text-background-primary font-medium">
                    AVAILABLE
                  </span>
                </div>

                {/* Like Button */}
                <button className="absolute top-4 left-4 z-10 p-2 bg-background-primary/80 hover:bg-background-primary transition-colors duration-300">
                  <Heart size={18} className="text-text-primary" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                  {gecko.name}
                </h3>

                {/* Species & Morph */}
                <p className="text-text-secondary text-sm mb-4">
                  {gecko.species} · {gecko.morph}
                </p>

                {/* Temperament Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {gecko.temperament.slice(0, 2).map((trait) => (
                    <span
                      key={trait}
                      className="text-xs text-text-secondary tracking-wide"
                    >
                      {trait}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-text-primary/10">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Age
                    </p>
                    <p className="text-text-primary text-sm font-medium">{gecko.age}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Sex
                    </p>
                    <p className="text-text-primary text-sm font-medium">{gecko.sex}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Weight
                    </p>
                    <p className="text-text-primary text-sm font-medium">{gecko.weight}</p>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">
                      Price
                    </p>
                    <p className="text-xl font-bold text-text-primary">
                      ¥{gecko.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-accent-sand">
                    <span className="text-xs tracking-wider uppercase font-semibold">
                      View
                    </span>
                    <ArrowRight
                      size={16}
                      className={`transform transition-transform duration-500 ${
                        hoveredId === gecko.id ? 'translate-x-1' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-16">
          <Link
            href="/geckos"
            className="inline-flex items-center gap-3 text-text-primary hover:text-accent-sand transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase">View All Individuals</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
