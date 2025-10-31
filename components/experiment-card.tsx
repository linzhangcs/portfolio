import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import type { Experiment } from "@/lib/experiments";

interface ExperimentCardProps {
  experiment: Experiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <a
      href={experiment.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="h-full transition-all hover:shadow-lg hover:border-foreground/20 overflow-hidden">
        {/* Image Section */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {experiment.image ? (
            <img
              src={experiment.image}
              alt={experiment.title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-4xl">🎨</span>
            </div>
          )}

          {/* External Link Indicator */}
          <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4" />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium flex items-center gap-2">
              View Project <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl">{experiment.title}</CardTitle>
            <span className="text-sm text-muted-foreground">{experiment.year}</span>
          </div>
          <CardDescription>{experiment.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {experiment.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
