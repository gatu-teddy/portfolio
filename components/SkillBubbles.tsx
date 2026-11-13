"use client";

import { useEffect, useRef, type RefObject } from "react";
import { DATA } from "@/lib/data";

const EASE_SINE_IN_OUT = "cubic-bezier(0.37, 0, 0.63, 1)";
// Slow take-off, fast arrival: reads as the card pulling the bubble in.
const EASE_PULL_IN = "cubic-bezier(0.6, 0, 0.85, 0.5)";
const EASE_CUBIC_OUT = "cubic-bezier(0.33, 1, 0.68, 1)";

type Bubble = {
  el: HTMLSpanElement;
  skill: string;
  group: string;
  driftX: number;
  driftY: number;
  dur: number; // ms
  anim: Animation | null;
};

const REST_OPACITY = 0.48; // keep in sync with .float-bubble in globals.css

// Text the bubbles must never drift across: headline, subline, the pills and
// the Projects/Experience switch, plus the top bar.
const KEEP_CLEAR = "#hero h1, #hero .sub, .stage-top, .view-switch, .topbar .brand, .topnav";
const CLEARANCE = 16; // px of breathing room around those

type Box = { left: number; top: number; right: number; bottom: number };

// Give every bubble a random home in the layer where neither it nor its drift
// path touches a keep-clear area. A bubble with nowhere to go is hidden.
function placeBubbles(layer: HTMLElement, bubbles: Bubble[]) {
  const origin = layer.getBoundingClientRect();
  const blocked: Box[] = [...document.querySelectorAll(KEEP_CLEAR)].map((el) => {
    const r = el.getBoundingClientRect();
    return {
      left: r.left - origin.left - CLEARANCE,
      top: r.top - origin.top - CLEARANCE,
      right: r.right - origin.left + CLEARANCE,
      bottom: r.bottom - origin.top + CLEARANCE,
    };
  });

  bubbles.forEach((b) => {
    b.el.hidden = false;
    const w = b.el.offsetWidth;
    const h = b.el.offsetHeight;
    for (let attempt = 0; attempt < 60; attempt++) {
      const left = (0.02 + Math.random() * 0.9) * origin.width;
      const top = (0.02 + Math.random() * 0.9) * origin.height;
      // Everything the bubble covers while drifting from home to home + drift.
      const swept: Box = {
        left: left + Math.min(0, b.driftX),
        top: top + Math.min(0, b.driftY),
        right: left + w + Math.max(0, b.driftX),
        bottom: top + h + Math.max(0, b.driftY),
      };
      const clear = blocked.every(
        (k) => swept.right < k.left || swept.left > k.right || swept.bottom < k.top || swept.top > k.bottom
      );
      if (clear) {
        b.el.style.left = left + "px";
        b.el.style.top = top + "px";
        return;
      }
    }
    b.el.hidden = true;
  });
}

const FLY_MS = 650; // flight time of one bubble into the card
const RETURN_MS = 700; // flight time back out to where they float
const STAGGER_MS = 16; // delay between one bubble taking off and the next

function startDrift(b: Bubble) {
  return b.el.animate(
    [{ translate: "0px 0px" }, { translate: `${b.driftX}px ${b.driftY}px` }],
    {
      duration: b.dur,
      delay: -Math.random() * b.dur,
      iterations: Infinity,
      direction: "alternate",
      easing: EASE_SINE_IN_OUT,
    }
  );
}

// Stop a bubble's running animation but keep it exactly where it is on screen,
// so the next animation starts from the current position.
function freeze(b: Bubble) {
  if (!b.anim) return;
  try { b.anim.commitStyles(); } catch { /* element not rendered */ }
  b.anim.cancel();
  b.anim = null;
}

function currentOffset(el: HTMLElement): [number, number] {
  const t = getComputedStyle(el).translate;
  if (!t || t === "none") return [0, 0];
  const p = t.split(" ").map(parseFloat);
  return [p[0] || 0, p[1] || 0];
}

const centre = (r: DOMRect): [number, number] => [r.left + r.width / 2, r.top + r.height / 2];

/**
 * Faint skill labels drifting behind the first screen of the page, kept clear
 * of the hero text. The layer scrolls with the page so they stay clear of it.
 *
 * When `pulled` turns true they wait `delay` ms (for the skills card to finish
 * sliding in), then fly over the page into the deck at `targetRef`: each one lands on its own
 * chip on the front card, or shrinks away into the deck if its group's card
 * isn't the one in front.
 * `onLanded` fires once they are all in. When `pulled` turns false they float
 * back out to where they were.
 */
