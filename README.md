# Mock API Server Landing Page

Landing page for [Mock API Server](https://github.com/Peter-Eloy/py-server) - a desktop application that lets developers build and test APIs without writing backend code.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve out
```

Visit `http://localhost:3000` for development.

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with SEO metadata
├── page.tsx                # Home page
├── globals.css             # Tailwind imports
└── components/
    ├── Hero.tsx            # Hero section with download buttons
    ├── Features.tsx        # Features grid
    ├── HowItWorks.tsx      # 3-step guide
    ├── Download.tsx        # OS detection & downloads
    └── Footer.tsx          # Footer with links
public/
├── robots.txt
└── sitemap.xml
```

## 🌐 Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

**Live site:** https://peter-eloy.github.io/Landing-py-server/

## 📝 Development

- **Tech Stack:** Next.js 14, TypeScript, Tailwind CSS
- **Deployment:** GitHub Pages (static export)
- **SEO:** Meta tags, Open Graph, Twitter Cards
- **Accessibility:** WCAG 2.1 AA compliant

## 📸 Assets Needed

Add these images to the `public/` folder:
- `screenshot.png` (1200x800px) - App screenshot
- `og-image.png` (1200x630px) - Social sharing image
- `favicon.ico` - Browser favicon
- `apple-touch-icon.png` (180x180px) - iOS icon

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.
