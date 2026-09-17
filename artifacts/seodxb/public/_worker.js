export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle all API routes via Functions
    if (pathname.startsWith("/api/")) {
      return env.ASSETS.fetch(request);
    }

    // Check if it's a static file (has an extension)
    if (/\.\w+$/.test(pathname)) {
      return env.ASSETS.fetch(request);
    }

    // For all other routes (SPA routes), try to serve the asset first
    // If not found, serve index.html to allow React Router to handle it
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", url).toString(), request));
    }
    return response;
  },
};
