/**
 * Runs on every request, including static HTML.
 * [[path]] only runs when no static file exists, so www → apex must live here.
 */
export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const host = url.hostname.toLowerCase();

  if (host === "www.seodxb.com" || host.startsWith("www.")) {
    url.hostname = "seodxb.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  const path = url.pathname.replace(/\/+$/, "") || "/";

  if (path === "/sitemap-index.xml" || path === "/sitemap-0.xml") {
    return Response.redirect("https://seodxb.com/sitemap.xml", 301);
  }
  if (path === "/thank-you") {
    return Response.redirect("https://seodxb.com/contact", 301);
  }
  if (path === "/seo-packages") {
    return Response.redirect("https://seodxb.com/pricing", 301);
  }
  if (path === "/keyword-index.csv") {
    return new Response("Not found", { status: 404, headers: { "X-Robots-Tag": "noindex, nofollow" } });
  }

  return context.next();
};
