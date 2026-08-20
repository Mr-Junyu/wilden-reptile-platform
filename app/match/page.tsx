export default function MatchPage() {
  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            PERSONALIZED
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            FIND YOUR
            <br />
            <span className="text-accent-sand">MATCH</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Answer a few questions to discover the perfect reptile companion for your lifestyle.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="p-12 border-2 border-text-primary/10 bg-background-secondary">
            <p className="text-text-secondary mb-6">
              Full matching quiz coming soon. For now, explore our species and individuals directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/species"
                className="inline-block px-12 py-4 bg-transparent border-2 border-accent-sand text-accent-sand text-sm tracking-[0.25em] font-semibold hover:bg-accent-sand hover:text-background-primary transition-all duration-300"
              >
                EXPLORE SPECIES
              </a>
              <a
                href="/geckos"
                className="inline-block px-12 py-4 bg-transparent border-2 border-text-primary/20 text-text-primary text-sm tracking-[0.25em] font-semibold hover:border-accent-sand hover:text-accent-sand transition-all duration-300"
              >
                VIEW INDIVIDUALS
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
