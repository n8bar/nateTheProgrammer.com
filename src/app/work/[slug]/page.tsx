import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/content/work';
import Arrow from '@/components/Arrow';

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: 'Work' };
  return { title: study.title, description: study.tagline };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <article className="container stack-lg case-study">
      <div>
        <Link href="/work" className="back-link">
          <Arrow dir="left" /> All work
        </Link>
      </div>

      <header className="stack-sm">
        <span className="eyebrow">{study.context}</span>
        <h1>{study.title}</h1>
        <p className="lead text-muted prose">{study.tagline}</p>

        <dl className="case-meta">
          <div>
            <dt>Status</dt>
            <dd>{study.status}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{study.tech.join(', ')}</dd>
          </div>
        </dl>

        {study.links && study.links.length > 0 ? (
          <div className="case-links">
            {study.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="case-link"
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {l.label} <Arrow dir="up-right" />
              </a>
            ))}
          </div>
        ) : null}
      </header>

      {study.image ? (
        <figure className="case-figure">
          <img src={study.image.src} alt={study.image.alt} loading="lazy" />
          <figcaption>{study.image.alt}</figcaption>
        </figure>
      ) : null}

      <section className="prose stack">
        <div>
          <h2>The problem</h2>
          <p>{study.problem}</p>
        </div>
        <div>
          <h2>What I built</h2>
          <p>{study.built}</p>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>{study.outcome}</p>
        </div>
      </section>

      <div className="card case-cta">
        <span>Want the longer version, or something like it built for you?</span>
        <Link href="/contact" className="footer-cta-button">
          Contact Nate
        </Link>
      </div>
    </article>
  );
}
