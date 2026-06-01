# SEODXB — SEO Audit + 100-Blog Keyword Plan (2026)

> Prepared for seodxb.com. Search-volume figures are informed **estimates** for the
> UAE market (Google AE) unless marked "global". Validate exact numbers in Ahrefs /
> Semrush / Google Keyword Planner before locking your editorial calendar. Difficulty
> is a relative 1–100 estimate of how hard the SERP is for a new/mid-authority domain.

---

## PART 1 — SEO AUDIT

### What is already strong
- **200 prerendered landing pages** (100 Dubai + 100 UAE) with static HTML, so AI crawlers (GPTBot, PerplexityBot, ClaudeBot) and Googlebot read full content without JS.
- **Schema coverage**: Organization/ProfessionalService, WebSite + SearchAction, Service, FAQPage, BreadcrumbList, plus Person (author) and Article on blog posts.
- **AEO/GEO signals**: FAQ blocks, speakable schema, `llms.txt`, semantic intros.
- **Sitemap** (228 URLs) and **robots.txt** in place; AI crawlers allowed.
- **Author E-E-A-T**: real author (Srinivasan R) with bio + LinkedIn `sameAs`.
- **Working contact path**: Resend-backed form + WhatsApp + click-to-call on landing pages.

### Gaps to close (priority order)

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 1 | **Thin blog (only 6 posts)** | No topical authority; landing pages have nothing to internally link from | Ship the 100-post plan below in clusters |
| 2 | **No internal linking strategy** | 200 landing pages are mostly orphaned from each other | Add "related services / nearby locations" link blocks + link blog posts → money pages |
| 3 | **Blog posts lack dates/freshness signals** | Posts dated 2023; looks stale to Google + LLMs | Re-date, add "Last updated", keep a changelog line |
| 4 | **No case studies / proof** | Weakest E-E-A-T axis (Experience). Hard to rank YMYL-adjacent finance/health terms | Publish 3–5 anonymised result studies with real metrics |
| 5 | **Doorway-page risk on 200 near-duplicate landing pages** | Google can demote programmatic pages with thin unique value | Ensure each page has genuinely unique intro + local proof; consider noindexing the weakest 20–30% until they earn links |
| 6 | **No HowTo / comparison schema on guides** | Misses rich results + AI citation surface | Add HowTo schema to tutorials, comparison tables to "vs" posts |
| 7 | **Missing `og:image` per-page variety** | All pages share one OG image | Generate per-cluster OG images (optional, low priority) |
| 8 | **No XML news/blog sitemap split** | Slower blog discovery at scale | Split sitemap: `sitemap-pages.xml` + `sitemap-blog.xml` once blog grows |
| 9 | **`email` is hi@Listi.ae (off-brand)** | Trust/brand consistency | Move to hi@seodxb.com |
| 10 | **No measurable conversion tracking referenced** | Can't prove ROI to clients (and to yourself) | GA4 + GSC + call/WhatsApp event tracking |

### Quick technical checklist
- [ ] Confirm every prerendered page returns 200 + correct canonical (spot-check 10).
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms on mobile (run PageSpeed on home + 3 landing pages).
- [ ] One H1 per page; logical H2/H3 outline.
- [ ] Image `alt` text on all hero/feature images.
- [ ] hreflang if you ever add Arabic URLs (`/ar/...`).
- [ ] 404 page returns real 404 status (not 200).
- [ ] Submit sitemap in Google Search Console + Bing Webmaster Tools.

---

## PART 2 — KEYWORD STRATEGY (how these 100 were chosen)

The blog exists to do three jobs the landing pages can't:
1. **Capture informational + question queries** ("how much does SEO cost in Dubai", "what is AEO") that feed AI Overviews and ChatGPT/Perplexity citations.
2. **Build topical authority** around SEO/AEO/GEO so the money pages rank higher.
3. **Internally link** down-funnel to the 200 landing pages.

Funnel stages: **TOFU** (awareness/definition), **MOFU** (consideration/how-to), **BOFU** (commercial/buying intent). BOFU posts convert; TOFU posts win AI citations and links. Aim ~40% TOFU, ~40% MOFU, ~20% BOFU.

**Each post must internally link to at least 2 landing pages** (e.g. a "real estate SEO" post links to `/seo-for-real-estate-dubai` and `/seo-for-real-estate-uae`).

---

