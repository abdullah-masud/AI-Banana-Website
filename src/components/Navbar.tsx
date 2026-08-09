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

  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" aria-label="AI Banana home">
          <img src={siteConfig.assets.logo} alt="AI Banana" width="900" height="311" decoding="async" />
        </a>
        <nav aria-label="Primary navigation" className="navbar__desktop-nav">
          {siteConfig.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <Button href={siteConfig.links.growthSessionBooking} className="navbar__cta">{siteConfig.booking.primaryLabel}</Button>
        <button
          type="button"
          className="navbar__menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-navigation" aria-hidden={!open} className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {siteConfig.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <Button href={siteConfig.links.growthSessionBooking} className="mobile-menu__cta" onClick={() => setOpen(false)}>{siteConfig.booking.primaryLabel}</Button>
        </nav>
      </div>
    </header>
  )
}
