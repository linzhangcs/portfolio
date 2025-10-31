import { ExperimentCard } from "@/components/experiment-card";
import { experiments } from "@/lib/experiments";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Experiments — Portfolio",
  description: "Fun side projects and creative experiments.",
};

export default function ExperimentsPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Experiments</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of side projects, creative coding experiments, and explorations.
            These are playful investigations into new technologies, techniques, and ideas.
          </p>
          <Separator />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>

        {experiments.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No experiments yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