## PART 3 — THE 100 BLOG TOPICS (with keyword research)

Columns: **Title** · **Primary keyword** · **Intent/Stage** · **Est. UAE vol/mo** · **Diff** · **Links to**

### Cluster A — AEO / GEO / AI Search (your differentiator) — 14 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 1 | What Is Answer Engine Optimisation (AEO)? A 2026 Guide | answer engine optimisation | TOFU | 300–600 (global) | 35 | /aeo, /aeo-agency-uae |
| 2 | What Is Generative Engine Optimisation (GEO)? | generative engine optimisation | TOFU | 400–800 (global) | 38 | /geo, /geo-agency-uae |
| 3 | How to Get Your Business Cited by ChatGPT | how to rank in chatgpt | MOFU | 500–1k (global) | 42 | /ai-seo-agency-dubai |
| 4 | How to Rank in Google AI Overviews | google ai overviews seo | MOFU | 800–2k (global) | 45 | /aeo |
| 5 | How to Get Cited by Perplexity AI | perplexity ai seo | MOFU | 200–500 | 33 | /ai-seo-uae |
| 6 | AEO vs SEO: What's the Difference? | aeo vs seo | TOFU | 150–400 | 30 | /aeo, /on-page-seo |
| 7 | GEO vs SEO: Which One Does Your Business Need? | geo vs seo | TOFU | 100–300 | 28 | /geo |
| 8 | Schema Markup for AI Search: A Practical Guide | schema markup for ai | MOFU | 200–400 | 35 | /schema-markup-dubai |
| 9 | How LLMs Choose Which Brands to Recommend | how llms recommend brands | TOFU | low/emerging | 25 | /ai-seo-agency-dubai |
| 10 | The Complete Guide to llms.txt | llms.txt | TOFU | 300–700 (global) | 30 | /geo |
| 11 | Voice Search Optimisation in the UAE (Arabic + English) | voice search seo | MOFU | 200–500 | 32 | /voice-search-seo-dubai |
| 12 | How to Optimise FAQ Content for AI Answers | faq seo | MOFU | 400–900 | 30 | /aeo |
| 13 | Will AI Search Kill SEO? What the Data Says | will ai replace seo | TOFU | 1k–3k (global) | 40 | /ai-seo-agency-dubai |
| 14 | How to Measure GEO Performance (AI Visibility Tracking) | ai visibility tracking | MOFU | emerging | 30 | /geo-agency-uae |

### Cluster B — Local SEO + Google Business Profile (UAE) — 11 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 15 | The Complete Local SEO Guide for Dubai Businesses | local seo dubai | MOFU | 400–900 | 38 | /local-seo-uae |
| 16 | How to Optimise Google Business Profile in the UAE | google business profile dubai | MOFU | 600–1.2k | 35 | /google-business-profile-dubai |
| 17 | How to Rank in Google Maps in Dubai | google maps seo dubai | MOFU | 300–700 | 36 | /local-seo-uae |
| 18 | How to Get More Google Reviews (UAE Guide) | how to get google reviews | MOFU | 800–1.5k | 30 | /local-seo-uae |
| 19 | Local SEO for Multi-Location Businesses in the UAE | multi location seo | MOFU | 200–500 | 35 | /seo-agency-uae |
| 20 | NAP Consistency: Why It Matters for UAE Local SEO | nap consistency seo | TOFU | 150–300 | 25 | /local-seo-uae |
| 21 | Best UAE Business Directories for Local SEO | uae business directories | MOFU | 300–600 | 28 | /local-seo-uae |
| 22 | Local SEO for Abu Dhabi: Complete Playbook | local seo abu dhabi | MOFU | 200–400 | 32 | /local-seo-abu-dhabi |
| 23 | Local SEO for Sharjah Businesses | local seo sharjah | MOFU | 100–300 | 28 | /local-seo-sharjah |
| 24 | How to Rank for "Near Me" Searches in Dubai | near me seo | MOFU | 300–600 | 30 | /local-seo-uae |
| 25 | Google Business Profile Posts: A Weekly Strategy | google business profile posts | MOFU | 200–400 | 26 | /google-business-profile-dubai |

