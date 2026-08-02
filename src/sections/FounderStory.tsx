import { Check, Quote } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../data/siteConfig'

export function FounderStory() {
  const story = siteConfig.founderStory

  return (
    <section className="section founder-story" aria-labelledby="founder-story-title">
      <div className="container founder-story__grid">
        <Reveal className="founder-story__heading">
          <p className="eyebrow"><span />{story.eyebrow}</p>
          <h2 id="founder-story-title">{story.title}</h2>
          <div className="founder-story__principles" aria-label="Founder principles">
            {story.principles.map((principle) => <span key={principle}><Check aria-hidden="true" />{principle}</span>)}
          </div>
        </Reveal>

        <Reveal className="founder-story__card" delay={100}>
          <Quote className="founder-story__quote" aria-hidden="true" />
          <p className="founder-story__body">{story.body}</p>
          <p className="founder-story__closing">{story.closing}</p>
          <div className="founder-story__signature">
            <span aria-hidden="true">SD</span>
            <div><strong>{story.founder}</strong><small>{story.role}</small></div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
