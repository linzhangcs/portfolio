import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Work — Portfolio",
  description: "Selected case studies and projects.",
};

export default function WorkPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Selected case studies showcasing design engineering work across product design,
            AI experiences, and interactive systems.
          </p>
          <Separator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
