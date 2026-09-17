interface Env {
  LEADS_KV?: KVNamespace;
}

interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company_url?: string;
  message: string;
  timestamp: number;
  date: string;
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const headers = { "Content-Type": "application/json" };

  try {
    // Check authorization - simple password in query param for now
    const url = new URL(request.url);
    const auth = url.searchParams.get("auth");

    if (!auth || auth !== (process.env.ADMIN_PASSWORD || "admin123")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers,
      });
    }

    if (!env.LEADS_KV) {
      return new Response(JSON.stringify({ leads: [], message: "KV store not configured" }), {
        status: 200,
        headers,
      });
    }

    // Get all leads from KV
    const list = await env.LEADS_KV.list({ prefix: "lead_" });
    const leads: Lead[] = [];

    for (const item of list.keys) {
      const data = await env.LEADS_KV.get(item.name);
      if (data) {
        leads.push(JSON.parse(data));
      }
    }

    // Sort by timestamp descending (newest first)
    leads.sort((a, b) => b.timestamp - a.timestamp);

    return new Response(JSON.stringify({ leads }), { status: 200, headers });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
};

export const onRequestDelete: PagesFunction<Env> = async ({ request, env }) => {
  const headers = { "Content-Type": "application/json" };

  try {
    // Check authorization
    const url = new URL(request.url);
    const auth = url.searchParams.get("auth");
    const leadId = url.searchParams.get("id");

    if (!auth || auth !== (process.env.ADMIN_PASSWORD || "admin123")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers,
      });
    }

    if (!leadId || !env.LEADS_KV) {
      return new Response(JSON.stringify({ error: "Invalid request" }), {
        status: 400,
        headers,
      });
    }

    await env.LEADS_KV.delete(leadId);
    return new Response(JSON.stringify({ success: true }), { status: 200, headers });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
};