export default function SkillBubbles({
  pulled,
  delay,
  targetRef,
  onLanded,
}: {
  pulled: boolean;
  delay: number;
  targetRef: RefObject<HTMLElement | null>;
  onLanded: () => void;
}) {
  const bubblesRef = useRef<Bubble[]>([]);
  const hasPulledRef = useRef(false);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const lowerTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Create the bubble layer once, on the client (positions are random).
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layer = document.createElement("div");
    layer.className = "bubble-layer";
    layer.setAttribute("aria-hidden", "true");
    document.body.prepend(layer);
    layerRef.current = layer;

    bubblesRef.current = Object.entries(DATA.skills).flatMap(([group, skills]) =>
      skills.map((skill) => {
        const el = document.createElement("span");
        el.className = "float-bubble";
        el.textContent = skill;
        layer.appendChild(el);

        const b: Bubble = {
          el,
          skill,
          group,
          driftX: (Math.random() - 0.5) * 70,
          driftY: (Math.random() - 0.5) * 50,
          dur: (3 + Math.random() * 4) * 1000,
          anim: null,
        };
        return b;
      })
    );
    const bubbles = bubblesRef.current;
    placeBubbles(layer, bubbles);
    bubbles.forEach((b) => { b.anim = startDrift(b); });

    // The text reflows when the window changes size, so find new homes.
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!hasPulledRef.current) placeBubbles(layer, bubbles);
      }, 200);
    };
    window.addEventListener("resize", onResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      bubblesRef.current.forEach((b) => b.anim?.cancel());
      bubblesRef.current = [];
      clearTimeout(lowerTimerRef.current);
      layerRef.current = null;
      layer.remove();
    };
  }, []);

  useEffect(() => {
    const bubbles = bubblesRef.current;

    if (pulled) {
      let cancelled = false;
      let doneTimer: ReturnType<typeof setTimeout> | undefined;

      const startTimer = setTimeout(() => {
        const target = targetRef.current;
        const tr = target?.getBoundingClientRect();
        const onScreen = !!tr && tr.width > 0 && tr.bottom > 0 && tr.top < window.innerHeight;
        // No bubbles (reduced motion) or the card isn't in view (phones): just show the skills.
        if (!target || !tr || !onScreen || !bubbles.length) {
          onLanded();
          return;
        }

        hasPulledRef.current = true;
        // Bring the bubbles in front of the page so they are seen flying over the card
        // and settling on it, and pin them to the screen (the layer normally scrolls with
        // the page) so they stay lined up with the card, which is pinned too.
        const layer = layerRef.current;
        if (layer) {
          clearTimeout(lowerTimerRef.current);
          layer.style.top = layer.getBoundingClientRect().top + "px";
          layer.classList.add("lifted", "pinned");
        }
        const front = target.querySelector<HTMLElement>('[data-active="true"]') ?? target;
        const frontRect = front.getBoundingClientRect();
        const chips = new Map<string, DOMRect>();
        front.querySelectorAll<HTMLElement>("[data-skill]").forEach((c) => chips.set(c.dataset.skill!, c.getBoundingClientRect()));

        bubbles.forEach((b, i) => {
          if (b.el.hidden) return; // had no clear spot to float in
          freeze(b);
          const br = b.el.getBoundingClientRect();
          const [bx, by] = centre(br);
          const [ox, oy] = currentOffset(b.el);
          const chip = chips.get(b.skill);
          const [tx, ty] = centre(chip ?? frontRect);
          const to = `${ox + tx - bx}px ${oy + ty - by}px`;

          b.anim = b.el.animate(
            chip
              ? // Lands on its chip, growing to the chip's size and turning solid.
                { translate: to, scale: chip.width / br.width, opacity: 1 }
              : // Its group's card isn't in front: shrink away into the deck.
                { translate: to, scale: 0.2, opacity: 0 },
            { duration: FLY_MS, delay: i * STAGGER_MS, easing: EASE_PULL_IN, fill: "forwards" }
          );
        });

        // Everyone has landed: reveal the real chips and fade the stand-ins out.
        doneTimer = setTimeout(() => {
          if (cancelled) return;
          onLanded();
          bubbles.forEach((b) => {
            freeze(b);
            b.anim = b.el.animate({ opacity: 0 }, { duration: 250, easing: "ease-out", fill: "forwards" });
          });
        }, FLY_MS + bubbles.length * STAGGER_MS);
      }, delay);

      return () => {
        cancelled = true;
        clearTimeout(startTimer);
        clearTimeout(doneTimer);
      };
    }

    if (!hasPulledRef.current) return; // nothing to undo
    hasPulledRef.current = false;

    // Hand the layer back to the page. That moves it by however far the page has
    // scrolled since the pull, so shift the bubbles the other way to keep them where
    // they are on screen: they then fly out of the card rather than from beside it.
    const layer = layerRef.current;
    let shiftY = 0;
    if (layer) {
      const before = layer.getBoundingClientRect().top;
      layer.classList.remove("pinned");
      layer.style.top = "";
      shiftY = before - layer.getBoundingClientRect().top;
      // Stay in front until they are back home, then drop behind the page again.
      clearTimeout(lowerTimerRef.current);
      lowerTimerRef.current = setTimeout(() => layer.classList.remove("lifted"), RETURN_MS);
    }

    bubbles.forEach((b) => {
      freeze(b);
      if (shiftY) {
        const [ox, oy] = currentOffset(b.el);
        b.el.style.translate = `${ox}px ${oy + shiftY}px`;
      }
      const anim = b.el.animate(
        { translate: "0px 0px", scale: 1, opacity: REST_OPACITY },
        { duration: RETURN_MS, easing: EASE_CUBIC_OUT, fill: "forwards" }
      );
      b.anim = anim;
      anim.onfinish = () => {
        if (b.anim !== anim) return; // superseded by a newer animation
        anim.cancel();
        b.el.style.translate = b.el.style.scale = b.el.style.opacity = "";
        b.anim = startDrift(b);
      };
    });
  }, [pulled, delay, targetRef, onLanded]);

  return null;
}
