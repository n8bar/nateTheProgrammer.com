import Link from 'next/link';
import type { Metadata } from 'next';
import { getCaseStudies } from '@/content/work';

export const metadata: Metadata = {
  title: 'Work — NateTheProgrammer',
  description: 'Selected case studies: systems built, shipped, and run in production.',
};

export default function WorkPage() {
  const studies = getCaseStudies();

  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Work</span>
        <h1>Systems I&rsquo;ve built, shipped, and run.</h1>
        <p className="lead text-muted prose">
          A few projects that show how I work end to end — the problem, what I built, and what it
          changed.
        </p>
      </section>

      <section className="work-grid">
        {studies.map((s) => (
          <article key={s.slug} className="work-card">
            <Link href={`/work/${s.slug}`} className="work-card-link">
              {s.image ? (
                <div className="work-card-media">
                  <img src={s.image.src} alt={s.image.alt} loading="lazy" />
                </div>
              ) : null}
              <div className="work-card-body">
                <p className="work-card-meta">
                  {s.context} · {s.status}
                </p>
                <h2 className="work-card-title">{s.title}</h2>
                <p className="work-card-tagline text-muted">{s.tagline}</p>
                <div className="tech-list">
                  {s.tech.slice(0, 4).map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="work-card-cta">Read case study →</span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
