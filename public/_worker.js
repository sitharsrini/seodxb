// Every old URL returns 410 Gone so search engines drop it quickly.
const noindex = { "X-Robots-Tag": "noindex, nofollow" };

function withNoindex(res, status = res.status) {
  const headers = new Headers(res.headers);
  headers.set("X-Robots-Tag", noindex["X-Robots-Tag"]);
  return new Response(res.body, { status, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/" || url.pathname === "/index.html") {
      return withNoindex(await env.ASSETS.fetch(request));
    }

    if (/\.\w+$/.test(url.pathname)) {
      const res = await env.ASSETS.fetch(request);
      if (res.status !== 404) return withNoindex(res);
    }

    return new Response("Gone", { status: 410, headers: { ...noindex, "Content-Type": "text/plain" } });
  },
};
