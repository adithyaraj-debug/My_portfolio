import { motion, useReducedMotion } from "motion/react";
import {
  AppWindow,
  Blocks,
  Braces,
  Cable,
  ClipboardCheck,
  Cloud,
  Coffee,
  Cog,
  Combine,
  Container,
  Database,
  FileCode,
  Gauge,
  GitBranch,
  Layers,
  LayoutTemplate,
  Leaf,
  MousePointerClick,
  Network,
  Package,
  Repeat,
  Route,
  Terminal,
  TestTube2,
  Webhook,
  Workflow,
} from "lucide-react";
import { fadeUp, staggerProps } from "../utils/motion";

const icons = {
  terminal: Terminal,
  git: GitBranch,
  workflow: Workflow,
  container: Container,
  layers: Layers,
  network: Network,
  cloud: Cloud,
  blocks: Blocks,
  cog: Cog,
  browser: AppWindow,
  code: FileCode,
  braces: Braces,
  clipboard: ClipboardCheck,
  repeat: Repeat,
  pointer: MousePointerClick,
  cable: Cable,
  route: Route,
  gauge: Gauge,
  layout: LayoutTemplate,
  combine: Combine,
  coffee: Coffee,
  leaf: Leaf,
  webhook: Webhook,
  package: Package,
  database: Database,
  test: TestTube2,
};

export default function SkillGrid({ skills, tone = "cloud" }) {
  const reduce = useReducedMotion();
  if (!skills?.length) return null;

  return (
    <motion.ul className="skill-grid" data-tone={tone} {...staggerProps(reduce)}>
      {skills.map((skill) => {
        const Icon = icons[skill.icon];
        return (
          <motion.li key={skill.id} className="skill-card cyber-card" variants={fadeUp}>
            <span className="card-corner card-corner--tl" aria-hidden="true" />
            <span className="card-corner card-corner--br" aria-hidden="true" />
            <span className="skill-icon" aria-hidden="true">
              {Icon ? <Icon size={18} strokeWidth={1.8} /> : <span className="skill-dot" />}
            </span>
            <span className="skill-name">
              {skill.name}
              {skill.note ? <small>{skill.note}</small> : null}
            </span>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
