import { Button as MuiButton } from '@mui/material';
import { forwardRef } from 'react';

interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  children: React.ReactNode;
  [key: string]: any;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', ...props }, ref) => {
    return (
      <MuiButton
        ref={ref}
        variant={variant}
        sx={{
          borderRadius: 3,
          fontWeight: 'semibold',
          textTransform: 'none',
          backgroundColor: variant === 'contained' ? 'var(--color-primary-500)' : undefined,
          color: variant === 'contained' ? 'white' : 'var(--color-primary-500)',
          borderColor: variant === 'outlined' ? 'var(--color-primary-500)' : undefined,
          '&:hover': {
            backgroundColor: variant === 'contained' ? 'var(--color-primary-600)' : undefined,
            borderColor: variant === 'outlined' ? 'var(--color-primary-600)' : undefined,
          },
        }}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
