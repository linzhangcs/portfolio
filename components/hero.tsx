import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Design Engineer crafting emotionally intelligent, AI-powered interfaces.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          I bridge design and engineering to build products that feel human.
          Currently exploring how AI can amplify creativity and connection.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/work">View Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
