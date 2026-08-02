export function SectionHeading({ eyebrow, title, body, align = 'left', theme = 'light' }: {
  eyebrow: string
  title: string
  body?: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}) {
  return (
    <div className={`section-heading section-heading--${align} section-heading--${theme}`}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-heading__body">{body}</p>}
    </div>
  )
}
