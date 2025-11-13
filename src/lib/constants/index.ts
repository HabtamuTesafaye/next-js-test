/**
 * Application constants
 */

export const APP_CONFIG = {
  name: 'Local Event Management',
  description: 'Revolutionize how you organize and manage local events',
  version: '1.0.0',
} as const;

export const THEME_COLORS = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  secondary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
} as const;

export const NAVIGATION_LINKS = [
  { href: '#home', label: 'Home', active: true },
  { href: '#features', label: 'Features', active: false },
  { href: '#about', label: 'About', active: false },
  { href: '#contact', label: 'Contact', active: false },
] as const;
