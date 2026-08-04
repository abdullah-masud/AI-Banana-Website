import { CheckCircle2, Network, Quote, Sparkles } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../data/siteConfig'

export function Workforce() {
  return (
    <section className="section workforce-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Meet your AI workforce" title="An Entire Team. One Shared Mission." body="Not another chatbot. A coordinated group of AI Employees, each with a clear role in helping your business run better." align="center" /></Reveal>
        <Reveal className="workforce-lead">
          <div className="workforce-lead__icon"><Network /></div>
          <div><small>Chief of Staff</small><strong>AI Banana</strong></div>
          <span>Coordinates your AI workforce</span>
        </Reveal>
        <div className="workforce-connector" />
        <div className="workforce-grid">
          {siteConfig.workforce.map((member, index) => (
            <Reveal className="workforce-card" key={member.name} delay={Math.min(index * 70, 280)}>
              <div className={`workforce-card__avatar workforce-card__avatar--${member.accent}`}>
                <img src={member.image} alt={`${member.name}, ${member.role}`} width="320" height="320" loading="lazy" decoding="async" />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <span className="workforce-card__status"><i />Active</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container why-grid">
        <Reveal className="why-visual">
          <div className="why-visual__panel">
            <div className="why-visual__mark"><Sparkles /></div>
            <p>We don't install software.</p>
            <h3>We build customised AI Employees trained specifically for your business.</h3>
            <div className="why-visual__footer"><span><i />Strategy</span><span><i />Build</span><span><i />Support</span></div>
          </div>
          <div className="why-visual__outline" />
        </Reveal>
        <Reveal className="why-copy">
          <SectionHeading eyebrow="Why AI Banana" title="A Strategic Partner, Not Another Platform." body="The goal isn't to give you more technology. It's to give you more time, more consistency, and a team that quietly gets things done." />
          <div className="why-list">
            {siteConfig.whyUs.map((item) => <div key={item.title}><CheckCircle2 /><span><strong>{item.title}</strong><p>{item.description}</p></span></div>)}
          </div>
          <Button href={siteConfig.links.wixBooking} variant="secondary">Explore Your AI Workforce</Button>
        </Reveal>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="Client success" title="Results Worth Talking About." body="Real client stories will live here as AI Banana deployments launch and measurable results are approved for publication." align="center" /></Reveal>
        <Reveal className="testimonial-placeholder">
          <Quote aria-hidden="true" />
          <div><span>Client success stories coming soon</span><p>Reserved for verified feedback. No invented claims, no anonymous filler.</p></div>
          <div className="testimonial-placeholder__badges"><span>Verified</span><span>Measured</span><span>Client approved</span></div>
        </Reveal>
      </div>
    </section>
  )
}
