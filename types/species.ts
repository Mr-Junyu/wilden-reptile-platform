export interface Species {
  id: string
  slug: string
  name: string
  scientificName: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  size: string
  lifespan: string
  temperature: {
    min: number
    max: number
  }
  humidity: {
    min: number
    max: number
  }
  image: string
  accent: string
  tags: string[]
}
