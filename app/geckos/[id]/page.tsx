import { individualsData } from '@/data/individuals'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Heart, Check } from 'lucide-react'

export default function GeckoDetailPage({ params }: { params: { id: string } }) {
  const gecko = individualsData.find(g => g.id === params.id)

  if (!gecko) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Back Button */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/geckos"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-sand transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span className="text-sm tracking-wider uppercase">Back to All</span>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Placeholder */}
            <div className="relative aspect-square rounded-sm overflow-hidden bg-background-tertiary">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${gecko.difficulty === 'beginner' ? '#C4A57B' : gecko.difficulty === 'intermediate' ? '#D4A574' : '#A89080'}30, transparent)`,
                }}
              />

              {/* Like Button */}
              <button className="absolute top-6 right-6 p-3 bg-background-primary/90 hover:bg-background-primary transition-colors duration-300 rounded-full">
                <Heart size={20} className="text-text-primary" />
              </button>

              {/* Status Badge */}
              {gecko.available ? (
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs tracking-wider px-4 py-2 bg-accent-sand text-background-primary font-medium">
                    AVAILABLE
                  </span>
                </div>
              ) : (
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs tracking-wider px-4 py-2 bg-text-secondary/80 text-background-primary font-medium">
                    RESERVED
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              {/* Name */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-text-primary">
                {gecko.name}
              </h1>

              {/* Species & Morph */}
              <p className="text-text-secondary text-xl mb-8">
                {gecko.species} · {gecko.morph}
              </p>

              {/* Description */}
              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                {gecko.description}
              </p>

              {/* Temperament Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {gecko.temperament.map((trait) => (
                  <span
                    key={trait}
                    className="text-xs text-text-secondary tracking-wide px-4 py-2 border border-text-primary/10"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="mb-12 pb-12 border-b border-text-primary/10">
                <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">
                  Price
                </p>
                <p className="text-4xl font-bold text-text-primary">
                  ¥{gecko.price.toLocaleString()}
                </p>
              </div>

              {/* CTA */}
              {gecko.available ? (
                <button className="w-full group relative px-12 py-5 bg-transparent border-2 border-accent-sand transition-all duration-500 overflow-hidden">
                  <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
                    RESERVE THIS COMPANION
                  </span>
                  <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              ) : (
                <div className="w-full px-12 py-5 bg-text-secondary/10 border-2 border-text-secondary/20">
                  <span className="text-text-secondary text-sm tracking-[0.25em] font-semibold">
                    CURRENTLY RESERVED
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 px-6 bg-background-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-primary">
            Details
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Age */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Age
              </p>
              <p className="text-2xl font-bold text-text-primary">{gecko.age}</p>
            </div>

            {/* Sex */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Sex
              </p>
              <p className="text-2xl font-bold text-text-primary">{gecko.sex}</p>
            </div>

            {/* Weight */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Weight
              </p>
              <p className="text-2xl font-bold text-text-primary">{gecko.weight}</p>
            </div>

            {/* Health */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Health
              </p>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-accent-sand" />
                <p className="text-lg font-bold text-text-primary">{gecko.healthStatus}</p>
              </div>
            </div>

            {/* Difficulty */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Care Level
              </p>
              <p className="text-lg font-bold text-text-primary capitalize">{gecko.difficulty}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-primary">
            Ready to build their world?
          </h2>
          <p className="text-lg text-text-secondary mb-12">
            Explore everything you need to create the perfect habitat.
          </p>
          <Link
            href="/shop"
            className="inline-block group relative px-12 py-4 bg-transparent border-2 border-text-primary/20 hover:border-accent-sand transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-text-primary text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
              BUILD HABITAT
            </span>
            <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </section>
    </main>
  )
}
