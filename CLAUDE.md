# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for **Mock API Server**, a desktop application that lets developers build and test APIs without writing backend code. The app runs as a system tray utility on Windows and macOS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (no external UI dependencies)
- **Static export** for GitHub Pages deployment
- No external dependencies for UI components - use Tailwind utilities only

## Development Commands

### Initial Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

### Build and Export
```bash
# Build static export for GitHub Pages
npm run build

# Preview production build locally
npm run start
```

### Code Quality
```bash
# Type checking
npx tsc --noEmit

# Lint code
npm run lint
```

## File Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page
├── globals.css             # Tailwind imports
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Download.tsx
│   └── Footer.tsx
public/
├── screenshot.png          # Optional: app screenshot
├── robots.txt
└── sitemap.xml
```

## Architecture and Code Standards

### Component Structure
- **Functional components** with hooks only
- **Server components by default** - only use `'use client'` when absolutely necessary (interactive features, browser APIs)
- TypeScript strict mode enabled
- All components in `app/` or `app/components/` directories

### Styling Guidelines
- **Tailwind utility classes only** - no custom CSS files
- Mobile-first responsive design with breakpoints: `sm`, `md`, `lg`, `xl`
- Dark mode preferred (dark background, accent colors for CTAs)
- System fonts or Inter/Roboto for typography

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Descriptive `aria-labels` for all buttons and interactive elements
- Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<article>`)
- Descriptive alt text for all images

### TypeScript Standards
- Strict mode enabled
- Explicit types for props and function returns
- No `any` types
- Comments for complex logic only

## Content Structure Requirements

The landing page must include these sections in order:

### 1. Hero Section
- **Headline**: "Mock API Server"
- **Subheadline**: "Build and test APIs without backend code"
- **Primary CTA**: Download buttons for Windows (.exe) and macOS (.dmg/.app)
- GitHub stars badge (if available)

### 2. Features Section
Highlight these key features:
- System tray app (runs in background)
- No coding required (visual admin panel)
- JSON + file responses
- Multiple projects/endpoints support
- Local development (default port 5000)

### 3. How It Works
3-step guide:
1. Download and install
2. Create API endpoints in admin panel
3. Start testing immediately

### 4. Download Section
- **Auto-detect OS** and highlight appropriate download button
- Manual download links for all platforms
- Display version number
- Link to GitHub Releases page

### 5. Footer
- MIT License notice
- GitHub repository link
- Developer social links: X (Twitter) and Instagram handles (use placeholders: `@devhandle`)
- "Built with Python + Flask + PyInstaller" attribution

## Download URLs Pattern

Use these URL patterns (replace `[USERNAME]` with actual GitHub username):

```typescript
const DOWNLOADS = {
  windows: 'https://github.com/[USERNAME]/py-server/releases/latest/download/MockAPIServer.exe',
  macos: 'https://github.com/[USERNAME]/py-server/releases/latest/download/MockAPIServer.dmg'
};
```

## SEO Requirements

### Meta Tags (in app/layout.tsx)
```typescript
export const metadata = {
  title: 'Mock API Server - Build and test APIs without backend code',
  description: 'Desktop app for developers to create mock APIs instantly. No coding required. System tray utility for Windows and macOS.',
  keywords: ['mock API server', 'API testing tool', 'local API simulator', 'API development', 'REST API mock'],
  // Add og:image, twitter:card, etc.
};
```

### Performance Targets
- Page load time: < 3 seconds
- Lighthouse score: 90+ for all categories
- Optimized images (use Next.js Image component where applicable for static export)

### Required Files
- `public/sitemap.xml` - Site structure
- `public/robots.txt` - Search engine directives
- Social preview image for Open Graph tags

## Static Export Configuration

In `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
};
```

## Design System

### Color Palette
- Dark background preferred (#0a0a0a, #111, or similar)
- Accent colors for CTAs (blue/purple gradients or vibrant single colors)
- Text: White/off-white for headings, gray for body text

### Typography
- Use system fonts or import Inter/Roboto
- Clear hierarchy: Large headings, readable body text (16px+)

### Component Patterns
- Buttons: Clear hover states, accessible focus states
- Sections: Adequate padding, clear visual separation
- Responsive grid: Use Tailwind's grid system for features/content

## GitHub Pages Deployment

- Add `output: 'export'` to next.config.js
- Set `basePath` if repo is not at root (e.g., `/py-server`)
- Generate static files with `npm run build`
- Deploy `/out` folder to gh-pages branch

The `out/` directory (generated by `npm run build`) should be deployed to GitHub Pages. Ensure:
- `basePath` is configured if deploying to a subdirectory
- All asset paths are relative or use the correct base path
- 404 page is included for client-side routing (if needed)

## When Coding

- Ask for GitHub username before generating download URLs
- Ask for social media handles (X/Instagram) before adding footer links
- Suggest placeholder screenshot dimensions (1200x800px) if none provided
- Optimize images (WebP format, lazy loading)
- Test mobile responsiveness
- Validate HTML semantics

## What NOT to Do

- Don't use external component libraries (shadcn, MUI, etc.)
- Don't add animations/motion libraries unless requested
- Don't implement analytics/tracking without permission
- Don't hardcode personal info (ask first)

## Important Constraints

1. **No external UI libraries** - Use only Tailwind CSS
2. **No server-side features** - Must work as static export
3. **No external API calls at build time** - All content must be static
4. **Browser compatibility** - Modern browsers only (ES2020+)
