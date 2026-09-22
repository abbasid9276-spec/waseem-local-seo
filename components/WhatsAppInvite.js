"use client";

import { useEffect, useState } from "react";

/* Invitation to the WhatsApp channel, shown once a visitor has been on the
   homepage for 60 seconds. Dismissed state is kept for the browser session so
   the same person is not asked twice while they read the rest of the site. */

const CHANNEL = "https://whatsapp.com/channel/0029VbDrZamHltYFYQI9TR0c";
const KEY = "wa-invite-dismissed";

export default function WhatsAppInvite() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch (e) {
      seen = false;
    }
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 60000);
    return () => clearTimeout(t);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch (e) {}
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="wa-invite-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-invite-title"
      onClick={close}
    >
      <div className="wa-invite" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="wa-invite-close"
          onClick={close}
          aria-label="Close"
        >
          &times;
        </button>
        <span className="wa-invite-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="30" height="30">
            <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1112 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 01-3.2-2.8c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 00-.7.3c-.3.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.8 1.9.7 2.3.6 2.7.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" />
          </svg>
        </span>
        <h3 id="wa-invite-title">Join the WhatsApp channel</h3>
        <p>
          Short, practical local SEO notes: Google Business Profile changes,
          map pack updates and what is actually working in AI search. No spam,
          and you can leave any time.
        </p>
        <div className="wa-invite-actions">
          <a
            className="btn btn-primary"
            href={CHANNEL}
            target="_blank"
            rel="nofollow noopener noreferrer"
            onClick={close}
          >
            Join the channel
          </a>
          <button type="button" className="wa-invite-later" onClick={close}>
            Not now
          </button>
        </div>
      </div>
    </div>
  );
}
