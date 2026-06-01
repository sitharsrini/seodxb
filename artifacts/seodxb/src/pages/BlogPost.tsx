import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "wouter";
import { ArrowLeft, Clock, Calendar, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AUTHOR = {
  name: "Srinivasan R",
  title: "SEO Strategist & Founder, SEODXB",
  bio: "Srinivasan is the founder of SEODXB and a specialist in On-Page SEO, Answer Engine Optimisation (AEO), and Generative Engine Optimisation (GEO). He helps businesses across Dubai and the UAE dominate search across Google, ChatGPT, and Perplexity.",
  linkedin: "https://www.linkedin.com/in/rsrinivasan163",
  url: "https://www.linkedin.com/in/rsrinivasan163",
};

const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": AUTHOR.name,
  "jobTitle": AUTHOR.title,
  "url": AUTHOR.url,
  "sameAs": [AUTHOR.linkedin],
  "worksFor": {
    "@type": "ProfessionalService",
    "name": "SEODXB",
    "url": "https://seodxb.com"
  }
};

const posts: Record<string, {
  category: string;
  title: string;
  date: string;
  iso: string;
  updated: string;
  time: string;
  excerpt: string;
  content: React.ReactNode;
}> = {
  "future-of-search-generative-ai-dubai": {
    category: "SEO Strategy",
    title: "The Future of Search: Preparing for Generative AI in Dubai",
    date: "Nov 10, 2025",
    iso: "2025-11-10",
    updated: "2026-05-22",
    time: "5 min read",
    excerpt: "How generative engine optimisation (GEO) is reshaping search visibility for businesses across Dubai and the UAE.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>Search is no longer just blue links. In Dubai's hyper-competitive digital market, businesses that rely solely on traditional Google rankings are already behind. Generative AI tools like ChatGPT, Google Gemini, and Perplexity are fundamentally changing how people discover businesses, compare services, and make decisions.</p>

        <h2>What Is Generative Engine Optimization (GEO)?</h2>
        <p>Generative Engine Optimization, or GEO, is the practice of structuring your content, brand presence, and digital authority so that large language models (LLMs) cite, recommend, and surface your business when users ask relevant questions.</p>
        <p>When a potential client in Dubai types "what is the best SEO agency in the UAE?" into ChatGPT or Gemini, the answer they receive is not pulled from a live search index. It is synthesized from training data, website content, structured information, and signals of authority that AI models have already ingested.</p>
        <p>If your brand is not visible in those signals, you simply do not exist in that answer.</p>

        <h2>How Dubai Businesses Are Affected</h2>
        <p>The UAE's market is particularly susceptible to this shift for several reasons:</p>
        <ul>
          <li><strong>High smartphone and AI assistant adoption</strong> among consumers and business professionals</li>
          <li><strong>A multilingual audience</strong> that uses voice and conversational search in Arabic and English</li>
          <li><strong>Fast-moving sectors</strong> like real estate, hospitality, finance, and logistics where decision speed matters</li>
          <li><strong>Expat-heavy demographics</strong> who rely on digital research before committing to local service providers</li>
        </ul>

        <h2>The Three Search Surfaces You Must Dominate</h2>
        <h3>1. Traditional Google Search (SEO)</h3>
        <p>Standard on-page optimization, technical SEO, and link authority remain critical. Google still drives significant commercial intent traffic, especially for location-based searches like "SEO agency Dubai" or "property management company UAE."</p>

        <h3>2. Answer Engines (AEO)</h3>
        <p>Voice search, Google's AI Overviews, featured snippets, and the People Also Ask section all fall under Answer Engine Optimization. Your content must be structured to directly answer specific questions with authority and clarity.</p>

        <h3>3. Generative AI Tools (GEO)</h3>
        <p>ChatGPT, Gemini, Perplexity, Claude, and similar tools synthesize responses from large datasets. Being mentioned in authoritative sources, industry publications, and well-structured website content increases the likelihood that these tools will cite your business.</p>

        <h2>What You Can Do Right Now</h2>
        <p>Start by auditing your content for these GEO-ready signals:</p>
        <ul>
          <li>Does your website clearly define what your business does, where you operate, and who you serve?</li>
          <li>Are your key service pages structured with FAQ sections and direct Q&A formatting?</li>
          <li>Is your brand mentioned in relevant industry directories, news sources, and publications?</li>
          <li>Do you have schema markup implemented across your key pages?</li>
        </ul>
        <p>Businesses that invest in GEO alongside SEO and AEO today will compound their visibility advantage over the next 12 to 24 months as generative AI adoption accelerates across the UAE.</p>

        <h2>The SEODXB Approach</h2>
        <p>At SEODXB, we build every strategy around all three search surfaces simultaneously. Our clients in Dubai do not just rank on Google. They appear in AI-generated answers, voice search results, and featured snippets across the queries that matter most to their business.</p>
        <p>If you are ready to future-proof your search presence in Dubai, book a call with our team today.</p>
      </div>
    )
  },
  "core-web-vitals-matter": {
    category: "Technical SEO",
    title: "Why Core Web Vitals Matter More Than Ever",
    date: "Oct 28, 2025",
    iso: "2025-10-28",
    updated: "2026-05-18",
    time: "8 min read",
    excerpt: "A deep dive into site speed, interactivity, and visual stability as crucial Google ranking factors for your website.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>Google's Core Web Vitals have moved from a "nice to have" to a direct ranking signal. For businesses in Dubai competing in high-value niches, a slow or visually unstable website is not just a user experience problem. It is a search visibility problem.</p>

        <h2>What Are Core Web Vitals?</h2>
        <p>Core Web Vitals are a set of specific, measurable metrics Google uses to evaluate the real-world experience of loading, interacting with, and visually consuming a webpage. The three primary metrics are:</p>

        <h3>Largest Contentful Paint (LCP)</h3>
        <p>LCP measures how long it takes for the largest visible element on a page to fully load. This is typically a hero image, a large heading, or a block of text above the fold. Google's target is under 2.5 seconds. Pages over 4 seconds are considered poor.</p>

        <h3>Interaction to Next Paint (INP)</h3>
        <p>INP replaced First Input Delay (FID) as the interactivity metric in March 2024. It measures the full time from when a user interacts with your page (a click, tap, or key press) to when the browser visually responds. A good INP score is under 200 milliseconds.</p>

        <h3>Cumulative Layout Shift (CLS)</h3>
        <p>CLS measures visual stability. Have you ever been on a page and gone to click a button, only for an ad or image to load at the last second and push the button down? That is a layout shift. Google expects a CLS score below 0.1.</p>

        <h2>Why This Matters for Dubai Businesses</h2>
        <p>Dubai's digital audience is sophisticated and impatient. With high-speed internet penetration across the UAE and a market where users have abundant choices, a slow website is a conversion killer before any SEO argument even begins.</p>
        <p>Beyond conversions, poor Core Web Vitals directly suppress your search rankings. Google's Page Experience signal now incorporates these metrics as ranking factors, meaning a technically weak website will consistently rank below competitors with comparable content and backlinks.</p>

        <h2>The Most Common Core Web Vitals Failures We See</h2>
        <ul>
          <li><strong>Unoptimized images:</strong> Large, uncompressed images are the single biggest LCP killer. Every product, team, and gallery image needs to be properly sized, compressed, and served in modern formats like WebP.</li>
          <li><strong>Render-blocking scripts:</strong> JavaScript and CSS files that load before page content delay LCP and inflate INP scores. Third-party scripts for chat widgets, analytics, and ad platforms are frequent offenders.</li>
          <li><strong>Fonts without font-display:</strong> Web fonts that load without a display strategy cause invisible text during page load, worsening perceived performance.</li>
          <li><strong>Dynamic content without reserved space:</strong> Ads, banners, and lazy-loaded elements that shift layout create CLS problems that penalize rankings.</li>
        </ul>

        <h2>How to Fix Your Core Web Vitals</h2>
        <p>Start with a Google PageSpeed Insights audit for your core pages, paying attention to both mobile and desktop scores. Mobile performance matters more for rankings in most cases.</p>
        <p>Then prioritize fixes in this order: image optimization, script loading order, then layout stability. Each of these areas has measurable ROI in both rankings and conversion rates.</p>
        <p>At SEODXB, our technical SEO audit covers all three Core Web Vitals metrics with specific, prioritized recommendations for your website's tech stack. If you want to know exactly where your site stands, book a free audit with our team.</p>
      </div>
    )
  },
  "answer-engines-position-zero": {
    category: "AEO",
    title: "Optimizing for Answer Engines: Position Zero Explained",
    date: "Dec 5, 2025",
    iso: "2025-12-05",
    updated: "2026-05-25",
    time: "6 min read",
    excerpt: "How to structure content so answer engines, voice assistants, and featured snippets surface it at Position Zero.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>Position Zero is the single most valuable real estate in Google Search. It is the result that appears above all organic listings, inside a dedicated box, answering a user's question directly on the results page. Winning Position Zero does not just drive traffic. It establishes your brand as the definitive authority on a topic.</p>

        <h2>What Is Position Zero?</h2>
        <p>Position Zero refers to a featured snippet, a Google Search feature where the search engine displays a direct answer to a query inside a highlighted box at the top of the results page. This answer is pulled from a specific website, and that website receives both the traffic and the authority signal of being Google's chosen answer.</p>
        <p>Featured snippets can appear as paragraph extracts, numbered lists, bulleted lists, or even tables. The format depends on the type of question being asked and the structure of the winning content.</p>

        <h2>Why AEO Is Different from Traditional SEO</h2>
        <p>Answer Engine Optimization (AEO) is the practice of deliberately structuring content so that it wins featured snippets, voice search results, and AI-generated answer boxes. It is distinct from traditional SEO in several important ways:</p>
        <ul>
          <li>Traditional SEO focuses on ranking for keywords. AEO focuses on answering questions.</li>
          <li>Traditional SEO targets a page-level URL. AEO targets a specific passage or extract within a page.</li>
          <li>Traditional SEO measures success by position. AEO measures success by answer ownership.</li>
        </ul>

        <h2>Content Structures That Win Featured Snippets</h2>
        <h3>The Question-Answer Format</h3>
        <p>The most reliable way to win a featured snippet is to include the exact question as a heading within your content, then immediately follow it with a direct, concise answer in the next paragraph. Google's algorithm looks for this pattern when deciding what to surface as a featured snippet.</p>

        <h3>Numbered and Bulleted Lists</h3>
        <p>For "how to" queries and comparison questions, structured lists consistently win Position Zero. Each step or item should be concise and contain the key phrase being searched. Lists also perform exceptionally well in voice search, where Google reads out the top result aloud.</p>

        <h3>Definition Boxes</h3>
        <p>Queries that start with "what is," "what does," or "define" often trigger definition-style featured snippets. A clean, 40 to 60 word definition followed by more detail is the ideal format for capturing these snippets.</p>

        <h2>Voice Search and AEO</h2>
        <p>Voice search on mobile devices and smart speakers almost always pulls from featured snippets. When someone asks Siri, Google Assistant, or Alexa a question, the answer they hear is typically the same content that appears in Position Zero on desktop search.</p>
        <p>For Dubai businesses, this means optimizing for conversational, question-based queries in both English and Arabic is critical. Voice search queries tend to be longer, more natural in phrasing, and more likely to include local qualifiers like "near me" or "in Dubai."</p>

        <h2>Schema Markup and AEO</h2>
        <p>Implementing FAQ schema, HowTo schema, and Q&amp;A schema on your key pages increases the likelihood that Google will surface your content as a featured snippet or in the People Also Ask section. These structured data formats give Google explicit signals about the Q&amp;A structure of your content.</p>
        <p>At SEODXB, AEO is built into every content strategy we develop. We identify the high-value question clusters in your niche and build content that is engineered to own those answers. Book a strategy call to learn how we can help your Dubai business capture Position Zero.</p>
      </div>
    )
  },
  "local-search-dubai": {
    category: "Local SEO",
    title: "Dominating Local Search in Dubai: A Practical Guide",
    date: "Sep 30, 2025",
    iso: "2025-09-30",
    updated: "2026-04-30",
    time: "7 min read",
    excerpt: "Actionable steps to improve your Google Business Profile and local citations for maximum visibility in Dubai search.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>For businesses operating in Dubai, local search is not optional. It is the primary channel through which high-intent customers find, evaluate, and contact service providers. A strong local SEO foundation is the difference between appearing at the top of the map pack and being invisible to customers who are ready to buy.</p>

        <h2>Why Local Search Matters in Dubai</h2>
        <p>Dubai's business landscape is uniquely suited to local search dominance for a few reasons:</p>
        <ul>
          <li>The city is geographically compact, meaning customers often search for services "near me" or in specific neighborhoods like Business Bay, JLT, or DIFC.</li>
          <li>There is a high concentration of competitors in most service categories, making local map pack visibility a genuine competitive advantage.</li>
          <li>Dubai has one of the highest per-capita smartphone usage rates in the world, meaning local searches predominantly happen on mobile.</li>
          <li>The expat population relies heavily on online research before engaging any local service provider for the first time.</li>
        </ul>

        <h2>Google Business Profile: The Foundation</h2>
        <p>Your Google Business Profile (GBP) is the most important single asset in your local SEO strategy. It controls what appears in the Google Map Pack, Google Maps, and the Knowledge Panel that shows on branded searches.</p>

        <h3>Optimizing Your Google Business Profile</h3>
        <p>A fully optimized GBP includes:</p>
        <ul>
          <li><strong>Accurate NAP data:</strong> Name, address, and phone number must be consistent across your profile, website, and all directory listings.</li>
          <li><strong>Complete category selection:</strong> Choose your primary category carefully. It is the strongest signal Google uses to match your business to relevant queries.</li>
          <li><strong>Business description with keywords:</strong> Write a natural, keyword-rich description that includes your service type, location, and differentiators.</li>
          <li><strong>Regular photo uploads:</strong> Businesses with photos receive significantly more direction requests and website clicks. Upload high-quality images of your premises, team, and work.</li>
          <li><strong>Products and services:</strong> Use the Products and Services sections to list your offerings with descriptions and pricing where appropriate.</li>
          <li><strong>Regular Google Posts:</strong> Keep your profile active with weekly posts about offers, news, and events.</li>
        </ul>

        <h2>Review Strategy</h2>
        <p>Google reviews are one of the strongest local ranking signals. Quantity, recency, and your response pattern all factor into how Google evaluates your business for local search. A consistent review generation strategy, where you systematically ask satisfied customers for reviews through WhatsApp, email, or QR codes, can significantly accelerate your local rankings.</p>

        <h2>Local Citations and Directory Listings</h2>
        <p>A citation is any online mention of your business name, address, and phone number. The UAE has a specific set of authoritative local directories including Dubizzle, YallaBanana, UAE Yellow Pages, and Bayut (for real estate businesses). Being listed accurately on these directories strengthens your local authority signals.</p>

        <h2>Location-Specific Content</h2>
        <p>Creating dedicated landing pages for each neighborhood or area you serve in Dubai is one of the highest-value local SEO tactics. A page targeting "SEO services in Business Bay" versus a page targeting "SEO services in Jumeirah" allows Google to match your website to hyper-local searches with high precision.</p>

        <p>At SEODXB, we build complete local SEO strategies for Dubai businesses that cover GBP optimization, citation building, review generation, and location-specific content. Book a free audit to find out exactly where your local search presence stands today.</p>
      </div>
    )
  },
  "semantic-seo-entities-keywords": {
    category: "Content",
    title: "Semantic SEO: Writing for Entities, Not Just Keywords",
    date: "Jan 14, 2026",
    iso: "2026-01-14",
    updated: "2026-05-15",
    time: "10 min read",
    excerpt: "Move beyond keyword stuffing and build topical authority through entity-based, semantic content optimisation.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>The era of keyword stuffing is long over. Today, Google's algorithm understands language, context, entities, and intent at a level that makes traditional keyword-focused content strategies not just ineffective, but actively counterproductive. Semantic SEO is the approach that aligns your content with how Google actually understands meaning.</p>

        <h2>What Is Semantic SEO?</h2>
        <p>Semantic SEO is the practice of optimizing content for meaning and context rather than just for specific keyword strings. It involves building content around topics, entities, and relationships rather than targeting isolated search terms.</p>
        <p>An entity, in Google's context, is anything that can be uniquely identified and distinguished from other things. People, places, organizations, products, and concepts are all entities. Google's Knowledge Graph connects entities and their relationships, forming the foundation of how the search engine understands content.</p>

        <h2>Why Keywords Alone Are Not Enough</h2>
        <p>Consider the search query "best hotel in Dubai." Ten years ago, a page that repeated the phrase "best hotel Dubai" enough times would rank well. Today, Google understands that this query involves:</p>
        <ul>
          <li>Hotels as a concept (entities with attributes like location, price, rating, amenities)</li>
          <li>Dubai as a geographic entity with specific neighborhoods, airports, and attractions</li>
          <li>User intent around comparison, booking, and evaluation</li>
          <li>Contextual signals like the searcher's location, time of year, and device</li>
        </ul>
        <p>A page that only repeats the keyword will not satisfy Google's understanding of what a complete, authoritative answer to this query looks like.</p>

        <h2>Building Topical Authority</h2>
        <p>Topical authority is Google's assessment of how comprehensively your website covers a subject area. A website that has 50 pages covering every aspect of SEO from technical audits to content strategy to link building will consistently outrank a single-page site targeting only "SEO services" regardless of backlink counts.</p>

        <h3>Content Clustering</h3>
        <p>The most effective structure for building topical authority is the content cluster model:</p>
        <ul>
          <li><strong>Pillar page:</strong> A comprehensive, long-form page covering a broad topic like "SEO for Dubai Businesses"</li>
          <li><strong>Cluster pages:</strong> Detailed articles covering sub-topics like "Local SEO Dubai," "Technical SEO for UAE Websites," and "Arabic SEO Strategy"</li>
          <li><strong>Internal linking:</strong> Systematic links between the pillar page and cluster pages with descriptive anchor text</li>
        </ul>

        <h2>Entity Optimization Tactics</h2>
        <h3>Schema Markup</h3>
        <p>Schema markup is structured data code added to your pages that explicitly communicates entity information to Google. Organization schema, LocalBusiness schema, Person schema, and Article schema all help Google correctly categorize and understand your content.</p>

        <h3>Wikipedia and Wikidata Presence</h3>
        <p>Entities that exist in Wikipedia or Wikidata are recognized by Google's Knowledge Graph. For established brands, acquiring or verifying a Wikipedia entry significantly strengthens Google's understanding of your entity and its attributes.</p>

        <h3>Co-occurrence Signals</h3>
        <p>When your brand or website is consistently mentioned alongside other recognized entities in your niche, Google builds a stronger contextual understanding of what you represent. Being quoted in industry publications alongside recognized experts, being listed on authoritative platforms, and earning mentions from established brands all contribute to entity co-occurrence signals.</p>

        <h2>Practical Application for Dubai Businesses</h2>
        <p>For a business in Dubai, semantic SEO means building content that comprehensively covers the search landscape around your service category. An SEO agency should not just have a homepage targeting "SEO Dubai." It should have content covering every question a potential client might search for, every aspect of the service, and every comparison a buyer might make.</p>
        <p>At SEODXB, our content strategies are built on entity and topical authority frameworks from day one. If you want to build lasting search visibility in Dubai's competitive market, book a strategy call with our team.</p>
      </div>
    )
  },
  "tracking-seo-metrics-revenue": {
    category: "Analytics",
    title: "Tracking What Matters: Metrics That Actually Drive Revenue",
    date: "Feb 22, 2026",
    iso: "2026-02-22",
    updated: "2026-05-28",
    time: "4 min read",
    excerpt: "Stop chasing vanity metrics. Learn how to measure SEO ROI and the metrics that actually drive business revenue.",
    content: (
      <div className="prose prose-lg max-w-none">
        <p>Organic impressions are up 40%. Click-through rate has improved by 15%. Average ranking for target keywords is now position 7. All of these sound like wins, and they might be. But if revenue has not moved, none of those metrics matter to your business. The ability to connect SEO activity to business outcomes is what separates effective SEO programmes from expensive reports.</p>

        <h2>The Vanity Metrics Trap</h2>
        <p>Most SEO reports are filled with metrics that look good on a slide but have a questionable relationship to revenue. Traffic volume, keyword rankings, and domain authority scores are all indirect indicators. They can move in positive directions while your actual revenue from organic search stays flat or declines.</p>
        <p>This happens when:</p>
        <ul>
          <li>Traffic increases from keywords that do not convert</li>
          <li>Rankings improve for terms that do not reflect commercial intent</li>
          <li>Domain authority improves through low-quality link building</li>
          <li>Impressions grow from informational queries that attract researchers, not buyers</li>
        </ul>

        <h2>The Metrics That Actually Matter</h2>
        <h3>Organic Conversions by Landing Page</h3>
        <p>Which specific pages are driving form submissions, phone calls, WhatsApp inquiries, or purchases from organic traffic? This metric directly connects your SEO work to revenue-generating actions. Track it at the page level, not the aggregate site level.</p>

        <h3>Revenue or Lead Value Per Organic Session</h3>
        <p>If you can assign a value to each lead or sale your website generates, you can calculate the revenue per organic session. This allows you to evaluate SEO investment against actual financial return and set realistic expectations for growth targets.</p>

        <h3>Keyword Conversion Rate by Intent Cluster</h3>
        <p>Not all keywords convert equally. Separate your tracked keywords into intent categories: informational, navigational, and commercial. Commercial intent keywords should drive the majority of your conversion volume. If they are not, something in your conversion funnel needs attention.</p>

        <h3>Organic Market Share</h3>
        <p>Compare your organic click share for priority keyword clusters against your competitors. Tools like Google Search Console, Ahrefs, and SEMrush allow you to estimate how much of the available search traffic in your niche is reaching your website versus going to competitors. Growing organic market share is a meaningful strategic metric for competitive markets like Dubai.</p>

        <h2>Setting Up Proper Tracking</h2>
        <p>Effective SEO measurement requires:</p>
        <ul>
          <li><strong>Google Analytics 4</strong> configured with proper conversion events for every meaningful user action</li>
          <li><strong>Google Search Console</strong> integrated with GA4 to connect search performance data with on-site behaviour</li>
          <li><strong>Call tracking</strong> if phone calls are a primary conversion channel for your business</li>
          <li><strong>CRM integration</strong> if you have a sales team, so you can track leads from organic traffic through to closed revenue</li>
        </ul>

        <h2>Monthly Reporting That Drives Decisions</h2>
        <p>A good SEO report should answer three questions: What happened? Why did it happen? What are we doing about it?</p>
        <p>At SEODXB, every client receives a monthly report that covers organic conversion performance, keyword ranking movement for commercial intent terms, technical health updates, and specific actions planned for the next 30 days. No vanity metrics, no filler slides. Just the numbers that tell the story of your business's search performance.</p>
        <p>If you want to see what performance-focused SEO reporting looks like for a Dubai business, book a call with our team and we will walk you through our framework.</p>
      </div>
    )
  }
};