### Cluster C — Industry SEO guides (UAE verticals) — 15 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 26 | SEO for Real Estate Agencies in Dubai: 2026 Guide | real estate seo dubai | MOFU | 300–700 | 40 | /seo-for-real-estate-dubai |
| 27 | SEO for Hotels & Hospitality in the UAE | hotel seo | MOFU | 200–500 | 38 | /seo-for-hotels-dubai |
| 28 | SEO for Clinics & Healthcare in Dubai (E-E-A-T) | healthcare seo dubai | MOFU | 150–400 | 42 | /seo-for-healthcare-dubai |
| 29 | SEO for Law Firms in the UAE | law firm seo dubai | MOFU | 150–350 | 40 | /seo-for-law-firms-dubai |
| 30 | SEO for Restaurants in Dubai | restaurant seo dubai | MOFU | 200–500 | 35 | /seo-for-restaurants-dubai |
| 31 | SEO for Dental Clinics in the UAE | dental seo dubai | MOFU | 150–300 | 38 | /seo-for-dental-clinics-dubai |
| 32 | SEO for Construction & Contracting Companies UAE | construction seo | MOFU | 100–300 | 33 | /seo-for-construction-dubai |
| 33 | SEO for Logistics & Freight Companies in the UAE | logistics seo | MOFU | 100–250 | 33 | /seo-for-logistics-dubai |
| 34 | SEO for Fintech Companies in the UAE | fintech seo | MOFU | 100–250 | 38 | /seo-for-fintech-uae |
| 35 | SEO for Fashion & Retail Brands in Dubai | fashion ecommerce seo | MOFU | 150–350 | 36 | /seo-for-fashion-dubai |
| 36 | SEO for Beauty Salons & Spas in Dubai | beauty salon seo | MOFU | 150–300 | 30 | /seo-for-beauty-salons-dubai |
| 37 | SEO for Schools & Education in the UAE | education seo | MOFU | 100–300 | 35 | /seo-for-education-dubai |
| 38 | SEO for Car Dealerships in the UAE | automotive seo | MOFU | 100–250 | 33 | /seo-for-automotive-uae |
| 39 | SEO for Recruitment Agencies in Dubai | recruitment agency seo | MOFU | 80–200 | 30 | /seo-for-recruitment-agencies-dubai |
| 40 | SEO for SaaS Companies in the Middle East | saas seo | MOFU | 150–400 | 42 | /seo-for-saas-dubai |

### Cluster D — Technical SEO — 11 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 41 | Core Web Vitals in 2026: What Still Matters | core web vitals | TOFU | 2k–5k (global) | 45 | /technical-seo-dubai |
| 42 | How to Fix Crawl Errors in Google Search Console | crawl errors | MOFU | 1k–3k (global) | 35 | /technical-seo-uae |
| 43 | The Complete Guide to XML Sitemaps | xml sitemap | TOFU | 3k–6k (global) | 38 | /technical-seo-dubai |
| 44 | Robots.txt Explained (with Examples) | robots.txt | TOFU | 4k–8k (global) | 40 | /technical-seo-uae |
| 45 | Canonical Tags: A Complete Guide | canonical tags | TOFU | 2k–4k (global) | 38 | /technical-seo-dubai |
| 46 | How to Improve Site Speed (Practical Checklist) | how to improve site speed | MOFU | 1k–3k (global) | 35 | /technical-seo-dubai |
| 47 | JavaScript SEO: Making SPAs Crawlable | javascript seo | MOFU | 800–2k (global) | 42 | /technical-seo-uae |
| 48 | Structured Data Types Every Site Should Use | structured data seo | MOFU | 1k–2k (global) | 38 | /schema-markup-dubai |
| 49 | How to Fix Duplicate Content Issues | duplicate content seo | MOFU | 1k–2k (global) | 33 | /technical-seo-dubai |
| 50 | Mobile-First Indexing: A 2026 Checklist | mobile first indexing | MOFU | 500–1k (global) | 33 | /mobile-seo-dubai |
| 51 | Log File Analysis for SEO (Beginner Guide) | log file analysis seo | MOFU | 300–700 (global) | 40 | /technical-seo-uae |

