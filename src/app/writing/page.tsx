import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '@/content/writing';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Occasional writing, experiments and a few milestones along the way.',
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function WritingPage() {
  const posts = getPosts();

  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Writing</span>
        <h1>Notes &amp; milestones.</h1>
        <p className="lead text-muted prose">
          Occasional writing, a couple of experiments, and a few markers along the way.
        </p>
      </section>

      <ol className="post-list">
        {posts.map((p) => (
          <li key={p.slug} className="post-item">
            <Link href={`/writing/${p.slug}`} className="post-link">
              <span className="post-date">{formatDate(p.date)}</span>
              <span className="post-title">{p.title}</span>
              <span className="post-excerpt text-muted">{p.excerpt}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
