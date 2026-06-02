interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const headers = { "Content-Type": "application/json" };

  try {
    const { from_name, reply_to, phone, company_url, message } =
      await request.json<{
        from_name: string;
        reply_to: string;
        phone?: string;
        company_url?: string;
        message: string;
      }>();

    if (!from_name || !reply_to || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers,
      });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SEODXB Contact <noreply@seodxb.com>",
        to: ["hi@Listi.ae"],
        reply_to: reply_to,
        subject: `New enquiry from ${from_name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px">
            <h2 style="margin-bottom:24px">New contact form submission</h2>
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">${from_name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0;font-weight:600"><a href="mailto:${reply_to}">${reply_to}</a></td></tr>
              <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0;font-weight:600">${phone || "—"}</td></tr>
              <tr><td style="padding:8px 0;color:#666">Company URL</td><td style="padding:8px 0;font-weight:600">${company_url || "—"}</td></tr>
            </table>
            <hr style="margin:24px 0;border:none;border-top:1px solid #eee"/>
            <p style="white-space:pre-wrap;line-height:1.6">${message}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return new Response(JSON.stringify({ error: "Failed to send email" }), {
        status: 502,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
};
