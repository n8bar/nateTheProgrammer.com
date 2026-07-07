import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Nate Barlow about roles or projects.',
};

export default function ContactPage() {
  return (
    <div className="container stack-lg">
      <section className="stack-sm">
        <span className="eyebrow">Contact</span>
        <h1>Let&rsquo;s build something.</h1>
        <p className="lead text-muted prose">
          If you&rsquo;re hiring or have a project in mind, tell me a bit about it.
        </p>
      </section>

      <ContactForm />
    </div>
  );
}
