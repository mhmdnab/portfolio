import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message, token } = await req.json();

  // Verify Turnstile
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
  if (!verifyData.success)
    return NextResponse.json({ success: false }, { status: 400 });

  // Send with Resend
  const sendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Portfolio <info@mhmdnab.dev>",
      to: "mhmdnab004@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <h3>Message from your portfolio:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    }),
  });

  const data = await sendRes.json();
  console.log("Resend response:", data);

  return NextResponse.json({ success: true });
}
