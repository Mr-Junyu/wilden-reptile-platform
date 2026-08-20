import { speciesData } from '@/data/species'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Thermometer, Droplets } from 'lucide-react'

export default function SpeciesDetailPage({ params }: { params: { slug: string } }) {
  const species = speciesData.find(s => s.slug === params.slug)

  if (!species) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Back Button */}
      <section className="py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/species"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-sand transition-colors duration-300"
          >
            <ArrowLeft size={18} />
            <span className="text-sm tracking-wider uppercase">Back to Species</span>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Placeholder */}
            <div
              className="aspect-square rounded-sm"
              style={{
                backgroundColor: species.accent,
                opacity: 0.2
              }}
            />

            {/* Content */}
            <div>
              <span
                className="text-xs tracking-[0.3em] uppercase px-3 py-1 border inline-block mb-6"
                style={{
                  borderColor: `${species.accent}40`,
                  color: species.accent
                }}
              >
                {species.difficulty}
              </span>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-text-primary">
                {species.name}
              </h1>

              <p className="text-text-secondary italic mb-8 text-lg">
                {species.scientificName}
              </p>

              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                {species.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-12">
                {species.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-text-secondary tracking-wide px-4 py-2 border border-text-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/match"
                className="inline-block group relative px-12 py-4 bg-transparent border-2 border-accent-sand transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
                  FIND YOUR MATCH
                </span>
                <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Care Requirements */}
      <section className="py-20 px-6 bg-background-secondary">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-text-primary">
            Care Requirements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Size */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Size
              </p>
              <p className="text-2xl font-bold text-text-primary">{species.size}</p>
            </div>

            {/* Lifespan */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-3">
                Lifespan
              </p>
              <p className="text-2xl font-bold text-text-primary">{species.lifespan}</p>
            </div>

            {/* Temperature */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Thermometer size={16} className="text-accent-sand" />
                <p className="text-xs text-text-secondary uppercase tracking-wider">
                  Temperature
                </p>
              </div>
              <p className="text-2xl font-bold text-text-primary">
                {species.temperature.min}°-{species.temperature.max}°F
              </p>
            </div>

            {/* Humidity */}
            <div className="p-6 bg-background-primary border border-text-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <Droplets size={16} className="text-accent-sand" />
                <p className="text-xs text-text-secondary uppercase tracking-wider">
                  Humidity
                </p>
              </div>
              <p className="text-2xl font-bold text-text-primary">
                {species.humidity.min}%-{species.humidity.max}%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-text-primary">
            Ready to meet your {species.name}?
          </h2>
          <Link
            href="/geckos"
            className="inline-block group relative px-12 py-4 bg-transparent border-2 border-accent-sand transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10 text-accent-sand text-sm tracking-[0.25em] font-semibold group-hover:text-background-primary transition-colors duration-500">
              VIEW AVAILABLE
            </span>
            <div className="absolute inset-0 bg-accent-sand transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        </div>
      </section>
    </main>
  )
}
