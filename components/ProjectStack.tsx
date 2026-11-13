"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { BASE_PATH, DATA, type Project } from "@/lib/data";

export const STEP = 0.75; // viewport heights of scrolling per card
const ENTER_FROM_VH = 60; // how far below its resting place a card starts, in vh

// Where card `i` sits when the stack has been scrolled `raw` cards deep.
function cardStyle(i: number, raw: number, count: number): CSSProperties {
  const delta = i - raw; // positive = still to come, 0 = on top, negative = stacked behind
  const side = i % 2 === 0 ? 1 : -1;
  let tx = 0, ty = 0, rot = 0, scale = 1, opacity = 1, z = i;
  let rise = 0; // extra downward offset in vh, used while a card is waiting or sliding in

  if (delta >= 1) {
    // Not yet shown: waiting below
    rise = ENTER_FROM_VH; scale = 0.92; opacity = 0;
  } else if (delta > 0) {
    // Entering: slides up over the current card as delta goes 1 → 0.
    // Must sit above the card it is replacing (which uses count * 2 - i below).
    const t = 1 - delta;
    // It turns solid almost immediately so the two cards never blend into each other.
    rise = ENTER_FROM_VH * (1 - t); scale = 0.92 + 0.08 * t; opacity = Math.min(1, t * 6); z = count * 3;
  } else if (delta > -1) {
    // Leaving the top spot, tilting into the stack
    const t = -delta;
    rot = side * t * 5; tx = side * t * 22;
    ty = -t * 10; scale = 1 - t * 0.05; z = count * 2 - i;
  } else {
    // Fully stacked
    const depth = Math.round(-delta);
    rot = side * Math.min(depth * 4, 12);
    tx = side * Math.min(depth * 20, 55);
    ty = -depth * 10; scale = Math.max(0.8, 1 - depth * 0.05);
    opacity = Math.max(0, 1 - depth * 0.18); z = count - depth;
  }

  return {
    transform: `translateY(calc(${ty}px + ${rise}vh)) translateX(${tx}px) rotate(${rot}deg) scale(${scale})`,
    opacity,
    zIndex: z,
  };
}

export default function ProjectStack() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = DATA.projects.length;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const update = () => {
      const scrolled = -wrap.getBoundingClientRect().top;
      const raw = Math.max(0, scrolled / (window.innerHeight * STEP));
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const s = cardStyle(i, raw, count);
        card.style.transform = s.transform as string;
        card.style.opacity = String(s.opacity);
        card.style.zIndex = String(s.zIndex);
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  return (
    <div className="scroll-stack-wrap" ref={wrapRef} style={{ height: `calc(${count * STEP + 1} * 100vh)` }}>
      <div className="scroll-stack-sticky">
        {DATA.projects.map((p, i) => (
          <ProjectCard
            key={p.name}
            project={p}
            // Rendered at the "not scrolled yet" position so the first paint is already correct.
            style={cardStyle(i, 0, count)}
            ref={(el) => { cardRefs.current[i] = el; }}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project: p,
  style,
  ref,
}: {
  project: Project;
  style: CSSProperties;
  ref: (el: HTMLDivElement | null) => void;
}) {
  const shipped = p.status === "shipped";
  const hasLive = p.live !== "#";
  const hasCode = p.code !== "#";

  return (
    <div className="proj-card" ref={ref} style={style}>
      <div className="proj-banner" style={{ background: p.color }}>
        {p.logo ? (
          <img src={`${BASE_PATH}/${p.logo}`} alt={p.name} className="proj-banner-logo" />
        ) : p.icon ? (
          <img src={`${BASE_PATH}/${p.icon}`} alt="" className="proj-banner-icon" />
        ) : null}
      </div>
      <div className="proj-body">
        <div className="proj-title-row">
          <div>
            <h3>{p.name}</h3>
            <span className="proj-meta">{p.category} · {p.when}</span>
          </div>
          <span className={shipped ? "pill mint" : "pill lav"}>{shipped ? "Shipped" : "In progress"}</span>
        </div>
        <p className="proj-summary">{p.summary}</p>
        <div className="chips">
          {p.stack.map((s) => (
            <span key={s} className="tag chip">{s}</span>
          ))}
        </div>
        {(hasLive || hasCode) && (
          <div className="proj-links">
            {hasLive && <a className="btn" href={p.live} target="_blank" rel="noopener">Live site ↗</a>}
            {hasCode && <a className="btn" href={p.code} target="_blank" rel="noopener">Code ↗</a>}
          </div>
        )}
      </div>
    </div>
  );
}
