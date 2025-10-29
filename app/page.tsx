import { Hero } from "@/components/hero"
import { HomeOverview } from "@/components/home-overview"
import { HomeStats } from "@/components/home-stats"
import { HomeCTA } from "@/components/home-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HomeOverview />
      <HomeStats />
      <HomeCTA />
    </main>
  )
}
