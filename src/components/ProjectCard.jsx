import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import TagList from "./TagList";
import { fadeUp } from "../utils/motion";

function ExternalLink({ href, children }) {
  if (!href) return null;
  return (
    <a className="btn btn-neon-secondary" href={href} target="_blank" rel="noreferrer noopener">
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function ProjectCard({ project, featured = false }) {
  const reduce = useReducedMotion();
  const features = (project.features || []).filter(Boolean);
  const shots = (project.screenshots || []).filter((shot) => shot?.src);
  const className = [
    "project-card",
    "cyber-card",
    featured ? "project-card--featured" : "",
    features.length ? "has-features" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.article
      className={className}
      variants={fadeUp}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
    >
      <span className="card-corner card-corner--tl" aria-hidden="true" />
      <span className="card-corner card-corner--tr" aria-hidden="true" />
      <span className="card-corner card-corner--bl" aria-hidden="true" />
      <span className="card-corner card-corner--br" aria-hidden="true" />

      {featured ? (
        <div className="card-featured-badge">
          <span className="pulse-neon-dot" aria-hidden="true" />
          // FEATURED_SYSTEM_ARCHITECTURE
        </div>
      ) : null}

      <div className="project-copy">
        <h3>{project.title}</h3>
        {project.summary ? <p>{project.summary}</p> : null}
        <TagList items={project.technologies} label="// ARCHITECTURE_STACK" />
        {project.repository || project.demo ? (
          <div className="project-links">
            <ExternalLink href={project.repository}>Repository</ExternalLink>
            <ExternalLink href={project.demo}>Live demo</ExternalLink>
          </div>
        ) : null}
      </div>

      {features.length ? (
        <div className="project-features">
          <p className="tag-label">// EXECUTION_SPECS</p>
          <ul className="plain-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {shots.length ? (
        <div className="project-shots">
          {shots.map((shot) => (
            <figure key={shot.src}>
              <img src={shot.src} alt={shot.alt || project.title} loading="lazy" />
              {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}
