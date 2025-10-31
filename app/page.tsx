import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />

      <section className="container mx-auto px-6 pb-24">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">Featured Work</h2>
            <Separator />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
