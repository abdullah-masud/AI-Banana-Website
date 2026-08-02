import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
  onClick?: () => void
}

export function Button({ href, children, variant = 'primary', className = '', onClick }: ButtonProps) {
  if (!href) {
    return (
      <span className={`button button--${variant} button--disabled ${className}`} aria-disabled="true">
        <span>{children}</span>
        <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
      </span>
    )
  }

  return (
    <a className={`button button--${variant} ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  )
}
