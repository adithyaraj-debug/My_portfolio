import { motion, useReducedMotion } from "motion/react";
import { riseProps } from "../utils/motion";

export default function Section({ id, eyebrow, title, intro, children, tone = "default" }) {
  const reduce = useReducedMotion();

  return (
    <section id={id} className={`section section--${tone}`} aria-labelledby={`${id}-heading`}>
      <div className="container">
        <motion.header className="section-head" {...riseProps(reduce)}>
          {eyebrow ? (
            <div className="eyebrow-wrapper">
              <span className="eyebrow-symbol" aria-hidden="true">//</span>
              <p className="eyebrow">{eyebrow}</p>
            </div>
          ) : null}
          <h2 id={`${id}-heading`}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}
