export type RouteMatch =
  | { kind: "home" }
  | { kind: "services" }
  | { kind: "results" }
  | { kind: "about" }
  | { kind: "contact" }
  | { kind: "blog" }
  | { kind: "admin" }
  | { kind: "industries" }
  | { kind: "post"; slug: string }
  | { kind: "industry"; slug: string }
  | { kind: "service"; slug: string };

// Shared by the server render and the client page loader so both pick the same page.
export function matchRoute(path: string): RouteMatch {
  if (path === "/" || path === "") return { kind: "home" };
  if (path === "/services") return { kind: "services" };
  if (path === "/results") return { kind: "results" };
  if (path === "/about") return { kind: "about" };
  if (path === "/contact") return { kind: "contact" };
  if (path === "/blog") return { kind: "blog" };
  if (path === "/admin") return { kind: "admin" };
  if (path === "/industries") return { kind: "industries" };
  if (path.startsWith("/blog/")) return { kind: "post", slug: path.slice("/blog/".length) };
  if (path.startsWith("/industries/")) return { kind: "industry", slug: path.slice("/industries/".length) };
  if (path.startsWith("/services/")) return { kind: "service", slug: path.slice("/services/".length) };
  return { kind: "home" };
}
