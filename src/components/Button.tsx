import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
}

export function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a className={`button button--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} strokeWidth={2} />
    </a>
  )
}
