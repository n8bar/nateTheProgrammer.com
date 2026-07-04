import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPost } from '@/content/writing';
import Arrow from '@/components/Arrow';

// Republished posts are copied verbatim from the source, which uses inline
// bold/italic/links. The content model keeps text as plain strings carrying a
// tiny markup convention — **bold**, *italic*, [label](url) — parsed here.
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const external = /^https?:\/\//.test(href);
      return (
        <a
          key={i}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

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
    ...(post.canonical ? { alternates: { canonical: post.canonical } } : {}),
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
        {post.canonical ? (
          <p className="post-origin text-muted">
            Originally published on{' '}
            <a href={post.canonical} target="_blank" rel="noopener noreferrer">
              CryptoZing
            </a>
            .
          </p>
        ) : null}
      </header>

      <div className="prose">
        {post.body.map((block, i) => {
          if (block.type === 'h2') return <h2 key={i}>{renderInline(block.text)}</h2>;
          if (block.type === 'h3') return <h3 key={i}>{renderInline(block.text)}</h3>;
          if (block.type === 'ul')
            return (
              <ul key={i}>
                {block.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          if (block.type === 'table')
            return (
              <div key={i} className="table-scroll">
                <table className="prose-table">
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th key={j}>{renderInline(h)}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{renderInline(cell)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          if (block.type === 'code')
            return (
              <pre key={i}>
                <code>{block.text}</code>
              </pre>
            );
          return <p key={i}>{renderInline(block.text)}</p>;
        })}
      </div>
    </article>
  );
}
