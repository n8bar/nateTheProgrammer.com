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

  // Destination stays server-only (never sent to the client).
  const to = process.env.CONTACT_EMAIL;

  // Delivery: when an SMTP transport is configured we will send here. Until then,
  // capture the submission server-side so nothing is lost (visible in the server log).
  // TODO: send via configured transport (SMTP/provider) to `to`.
  console.log(
    '[contact] submission',
    JSON.stringify({
      destination: to ? 'configured' : 'MISSING_CONTACT_EMAIL',
      name,
      email,
      message,
      at: new Date().toISOString(),
    }),
  );

  return NextResponse.json({ ok: true });
}
