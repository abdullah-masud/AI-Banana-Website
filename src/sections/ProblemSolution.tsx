import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { siteConfig } from '../data/siteConfig'

export function Problem() {
  return (
    <section className="section problem-section" id="problem">
      <div className="container">
        <Reveal><SectionHeading eyebrow="The problem" title="You're Doing Work AI Can Do Better." body="The work isn't difficult—it is relentless. Every repeated task takes your attention away from the decisions only you can make." /></Reveal>
        <div className="problem-grid">
          {siteConfig.problems.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 55, 250)} className={`problem-item ${index === siteConfig.problems.length - 1 ? 'problem-item--wide' : ''}`}>
              <div className="icon-box"><Icon name={item.icon} /></div>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Solution() {
  return (
    <section className="section solution-section" id="ai-workforce">
      <div className="solution-section__orb" />
      <div className="container">
        <Reveal><SectionHeading theme="dark" eyebrow="The solution" title="Meet Your AI Employees" body="Purpose-built digital team members that handle the routine with consistency, care, and speed—working together around your business." /></Reveal>
        <div className="employee-grid">
          {siteConfig.employees.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index * 45, 240)} className="employee-card">
              <div className="employee-card__icon"><Icon name={item.icon} /></div>
              <span className="employee-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="employee-card__line" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
