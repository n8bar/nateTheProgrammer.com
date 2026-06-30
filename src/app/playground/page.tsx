import type { Metadata } from 'next';
import { readdir, readFile } from 'fs/promises';
import path from 'path';
import Arrow from '@/components/Arrow';

export const metadata: Metadata = {
  title: 'Playground',
  description: 'Experiments in progress; not core proof, just things in the works.',
};

// Reflect local playground/* clones live (they are gitignored and added ad hoc).
export const dynamic = 'force-dynamic';

type PlaygroundEntry = {
  slug: string;
  title: string;
  description?: string;
  url?: string;
  repo?: string;
  tech?: string[];
};

async function loadEntries(): Promise<PlaygroundEntry[]> {
  const root = path.join(process.cwd(), 'playground');
  const entries: PlaygroundEntry[] = [];
  let dirs;
  try {
    dirs = await readdir(root, { withFileTypes: true });
  } catch {
    return entries; // playground/ doesn't exist yet
  }
  for (const d of dirs) {
    if (!d.isDirectory()) continue;
    try {
      const raw = await readFile(path.join(root, d.name, 'playground.json'), 'utf8');
      const meta = JSON.parse(raw) as Omit<PlaygroundEntry, 'slug'>;
      if (meta && meta.title) entries.push({ slug: d.name, ...meta });
    } catch {
      // skip dirs without a valid playground.json
    }
  }
  return entries.sort((a, b) => a.title.localeCompare(b.title));
}

export default async function PlaygroundPage() {
  const entries = await loadEntries();

  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Playground</span>
        <h1>Experiments in progress.</h1>
        <p className="lead text-muted prose">
          Side experiments and works in progress; interesting, but not the core proof. The real
          work lives under Work.
        </p>
        <p className="playground-disclaimer" role="note">
          ⚠ Playground: experiments in progress; please don&rsquo;t enter sensitive data.
        </p>
      </section>

      {entries.length > 0 ? (
        <section className="work-grid">
          {entries.map((e) => {
            const href = e.url ?? e.repo;
            const body = (
              <div className="work-card-body">
                <p className="work-card-title">{e.title}</p>
                {e.description ? (
                  <p className="work-card-tagline text-muted">{e.description}</p>
                ) : null}
                {e.tech && e.tech.length > 0 ? (
                  <div className="tech-list">
                    {e.tech.slice(0, 4).map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
                {href ? (
                  <span className="work-card-cta">
                    Open <Arrow dir="up-right" />
                  </span>
                ) : null}
              </div>
            );
            return (
              <article key={e.slug} className="work-card">
                {href ? (
                  <a className="work-card-link" href={href} target="_blank" rel="noopener noreferrer">
                    {body}
                  </a>
                ) : (
                  <div className="work-card-link">{body}</div>
                )}
              </article>
            );
          })}
        </section>
      ) : (
        <section className="playground-empty">
          <p className="text-muted">
            Nothing parked here yet; experiments will show up as I publish them.
          </p>
        </section>
      )}
    </div>
  );
}
