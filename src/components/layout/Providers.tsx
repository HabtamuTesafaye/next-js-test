'use client';

import { useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b82f6', // primary-500
    },
    secondary: {
      main: '#a855f7', // secondary-500
    },
  },
});

interface ProvidersProps {
  children: React.ReactNode;
}

function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    console.log('Theme applied:', theme, 'HTML classes:', root.className);
  }, [theme]);

  return <>{children}</>;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <CustomThemeProvider>
      <ThemeWrapper>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
        </ThemeProvider>
      </ThemeWrapper>
    </CustomThemeProvider>
  );
}
