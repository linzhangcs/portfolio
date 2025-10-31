import { CaseSection } from "@/components/case/CaseSection";

export function UbisoftSecretsContent() {
  return (
    <div className="space-y-12">
      <CaseSection title="Overview">
        <p>
          Ubisoft Secrets is an immersive treasure hunt experience designed to promote
          game launches through engaging, location-based gameplay. Players discover hidden
          clues in the physical world that unlock digital rewards and exclusive content.
        </p>
        <p>
          The project required seamless integration between mobile app, web platform, and
          physical installations across multiple cities. The goal was to create a sense of
          mystery and discovery that extended the game worlds beyond the screen.
        </p>
      </CaseSection>

      <CaseSection title="Context & Role">
        <p>
          I served as Lead Designer and Developer for the digital experience, managing a
          team of two developers and collaborating with Ubisoft's marketing and events teams.
        </p>
        <p>
          My responsibilities spanned interaction design, technical architecture, AR
          integration, and on-site implementation. I also designed the admin tools used
          by event coordinators to manage the experience in real-time.
        </p>
      </CaseSection>

      <CaseSection title="Process & System Design">
        <h3>Experience Design</h3>
        <p>
          I mapped the player journey from discovery to completion, identifying key moments
          for delight and challenge. We prototyped multiple interaction patterns before
          settling on a mixed-reality approach that felt magical but accessible.
        </p>

        <h3>Technical Challenges</h3>
        <p>
          The system needed to work reliably in varied outdoor conditions with potentially
          spotty connectivity. Key technical decisions included:
        </p>
        <ul>
          <li>Offline-first architecture with smart sync when connectivity restored</li>
          <li>Computer vision for physical marker recognition (fallback to QR codes)</li>
          <li>Progressive web app for zero-friction entry (no app store required)</li>
          <li>Real-time admin dashboard for event coordinators to monitor progress</li>
        </ul>

        <h3>Cross-Platform Integration</h3>
        <p>
          I designed a unified codebase that deployed to web, iOS, and Android while
          maintaining native-feeling interactions on each platform. The component system
          allowed rapid iteration while ensuring consistency.
        </p>
      </CaseSection>

      <CaseSection title="Key Highlights">
        <ul>
          <li>
            <strong>Multi-city deployment:</strong> Successfully launched in 5 cities across
            3 countries with localized content and culturally adapted puzzles
          </li>
          <li>
            <strong>Accessibility-first:</strong> Designed alternative solving methods for
            users with visual or mobility limitations, ensuring inclusive participation
          </li>
          <li>
            <strong>Viral mechanics:</strong> Built-in social sharing and team features
            drove organic promotion, reducing customer acquisition costs
          </li>
        </ul>
      </CaseSection>

      <CaseSection title="Outcomes">
        <p>
          The campaign exceeded all engagement targets and became a template for future
          Ubisoft promotional experiences. Players particularly praised the seamless blend
          of physical and digital interaction.
        </p>
        <p>
          <strong>Impact:</strong>
        </p>
        <ul>
          <li>12,000+ active participants across all locations</li>
          <li>Average session duration of 45 minutes (target was 20 minutes)</li>
          <li>87% completion rate for the full experience</li>
          <li>2.3x increase in game pre-orders in participating markets</li>
          <li>Featured in AdWeek and The Verge for innovative campaign design</li>
        </ul>
      </CaseSection>

      <CaseSection title="Links & Resources">
        <p className="text-muted-foreground">
          <em>TODO: Campaign video, press coverage links, player testimonials</em>
        </p>
      </CaseSection>
    </div>
  );
}
