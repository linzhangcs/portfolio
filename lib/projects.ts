export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  tags: string[];
  year: string;
  featured: boolean;
  thumbnail?: string;
}

export const projects: Project[] = [
  {
    slug: "growth-wall",
    title: "Growth Wall",
    description: "A live analytics dashboard that visualizes key performance metrics and user engagement patterns in real-time.",
    role: "Design Engineer",
    tags: ["Product Design", "Full-Stack", "Data Visualization"],
    year: "2024",
    featured: true,
  },
  {
    slug: "ubisoft-secrets",
    title: "Ubisoft Secrets",
    description: "An immersive treasure hunt experience combining physical and digital gameplay mechanics for player engagement.",
    role: "Lead Designer & Developer",
    tags: ["Interactive Experience", "Game Design", "Mobile"],
    year: "2023",
    featured: true,
  },
  {
    slug: "dialogue-flow",
    title: "Dialogue Flow System",
    description: "A node-based conversation editor for creating branching narratives with AI-powered suggestions.",
    role: "Product Design & Engineering",
    tags: ["AI/ML", "Design Systems", "Developer Tools"],
    year: "2024",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
