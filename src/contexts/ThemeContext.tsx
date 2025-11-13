'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const lightTheme = {
  // Background colors
  background: '#ffffff',
  surface: '#f5f5f5',
  'surface-secondary': '#e5e5e5',

  // Text colors
  foreground: '#171717',
  'text-primary': '#171717',
  'text-secondary': '#404040',
  'text-muted': '#737373',

  // Brand colors
  primary: '#3b82f6',
  secondary: '#a855f7',
  accent: '#22c55e',

  // Neutral colors
  neutral: '#737373',
  'neutral-light': '#a3a3a3',
  border: '#d4d4d4',
};

export const darkTheme = {
  // Background colors
  background: '#0a0a0a',
  surface: '#1a1a1a',
  'surface-secondary': '#262626',

  // Text colors
  foreground: '#ededed',
  'text-primary': '#ededed',
  'text-secondary': '#d4d4d4',
  'text-muted': '#a3a3a3',

  // Brand colors
  primary: '#3b82f6',
  secondary: '#a855f7',
  accent: '#22c55e',

  // Neutral colors
  neutral: '#a3a3a3',
  'neutral-light': '#d4d4d4',
  border: '#404040',
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const useThemeColors = () => {
  const { theme } = useTheme();
  return theme === 'dark' ? darkTheme : lightTheme;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme first
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
