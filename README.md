# Portfolio — Next.js 15 + TypeScript

A production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Features a clean, minimal design for case studies authored as TSX content modules.

## Features

- **Next.js 15** with App Router for optimal performance
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for accessible, beautiful UI components
- **Case Studies** as TSX content modules (no MDX needed)
- **Responsive Design** that works on all devices
- **SEO Optimized** with proper meta tags
- **Vercel Ready** for one-click deployment

## Project Structure

```
portfolio/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with nav & footer
│   ├── globals.css              # Global styles with Tailwind
│   ├── page.tsx                 # Home page
│   ├── work/
│   │   ├── page.tsx            # Work index
│   │   └── [slug]/page.tsx     # Dynamic case study pages
│   ├── about/page.tsx          # About page
│   └── contact/page.tsx        # Contact page
├── components/
│   ├── hero.tsx                # Homepage hero section
│   ├── project-card.tsx        # Project card component
│   ├── case/                   # Case study components
│   │   ├── CaseStudyHeader.tsx
│   │   └── CaseSection.tsx
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── separator.tsx
├── lib/
│   ├── utils.ts                # Utility functions
│   └── projects.ts             # Project metadata
├── content/
│   └── projects/               # Case study content
│       ├── growth-wall.tsx
│       ├── ubisoft-secrets.tsx
│       └── dialogue-flow.tsx
└── SETUP.md                    # Detailed setup instructions
```

## Quick Start

### Prerequisites

- Node.js 18.17 or later
- pnpm (install via `npm install -g pnpm` or `brew install pnpm`)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

## Customization Guide

### 1. Update Your Information

**Site Metadata** (`app/layout.tsx`):
- Update the `metadata` object with your name and description
- Change the footer copyright name

**Hero Section** (`components/hero.tsx`):
- Edit the headline and description to match your positioning

**About Page** (`app/about/page.tsx`):
- Replace with your own bio, philosophy, and background

**Contact Page** (`app/contact/page.tsx`):
- Update email addresses and social links
- Implement form submission (currently demo only)

### 2. Add or Edit Projects

**Project Metadata** (`lib/projects.ts`):
```typescript
{
  slug: "your-project",
  title: "Your Project",
  description: "Brief description...",
  role: "Your Role",
  tags: ["Tag 1", "Tag 2"],
  year: "2024",
  featured: true,
}
```

**Case Study Content** (`content/projects/your-project.tsx`):
- Create a new file following the existing structure
- Use `CaseSection` components for consistent formatting
- Update the `contentMap` in `app/work/[slug]/page.tsx`

### 3. Styling

**Colors** (`tailwind.config.ts` and `app/globals.css`):
- Modify CSS variables in `globals.css` for custom colors
- Update `tailwind.config.ts` for extended theme values

**Typography**:
- Change the font in `app/layout.tsx` (currently using Inter)
- Adjust prose styling in `globals.css`

### 4. Add More Pages

Create new pages in the `app` directory:
```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog content</div>;
}
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use the Vercel CLI:
```bash
pnpm add -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other variables as needed
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.6
- **Styling**: Tailwind CSS 3.4
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React (optional)

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Case Study Content Structure

Each case study follows this structure:
- **Overview** - Project summary and challenge
- **Context & Role** - Your responsibilities
- **Process & System Design** - How you approached the work
- **Key Highlights** - 3 major accomplishments
- **Outcomes** - Results and metrics
- **Links & Resources** - External resources (TODO placeholders included)

## Support

For detailed setup instructions, see `SETUP.md`.

## License

This portfolio template is free to use and modify for personal or commercial projects.

---

Built with Next.js 15 + TypeScript + Tailwind CSS + shadcn/ui
