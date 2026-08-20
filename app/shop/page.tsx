import { Thermometer, Sun, Droplets, Box, Utensils, Sparkles } from 'lucide-react'

const categories = [
  {
    icon: Box,
    name: 'Terrarium',
    description: 'Complete habitat systems',
    count: '12+ products',
  },
  {
    icon: Thermometer,
    name: 'Heating',
    description: 'Temperature control',
    count: '8+ products',
  },
  {
    icon: Sun,
    name: 'Lighting',
    description: 'UVB & LED systems',
    count: '15+ products',
  },
  {
    icon: Droplets,
    name: 'Substrate',
    description: 'Natural & safe bedding',
    count: '6+ products',
  },
  {
    icon: Utensils,
    name: 'Feeding',
    description: 'Bowls & supplements',
    count: '10+ products',
  },
  {
    icon: Sparkles,
    name: 'Decoration',
    description: 'Hides & enrichment',
    count: '20+ products',
  },
]

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium mb-6">
            HABITAT
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            BUILD THEIR
            <br />
            <span className="text-accent-sand">WORLD</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Everything you need to create the perfect environment for your companion.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.name}
                  className="group relative p-8 bg-background-secondary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
                >
                  <div className="mb-6">
                    <div className="inline-flex p-4 border border-text-primary/20 group-hover:border-accent-sand/50 transition-colors duration-500">
                      <Icon className="text-accent-sand" size={28} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                    {category.name}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <p className="text-xs text-accent-sand tracking-wider uppercase">
                    {category.count}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto mt-20 text-center p-12 border-2 border-text-primary/10 bg-background-secondary">
            <p className="text-text-secondary mb-6">
              Full product catalog coming soon. For now, we recommend visiting our physical location or contacting us for habitat setup assistance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
