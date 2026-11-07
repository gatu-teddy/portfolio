/* =========================================================
   EDIT YOUR CONTENT HERE — everything on the page comes from DATA.
   ========================================================= */
const DATA = {
  name: "Teddy Gatu",
  initials: "TG",
  location: "Nairobi, KE",
  headline: "One developer to design, build and ship your product.",
  subline: "Sounds too good to be true? Take a look around.",
  resumeUrl: "#",
  links: [
    { label: "Email me", href: "mailto:gatuteddy@gmail.com", primary: true },
    { label: "GitHub", href: "https://github.com/gatu-teddy" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],

  stats: {
    shipped: 5, goal: 8,
    yearsExp: 3, clients: 40,
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
      color: "#3B82F6",
      summary: "B2B tutoring platform built zero-to-one. Closed three enterprise clients through direct outreach and grew to over 1,000 active users. Full product ownership — discovery, build, and go-to-market.",
      stack: ["Next.js", "TypeScript", "Supabase", "Claude API", "Tailwind"],
      live: "#",
      code: "https://github.com/gatu-teddy/tutoriiNew",
    },
    {
      name: "Fyn",
      category: "Automation · SaaS",
      status: "shipped",
      when: "Live — 100k sites",
      color: "#22C55E",
      summary: "Automated website builder at scale. Built the pipeline that generated 100,000 business websites for 35 enrolled companies. FynChat handles ongoing client communication across all accounts automatically.",
      stack: ["Next.js", "Node.js", "Automation", "Claude API", "Supabase"],
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
      summary: "Full car marketplace with escrow for cross-border vehicle exports. Buyer and seller flows, admin dashboard, and a secure escrow layer for high-value transactions. The expanded play — Fuselage Mods is the motorcycle vertical inside a larger platform.",
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
      category: "Web Design",
      status: "shipped",
      when: "Dubai, 2026",
      color: "#C9A84C",
      summary: "Dubai real estate operating system. Premium dark-theme redesign — built for a high-end agency managing listings, leads, and agent workflows. Stripe/Linear quality tier visual design.",
      stack: ["HTML", "CSS", "JavaScript", "Plus Jakarta Sans"],
      live: "#",
      code: "https://github.com/gatu-teddy/PremierBlueprintRedesign",
    },
    {
      name: "The Nail DXB",
      category: "Web Design",
      status: "shipped",
      when: "Dubai, 2026",
      color: "#F472B6",
      summary: "Redesign for a Dubai nail parlour. Clean, optimised single-page site with strong visual identity — built to perform on mobile where salon bookings happen.",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "#",
      code: "https://github.com/gatu-teddy/Thenaildxb-redesign",
    },
  ],

  experience: [
    {
      role: "Product Manager & Developer",
      org: "Fyn",
      period: "2025 — Now",
      tags: ["Automation", "Next.js", "Claude API", "Scale"],
      note: "Built the automation pipeline generating 100,000+ business websites for 35 enrolled companies. FynChat handles client communication at scale.",
    },
    {
      role: "Founder & Product Manager",
      org: "Tutorii",
      period: "2024 — 2025",
      tags: ["Ed-tech", "B2B", "Zero-to-one", "Claude API"],
      note: "Zero-to-one B2B tutoring platform. Closed 3 enterprise clients, grew to 1,000+ active users through direct sales and product-led growth.",
    },
    {
      role: "Full-stack Developer",
      org: "JobPeak",
      period: "2025",
      tags: ["Analytics", "AI matching", "React", "Node.js"],
      note: "Job market analytics platform with AI-powered role matching and real-time hiring trend insights.",
    },
    {
      role: "Full-stack Developer",
      org: "Fuselage Mods",
      period: "2026 — Now",
      tags: ["Marketplace", "JDM", "Next.js", "Supabase"],
      note: "Building a JDM motorcycle parts marketplace for specific-model buyers. Currently in active development.",
    },
  ],
  education: [
    { role: "BSc Computer Science", org: "University", period: "2018 — 2022", tags: ["Algorithms", "HCI"], note: "Final project: offline-first field data app." },
  ],

  skills: {
    Frontend: [["React / Next.js", 92], ["TypeScript", 88], ["CSS / Tailwind", 90], ["Motion & interaction", 78]],
    Backend:  [["Node.js", 84], ["PostgreSQL / Supabase", 80], ["REST & GraphQL", 78], ["Auth & security", 70]],
    Tools:    [["Git & CI", 86], ["Figma", 75], ["Testing", 72], ["Cloud deploys", 76]],
  },
};

