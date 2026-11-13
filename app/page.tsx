import Stage from "@/components/Stage";
import ThemeToggle from "@/components/ThemeToggle";
import { DATA } from "@/lib/data";

export default function Home() {
  return (
    <>
      <header className="topbar">
        <a href="#" className="brand">
          <span className="brand-mark" aria-hidden="true" />
          <span>{DATA.name}</span>
        </a>
        <nav className="topnav">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
          <ThemeToggle />
          <a className="icon-btn" href={DATA.resumeUrl} target="_blank" rel="noopener" aria-label="Open résumé">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4h6v6" />
              <path d="M20 4 10 14" />
              <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
            </svg>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <h1>{DATA.headline}</h1>
          <p className="sub">{DATA.subline}</p>
        </section>

        <Stage />

        <section className="contact" id="contact">
          <h2>Have a project in mind?</h2>
          <p className="sub">Let&apos;s build something that works as good as it looks.</p>
          <div className="contact-actions">
            {DATA.links.map((l) => (
              <a
                key={l.label}
                className={l.primary ? "btn primary" : "btn"}
                href={l.href}
                {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {DATA.name}. Built by hand.
      </footer>
    </>
  );
}
