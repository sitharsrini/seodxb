/**
 * Page-specific long-form copy for keyword landings.
 * Built from the page's place, industry and service so the extra 700+ words
 * are not a city-name swap. Sales voice. British English. No DIY tutorials.
 */

import type { KeywordPageConfig } from "../data/keywordPages";

export type LongBlock = {
  heading: string;
  paragraphs: string[];
  h3s?: { title: string; text: string }[];
  h4s?: { title: string; text: string }[];
};

type Region = "uae" | "gcc" | "uk" | "us" | "eu" | "apac" | "global";

type Place = {
  name: string;
  country: string;
  region: Region;
  context: string;
  sectors: string;
  localCue: string;
  bilingual: boolean;
};

type Industry = {
  label: string;
  buyer: string;
  intent: string;
  work: string;
};

type ServiceKind = {
  label: string;
  work: string;
};

function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
  return h >>> 0;
}

function pick<T>(slug: string, arr: readonly T[], salt = 0): T {
  return arr[(hash(slug) + salt) % arr.length];
}

const PLACES: Record<string, Place> = {
  dubai: { name: "Dubai", country: "United Arab Emirates", region: "uae", context: "Dubai is a high-intent, mobile-first market where visitors, residents and procurement teams shortlist on Google before they call.", sectors: "real estate, hospitality, professional services, ecommerce and healthcare", localCue: "Dubai Marina, Downtown, Business Bay, DIFC, JLT and Deira", bilingual: true },
  "abu-dhabi": { name: "Abu Dhabi", country: "United Arab Emirates", region: "uae", context: "Abu Dhabi's search market mixes government, energy, tourism and family services, with strong Map Pack demand along the Corniche and the islands.", sectors: "energy, government contracting, healthcare, tourism and real estate", localCue: "the Corniche, Al Reem, Yas Island, Khalifa City and Mussafah", bilingual: true },
  sharjah: { name: "Sharjah", country: "United Arab Emirates", region: "uae", context: "Sharjah buyers often compare on price and trust, then pick whoever already looks established on Maps and in Arabic search.", sectors: "manufacturing, education, furniture, family healthcare and logistics", localCue: "Al Majaz, Al Nahda, Muwaileh and University City", bilingual: true },
  ajman: { name: "Ajman", country: "United Arab Emirates", region: "uae", context: "Ajman is SME-heavy, with free-zone traders and local services competing for nearby searches rather than vanity national terms.", sectors: "trading, manufacturing, real estate and professional services", localCue: "Ajman Free Zone, Al Nuaimiya and the Corniche", bilingual: true },
  "ras-al-khaimah": { name: "Ras Al Khaimah", country: "United Arab Emirates", region: "uae", context: "Ras Al Khaimah blends industrial search (RAKEZ, manufacturing) with tourism around Jebel Jais and the coast.", sectors: "manufacturing, tourism, real estate and hospitality", localCue: "Al Hamra, the old town and Jebel Jais", bilingual: true },
  fujairah: { name: "Fujairah", country: "United Arab Emirates", region: "uae", context: "Fujairah search is shaped by the port, bunkering and east-coast tourism, so local and logistics queries convert quickly.", sectors: "shipping, logistics, tourism and hospitality", localCue: "the port, Al Faseel and the east-coast hotels", bilingual: true },
  "umm-al-quwain": { name: "Umm Al Quwain", country: "United Arab Emirates", region: "uae", context: "Umm Al Quwain is a smaller, high-trust market where a handful of well-optimised listings can own the local pack.", sectors: "leisure tourism, trading and small business", localCue: "the UAQ waterfront and free zone", bilingual: true },
  "al-ain": { name: "Al Ain", country: "United Arab Emirates", region: "uae", context: "Al Ain search is family and services led: schools, clinics, retail and agriculture suppliers, with less tourist noise than the coast.", sectors: "education, healthcare, agriculture and retail", localCue: "Al Jimi, Al Ain Mall and the oasis districts", bilingual: true },
  "dubai-marina": { name: "Dubai Marina", country: "United Arab Emirates", region: "uae", context: "Dubai Marina is dense, walkable and map-pack brutal: restaurants, clinics, gyms and agencies sit on top of each other.", sectors: "hospitality, real estate, wellness and retail", localCue: "Marina Walk, JBR and the marina towers", bilingual: true },
  "business-bay": { name: "Business Bay", country: "United Arab Emirates", region: "uae", context: "Business Bay is a B2B search market: offices, agencies and professional firms bidding for commercial queries, not tourist terms.", sectors: "professional services, startups and B2B", localCue: "the canal offices and Sheikh Zayed Road fringe", bilingual: true },
  jlt: { name: "Jumeirah Lakes Towers", country: "United Arab Emirates", region: "uae", context: "JLT and DMCC mix commodities traders with cluster-tower SMEs, so search is both local (cluster, lake) and industry-specific.", sectors: "trading, commodities and SMEs", localCue: "the JLT clusters and DMCC", bilingual: true },
  "downtown-dubai": { name: "Downtown Dubai", country: "United Arab Emirates", region: "uae", context: "Downtown Dubai is premium and crowded: hotels, luxury retail and dining fight for the same high-intent visitor searches.", sectors: "luxury retail, hospitality and dining", localCue: "Burj Khalifa, Dubai Mall and the Boulevard", bilingual: true },
  deira: { name: "Deira", country: "United Arab Emirates", region: "uae", context: "Deira is trading-first: wholesale, gold, electronics and import-export firms whose buyers still start on Google.", sectors: "trading, wholesale and retail", localCue: "the Gold Souk, Naif and Al Rigga", bilingual: true },
  "bur-dubai": { name: "Bur Dubai", country: "United Arab Emirates", region: "uae", context: "Bur Dubai mixes heritage footfall with dense small-trader commerce, clinics and professional services.", sectors: "retail, trading and professional services", localCue: "Al Fahidi, Meena Bazaar and Khalid bin Waleed", bilingual: true },
  "jumeirah-village-circle": { name: "Jumeirah Village Circle", country: "United Arab Emirates", region: "uae", context: "JVC is residential and high-frequency: nurseries, clinics, salons and home services win or lose on Maps.", sectors: "family services, healthcare and retail", localCue: "JVC circles, Sports City edge and Districts", bilingual: true },
  difc: { name: "DIFC", country: "United Arab Emirates", region: "uae", context: "DIFC search is finance, legal and fintech, with buyers who check credentials, thought-leadership and office presence before they enquire.", sectors: "finance, legal and fintech", localCue: "Gate Avenue and the DIFC towers", bilingual: true },
  "dubai-silicon-oasis": { name: "Dubai Silicon Oasis", country: "United Arab Emirates", region: "uae", context: "DSO is a tech and electronics cluster where IT firms compete for both local service searches and national B2B terms.", sectors: "technology, IT and startups", localCue: "DSO headquarters and the residential precinct", bilingual: true },
  "dubai-media-city": { name: "Dubai Media City", country: "United Arab Emirates", region: "uae", context: "Media City is agencies pitching agencies: advertising, PR and production firms who need to look authoritative in search.", sectors: "media, marketing and creative services", localCue: "Media City and the neighbouring knowledge clusters", bilingual: true },
  "dubai-internet-city": { name: "Dubai Internet City", country: "United Arab Emirates", region: "uae", context: "Internet City is MENA tech: SaaS, IT services and global vendors competing for developer and enterprise search traffic.", sectors: "technology, SaaS and IT services", localCue: "DIC and the TECOM tech belt", bilingual: true },
  "al-quoz": { name: "Al Quoz", country: "United Arab Emirates", region: "uae", context: "Al Quoz mixes warehouses, workshops, galleries and showrooms, so search spans industrial and creative queries.", sectors: "manufacturing, warehousing and creative retail", localCue: "Al Quoz industrial 1–4 and Alserkal Avenue", bilingual: true },
  jumeirah: { name: "Jumeirah", country: "United Arab Emirates", region: "uae", context: "Jumeirah is premium residential: clinics, beauty, boutique retail and luxury services ranked by nearby, high-intent searches.", sectors: "healthcare, beauty and luxury retail", localCue: "Jumeirah Beach Road and Umm Suqeim", bilingual: true },
  "al-barsha": { name: "Al Barsha", country: "United Arab Emirates", region: "uae", context: "Al Barsha sits on Mall of the Emirates traffic plus hotels, clinics and schools, so local pack competition is constant.", sectors: "retail, hospitality and education", localCue: "Mall of the Emirates, Al Barsha 1 and 2", bilingual: true },
  tecom: { name: "TECOM", country: "United Arab Emirates", region: "uae", context: "TECOM clusters media, tech and education firms that need B2B visibility as much as local listings.", sectors: "media, technology and education", localCue: "the TECOM free-zone clusters", bilingual: true },
  "dubai-south": { name: "Dubai South", country: "United Arab Emirates", region: "uae", context: "Dubai South is logistics, aviation and new residential demand around Al Maktoum International and the Expo legacy sites.", sectors: "logistics, aviation and real estate", localCue: "Dubai South, Expo City and the aviation district", bilingual: true },
  "palm-jumeirah": { name: "Palm Jumeirah", country: "United Arab Emirates", region: "uae", context: "Palm Jumeirah is luxury hospitality, wellness and high-end property, with visitor searches that convert into bookings the same day.", sectors: "luxury hospitality, wellness and real estate", localCue: "the trunk, crescent and marina", bilingual: true },
  "motor-city": { name: "Motor City", country: "United Arab Emirates", region: "uae", context: "Motor City blends automotive businesses with a family community, so Maps and local service terms do most of the work.", sectors: "automotive, retail and family services", localCue: "Motor City and Sports City", bilingual: true },
  "yas-island": { name: "Yas Island", country: "United Arab Emirates", region: "uae", context: "Yas Island is entertainment and hotels: theme parks, F1, dining and leisure operators chasing visitor-intent search.", sectors: "tourism, entertainment and hospitality", localCue: "Yas Mall, the circuit and the hotels", bilingual: true },
  "al-reem-island": { name: "Al Reem Island", country: "United Arab Emirates", region: "uae", context: "Al Reem is dense residential-commercial: clinics, retail and professional services competing tower-to-tower.", sectors: "real estate, healthcare and retail", localCue: "Shams, Najmat and the Reem waterfront", bilingual: true },
  "khalifa-city": { name: "Khalifa City", country: "United Arab Emirates", region: "uae", context: "Khalifa City is family-services search: nurseries, clinics, salons and home providers for a spread-out community.", sectors: "family services, healthcare and retail", localCue: "Khalifa City A and B", bilingual: true },
  mussafah: { name: "Mussafah", country: "United Arab Emirates", region: "uae", context: "Mussafah is industrial Abu Dhabi: workshops, manufacturing and logistics firms whose buyers search by capability, not brand ads.", sectors: "manufacturing, automotive and logistics", localCue: "Mussafah industrial and ICAD", bilingual: true },
  "saadiyat-island": { name: "Saadiyat Island", country: "United Arab Emirates", region: "uae", context: "Saadiyat is culture and luxury: museums, resorts and high-end property competing for premium visitor and resident search.", sectors: "culture, luxury hospitality and real estate", localCue: "the Cultural District and Saadiyat Beach", bilingual: true },
  "abu-dhabi-corniche": { name: "Abu Dhabi Corniche", country: "United Arab Emirates", region: "uae", context: "The Corniche concentrates hotels, dining and clinics along a waterfront that lives and dies on Maps.", sectors: "hospitality, tourism and healthcare", localCue: "the Corniche hotels and breakwater", bilingual: true },
  uae: { name: "the UAE", country: "United Arab Emirates", region: "uae", context: "UAE-wide search means covering Dubai, Abu Dhabi, Sharjah and the northern emirates without treating them as one city.", sectors: "trade, tourism, professional services and ecommerce", localCue: "all seven emirates", bilingual: true },
  riyadh: { name: "Riyadh", country: "Saudi Arabia", region: "gcc", context: "Riyadh is the Kingdom's commercial centre: Vision 2030 spend, government-adjacent B2B and a young, mobile search audience.", sectors: "construction, finance, healthcare, retail and government services", localCue: "Olaya, KAFD, Al Nakheel and the Northern Ring", bilingual: true },
  jeddah: { name: "Jeddah", country: "Saudi Arabia", region: "gcc", context: "Jeddah is Red Sea trade, retail and tourism, with Arabic-first search that English-only sites miss.", sectors: "trading, retail, hospitality and tourism", localCue: "Al Rawdah, Al Hamra, Al Salamah and the Corniche", bilingual: true },
  khobar: { name: "Al Khobar", country: "Saudi Arabia", region: "gcc", context: "Al Khobar sits in the Eastern Province energy and services belt, with bilingual search across corporate and family demand.", sectors: "energy services, retail, healthcare and hospitality", localCue: "Corniche, Al Ulaya and the Khobar–Dhahran corridor", bilingual: true },
  dammam: { name: "Dammam", country: "Saudi Arabia", region: "gcc", context: "Dammam is port, logistics and Eastern Province industry, where B2B search and local services overlap.", sectors: "logistics, industry, retail and professional services", localCue: "the port, Al Faisaliyah and the Dammam–Khobar axis", bilingual: true },
  mecca: { name: "Makkah", country: "Saudi Arabia", region: "gcc", context: "Makkah search spikes around hospitality, transport and services for visitors, plus year-round resident demand.", sectors: "hospitality, transport, retail and healthcare", localCue: "the central districts and Ajyad", bilingual: true },
  medina: { name: "Madinah", country: "Saudi Arabia", region: "gcc", context: "Madinah combines visitor hospitality with resident services, so listings and Arabic content do heavy lifting.", sectors: "hospitality, healthcare and retail", localCue: "the central and first-ring districts", bilingual: true },
  "saudi-arabia": { name: "Saudi Arabia", country: "Saudi Arabia", region: "gcc", context: "Kingdom-wide SEO has to respect Arabic-first search, local platforms and city-level competition in Riyadh, Jeddah and the Eastern Province.", sectors: "Vision 2030 sectors, retail, construction and professional services", localCue: "Riyadh, Jeddah, Dammam and the holy cities", bilingual: true },
  doha: { name: "Doha", country: "Qatar", region: "gcc", context: "Doha buyers are mobile, bilingual and used to premium listings. Map pack and reputation content decide a lot of local work.", sectors: "hospitality, real estate, education, energy services and retail", localCue: "West Bay, Lusail, The Pearl and Al Sadd", bilingual: true },
  qatar: { name: "Qatar", country: "Qatar", region: "gcc", context: "Qatar search is concentrated in Doha but still needs Arabic and English coverage for residents and visitors.", sectors: "energy, hospitality, education and real estate", localCue: "Doha, Lusail and Al Wakrah", bilingual: true },
  "kuwait-city": { name: "Kuwait City", country: "Kuwait", region: "gcc", context: "Kuwait City search is bilingual and map-led, with Salmiya and Hawally carrying a large share of consumer queries.", sectors: "automotive, healthcare, retail and professional services", localCue: "Salmiya, Hawally, Sharq and Kuwait City proper", bilingual: true },
  kuwait: { name: "Kuwait", country: "Kuwait", region: "gcc", context: "Kuwait's search market is compact and competitive: a few well-run profiles can own a category in Arabic and English.", sectors: "automotive, healthcare, retail and finance", localCue: "Kuwait City, Salmiya and Hawally", bilingual: true },
  manama: { name: "Manama", country: "Bahrain", region: "gcc", context: "Manama mixes finance, hospitality and retail in a small geography, so local pack and bilingual content punch above their weight.", sectors: "finance, hospitality, retail and professional services", localCue: "Diplomatic Area, Seef and Juffair", bilingual: true },
  bahrain: { name: "Bahrain", country: "Bahrain", region: "gcc", context: "Bahrain is a small, high-connectivity market where national and local search often collapse into the same results.", sectors: "finance, hospitality and professional services", localCue: "Manama, Seef and Riffa", bilingual: true },
  muscat: { name: "Muscat", country: "Oman", region: "gcc", context: "Muscat search mixes tourism, government-adjacent services and resident demand along a long coastal city.", sectors: "tourism, logistics, healthcare and retail", localCue: "Qurum, Al Khuwair, Ruwi and Mutrah", bilingual: true },
  oman: { name: "Oman", country: "Oman", region: "gcc", context: "Omani search is Arabic-first with strong tourism queries on the coast and B2B around Muscat and Sohar.", sectors: "tourism, logistics and professional services", localCue: "Muscat, Sohar and Salalah", bilingual: true },
  amman: { name: "Amman", country: "Jordan", region: "gcc", context: "Amman is a regional services hub: tech, education, healthcare and professional firms competing in Arabic and English.", sectors: "tech, education, healthcare and professional services", localCue: "Abdali, Sweifieh, Jabal Amman and Khalda", bilingual: true },
  jordan: { name: "Jordan", country: "Jordan", region: "gcc", context: "Jordanian search is concentrated in Amman, with tourism queries adding a second demand layer.", sectors: "tech, tourism, education and professional services", localCue: "Amman, Aqaba and Petra-adjacent tourism", bilingual: true },
  gcc: { name: "the GCC", country: "Gulf Cooperation Council", region: "gcc", context: "GCC-wide visibility means city-level pages, Arabic and English, and listings that stay consistent across borders.", sectors: "trade, energy services, hospitality and professional services", localCue: "the six GCC states", bilingual: true },
  london: { name: "London", country: "United Kingdom", region: "uk", context: "London is one of the world's densest SEO markets: borough-level local pack plus national commercial terms in the same campaign.", sectors: "finance, professional services, hospitality, tech and property", localCue: "the City, Canary Wharf, Shoreditch, Westminster and zone 1–2", bilingual: false },
  manchester: { name: "Manchester", country: "United Kingdom", region: "uk", context: "Manchester search is competitive across media, tech, property and professional services, with strong local-pack demand in the city centre and suburbs.", sectors: "media, tech, property and professional services", localCue: "the Northern Quarter, Spinningfields and Salford", bilingual: false },
  birmingham: { name: "Birmingham", country: "United Kingdom", region: "uk", context: "Birmingham is a large regional market: professional services, retail, manufacturing and a growing tech scene.", sectors: "professional services, retail, manufacturing and tech", localCue: "the city centre, Jewellery Quarter and Edgbaston", bilingual: false },
  leeds: { name: "Leeds", country: "United Kingdom", region: "uk", context: "Leeds punches above its weight in legal, financial and digital services search.", sectors: "legal, finance, digital and professional services", localCue: "the business quarter and Headingly corridor", bilingual: false },
  glasgow: { name: "Glasgow", country: "United Kingdom", region: "uk", context: "Glasgow search mixes tourism, professional services and a large local-services market.", sectors: "tourism, professional services and retail", localCue: "the merchant city, west end and city centre", bilingual: false },
  edinburgh: { name: "Edinburgh", country: "United Kingdom", region: "uk", context: "Edinburgh combines finance, festivals, tourism and professional services in a compact, high-intent city.", sectors: "finance, tourism, education and professional services", localCue: "the New Town, Old Town and Leith", bilingual: false },
  bristol: { name: "Bristol", country: "United Kingdom", region: "uk", context: "Bristol's tech and creative scene sits on top of a strong local-services market.", sectors: "tech, creative, professional services and hospitality", localCue: "Temple Quarter, Clifton and the harbourside", bilingual: false },
  liverpool: { name: "Liverpool", country: "United Kingdom", region: "uk", context: "Liverpool search is tourism, culture, professional services and a dense local pack in the centre.", sectors: "tourism, culture, retail and professional services", localCue: "the waterfront, Baltic Triangle and city centre", bilingual: false },
  sheffield: { name: "Sheffield", country: "United Kingdom", region: "uk", context: "Sheffield mixes advanced manufacturing with a large local-services and student market.", sectors: "manufacturing, education and local services", localCue: "the city centre and Kelham Island", bilingual: false },
  nottingham: { name: "Nottingham", country: "United Kingdom", region: "uk", context: "Nottingham is a regional services city with strong student, retail and professional search demand.", sectors: "education, retail and professional services", localCue: "the city centre and the Lace Market", bilingual: false },
  uk: { name: "the United Kingdom", country: "United Kingdom", region: "uk", context: "UK-wide SEO has to handle national commercial terms and city-level local pack without cannibalising itself.", sectors: "professional services, ecommerce, finance and hospitality", localCue: "London and the core regional cities", bilingual: false },
  "new-york": { name: "New York", country: "United States", region: "us", context: "New York search is unforgiving: finance, media, SaaS and professional services bidding on expensive commercial terms.", sectors: "finance, media, professional services and SaaS", localCue: "Manhattan, Brooklyn and the wider metro", bilingual: false },
  "los-angeles": { name: "Los Angeles", country: "United States", region: "us", context: "Los Angeles spans entertainment, fashion, ecommerce and a huge local-services layer across many neighbourhoods.", sectors: "entertainment, fashion, tech and real estate", localCue: "DTLA, Santa Monica, Hollywood and the Westside", bilingual: false },
  chicago: { name: "Chicago", country: "United States", region: "us", context: "Chicago is Midwest headquarters territory: finance, logistics, healthcare and professional services.", sectors: "finance, logistics, healthcare and professional services", localCue: "the Loop, River North and the suburbs", bilingual: false },
  houston: { name: "Houston", country: "United States", region: "us", context: "Houston search is energy, healthcare and a vast metro of local services.", sectors: "energy, healthcare, aerospace and tech", localCue: "downtown, the Energy Corridor and the Medical Center", bilingual: false },
  dallas: { name: "Dallas", country: "United States", region: "us", context: "Dallas–Fort Worth is a fast-growing commercial market: finance, telecom, tech and real estate.", sectors: "finance, telecom, tech and real estate", localCue: "uptown, downtown and the northern suburbs", bilingual: false },
  "san-francisco": { name: "San Francisco", country: "United States", region: "us", context: "San Francisco and the Bay Area is SaaS, venture and enterprise tech competing for developer and buyer search.", sectors: "SaaS, venture, fintech and enterprise tech", localCue: "SoMa, FiDi and the Peninsula", bilingual: false },
  miami: { name: "Miami", country: "United States", region: "us", context: "Miami mixes finance, hospitality, real estate and a bilingual audience that search engines treat as two markets.", sectors: "finance, hospitality, real estate and logistics", localCue: "Brickell, Wynwood, Miami Beach and Coral Gables", bilingual: true },
  boston: { name: "Boston", country: "United States", region: "us", context: "Boston search is education, healthcare, biotech and professional services with high E-E-A-T expectations.", sectors: "education, healthcare, biotech and professional services", localCue: "Back Bay, Cambridge and the Seaport", bilingual: false },
  usa: { name: "the United States", country: "United States", region: "us", context: "US national SEO is city-plus-industry work: one template does not cover New York, Texas and California.", sectors: "SaaS, healthcare, professional services and ecommerce", localCue: "the major metros", bilingual: false },
  paris: { name: "Paris", country: "France", region: "eu", context: "Paris is luxury, hospitality, SaaS and professional services, with French-language search that English pages will not win.", sectors: "luxury, hospitality, SaaS and professional services", localCue: "the arrondissements and La Défense", bilingual: true },
  berlin: { name: "Berlin", country: "Germany", region: "eu", context: "Berlin is startups, SaaS and creative industries competing in German and English.", sectors: "startups, SaaS, creative and professional services", localCue: "Mitte, Kreuzberg and the startup districts", bilingual: true },
  amsterdam: { name: "Amsterdam", country: "Netherlands", region: "eu", context: "Amsterdam is a compact, international market: fintech, ecommerce and professional services with strong English search plus Dutch local pack.", sectors: "fintech, ecommerce and professional services", localCue: "the Zuidas, centre and Schiphol corridor", bilingual: true },
  madrid: { name: "Madrid", country: "Spain", region: "eu", context: "Madrid search is Spanish-first, spanning professional services, property and hospitality.", sectors: "professional services, property and hospitality", localCue: "Salamanca, the centre and the business districts", bilingual: true },
  dublin: { name: "Dublin", country: "Ireland", region: "eu", context: "Dublin is tech, finance and professional services, with IFSC and docklands firms competing for B2B terms.", sectors: "tech, finance and professional services", localCue: "IFSC, Docklands, Sandyford and the city centre", bilingual: false },
  europe: { name: "Europe", country: "Europe", region: "eu", context: "European SEO is multilingual and multi-country: hreflang, local proof and city pages, not one English site for the continent.", sectors: "SaaS, professional services, ecommerce and hospitality", localCue: "the core EU and UK markets", bilingual: true },
  sydney: { name: "Sydney", country: "Australia", region: "apac", context: "Sydney search is property, finance, professional services and a strong local-pack layer across the suburbs.", sectors: "property, finance, professional services and hospitality", localCue: "the CBD, North Sydney and the eastern suburbs", bilingual: false },
  melbourne: { name: "Melbourne", country: "Australia", region: "apac", context: "Melbourne mixes hospitality, professional services and property in a dense inner-city search market.", sectors: "hospitality, professional services and property", localCue: "the CBD, Southbank and inner north", bilingual: false },
  mumbai: { name: "Mumbai", country: "India", region: "apac", context: "Mumbai is finance, media, ecommerce and professional services with intense commercial-term competition.", sectors: "finance, media, ecommerce and professional services", localCue: "BKC, Lower Parel and the western suburbs", bilingual: true },
  bangalore: { name: "Bengaluru", country: "India", region: "apac", context: "Bengaluru is India's SaaS and IT capital, where category terms and hiring-related search both matter.", sectors: "SaaS, IT and startups", localCue: "Koramangala, Whitefield and the CBD", bilingual: true },
  singapore: { name: "Singapore", country: "Singapore", region: "apac", context: "Singapore is a small, expensive search market: finance, hospitality, SaaS and professional services with high commercial intent.", sectors: "finance, hospitality, SaaS and professional services", localCue: "CBD, Marina Bay and the heartland towns", bilingual: true },
  "hong-kong": { name: "Hong Kong", country: "Hong Kong", region: "apac", context: "Hong Kong search is bilingual and finance-heavy, with tight local geography and high commercial intent.", sectors: "finance, professional services and hospitality", localCue: "Central, Kowloon and the island", bilingual: true },
  toronto: { name: "Toronto", country: "Canada", region: "apac", context: "Toronto is Canada's commercial centre: finance, tech, professional services and a large local-services market.", sectors: "finance, tech and professional services", localCue: "downtown, North York and the GTA", bilingual: false },
  australia: { name: "Australia", country: "Australia", region: "apac", context: "Australian SEO is city-led: Sydney, Melbourne, Brisbane and Perth behave like separate markets.", sectors: "property, professional services, healthcare and ecommerce", localCue: "the state capitals", bilingual: false },
  india: { name: "India", country: "India", region: "apac", context: "India-wide SEO has to pick cities and languages, not spray one English site across a billion people.", sectors: "IT, SaaS, ecommerce and professional services", localCue: "Mumbai, Delhi NCR, Bengaluru, Hyderabad and Chennai", bilingual: true },
  canada: { name: "Canada", country: "Canada", region: "apac", context: "Canadian search splits between English metros and bilingual Québec, plus strong local-pack demand.", sectors: "finance, tech, professional services and ecommerce", localCue: "Toronto, Vancouver, Calgary and Montreal", bilingual: true },
};

