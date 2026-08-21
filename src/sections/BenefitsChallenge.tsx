import { Check, PhoneCall } from 'lucide-react'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../data/siteConfig'
import { openAiReceptionistWidget } from '../utils/openAiReceptionistWidget'

export function Benefits() {
  return (
    <section className="section benefits-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Built for outcomes" title="More Time. More Opportunity. Less Overhead." body="Technology should create measurable breathing room—not add another dashboard to manage." align="center" /></Reveal>
        <div className="benefits-grid">
          {siteConfig.benefits.map((item, index) => (
            <Reveal key={item.label} className="benefit-card" delay={Math.min(index * 50, 220)}>
              <Icon name={item.icon} />
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Challenge() {
  return (
    <section className="section challenge-section" id="demo-phone">
      <div className="container challenge-grid">
        <Reveal className="challenge-phone-wrap">
          <div className="phone-mockup">
            <div className="phone-mockup__speaker" />
            <div className="phone-mockup__screen">
              <span className="phone-mockup__label">Live demonstration</span>
              <div className="phone-mockup__avatar"><PhoneCall /></div>
              <h3>AI Receptionist</h3>
              <p>Ready to take your call</p>
              <div className="voice-wave" aria-hidden="true">{Array.from({ length: 17 }, (_, i) => <i key={i} />)}</div>
              <button type="button" className="phone-mockup__call" aria-label="Call the AI Receptionist" onClick={openAiReceptionistWidget}><PhoneCall fill="currentColor" /></button>
              <small>{siteConfig.contact.demoPhone}</small>
            </div>
          </div>
          <div className="challenge-phone-wrap__ring" />
        </Reveal>
        <Reveal className="challenge-copy">
          <p className="eyebrow challenge-copy__eyebrow"><span />Live AI Receptionist Challenge</p>
          <h2>Think Your Customers<br />Are Difficult?</h2>
          <p className="challenge-copy__lead">Call our AI Receptionist and put her to the test. Ask complicated questions. Interrupt her. Change your mind. Listen to how professionally she handles the conversation.</p>
          <div className="challenge-prompts">
            {siteConfig.challengePrompts.map((prompt) => <span key={prompt}><Check size={14} />{prompt}</span>)}
          </div>
          <Button href="" onClick={openAiReceptionistWidget}>Call the AI Receptionist</Button>
          <p className="challenge-copy__note">No sales representative will answer. You'll speak directly with the live AI demonstration.</p>
        </Reveal>
      </div>
    </section>
  )
}
