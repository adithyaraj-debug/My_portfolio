import profilePhoto from "../assets/profile.jpg";

/**
 * Portfolio content
 * -----------------
 * Edit this file to update the site. Components read from here and hide
 * anything that is empty, so you can add, remove, or leave fields blank.
 *
 * Profile photo: replace src/assets/profile.jpg. Do not crop or retouch
 * the face if you want the current portrait to stay accurate.
 *
 * Resume: replace public/resume/AdithyaRaj_Resume.pdf, or paste a Google
 * Drive file ID or shareable link into documents[0].googleDriveFileId.
 * Example: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * No Drive API or sign-in is used. The link only has to be shareable.
 *
 * Add a project, internship, skill, school, or document by copying an
 * existing object and filling in the fields you have. Optional fields
 * can stay as empty strings or empty arrays.
 *
 * Set hidden: true to keep an entry in the file without showing it.
 *
 * New page sections: add an object to customSections. It renders between
 * Education and Resume. Use that for certifications later, for example:
 * {
 *   id: "certifications",
 *   navLabel: "Certifications",
 *   eyebrow: "Credentials",
 *   title: "Certifications",
 *   intro: "",
 *   paragraphs: [],
 *   items: [{ title: "", subtitle: "", description: "", url: "" }],
 * }
 */

export const profile = {
  name: "Adithya Raj",
  headline: "Cloud & DevOps | QA Automation Engineer",
  summary:
    "DevOps-focused B.Tech graduate (AI & Data Science) with internship experience in Linux, Git/GitLab, Docker, Kubernetes, Terraform, Ansible and AWS. Skilled in building GitLab CI/CD pipelines and deploying containerized applications to Kubernetes, with added QA experience in manual, Playwright (TypeScript), API and performance testing. Seeking an entry-level DevOps Engineer role.",
  location: "Ernakulam, Kerala",
  email: "adithyaraj560@gmail.com",
  phone: "8129935507",
  phoneHref: "tel:+918129935507",
  photo: profilePhoto,
  photoAlt: "Portrait of Adithya Raj",
  photoWidth: 853,
  photoHeight: 1024,
  heroMeta: [
    { label: "Education", value: "B.Tech, AI & Data Science" },
    { label: "Seeking", value: "Entry-level DevOps Engineer" },
    { label: "Focus", value: "CI/CD, Kubernetes, and QA automation" },
  ],
  focusAreas: [
    "Linux",
    "Kubernetes",
    "GitLab CI/CD",
    "Terraform",
    "AWS",
    "Playwright",
  ],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adithyaraj560",
    },
    {
      label: "GitLab",
      href: "https://gitlab.com/adithyaraj560",
    },
  ],
};

export const about = {
  eyebrow: "Profile",
  title: "About Me",
  paragraphs: [
    "I am a DevOps-focused B.Tech graduate in Artificial Intelligence and Data Science, based in Ernakulam, Kerala. My work sits between cloud delivery and software quality: GitLab CI/CD, containerized applications, Kubernetes deployments, and testing with Playwright.",
    "At Techmindz I trained and worked hands-on with Linux, Git and GitLab, Docker, Kubernetes, Terraform, Ansible, and AWS, applying CI/CD, containerization, and deployment through project-based learning. At Testing Mavens I am working across manual, automation, API, and performance testing, and building Playwright frameworks in TypeScript for different websites.",
  ],
  interests: [
    {
      icon: "cloud",
      title: "Cloud & DevOps",
      text: "I am focused on the path from a change in Git to a service running on Kubernetes. That includes GitLab CI/CD, Docker, Docker Compose, Terraform, Ansible, and AWS.",
    },
    {
      icon: "qa",
      title: "Software testing & automation",
      text: "I am equally interested in how those systems are verified. My current internship covers manual testing, API testing, performance testing, UI automation, and end-to-end checks with Playwright.",
    },
  ],
  goals: {
    title: "Technical career goals",
    text: "I am seeking an entry-level DevOps Engineer role where I can contribute to pipelines, containerization, and cloud deployment.",
  },
  learning: {
    title: "Continuous learning",
    text: "Both internships are hands-on. I learn a tool, then apply it in project work, including troubleshooting CI pipelines, APIs, Docker, and application errors.",
  },
  facts: [
    {
      label: "Education",
      value: "B.Tech, AI & Data Science",
      detail: "Vishwajyothi College of Engineering and Technology · 2026",
    },
    {
      label: "Based in",
      value: "Ernakulam, Kerala",
      detail: "",
    },
    {
      label: "Currently",
      value: "Intern, Testing Mavens",
      detail: "Infopark, Kakkanad, Kochi",
    },
    {
      label: "Leadership",
      value: "Design Head, IEEE",
      detail: "2023 – 2024",
    },
  ],
  softSkills: [
    "Teamwork",
    "Leadership",
    "Problem Solving",
    "Analytical Thinking",
    "Adaptability",
    "Collaboration",
  ],
};

