import { NextResponse } from 'next/server';

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const message = String(body.message ?? '').trim();
  const honeypot = String(body.company ?? '').trim(); // bots fill this hidden field

  // Silently accept and drop bot submissions.
  if (honeypot) return NextResponse.json({ ok: true });

  const errors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name.';
  if (!isEmail(email) || email.length > 200) errors.email = 'Please enter a valid email address.';
  if (message.length < 10) errors.message = 'Please add a bit more detail (at least 10 characters).';
  if (message.length > 5000) errors.message = 'That message is too long.';
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Destination + transport stay server-only (never sent to the client).
  const to = process.env.CONTACT_EMAIL;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM ?? 'NateTheProgrammer <noreply@natetheprogrammer.com>';

  // Deliver via Resend when configured.
  if (apiKey && to) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Contact form — ${name}`,
          text: `New message from the site contact form.\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const detail = await res.text().catch(() => '');
        console.error('[contact] resend send failed', res.status, detail.slice(0, 500));
        // Capture so a failed send never loses the lead.
        console.log('[contact] submission (delivery failed, captured)', JSON.stringify({ name, email, message }));
        return NextResponse.json(
          { ok: false, error: 'Could not send right now. Please try again.' },
          { status: 502 },
        );
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error('[contact] resend error', err);
      console.log('[contact] submission (delivery error, captured)', JSON.stringify({ name, email, message }));
      return NextResponse.json(
        { ok: false, error: 'Could not send right now. Please try again.' },
        { status: 502 },
      );
    }
  }

  // No transport configured — capture server-side so nothing is lost.
  console.log(
    '[contact] submission (no transport)',
    JSON.stringify({ name, email, message, at: new Date().toISOString() }),
  );
  return NextResponse.json({ ok: true });
}
