import { StyleSx } from '../../../@types';
import { colors } from '../../../theme';
import { getStorageTheme } from '../../../helpers/getStorageTheme';

export const styleButtonFont: StyleSx = {
  color:
    getStorageTheme() == 'light'
      ? colors?.primary?.contrastText
      : colors?.darkMode?.contrastText,
};