export function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = slug ? posts[slug] : null;

  if (!post) {
    return (
      <div className="pt-40 pb-24 container mx-auto px-4 text-center">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <p className="text-gray-500 mb-8">The article you are looking for does not exist.</p>
        <Button asChild className="rounded-full bg-primary">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | SEODXB Blog</title>
        <meta name="description" content={post.excerpt || `${post.title} - Expert SEO insights from SEODXB, Dubai's leading SEO agency.`} />
        <link rel="canonical" href={`https://seodxb.com/blog/${slug}`} />
        <meta name="author" content={AUTHOR.name} />
        <meta property="og:title" content={`${post.title} | SEODXB Blog`} />
        <meta property="og:description" content={post.excerpt || post.title} />
        <meta property="og:url" content={`https://seodxb.com/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://seodxb.com/opengraph.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="SEODXB" />
        <meta property="article:published_time" content={post.iso} />
        <meta property="article:modified_time" content={post.updated} />
        <meta property="article:author" content={AUTHOR.linkedin} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | SEODXB Blog`} />
        <meta name="twitter:description" content={post.excerpt || post.title} />
        <meta name="twitter:image" content="https://seodxb.com/opengraph.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.excerpt,
          "url": `https://seodxb.com/blog/${slug}`,
          "datePublished": post.iso,
          "dateModified": post.updated,
          "author": { "@type": "Person", "name": AUTHOR.name, "url": AUTHOR.url },
          "publisher": { "@type": "Organization", "name": "SEODXB", "url": "https://seodxb.com", "logo": { "@type": "ImageObject", "url": "https://seodxb.com/favicon.png" } },
          "image": "https://seodxb.com/opengraph.jpg",
          "mainEntityOfPage": { "@type": "WebPage", "@id": `https://seodxb.com/blog/${slug}` }
        })}</script>
        <script type="application/ld+json">{JSON.stringify(authorSchema)}</script>
      </Helmet>
    <div className="pt-28 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-10 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <span className="inline-block text-xs font-bold text-primary tracking-widest uppercase mb-4 border border-primary/30 bg-primary/5 px-3 py-1 rounded-full">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-black tracking-[-0.03em] leading-[1.05] mt-4 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-sm text-gray-400 mb-10 border-b border-gray-100 pb-8">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.time}</span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1.5 text-gray-500 font-medium">By {AUTHOR.name}</span>
            <span className="text-gray-300">|</span>
            <span className="text-gray-400">Updated {new Date(post.updated).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}</span>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-black [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-black [&_h3]:mt-7 [&_h3]:mb-3
            [&_p]:mb-5 [&_p]:leading-relaxed
            [&_ul]:mb-5 [&_ul]:space-y-2 [&_ul]:list-none [&_ul_li]:pl-5 [&_ul_li]:relative
            [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-0 [&_ul_li]:before:top-2.5 [&_ul_li]:before:w-2 [&_ul_li]:before:h-2 [&_ul_li]:before:bg-primary [&_ul_li]:before:rounded-full
            [&_strong]:font-bold [&_strong]:text-black
          ">
            {post.content}
          </div>

          {/* Author Bio */}
          <div className="mt-14 border-t border-gray-100 pt-10">
            <div className="flex items-start gap-5 bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                <span className="text-white font-black text-lg">SR</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1 flex-wrap">
                  <p className="font-bold text-gray-900">{AUTHOR.name}</p>
                  <a
                    href={AUTHOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary font-semibold hover:underline"
                  >
                    <Linkedin size={12} /> LinkedIn
                  </a>
                </div>
                <p className="text-xs text-primary font-semibold mb-2">{AUTHOR.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{AUTHOR.bio}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-100 pt-12">
            <div className="bg-primary text-white rounded-3xl p-8 text-center">
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-primary-foreground/70">Ready to Grow?</p>
              <h3 className="text-2xl font-black mb-3">Want results like these for your Dubai business?</h3>
              <p className="text-white/70 mb-6 max-w-md mx-auto text-sm">Book a call with the SEODXB team and find out exactly what it takes to dominate search in your niche.</p>
              <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90 font-semibold px-8 py-5">
                <Link href="/contact">Book a Free Call</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-full px-6">
              <Link href="/blog">
                <ArrowLeft size={14} className="mr-2" /> All Articles
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