/* ========================================================= */

const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const VIEWS = {
  projects:   { title: "Project Workspace", tabs: ["Overview", "Ed-tech", "Analytics", "Marketplace", "Automation · SaaS", "Web Design"] },
  experience: { title: "Career Timeline",   tabs: ["Experience", "Education"] },
  skills:     { title: "Skill Insights",    tabs: ["Frontend", "Backend", "Tools"] },
};
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
  if (view === "skills") el.innerHTML = skillsHTML(tab);
  if (view === "projects" && tab === "Overview") drawChart();
}

/* ---------- projects ---------- */
function taskHTML(p) {
  const i = DATA.projects.indexOf(p);
  return `<button class="task" data-project="${i}">
    <div><div class="name">${esc(p.name)}</div><div class="who">${esc(p.category)} · ${esc(p.when)}</div></div>
    <span class="thumb" style="background:${esc(p.color)}"></span>
  </button>`;
}

function overviewHTML() {
  const s = DATA.stats;
  const pct = Math.round((s.shipped / s.goal) * 100);
  const total = DATA.activity.reduce((a, d) => a + d.commits, 0);
  const inProg = DATA.projects.filter((p) => p.status === "progress");
  const shipped = DATA.projects.filter((p) => p.status === "shipped");
  return `
  <div class="grid dash">
    <div>
      <div class="grid stats">
        <div class="card lift">
          <h3>Projects Shipped</h3>
          <div class="big">${s.shipped}<small>of ${s.goal} goal</small></div>
          <div class="bar"><span style="width:${pct}%"></span></div>
          <div class="fine right">${s.goal - s.shipped} to go (${pct}%)</div>
        </div>
        <div class="card">
          <h3>At a glance</h3>
          <div class="kv"><span>Years experience</span><b>${s.yearsExp}</b></div>
          <div class="kv"><span>Clients &amp; businesses</span><b>${s.clients}</b></div>
          <div class="kv"><span>Commits (12 mo)</span><b>${total.toLocaleString()}</b></div>
        </div>
      </div>
      <div class="card chart-card">
        <div class="chart-head"><h3>Monthly commits</h3><span class="fine">Last 12 months</span></div>
        <svg class="chart" id="chart" role="img" aria-label="Monthly commits over the last 12 months"></svg>
        <div class="tooltip" id="tooltip"></div>
      </div>
    </div>
    <div class="card">
      <h3>Project Board</h3>
      <div class="board">
        <div><div class="col-title"><span class="status-dot blue"></span>In Progress</div>${inProg.map(taskHTML).join("")}</div>
        <div><div class="col-title"><span class="status-dot green"></span>Shipped</div>${shipped.map(taskHTML).join("")}</div>
      </div>
    </div>
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

/* ---------- skills ---------- */
function skillsHTML(group) {
  const list = DATA.skills[group] || [];
  return `<div class="card lift" style="max-width:560px">
    <h3>${esc(group)} proficiency</h3>
    ${list.map(([n, v]) => `<div class="meter"><div class="meter-top"><span>${esc(n)}</span><span>${v}%</span></div><div class="bar"><span style="width:${v}%"></span></div></div>`).join("")}
  </div>`;
}

/* ---------- drawer ---------- */
function openDrawer(p) {
  $("#drawer-content").innerHTML = `
    <span class="thumb" style="display:inline-block;width:40px;height:40px;border-radius:10px;background:${esc(p.color)}"></span>
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
  const seg = e.target.closest(".segmented button");
  if (seg) return setView(seg.dataset.view);
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
