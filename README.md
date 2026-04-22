# 🚀 Next.js Starter Template

A production-ready Next.js boilerplate with modern tooling, comprehensive testing, and enterprise-grade starter features.
### ⭐ **Star this repository if it helped you!**

> 💫 **Built with love by [Yeasin](https://github.com/yeasin2002)** and other contributor

##### If you found any issue or have any suggestion, please open an [issue](https://github.com/yeasin2002/bulletproof-nextjs-starter/issues) or a [pull request](https://github.com/yeasin2002/bulletproof-nextjs-starter/pulls).

##### Feel free to reach out to me on [Linkedin](https://www.linkedin.com/in/yeasin2002/) or [Gmail](mailto:mdkawsarislam2002@gmail.com) if you have any questions or feedback.

## ✨ Features

### 🏗️ **Core Framework**
- ⚡ **Next.js 15** with App Router & Server Components
- 🔷 **TypeScript 5.8** with strict configuration
- ⚛️ **React 19** with latest features

### 🎨 **UI & Styling**
- 🎯 **Tailwind CSS** with custom design system
- 🧩 **shadcn/ui** components with Radix UI primitives
- 🌙 **Dark mode** support with next-themes
- 🎭 **Lucide React** icons

### 🗄️ **Database & ORM**
- 🐘 **Drizzle ORM** with PostgreSQL support
- 🌐 **Multi-provider** support (Neon, PlanetScale, Turso, Xata)
- 🔄 **Database migrations** and seeding
- 🎛️ **Drizzle Studio** for database management

### 🔐 **Authentication**
- 👤 **Authentication-ready** starter types, validations, and constants
- 🔒 **Starter** auth test scaffolding for future secure flows
- 📧 **Email templates** with React Email

### 🌍 **Internationalization**
- 🗣️ **next-intl** for i18n support
- 🌐 **Locale routing** and translations

### 🧪 **Testing Suite**
- ⚡ **Vitest** setup for unit testing with jsdom
- 🎭 **Playwright** setup for E2E testing
- 🧪 **Testing Library** for React components
- 📚 **Storybook** for component development
- 📊 **Coverage reports** with v8

### 🔧 **Development Tools**
- 🎯 **ESLint** with Next.js & TypeScript configs
- 💅 **Prettier** with Tailwind plugin
- 🔍 **Knip** for unused code detection
- 🦅 **Codehawk** for code analysis
- 📦 **Bundle Analyzer** for optimization

### 🐳 **DevOps & Deployment**
<!-- - 🐳 **Docker** with multi-stage builds -->
<!-- - 🔄 **Docker Compose** for development/production -->
- 🏥 **Health checks** and monitoring
- 📈 **Performance monitoring** with React Scan

### 🛡️ **Security & Performance**
- 🔒 **Security headers** configured
<!-- - 🚀 **Standalone output** for Docker -->
- 📊 **OpenTelemetry** integration
- ⚡ **Edge runtime** support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- pnpm (recommended)
- PostgreSQL database
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/yeasin2002/bulletproof-nextjs-starter.git
cd bulletproof-nextjs-starter

# Install dependencies
pnpm install
# or
npm install
# or
bun install

# Copy environment variables
cp .env.example .env  # Linux/Mac
# copy .env.example .env  # Windows

# Set up your database URL and other environment variables
# Edit .env file with your configuration

# Generate database schema
npm run db:generate

# Run database migrations
npm run db:migrate

# Seed the database (optional)
npm run db:seed

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## 📜 Available Scripts

### 🔧 **Development**
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
npm run clean        # Clean build artifacts
```

### 🗄️ **Database**
```bash
npm run db:generate  # Generate database migrations
npm run db:migrate   # Apply database migrations
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database with sample data
```

### 🧪 **Testing**
```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage report
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### 💅 **Code Quality**
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues automatically
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
npm run codehawk     # Analyze code quality
```

<!-- ### 🐳 **Docker**
```bash
npm run docker:build # Build Docker image
npm run docker:dev   # Run development container (Linux/Mac)
scripts/docker-dev.bat # Windows
npm run docker:prod  # Run production container (Linux/Mac)
npm run docker:test  # Run test container (Linux/Mac)

# Windows users can also use:
# scripts/docker-dev.bat  # Run development container (Windows)
``` -->

### 📚 **Storybook**
```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook for production
```

### 📊 **Analysis**
```bash
npm run analyze      # Analyze bundle size
```

## 📁 Project Structure

```
├── .agents/             # Agent skills and workflow configuration
├── .github/             # GitHub workflows and repository settings
├── .storybook/          # Storybook configuration
├── public/              # Static assets
├── scripts/             # Build and deployment scripts
├── src/
│   ├── app/             # Next.js App Router pages
│   ├── components/      # Reusable React components
│   │   └── ui/          # shadcn/ui components
│   ├── db/              # Database configuration & schema
│   ├── hooks/           # Custom React hooks
│   ├── i18n/            # Internationalization
│   ├── lib/             # Utility libraries
│   ├── styles/          # Global CSS
│   ├── types/           # TypeScript definitions
│   └── utils/           # Helper functions
├── tests/               # E2E and integration tests
├── pnpm-lock.yaml       # pnpm lockfile
└── pnpm-workspace.yaml  # pnpm workspace configuration
```

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:
- Database connection
- Optional: Sentry, PostHog, Stripe, etc.

### Database Setup
1. Set your `DATABASE_URL` in `.env`
2. Run migrations: `npm run db:migrate`
3. Optional: Seed data: `npm run db:seed`

### Authentication
- Authentication-ready starter scaffolding is included for types, validations, constants, tests, and email templates.
- Complete auth pages and runtime integration are not wired up yet in the current app.

## 🚀 Deployment

<!-- ### Docker Deployment
```bash
# Build production image
npm run docker:build

# Run production container
npm run docker:prod
``` -->

### Vercel Deployment
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
---
