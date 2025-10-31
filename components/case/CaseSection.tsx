import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

interface CaseSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function CaseSection({ title, children, className = "" }: CaseSectionProps) {
  return (
    <section className={`space-y-4 ${className}`}>
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <Separator />
      </div>
      <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-p:leading-relaxed prose-li:leading-relaxed">
        {children}
      </div>
    </section>
  );
}
