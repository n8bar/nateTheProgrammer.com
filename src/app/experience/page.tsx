import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { roles } from '@/content/experience';
import { skills, education, certifications } from '@/content/site';
import Arrow from '@/components/Arrow';

// Linkify named projects (e.g. CryptoZing, TermiWeb) inside a highlight string,
// pointing each at its work subpage. Plain text passes through untouched.
function renderHighlight(text: string, links?: { label: string; href: string }[]) {
  if (!links || links.length === 0) return text;
  const byLabel = new Map(links.map((l) => [l.label, l.href] as const));
  const pattern = new RegExp(`(${links.map((l) => l.label).join('|')})`, 'g');
  return text.split(pattern).map((part, i) =>
    byLabel.has(part) ? (
      <Link key={i} href={byLabel.get(part)!}>
        {part}
      </Link>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Roles framed around responsibilities and results, plus skills, education, and certifications.',
};

export default function ExperiencePage() {
  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Experience</span>
        <h1>Sixteen-plus years building and running software people depend on.</h1>
        <p className="lead text-muted prose">
          Roles across municipal government, SaaS, and small business: what I owned, and what it
          did.
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
                    <li key={h}>{renderHighlight(h, r.links)}</li>
                  ))}
                </ul>
              ) : null}
              {r.related ? (
                <Link href={r.related.href} className="role-related">
                  {r.related.label} <Arrow />
                </Link>
              ) : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="stack">
        <h2 className="as-h1">Credentials</h2>
        <div className="credentials-grid">
          <div className="cred-block">
            <span className="skill-group-label">Skills</span>
            <ul className="cred-items">
              {skills.map((g) => (
                <li key={g.label}>
                  <span className="cred-primary">{g.label}</span>
                  <span className="cred-secondary text-muted">{g.items.join(' · ')}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="cred-col">
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
        </div>
      </section>
    </div>
  );
}
