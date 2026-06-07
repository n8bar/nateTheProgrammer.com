import Link from 'next/link';

const SITE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/experience', label: 'Experience' },
  { href: '/writing', label: 'Writing' },
  { href: '/playground', label: 'Playground' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/n8bar', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/nate-barlow/', label: 'LinkedIn' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-cta">
          <span className="eyebrow">Get in touch</span>
          <h2 className="footer-cta-title">Let&rsquo;s build something worth shipping.</h2>
          <p className="footer-cta-text text-muted">
            Have a role, a project, or just a good idea? I&rsquo;d like to hear about it.
          </p>
          {/* Contact address stays server-only (UX guardrails) — link to the form, never print the email. */}
          <Link href="/contact" className="footer-cta-button">
            Contact Nate
          </Link>
        </div>

        <nav className="footer-columns" aria-label="Footer">
          <div className="footer-col">
            <span className="footer-col-title">Site</span>
            <ul className="footer-link-list">
              {SITE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-title">Elsewhere</span>
            <ul className="footer-link-list">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div className="container footer-base">
        <Link href="/" className="footer-brand">
          <span className="brand-mark" aria-hidden>
            ◎
          </span>
          <span>NateTheProgrammer</span>
        </Link>
        <p className="footer-legal text-muted">© {year} NateTheProgrammer. All rights reserved.</p>
        <a href="#content" className="footer-backtop">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
