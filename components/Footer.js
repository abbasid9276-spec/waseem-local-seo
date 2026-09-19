import { site } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="wrap">
        <div className="grid g4">
          <div>
            <h4>{site.brand}</h4>
            <p style={{ fontSize: ".92rem", color: "#9aa3ae" }}>
              Map pack, organic and AI search work for single-location businesses,
              multi-location groups and agencies who need delivery under their own
              brand. Run by {site.name} from {site.countryName}.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Google Business Profile management</li>
              <li>Profile suspension recovery</li>
              <li>Map pack &amp; geo-grid ranking</li>
              <li>Citation &amp; NAP cleanup</li>
              <li>AI Overview visibility</li>
              <li>Multi-location local SEO</li>
              <li>White label for agencies</li>
              <li><a href="/portfolio">Results &amp; case studies</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></li>
              <li><a href={`https://wa.me/${site.whatsapp}`} rel="nofollow">WhatsApp</a></li>
              <li>{site.timezone}</li>
            </ul>
          </div>
        </div>
        <div className="legal">
          © {year} {site.brand}. No rankings are guaranteed, by me or by anyone else.
          Google, Google Maps and Google Business Profile are trademarks of Google LLC.
        </div>
      </div>
    </footer>
  );
}
