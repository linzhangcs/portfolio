export interface Experiment {
  id: string;
  title: string;
  description: string;
  image?: string;
  externalUrl: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

export const experiments: Experiment[] = [
  {
    id: "generative-patterns",
    title: "Generative Patterns",
    description: "An interactive canvas exploring algorithmic pattern generation with real-time parameter control.",
    image: "/experiments/patterns.jpg",
    externalUrl: "https://github.com", // TODO: Replace with actual URL
    tags: ["Creative Coding", "WebGL", "Generative Art"],
    year: "2024",
    featured: true,
  },
  {
    id: "micro-interactions",
    title: "Micro-Interactions Library",
    description: "A curated collection of delightful UI micro-interactions built with Framer Motion.",
    image: "/experiments/interaction.jpg",
    externalUrl: "https://github.com", // TODO: Replace with actual URL
    tags: ["Animation", "React", "UI Design"],
    year: "2023",
    featured: true,
  },
  {
    id: "data-viz-sketches",
    title: "Data Viz Sketches",
    description: "Weekly data visualization experiments exploring different chart types and interaction patterns.",
    image: "/experiments/data-vis.jpg",
    externalUrl: "https://github.com", // TODO: Replace with actual URL
    tags: ["D3.js", "Data Viz", "SVG"],
    year: "2023",
  },
];

export function getExperimentById(id: string): Experiment | undefined {
  return experiments.find((exp) => exp.id === id);
}

export function getFeaturedExperiments(): Experiment[] {
  return experiments.filter((exp) => exp.featured);
}
