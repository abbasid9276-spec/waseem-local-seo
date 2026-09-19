import { site } from "../lib/site";

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
          <a href="/#services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a className="btn btn-primary" href={`https://wa.me/${site.whatsapp}`} rel="nofollow">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
