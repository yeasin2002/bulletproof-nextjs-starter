<!-- 1.Product -->

# Product Overview

This is a Next.js starter template/boilerplate designed for rapid application development. The project provides a comprehensive foundation for building modern web applications with:

- Full-stack TypeScript setup
- Database integration with multiple provider support
- Internationalization (i18n) support
- Component library with shadcn/ui
- Testing infrastructure
- Docker containerization
- Storybook for component development

The template is designed to be production-ready with security headers, performance optimizations, and comprehensive tooling for development, testing, and deployment.

<!-- 2.Structure -->

# Project Structure & Organization

## Root Directory Structure

```
├── .kiro/              # Kiro AI assistant configuration
├── .storybook/         # Storybook configuration
├── config/             # Application configuration files
├── public/             # Static assets (images, icons, etc.)
├── src/                # Source code (main application)
├── tests/              # Test files (E2E and integration)
└── scripts/            # Build and deployment scripts
```

## Source Directory (`src/`)

The main application code follows a feature-based organization:

```
src/
├── app/                # Next.js App Router pages and layouts
│   ├── [locale]/       # Internationalized routes
│   └── api/            # API routes
├── components/         # Reusable React components
│   └── ui/             # shadcn/ui components
├── db/                 # Database configuration and schema
│   └── schema/         # Drizzle ORM schema definitions
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization configuration
│   └── locales/        # Translation files
├── lib/                # Utility libraries and configurations
├── models/             # Data models and types
├── stories/            # Storybook stories
├── styles/             # Global CSS and styling
├── templates/          # Email and other templates
│   └── email/          # Email templates
├── test/               # Test utilities and setup
├── types/              # TypeScript type definitions
├── utils/              # Helper functions and constants
├── validations/        # Zod validation schemas
├── env.ts              # Environment variable validation
└── middleware.ts       # Next.js middleware
```

## Key Conventions

### File Naming

- Use kebab-case for files and directories
- React components use PascalCase for the component name
- Use `.tsx` for React components, `.ts` for utilities
- Test files use `.test.ts` or `.test.tsx` suffix
- Story files use `.stories.ts` suffix

### Import Aliases

- `@/*` maps to `src/*` for internal imports
- `#/*` maps to project root for config files
- Use absolute imports with aliases instead of relative paths

### Component Organization

- UI components go in `src/components/ui/` (shadcn/ui)
- Feature-specific components in `src/components/`
- Each component should have its own file
- Export components as default exports

### Database Schema

- Schema files in `src/db/schema/`
- Use Drizzle ORM conventions
- Migrations generated in `./drizzle/` directory

### API Routes

- API routes in `src/app/api/`
- Follow RESTful conventions
- Use route handlers for different HTTP methods

### Styling

- Global styles in `src/styles/globals.css`
- Use Tailwind CSS classes
- CSS variables for theming in HSL format
- Component-specific styles using Tailwind

### Testing

- Unit tests alongside source files or in `src/test/`
- E2E tests in `tests/e2e/`
- Integration tests in `tests/integration/`
- Test setup in `src/test/setup.ts`

### Internationalization

- Locale files in `src/i18n/locales/`
- Route configuration in `src/i18n/routing.ts`
- Use `[locale]` dynamic route for i18n pages

### Environment & Configuration

- Environment variables validated in `src/env.ts`
- Use `.env.example` as template
- Configuration files in `config/` directory

<!-- 3. tech -->

# Tech Stack & Build System

## Core Framework

- **Next.js 15** with App Router and TypeScript
- **React 19** with Server Components (RSC)
- **TypeScript 5.8** with strict mode enabled

## UI & Styling

- **Tailwind CSS** with custom design system
- **shadcn/ui** components with Radix UI primitives
- **Lucide React** for icons
- **next-themes** for dark mode support
- CSS variables for theming with HSL color system

## Database & ORM

- **Drizzle ORM** with PostgreSQL dialect
- Multiple database provider support (Neon, PlanetScale, Turso, Xata, etc.)
- Database migrations via `drizzle-kit`

## Authentication

- **better-auth** for user authentication and management

## Internationalization

