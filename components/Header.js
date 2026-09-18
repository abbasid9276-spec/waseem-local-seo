import { site } from "../lib/site";

export default function Header() {
  return (
    <header className="site-head">
      <div className="wrap">
        <a className="brand" href="/">
          {site.name}
          <small>{site.role} · {site.city}, Pakistan</small>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#problem">The problem</a>
          <a href="#services">Services</a>
          <a href="#ai-search">AI search</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} rel="nofollow">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
