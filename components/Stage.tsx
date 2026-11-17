"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { DATA } from "@/lib/data";
import ProjectStack from "./ProjectStack";
import Timeline from "./Timeline";
import SkillsStack from "./SkillsStack";
import SkillBubbles from "./SkillBubbles";

// How long the "cards move left, skills card slides in" transition takes.
// Keep in sync with --slide in globals.css.
const SLIDE_MS = 800;

const GROUPS = Object.keys(DATA.skills);

type View = "projects" | "experience";
const VIEWS: { id: View; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Stage() {
  const [view, setView] = useState<View>("projects");
  // split: the hero has scrolled off screen, so the work column moves left
  // and the skills card slides in from the right.
  const [split, setSplit] = useState(false);
  // active: which skills card is in front. Its group, and the ones before it, are called in.
  const [active, setActive] = useState(0);
  // filled[g]: group g's floating skills have landed in its card.
  const [filled, setFilled] = useState<boolean[]>(() => GROUPS.map(() => false));
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setSplit(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const setGroup = (g: number, on: boolean) => setFilled((f) => f.map((v, i) => (i === g ? on : v)));
  const handleLanded = useCallback((g: number) => setGroup(g, true), []);
  // a card goes blank again as its skills float back out
  const handleReleased = useCallback((g: number) => setGroup(g, false), []);

  return (
    <section className={split ? "stage split" : "stage"} id="work">
      <div className="stage-col work-col">
        <div className="stage-top">
          <div className="meta-row">
            <span className="avatar">{DATA.initials}</span>
            <span className="pill lav">Open to work</span>
            <span className="pill peach">{DATA.location}</span>
            <span className="pill mint">Remote friendly</span>
          </div>
        </div>
        {/* Outside .stage-top so it can stay pinned above the cards for the whole column. */}
        <div className="segmented view-switch" role="tablist" aria-label="Portfolio sections">
          {VIEWS.map((v) => (
            <button key={v.id} role="tab" aria-selected={view === v.id} onClick={() => setView(v.id)}>
              {v.label}
            </button>
          ))}
        </div>
        <div className="main-content">{view === "projects" ? <ProjectStack /> : <Timeline />}</div>
      </div>

      <div className="stage-col skills-col">
        <div className="segmented solo">
          <span>Skills</span>
        </div>
        <SkillsStack ref={skillsRef} filled={filled} scrollDriven={view === "projects"} onActiveChange={setActive} />
      </div>

      <SkillBubbles
        pulledCount={split ? active + 1 : 0}
        firstDelay={SLIDE_MS}
        targetRef={skillsRef}
        onLanded={handleLanded}
        onReleased={handleReleased}
      />
    </section>
  );
}
