import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getClientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  entry.count += 1;
  return entry.count > 3;
}

const MAX_BODY_BYTES = 64_000; // generous cap for a contact message, far under Vercel's limit

export async function POST(request: NextRequest) {
  // Reject oversized payloads before parsing (cheap memory/abuse guard for the
  // normal browser path, which always sends Content-Length).
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ success: false, error: "Message too large." }, { status: 413 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ success: false, error: "Too many messages. Please try again in a minute." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const turnstileToken = typeof body.turnstileToken === "string" ? body.turnstileToken : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  if (website) return NextResponse.json({ success: true });
  if (name.length < 2 || name.length > 120 || !EMAIL_PATTERN.test(email) || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ success: false, error: "Please check the details in your message." }, { status: 400 });
  }
  if (!turnstileToken) {
    return NextResponse.json({ success: false, error: "Please complete the security check." }, { status: 400 });
  }
  if (!process.env.TURNSTILE_SECRET_KEY) {
    return NextResponse.json({ success: false, error: "The contact form is not configured yet. Please email us directly." }, { status: 503 });
  }

  try {
    const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: turnstileToken, remoteip: clientIp }),
    });
    const result = (await verification.json()) as { success?: boolean };
    if (result.success !== true) {
      return NextResponse.json({ success: false, error: "The security check could not be verified. Please try again." }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ success: false, error: "The security check is temporarily unavailable. Please try again." }, { status: 503 });
  }

  const { SMTP_HOST = "smtp.zoho.eu", SMTP_PORT = "587", SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO } = process.env;
  if (!SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return NextResponse.json({ success: false, error: "Email delivery is not configured yet. Please email us directly." }, { status: 503 });
  }

  try {
    const transporter = nodemailer.createTransport({ host: SMTP_HOST, port: Number(SMTP_PORT), secure: Number(SMTP_PORT) === 465, auth: { user: SMTP_USER, pass: SMTP_PASS } });
    await transporter.sendMail({ from: SMTP_FROM, to: SMTP_TO, replyTo: email, subject: `New contact form message from ${name}`, text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}` });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "We could not send your message right now. Please try again shortly." }, { status: 503 });
  }
}
