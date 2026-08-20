import { BookOpen, ArrowRight } from 'lucide-react'

const careTopics = [
  {
    title: 'Getting Started',
    description: 'Essential knowledge for new reptile owners',
    slug: 'getting-started',
  },
  {
    title: 'Feeding',
    description: 'Nutrition guidelines and feeding schedules',
    slug: 'feeding',
  },
  {
    title: 'Temperature',
    description: 'Maintaining proper thermal gradients',
    slug: 'temperature',
  },
  {
    title: 'Humidity',
    description: 'Creating the right moisture levels',
    slug: 'humidity',
  },
  {
    title: 'Habitat Setup',
    description: 'Building the perfect enclosure',
    slug: 'habitat-setup',
  },
  {
    title: 'Health',
    description: 'Recognizing and preventing common issues',
    slug: 'health',
  },
]

export default function CarePage() {
  return (
    <main className="min-h-screen bg-background-primary pt-24">
      {/* Header */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <BookOpen className="text-accent-sand" size={20} />
            <p className="text-accent-sand text-xs tracking-[0.4em] uppercase font-medium">
              KNOWLEDGE
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-text-primary leading-tight">
            LEARN TO
            <br />
            <span className="text-accent-sand">CARE</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Expert guidance to help you provide the best life for your companion.
          </p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 px-6 pb-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {careTopics.map((topic, index) => (
              <a
                key={topic.slug}
                href={`/care/${topic.slug}`}
                className="group relative p-8 bg-background-secondary border border-text-primary/10 hover:border-accent-sand/50 transition-all duration-500"
              >
                <div className="text-xs text-text-secondary/30 mb-4 tracking-wider">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-sand transition-colors duration-500">
                  {topic.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {topic.description}
                </p>

                <div className="flex items-center gap-2 text-accent-sand">
                  <span className="text-xs tracking-wider uppercase">Read</span>
                  <ArrowRight
                    size={14}
                    className="transform transition-transform duration-500 group-hover:translate-x-1"
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-3xl mx-auto text-center p-12 border-2 border-text-primary/10 bg-background-secondary">
            <p className="text-text-secondary">
              Detailed care guides coming soon. For immediate questions, please contact us directly.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
