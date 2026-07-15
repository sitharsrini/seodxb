export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Health check: reports whether the email key is configured, without
    // exposing it. Lets us diagnose the form without sending an email.
    if (url.pathname === "/api/contact" && request.method === "GET") {
      return new Response(
        JSON.stringify({ ok: true, keyConfigured: Boolean(env.RESEND_API_KEY) }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    // Handle contact form API
    if (url.pathname === "/api/contact" && request.method === "POST") {
      const headers = { "Content-Type": "application/json" };
      try {
        const { from_name, reply_to, phone, company_url, message } =
          await request.json();

        if (!from_name || !reply_to || !message) {
          return new Response(
            JSON.stringify({ error: "Missing required fields" }),
            { status: 400, headers }
          );
        }

        if (!env.RESEND_API_KEY) {
          return new Response(
            JSON.stringify({ error: "Email not configured", detail: "RESEND_API_KEY missing in Cloudflare Pages environment variables" }),
            { status: 500, headers }
          );
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
            reply_to,
            subject: `New enquiry from ${from_name}`,
            html: `
              <div style="font-family:sans-serif;max-width:600px">
                <h2>New contact form submission</h2>
                <table style="width:100%">
                  <tr><td style="color:#666;width:140px">Name</td><td><strong>${from_name}</strong></td></tr>
                  <tr><td style="color:#666">Email</td><td><a href="mailto:${reply_to}">${reply_to}</a></td></tr>
                  <tr><td style="color:#666">Phone</td><td>${phone || "-"}</td></tr>
                  <tr><td style="color:#666">Company URL</td><td>${company_url || "-"}</td></tr>
                </table>
                <hr style="margin:24px 0"/>
                <p style="white-space:pre-wrap">${message}</p>
              </div>`,
          }),
        });

        if (!res.ok) {
          const detail = (await res.text()).slice(0, 500);
          return new Response(
            JSON.stringify({ error: "Failed to send email", resendStatus: res.status, detail }),
            { status: 502, headers }
          );
        }

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers,
        });
      } catch {
        return new Response(
          JSON.stringify({ error: "Internal server error" }),
          { status: 500, headers }
        );
      }
    }

    // Serve all other requests as static assets
    return env.ASSETS.fetch(request);
  },
};
