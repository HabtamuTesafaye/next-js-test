import { TextField } from '@mui/material';
import { forwardRef } from 'react';

interface InputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  [key: string]: any;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        label={label}
        error={error}
        helperText={helperText}
        variant='outlined'
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 3,
          },
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
