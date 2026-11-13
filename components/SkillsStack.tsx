"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type Ref } from "react";
import { DATA } from "@/lib/data";
import { STEP as PROJECT_STEP } from "./ProjectStack";

const GROUPS = Object.entries(DATA.skills);
const PEEK = 46; // px of each earlier card left showing above the next, enough for its title
const ENTER_FROM_VH = 45; // how far below its resting place a card starts, in vh

// Where card `i` sits when the deck has been advanced `raw` cards.
// Card i rests PEEK px lower than card i-1 and in front of it, so every
// earlier card's title stays readable along the top of the deck.
function cardStyle(i: number, raw: number): CSSProperties {
  const delta = i - raw; // positive = still to come, 0 = on top, negative = behind
  let rise = 0, scale = 1, opacity = 1;

  if (delta >= 1) {
    rise = ENTER_FROM_VH; opacity = 0;
  } else if (delta > 0) {
    const t = 1 - delta;
    rise = ENTER_FROM_VH * (1 - t); opacity = Math.min(1, t * 6);
  } else {
    scale = 1 - Math.min(-delta, 3) * 0.04; // cards further back sit slightly smaller
  }

  return {
    transform: `translateY(calc(${i * PEEK}px + ${rise}vh)) scale(${scale})`,
    opacity,
    zIndex: i,
  };
}

/**
 * The skills deck: one card per skill group, stacked like the project cards.
 *
 * With `scrollDriven` it advances as the project stack is scrolled: the three
 * cards share the same scroll distance as all the projects, and each change is
 * a slow glide. Otherwise (Experience view, or phones where it sits below everything)
 * it advances when a card's title is clicked.
 *
 * While `filled` is false the cards are blank, waiting for the background
 * bubbles to fly in (SkillBubbles finds chips by data-skill inside the
 * data-active card).
 */
export default function SkillsStack({
  ref,
  filled,
  scrollDriven,
}: {
  ref: Ref<HTMLDivElement>;
  filled: boolean;
  scrollDriven: boolean;
}) {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [manual, setManual] = useState(0);
  const lastIndex = GROUPS.length - 1;

  const apply = useCallback((raw: number) => {
    const active = Math.round(raw);
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const s = cardStyle(i, raw);
      card.style.transform = s.transform as string;
      card.style.opacity = String(s.opacity);
      card.dataset.active = String(i === active);
    });
  }, []);

  // The project stack's scroll wrapper, when this deck should follow it.
  const getWrap = useCallback(
    () =>
      scrollDriven && !window.matchMedia("(max-width: 960px)").matches
        ? document.querySelector<HTMLElement>(".scroll-stack-wrap")
        : null,
    [scrollDriven]
  );

  useEffect(() => {
    const projects = DATA.projects.length;
    const update = () => {
      const wrap = getWrap();
      if (!wrap) return apply(manual);
      // Split the project scroll into one equal share per skill card and show the
      // card for the share we're in. It moves in whole steps: the slow glide
      // between cards is the CSS transition on .skill-card.
      const scrolled = -wrap.getBoundingClientRect().top;
      const projectRaw = Math.max(0, scrolled / (window.innerHeight * PROJECT_STEP));
      apply(Math.min(lastIndex, Math.floor(((projectRaw + 0.5) / projects) * GROUPS.length)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [apply, getWrap, manual, lastIndex]);

  // Clicking a title brings that card to the front.
  const select = (i: number) => {
    const wrap = getWrap();
    if (!wrap) return setManual(i);
    // Middle of card i's share of the project scroll (see the effect above).
    const projectRaw = Math.max(0, ((i + 0.5) / GROUPS.length) * DATA.projects.length - 0.5);
    const top = wrap.getBoundingClientRect().top + window.scrollY + projectRaw * window.innerHeight * PROJECT_STEP;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className={filled ? "skills-stack" : "skills-stack blank"}
      ref={ref}
      style={{ paddingBottom: lastIndex * PEEK }}
    >
      {GROUPS.map(([group, list], i) => (
        <div
          key={group}
          className="skill-card"
          data-active={i === 0}
          style={cardStyle(i, 0)}
          ref={(el) => { cardRefs.current[i] = el; }}
        >
          <h3>
            <button type="button" onClick={() => select(i)}>
              {group} <span className="fine">· {list.length}</span>
            </button>
          </h3>
          <div className="chips">
            {list.map((s) => (
              <span key={s} className="tag chip" data-skill={s}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