### Cluster E — On-page + content SEO — 11 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 52 | On-Page SEO Checklist for 2026 | on page seo checklist | MOFU | 2k–4k (global) | 40 | /on-page-seo-dubai |
| 53 | How to Write SEO Title Tags That Get Clicks | seo title tags | MOFU | 1k–3k (global) | 35 | /on-page-seo-uae |
| 54 | Meta Descriptions: Best Practices + Examples | meta description | TOFU | 3k–6k (global) | 35 | /on-page-seo-dubai |
| 55 | Semantic SEO & Topic Clusters Explained | semantic seo | TOFU | 800–2k (global) | 40 | /topical-authority-dubai |
| 56 | How to Build Topical Authority | topical authority | MOFU | 1k–2k (global) | 42 | /topical-authority-dubai |
| 57 | Internal Linking Strategy: A Complete Guide | internal linking | MOFU | 1k–3k (global) | 38 | /on-page-seo-dubai |
| 58 | How to Optimise Content for Featured Snippets | featured snippets | MOFU | 1k–2k (global) | 38 | /featured-snippet-optimisation-dubai |
| 59 | SEO Copywriting: How to Write for Humans + Google | seo copywriting | MOFU | 800–2k (global) | 36 | /seo-copywriting-dubai |
| 60 | How to Do Keyword Research (Step by Step) | how to do keyword research | MOFU | 2k–5k (global) | 42 | /keyword-research-uae |
| 61 | Search Intent: The Most Important SEO Concept | search intent | TOFU | 1k–3k (global) | 35 | /keyword-research-dubai |
| 62 | Content Refresh: How to Update Old Posts for Rankings | content refresh seo | MOFU | 400–900 (global) | 30 | /content-marketing-uae |

### Cluster F — Ecommerce SEO — 8 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 63 | Ecommerce SEO Guide for UAE Online Stores | ecommerce seo | MOFU | 1k–3k (global) | 42 | /ecommerce-seo-uae |
| 64 | Shopify SEO: Complete Checklist | shopify seo | MOFU | 3k–6k (global) | 40 | /shopify-seo-uae |
| 65 | WooCommerce SEO Best Practices | woocommerce seo | MOFU | 1k–2k (global) | 38 | /wordpress-seo-uae |
| 66 | How to Optimise Product Pages for SEO | product page seo | MOFU | 800–2k (global) | 36 | /ecommerce-seo-dubai |
| 67 | Category Page SEO for Online Stores | category page seo | MOFU | 400–900 (global) | 35 | /ecommerce-seo-uae |
| 68 | How to Reduce Cart Abandonment with Better SEO/UX | cart abandonment | TOFU | 1k–2k (global) | 30 | /ecommerce-seo-dubai |
| 69 | Product Schema & Rich Snippets for Ecommerce | product schema | MOFU | 500–1k (global) | 33 | /schema-markup-dubai |
| 70 | International Ecommerce SEO from the UAE | international ecommerce seo | MOFU | 200–500 | 38 | /seo-for-online-stores-uae |

### Cluster G — Link building + authority — 7 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 71 | Link Building in 2026: What Actually Works | link building | MOFU | 3k–6k (global) | 48 | /link-building-uae |
| 72 | Digital PR for UAE Brands | digital pr | MOFU | 800–2k (global) | 40 | /link-building-services-dubai |
| 73 | How to Earn Backlinks Without Buying Them | how to get backlinks | MOFU | 2k–4k (global) | 42 | /link-building-uae |
| 74 | Guest Posting: Still Worth It in 2026? | guest posting | TOFU | 1k–2k (global) | 35 | /link-building-services-dubai |
| 75 | What Is Domain Authority and Does It Matter? | domain authority | TOFU | 4k–8k (global) | 40 | /link-building-uae |
| 76 | Broken Link Building: A Step-by-Step Guide | broken link building | MOFU | 800–1.5k (global) | 35 | /link-building-uae |
| 77 | How to Build Backlinks for a Local UAE Business | local link building | MOFU | 300–700 | 33 | /local-seo-uae |

### Cluster H — Measurement, analytics, ROI — 8 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 78 | How to Measure SEO ROI (with Formula) | seo roi | MOFU | 800–2k (global) | 38 | /seo-audit-uae |
| 79 | GA4 for SEO: The Essential Reports | ga4 seo | MOFU | 1k–3k (global) | 38 | /seo-audit-dubai |
| 80 | Google Search Console: A Complete Guide | google search console | TOFU | 5k–10k (global) | 42 | /technical-seo-uae |
| 81 | SEO KPIs That Actually Matter | seo kpis | MOFU | 500–1k (global) | 33 | /seo-audit-uae |
| 82 | How to Track Keyword Rankings (Tools + Method) | rank tracking | MOFU | 800–2k (global) | 35 | /keyword-research-uae |
| 83 | How to Run an SEO Audit (Free Template) | seo audit | MOFU | 4k–8k (global) | 45 | /seo-audit-uae |
| 84 | Attribution: Connecting SEO to Revenue | seo attribution | MOFU | 300–700 (global) | 33 | /seo-audit-dubai |
| 85 | Conversion Rate Optimisation for SEO Traffic | cro seo | MOFU | 600–1.2k (global) | 36 | /seo-audit-uae |

