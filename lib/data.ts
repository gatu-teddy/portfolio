/* =========================================================
   EDIT YOUR CONTENT HERE — everything on the page comes from DATA.
   ========================================================= */

export type Project = {
  name: string;
  category: string;
  status: "shipped" | "progress";
  when: string;
  color: string;
  icon?: string;
  logo?: string;
  summary: string;
  stack: string[];
  live: string;
  code: string;
};

export type TimelineRow = {
  role: string;
  org: string;
  period: string;
  tags: string[];
  note: string;
};

type Data = {
  name: string;
  initials: string;
  location: string;
  headline: string;
  subline: string;
  resumeUrl: string;
  links: { label: string; href: string; primary?: boolean }[];
  projects: Project[];
  experience: TimelineRow[];
  education: TimelineRow[];
  skills: Record<string, string[]>;
};

// Prefix for files in /public, so they resolve when the site is served from a sub-path.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const DATA: Data = {
  name: "Teddy Gatu",
  initials: "TG",
  location: "Dubai, UAE",
  headline: "Product manager who also ships the code.",
  subline: "Sounds too good to be true? Take a look around.",
  resumeUrl: "#",
  links: [
    { label: "Email me", href: "mailto:gatuteddy@gmail.com", primary: true },
    { label: "GitHub", href: "https://github.com/gatu-teddy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/t-gatu" },
  ],

  projects: [
    {
      name: "Tutorii",
      category: "Ed-tech",
      status: "shipped",
      when: "Live — 1,000+ users",
      color: "#39FF14",
      icon: "tutorii-icon.png",
      logo: "tutorii-logo.webp",
      summary: "EdTech content platform with an AI tutor, quiz engine and WhatsApp notifications. Originally built to introduce UAE culture and practices to expats and overseas workers; made the product decision to reposition it as an onboarding tool for company L&D — it was then adopted by two visa agencies and a labour and hiring office. Full zero-to-one ownership: discovery, build, go-to-market, and pivot.",
      stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "Twilio", "Tailwind"],
      live: "#",
      code: "https://github.com/gatu-teddy/tutoriiNew",
    },
    {
      name: "Fyn",
      category: "Automation · SaaS",
      status: "shipped",
      when: "~100k sites · 250 contacts/day",
      color: "#22C55E",
      summary: "Automated outbound pipeline: n8n and Cloudflare Workers scrape business data from Google Maps, generate a custom website per business type from a set template, then trigger FynChat — which opened unique WhatsApp conversations with up to 250 businesses a day over a one-month campaign. FynChat also accepted suggestions from businesses and triggered the workers to edit their site template accordingly. Campaign was slowed after the month to control costs.",
      stack: ["n8n", "Cloudflare Workers", "Google Maps API", "WhatsApp Business API", "Next.js", "Supabase"],
      live: "#",
      code: "#",
    },
    {
      name: "JobPeak",
      category: "AI · Assessment",
      status: "progress",
      when: "Live — growing traffic",
      color: "#ffffff",
      icon: "jobpeak-icon.png",
      logo: "jobpeak-logo.svg",
      summary: "Qualification platform for paid AI review work. Instead of a CV, applicants sit one Cognition Test — 50 specialty and 30 behavioural questions, 78% to pass — after a free 10-question practice test. Multiple-choice is scored against fixed answers; open-ended answers go to two independent, isolated AI graders that treat the text as data, never instructions, with humans reviewing disagreements and flags. A/B testing the landing and payment pages lifted paid test purchases ~20%.",
      stack: ["React", "Vite", "FastAPI", "Supabase", "Claude API"],
      live: "#",
      code: "https://github.com/gatu-teddy/wira",
    },
    {
      name: "Fuselage Mods",
      category: "Marketplace",
      status: "progress",
      when: "In development",
      color: "#F59E0B",
      summary: "Marketplace for JDM motorcycle parts and modifications. Purpose-built for the specific-model seeker — no generic inventory, no guesswork. The right part, for the right bike.",
      stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Framer Motion"],
      live: "#",
      code: "https://github.com/gatu-teddy/fuselage-mods",
    },
    {
      name: "Fuselage",
      category: "Marketplace",
      status: "progress",
      when: "In development",
      color: "#E84545",
      summary: "Two-sided marketplace connecting vehicle importers with buyers across MENA and sub-Saharan Africa. Led strategy, brand positioning, and technical architecture from zero to one. Fuselage Mods is the JDM motorcycle vertical inside the same platform.",
      stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
      live: "#",
      code: "https://github.com/gatu-teddy/fuselage",
    },
    {
      name: "Content Engine",
      category: "Automation · SaaS",
      status: "shipped",
      when: "Live — Sicail",
      color: "#6366F1",
      summary: "Multi-brand AI-powered content creation and publishing system for Sicail. Runs on n8n workflows with Claude for text and Nano Banana for image generation. Auto-publishes to X, Instagram, Facebook, LinkedIn, TikTok, and YouTube Shorts.",
      stack: ["n8n", "React", "Claude API", "PostgreSQL", "Docker", "S3/R2"],
      live: "#",
      code: "https://github.com/gatu-teddy/content-engine",
    },
    {
      name: "Premier Blueprint",
      category: "Ed-tech",
      status: "shipped",
      when: "59 unique visitors/day",
      color: "#C9A84C",
      summary: "EdTech platform for real estate agents moving between the UK and UAE markets. Paid document library covering key regulatory and market differences between the two. Averaged 59 unique visitors per day (Cloudflare analytics).",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "#",
      code: "https://github.com/gatu-teddy/PremierBlueprintRedesign",
    },
    {
      name: "The Nail DXB",
      category: "Web Design",
      status: "shipped",
      when: "Dubai, 2026",
      color: "#F472B6",
      summary: "Booking web app for a Dubai nail and beauty spa. Clients browse the catalogue and book appointments before visiting; a calendar confirms the slot on both the client's device and the owner's, who then manually logs it on their end. Built around the constraint that the business had no backend booking system.",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "#",
      code: "https://github.com/gatu-teddy/Thenaildxb-redesign",
    },
  ],

  experience: [
    {
      role: "Product Manager",
      org: "Galco FZE",
      period: "May 2025 — Nov 2026",
      tags: ["Roadmapping", "Cross-functional teams", "Claude API", "n8n", "Supabase"],
      note: "Owned the roadmap, backlog and delivery for 5 live platforms. Directed outsourced teams across development, marketing, SEO and Meta advertising. Shipped Fynchat — a Claude API agent that talks to UAE merchants, triggers site changes they ask for, and escalates complex requests to a person.",
    },
    {
      role: "Frontend Engineer",
      org: "Kairospect Corporate Services",
      period: "Aug 2023 — Feb 2025",
      tags: ["React.js", "Next.js", "SEO", "Testing"],
      note: "Engineered high-performance, SEO-optimised web applications using React.js and Next.js. Led frontend architecture improvements; collaborated with designers and backend engineers across multiple client products.",
    },
    {
      role: "Infrastructure & Support Engineer",
      org: "Infoney Solutions",
      period: "Jan 2019 — Aug 2023",
      tags: ["Networking", "Databases", "Server ops"],
      note: "Maintained and optimised enterprise network infrastructure, databases and server configurations. Led technical onboarding programmes and provided tiered support.",
    },
    {
      role: "Mobile Application Developer",
      org: "Safaricom Limited",
      period: "Apr 2015 — Dec 2018",
      tags: ["Android", "Java", "Kotlin", "React Native"],
      note: "Designed and delivered Android applications in Java and Kotlin. Participated across the full product lifecycle: kickoffs, design reviews, requirement gathering, QA and stakeholder handover.",
    },
  ],
  education: [
    {
      role: "BSc Applied Programming Technology",
      org: "USIU-Africa",
      period: "2015 — 2023",
      tags: ["Part-time", "Nairobi"],
      note: "United States International University Africa. Evening / part-time alongside full-time engineering roles.",
    },
    {
      role: "Certifications",
      org: "Cisco · Scrum.org · Google",
      period: "2024 — In progress",
      tags: ["Cybersecurity", "PSPO I", "Product Management"],
      note: "Introduction to Cybersecurity (Cisco, 2024). PSPO I — Professional Scrum Product Owner (Scrum.org, in progress). Google Product Management Certificate (Coursera / Google, in progress).",
    },
  ],

  skills: {
    "Product": [
      "Product Management",
      "Product Ownership",
      "Roadmapping",
      "Backlog Management",
      "User Stories & Acceptance Criteria",
      "Business Analysis",
      "Requirements Gathering",
      "Competitive Analysis",
      "Agile · Scrum · Kanban",
      "Stakeholder Management",
      "UI/UX Collaboration",
      "Release Coordination",
      "Technical Product Management",
      "Zero-to-one builds",
      "B2B sales & go-to-market",
    ],
    "Engineering": [
      "Solution Architecture",
      "React.js / Next.js",
      "TypeScript",
      "Supabase / PostgreSQL",
      "Claude API & AI integration",
      "n8n workflow automation",
      "REST & webhook integrations",
      "Twilio / WhatsApp Business API",
      "AWS SES",
      "Vercel · Railway · Cloudflare R2",
      "SDLC · Software Testing",
      "Git / GitHub",
    ],
    "Tools & Platforms": [
      "Jira",
      "Notion",
      "Slack",
      "Figma",
      "Framer",
      "Memberstack",
      "Meta Business API",
      "Claude Code",
    ],
  },
};
