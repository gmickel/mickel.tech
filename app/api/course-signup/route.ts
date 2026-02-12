import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    // Send notification to Gordon
    await resend.emails.send({
      from: 'Agentic SDLC Course <course@course.mickel.tech>',
      to: 'gordon@mickel.tech',
      subject: `New course signup: ${email}`,
      text: `New early-access signup for the Agentic SDLC course:\n\n${email}\n\nTimestamp: ${new Date().toISOString()}`,
    });

    // Send confirmation to subscriber
    await resend.emails.send({
      from: 'Gordon Mickel <course@course.mickel.tech>',
      to: email,
      subject: "You're on the list — Agentic SDLC Course",
      text: [
        'Thanks for signing up for early access to the Agentic SDLC course.',
        '',
        "I'll reach out when it's ready with details on format, content and pricing.",
        '',
        'In the meantime, you can read more about the methodology:',
        'https://mickel.tech/log/merchants-of-complexity-why-ai-finally-delivers-what-agile-promised',
        '',
        '— Gordon',
        'https://mickel.tech',
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    console.error('Course signup error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
