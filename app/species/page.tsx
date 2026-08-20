import { speciesData } from '@/data/species'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function SpeciesPage() {
  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            DISCOVER
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            ALL
            <br />
            <span className="text-accent-sand">SPECIES</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Explore every species we work with and find your perfect companion.
          </p>
        </div>
      </section>

      {/* Species Grid */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {speciesData.map((species, index) => (
              <Link
                key={species.id}
                href={`/species/${species.slug}`}
                className="group relative overflow-hidden bg-background-secondary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
              >
                <div
                  className="absolute inset-0 opacity-5 transition-opacity duration-500 group-hover:opacity-10"
                  style={{ backgroundColor: species.accent }}
                />

                <div className="relative p-8 lg:p-10">
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

                  <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                    {species.name}
                  </h3>

                  <p className="text-text-secondary italic mb-4 text-sm">
                    {species.scientificName}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {species.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs text-text-secondary tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-8">
                    {species.description}
                  </p>

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

                  <div className="flex items-center gap-3 text-accent-sand">
                    <span className="text-sm tracking-[0.2em] uppercase font-semibold">
                      Learn More
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
        </div>
      </section>
    </main>
  )
}
