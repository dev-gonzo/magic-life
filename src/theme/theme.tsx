import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = (fontSize: number) => {
  return createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: colors.primary.main,
        light: colors.primary.light,
        dark: colors.primary.dark,
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
