import { motion, useReducedMotion } from "motion/react";
import {
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Radio,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

import Background from "./components/Background";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import MovableFrame from "./components/MovableFrame";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Section from "./components/Section";
import SkillGrid from "./components/SkillGrid";
import TagList from "./components/TagList";

import {
  about,
  contactSection,
  documentsSection,
  educationSection,
  experienceSection,
  getNavigation,
  getResumeDocument,
  getSocials,
  profile,
  projectsSection,
  skillGroups,
  visibleCustomSections,
  visibleEducation,
  visibleExperiences,
  visibleProjects,
  visibleSkills,
} from "./data/portfolioData";
import { fadeUp, riseProps } from "./utils/motion";

export default function App() {
  const reduce = useReducedMotion();
  const navItems = getNavigation();
  const socials = getSocials();
  const resume = getResumeDocument();
  const experiences = visibleExperiences();
  const projects = visibleProjects();
  const educationList = visibleEducation();
  const customSecs = visibleCustomSections();

  return (
    <div className="site-wrapper">
      <Background />
      <Navbar items={navItems} />

      <main id="top" className="site-main">
        {/* Futuristic Hero Section */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="container hero-container">
            <motion.div className="hero-content" {...riseProps(reduce, 0.05)}>
              {/* High-tech prompt eyebrow */}
              <div className="hero-cyber-badge">
                <span className="cyber-terminal-icon" aria-hidden="true">&gt;_</span>
                <span className="cyber-tag">CLOUD_DEV_OPS // QA_AUTOMATION</span>
                <span className="cyber-indicator-dot" aria-hidden="true" />
              </div>

              <h1 id="hero-title" className="hero-title">
                {profile.name}
              </h1>

              <p className="hero-subtitle">
                <span className="text-neon-purple">Cloud &amp; DevOps</span>
                <span className="subtitle-divider">/</span>
                <span className="text-neon-cyan">QA Automation Engineer</span>
              </p>

              <p className="hero-summary">{profile.summary}</p>

              {profile.focusAreas?.length ? (
                <div className="hero-focus">
                  <span className="focus-label">// CORE_STACK:</span>
                  <div className="focus-tags">
                    {profile.focusAreas.map((item) => (
                      <span key={item} className="focus-pill">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="hero-actions">
                {profile.email ? (
                  <a href="#contact" className="btn btn-neon-primary">
                    <Mail size={16} aria-hidden="true" />
                    Initialize Contact
                  </a>
                ) : null}

                {resume ? (
                  <a href="#resume" className="btn btn-neon-secondary">
                    <FileText size={16} aria-hidden="true" />
                    Inspect Resume
                  </a>
                ) : null}

                {socials.length ? (
                  <div className="hero-socials">
                    {socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-neon-ghost"
                      >
                        {social.label}
                        <ExternalLink size={13} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>

            {/* Seamless Blended Portrait Stage with Dynamic Action Badges & Movable Frames */}
            <motion.div className="hero-visual" {...riseProps(reduce, 0.15)}>
              <div className="hero-visual-stage">
                {/* Glowing Cosmic Aura directly behind the portrait */}
                <div className="photo-cosmic-aura" aria-hidden="true" />
                <div className="photo-orbit-ring" aria-hidden="true" />

                {/* Blended Oval / Stadium Portrait Frame */}
                <div className="hero-portrait-capsule">
                  <div className="capsule-rim-glow" aria-hidden="true" />
                  <div className="capsule-scanner-sweep" aria-hidden="true" />

                  <img
                    src={profile.photo}
                    alt={profile.photoAlt}
                    width={profile.photoWidth}
                    height={profile.photoHeight}
                    className="hero-blended-photo"
                    fetchPriority="high"
                  />

                  {/* Soft bottom mask overlay to melt photo into dark UI */}
                  <div className="capsule-bottom-blend" aria-hidden="true" />

                  {/* Integrated Location & Globe Badge */}
                  {profile.location ? (
                    <div className="hero-globe-pill">
                      <Globe size={14} className="globe-spin-icon" aria-hidden="true" />
                      <span>{profile.location}</span>
                      <span className="live-radar-dot" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>

                {/* Floating Action Badge 1: K8s & Cloud */}
                <motion.div
                  className="hero-action-badge hero-action-badge--k8s"
                  animate={reduce ? undefined : { y: [0, -10, 0], rotate: [0, 1.5, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1, zIndex: 35 }}
                >
                  <div className="action-badge-dot action-badge-dot--cyan" />
                  <div className="action-badge-info">
                    <span className="action-badge-title">K8s &amp; AWS EC2</span>
                    <span className="action-badge-sub">Live Container Orchestration</span>
                  </div>
                </motion.div>

                {/* Floating Action Badge 2: QA & Automation */}
                <motion.div
                  className="hero-action-badge hero-action-badge--qa"
                  animate={reduce ? undefined : { y: [0, 9, 0], rotate: [0, -1.5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  whileHover={{ scale: 1.1, zIndex: 35 }}
                >
                  <div className="action-badge-dot action-badge-dot--purple" />
                  <div className="action-badge-info">
                    <span className="action-badge-title">Playwright (TS)</span>
                    <span className="action-badge-sub">100% Automated Testing</span>
                  </div>
                </motion.div>

                {/* Movable Floating Frame 1: CI/CD Pipeline Telemetry */}
                <MovableFrame
                  label="CI_CD_PIPELINE"
                  glow="cyan"
                  className="movable-frame--pos1"
                  floatDelay={0}
                >
                  <div className="telemetry-stack">
                    <div className="telemetry-top">
                      <div className="telemetry-label-wrap">
                        <Terminal size={14} className="text-neon-cyan" aria-hidden="true" />
                        <span className="telemetry-title">GitLab CI/CD</span>
                      </div>
                      <span className="telemetry-tag-cyan">12 JOBS PASS</span>
                    </div>
                    <div className="telemetry-progress-track">
                      <div className="telemetry-progress-bar telemetry-progress-bar--cyan" />
                    </div>
                    <span className="telemetry-sub">Build · Test · Monorepo Deploy</span>
                  </div>
                </MovableFrame>

                {/* Movable Floating Frame 2: Infrastructure Matrix */}
                <MovableFrame
                  label="INFRA_DEPLOY"
                  glow="purple"
                  className="movable-frame--pos2"
                  floatDelay={1.8}
                >
                  <div className="telemetry-stack">
                    <div className="telemetry-top">
                      <div className="telemetry-label-wrap">
                        <Cpu size={14} className="text-neon-purple" aria-hidden="true" />
                        <span className="telemetry-title">Terraform &amp; Ansible</span>
                      </div>
                      <span className="telemetry-tag-purple">DEPLOYED</span>
                    </div>
                    <span className="telemetry-sub">Automated Cloud Provisioning</span>
                  </div>
                </MovableFrame>
              </div>
            </motion.div>
          </div>

          {/* Futuristic Telemetry Meta Grid */}
          {profile.heroMeta?.length ? (
            <div className="container">
              <motion.div className="hero-meta-grid" {...riseProps(reduce, 0.25)}>
                {profile.heroMeta.map((meta, i) => (
                  <div key={meta.label} className="meta-card cyber-card">
                    <span className="cyber-bracket" aria-hidden="true">&lt;0{i + 1}&gt;</span>
                    <span className="meta-label">{meta.label}</span>
                    <span className="meta-value">{meta.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          ) : null}
        </section>

        {/* About Section - Designed to match the Reference Image */}
        <Section id="about" eyebrow={about.eyebrow} title={about.title}>
          <div className="about-grid">
            <div className="about-main">
              {/* Reference-Style Visual Identity Showcase Card */}
              <div className="about-profile-banner cyber-card">
                <div className="about-banner-avatar-wrap">
                  <div className="about-banner-glow" aria-hidden="true" />
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="about-banner-avatar"
                  />
                </div>
                <div className="about-banner-info">
                  <span className="about-banner-tag">// VERIFIED_DEV_PROFILE</span>
                  <h3 className="about-banner-name">{profile.name}</h3>
                  <p className="about-banner-role">{profile.headline}</p>

                  <div className="about-metrics-row">
                    <div className="metric-pill">
                      <Zap size={14} className="text-neon-cyan" aria-hidden="true" />
                      <div>
                        <span className="metric-num">12 CI/CD</span>
                        <span className="metric-desc">Automated Jobs</span>
                      </div>
                    </div>

                    <div className="metric-pill">
                      <Radio size={14} className="text-neon-purple" aria-hidden="true" />
                      <div>
                        <span className="metric-num">2 Internships</span>
                        <span className="metric-desc">DevOps &amp; QA</span>
                      </div>
                    </div>

                    <div className="metric-pill">
                      <GraduationCap size={14} className="text-neon-emerald" aria-hidden="true" />
                      <div>
                        <span className="metric-num">B.Tech AI&amp;DS</span>
                        <span className="metric-desc">Graduate 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {about.paragraphs?.map((p, idx) => (
                <p key={idx} className="about-text">
                  {p}
                </p>
              ))}

              {about.interests?.length ? (
                <div className="about-interests">
                  {about.interests.map((interest) => (
                    <div key={interest.title} className="interest-card cyber-card">
                      <div className="interest-head">
                        <Sparkles size={18} className="interest-icon" aria-hidden="true" />
                        <h4>{interest.title}</h4>
                      </div>
                      <p>{interest.text}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="about-sidebar">
              {about.facts?.length ? (
                <div className="sidebar-card cyber-card">
                  <h3 className="sidebar-heading">// QUICK_FACTS</h3>
                  <ul className="facts-list">
                    {about.facts.map((fact) => (
                      <li key={fact.label} className="fact-item">
                        <span className="fact-label">{fact.label}</span>
                        <span className="fact-value">{fact.value}</span>
                        {fact.detail ? <span className="fact-detail">{fact.detail}</span> : null}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {about.softSkills?.length ? (
                <div className="sidebar-card cyber-card">
                  <h3 className="sidebar-heading">// CORE_COMPETENCIES</h3>
                  <div className="soft-skills-wrap">
                    {about.softSkills.map((skill) => (
                      <span key={skill} className="soft-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {about.goals?.text ? (
                <div className="sidebar-card cyber-card sidebar-card--highlight">
                  <h3 className="sidebar-heading">// {about.goals.title.toUpperCase()}</h3>
                  <p className="sidebar-text">{about.goals.text}</p>
                </div>
              ) : null}

              {about.learning?.text ? (
                <div className="sidebar-card cyber-card">
                  <h3 className="sidebar-heading">// {about.learning.title.toUpperCase()}</h3>
                  <p className="sidebar-text">{about.learning.text}</p>
                </div>
              ) : null}
            </div>
          </div>
        </Section>

        {/* Expertise / Skills Sections */}
        {skillGroups.map((group) => {
          const skills = visibleSkills(group);
          if (!skills.length) return null;
          return (
            <Section
              key={group.id}
              id={group.id}
              tone={group.tone}
              eyebrow={group.eyebrow}
              title={group.title}
              intro={group.intro}
            >
              <SkillGrid skills={skills} tone={group.tone} />
            </Section>
          );
        })}

        {/* Professional Experience Section */}
        {experiences.length ? (
          <Section
            id="experience"
            eyebrow={experienceSection.eyebrow}
            title={experienceSection.title}
            intro={experienceSection.intro}
          >
            <div className="experience-list">
              {experiences.map((exp) => (
                <motion.article
                  key={exp.id}
                  className="experience-card cyber-card"
                  variants={fadeUp}
                  initial={reduce ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                >
                  <div className="experience-top">
                    <div>
                      <h3 className="experience-role">{exp.position}</h3>
                      <p className="experience-company">
                        <strong className="text-neon-cyan">{exp.company}</strong>
                        {exp.location ? (
                          <span className="experience-location"> · {exp.location}</span>
                        ) : null}
                      </p>
                    </div>
                    <span className="experience-duration">{exp.duration}</span>
                  </div>

                  {exp.responsibilities?.length ? (
                    <ul className="experience-responsibilities">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  ) : null}

                  <TagList items={exp.technologies} label="Technologies & Skills" />
                </motion.article>
              ))}
            </div>
          </Section>
        ) : null}

        {/* Featured Projects Section */}
        {projects.length ? (
          <Section
            id="projects"
            eyebrow={projectsSection.eyebrow}
            title={projectsSection.title}
            intro={projectsSection.intro}
          >
            <div className="projects-grid">
              {projects.map((proj) => (
                <ProjectCard key={proj.id} project={proj} featured={proj.featured} />
              ))}
            </div>
          </Section>
        ) : null}

        {/* Education Section */}
        {educationList.length ? (
          <Section
            id="education"
            eyebrow={educationSection.eyebrow}
            title={educationSection.title}
            intro={educationSection.intro}
          >
            <div className="education-grid">
              {educationList.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="education-card cyber-card"
                  variants={fadeUp}
                  initial={reduce ? "show" : "hidden"}
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                >
                  <div className="education-icon-box" aria-hidden="true">
                    <GraduationCap size={24} />
                  </div>
                  <div className="education-info">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-field">{edu.field}</p>
                    <p className="education-institution">
                      {edu.institution}
                      {edu.location ? <span> · {edu.location}</span> : null}
                    </p>
                    <span className="education-year">{edu.year}</span>
                    {edu.details ? <p className="education-details">{edu.details}</p> : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>
        ) : null}

        {/* Custom Sections (if defined) */}
        {customSecs.map((sec) => (
          <Section
            key={sec.id}
            id={sec.id}
            eyebrow={sec.eyebrow}
            title={sec.title}
            intro={sec.intro}
          >
            {sec.paragraphs?.map((p, i) => (
              <p key={i} className="custom-paragraph">
                {p}
              </p>
            ))}
            {sec.items?.length ? (
              <div className="custom-items-grid">
                {sec.items.map((item, idx) => (
                  <div key={idx} className="custom-item-card cyber-card">
                    <h4>{item.title}</h4>
                    {item.subtitle ? <p className="custom-item-subtitle">{item.subtitle}</p> : null}
                    {item.description ? <p>{item.description}</p> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </Section>
        ))}

        {/* Resume Section */}
        {resume ? (
          <Section
            id="resume"
            eyebrow={documentsSection.eyebrow}
            title={documentsSection.title}
            intro={documentsSection.intro}
          >
            <motion.div
              className="resume-card cyber-card"
              variants={fadeUp}
              initial={reduce ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            >
              <div className="resume-lead">
                <div className="resume-icon-badge" aria-hidden="true">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="resume-title">{resume.title}</h3>
                  <p className="resume-desc">{resume.description}</p>
                  <span className="resume-filename">{resume.fileName}</span>
                </div>
              </div>

              <div className="resume-actions">
                <a
                  href={resume.viewUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-neon-secondary"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  View PDF
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={resume.downloadUrl}
                  download={resume.fileName}
                  className="btn btn-neon-primary"
                >
                  <Download size={16} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </Section>
        ) : null}

        {/* Contact Section */}
        <Section
          id="contact"
          eyebrow={contactSection.eyebrow}
          title={contactSection.title}
          intro={contactSection.intro}
        >
          <div className="contact-grid">
            <div className="contact-details">
              <h3>// DIRECT_CHANNELS</h3>
              <p className="contact-lead">
                Open for opportunities, technical dialogue, and engineering inquiries across
                DevOps architectures and QA automation pipelines.
              </p>

              <div className="contact-channels">
                {profile.email ? (
                  <a href={`mailto:${profile.email}`} className="contact-channel-item cyber-card">
                    <div className="channel-icon" aria-hidden="true">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="channel-label">Email Address</span>
                      <span className="channel-val">{profile.email}</span>
                    </div>
                  </a>
                ) : null}

                {profile.phone ? (
                  <a href={profile.phoneHref || `tel:${profile.phone}`} className="contact-channel-item cyber-card">
                    <div className="channel-icon" aria-hidden="true">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="channel-label">Telephone</span>
                      <span className="channel-val">{profile.phone}</span>
                    </div>
                  </a>
                ) : null}

                {profile.location ? (
                  <div className="contact-channel-item cyber-card">
                    <div className="channel-icon" aria-hidden="true">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="channel-label">Base Location</span>
                      <span className="channel-val">{profile.location}</span>
                    </div>
                  </div>
                ) : null}
              </div>

              {socials.length ? (
                <div className="contact-socials-box">
                  <span className="channel-label">// VERIFIED_PROFILES</span>
                  <div className="contact-social-links">
                    {socials.map((social) => (
                      <a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="btn btn-neon-secondary"
                      >
                        {social.label}
                        <ExternalLink size={13} aria-hidden="true" />
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
