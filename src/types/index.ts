/**
 * TypeScript type definitions
 */

export type Theme = 'light' | 'dark';

export interface NavigationLink {
  href: string;
  label: string;
  active: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export interface CardProps extends ComponentProps {
  title?: string;
  elevation?: number;
}

export interface InputProps extends ComponentProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
