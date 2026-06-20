import type { Metadata } from 'next';
import { getCaseStudies } from '@/content/work';
import WorkCard from '@/components/WorkCard';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies: systems built, shipped, and run in production.',
};

export default function WorkPage() {
  const studies = getCaseStudies();

  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Work</span>
        <h1>Systems I&rsquo;ve built.</h1>
        <p className="lead text-muted prose">
          A few projects that show how I work end to end — the problem, what I built, and what it
          changed.
        </p>
      </section>

      <section className="work-grid">
        {studies.map((s) => (
          <WorkCard key={s.slug} study={s} />
        ))}
      </section>
    </div>
  );
}
