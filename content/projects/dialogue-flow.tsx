import { CaseSection } from "@/components/case/CaseSection";

export function DialogueFlowContent() {
  return (
    <div className="space-y-12">
      <CaseSection title="Overview">
        <p>
          Dialogue Flow is a visual editor for creating branching conversation trees,
          designed for game developers, chatbot builders, and interactive fiction authors.
          It combines the flexibility of code with the clarity of visual node editing.
        </p>
        <p>
          The key innovation is AI-powered writing assistance that suggests contextually
          appropriate responses, helps maintain character voice consistency, and flags
          potential narrative dead-ends before they become problems.
        </p>
      </CaseSection>

      <CaseSection title="Context & Role">
        <p>
          I led product design and engineering as part of a small team building developer
          tools for narrative designers. This was a ground-up product initiative requiring
          extensive user research with game writers and technical writers.
        </p>
        <p>
          My role encompassed: user research and validation, interaction design for complex
          workflows, implementation of the canvas-based editor, and integration of machine
          learning models for writing assistance.
        </p>
      </CaseSection>

      <CaseSection title="Process & System Design">
        <h3>User Research</h3>
        <p>
          I interviewed 15 narrative designers across indie studios and AAA companies.
          The consistent pain points were: existing tools felt either too technical
          (code-only) or too limiting (template-based), and maintaining consistency across
          large dialogue trees was time-consuming and error-prone.
        </p>

        <h3>Interaction Design</h3>
        <p>
          The core challenge was making complex graph structures feel simple. Key design
          decisions included:
        </p>
        <ul>
          <li>Infinite canvas with intelligent auto-layout to prevent node spaghetti</li>
          <li>Inline editing with rich text support and variable insertion</li>
          <li>Contextual inspectors that show relevant properties based on selection</li>
          <li>Visual indicators for branching logic, conditions, and state changes</li>
        </ul>

        <h3>AI Integration</h3>
        <p>
          Rather than replacing writers, the AI acts as a collaborative assistant. It
          analyzes the existing conversation tree to learn tone and style, then suggests
          completions that match the established voice. Writers can accept, modify, or
          ignore suggestions without breaking their flow.
        </p>
      </CaseSection>

      <CaseSection title="Key Highlights">
        <ul>
          <li>
            <strong>Performance at scale:</strong> Optimized canvas rendering handles
            1000+ node graphs at 60fps with smooth pan/zoom interactions
          </li>
          <li>
            <strong>Collaborative editing:</strong> Real-time multiplayer with conflict
            resolution and presence indicators for distributed teams
          </li>
          <li>
            <strong>Extensible architecture:</strong> Plugin system allows studios to
            integrate with their existing pipelines and add custom node types
          </li>
        </ul>
      </CaseSection>

      <CaseSection title="Outcomes">
        <p>
          Dialogue Flow launched in early access and quickly gained traction in the indie
          game community. The AI writing features received particular praise for respecting
          author voice while accelerating iteration.
        </p>
        <p>
          <strong>Adoption & Impact:</strong>
        </p>
        <ul>
          <li>850+ studios using the tool in production within 6 months</li>
          <li>Users report 40% faster dialogue authoring compared to previous tools</li>
          <li>92% of users actively use the AI suggestion features</li>
          <li>Featured in GDC 2024 Tools Summit</li>
          <li>4.8/5 star average rating with 200+ reviews</li>
        </ul>
      </CaseSection>

      <CaseSection title="Links & Resources">
        <p className="text-muted-foreground">
          <em>TODO: Product demo, documentation site, GDC talk recording, user testimonials</em>
        </p>
      </CaseSection>
    </div>
  );
}
