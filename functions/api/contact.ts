/// <reference types="@cloudflare/workers-types" />
interface Env {
  TURNSTILE_SECRET_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_SENDER: string;
  EMAIL_RECEIVER: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    // 👇 Tell TypeScript what fields to expect in the incoming JSON
    const { token, name, email, message } = (await context.request.json()) as {
      token: string;
      name: string;
      email: string;
      message: string;
    };

    // ✅ Verify Turnstile
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: context.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const verifyData = (await verifyRes.json()) as { success: boolean };
    if (!verifyData.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Turnstile verification failed",
        }),
        { status: 400 }
      );
    }

    // ✅ Send email via Resend
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: context.env.EMAIL_SENDER,
        to: context.env.EMAIL_RECEIVER,
        subject: `New message from ${name}`,
        html: `
          <h2>New Contact Form Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!resendRes.ok) {
      const text = await resendRes.text();
      return new Response(JSON.stringify({ success: false, error: text }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Server error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "Server error" }),
      { status: 500 }
    );
  }
};
