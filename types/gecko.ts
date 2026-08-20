export interface Gecko {
  id: string
  name: string
  species: string
  morph: string
  sex: 'Male' | 'Female'
  age: string
  weight: string
  price: number
  temperament: string[]
  healthStatus: 'Excellent' | 'Good' | 'Fair'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  image: string
  description: string
  available: boolean
}