### Cluster I — Commercial / hiring / cost (BOFU — convert) — 9 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 86 | How Much Does SEO Cost in Dubai? (2026 Pricing) | seo cost dubai | BOFU | 400–900 | 35 | /seo-pricing-dubai, /seo-pricing-uae |
| 87 | How to Choose an SEO Agency in the UAE | how to choose seo agency | BOFU | 200–500 | 33 | /best-seo-company-uae |
| 88 | In-House vs Agency SEO: Which Is Right for You? | in house vs agency seo | BOFU | 300–700 (global) | 32 | /seo-agency-uae |
| 89 | SEO Contracts: What to Look For (and Avoid) | seo contract | BOFU | 200–400 (global) | 28 | /seo-agency-dubai |
| 90 | Questions to Ask Before Hiring an SEO Consultant | hire seo consultant | BOFU | 200–500 | 30 | /seo-consultant-uae |
| 91 | Cheap SEO vs Affordable SEO: Know the Difference | affordable seo | BOFU | 300–600 | 30 | /affordable-seo-uae |
| 92 | Monthly SEO Retainers Explained | seo retainer | BOFU | 200–400 (global) | 30 | /monthly-seo-packages-uae |
| 93 | White-Label SEO: A Guide for Agencies | white label seo | BOFU | 800–2k (global) | 38 | /white-label-seo-uae |
| 94 | Signs Your SEO Agency Is Underperforming | bad seo agency signs | BOFU | 150–400 (global) | 28 | /best-seo-company-uae |

### Cluster J — Beginner / definitions (TOFU — win AI citations) — 6 posts
| # | Title | Primary keyword | Stage | Vol | Diff | Links to |
|---|-------|-----------------|-------|-----|------|----------|
| 95 | What Is SEO? A Beginner's Guide (2026) | what is seo | TOFU | 10k–20k (global) | 50 | /seo-services-dubai |
| 96 | How Does Google Search Work? | how does google search work | TOFU | 3k–6k (global) | 42 | /seo-agency-dubai |
| 97 | On-Page vs Off-Page SEO: What's the Difference? | on page vs off page seo | TOFU | 1k–2k (global) | 33 | /on-page-seo-dubai |
| 98 | White Hat vs Black Hat SEO Explained | white hat seo | TOFU | 1k–3k (global) | 35 | /seo-agency-uae |
| 99 | SEO Glossary: 50 Terms Every Marketer Should Know | seo terms | TOFU | 800–2k (global) | 30 | /seo-services-dubai |
| 100 | How Long Does SEO Take to Work? | how long does seo take | TOFU | 1k–3k (global) | 35 | /seo-pricing-uae |

---

## PART 4 — PUBLISHING PLAN

**Priority order (what to write first):**
1. **BOFU first (Cluster I, #86–94)** — lowest volume but highest conversion; these earn revenue while authority builds.
2. **Your differentiator (Cluster A, #1–14)** — low competition, high AI-citation upside, sets you apart in the UAE market.
3. **Local UAE (Cluster B) + Industry (Cluster C)** — directly support the 200 landing pages via internal links.
4. **High-volume TOFU (Clusters D, E, J)** — slower to rank but build domain authority and feed AI Overviews.

**Cadence:** 3–4 posts/week = all 100 in ~7 months. Or 2/week = ~12 months.

**Every post must include:**
- Hook in first 3 sentences (problem-first / bold claim / number).
- ABT structure for intros, PAS for tutorials.
- No em dashes; no double hyphens as dash substitutes.
- 2+ internal links to landing pages (see "Links to" column).
- FAQ block (3–5 Q&As) for FAQPage schema + AI answers.
- Author byline: Srinivasan R.
- "Last updated" date.
- 5-reviewer panel sign-off before publishing.

**Topic-cluster internal linking:** create a pillar page per cluster (e.g. an AEO hub) and link all cluster posts up to it and down to money pages. This is what converts 100 posts into topical authority rather than 100 orphans.
