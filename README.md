# Premium Next.js Website 🚀

Ultra-premium, blazing-fast website built with Next.js 14, Framer Motion, and Tailwind CSS.

## Features ✨

- ⚡ **Next.js 14** - App Router, Server Components, Optimized builds
- 🎨 **Framer Motion** - Smooth, professional animations
- 💨 **Tailwind CSS** - Utility-first styling
- 🔧 **Biome** - Fast linter & formatter (replaces ESLint + Prettier)
- ♿ **Accessible** - WCAG AA compliant
- 🔍 **SEO Optimized** - Perfect metadata, semantic HTML
- 📱 **Responsive** - Mobile-first design
- 🎯 **99% Lighthouse Score** - Optimized for performance

## Getting Started 🏁

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Lint code with Biome
pnpm run lint

# Format code with Biome
pnpm run format

# Check and fix all issues
pnpm run check

# CI check (no write)
pnpm run ci

# Build for production
pnpm run build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## GitHub Setup 🐙

### Quick Start (Recommended)

```bash
# 1. Create new repo on GitHub (don't initialize with README)

# 2. Initialize git and add remote
git init
git add .
git commit -m "Initial commit: Premium Next.js site with Biome"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main

# 3. Setup Husky for pre-commit hooks (pnpm)
pnpm run prepare
echo 'pnpm exec lint-staged' > .husky/pre-commit

# 4. Commit the hook
git add .husky
git commit -m "chore: add pre-commit hooks"
git push

# 5. Test the pre-commit hook
echo "// test" >> app/page.tsx
git add .
git commit -m "test: verify pre-commit hook"
```

### What Happens Automatically

✅ **On Every Commit** (Pre-commit hook):
- Biome checks and fixes staged files
- Formats code automatically
- Organizes imports
- Prevents bad code from being committed

✅ **On Every Push** (GitHub Actions):
- Runs Biome CI check
- Runs TypeScript type checking
- Builds the project
- Fails if any issues found

✅ **On Pull Requests**:
- Same checks as push
- Must pass before merging
- Automated PR template

✅ **Weekly** (Dependabot):
- Checks for dependency updates
- Creates PRs for updates
- Groups related updates

### Manual Setup Steps

If the quick start doesn't work:

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Add GitHub remote (replace with your URL)
git remote add origin https://github.com/yourusername/repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main

# Setup Husky (pnpm)
pnpm install
pnpm run prepare
echo 'pnpm exec lint-staged' > .husky/pre-commit

# Commit the husky setup
git add .husky
git commit -m "chore: add husky pre-commit hooks"
git push
```

### Enable GitHub Actions

GitHub Actions will automatically run when you push. Make sure:

1. Go to your repo on GitHub
2. Click "Actions" tab
3. Click "I understand my workflows, go ahead and enable them"

### Protect Main Branch (Recommended)

1. Go to repo Settings → Branches
2. Add rule for `main` branch
3. Enable:
   - ✅ Require status checks to pass
   - ✅ Require branches to be up to date
   - ✅ Select "Code Quality" and "Build" checks
   - ✅ Require pull request reviews (optional)

## Deploy on Vercel 🚀

The easiest way to deploy:

1. Push your code to GitHub (see setup above)
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "Add New Project"
4. Import your repository
5. Vercel auto-detects Next.js - just click "Deploy"!

Vercel will automatically:
- Build your site with `npm run build`
- Deploy to global CDN
- Set up continuous deployment (auto-deploy on push)
- Provide preview deployments for PRs
- Give you analytics and insights

### Vercel + GitHub Integration

Once connected, every push to `main` deploys to production, and every PR gets a preview URL!

## Workflow Overview 🔄

```
1. Write code
   ↓
2. Save file → Biome formats automatically (if VSCode extension installed)
   ↓
3. git commit → Pre-commit hook runs Biome
   ↓
4. git push → GitHub Actions runs CI
   ↓
5. CI passes → Vercel deploys automatically
   ↓
6. 🎉 Live site updated!
```

## Project Structure 📁

```
premium-nextjs-site/
├── .github/
│   ├── workflows/
│   │   └── ci.yml           # GitHub Actions CI/CD
│   ├── dependabot.yml       # Automated dependency updates
│   └── PULL_REQUEST_TEMPLATE.md
├── .husky/
│   └── pre-commit           # Pre-commit hooks
├── app/
│   ├── page.tsx             # Main homepage component
│   ├── layout.tsx           # Root layout with metadata
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── .lintstagedrc.js         # Lint-staged config
├── biome.json               # Biome configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## Git Workflow 🌿

### Creating a New Feature

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push to GitHub
git push origin feature/your-feature-name

# Create PR on GitHub
# CI will run automatically
# Vercel will create preview deployment
```

### Commit Message Convention

Follow conventional commits:

```bash
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semicolons, etc
refactor: code restructuring
perf: performance improvements
test: adding tests
chore: maintenance tasks
```

## Performance Optimizations 🎯

- Server-side rendering for instant loads
- Automatic code splitting
- Image optimization with Next/Image
- Font optimization
- CSS minification
- JavaScript tree shaking

## Customization 🎨

### Colors
Edit the gradient colors in `app/page.tsx` or Tailwind config.

### Content
Update text, features, and stats in the component arrays.

### Animations
Modify Framer Motion variants for different effects.

## Biome Commands 🔧

```bash
# Lint only
pnpm run lint

# Format only
pnpm run format

# Lint + Format + Organize imports
pnpm run check

# CI mode (fails if issues found)
pnpm run ci
```

### Why Biome?
- **10-20x faster** than ESLint + Prettier
- **Zero configuration** - works out of the box
- **Single tool** - replaces ESLint, Prettier, and more
- **Better errors** - clearer, more actionable messages
- **Written in Rust** - blazing fast performance

## License 📄

MIT License - feel free to use for your projects!

---

Built with ❤️ using Next.js, Framer Motion, Tailwind CSS, and Biome
