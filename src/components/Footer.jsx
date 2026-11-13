import { getSocials, profile } from "../data/portfolioData";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const socials = getSocials();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.headline}</p>
        </div>
        <div className="footer-links">
          {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : null}
          {profile.location ? <span>{profile.location}</span> : null}
          {socials.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer noopener">
              {social.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
        <p className="footer-copy">
          <span>© {currentYear} {profile.name}</span>
          <span className="footer-status-pill">
            <span className="pulse-neon-dot" aria-hidden="true" />
            SYS_STATUS: ALL SYSTEMS NOMINAL
          </span>
        </p>
      </div>
    </footer>
  );
}