export const skillGroups = [
  {
    id: "cloud",
    tone: "cloud",
    eyebrow: "Infrastructure",
    title: "Cloud & DevOps",
    intro:
      "Tools from my DevOps internship and project work: version control, containers, CI/CD, and cloud infrastructure. No proficiency scores are shown.",
    items: [
      { id: "linux", name: "Linux", icon: "terminal" },
      { id: "git", name: "Git", icon: "git" },
      { id: "gitlab", name: "GitLab", icon: "git" },
      { id: "github", name: "GitHub", icon: "git" },
      { id: "gitlab-cicd", name: "GitLab CI/CD", icon: "workflow" },
      { id: "docker", name: "Docker", icon: "container" },
      { id: "compose", name: "Docker Compose", icon: "layers" },
      { id: "kubernetes", name: "Kubernetes", icon: "network" },
      { id: "aws", name: "AWS (EC2)", icon: "cloud" },
      { id: "terraform", name: "Terraform", icon: "blocks" },
      { id: "ansible", name: "Ansible", icon: "cog" },
    ],
  },
  {
    id: "qa",
    tone: "qa",
    eyebrow: "Quality",
    title: "QA & Automation",
    intro:
      "Testing skills from my Testing Mavens internship and the automation practices I use with Playwright. JavaScript, UI automation, end-to-end testing, Page Object Model, and hybrid API/UI testing are included from my working practice.",
    items: [
      { id: "playwright", name: "Playwright", icon: "browser" },
      { id: "typescript", name: "TypeScript", icon: "code" },
      { id: "javascript", name: "JavaScript", icon: "braces" },
      { id: "manual", name: "Manual Testing", icon: "clipboard" },
      { id: "automation", name: "Automation Testing", icon: "repeat" },
      { id: "ui", name: "UI Automation", icon: "pointer" },
      { id: "api", name: "API Testing", icon: "cable" },
      { id: "e2e", name: "E2E Testing", icon: "route" },
      { id: "performance", name: "Performance Testing", icon: "gauge" },
      { id: "pom", name: "Page Object Model", icon: "layout" },
      { id: "hybrid", name: "Hybrid API/UI Testing", icon: "combine" },
    ],
  },
  {
    id: "development",
    tone: "development",
    eyebrow: "Engineering",
    title: "Development Skills",
    intro:
      "Application skills used with my infrastructure work, including the Spring Boot microservices in the CI/CD project. Java is listed as basic, matching my resume.",
    items: [
      { id: "java", name: "Java (Basic)", icon: "coffee" },
      { id: "spring", name: "Spring Boot", icon: "leaf" },
      { id: "rest", name: "REST APIs", icon: "webhook" },
      { id: "maven", name: "Maven", icon: "package" },
      { id: "microservices", name: "Microservices", icon: "network" },
      { id: "h2", name: "H2 Database", icon: "database" },
    ],
  },
];

export const experienceSection = {
  eyebrow: "Internships",
  title: "Professional Experience",
  intro:
    "Internship roles in software testing and DevOps. Responsibilities are taken from my resume.",
};

