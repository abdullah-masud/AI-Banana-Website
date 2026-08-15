import { CheckCircle2, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { siteConfig } from '../data/siteConfig'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()
  const [activeTaskCount, setActiveTaskCount] = useState(0)
  const [workforceOnline, setWorkforceOnline] = useState(false)

  useEffect(() => {
    const activation = siteConfig.heroActivation

    if (reducedMotion) {
      setActiveTaskCount(siteConfig.heroTasks.length)
      setWorkforceOnline(true)
      return
    }

    const timers: number[] = []
    activation.taskTimings.forEach((timing, index) => {
      timers.push(window.setTimeout(() => setActiveTaskCount(index + 1), timing))
    })
    timers.push(window.setTimeout(() => setWorkforceOnline(true), activation.completedAt))

    return () => timers.forEach(window.clearTimeout)
  }, [reducedMotion])

  return (
    <section className="hero" id="home">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />
      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__kicker"><span className="hero__kicker-dot" />{siteConfig.supportingStatement}</div>
          <h1><span className="hero__headline-line hero__headline-line--navy">We Build Your</span><br /><span className="hero__headline-line hero__headline-line--gold">AI Workforce™</span></h1>
          <p className="hero__description">{siteConfig.description}</p>
          <div className="hero__actions">
            <Button href={siteConfig.links.growthSessionBooking}>{siteConfig.booking.primaryLabel}</Button>
            <Button href={siteConfig.links.aiReceptionistBooking} variant="secondary">{siteConfig.booking.secondaryLabel}</Button>
          </div>
          <a className="hero__video-link" href="#how-it-works"><span><Play size={13} fill="currentColor" /></span>See How It Works</a>
          <div className="hero__proof" aria-label="Service qualities">
            {['Custom built', 'Human centred', 'Available 24/7'].map((item) => (
              <span key={item}><CheckCircle2 size={16} />{item}</span>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="AI Banana workforce officer">
          <div className="hero__image-shell">
            <img src={siteConfig.assets.heroCharacter} alt="AI Banana, a professional AI Workforce Officer" width="820" height="1230" fetchPriority="high" decoding="async" />
            <div className={`hero__status-card hero__status-card--top ${workforceOnline ? 'hero__status-card--online' : ''}`} aria-live="polite">
              <span className="status-pulse" />
              <div><small>AI Workforce</small><strong>{workforceOnline ? siteConfig.heroActivation.completedLabel : siteConfig.heroActivation.activatingLabel}</strong></div>
            </div>
            <div className="hero__status-card hero__status-card--bottom"><CheckCircle2 /><div><small>Task status</small><strong>Already handled.</strong></div></div>
            <div className="hero__task-sequence" aria-label="AI task automation sequence">
              {siteConfig.heroTasks.map((task, index) => (
                <span key={task} className={index < activeTaskCount ? 'hero__task--active' : ''} aria-hidden={index >= activeTaskCount}>
                  <i><CheckCircle2 /></i>{task}
                </span>
              ))}
            </div>
          </div>
          <p className="hero__signature">“I've already handled it.”</p>
        </div>
      </div>
      <div className="hero__bottom-fade" />
    </section>
  )
}
