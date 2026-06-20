import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const RECIPIENT = "marketing@neuro-stellar.com";
const FROM = "Neurostellar Careers <careers@neuro-stellar.com>";

function isNonEmptyString(value: FormDataEntryValue | null): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (isNonEmptyString(form.get("company"))) {
    return NextResponse.json({ ok: true });
  }

  const fullName = form.get("fullName");
  const email = form.get("email");
  const role = form.get("role");
  const link = form.get("link");
  const message = form.get("message");
  const resume = form.get("resume");

  if (
    !isNonEmptyString(fullName) ||
    !isNonEmptyString(email) ||
    !EMAIL_PATTERN.test(email.trim()) ||
    !isNonEmptyString(role) ||
    !isNonEmptyString(message) ||
    !(resume instanceof File) ||
    resume.type !== "application/pdf" ||
    resume.size === 0 ||
    resume.size > MAX_RESUME_BYTES
  ) {
    return NextResponse.json(
      { ok: false, error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    const buffer = Buffer.from(await resume.arrayBuffer());
    const linkLine = isNonEmptyString(link) ? link.trim() : "Not provided";

    await resend.emails.send({
      from: FROM,
      to: RECIPIENT,
      replyTo: email.trim(),
      subject: `Careers application — ${role.trim()} — ${fullName.trim()}`,
      html: [
        `<p><strong>Name:</strong> ${escapeHtml(fullName.trim())}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>`,
        `<p><strong>Role:</strong> ${escapeHtml(role.trim())}</p>`,
        `<p><strong>Link:</strong> ${escapeHtml(linkLine)}</p>`,
        `<p><strong>Cover note:</strong></p>`,
        `<p>${escapeHtml(message.trim()).replace(/\n/g, "<br />")}</p>`,
      ].join(""),
      attachments: [{ filename: resume.name || "resume.pdf", content: buffer }],
    });
  }

  return NextResponse.json({ ok: true });
}

export function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed." },
    { status: 405, headers: { Allow: "POST" } },
  );
}
