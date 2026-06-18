import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/content/writing';
import Arrow from '@/components/Arrow';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: 'Writing' };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      publishedTime: new Date(`${post.date}T00:00:00Z`).toISOString(),
    },
  };
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: 'Nate Barlow', url: 'https://natetheprogrammer.com' },
    url: `https://natetheprogrammer.com/writing/${post.slug}`,
  };

  return (
    <article className="container stack-lg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <div>
        <Link href="/writing" className="back-link">
          <Arrow dir="left" /> All writing
        </Link>
      </div>

      <header className="stack-sm">
        <span className="post-date">{formatDate(post.date)}</span>
        <h1>{post.title}</h1>
      </header>

      <div className="prose">
        {post.body.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
          if (block.type === 'code')
            return (
              <pre key={i}>
                <code>{block.text}</code>
              </pre>
            );
          return <p key={i}>{block.text}</p>;
        })}
      </div>
    </article>
  );
}
