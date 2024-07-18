import { create } from 'zustand';
import { Props } from './@types';
import { getStorageTheme } from '../../helpers/getStorageTheme';

export const useThemeMode = create<Props>((set) => ({
  themeMode: getStorageTheme(),
  fontSize: 12,

  toggleTheme: () =>
    set((state) => {
      const themeMode = state?.themeMode == 'light' ? 'dark' : 'light';
      localStorage?.setItem('themeMode', themeMode);
      return { themeMode: themeMode };
    }),

  decreaseFontSize: () => set((state) => ({ fontSize: state?.fontSize - 1 })),

  increaseFontSize: () => set((state) => ({ fontSize: state?.fontSize + 1 })),
}));
