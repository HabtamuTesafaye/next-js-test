# Local Event Management

A modern, production-ready React application for managing local events with a futuristic design and full theme support.

## 🚀 Features

- **Modern UI**: Built with Next.js 16, React 19, and Tailwind CSS
- **Theme Support**: Light/dark mode with smooth transitions
- **Component Library**: Reusable UI components with Material UI
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with clean layouts
- **Toast Notifications**: User feedback system with notistack
- **Production Ready**: Optimized build and deployment configuration

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx          # Landing page
│   ├── globals.css       # Global styles and Tailwind
│   └── global-error.tsx  # Error boundary
├── components/           # React Components
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx    # Button component
│   │   ├── Card.tsx      # Card container
│   │   ├── Input.tsx     # Form input
│   │   └── index.ts      # UI exports
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   ├── Providers.tsx # App providers
│   │   └── index.ts      # Layout exports
│   ├── landing/          # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── CTASection.tsx
│   │   └── index.ts      # Landing exports
│   ├── about/            # About page components
│   ├── features/         # Features page components
│   └── README.md         # Component documentation
├── contexts/            # React Contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/               # Custom Hooks
│   └── useToast.ts      # Toast notifications
├── lib/                 # Utilities and configurations
│   ├── utils/           # Helper functions
│   ├── constants/       # App constants
│   └── index.ts         # Library exports
├── types/               # TypeScript definitions
│   └── index.ts         # Type exports
└── index.ts            # Main application exports
```

## 🎨 Design System

### Colors

Custom Tailwind color palette with full theme support:

- **Primary**: Blue gradient (50-900 shades)
- **Secondary**: Purple gradient (50-900 shades)
- **Accent**: Green gradient (50-900 shades)
- **Neutral**: Gray scale (50-900 shades)

### Theme Classes

All components support light/dark themes:

```css
/* Light mode (default) */
bg-white text-neutral-900

/* Dark mode (with dark: prefix) */
dark:bg-neutral-800 dark:text-neutral-100
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: Material UI + Chakra UI
- **Icons**: Iconify React
- **Notifications**: Notistack
- **Build Tool**: Turbopack

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   yarn install
   ```

2. **Run development server**:

   ```bash
   yarn dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3001`

## 📱 Component Usage

### Clean Imports

```typescript
// UI Components
import { Button, Card, Input } from '@/components/ui';

// Layout Components
import { Header, Footer } from '@/components/layout';

// Page Sections
import { HeroSection, FeaturesSection } from '@/components/landing';

// Everything from main export
import { Button, Header, HeroSection, useToast } from '@/';
```

### Theme Usage

```typescript
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
```

## 🎯 Production Deployment

1. **Build the application**:

   ```bash
   yarn build
   ```

2. **Start production server**:
   ```bash
   yarn start
   ```

## 📋 Development Guidelines

- **Components**: PascalCase naming, TypeScript interfaces
- **Styling**: Tailwind classes with theme support
- **Imports**: Use index files for clean imports
- **Types**: Strict TypeScript with proper interfaces
- **Structure**: Feature-based organization

## 🔧 Configuration

- **Tailwind**: Custom colors in `tailwind.config.js`
- **Next.js**: Image domains in `next.config.ts`
- **Theme**: Class-based dark mode support

## 📄 License

This project is licensed under the MIT License.
