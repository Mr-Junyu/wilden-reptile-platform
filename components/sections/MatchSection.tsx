'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

const matchOptions = {
  experience: ['Beginner', 'Intermediate', 'Advanced'],
  temperament: ['Calm', 'Active', 'Social', 'Independent'],
  appearance: ['Bright', 'Dark', 'Patterned', 'Unique'],
  size: ['Small', 'Medium', 'Large'],
}

export function MatchSection() {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})

  const handleSelect = (category: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: prev[category] === value ? '' : value,
    }))
  }

  const hasSelections = Object.keys(selectedOptions).length > 0

  return (
    <section className="relative py-32 px-6 bg-background-secondary">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-accent-sand" size={20} />
            <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium">
              PERSONALIZED
            </p>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            FIND YOUR
            <br />
            <span className="text-accent-sand">MATCH</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            The right companion starts with understanding you. Answer a few questions to discover your perfect match.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-12 mb-16">
          {/* Experience */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-text-secondary mb-6">
              Experience Level
            </h3>
            <div className="flex flex-wrap gap-4">
              {matchOptions.experience.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('experience', option)}
                  className={`px-8 py-4 border-2 transition-all duration-300 ${
                    selectedOptions.experience === option
                      ? 'border-accent-sand bg-accent-sand/10 text-accent-sand'
                      : 'border-text-primary/20 text-text-primary hover:border-accent-sand/50'
                  }`}
                >
                  <span className="text-sm tracking-wider font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Temperament */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-text-secondary mb-6">
              Temperament
            </h3>
            <div className="flex flex-wrap gap-4">
              {matchOptions.temperament.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('temperament', option)}
                  className={`px-8 py-4 border-2 transition-all duration-300 ${
                    selectedOptions.temperament === option
                      ? 'border-accent-sand bg-accent-sand/10 text-accent-sand'
                      : 'border-text-primary/20 text-text-primary hover:border-accent-sand/50'
                  }`}
                >
                  <span className="text-sm tracking-wider font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-text-secondary mb-6">
              Appearance
            </h3>
            <div className="flex flex-wrap gap-4">
              {matchOptions.appearance.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('appearance', option)}
                  className={`px-8 py-4 border-2 transition-all duration-300 ${
                    selectedOptions.appearance === option
                      ? 'border-accent-sand bg-accent-sand/10 text-accent-sand'
                      : 'border-text-primary/20 text-text-primary hover:border-accent-sand/50'
                  }`}
                >
                  <span className="text-sm tracking-wider font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h3 className="text-sm tracking-[0.3em] uppercase text-text-secondary mb-6">
              Size Preference
            </h3>
            <div className="flex flex-wrap gap-4">
              {matchOptions.size.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect('size', option)}
                  className={`px-8 py-4 border-2 transition-all duration-300 ${
                    selectedOptions.size === option
                      ? 'border-accent-sand bg-accent-sand/10 text-accent-sand'
                      : 'border-text-primary/20 text-text-primary hover:border-accent-sand/50'
                  }`}
                >
                  <span className="text-sm tracking-wider font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/match"
            className={`inline-block group relative px-14 py-5 border-2 transition-all duration-500 overflow-hidden ${
              hasSelections
                ? 'border-accent-sand'
                : 'border-text-primary/20 opacity-50 pointer-events-none'
            }`}
          >
            <span className="relative z-10 text-sm tracking-[0.25em] font-semibold transition-colors duration-500 text-accent-sand group-hover:text-background-primary">
              GET YOUR MATCHES
            </span>
            <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
          <p className="text-xs text-text-secondary mt-6 tracking-wide">
            Or take the full matching quiz for detailed recommendations
          </p>
        </div>
      </div>
    </section>
  )
}