const PLACE_KEYS = Object.keys(PLACES).sort((a, b) => b.length - a.length);

const INDUSTRIES: { key: string; v: Industry }[] = [
  { key: "real-estate", v: { label: "real estate", buyer: "buyers, tenants and investors", intent: "project, community and agent searches before a viewing", work: "project and community pages, listing structure, local proof and enquiry paths that match how people actually search for property" } },
  { key: "restaurants", v: { label: "restaurants", buyer: "diners", intent: "near-me and cuisine searches that turn into a table the same day", work: "Google Business Profile, menu terms, photos, reviews and the map pack" } },
  { key: "healthcare", v: { label: "healthcare", buyer: "patients and families", intent: "condition, clinic and specialist searches before they book", work: "treatment pages, medical schema, reviews and map visibility that a careful patient will trust" } },
  { key: "dental", v: { label: "dental clinics", buyer: "patients", intent: "treatment and 'dentist near me' searches", work: "treatment pages, map pack, reviews and appointment-led landing pages" } },
  { key: "dentists", v: { label: "dental practices", buyer: "patients", intent: "treatment and local dentist searches", work: "treatment pages, map pack and review strategy" } },
  { key: "law-firms", v: { label: "law firms", buyer: "clients with a live legal problem", intent: "practice-area searches with high commercial value", work: "practice-area pages, E-E-A-T content and enquiry forms that a serious client will use" } },
  { key: "legal", v: { label: "legal services", buyer: "clients researching counsel", intent: "practice-area and 'lawyer near me' searches", work: "practice pages, proof and local visibility" } },
  { key: "saas", v: { label: "SaaS", buyer: "operators comparing tools", intent: "category and alternative searches before a demo", work: "category pages, comparison content, technical SEO and AI-citation structure" } },
  { key: "ecommerce", v: { label: "ecommerce", buyer: "shoppers", intent: "product and category searches that should hit your store, not a marketplace", work: "product and category SEO, internal linking, schema and site speed" } },
  { key: "hotels", v: { label: "hotels", buyer: "guests", intent: "stay, location and amenity searches before they book", work: "property pages, map pack, review signals and booking-led content" } },
  { key: "hospitality", v: { label: "hospitality", buyer: "guests and diners", intent: "stay, eat and experience searches", work: "listings, offer pages and map visibility" } },
  { key: "fintech", v: { label: "fintech", buyer: "users and partners", intent: "product and trust searches in a regulated category", work: "product pages, trust content and technical SEO that search engines can parse" } },
  { key: "finance", v: { label: "financial services", buyer: "clients", intent: "advice, product and firm searches", work: "service pages, trust content and compliant, useful copy" } },
  { key: "education", v: { label: "education", buyer: "parents and students", intent: "programme, school and course searches", work: "programme pages, local proof and enquiry paths" } },
  { key: "construction", v: { label: "construction", buyer: "developers and procurement teams", intent: "capability and contractor searches before a tender", work: "project proof, service pages and B2B content that a procurement team will read" } },
  { key: "logistics", v: { label: "logistics", buyer: "shippers and operations managers", intent: "capability, lane and provider searches", work: "service pages, coverage proof and B2B lead capture" } },
  { key: "automotive", v: { label: "automotive", buyer: "car buyers", intent: "model, dealer and service searches", work: "model and dealer pages, local pack and comparison terms" } },
  { key: "insurance", v: { label: "insurance", buyer: "people comparing cover", intent: "policy and provider searches", work: "product pages, comparison intent and lead forms" } },
  { key: "clinics", v: { label: "clinics", buyer: "patients", intent: "specialty and near-me searches", work: "specialty pages, map pack and reviews" } },
  { key: "gyms", v: { label: "gyms and fitness", buyer: "members", intent: "gym near me and class searches", work: "listings, class pages and local pack" } },
  { key: "startups", v: { label: "startups", buyer: "founders and early customers", intent: "category and product searches while the brand is still unknown", work: "a tight set of pages, technical hygiene and content that can earn citations early" } },
  { key: "b2b", v: { label: "B2B companies", buyer: "buyers inside other businesses", intent: "vendor and solution searches with long cycles", work: "problem-led pages, proof and a pipeline from organic, not only ads" } },
  { key: "holiday-homes", v: { label: "holiday homes", buyer: "guests", intent: "area and dates searches before they book a stay", work: "listing pages, area content and map visibility" } },
  { key: "website-design", v: { label: "website design", buyer: "owners who need a site that can rank", intent: "design-and-SEO searches, not a pretty template", work: "structure, speed, content models and crawlable templates" } },
  { key: "social-media-design", v: { label: "social media design", buyer: "brands that need consistent creative", intent: "design-service searches that should convert to retainers", work: "service pages, proof and local or industry landing pages" } },
];

