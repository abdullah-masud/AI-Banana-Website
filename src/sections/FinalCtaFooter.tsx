import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Music2, Phone } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'
import { openLeadConnectorChat } from '../utils/openLeadConnectorChat'

export function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta__glow" />
      <div className="container">
        <Reveal className="final-cta__content">
          <p className="eyebrow eyebrow--light"><span />Your next team member is AI</p>
          <h2>Ready to Build Your<br /><em>AI Workforce?</em></h2>
          <p>Let's find the repetitive work holding your business back—and design the team that takes it from here.</p>
          <div className="final-cta__actions">
            <Button href={siteConfig.links.growthSessionBooking} variant="light">{siteConfig.booking.primaryLabel}</Button>
            <Button href={siteConfig.links.aiReceptionistBooking} variant="secondary" className="button--chat-trigger" onClick={openLeadConnectorChat}>{siteConfig.booking.secondaryLabel}</Button>
          </div>
          <small>No obligation. Just a focused conversation about what's possible.</small>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#home" aria-label="AI Banana home"><img src={siteConfig.assets.logo} alt="AI Banana" width="900" height="311" loading="lazy" decoding="async" /></a>
          <p>{siteConfig.tagline}</p>
          <span>{siteConfig.supportingStatement}</span>
        </div>
        <div className="footer__column">
          <h3>Navigate</h3>
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer__column">
          <h3>Contact</h3>
          <a href={siteConfig.contact.phoneHref} aria-label={`Call AI Banana at ${siteConfig.contact.phone}`}><Phone />{siteConfig.contact.phone}</a>
          <a href={siteConfig.links.email}><Mail />{siteConfig.contact.email}</a>
          <span><MapPin />{siteConfig.contact.location}</span>
        </div>
        <div className="footer__column">
          <h3>Connect</h3>
          <a href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="AI Banana on Facebook"><Facebook />Facebook<ArrowUpRight className="footer__external" /></a>
          <a href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="AI Banana on Instagram"><Instagram />Instagram<ArrowUpRight className="footer__external" /></a>
          <a href={siteConfig.links.tiktok} target="_blank" rel="noopener noreferrer" aria-label="AI Banana on TikTok"><Music2 />TikTok<ArrowUpRight className="footer__external" /></a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} AI Banana. All rights reserved.</span>
        {(siteConfig.links.privacy || siteConfig.links.terms) && (
          <div>
            {siteConfig.links.privacy && <a href={siteConfig.links.privacy}>Privacy</a>}
            {siteConfig.links.terms && <a href={siteConfig.links.terms}>Terms</a>}
          </div>
        )}
      </div>
    </footer>
  )
}
