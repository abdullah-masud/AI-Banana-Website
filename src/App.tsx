import { Navbar } from './components/Navbar'
import { LeadConnectorChat } from './components/LeadConnectorChat'
import { Benefits, Challenge } from './sections/BenefitsChallenge'
import { FinalCta, Footer } from './sections/FinalCtaFooter'
import { FounderStory } from './sections/FounderStory'
import { Hero } from './sections/Hero'
import { Industries, Process } from './sections/ProcessIndustries'
import { Problem, Solution } from './sections/ProblemSolution'
import { Testimonials, WhyUs, Workforce } from './sections/WorkforceWhy'

export function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Challenge />
        <Process />
        <Industries />
        <Workforce />
        <WhyUs />
        <FounderStory />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
      <LeadConnectorChat />
    </>
  )
}
