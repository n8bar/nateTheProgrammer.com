import Link from 'next/link';
import { getCaseStudies } from '@/content/work';
import { hero, skills, testimonials } from '@/content/site';

export default function Home() {
  const featured = getCaseStudies().slice(0, 3);
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
        <p className="lead text-muted prose">{hero.subhead}</p>
        <div className="hero-cta">
          <Link href="/work" className="footer-cta-button">
            See the work
          </Link>
          <Link href="/contact" className="hero-cta-secondary">
            Get in touch →
          </Link>
        </div>
      </section>

      <section className="stack">
        <div className="section-head">
          <h2>Selected work</h2>
          <Link href="/work" className="section-link">
            All work →
          </Link>
        </div>
        <ol className="featured-list">
          {featured.map((s) => (
            <li key={s.slug}>
              <Link href={`/work/${s.slug}`} className="featured-item">
                <span className="featured-text">
                  <span className="featured-title">{s.title}</span>
                  <span className="featured-proof text-muted">{s.tagline}</span>
                </span>
                <span className="featured-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
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
                {q.name} — {q.title}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="home-cta card">
        <div className="stack-sm">
          <h2>Let’s talk.</h2>
          <p className="text-muted">
            If you’re hiring or have an interesting project in mind, I’d like to hear about it.
          </p>
        </div>
        <Link href="/contact" className="footer-cta-button">
          Contact Nate
        </Link>
      </section>
    </div>
  );
}
