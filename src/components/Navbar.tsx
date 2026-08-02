import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { siteConfig } from '../data/siteConfig'
import { useScrollLock } from '../hooks/useScrollLock'
import { Button } from './Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useScrollLock(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="AI Banana home">
          <img src={siteConfig.assets.logo} alt="AI Banana" />
        </a>
        <nav aria-label="Primary navigation" className="navbar__desktop-nav">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <Button href={siteConfig.links.booking} className="navbar__cta">Book a Strategy Session</Button>
        <button
          type="button"
          className="navbar__menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <Button href={siteConfig.links.booking} className="mobile-menu__cta">Book a Strategy Session</Button>
        </nav>
      </div>
    </header>
  )
}
