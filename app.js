/* =========================================================
   EDIT YOUR CONTENT HERE — everything on the page comes from DATA.
   ========================================================= */
const DATA = {
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

  stats: {
    shipped: 5, goal: 8,
    yearsExp: 8, clients: 40,
  },

  // Monthly activity (commits) for the chart — last 12 months
  activity: [
    { m: "Dec", commits: 42,  projects: 2 },
    { m: "Jan", commits: 58,  projects: 2 },
    { m: "Feb", commits: 51,  projects: 3 },
    { m: "Mar", commits: 77,  projects: 3 },
    { m: "Apr", commits: 69,  projects: 2 },
    { m: "May", commits: 94,  projects: 4 },
    { m: "Jun", commits: 88,  projects: 3 },
    { m: "Jul", commits: 131, projects: 4 },
    { m: "Aug", commits: 118, projects: 3 },
    { m: "Sep", commits: 142, projects: 5 },
    { m: "Oct", commits: 156, projects: 4 },
    { m: "Nov", commits: 163, projects: 4 },
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
      category: "Analytics",
      status: "progress",
      when: "Live — growing traffic",
      color: "#8B5CF6",
      summary: "Job market analytics platform giving candidates and recruiters real-time insight into hiring trends, role demand, and salary signals across industries and locations.",
      stack: ["React", "Node.js", "PostgreSQL", "AI matching"],
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

/* ========================================================= */

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const VIEWS = {
  projects:   { title: "Project Workspace", tabs: ["Overview", "Ed-tech", "Analytics", "Marketplace", "Automation · SaaS", "Web Design"] },
  experience: { title: "Career Timeline",   tabs: ["Experience", "Education"] },
};
const SKILL_TABS = Object.keys(DATA.skills);
let skillTab = SKILL_TABS[0];
let state = { view: "projects", tab: "Overview" };

/* ---------- static bits ---------- */
function initStatic() {
  $("#brand-name").textContent = DATA.name;
  $("#headline").textContent = DATA.headline;
  $("#subline").textContent = DATA.subline;
  $("#avatar").textContent = DATA.initials;
  $("#location-pill").textContent = DATA.location;
  $("#resume-link").href = DATA.resumeUrl;
  $("#footer-text").textContent = `© ${new Date().getFullYear()} ${DATA.name}. Built by hand.`;
  $("#contact-actions").innerHTML = DATA.links
    .map((l) => `<a class="btn ${l.primary ? "primary" : ""}" href="${esc(l.href)}" ${l.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${esc(l.label)}</a>`)
    .join("");
}

/* ---------- navigation ---------- */
function setView(view, tab) {
  state = { view, tab: tab || VIEWS[view].tabs[0] };
  document.querySelectorAll(".segmented button").forEach((b) => b.setAttribute("aria-selected", b.dataset.view === view));
  $("#view-title").textContent = VIEWS[view].title;
  $("#subtabs").innerHTML = VIEWS[view].tabs
    .map((t) => `<button class="${t === state.tab ? "active" : ""}" data-tab="${esc(t)}">${esc(t)}</button>`)
    .join("");
  render();
}

function render() {
  const el = $("#view");
  el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
  const { view, tab } = state;
  if (view === "projects") el.innerHTML = tab === "Overview" ? overviewHTML() : projectListHTML(tab);
  if (view === "experience") el.innerHTML = tableHTML(tab === "Education" ? DATA.education : DATA.experience);
}

/* ---------- projects ---------- */
function taskHTML(p) {
  const i = DATA.projects.indexOf(p);
  return `<button class="task" data-project="${i}">
    <div><div class="name">${esc(p.name)}</div><div class="who">${esc(p.category)} · ${esc(p.when)}</div></div>
    <span class="thumb" style="background:${esc(p.color)}">${p.icon ? `<img src="${esc(p.icon)}" alt="" style="width:100%;height:100%;object-fit:contain;padding:3px;border-radius:inherit">` : ""}</span>
  </button>`;
}

function overviewHTML() {
  return `<div class="gallery">
    ${DATA.projects.map((p, i) => `
      <button class="gallery-card" data-project="${i}">
        <div class="gallery-thumb" style="background:${esc(p.color)}">
          ${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.name)}" class="gallery-img">` : ""}
          ${p.icon ? `<img src="${esc(p.icon)}" alt="" class="gallery-icon">` : ""}
        </div>
        <div class="gallery-info">
          <div class="gallery-row">
            <span class="gallery-name">${esc(p.name)}</span>
            <span class="pill ${p.status === "shipped" ? "mint" : "lav"}" style="font-size:11px;flex-shrink:0">${p.status === "shipped" ? "Shipped" : "In progress"}</span>
          </div>
          <div class="gallery-desc">${esc(p.category)} · ${esc(p.when)}</div>
        </div>
      </button>
    `).join("")}
  </div>`;
}

function projectListHTML(cat) {
  const list = DATA.projects.filter((p) => p.category === cat);
  if (!list.length) return `<p class="fine">Nothing here yet — check back soon.</p>`;
  return `<div class="board" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${list.map(taskHTML).join("")}</div>`;
}

/* ---------- chart (single series area, crosshair + tooltip) ---------- */
function drawChart() {
  const svg = $("#chart"), tip = $("#tooltip");
  const W = svg.clientWidth || 600, H = 190;
  const pad = { t: 10, r: 8, b: 22, l: 30 };
  svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
  const d = DATA.activity;
  const max = Math.ceil(Math.max(...d.map((x) => x.commits)) / 50) * 50;
  const x = (i) => pad.l + (i * (W - pad.l - pad.r)) / (d.length - 1);
  const y = (v) => pad.t + (1 - v / max) * (H - pad.t - pad.b);
  const pts = d.map((p, i) => [x(i), y(p.commits)]);
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join("");
  const area = `${line}L${x(d.length - 1)},${y(0)}L${x(0)},${y(0)}Z`;
  const ticks = [0, max / 2, max];

  svg.innerHTML = `
    <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f9a2f" stop-opacity=".22"/><stop offset="1" stop-color="#3f9a2f" stop-opacity="0"/>
    </linearGradient></defs>
    ${ticks.map((t) => `<line class="grid-line" x1="${pad.l}" x2="${W - pad.r}" y1="${y(t)}" y2="${y(t)}"/><text class="axis-label" x="${pad.l - 6}" y="${y(t) + 3}" text-anchor="end">${t}</text>`).join("")}
    ${d.map((p, i) => (W < 480 && i % 2) ? "" : `<text class="axis-label" x="${x(i)}" y="${H - 4}" text-anchor="middle">${p.m}</text>`).join("")}
    <path class="area" d="${area}"/>
    <path class="line" d="${line}" pathLength="1" style="stroke-dasharray:1;stroke-dashoffset:1;animation:draw 1.2s .2s ease forwards"/>
    <line class="crosshair" id="xh" y1="${pad.t}" y2="${y(0)}" visibility="hidden"/>
    <circle class="dot" id="xdot" r="5" visibility="hidden"/>
    <rect id="hit" x="${pad.l}" y="0" width="${W - pad.l - pad.r}" height="${H}" fill="transparent"/>`;

  if (!document.getElementById("draw-kf")) {
    const st = document.createElement("style");
    st.id = "draw-kf"; st.textContent = "@keyframes draw{to{stroke-dashoffset:0}}";
    document.head.appendChild(st);
  }

  const xh = $("#xh", svg), dot = $("#xdot", svg), hit = $("#hit", svg);
  const show = (evt) => {
    const r = svg.getBoundingClientRect();
    const px = ((evt.clientX - r.left) / r.width) * W;
    const i = Math.max(0, Math.min(d.length - 1, Math.round(((px - pad.l) / (W - pad.l - pad.r)) * (d.length - 1))));
    const [cx, cy] = pts[i];
    xh.setAttribute("x1", cx); xh.setAttribute("x2", cx); xh.setAttribute("visibility", "visible");
    dot.setAttribute("cx", cx); dot.setAttribute("cy", cy); dot.setAttribute("visibility", "visible");
    const prev = i ? d[i - 1].commits : null;
    const delta = prev == null ? "—" : `${d[i].commits - prev >= 0 ? "+" : ""}${d[i].commits - prev}`;
    tip.innerHTML = `<div class="t-title">${d[i].m}</div>
      <div class="t-row"><span>Commits</span><b>${d[i].commits}</b></div>
      <div class="t-row"><span>Active projects</span><b>${d[i].projects}</b></div>
      <div class="t-row"><span>vs prev. month</span><b>${delta}</b></div>`;
    const card = svg.parentElement.getBoundingClientRect();
    const left = Math.max(70, Math.min(card.width - 70, r.left - card.left + (cx / W) * r.width));
    tip.style.left = `${left}px`;
    tip.style.top = `${r.top - card.top + (cy / H) * r.height}px`;
    tip.classList.add("show");
  };
  const hide = () => { tip.classList.remove("show"); xh.setAttribute("visibility", "hidden"); dot.setAttribute("visibility", "hidden"); };
  hit.addEventListener("pointermove", show);
  hit.addEventListener("pointerdown", show);
  hit.addEventListener("pointerleave", hide);
}

/* ---------- experience ---------- */
function tableHTML(rows) {
  return `<div class="card" style="overflow-x:auto"><table class="table">
    <thead><tr><th>Role</th><th>Where</th><th>What I did</th><th>When</th></tr></thead>
    <tbody>${rows.map((r) => `<tr>
      <td>${esc(r.role)}<div>${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div></td>
      <td>${esc(r.org)}</td><td style="color:var(--ink-2)">${esc(r.note)}</td><td class="fine" style="white-space:nowrap">${esc(r.period)}</td>
    </tr>`).join("")}</tbody></table></div>`;
}

/* ---------- skills (right-hand card) ---------- */
function setSkillTab(group) {
  skillTab = group;
  $("#skill-tabs").innerHTML = SKILL_TABS
    .map((t) => `<button role="tab" aria-selected="${t === group}" class="${t === group ? "active" : ""}" data-skill="${esc(t)}">${esc(t)}</button>`)
    .join("");
  const el = $("#skills-view");
  el.style.animation = "none"; void el.offsetWidth; el.style.animation = "";
  const list = DATA.skills[group] || [];
  el.innerHTML = `<div class="card lift">
    <h3>${esc(group)} <span class="fine">· ${list.length}</span></h3>
    <div class="chips">${list.map((n) => `<span class="tag chip">${esc(n)}</span>`).join("")}</div>
  </div>`;
}

/* ---------- drawer ---------- */
function openDrawer(p) {
  $("#drawer-content").innerHTML = `
    ${p.logo
      ? `<div class="drawer-logo-wrap" style="background:${esc(p.color)}"><img src="${esc(p.logo)}" alt="${esc(p.name)} logo" class="drawer-logo"></div>`
      : `<span class="thumb" style="display:inline-block;width:40px;height:40px;border-radius:10px;background:${esc(p.color)}"></span>`
    }
    <h3 id="drawer-title">${esc(p.name)}</h3>
    <div class="meta-row" style="margin:6px 0 10px">
      <span class="pill ${p.status === "shipped" ? "mint" : "lav"}">${p.status === "shipped" ? "Shipped" : "In progress"}</span>
      <span class="pill peach">${esc(p.category)}</span><span class="fine">${esc(p.when)}</span>
    </div>
    <p>${esc(p.summary)}</p>
    <div>${p.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
    <div class="links">
      <a class="btn primary" href="${esc(p.live)}" target="_blank" rel="noopener">View live</a>
      <a class="btn" href="${esc(p.code)}" target="_blank" rel="noopener">Source</a>
    </div>`;
  $("#drawer").classList.add("open");
  $("#drawer").setAttribute("aria-hidden", "false");
  $("#scrim").hidden = false;
  $("#drawer-close").focus();
}
function closeDrawer() {
  $("#drawer").classList.remove("open");
  $("#drawer").setAttribute("aria-hidden", "true");
  $("#scrim").hidden = true;
}

/* ---------- events ---------- */
document.addEventListener("click", (e) => {
  const seg = e.target.closest(".segmented button[data-view]");
  if (seg) return setView(seg.dataset.view);
  const sk = e.target.closest("[data-skill]");
  if (sk) return setSkillTab(sk.dataset.skill);
  const sub = e.target.closest("#subtabs button");
  if (sub) return setView(state.view, sub.dataset.tab);
  const task = e.target.closest("[data-project]");
  if (task) return openDrawer(DATA.projects[+task.dataset.project]);
  if (e.target.closest("#drawer-close") || e.target.id === "scrim") closeDrawer();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });
let rt;
window.addEventListener("resize", () => {
  clearTimeout(rt);
  rt = setTimeout(() => { if (state.view === "projects" && state.tab === "Overview") drawChart(); }, 150);
});

initStatic();
setView("projects");
setSkillTab(skillTab);
