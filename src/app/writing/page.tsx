import type { Metadata } from 'next';
import Link from 'next/link';
import { getPosts, type Post } from '@/content/writing';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Occasional writing by Nate Barlow.',
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function PostItem({ post }: { post: Post }) {
  return (
    <li className="post-item">
      <Link href={`/writing/${post.slug}`} className="post-link">
        <span className="post-date">{formatDate(post.date)}</span>
        <span className="post-title">{post.title}</span>
        <span className="post-excerpt text-muted">{post.excerpt}</span>
      </Link>
    </li>
  );
}

// Bitcoin explainers, ported from CryptoZing (canonical points back there).
const CRYPTO_SERIES = [
  'what-is-a-bitcoin-invoice',
  'bitcoin-pending-vs-confirmed-payments',
  'btcpay-server-alternatives',
];

// The two-part AI series, shown together under a period-framing heading (part 1 then part 2)
// so the wide-eyed 2023 tone reads as a time capsule, not as being behind.
const AI_SERIES = [
  'artificial-intelligence-can-write-programs',
  'artificial-intelligence-can-write-programs-continued',
];

export default function WritingPage() {
  const posts = getPosts();
  const pick = (slugs: string[]) =>
    slugs.map((slug) => posts.find((p) => p.slug === slug)).filter((p): p is Post => Boolean(p));

  const cryptoSeries = pick(CRYPTO_SERIES);
  const aiSeries = pick(AI_SERIES);
  const grouped = new Set([...CRYPTO_SERIES, ...AI_SERIES]);
  const rest = posts.filter((p) => !grouped.has(p.slug));

  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Writing</span>
        <h1>Occasional Writing.</h1>
      </section>

      {rest.length > 0 ? (
        <ol className="post-list">
          {rest.map((p) => (
            <PostItem key={p.slug} post={p} />
          ))}
        </ol>
      ) : null}

      {cryptoSeries.length > 0 ? (
        <section className="stack-sm">
          <h2>Bitcoin, explained</h2>
          <ol className="post-list">
            {cryptoSeries.map((p) => (
              <PostItem key={p.slug} post={p} />
            ))}
          </ol>
        </section>
      ) : null}

      {aiSeries.length > 0 ? (
        <section className="stack-sm">
          <h2>What AI looked like in 2023</h2>
          <ol className="post-list">
            {aiSeries.map((p) => (
              <PostItem key={p.slug} post={p} />
            ))}
          </ol>
        </section>
      ) : null}
    </div>
  );
}