- **next-intl** for i18n support with locale routing

## Testing

- **Vitest** for unit testing with jsdom environment
- **Playwright** for E2E testing
- **Testing Library** for React component testing
- **Storybook** for component development and testing

## Code Quality

- **ESLint** with Next.js, TypeScript, and Prettier configs
- **Prettier** with Tailwind plugin for code formatting
- **TypeScript** strict mode with path aliases (`@/*` for src)

## Development Tools

- **Bun** as package manager (bun.lock present)
- **Docker** with multi-stage builds for development and production
- **Bundle Analyzer** for build analysis
- **Knip** for unused code detection
- **Codehawk** for code analysis

## Common Commands

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run type-check   # TypeScript type checking
```

### Database

```bash
npm run db:generate  # Generate database migrations
npm run db:migrate   # Apply database migrations
npm run db:studio    # Open Drizzle Studio
npm run db:seed      # Seed database
```

### Testing

```bash
npm run test         # Run unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
npm run test:e2e     # Run E2E tests
npm run test:e2e:ui  # Run E2E tests with UI
```

### Code Quality

```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run knip         # Check for unused code
```

### Docker

```bash
npm run docker:build # Build Docker image
npm run docker:dev   # Run development container
npm run docker:prod  # Run production container
npm run docker:test  # Run test container
```

### Storybook

```bash
npm run storybook       # Start Storybook dev server
npm run build-storybook # Build Storybook
```

<!-- 4.Rules/Code-Quality -->

# Code Quality & Standards

## Core Philosophy

Prioritizes developer experience through intelligent code generation that emphasizes clarity, maintainability, and performance. These rules ensure consistent, production-ready code that follows modern best practices.

## Key Principles

- **Developer-First**: Code should be readable and maintainable by humans
- **Type Safety**: Leverage TypeScript's full potential for error prevention
- **Performance**: Write efficient code that scales
- **Accessibility**: Ensure inclusive user experiences
- **Consistency**: Follow established patterns and conventions

## Before Writing Code

1. Analyze existing codebase patterns and conventions
2. Consider edge cases, error scenarios, and user accessibility
3. Validate against project-specific requirements
4. Ensure code is immediately runnable and testable

## Accessibility Standards

### Interactive Elements

- Always include `type` attribute for button elements
- Accompany `onClick` with keyboard handlers (`onKeyUp`, `onKeyDown`, or `onKeyPress`)
- Accompany `onMouseOver`/`onMouseOut` with `onFocus`/`onBlur`
- Make elements with interactive roles focusable
- Don't assign `tabIndex` to non-interactive elements
- Don't use positive integers for `tabIndex`

### ARIA and Semantic HTML

- Use semantic HTML elements instead of ARIA roles when possible
- Don't add ARIA roles to elements that don't support them
- Include all required ARIA attributes for elements with ARIA roles
- Don't set `aria-hidden="true"` on focusable elements
- Ensure label elements have text content and are associated with inputs
- Always include `lang` attribute on html element

### Content and Media

- Provide meaningful alt text for images (avoid "image", "picture", "photo")
- Always include `title` element for SVG elements
- Include caption tracks for audio and video elements
- Ensure anchors have accessible content
- Don't use distracting elements like `<marquee>` or `<blink>`

## TypeScript Best Practices

### Type Safety

- Use strict TypeScript configuration
- Prefer `unknown` over `any` when type is uncertain
- Use `as const` for literal types instead of type annotations
- Export types with `export type`, import with `import type`
- Don't use non-null assertions (`!`) unless absolutely necessary

### Modern TypeScript

- Use `T[]` or `Array<T>` consistently (prefer `T[]`)
- Don't use TypeScript enums (prefer const objects or union types)
- Don't use TypeScript namespaces
- Avoid parameter properties in class constructors
- Don't declare empty interfaces

## React & Next.js Patterns

### Component Design

- Don't define components inside other components
- Use default exports for components
- Don't pass children as props (use React children pattern)
- Don't use Array index as keys in lists
- Use `<>...</>` instead of `<Fragment>...</Fragment>`

### Hooks and State

- Call hooks only at the top level of components
- Include all dependencies in hook dependency arrays
- Don't use the return value of `React.render`
- Don't destructure props inside JSX components

### Next.js Specific

- Use `next/image` instead of `<img>` elements
- Use `next/head` for metadata (not in `_document.js`)
- Don't import `next/document` outside of `pages/_document.jsx`
- Leverage App Router patterns for new projects

## Code Quality & Performance

### Function Design

- Use arrow functions for inline functions and callbacks
- Keep functions focused and under reasonable complexity
- Use early returns to reduce nesting
- Don't use unnecessary constructors or empty functions

### Data Handling

- Use `for...of` instead of `Array.forEach` for better performance
- Use `.flatMap()` instead of `.map().flat()`
- Use object spread instead of `Object.assign()` for new objects
- Use optional chaining (`?.`) instead of chained logical expressions

### Error Handling

- Always handle Promise rejections appropriately
- Use proper error boundaries in React applications
- Don't swallow errors silently
- Provide meaningful error messages

```typescript
// ✅ Good: Comprehensive error handling
const fetchUserData = async (id: string) => {
  try {
    const response = await api.getUser(id)
    return { success: true, data: response }
  } catch (error) {
    console.error('Failed to fetch user:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// ❌ Bad: Swallowing errors
const fetchUserData = async (id: string) => {
  try {
    return await api.getUser(id)
  } catch (e) {
    console.log(e)
  }
}
```

## Modern JavaScript Practices

### Syntax and Style

- Use `const` for variables that don't change, `let` for those that do
- Never use `var`
- Use template literals for string interpolation
- Use destructuring for object and array access
- Use shorthand property syntax in objects

### Built-in Methods

- Use `Date.now()` instead of `new Date().getTime()`
- Use `Number.isNaN()` instead of global `isNaN()`
- Use `Array.isArray()` instead of `instanceof Array`
- Use `String.startsWith()`/`endsWith()` instead of regex when appropriate

### Async/Await

- Don't use `await` inside loops (use `Promise.all()` for parallel execution)
- Don't use async functions as Promise executors
- Always handle async errors appropriately

## Security & Safety

### Data Protection

- Don't hardcode sensitive data (API keys, tokens, passwords)
- Validate and sanitize user inputs
- Use environment variables for configuration
- Don't use `eval()` or similar dynamic code execution

### Safe Practices

- Don't use `target="_blank"` without `rel="noopener"`
- Validate external data before processing
- Use HTTPS for all external requests
- Implement proper CORS policies

## Testing Standards

### Test Structure

- Place assertion functions inside `it()` blocks
- Don't use focused tests (`fit`, `fdescribe`) in committed code
- Don't use disabled tests without good reason
- Write descriptive test names that explain the expected behavior

### Test Quality

- Test both happy path and error scenarios
- Mock external dependencies appropriately
- Use proper setup and teardown
- Maintain test isolation

## Database & API Patterns

### Drizzle ORM

- Use schema files in `src/db/schema/`
- Follow Drizzle naming conventions
- Use migrations for schema changes
- Implement proper connection pooling

### API Design

- Follow RESTful conventions
- Use proper HTTP status codes
- Implement consistent error response format
- Use route handlers for different HTTP methods
- Validate request data with Zod schemas

## Performance Optimization

### Bundle Size

- Use dynamic imports for code splitting
- Avoid importing entire libraries when only specific functions are needed
- Use tree-shaking friendly imports
- Optimize images and assets

### Runtime Performance

- Minimize re-renders in React components
- Use React.memo() and useMemo() judiciously
- Implement proper loading states
- Use efficient data structures

## Common Anti-Patterns to Avoid

### Code Smells

- Don't use magic numbers or strings
- Avoid deeply nested code
- Don't create overly complex functions
- Avoid duplicate code

### React Anti-Patterns

- Don't mutate props or state directly
- Don't use array indices as keys
- Don't call hooks conditionally
- Don't use refs for everything

### TypeScript Anti-Patterns

- Don't use `any` type
- Don't ignore TypeScript errors with `@ts-ignore`
- Don't use function overloads unnecessarily
- Don't create overly complex type definitions
