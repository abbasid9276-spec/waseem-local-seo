"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/site";
import { services } from "../lib/services";

/* Site header. On desktop the nav sits inline with a hover/click dropdown for
   Services. Below 960px it collapses behind a hamburger button and slides in
   as a panel, which is what people expect on a phone. */

export default function Header() {
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function closeAll() {
    setOpen(false);
    setSvc(false);
  }

  return (
    <header className={open ? "site-head nav-open" : "site-head"}>
      <div className="wrap">
        <a className="brand" href="/" onClick={closeAll}>
          <img
            className="brand-mark"
            src="/img/logo/image.png"
            width="512"
            height="512"
            alt={site.brand}
          />
        </a>

        <button
          type="button"
          className="navtoggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav" id="site-nav">
          <a href="/" onClick={closeAll}>
            Home
          </a>
          <a href="/portfolio" onClick={closeAll}>
            Portfolio
          </a>

          <div className={svc ? "has-drop is-open" : "has-drop"}>
            <button
              type="button"
              className="drop-trigger"
              aria-expanded={svc}
              onClick={() => setSvc(!svc)}
            >
              Services
              <svg className="caret" viewBox="0 0 12 8" aria-hidden="true">
                <path
                  d="M1 1l5 5 5-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>
            <div className="drop">
              {services.map((s) => (
                <a key={s.slug} href={`/${s.slug}`} onClick={closeAll}>
                  {s.nav}
                </a>
              ))}
            </div>
          </div>

          <a href="/blog" onClick={closeAll}>
            Blog
          </a>
          <a href="/contact" onClick={closeAll}>
            Contact
          </a>

          <a
            className="btn btn-linkedin"
            href="https://www.linkedin.com/in/waseem-abbas-a5717942a/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={closeAll}
          >
            Follow me on LinkedIn
          </a>
        </nav>
      </div>

      <button
        type="button"
        className="nav-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={closeAll}
      />
    </header>
  );
}
