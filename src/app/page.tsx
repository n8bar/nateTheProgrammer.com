import Link from 'next/link';
import { hero, skills, testimonials } from '@/content/site';
import Arrow from '@/components/Arrow';

export default function Home() {
  const quotes = testimonials.slice(0, 2);

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nate Barlow',
    alternateName: 'NateTheProgrammer',
    url: 'https://natetheprogrammer.com',
    jobTitle: 'Software Engineer',
    sameAs: ['https://github.com/n8bar', 'https://www.linkedin.com/in/nate-barlow/'],
  };

  return (
    <div className="container stack-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <section className="home-hero stack-sm">
        <span className="eyebrow">{hero.eyebrow}</span>
        <h1>{hero.headline}</h1>
        <p className="hero-proof">{hero.proof}</p>
        <p className="lead text-muted prose">{hero.subhead}</p>
        <p className="hero-tagline">{hero.tagline}</p>
        <div className="hero-cta">
          <Link href="/work" className="footer-cta-button">
            See the work
          </Link>
          <Link href="/contact" className="hero-cta-secondary">
            Get in touch <Arrow />
          </Link>
        </div>
      </section>

      <section className="stack">
        <h2>What I work with</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.label} className="skill-group">
              <span className="skill-group-label">{group.label}</span>
              <ul className="skill-items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>What people say</h2>
        <div className="quote-grid">
          {quotes.map((q) => (
            <blockquote key={q.name} className="quote-card">
              <p>“{q.quote}”</p>
              <cite>
                {q.name} - {q.title}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  );
}
