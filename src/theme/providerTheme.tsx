import { ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { useThemeMode } from '../storeds/useThemeMode';
import { theme, themeDark } from './';

type Props = {
  children: ReactNode | ReactNode[];
};

export const ProviderTheme = ({ children }: Props) => {
  const { themeMode, fontSize } = useThemeMode();

  return (
    <>
      <ThemeProvider
        theme={themeMode == 'dark' ? themeDark(fontSize) : theme(fontSize)}
      >
        {children}
      </ThemeProvider>
    </>
  );
};
