import { site } from "../lib/site";
import { services } from "../lib/services";

export default function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <a className="brand" href="/">
          {site.brand}
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="/">Home</a>
          <a href="/portfolio">Portfolio</a>

          {/* Services is a dropdown trigger, not a link. There is no /services
              hub page and no /services/ URL prefix on purpose — a page
              containing nothing but five links would be thin, and the
              individual service pages are the ones meant to rank. */}
          <div className="has-drop">
            <button type="button" className="drop-trigger" aria-haspopup="true">
              Services
              <span aria-hidden="true" className="caret" />
            </button>
            <ul className="drop">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href={`/${s.slug}`}>{s.nav}</a>
                </li>
              ))}
            </ul>
          </div>

          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a
            className="btn btn-primary"
            href={`https://wa.me/${site.whatsapp}`}
            rel="nofollow"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
