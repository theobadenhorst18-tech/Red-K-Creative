import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = "redkcreative@gmail.com";
const sender = "admin@compassmedia.co.za";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
  company?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function htmlEscape(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildEmailHtml(payload: Required<Omit<ContactPayload, "company">>) {
  const rows = [
    ["Name", payload.name],
    ["Email", payload.email],
    ["Phone", payload.phone || "Not provided"],
    ["Project type", payload.projectType || "Not specified"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #080a0c; line-height: 1.5;">
      <h1 style="margin: 0 0 20px; color: #ef191f;">New Red K Creative enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top: 1px solid #ddd; padding: 10px 12px 10px 0; font-weight: 700;">${htmlEscape(label)}</td>
                <td style="border-top: 1px solid #ddd; padding: 10px 0;">${htmlEscape(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h2 style="margin: 28px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap;">${htmlEscape(payload.message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  const appPassword = process.env.GMAIL_APP_PASSWORD;

  if (!appPassword) {
    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (clean(payload.company)) {
    return NextResponse.json({ ok: true });
  }

  const contact = {
    name: clean(payload.name),
    email: clean(payload.email),
    phone: clean(payload.phone),
    projectType: clean(payload.projectType),
    message: clean(payload.message),
  };

  if (!contact.name || !contact.email || !contact.message) {
    return NextResponse.json(
      { error: "Please add your name, email and message." },
      { status: 400 }
    );
  }

  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: sender,
      pass: appPassword,
    },
  });

  try {
    await transport.sendMail({
      from: `Red K Creative <${sender}>`,
      to: recipient,
      replyTo: contact.email,
      subject: `New enquiry from ${contact.name}`,
      html: buildEmailHtml(contact),
    });
  } catch {
    return NextResponse.json(
      { error: "Could not send your message. Please email hello@redkcreative.co.za." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
