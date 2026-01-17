# Deployment Instructions

## Prerequisites
- Node.js 20+ installed
- GitHub account
- Git repository: `https://github.com/Peter-Eloy/Landing-py-server`

## 1. Build the Static Export

```bash
# Navigate to project directory
cd ~/Documents/Repo/Landing-py-server

# Install dependencies (if not already done)
npm install

# Build static export
npm run build
```

This creates an `out/` directory with static HTML, CSS, and JavaScript files.

## 2. Test Locally

```bash
# Install serve (if not already installed)
npm install -g serve

# Serve the static files
npx serve out

# Or with serve installed globally
serve out
```

Visit `http://localhost:3000/Landing-py-server` in your browser to test the site.

## 3. Manual Deployment to GitHub Pages

### Option A: Using the gh-pages branch

```bash
# Navigate to the out directory
cd out

# Initialize git (if not already)
git init
git checkout -b gh-pages

# Add all files
git add .

# Commit
git commit -m "Deploy landing page"

# Add remote (if not already added)
git remote add origin https://github.com/Peter-Eloy/Landing-py-server.git

# Force push to gh-pages branch
git push -f origin gh-pages
```

### Option B: Using subtree deployment

```bash
# From the project root
git add .
git commit -m "Update landing page"

# Deploy out folder to gh-pages branch
git subtree push --prefix out origin gh-pages
```

## 4. Enable GitHub Pages

1. Go to your repository: `https://github.com/Peter-Eloy/Landing-py-server`
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

Your site will be available at: `https://peter-eloy.github.io/Landing-py-server/`

## 5. Automated Deployment with GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

After creating this file:
1. Commit and push to your `main` branch
2. Go to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy on every push to `main`

## 6. Add Screenshot (Important!)

Add a screenshot of your Mock API Server app:

```bash
# Recommended dimensions: 1200x800px
# File: public/screenshot.png
```

Also add an Open Graph image for social sharing:

```bash
# Recommended dimensions: 1200x630px
# File: public/og-image.png
```

## Troubleshooting

### 404 on GitHub Pages
- Ensure the `basePath` in `next.config.js` matches your repository name (`/Landing-py-server`)
- Check that files are in the `gh-pages` branch root

### Styles not loading
- Verify all asset paths use the basePath prefix: `/Landing-py-server/...`
- Check browser console for 404 errors

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

## Update Workflow

When making changes:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build and test production
npm run build
npx serve out

# 4. Commit and push (if using GitHub Actions)
git add .
git commit -m "Update landing page"
git push origin main

# Or manually deploy (see Option B above)
```

## Performance Checklist

- ✅ Add `public/favicon.ico`
- ✅ Add `public/apple-touch-icon.png` (180x180px)
- ✅ Add `public/screenshot.png` (1200x800px)
- ✅ Add `public/og-image.png` (1200x630px)
- ✅ Optimize images (WebP format recommended)
- ✅ Test mobile responsiveness
- ✅ Run Lighthouse audit (target: 90+ score)
