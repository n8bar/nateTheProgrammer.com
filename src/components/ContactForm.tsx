'use client';

import { useState } from 'react';

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('submitting');
    setErrors({});
    setFormError('');

    const fd = new FormData(form);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
      company: fd.get('company'), // honeypot
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        errors?: FieldErrors;
        error?: string;
      };

      if (res.ok && json.ok) {
        setStatus('success');
        form.reset();
        return;
      }

      // Validation or server error — keep the user's input, surface the problem.
      if (json.errors) setErrors(json.errors);
      setFormError(json.error ?? 'Something went wrong. Please try again.');
      setStatus('error');
    } catch {
      setFormError('Network error. Please try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="form-success" role="status">
        <h2>Thanks, message sent.</h2>
        <p className="text-muted">I read these myself.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      {formError ? (
        <p className="form-alert" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby="name-msg"
        />
        <p className="field-msg" id="name-msg">
          {errors.name ?? ' '}
        </p>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={errors.email ? true : undefined}
          aria-describedby="email-msg"
        />
        <p className="field-msg" id="email-msg">
          {errors.email ?? ' '}
        </p>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby="message-msg"
        />
        <p className="field-msg" id="message-msg">
          {errors.message ?? ' '}
        </p>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="footer-cta-button" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
