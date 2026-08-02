import { ArrowUpRight, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'

export function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <div className="final-cta__glow" />
      <div className="container">
        <Reveal className="final-cta__content">
          <p className="eyebrow eyebrow--light"><span />Your next team member is AI</p>
          <h2>Ready to Build Your<br /><em>AI Workforce?</em></h2>
          <p>Let's find the repetitive work holding your business back—and design the team that takes it from here.</p>
          <Button href={siteConfig.links.booking} variant="light">Schedule My Strategy Session</Button>
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
          <a href="#home" aria-label="AI Banana home"><img src={siteConfig.assets.logo} alt="AI Banana" /></a>
          <p>{siteConfig.tagline}</p>
          <span>{siteConfig.supportingStatement}</span>
        </div>
        <div className="footer__column">
          <h3>Navigate</h3>
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <div className="footer__column">
          <h3>Contact</h3>
          <a href="#contact"><Phone />{siteConfig.contact.phone}</a>
          <a href={siteConfig.links.email}><Mail />{siteConfig.contact.email}</a>
          <span><MapPin />{siteConfig.contact.location}</span>
        </div>
        <div className="footer__column">
          <h3>Connect</h3>
          <a href={siteConfig.links.linkedin}><Linkedin />LinkedIn<ArrowUpRight className="footer__external" /></a>
          <a href={siteConfig.links.facebook}><Facebook />Facebook<ArrowUpRight className="footer__external" /></a>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} AI Banana. All rights reserved.</span>
        <div><a href={siteConfig.links.privacy}>Privacy</a><a href={siteConfig.links.terms}>Terms</a></div>
      </div>
    </footer>
  )
}
