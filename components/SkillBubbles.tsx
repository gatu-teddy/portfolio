"use client";

import { useEffect, useRef, type RefObject } from "react";
import { DATA } from "@/lib/data";

// Slow take-off, fast arrival: reads as the card pulling the bubble in.
const EASE_PULL_IN = "cubic-bezier(0.6, 0, 0.85, 0.5)";
const EASE_CUBIC_OUT = "cubic-bezier(0.33, 1, 0.68, 1)";

const GROUPS = Object.entries(DATA.skills);
const REST_OPACITY = 0.48; // keep in sync with .float-bubble in globals.css

// Text that sits straight on the page background. Bubbles steer around these.
// (Cards are solid and the bubbles float behind them, so cards need no entry here.)
const KEEP_CLEAR = [
  ".topbar .brand", ".topnav",
  "#hero h1", "#hero .sub",
  ".stage-top", ".view-switch", ".skills-col > .segmented", ".exp-subtabs",
  ".contact h2", ".contact .sub", ".contact-actions", ".footer",
].join(", ");
// A bubble let out of a card comes to rest clear of these too, so it isn't left hidden behind one.
const CARDS = ".proj-card, .skill-card, .card";
const CLEARANCE = 14; // px of breathing room around text
const EDGE = 8; // px kept between a bubble and the edge of the screen

const FLY_MS = 650; // flight time of one bubble into its card
const STAGGER_MS = 16; // delay between one bubble taking off and the next
const RETURN_MS = 700; // flight time back out
const CARD_SETTLE_MS = 700; // wait for a skills card to slide up before its bubbles fly in
const RETRY_MS = 400; // how often to look again for a card that isn't on screen yet

type Box = { left: number; top: number; right: number; bottom: number };

type Bubble = {
  el: HTMLSpanElement;
  skill: string;
  group: number;
  // top-left corner on screen, and size
  x: number; y: number; w: number; h: number;
  vx: number; vy: number;
  heading: number; // radians, wanders slowly
  speed: number; // px per second
  // floating: moved by the frame loop. flying: on its way in or out. in: parked inside its card.
  state: "floating" | "flying" | "in";
  anim: Animation | null;
};

// out: floating. pending: waiting for its card. in: flying in or landed.
type GroupStatus = "out" | "pending" | "in";

const isShown = (el: Element) =>
  typeof el.checkVisibility !== "function" || el.checkVisibility({ visibilityProperty: true });

// On-screen boxes of everything matching `selector`, grown by `pad`.
function boxes(selector: string, pad: number): Box[] {
  const vw = window.innerWidth, vh = window.innerHeight;
  const out: Box[] = [];
  document.querySelectorAll(selector).forEach((el) => {
    const r = el.getBoundingClientRect();
    if (!r.width || r.bottom < 0 || r.top > vh || r.right < 0 || r.left > vw || !isShown(el)) return;
    out.push({ left: r.left - pad, top: r.top - pad, right: r.right + pad, bottom: r.bottom + pad });
  });
  return out;
}

const hits = (x: number, y: number, w: number, h: number, k: Box) =>
  x + w > k.left && x < k.right && y + h > k.top && y < k.bottom;

// A random place on screen for the bubble that touches none of `avoid`.
function freeSpot(b: Bubble, avoid: Box[]): [number, number] {
  const maxX = Math.max(EDGE, window.innerWidth - b.w - EDGE);
  const maxY = Math.max(EDGE, window.innerHeight - b.h - EDGE);
  let x = EDGE, y = EDGE;
  for (let attempt = 0; attempt < 60; attempt++) {
    x = EDGE + Math.random() * (maxX - EDGE);
    y = EDGE + Math.random() * (maxY - EDGE);
    if (!avoid.some((k) => hits(x, y, b.w, b.h, k))) break;
  }
  return [x, y];
}

const place = (b: Bubble) => { b.el.style.translate = `${b.x}px ${b.y}px`; };

