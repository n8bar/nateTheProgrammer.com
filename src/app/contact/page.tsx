import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nate Barlow about roles or projects.',
};

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/n8bar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nate-barlow/' },
];

export default function ContactPage() {
  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Contact</span>
        <h1>Let&rsquo;s talk.</h1>
        <p className="lead text-muted prose">
          If you&rsquo;re hiring or have an interesting project in mind, tell me a bit about it and
          I&rsquo;ll get back to you.
        </p>
      </section>

      <div className="contact-layout">
        <ContactForm />
        <aside className="contact-aside">
          <span className="skill-group-label">Elsewhere</span>
          <ul className="contact-socials">
            {SOCIALS.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
