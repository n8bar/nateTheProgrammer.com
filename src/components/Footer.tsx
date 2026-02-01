import Link from 'next/link';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/n8bar' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner stack-lg">
        <div className="footer-cta card">
          <div className="stack-sm">
            <span className="eyebrow">Let us build</span>
            <h3>Need a builder who ships?</h3>
            <p className="text-muted">
              The best way to reach me is the contact form. Your message goes straight to my
              private inbox.
            </p>
          </div>
          <div className="footer-cta-actions">
            <Link className="button" href="/contact">
              Contact Nate
            </Link>
            <Link className="button button-ghost" href="/portfolio">
              View work
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-block">
            <h4>Contact</h4>
            <p className="text-muted">
              Use the contact form for new work, collaboration ideas, or introductions.
            </p>
            <Link className="footer-link" href="/contact">
              Go to contact form
            </Link>
          </div>
          <div className="footer-block">
            <h4>Social</h4>
            <ul className="footer-list">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a className="footer-link" href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-muted">More links on the way.</p>
          </div>
          <div className="footer-block">
            <h4>Legal</h4>
            <p className="text-muted">All rights reserved.</p>
            <p className="footer-legal">Copyright {year} NateTheProgrammer.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