// Stop a bubble's running animation but keep it exactly as it looks on screen,
// so the next animation starts from there.
function freeze(b: Bubble) {
  if (!b.anim) return;
  try { b.anim.commitStyles(); } catch { /* element not rendered */ }
  b.anim.cancel();
  b.anim = null;
}

// One frame of floating: wander, stay on screen, get out of the way of text and of each other.
function step(bubbles: Bubble[], dt: number) {
  const floating = bubbles.filter((b) => b.state === "floating");
  if (!floating.length) return;
  const blocked = boxes(KEEP_CLEAR, CLEARANCE);
  const vw = window.innerWidth, vh = window.innerHeight;
  const steer = Math.min(1, 1.5 * dt);
  const shove = 1 - Math.exp(-12 * dt); // share of an overlap undone this frame

  floating.forEach((b) => {
    b.heading += (Math.random() - 0.5) * 1.2 * dt;
    b.vx += (Math.cos(b.heading) * b.speed - b.vx) * steer;
    b.vy += (Math.sin(b.heading) * b.speed - b.vy) * steer;
    b.x += b.vx * dt;
    b.y += b.vy * dt;

    // Pushed out of any text it is touching, by the shortest way out.
    blocked.forEach((k) => {
      if (!hits(b.x, b.y, b.w, b.h, k)) return;
      const exits = [
        { d: b.x + b.w - k.left, dx: -1, dy: 0 },
        { d: k.right - b.x, dx: 1, dy: 0 },
        { d: b.y + b.h - k.top, dx: 0, dy: -1 },
        { d: k.bottom - b.y, dx: 0, dy: 1 },
      ];
      const out = exits.reduce((a, e) => (e.d < a.d ? e : a));
      b.x += out.dx * out.d * shove;
      b.y += out.dy * out.d * shove;
      b.heading = Math.atan2(out.dy, out.dx) + (Math.random() - 0.5); // and head away from it
    });

    // Turned back at the edges of the screen.
    const maxX = vw - b.w - EDGE, maxY = vh - b.h - EDGE;
    if (b.x < EDGE) { b.x += (EDGE - b.x) * shove; b.heading = (Math.random() - 0.5); }
    else if (b.x > maxX) { b.x += (maxX - b.x) * shove; b.heading = Math.PI + (Math.random() - 0.5); }
    if (b.y < EDGE) { b.y += (EDGE - b.y) * shove; b.heading = Math.PI / 2 + (Math.random() - 0.5); }
    else if (b.y > maxY) { b.y += (maxY - b.y) * shove; b.heading = -Math.PI / 2 + (Math.random() - 0.5); }
  });

  // Nudged apart where two overlap.
  const nudge = (1 - Math.exp(-4 * dt)) / 2;
  for (let i = 0; i < floating.length; i++) {
    for (let j = i + 1; j < floating.length; j++) {
      const a = floating[i], c = floating[j];
      const ox = Math.min(a.x + a.w, c.x + c.w) - Math.max(a.x, c.x) + 6;
      const oy = Math.min(a.y + a.h, c.y + c.h) - Math.max(a.y, c.y) + 6;
      if (ox <= 0 || oy <= 0) continue;
      if (ox < oy) {
        const dir = a.x < c.x ? -1 : 1;
        a.x += dir * ox * nudge; c.x -= dir * ox * nudge;
      } else {
        const dir = a.y < c.y ? -1 : 1;
        a.y += dir * oy * nudge; c.y -= dir * oy * nudge;
      }
    }
  }

  floating.forEach(place);
}

/**
 * Faint skill labels floating behind the whole site. They stay on screen as the
 * page scrolls and steer around text.
 *
 * The first `pulledCount` skill groups are called into the deck at `targetRef`,
 * one group per card: a group's bubbles fly over the page and land on their own
 * chips once that group's card is on screen, while the other groups keep
 * floating. `onLanded(group)` fires when a group is in. When `pulledCount` drops,
 * the groups no longer wanted fly back out (`onReleased(group)`) and float again.
 */
