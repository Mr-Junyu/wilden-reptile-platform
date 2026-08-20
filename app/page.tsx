import { Hero } from '@/components/hero/Hero'
import { SpeciesSection } from '@/components/sections/SpeciesSection'
import { MatchSection } from '@/components/sections/MatchSection'
import { IndividualSection } from '@/components/sections/IndividualSection'
import { HabitatSection } from '@/components/sections/HabitatSection'
import { CareSection } from '@/components/sections/CareSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <SpeciesSection />
      <MatchSection />
      <IndividualSection />
      <HabitatSection />
      <CareSection />
      <FinalCTA />
    </main>
  )
}
