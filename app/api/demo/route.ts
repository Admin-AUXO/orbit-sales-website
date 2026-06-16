import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, role, persona, company } = body;

  if (!email || !name || !role || !persona) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: Connect to CRM or Calendly webhook
  console.log("[demo]", {
    name,
    email,
    role,
    persona,
    company,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
