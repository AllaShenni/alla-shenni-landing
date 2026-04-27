import { Nav } from "@/components/sections/nav"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Hero } from "@/components/sections/hero"
import { Problem } from "@/components/sections/problem"
import { Solution } from "@/components/sections/solution"
import { Services } from "@/components/sections/services"
import { Plan } from "@/components/sections/plan"
import { SocialProof } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Plan />
      <SocialProof />
      <Faq />
      <FinalCta />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