export default function SkillBubbles({
  pulledCount,
  firstDelay,
  targetRef,
  onLanded,
  onReleased,
}: {
  pulledCount: number;
  firstDelay: number; // wait before the first group flies, while the skills deck slides in
  targetRef: RefObject<HTMLElement | null>;
  onLanded: (group: number) => void;
  onReleased: (group: number) => void;
}) {
  const bubblesRef = useRef<Bubble[]>([]);
  const backRef = useRef<HTMLDivElement | null>(null); // behind the page: floating
  const frontRef = useRef<HTMLDivElement | null>(null); // in front of the page: flying
  const statusRef = useRef<GroupStatus[]>(GROUPS.map(() => "out"));
  const startTimers = useRef<(ReturnType<typeof setTimeout> | undefined)[]>([]);
  const doneTimers = useRef<(ReturnType<typeof setTimeout> | undefined)[]>([]);
  const callbacks = useRef({ onLanded, onReleased });
  useEffect(() => { callbacks.current = { onLanded, onReleased }; });

  // Create the bubbles once, on the client (positions are random), and keep them floating.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const makeLayer = (cls: string) => {
      const layer = document.createElement("div");
      layer.className = cls;
      layer.setAttribute("aria-hidden", "true");
      document.body.prepend(layer);
      return layer;
    };
    const front = (frontRef.current = makeLayer("bubble-layer front"));
    const back = (backRef.current = makeLayer("bubble-layer"));

    const bubbles = (bubblesRef.current = GROUPS.flatMap(([, skills], group) =>
      skills.map((skill): Bubble => {
        const el = document.createElement("span");
        el.className = "float-bubble";
        el.textContent = skill;
        back.appendChild(el);
        return {
          el, skill, group,
          x: 0, y: 0, w: el.offsetWidth, h: el.offsetHeight,
          vx: 0, vy: 0,
          heading: Math.random() * Math.PI * 2,
          speed: 9 + Math.random() * 11,
          state: "floating",
          anim: null,
        };
      })
    ));

    const blocked = boxes(KEEP_CLEAR, CLEARANCE);
    bubbles.forEach((b) => {
      [b.x, b.y] = freeSpot(b, blocked);
      place(b);
    });

    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      // dt is capped so a background tab coming back doesn't fling everything across the screen
      step(bubbles, Math.min(0.05, (now - last) / 1000));
      last = now;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const starts = startTimers.current, dones = doneTimers.current;
    return () => {
      cancelAnimationFrame(frame);
      starts.forEach(clearTimeout);
      dones.forEach(clearTimeout);
      statusRef.current = GROUPS.map(() => "out");
      bubbles.forEach((b) => b.anim?.cancel());
      bubblesRef.current = [];
      backRef.current = frontRef.current = null;
      back.remove();
      front.remove();
    };
  }, []);

  useEffect(() => {
    const status = statusRef.current;
    const cardOf = (g: number) => targetRef.current?.querySelector<HTMLElement>(`[data-group="${g}"]`) ?? null;
    const centred = (b: Bubble, r: DOMRect) => `${r.left + r.width / 2 - b.w / 2}px ${r.top + r.height / 2 - b.h / 2}px`;

    // Send group g's bubbles into its card.
    const pull = (g: number) => {
      const mine = bubblesRef.current.filter((b) => b.group === g);
      const card = cardOf(g);
      const front = frontRef.current;
      // No bubbles (reduced motion): just show the skills.
      if (!mine.length || !card || !front) {
        status[g] = "in";
        callbacks.current.onLanded(g);
        return;
      }
      // Keep floating until the card can actually be seen (on phones it sits further down the page).
      const cr = card.getBoundingClientRect();
      const inView = cr.width > 0 && cr.top < window.innerHeight - 80 && cr.bottom > 80 && isShown(card);
      if (!inView) {
        startTimers.current[g] = setTimeout(() => pull(g), RETRY_MS);
        return;
      }

      status[g] = "in";
      const isFront = card.dataset.active === "true";
      const chips = new Map<string, DOMRect>();
      if (isFront) {
        card.querySelectorAll<HTMLElement>("[data-skill]").forEach((c) => chips.set(c.dataset.skill!, c.getBoundingClientRect()));
      }
      const title = (card.querySelector("h3") ?? card).getBoundingClientRect();

      mine.forEach((b, i) => {
        freeze(b);
        b.state = "flying";
        front.appendChild(b.el); // in front of the page, so it is seen crossing over the card
        const chip = chips.get(b.skill);
        b.anim = b.el.animate(
          chip
            ? // Lands on its chip, growing to the chip's size and turning solid.
              { translate: centred(b, chip), scale: chip.width / b.w, opacity: 1 }
            : // Its card is tucked behind another: shrink away into the card's title strip.
              { translate: centred(b, title), scale: 0.2, opacity: 0 },
          { duration: FLY_MS, delay: i * STAGGER_MS, easing: EASE_PULL_IN, fill: "forwards" }
        );
      });

      // The whole group has landed: reveal the real chips and fade the stand-ins out.
      doneTimers.current[g] = setTimeout(() => {
        callbacks.current.onLanded(g);
        mine.forEach((b) => {
          freeze(b);
          b.state = "in";
          b.anim = b.el.animate({ opacity: 0 }, { duration: 250, easing: "ease-out", fill: "forwards" });
        });
      }, FLY_MS + mine.length * STAGGER_MS);
    };

    // Let group g's bubbles back out to float.
    const release = (g: number) => {
      clearTimeout(startTimers.current[g]);
      clearTimeout(doneTimers.current[g]);
      const was = status[g];
      status[g] = "out";
      if (was === "pending") return; // never left
      callbacks.current.onReleased(g);

      const card = cardOf(g);
      const cardVisible = !!card && card.getBoundingClientRect().width > 0;
      const chips = new Map<string, DOMRect>();
      if (cardVisible) {
        card.querySelectorAll<HTMLElement>("[data-skill]").forEach((c) => chips.set(c.dataset.skill!, c.getBoundingClientRect()));
      }
      const avoid = [...boxes(KEEP_CLEAR, CLEARANCE), ...boxes(CARDS, 6)];

      bubblesRef.current.forEach((b) => {
        if (b.group !== g || b.state === "floating") return;
        const landed = b.state === "in";
        freeze(b);
        // A landed bubble is invisible by now, so line it up with its chip as the chip is
        // at this moment: it then comes out of the card wherever the card has got to.
        const chip = chips.get(b.skill);
        if (landed && chip) {
          b.el.style.translate = centred(b, chip);
          b.el.style.scale = String(chip.width / b.w);
          b.el.style.opacity = "0.9";
        }
        b.state = "flying";
        const [x, y] = freeSpot(b, avoid);
        const anim = b.el.animate(
          { translate: `${x}px ${y}px`, scale: 1, opacity: REST_OPACITY },
          { duration: RETURN_MS, easing: EASE_CUBIC_OUT, fill: "forwards" }
        );
        b.anim = anim;
        anim.onfinish = () => {
          if (b.anim !== anim) return; // superseded by a newer animation
          b.x = x; b.y = y; b.vx = b.vy = 0;
          place(b);
          b.el.style.scale = b.el.style.opacity = "";
          anim.cancel();
          b.anim = null;
          backRef.current?.appendChild(b.el); // back behind the page
          b.state = "floating";
        };
      });
    };

    GROUPS.forEach((_, g) => {
      const wanted = g < pulledCount;
      if (wanted && status[g] === "out") {
        status[g] = "pending";
        startTimers.current[g] = setTimeout(() => pull(g), g === 0 ? firstDelay : CARD_SETTLE_MS);
      } else if (!wanted && status[g] !== "out") {
        release(g);
      }
    });
  }, [pulledCount, firstDelay, targetRef]);

  return null;
}
