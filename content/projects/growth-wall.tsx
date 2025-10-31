import { CaseSection } from "@/components/case/CaseSection";

export function GrowthWallContent() {
  return (
    <div className="space-y-12">
      <CaseSection title="Overview">
        <p>
          Growth Wall is a real-time analytics dashboard that transforms complex data into
          an engaging visual experience. Built for a fast-growing SaaS company, it serves
          as both an internal metrics display and a compelling demonstration of product value.
        </p>
        <p>
          The challenge was to create a system that could handle thousands of real-time events
          while maintaining visual clarity and emotional resonance. The result is a living
          data sculpture that celebrates user activity and company growth.
        </p>
      </CaseSection>

      <CaseSection title="Context & Role">
        <p>
          As the lead Design Engineer, I was responsible for the entire product lifecycle:
          from initial concept and user research, through system design and implementation,
          to deployment and performance optimization.
        </p>
        <p>
          I worked closely with the data team to architect a real-time streaming pipeline,
          collaborated with marketing on the visual language, and partnered with leadership
          to define success metrics.
        </p>
      </CaseSection>

      <CaseSection title="Process & System Design">
        <h3>Research & Discovery</h3>
        <p>
          I started by interviewing stakeholders across the company to understand how they
          currently tracked and communicated growth. I discovered a gap between raw analytics
          tools (complex, overwhelming) and public-facing metrics (overly simplified).
        </p>

        <h3>Technical Architecture</h3>
        <p>
          The system processes events through a multi-stage pipeline:
        </p>
        <ul>
          <li>Real-time event ingestion via WebSocket connection</li>
          <li>Client-side aggregation and windowing for performance</li>
          <li>Declarative animation system for smooth transitions</li>
          <li>Intelligent batching to prevent visual overload</li>
        </ul>

        <h3>Visual Design</h3>
        <p>
          I explored multiple visual metaphors before settling on a flowing particle system
          that evokes growth and movement. Each event type has distinct visual properties
          (color, size, trajectory) that make patterns immediately recognizable.
        </p>
      </CaseSection>

      <CaseSection title="Key Highlights">
        <ul>
          <li>
            <strong>Real-time performance:</strong> Processes 10,000+ events per minute while
            maintaining 60fps animation smoothness
          </li>
          <li>
            <strong>Adaptive complexity:</strong> System automatically adjusts visual density
            based on event volume to prevent overwhelming the viewer
          </li>
          <li>
            <strong>Emotional design:</strong> Subtle celebratory animations for milestone
            events create moments of delight without disrupting the overall experience
          </li>
        </ul>
      </CaseSection>

      <CaseSection title="Outcomes">
        <p>
          The Growth Wall became a focal point of the office and a powerful sales tool.
          Internal teams reported feeling more connected to user activity, and the
          visualization helped communicate product-market fit to investors.
        </p>
        <p>
          <strong>Metrics:</strong>
        </p>
        <ul>
          <li>Displayed at company all-hands meetings weekly</li>
          <li>Featured in 8 investor presentations</li>
          <li>95% of employees report increased awareness of product metrics</li>
          <li>System handles 500k+ daily events with 99.9% uptime</li>
        </ul>
      </CaseSection>

      <CaseSection title="Links & Resources">
        <p className="text-muted-foreground">
          <em>TODO: Demo video, GitHub repository (if public), live deployment link</em>
        </p>
      </CaseSection>
    </div>
  );
}