const INDUSTRY_GENERIC: Industry = {
  label: "local and commercial businesses",
  buyer: "owners and marketing leads",
  intent: "commercial and local searches that should reach you, not a competitor",
  work: "the technical, content and local work that actually moves rankings and enquiries",
};

const SERVICES: { key: string; v: ServiceKind }[] = [
  { key: "local-seo", v: { label: "local SEO", work: "Google Business Profile, citations, reviews and the map pack" } },
  { key: "google-maps", v: { label: "Google Maps SEO", work: "profile completeness, categories, photos, reviews and local relevance" } },
  { key: "technical-seo", v: { label: "technical SEO", work: "crawl, indexation, speed, structured data and the errors that quietly cap rankings" } },
  { key: "on-page-seo", v: { label: "on-page SEO", work: "titles, headings, internal links and copy that match how people search" } },
  { key: "ecommerce-seo", v: { label: "ecommerce SEO", work: "product and category architecture, schema and crawl control" } },
  { key: "link-building", v: { label: "link building", work: "mentions and links from places that actually move a market, not directory spam" } },
  { key: "content-marketing", v: { label: "content marketing", work: "pages and articles written to win the query and the enquiry, not to fill a blog" } },
  { key: "aeo", v: { label: "answer engine optimisation", work: "clear answers, structure and entities so AI overviews and PAA can cite you" } },
  { key: "geo", v: { label: "generative engine optimisation", work: "source-ready pages that ChatGPT, Perplexity and Gemini can quote" } },
  { key: "arabic-seo", v: { label: "Arabic SEO", work: "real Arabic keyword research, hreflang and pages written for Arabic searchers" } },
  { key: "ai-seo", v: { label: "AI search optimisation", work: "traditional rankings plus the structure AI engines need to cite you" } },
  { key: "shopify-seo", v: { label: "Shopify SEO", work: "theme, collection and product SEO that Shopify does not do for you" } },
  { key: "wordpress-seo", v: { label: "WordPress SEO", work: "core web vitals, schema, crawl and content architecture on WordPress" } },
  { key: "seo-audit", v: { label: "SEO audit", work: "a plain-English diagnosis of what is blocking rankings, with a sequence to fix it" } },
  { key: "website-design", v: { label: "website design", work: "a site built to rank and convert, not a brochure that search engines ignore" } },
  { key: "agency", v: { label: "SEO agency work", work: "strategy, technical, content, local and AI search under one programme" } },
];

