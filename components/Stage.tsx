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
  // filled: the background skills have landed in the card.
  const [filled, setFilled] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setSplit(!entry.isIntersecting);
        if (entry.isIntersecting) setFilled(false); // card goes blank again as the skills float back out
      },
      { threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const handleLanded = useCallback(() => setFilled(true), []);

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
        <SkillsStack ref={skillsRef} filled={filled} scrollDriven={view === "projects"} />
      </div>

      <SkillBubbles pulled={split} delay={SLIDE_MS} targetRef={skillsRef} onLanded={handleLanded} />
    </section>
  );
}
