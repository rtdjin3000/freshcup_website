import { NextResponse } from "next/server";
import { Resend } from "resend";
import { restaurant } from "@/data/restaurant";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 40);
  const email = clean(body.email, 160);
  const date = clean(body.date, 40);
  const guests = clean(body.guests, 20);
  const pkg = clean(body.package, 80);
  const message = clean(body.message, 2000);

  if (!name || (!phone && !email) || !date) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please add your name, a phone or email, and a preferred date.",
      },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.PARTY_LEAD_TO || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!apiKey || to.length === 0) {
    console.error(
      "party-inquiry: missing env (RESEND_API_KEY and/or PARTY_LEAD_TO)."
    );
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn't send your request right now. Please call us at ${restaurant.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }

  const from = process.env.PARTY_LEAD_FROM || "Fresh Cup Website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone || "(not provided)"],
    ["Email", email || "(not provided)"],
    ["Preferred date", date],
    ["Guests", guests || "(not provided)"],
    ["Package", pkg || "(not specified)"],
    ["Message", message || "(none)"],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:560px;color:#1f2421">
      <h2 style="color:#0a5d27;margin:0 0 4px">🎂 New party inquiry</h2>
      <p style="color:#666;margin:0 0 16px;font-size:13px">Submitted from the Fresh Cup birthday parties page.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) => `<tr>
          <td style="padding:8px 12px;background:#e6f4ea;font-weight:600;color:#0a5d27;white-space:nowrap;vertical-align:top">${escapeHtml(
            k
          )}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${escapeHtml(
            v
          ).replace(/\n/g, "<br>")}</td>
        </tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email || undefined,
      subject: `🎂 Party inquiry: ${name} (${date})`,
      html,
      text,
    });

    if (error) {
      console.error("party-inquiry resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error: `We couldn't send your request. Please call us at ${restaurant.phoneDisplay}.`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("party-inquiry exception:", err);
    return NextResponse.json(
      {
        ok: false,
        error: `We couldn't send your request. Please call us at ${restaurant.phoneDisplay}.`,
      },
      { status: 500 }
    );
  }
}
