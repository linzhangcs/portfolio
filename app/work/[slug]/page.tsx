import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CaseStudyHeader } from "@/components/case/CaseStudyHeader";
import { getProjectBySlug, projects } from "@/lib/projects";
import { GrowthWallContent } from "@/content/projects/growth-wall";
import { UbisoftSecretsContent } from "@/content/projects/ubisoft-secrets";
import { DialogueFlowContent } from "@/content/projects/dialogue-flow";
import { ArrowLeft } from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Map slugs to content components
const contentMap: Record<string, () => JSX.Element> = {
  "growth-wall": GrowthWallContent,
  "ubisoft-secrets": UbisoftSecretsContent,
  "dialogue-flow": DialogueFlowContent,
};

// Summaries for each case study
const summaries: Record<string, string> = {
  "growth-wall":
    "A real-time analytics dashboard that transforms complex data into an engaging visual experience, celebrating user activity and company growth through a living data sculpture.",
  "ubisoft-secrets":
    "An immersive treasure hunt experience blending physical and digital gameplay across multiple cities, designed to promote game launches through engaging, location-based interaction.",
  "dialogue-flow":
    "A visual editor for creating branching conversation trees with AI-powered writing assistance, helping narrative designers maintain consistency and accelerate iteration.",
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata(props: CaseStudyPageProps) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${project.title} — Portfolio`,
    description: project.description,
  };
}

export default async function CaseStudyPage(props: CaseStudyPageProps) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const ContentComponent = contentMap[params.slug];

  if (!ContentComponent) {
    notFound();
  }

  const summary = summaries[params.slug];

  return (
    <article className="container mx-auto px-6 py-16 max-w-4xl">
      <div className="space-y-12">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link href="/work">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Link>
        </Button>

        <CaseStudyHeader project={project} summary={summary} />

        <ContentComponent />
      </div>
    </article>
  );
}
