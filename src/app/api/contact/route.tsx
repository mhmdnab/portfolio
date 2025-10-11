import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    // 🧠 Step 1: Verify Turnstile
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: token,
        }),
      }
    );

    const verifyData = await verifyRes.json();
    console.log("✅ Turnstile verification:", verifyData);

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, error: "Verification failed" },
        { status: 400 }
      );
    }

    // 📧 Step 2: Send email via Resend
    const { data, error } = await resend.emails.send({
      from: `Portfolio <${process.env.EMAIL_SENDER}>`,
      to: process.env.EMAIL_RECEIVER!,
      subject: `New message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json({ success: false, error: "Email send failed" });
    }

    console.log("📨 Email sent:", data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ success: false, error: "Server error" });
  }
}
