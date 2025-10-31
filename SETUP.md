# Portfolio Setup Guide

This document outlines the commands to initialize this Next.js 15 + TypeScript portfolio from scratch.

## Prerequisites

- Node.js 18.17 or later
- pnpm (install via `npm install -g pnpm` or `brew install pnpm`)

## Setup Commands

### 1. Create Next.js App with TypeScript

```bash
pnpm create next-app@latest portfolio --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd portfolio
```

When prompted:
- Would you like to use TypeScript? **Yes**
- Would you like to use ESLint? **Yes**
- Would you like to use Tailwind CSS? **Yes**
- Would you like to use `src/` directory? **No**
- Would you like to use App Router? **Yes**
- Would you like to customize the default import alias? **No** (use @/*)

### 2. Initialize shadcn/ui

```bash
npx shadcn@latest init
```

When prompted:
- Which style would you like to use? **Default**
- Which color would you like to use as base color? **Neutral**
- Would you like to use CSS variables for colors? **Yes**

### 3. Add shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add separator
npx shadcn@latest add textarea
```

### 4. Install Additional Dependencies (Optional)

```bash
# For animations
pnpm add framer-motion

# For icons (optional)
pnpm add lucide-react
```

### 5. Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Next.js 15 portfolio scaffold"
```

### 6. Development Server

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
portfolio/
├── .gitignore
├── next.config.mjs
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── components.json
├── package.json
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── hero.tsx
│   ├── project-card.tsx
│   ├── case/
│   │   ├── CaseStudyHeader.tsx
│   │   └── CaseSection.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       └── separator.tsx
├── lib/
│   ├── utils.ts
│   └── projects.ts
└── content/
    └── projects/
        ├── growth-wall.tsx
        ├── ubisoft-secrets.tsx
        └── dialogue-flow.tsx
```

## Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Environment Variables

Create a `.env.local` file for local development:

```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Customization

1. **Metadata**: Update `app/layout.tsx` with your name, description, and social links
2. **Content**: Edit case studies in `content/projects/`
3. **Projects**: Modify `lib/projects.ts` to add/remove projects
4. **Styling**: Customize colors in `tailwind.config.ts` and `app/globals.css`

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI + Tailwind)
- **Deployment**: Vercel (recommended)
