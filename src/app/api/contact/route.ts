import { NextRequest, NextResponse } from "next/server";

const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Contact API: Sending body to Apps Script:", body);
    if (!APPS_SCRIPT_URL) {
      return NextResponse.json({ error: "Apps Script URL not configured" }, { status: 500 });
    }
    const response = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log("Contact API: Apps Script status:", response.status);
    const text = await response.text();
    console.log("Contact API: Apps Script response text:", text);
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseErr) {
      console.error("Contact API: Failed to parse Apps Script response as JSON", parseErr);
      return NextResponse.json({ error: "Apps Script did not return valid JSON", raw: text }, { status: 502 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Contact API: Error submitting form", error);
    return NextResponse.json({ error: "Failed to submit form", details: error?.toString?.() }, { status: 500 });
  }
}
