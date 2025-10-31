import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About — Portfolio",
  description: "Learn more about my design engineering philosophy and approach.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-3xl">
      <div className="space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <Separator />
        </div>

        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-p:leading-relaxed prose-li:leading-relaxed">
          <h2>Hello, I'm Lin Zhang</h2>
          <p>
            I'm a Design Engineer who believes that the best products are built at the
            intersection of design and engineering. I craft emotionally intelligent,
            AI-powered interfaces that feel human and delightful to use.
          </p>

          <h3>Philosophy</h3>
          <p>
            Technology should amplify human creativity and connection, not replace it. I
            approach every project by asking: How can this tool make someone feel more
            capable? How can it create moments of genuine delight?
          </p>
          <p>
            I believe in:
          </p>
          <ul>
            <li>
              <strong>Craftsmanship over speed:</strong> Building things right takes time,
              and that investment pays dividends in user satisfaction
            </li>
            <li>
              <strong>Design systems thinking:</strong> Creating reusable, composable
              components that scale across products
            </li>
            <li>
              <strong>Continuous learning:</strong> The field evolves rapidly; staying
              curious and adaptable is essential
            </li>
            <li>
              <strong>Inclusive design:</strong> Great products work for everyone, not just
              the able-bodied or technically savvy
            </li>
          </ul>

          <h3>Background</h3>
          <p>
            My journey started in visual design before evolving into full-stack development.
            This hybrid skillset lets me prototype rapidly, communicate effectively with both
            designers and engineers, and own projects from concept to production.
          </p>
          <p>
            I've worked with startups, agencies, and large tech companies, shipping products
            used by millions of people. Along the way, I've learned that the most impactful
            work happens when you deeply understand both the user's needs and the technical
            constraints.
          </p>

          <h3>Currently</h3>
          <p>
            I'm exploring how AI can enhance creativity in design tools, particularly around
            generative interfaces and intelligent design assistance. I'm fascinated by systems
            that learn from users and adapt to their workflow rather than forcing rigid patterns.
          </p>
          <p>
            When I'm not building products, you'll find me contributing to open source,
            mentoring junior designers, or experimenting with generative art.
          </p>

          <h3>Let's Connect</h3>
          <p>
            I'm always interested in collaborating on projects that push boundaries and make
            a meaningful impact. If you're working on something exciting, let's talk.
          </p>
        </div>
      </div>
    </div>
  );
}
