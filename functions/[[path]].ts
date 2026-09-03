import { mapRedirect, isKept, normalizePath, shouldRedirect } from "./_lib/redirects";

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  if (url.hostname === "www.seodxb.com") {
    url.hostname = "seodxb.com";
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "") || "/";
    return Response.redirect(url.toString(), 301);
  }

  const path = normalizePath(url.pathname);

  if (path === "/sitemap-index.xml") {
    return Response.redirect(new URL("/sitemap.xml", url.origin).toString(), 301);
  }

  if (path.startsWith("/api/")) return context.next();
  if (/\.[a-z0-9]+$/i.test(path)) return context.next();
  if (isKept(path)) return context.next();
  if (!shouldRedirect(path)) return context.next();

  const dest = mapRedirect(path);
  if (dest === path) return context.next();

  const target = new URL(dest, url.origin);
  target.search = "";
  return Response.redirect(target.toString(), 301);
};
