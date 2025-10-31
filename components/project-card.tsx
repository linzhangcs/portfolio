import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <Card className="h-full transition-all hover:shadow-lg hover:border-foreground/20">
        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-2xl group-hover:underline">
              {project.title}
            </CardTitle>
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              {project.role}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
