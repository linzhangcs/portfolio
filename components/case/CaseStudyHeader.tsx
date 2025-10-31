import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/lib/projects";

interface CaseStudyHeaderProps {
  project: Project;
  summary?: string;
}

export function CaseStudyHeader({ project, summary }: CaseStudyHeaderProps) {
  return (
    <header className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground">{project.role}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      {summary && (
        <>
          <Separator />
          <p className="text-lg leading-relaxed">{summary}</p>
        </>
      )}
    </header>
  );
}