export const experiences = [
  {
    id: "testing-mavens",
    position: "Intern",
    company: "Testing Mavens",
    location: "Infopark, Kakkanad, Kochi",
    duration: "October 2026 – Present",
    responsibilities: [
      "Hands-on training in manual testing, automation testing, API testing and performance testing.",
      "Built Playwright automation frameworks with TypeScript to automate tests for multiple different websites.",
    ],
    technologies: [
      "Playwright",
      "TypeScript",
      "Manual Testing",
      "Automation Testing",
      "API Testing",
      "Performance Testing",
    ],
  },
  {
    id: "techmindz",
    position: "DevOps Intern",
    company: "Techmindz",
    location: "Ernakulam, Kerala",
    duration: "June 2026 – November 2026",
    responsibilities: [
      "Trained and worked hands-on with Linux, Git/GitLab, Docker, Kubernetes, Terraform, Ansible and AWS.",
      "Applied CI/CD concepts, containerization and deployment workflows through project-based learning.",
    ],
    technologies: [
      "Linux",
      "Git",
      "GitLab",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "AWS",
    ],
  },
];

export const projectsSection = {
  eyebrow: "Selected work",
  title: "Featured Projects",
  intro:
    "Projects from my resume, including a containerized microservices platform and academic applications.",
};

export const projects = [
  {
    id: "microservices-platform",
    featured: true,
    title:
      "Cloud-Based Containerized Microservices CI/CD & Kubernetes Deployment Platform",
    summary:
      "A delivery platform for User, Product, and Order microservices. The services use Spring Boot and REST APIs, run in Docker, and deploy through GitLab CI/CD to Kubernetes. AWS infrastructure for the deployment was created with Terraform and configured with Ansible.",
    features: [
      "Developed and integrated User, Product and Order microservices using Spring Boot and REST APIs.",
      "Containerized services with Docker and managed multi-container development using Docker Compose.",
      "Built a GitLab CI/CD pipeline with 4 stages and 12 service-specific jobs to automate build, validation and deployment.",
      "Consolidated three GitLab repositories into a single private monorepo for centralized source control and CI/CD management.",
      "Created an AWS EC2 instance using Terraform and configured it using Ansible as part of the cloud deployment.",
      "Implemented continuous deployment to a Kubernetes environment.",
      "Troubleshot CI pipeline, API, Docker and application errors during development.",
    ],
    technologies: [
      "Spring Boot",
      "REST APIs",
      "Docker",
      "Docker Compose",
      "GitLab",
      "GitLab CI/CD",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "AWS EC2",
    ],
    screenshots: [],
    repository: "",
    demo: "",
  },
  {
    id: "predicting-best-11",
    featured: false,
    title: "Predicting Best 11 Using Deep Learning",
    summary:
      "An academic application that predicts an optimal playing XI using deep learning techniques.",
    features: [],
    technologies: ["Deep Learning"],
    screenshots: [],
    repository: "",
    demo: "",
  },
  {
    id: "smart-spectacles",
    featured: false,
    title: "Smart Spectacles for Blind / Visually Impaired People",
    summary:
      "A smart wearable concept using YOLO-based object detection and image processing to assist visually impaired users.",
    features: [],
    technologies: ["YOLO", "Object Detection", "Image Processing"],
    screenshots: [],
    repository: "",
    demo: "",
  },
];

export const educationSection = {
  eyebrow: "Academics",
  title: "Education",
  intro: "",
};

export const education = [
  {
    id: "btech",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Artificial Intelligence & Data Science",
    institution: "Vishwajyothi College of Engineering and Technology",
    location: "Muvattupuzha, Kerala",
    year: "2026",
    details: "",
  },
];

export const documentsSection = {
  eyebrow: "Curriculum vitae",
  title: "Resume",
  intro: "View or download the current version of my resume.",
};

export const documents = [
  {
    id: "resume",
    title: "Adithya Raj — Resume",
    description:
      "Cloud and DevOps experience, QA automation, projects, and education.",
    fileName: "AdithyaRaj_Resume.pdf",
    googleDriveFileId: "",
    localPath: "/resume/AdithyaRaj_Resume.pdf",
  },
];

export const contactSection = {
  eyebrow: "Get in touch",
  title: "Contact",
  intro:
    "For roles, collaborations, or questions, email me directly or use the form. The form opens your email app with a draft. This site does not store or submit the message.",
};

export const customSections = [];

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function getSocials() {
  return (profile.socials || []).filter((item) => hasText(item?.href) && hasText(item?.label));
}

export function getSkillGroup(id) {
  return skillGroups.find((group) => group.id === id) || null;
}

