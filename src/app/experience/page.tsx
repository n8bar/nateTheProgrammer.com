import type { Metadata } from 'next';
import Link from 'next/link';
import { roles } from '@/content/experience';
import { skills, education, certifications } from '@/content/site';

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'IT engineering roles framed around responsibilities and results, plus skills, education, and certifications.',
};

export default function ExperiencePage() {
  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Experience</span>
        <h1>Sixteen years building and running real systems.</h1>
        <p className="lead text-muted prose">
          Roles across municipal government, SaaS, and small business — framed by what I owned and
          what it did, not just the dates.
        </p>
      </section>

      <section>
        <ol className="role-list">
          {roles.map((r) => (
            <li key={`${r.company}-${r.period}`} className="role">
              <div className="role-head">
                <h2 className="role-title">
                  {r.title} <span className="role-company">· {r.company}</span>
                </h2>
                <span className="role-period">{r.period}</span>
              </div>
              {r.location ? <p className="role-location">{r.location}</p> : null}
              <p className="role-summary text-muted">{r.summary}</p>
              {r.highlights && r.highlights.length > 0 ? (
                <ul className="role-highlights">
                  {r.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
              {r.related ? (
                <Link href={r.related.href} className="role-related">
                  {r.related.label} →
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="stack">
        <h2>Credentials</h2>
        <div className="credentials-grid">
          <div className="cred-block">
            <span className="skill-group-label">Skills</span>
            <div className="tech-list">
              {skills.flatMap((g) => g.items).map((s) => (
                <span key={s} className="tech-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="cred-block">
            <span className="skill-group-label">Education</span>
            <ul className="cred-items">
              {education.map((e) => (
                <li key={e.school}>
                  <span className="cred-primary">{e.credential}</span>
                  <span className="cred-secondary text-muted">
                    {e.school} · {e.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cred-block">
            <span className="skill-group-label">Certifications</span>
            <ul className="cred-items">
              {certifications.map((c) => (
                <li key={c.name}>
                  <span className="cred-primary">{c.name}</span>
                  <span className="cred-secondary text-muted">
                    {c.issuer} · {c.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
