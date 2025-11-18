// app/api/landlord-portal/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Forward to Google Apps Script endpoint (reuse your contact form logic)
    const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_LANDLORD_URL;
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json({ error: "Google Apps Script URL not configured" }, { status: 500 });
    }
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to submit request" }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
