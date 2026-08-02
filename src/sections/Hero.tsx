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
          <h1>We Build Your<br /><span>AI Workforce™</span></h1>
          <p className="hero__description">{siteConfig.description}</p>
          <div className="hero__actions">
            <Button href={siteConfig.links.booking}>Book Your AI Strategy Session</Button>
            <a className="hero__video-link" href="#how-it-works"><span><Play size={13} fill="currentColor" /></span>See How It Works</a>
          </div>
          <div className="hero__proof" aria-label="Service qualities">
            {['Custom built', 'Human centred', 'Available 24/7'].map((item) => (
              <span key={item}><CheckCircle2 size={16} />{item}</span>
            ))}
          </div>
        </div>
        <div className="hero__visual" aria-label="AI Banana workforce officer">
          <div className="hero__image-shell">
            <img src={siteConfig.assets.heroCharacter} alt="AI Banana, a professional AI Workforce Officer" />
            <div className="hero__status-card hero__status-card--top"><span className="status-pulse" /><div><small>AI Workforce</small><strong>Online & ready</strong></div></div>
            <div className="hero__status-card hero__status-card--bottom"><CheckCircle2 /><div><small>Task status</small><strong>Already handled.</strong></div></div>
          </div>
          <p className="hero__signature">“I've already handled it.”</p>
        </div>
      </div>
      <div className="hero__bottom-fade" />
    </section>
  )
}