const SERVICE_GENERIC: ServiceKind = {
  label: "SEO",
  work: "technical foundations, the right pages, local visibility where it matters, and content that can be cited",
};

export type PageFacts = {
  place: Place;
  industry: Industry;
  service: ServiceKind;
  keyword: string;
  slug: string;
};

function matchLongest(slug: string, keys: string[]): string | undefined {
  return keys.find((k) => slug === k || slug.endsWith(`-${k}`) || slug.includes(`-${k}-`) || slug.startsWith(`${k}-`));
}

function titleCase(s: string): string {
  return s.split(/[-_]/).filter(Boolean).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function fallbackPlace(page: KeywordPageConfig): Place {
  const servedRaw = page.areaServed?.split(",")[0]?.trim() || "";
  const generic = /^(worldwide|global|world|international)$/i.test(servedRaw);
  const name = generic
    ? "your market"
    : servedRaw || titleCase(page.slug.split("-").slice(-2).join(" ")) || "your market";
  const bilingual = /uae|dubai|saudi|riyadh|qatar|kuwait|bahrain|oman|jordan|arabic|mena|gcc/i.test(`${page.slug} ${page.areaServed ?? ""}`);
  return {
    name,
    country: generic ? "the markets you sell into" : (page.areaServed ?? name),
    region: bilingual ? "gcc" : "global",
    context: generic
      ? `${page.keyword} is a competitive category. Buyers already shortlist on Google and, increasingly, in AI answers, so a thin generic page will not win the enquiry.`
      : `${name} is a competitive search market. ${page.keyword} demand sits next to local and national competitors who already look established on Google.`,
    sectors: "local services and professional firms",
    localCue: generic ? "the cities you actually sell into" : name,
    bilingual,
  };
}

export function parseFacts(page: KeywordPageConfig): PageFacts {
  const slug = page.slug;
  const placeKey = matchLongest(slug, PLACE_KEYS);
  const place = (placeKey && PLACES[placeKey]) || fallbackPlace(page);
  const ind = INDUSTRIES.find((i) => slug.includes(i.key));
  const svc = SERVICES.find((s) => slug.includes(s.key)) || (slug.includes("agency") || slug.includes("company") || slug.includes("services") ? SERVICES.find((s) => s.key === "agency") : undefined);
  return {
    place,
    industry: ind?.v ?? INDUSTRY_GENERIC,
    service: svc?.v ?? SERVICE_GENERIC,
    keyword: page.keyword,
    slug,
  };
}

function countWords(...parts: string[]): number {
  return parts.join(" ").split(/\s+/).filter(Boolean).length;
}

function generateBlocks(page: KeywordPageConfig, f: PageFacts): LongBlock[] {
  const { place: p, industry: ind, service: svc, keyword } = f;
  const open = pick(page.slug, [
    `${p.name} does not reward the loudest advertiser. It rewards the business that is easy to find when ${ind.buyer} are already looking.`,
    `Most ${ind.label} firms in ${p.name} still treat search as a brochure. The ones winning enquiries treat it as a sales channel.`,
    `${p.context}`,
  ], 1);
  const bilingualBlock: LongBlock | null = p.bilingual
    ? {
        heading: `Arabic and English search in ${p.name}`,
        paragraphs: [
          `${p.name} is not a single-language market. ${ind.buyer} search in Arabic, English, or both, often on the same phone. A translated page is not Arabic SEO. We research the actual queries, set hreflang correctly, and write pages that a native searcher would trust.`,
          `Listings, categories and NAP details have to match in both languages. When they drift, Maps and organic results split your authority. We keep ${p.localCue} consistent so you do not look like two different businesses.`,
        ],
        h3s: [
          { title: "What we write in Arabic", text: `Service pages, FAQs and Google Business categories that match how people in ${p.name} actually type, not a machine dump of the English site.` },
          { title: "What we keep in English", text: `B2B, expatriate and visitor queries still run in English in ${p.country}. Those pages stay native English, with the same facts as the Arabic set.` },
        ],
      }
    : null;

  const blocks: LongBlock[] = [
    {
      heading: `Who ${keyword} is for in ${p.name}`,
      paragraphs: [
        `${open} ${p.context} The sectors that show up again and again are ${p.sectors}. If you sell into those, ${keyword} is not a vanity URL. It is the page ${ind.buyer} should land on.`,
        `We work this as an agency engagement, not a course. You do not need to learn crawl budgets or schema. You need a site and a profile that ${ind.buyer} can find, trust and contact. That is the job.`,
      ],
      h3s: [
        { title: `What ${ind.buyer} type before they call`, text: `${ind.intent}. If those queries hit a thin homepage, they bounce to whoever already ranks in ${p.localCue}.` },
        { title: "What we will not do", text: "We will not stuff this page with a DIY lesson. Rankings come from the work on your site, your listings and your proof, not from teaching you to be an SEO." },
      ],
    },
    {
      heading: `What we actually do for ${keyword}`,
      paragraphs: [
        `The service behind this page is ${svc.label}: ${svc.work}. For ${ind.label} in ${p.name}, that usually means ${ind.work}. We sequence it so you see the early, local wins while the slower authority work compounds.`,
        `Every engagement starts with a free audit. You see what is blocking you in ${p.name}, who already owns the terms you want, and a written sequence. No lock-in contract. If the work is not worth doing, we will say so.`,
      ],
      h3s: [
        { title: "Technical and on-page", text: `We fix the crawl, speed and page issues that stop ${p.name} pages from ranking, then align titles, headings and internal links to the queries you can realistically win.` },
        { title: "Local and AI search", text: `Where the intent is local, we work the map pack around ${p.localCue}. Where people now ask ChatGPT or Google's AI overview, we structure answers so your brand can be cited. Neither is a guarantee. Both are now part of a serious ${svc.label} programme.` },
      ],
      h4s: [
        { title: "Delivered in the first month", text: "Audit, tracking, listing hygiene, the worst technical defects, and a keyword map tied to pages you already have or need." },
        { title: "Delivered as the programme runs", text: "New or rebuilt pages, ongoing content, authority work, and a monthly view of rankings, traffic and enquiries, not vanity scores." },
      ],
    },
    {
      heading: `The competitive picture in ${p.name}`,
      paragraphs: [
        `${p.name} is not an empty SERP. ${ind.label} competitors already occupy the pack, the ads and, increasingly, the AI answers. ${p.context} Competing on the same generic homepage will not move you.`,
        `We pick the terms you can win: neighbourhood, service and problem queries around ${p.localCue}, then the harder commercial terms once the site can support them. That is slower to brag about and faster to produce calls.`,
      ],
      h3s: [
        { title: `Why ${p.localCue} matters`, text: `People still search with a place in mind. A page that names ${p.name} and the districts they know will beat a generic national page for those clicks.` },
        { title: "Paid ads are not the strategy", text: `Ads can fill a gap while organic builds. They should not be the only reason ${ind.buyer} find you. When the bid rises, you still need the organic and map presence.` },
      ],
    },
    {
      heading: `How an engagement for ${ind.label} in ${p.name} runs`,
      paragraphs: [
        `Week one is diagnosis. We look at your site, your Google Business Profile if you have one, your competitors in ${p.name}, and the queries ${ind.buyer} already use. You get a written plan, not a slide deck of buzzwords.`,
        `Then we work in a monthly rhythm: fix, publish, measure. You speak to the same team. Reports show rankings and enquiries for ${keyword}, not a 40-page PDF nobody reads. If something is not working, we change it.`,
      ],
      h3s: [
        { title: "Who does the writing", text: `Page copy is written for ${p.name} and ${ind.label}, in British English, and in Arabic where the market needs it. We do not spin the same paragraph across a hundred cities and call it unique.` },
        { title: "What you approve", text: "You approve new public pages and claims. We will not invent awards, client logos or ranking guarantees to dress the site." },
      ],
    },
    {
      heading: `Timelines, reporting and what we will not promise`,
      paragraphs: [
        `Local and long-tail terms in ${p.name} can move within a few months. Competitive head terms take longer. Anyone who sells you page-one in 30 days for ${keyword} is selling a story. We treat rankings as objectives and report the work against them.`,
        `You will see what we changed, what Google did, and what enquiries followed. If the opportunity is weak, the audit will say that before you spend a month of fees.`,
      ],
    },
    {
      heading: `Related SEODXB work you can use from ${p.name}`,
      paragraphs: [
        `This page is the ${keyword} offer. Most clients also need a clean technical base, local visibility and, now, AEO and GEO so AI answers do not skip them. Those sit on our On-Page SEO, Technical SEO, Local SEO, AEO and GEO service pages, and they link back here so the site reads as one agency, not a pile of doorways.`,
        `If you are comparing cities, we cover ${p.country} with the same model: a real page per market, a real audit, and a programme you can leave monthly. Start with the free audit if you want the diagnosis before the retainer.`,
      ],
    },
  ];

  if (bilingualBlock) {
    const insertAt = 3 + (hash(page.slug) % 2);
    blocks.splice(insertAt, 0, bilingualBlock);
  }

  const v = hash(page.slug) % blocks.length;
  return [...blocks.slice(v), ...blocks.slice(0, v)];
}

function extraFaqs(page: KeywordPageConfig, f: PageFacts): { q: string; a: string }[] {
  const { place: p, industry: ind, keyword } = f;
  const all = [
    {
      q: `Do you work with ${ind.label} businesses in ${p.name}, or only Dubai?`,
      a: `We are based in Dubai and we work this market remotely every week, including ${p.name}. ${p.context} The audit is the same: your site, your listings, your competitors. If we cannot help, we say so.`,
    },
    {
      q: `Is ${keyword} a package or a custom programme?`,
      a: `It is a programme built around ${ind.work} in ${p.name}, not a generic package with the city name swapped. Scope follows the audit. You can leave monthly.`,
    },
    {
      q: `Will you guarantee first-page rankings for ${keyword}?`,
      a: `No. Nobody honest can. We set ranking and enquiry objectives for ${p.name}, do the work, and report against them. Guarantees are a sales tactic, not an SEO method.`,
    },
    {
      q: `How do you handle reviews and the map pack in ${p.name}?`,
      a: `If ${ind.buyer} search on Maps, we treat the profile as a ranking asset: categories, services, photos, posts and a review path that does not break Google's rules. Fake reviews are out.`,
    },
  ];
  const have = new Set((page.faqs || []).map((x) => x.q.toLowerCase()));
  return all.filter((x) => !have.has(x.q.toLowerCase())).slice(0, 3);
}

function whyItems(f: PageFacts): { title: string; desc: string }[] {
  const { place: p, industry: ind, keyword } = f;
  return [
    { title: `${p.name}, not a generic template`, desc: `Copy, listings and internal links are built around ${p.localCue} and ${ind.label}, not a city-name find-and-replace.` },
    { title: "SEO, AEO and GEO together", desc: `Google rankings still matter. So do AI overviews and ChatGPT citations. We treat ${keyword} as both.` },
    { title: "No lock-in contract", desc: "Monthly rolling work. You stay because the reporting and the enquiries make sense." },
    { title: "Plain reporting", desc: `Rankings, organic traffic and enquiries for ${p.name}, sent without a 40-page vanity PDF.` },
    { title: "Written for humans", desc: `Pages are written to convert ${ind.buyer}, in British English, and in Arabic where ${p.name} needs it.` },
    { title: "Free SEO audit first", desc: `You see the gaps in ${p.name} before you pay for a month of work.` },
  ];
}

export function resolvePageCopy(page: KeywordPageConfig): {
  blocks: LongBlock[];
  faqs: { q: string; a: string }[];
  why: { title: string; desc: string }[];
  facts: PageFacts;
  uniqueWords: number;
} {
  const facts = parseFacts(page);
  const generated = generateBlocks(page, facts);
  const existingHead = new Set((page.extendedContent || []).map((b) => b.heading.toLowerCase()));
  const extra = generated.filter((b) => !existingHead.has(b.heading.toLowerCase()));
  const blocks: LongBlock[] = [
    ...(page.extendedContent || []).map((b) => ({ heading: b.heading, paragraphs: b.paragraphs })),
    ...extra,
  ];
  const faqs = [...(page.faqs || []), ...extraFaqs(page, facts)];
  const why = whyItems(facts);
  const uniqueWords = countWords(
    page.keyword, page.badge, page.h1, page.intro, page.featuresTitle ?? "", page.featuresSubtitle ?? "",
    ...(page.features || []).flatMap((f) => [f.title, f.desc]),
    page.ctaTitle, page.ctaDesc,
    ...blocks.flatMap((b) => [b.heading, ...b.paragraphs, ...(b.h3s || []).flatMap((h) => [h.title, h.text]), ...(b.h4s || []).flatMap((h) => [h.title, h.text])]),
    ...faqs.flatMap((fq) => [fq.q, fq.a]),
    ...why.flatMap((w) => [w.title, w.desc]),
  );
  return { blocks, faqs, why, facts, uniqueWords };
}

export function longformHtml(page: KeywordPageConfig, escape: (s: string) => string): string {
  const { blocks, faqs, why, facts } = resolvePageCopy(page);
  const h: string[] = [];
  h.push(`<article>`);
  h.push(`<h1>${escape(page.h1)}</h1>`);
  h.push(`<p>${escape(page.intro)}</p>`);
  h.push(`<h2>${escape(page.featuresTitle ?? "What is included")}</h2>`);
  for (const f of page.features) {
    h.push(`<h3>${escape(f.title)}</h3><p>${escape(f.desc)}</p>`);
  }
  for (const b of blocks) {
    h.push(`<h2>${escape(b.heading)}</h2>`);
    for (const p of b.paragraphs) h.push(`<p>${escape(p)}</p>`);
    for (const s of b.h3s || []) h.push(`<h3>${escape(s.title)}</h3><p>${escape(s.text)}</p>`);
    for (const s of b.h4s || []) h.push(`<h4>${escape(s.title)}</h4><p>${escape(s.text)}</p>`);
  }
  h.push(`<h2>Why ${escape(facts.place.name)} businesses hire SEODXB</h2>`);
  for (const w of why) h.push(`<h3>${escape(w.title)}</h3><p>${escape(w.desc)}</p>`);
  h.push(`<h2>${escape(page.faqTitle ?? "Frequently asked questions")}</h2>`);
  for (const f of faqs) h.push(`<h3>${escape(f.q)}</h3><p>${escape(f.a)}</p>`);
  h.push(`<h2>Related SEO services</h2><ul>`);
  h.push(`<li><a href="https://seodxb.com/on-page-seo">On-Page SEO</a></li>`);
  h.push(`<li><a href="https://seodxb.com/technical-seo">Technical SEO</a></li>`);
  h.push(`<li><a href="https://seodxb.com/aeo">AEO</a></li>`);
  h.push(`<li><a href="https://seodxb.com/geo">GEO</a></li>`);
  h.push(`<li><a href="https://seodxb.com/seo-agency-dubai">SEO Agency Dubai</a></li>`);
  h.push(`<li><a href="https://seodxb.com/contact">Contact SEODXB</a></li>`);
  h.push(`</ul></article>`);
  return h.join("\n");
}