export function visibleSkills(group) {
  if (!group?.items) return [];
  return group.items
    .filter((item) => item && !item.hidden && hasText(item.name))
    .map((item) => ({
      id: item.id || item.name,
      name: item.name.trim(),
      icon: item.icon || "",
      note: hasText(item.note) ? item.note.trim() : "",
    }));
}

export function visibleExperiences() {
  return experiences.filter((item) => item && !item.hidden && hasText(item.company || item.position));
}

export function visibleProjects() {
  return projects.filter((item) => item && !item.hidden && hasText(item.title));
}

export function visibleEducation() {
  return education.filter((item) => item && !item.hidden && hasText(item.degree || item.institution));
}

function extractDriveId(value) {
  const fromPath = value.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fromPath) return fromPath[1];
  const fromQuery = value.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (fromQuery) return fromQuery[1];
  if (/^[a-zA-Z0-9_-]{10,}$/.test(value) && !value.startsWith("http")) return value;
  return "";
}

export function resolveDocument(doc) {
  if (!doc || doc.hidden) return null;
  const provided = String(doc.googleDriveFileId || doc.url || "").trim();

  if (provided) {
    const driveId = extractDriveId(provided);
    if (driveId) {
      return {
        ...doc,
        viewUrl: provided.startsWith("http")
          ? provided
          : `https://drive.google.com/file/d/${driveId}/view`,
        downloadUrl: `https://drive.google.com/uc?export=download&id=${driveId}`,
        source: "google-drive",
      };
    }
    if (provided.startsWith("http://") || provided.startsWith("https://")) {
      return {
        ...doc,
        viewUrl: provided,
        downloadUrl: provided,
        source: "external",
      };
    }
  }

  const localPath = String(doc.localPath || "").trim();
  if (!localPath) return null;
  return {
    ...doc,
    viewUrl: localPath,
    downloadUrl: localPath,
    source: "local",
  };
}

export function getDocuments() {
  return documents.map(resolveDocument).filter(Boolean);
}

export function getResumeDocument() {
  const resolved = getDocuments();
  return resolved.find((doc) => doc.id === "resume") || resolved[0] || null;
}

function hasAboutContent() {
  return (
    (about.paragraphs || []).some(hasText) ||
    (about.interests || []).length > 0 ||
    (about.facts || []).length > 0 ||
    hasText(about.goals?.text) ||
    hasText(about.learning?.text)
  );
}

function hasContactContent() {
  return (
    hasText(profile.email) ||
    hasText(profile.phone) ||
    hasText(profile.location) ||
    getSocials().length > 0
  );
}

export function visibleCustomSections() {
  return customSections.filter((section) => {
    if (!section || section.hidden || !hasText(section.title) || !hasText(section.id)) return false;
    const paragraphs = (section.paragraphs || []).some(hasText);
    const items = (section.items || []).some((item) => hasText(item?.title) || hasText(item?.description));
    return paragraphs || items;
  });
}

export function getNavigation() {
  const skillIds = skillGroups
    .filter((group) => visibleSkills(group).length > 0)
    .map((group) => group.id);

  const items = [
    { id: "about", label: "About", observe: ["about"], visible: hasAboutContent() },
    {
      id: skillIds[0] || "cloud",
      label: "Expertise",
      observe: skillIds,
      visible: skillIds.length > 0,
    },
    {
      id: "experience",
      label: "Experience",
      observe: ["experience"],
      visible: visibleExperiences().length > 0,
    },
    {
      id: "projects",
      label: "Projects",
      observe: ["projects"],
      visible: visibleProjects().length > 0,
    },
    {
      id: "education",
      label: "Education",
      observe: ["education"],
      visible: visibleEducation().length > 0,
    },
    ...visibleCustomSections()
      .filter((section) => section.showInNav !== false)
      .map((section) => ({
        id: section.id,
        label: section.navLabel || section.title,
        observe: [section.id],
        visible: true,
      })),
    {
      id: "resume",
      label: "Resume",
      observe: ["resume"],
      visible: getDocuments().length > 0,
    },
    {
      id: "contact",
      label: "Contact",
      observe: ["contact"],
      visible: hasContactContent(),
    },
  ];

  return items.filter((item) => item.visible && item.id);
}
