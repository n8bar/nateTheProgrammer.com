import Link from 'next/link';
import type { CaseStudy } from '@/content/work';
import Arrow from '@/components/Arrow';

export default function WorkCard({ study }: { study: CaseStudy }) {
  return (
    <article className="work-card">
      <Link href={`/work/${study.slug}`} className="work-card-link">
        {study.image ? (
          <div
            className="work-card-media"
            style={{ aspectRatio: `${study.image.width} / ${study.image.height}` }}
          >
            <img
              src={study.image.src}
              alt={study.image.alt}
              width={study.image.width}
              height={study.image.height}
              loading="lazy"
            />
          </div>
        ) : null}
        <div className="work-card-body">
          <p className="work-card-meta">
            {study.context} · {study.status}
          </p>
          <p className="work-card-title">{study.title}</p>
          <p className="work-card-tagline text-muted">{study.tagline}</p>
          <div className="tech-list">
            {study.tech.slice(0, 4).map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
          <span className="work-card-cta">
            Read case study <Arrow />
          </span>
        </div>
      </Link>
    </article>
  );
}
