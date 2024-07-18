import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const themeDark = (fontSize: number) => {
  return createTheme({
    palette: {
      mode: 'dark',
      background: {
        paper: colors.darkMode.light,
      },
      primary: {
        main: colors.darkMode.main,
        light: colors.darkMode.light,
        dark: colors.darkMode.dark,
        contrastText: colors.primary.contrastText,
      },
      secondary: {
        main: colors.secondary.main,
        light: colors.secondary.light,
        dark: colors.secondary.dark,
        contrastText: colors.secondary.contrastText,
      },
    },
    typography: {
      fontSize: fontSize,
    },
  });
};
