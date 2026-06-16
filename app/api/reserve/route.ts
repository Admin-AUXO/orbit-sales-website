import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name } = body;

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  // TODO: Connect to email CRM (Resend, Mailchimp, HubSpot) or database
  console.log("[reserve]", { email, name, timestamp: new Date().toISOString() });

  return NextResponse.json({ success: true });
}
