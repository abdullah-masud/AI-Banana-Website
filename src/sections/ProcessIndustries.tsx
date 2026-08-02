import { ArrowDown, ArrowRight } from 'lucide-react'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../data/siteConfig'

export function Process() {
  return (
    <section className="section process-section" id="how-it-works">
      <div className="container">
        <Reveal><SectionHeading eyebrow="How it works" title="From Busywork to Built-In." body="A clear, collaborative process that turns repetitive work into a dependable AI workforce." align="center" /></Reveal>
        <div className="process-grid">
          {siteConfig.process.map((item, index) => (
            <Reveal key={item.step} className="process-step" delay={index * 90}>
              <div className="process-step__marker"><span>{item.step}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {index < siteConfig.process.length - 1 && <><ArrowRight className="process-step__arrow process-step__arrow--desktop" /><ArrowDown className="process-step__arrow process-step__arrow--mobile" /></>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Industries() {
  return (
    <section className="section industries-section" id="industries">
      <div className="container industries-layout">
        <Reveal className="industries-copy">
          <SectionHeading theme="dark" eyebrow="Industries we serve" title="Built for Businesses That Never Stop." body="Wherever customer conversations and repetitive processes meet, an AI workforce can create room to grow." />
          <div className="industries-stat"><strong>Custom</strong><span>Every deployment is designed around the way your industry and business actually operate.</span></div>
        </Reveal>
        <div className="industries-grid">
          {siteConfig.industries.map((item, index) => (
            <Reveal key={item.title} className={`industry-card ${index === siteConfig.industries.length - 1 ? 'industry-card--wide' : ''}`} delay={Math.min(index * 55, 220)}>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
