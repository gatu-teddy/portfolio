"use client";

import { useState } from "react";
import { DATA } from "@/lib/data";

const TABS = ["Experience", "Education"] as const;
type Tab = (typeof TABS)[number];

export default function Timeline() {
  const [tab, setTab] = useState<Tab>("Experience");
  const rows = tab === "Education" ? DATA.education : DATA.experience;

  return (
    <>
      <div className="exp-subtabs subtabs" role="tablist" aria-label="Career timeline">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={t === tab} className={t === tab ? "active" : undefined} onClick={() => setTab(t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="card table-card">
        <table className="table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Where</th>
              <th>What I did</th>
              <th>When</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.role + r.org}>
                <td>
                  {r.role}
                  <div>
                    {r.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </td>
                <td>{r.org}</td>
                <td className="note">{r.note}</td>
                <td className="fine period">{r.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
