import { mkdirSync, readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist/public");
const serverDir = path.join(root, "dist/server");

type Route = { path: string; file: string; title: string; description: string; ogType?: string; image?: string; jsonLd?: object[]; hidden?: boolean };
type Post = { slug: string; title: string; description: string; category: string; date: string; updated: string; answer: string; keywords: string[]; faqs: { q: string; a: string }[] };
type Service = { id: string; name: string; short: string };
type Industry = { slug: string; name: string; answer: string };

const mod = (await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href)) as {
  render: (p: string) => string;
  ROUTES: Route[];
  SITE_URL: string;
  AUTHOR: { name: string; url: string };
  CONTACT: { email: string; phone: string; city: string };
  POSTS: Post[];
  postPath: (p: Post) => string;
  postText: (p: Post) => string;
  SERVICES: Service[];
  INDUSTRIES: Industry[];
  industryPath: (i: Industry) => string;
  SERVICE_PAGES: { slug: string; title: string }[];
  KEYWORD_TARGETS: Record<string, { main: string | null; secondary: string[] }>;
  KEYWORD_METRICS: Record<string, { volume: number; kd: number; cpc: number }>;
  SEMRUSH_SNAPSHOT: { source: string; date: string };
};
const { render, ROUTES, SITE_URL, AUTHOR, CONTACT, POSTS, postPath, postText, SERVICES, INDUSTRIES, industryPath, SERVICE_PAGES, KEYWORD_TARGETS, KEYWORD_METRICS, SEMRUSH_SNAPSHOT } = mod;
const template = readFileSync(path.join(out, "index.html"), "utf8");

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const ld = (o: object) => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`;
const abs = (p: string) => SITE_URL + (p === "/" ? "/" : p);

const h1s: Record<string, string> = {};
for (const r of ROUTES) {
  const url = abs(r.path);
  const image = SITE_URL + (r.image ?? "/og/default.jpg");
  const html = template
    .replace(/<title>.*?<\/title>/, () => `<title>${esc(r.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, (_, a) => `${a}${esc(r.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace(/(<meta property="og:type" content=")[^"]*"/, (_, a) => `${a}${r.ogType ?? "website"}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, (_, a) => `${a}${esc(r.title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, (_, a) => `${a}${esc(r.description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, (_, a) => `${a}${url}"`)
    .replace(/(<meta property="og:image" content=")[^"]*"/, (_, a) => `${a}${image}"`)
    .replace(/(<meta name="twitter:image" content=")[^"]*"/, (_, a) => `${a}${image}"`)
    .replace("</head>", () => `${r.hidden ? '<meta name="robots" content="noindex, nofollow" />\n    ' : ""}${(r.jsonLd ?? []).map(ld).join("\n    ")}\n  </head>`)
    .replace('<div id="root"></div>', () => `<div id="root">${render(r.path)}</div>`);
  const file = path.join(out, r.file);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, html);
  h1s[r.path] = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || "").replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').trim();
}

// Sitemap with real dates for posts.
const today = new Date().toISOString().slice(0, 10);
const lastmod = (r: Route) => POSTS.find((p) => postPath(p) === r.path)?.updated ?? today;
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  ROUTES.filter((r) => !r.hidden).map((r) => `  <url><loc>${abs(r.path)}</loc><lastmod>${lastmod(r)}</lastmod></url>`).join("\n") +
  `\n</urlset>\n`;
writeFileSync(path.join(out, "sitemap.xml"), sitemap);

// RSS feed of blog posts.
const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
const rfc822 = (iso: string) => new Date(iso + "T08:00:00Z").toUTCString();
const rss =
  `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n<channel>\n` +
  `<title>SEODXB Blog</title>\n<link>${SITE_URL}/blog</link>\n<description>Practical marketing guides for businesses in Dubai and the UAE.</description>\n<language>en</language>\n` +
  `<atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>\n` +
  sorted
    .map(
      (p) =>
        `<item>\n<title>${esc(p.title)}</title>\n<link>${abs(postPath(p))}</link>\n<guid isPermaLink="true">${abs(postPath(p))}</guid>\n` +
        `<pubDate>${rfc822(p.date)}</pubDate>\n<category>${esc(p.category)}</category>\n<description>${esc(p.description)}</description>\n</item>`,
    )
    .join("\n") +
  `\n</channel>\n</rss>\n`;
writeFileSync(path.join(out, "feed.xml"), rss);

// llms.txt: a short, AI-readable map of the site. llms-full.txt: the full blog text.
const pageRoutes = ROUTES.filter((r) => !r.hidden && !r.path.startsWith("/blog") && !r.path.startsWith("/industries/") && !r.path.startsWith("/services/"));
const SERVICE_URL: Record<string, string> = { strategy: "/services/marketing-strategy", search: "/services/seo-aeo-geo", ads: "/services/performance-advertising", "web-content-social": "/services/websites-content-social" };
const llms =
  `# SEODXB\n\n> Marketing consultancy in Dubai, United Arab Emirates. Services: marketing strategy, SEO / AEO / GEO (search and AI search visibility), performance advertising (Google, Meta, LinkedIn, TikTok), websites, content and social media. Powered by Listi. Contact: ${CONTACT.email}, ${CONTACT.phone}, ${CONTACT.city}.\n\n` +
  `Articles are written by ${AUTHOR.name}. Every article opens with a short direct answer, followed by key takeaways, the full guide and an FAQ.\n\n` +
  `## Pages\n\n${pageRoutes.map((r) => `- [${r.title.replace(/ \| .*$/, "")}](${abs(r.path)}): ${r.description}`).join("\n")}\n\n` +
  `## Services\n\n${SERVICES.map((s) => `- [${s.name}](${SITE_URL}${SERVICE_URL[s.id] ?? "/services"}): ${s.short}`).join("\n")}\n\n` +
  `## Industries\n\n${INDUSTRIES.map((i) => `- [${i.name}](${abs(industryPath(i))}): ${i.answer}`).join("\n")}\n\n` +
  `## Blog\n\n${sorted.map((p) => `- [${p.title}](${abs(postPath(p))}): ${p.description}`).join("\n")}\n\n` +
  `## Optional\n\n- [Full article text](${SITE_URL}/llms-full.txt)\n- [RSS feed](${SITE_URL}/feed.xml)\n- [Sitemap](${SITE_URL}/sitemap.xml)\n`;
writeFileSync(path.join(out, "llms.txt"), llms);

const full =
  llms +
  `\n\n---\n\n# Full articles\n\n` +
  sorted
    .map(
      (p) =>
        `# ${p.title}\n\nURL: ${abs(postPath(p))}\nAuthor: ${AUTHOR.name}, SEODXB\nPublished: ${p.date}\nUpdated: ${p.updated}\nCategory: ${p.category}\nKeywords: ${p.keywords.join(", ")}\n\n${postText(p)}\n`,
    )
    .join("\n\n---\n\n");
writeFileSync(path.join(out, "llms-full.txt"), full);

// Private SEO keyword report for the admin panel. Served only through /api/seo-report.
const CORE_NAMES: Record<string, string> = { "/": "Homepage", "/services": "Services (overview)", "/results": "Results", "/about": "About", "/contact": "Contact", "/blog": "Blog (index)", "/industries": "Industries (index)" };
const seoRows = ROUTES.filter((r) => !r.hidden).map((r) => {
  const post = POSTS.find((p) => postPath(p) === r.path);
  const ind = INDUSTRIES.find((i) => industryPath(i) === r.path);
  const svc = SERVICE_PAGES.find((sp) => `/services/${sp.slug}` === r.path);
  const target = post ? { main: post.keywords[0].toLowerCase(), secondary: post.keywords.slice(1) } : KEYWORD_TARGETS[r.path] ?? { main: null, secondary: [] };
  const m = target.main ? KEYWORD_METRICS[target.main] : undefined;
  const section = post || r.path === "/blog" ? "Blog" : svc ? "Service pages" : ind || r.path === "/industries" ? "Industry pages" : "Core pages";
  return {
    kind: post || r.path === "/blog" ? "blog" : "page",
    section,
    name: post ? post.title : ind ? ind.name : svc ? svc.title.replace(/ \| SEODXB$/, "") : CORE_NAMES[r.path] ?? r.path,
    path: r.path,
    url: abs(r.path),
    main: target.main,
    volume: target.main ? (m ? m.volume : null) : null,
    kd: m ? m.kd : null,
    cpc: m ? m.cpc : null,
    secondary: target.secondary,
    title: r.title,
    description: r.description,
    h1: h1s[r.path] ?? "",
    category: post ? post.category : "",
    published: post ? post.date : "",
  };
});
mkdirSync(path.join(out, "_private"), { recursive: true });
writeFileSync(path.join(out, "_private/seo-report.json"), JSON.stringify({ generated: new Date().toISOString(), metrics: SEMRUSH_SNAPSHOT, rows: seoRows }));

// The worker only serves known pages; everything else is 410 Gone.
const workerPath = path.join(out, "_worker.js");
const worker = readFileSync(workerPath, "utf8");
const pagesLine = `const PAGES = new Set(${JSON.stringify(ROUTES.map((r) => r.path))});`;
if (!/^const PAGES = new Set\(.*\);$/m.test(worker)) throw new Error("PAGES line not found in _worker.js");
writeFileSync(workerPath, worker.replace(/^const PAGES = new Set\(.*\);$/m, () => pagesLine));

for (const r of ROUTES) {
  const img = path.join(out, r.image ?? "/og/default.jpg");
  if (!existsSync(img)) console.warn(`Missing social image: ${img}`);
}

rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} pages, sitemap.xml, feed.xml, llms.txt, llms-full.txt`);
