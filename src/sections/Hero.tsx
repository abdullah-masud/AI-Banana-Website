import { CheckCircle2, Play } from 'lucide-react'
import { Button } from '../components/Button'
import { siteConfig } from '../data/siteConfig'

export function Hero() {
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
            <Button href={siteConfig.links.wixBooking}>{siteConfig.booking.primaryLabel}</Button>
            <Button href={siteConfig.links.aiReceptionistBooking} variant="secondary">{siteConfig.booking.secondaryLabel}</Button>
          </div>
          <a className="hero__video-link" href="#how-it-works"><span><Play size={13} fill="currentColor" /></span>See How It Works</a>
          <div className="hero__proof" aria-label="Service qualities">
            {['Custom built', 'Human centred', 'Available 24/7'].map((item) => (
              <span key={item}><CheckCircle2 size={16} />{item}</span>
            ))}
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__power-mode">
            <img src={siteConfig.assets.powerModeHero} alt="AI Banana in Power Mode with six AI capability arms deployed" width="578" height="718" fetchPriority="high" decoding="async" />
          </div>
        </div>
      </div>
      <div className="hero__bottom-fade" />
    </section>
  )
}
