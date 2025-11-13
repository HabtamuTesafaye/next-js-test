import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import { forwardRef } from 'react';

interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, children, className, style, ...props }, ref) => {
    return (
      <MuiCard
        ref={ref}
        className={className}
        style={style}
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          transition: 'all 0.3s',
          '&:hover': {
            boxShadow: 6,
            transform: 'translateY(-2px)',
          },
        }}
        {...props}
      >
        {title && (
          <div style={{ padding: '16px', fontWeight: 'bold', fontSize: '1.5rem' }}>{title}</div>
        )}
        <CardContent>{children}</CardContent>
      </MuiCard>
    );
  }
);

Card.displayName = 'Card';

export default Card;
