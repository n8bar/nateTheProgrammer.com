export default function Home() {
  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Nate The Programmer</span>
        <h1>Blueprint Night — Global Shell Preview</h1>
        <p className="prose text-muted">
          Design tokens and layout primitives are live. This is a minimal shell to verify
          typography, spacing, contrast, and grid behavior before we build the full layout.
        </p>
      </section>

      <section className="grid grid-2">
        <article className="card stack-sm">
          <span className="eyebrow">Tokens</span>
          <h3>Typography + Spacing</h3>
          <p className="text-muted">
            Saira Semi Condensed for primary text, JetBrains Mono for metadata, and a compact
            spacing scale for rhythm.
          </p>
        </article>
        <article className="card stack-sm">
          <span className="eyebrow">Layout</span>
          <h3>Grid + Containers</h3>
          <p className="text-muted">
            Responsive container width, grid utilities, and baseline card styling aligned to the
            Blueprint Night theme.
          </p>
        </article>
      </section>
    </div>
  );
}
